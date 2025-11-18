export type NotificationType = 
  | 'boas_vindas'
  | 'assinatura'
  | 'desconto'
  | 'alerta'
  | 'sistema'
  | 'promocao'
  | 'lembrete'
  | 'quiz'
  | 'estatisticas'
  | 'atualizacao';

export type NotificationAction = 
  | 'abrir_inicio'
  | 'abrir_planos'
  | 'abrir_cupom'
  | 'abrir_cursos'
  | 'abrir_quizzes'
  | 'abrir_estatisticas'
  | 'abrir_seguranca'
  | 'recarregar';

export interface Notification {
  id: string;
  user_id: string;
  titulo: string;
  mensagem: string;
  tipo: NotificationType;
  data_envio: Date;
  lido: boolean;
  acao?: NotificationAction;
  metadata?: Record<string, any>;
}

export interface NotificationFilter {
  label: string;
  value: NotificationType | 'todas' | 'importantes';
}
