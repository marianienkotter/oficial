/**
 * Sistema de Backup e Restauração - Elite Life
 * 
 * Este sistema gerencia o backup automático e restauração de dados do usuário
 */

interface BackupData {
  userId: string;
  timestamp: string;
  data: {
    pontos: number;
    medalhas: string[];
    cursos_concluidos: number;
    progresso_cursos: Record<string, number>;
    progresso_videos: Record<string, boolean>;
    progresso_quizzes: Record<string, { score: number; passed: boolean; attempts: number }>;
    atividades_completadas: number;
    perfil: {
      nome?: string;
      idade?: number;
      descricao?: string;
      foto_perfil?: string;
      telefone?: string;
    };
  };
}

class BackupSystem {
  private readonly BACKUP_KEY = "elite_life_backup";
  private readonly BACKUP_HISTORY_KEY = "elite_life_backup_history";
  private readonly MAX_BACKUPS = 10;

  /**
   * Salva backup dos dados do usuário
   */
  async saveBackup(userId: string, userData: any): Promise<boolean> {
    try {
      const backup: BackupData = {
        userId,
        timestamp: new Date().toISOString(),
        data: {
          pontos: userData.pontos || 0,
          medalhas: userData.medalhas || [],
          cursos_concluidos: userData.cursos_concluidos || 0,
          progresso_cursos: userData.progresso_cursos || {},
          progresso_videos: userData.progresso_videos || {},
          progresso_quizzes: userData.progresso_quizzes || {},
          atividades_completadas: userData.atividades_completadas || 0,
          perfil: {
            nome: userData.nome,
            idade: userData.idade,
            descricao: userData.descricao,
            foto_perfil: userData.foto_perfil,
            telefone: userData.telefone,
          },
        },
      };

      // Salvar backup atual
      localStorage.setItem(this.BACKUP_KEY, JSON.stringify(backup));

      // Adicionar ao histórico
      this.addToHistory(backup);

      console.log("✅ Backup salvo com sucesso:", backup.timestamp);
      return true;
    } catch (error) {
      console.error("❌ Erro ao salvar backup:", error);
      return false;
    }
  }

  /**
   * Adiciona backup ao histórico
   */
  private addToHistory(backup: BackupData): void {
    try {
      const history = this.getBackupHistory();
      history.unshift(backup);

      // Manter apenas os últimos MAX_BACKUPS
      if (history.length > this.MAX_BACKUPS) {
        history.splice(this.MAX_BACKUPS);
      }

      localStorage.setItem(this.BACKUP_HISTORY_KEY, JSON.stringify(history));
    } catch (error) {
      console.error("❌ Erro ao adicionar ao histórico:", error);
    }
  }

  /**
   * Restaura backup mais recente
   */
  async restoreBackup(userId: string): Promise<BackupData | null> {
    try {
      const backupStr = localStorage.getItem(this.BACKUP_KEY);
      if (!backupStr) {
        console.log("⚠️ Nenhum backup encontrado");
        return null;
      }

      const backup: BackupData = JSON.parse(backupStr);

      // Verificar se o backup é do usuário correto
      if (backup.userId !== userId) {
        console.log("⚠️ Backup não pertence ao usuário atual");
        return null;
      }

      console.log("✅ Backup restaurado com sucesso:", backup.timestamp);
      return backup;
    } catch (error) {
      console.error("❌ Erro ao restaurar backup:", error);
      return null;
    }
  }

  /**
   * Obtém histórico de backups
   */
  getBackupHistory(): BackupData[] {
    try {
      const historyStr = localStorage.getItem(this.BACKUP_HISTORY_KEY);
      if (!historyStr) return [];
      return JSON.parse(historyStr);
    } catch (error) {
      console.error("❌ Erro ao obter histórico:", error);
      return [];
    }
  }

  /**
   * Restaura backup específico do histórico
   */
  async restoreFromHistory(timestamp: string, userId: string): Promise<BackupData | null> {
    try {
      const history = this.getBackupHistory();
      const backup = history.find(
        (b) => b.timestamp === timestamp && b.userId === userId
      );

      if (!backup) {
        console.log("⚠️ Backup não encontrado no histórico");
        return null;
      }

      console.log("✅ Backup do histórico restaurado:", timestamp);
      return backup;
    } catch (error) {
      console.error("❌ Erro ao restaurar do histórico:", error);
      return null;
    }
  }

  /**
   * Limpa todos os backups
   */
  clearAllBackups(): void {
    try {
      localStorage.removeItem(this.BACKUP_KEY);
      localStorage.removeItem(this.BACKUP_HISTORY_KEY);
      console.log("✅ Todos os backups foram limpos");
    } catch (error) {
      console.error("❌ Erro ao limpar backups:", error);
    }
  }

  /**
   * Backup automático em eventos específicos
   */
  async autoBackup(userId: string, userData: any, event: "login" | "logout" | "action"): Promise<void> {
    console.log(`🔄 Backup automático iniciado (${event})`);
    await this.saveBackup(userId, userData);
  }

  /**
   * Sincroniza dados com o servidor (se disponível)
   */
  async syncWithServer(userId: string, userData: any): Promise<boolean> {
    try {
      // TODO: Implementar sincronização com Supabase quando disponível
      console.log("🔄 Sincronização com servidor (em desenvolvimento)");
      return true;
    } catch (error) {
      console.error("❌ Erro na sincronização:", error);
      return false;
    }
  }

  /**
   * Verifica integridade do backup
   */
  verifyBackupIntegrity(backup: BackupData): boolean {
    try {
      return (
        backup.userId !== undefined &&
        backup.timestamp !== undefined &&
        backup.data !== undefined &&
        backup.data.pontos !== undefined
      );
    } catch (error) {
      return false;
    }
  }

  /**
   * Exporta backup como JSON
   */
  exportBackup(userId: string): string | null {
    try {
      const backup = localStorage.getItem(this.BACKUP_KEY);
      if (!backup) return null;

      const backupData: BackupData = JSON.parse(backup);
      if (backupData.userId !== userId) return null;

      return JSON.stringify(backupData, null, 2);
    } catch (error) {
      console.error("❌ Erro ao exportar backup:", error);
      return null;
    }
  }

  /**
   * Importa backup de JSON
   */
  async importBackup(jsonString: string, userId: string): Promise<boolean> {
    try {
      const backup: BackupData = JSON.parse(jsonString);

      // Verificar integridade
      if (!this.verifyBackupIntegrity(backup)) {
        console.error("❌ Backup inválido");
        return false;
      }

      // Verificar se pertence ao usuário
      if (backup.userId !== userId) {
        console.error("❌ Backup não pertence ao usuário");
        return false;
      }

      // Salvar backup importado
      localStorage.setItem(this.BACKUP_KEY, JSON.stringify(backup));
      this.addToHistory(backup);

      console.log("✅ Backup importado com sucesso");
      return true;
    } catch (error) {
      console.error("❌ Erro ao importar backup:", error);
      return false;
    }
  }
}

// Instância singleton
export const backupSystem = new BackupSystem();

// Hooks para integração com React
export function useBackupSystem() {
  const saveBackup = async (userId: string, userData: any) => {
    return await backupSystem.saveBackup(userId, userData);
  };

  const restoreBackup = async (userId: string) => {
    return await backupSystem.restoreBackup(userId);
  };

  const autoBackup = async (userId: string, userData: any, event: "login" | "logout" | "action") => {
    return await backupSystem.autoBackup(userId, userData, event);
  };

  const getHistory = () => {
    return backupSystem.getBackupHistory();
  };

  const exportBackup = (userId: string) => {
    return backupSystem.exportBackup(userId);
  };

  const importBackup = async (jsonString: string, userId: string) => {
    return await backupSystem.importBackup(jsonString, userId);
  };

  return {
    saveBackup,
    restoreBackup,
    autoBackup,
    getHistory,
    exportBackup,
    importBackup,
  };
}
