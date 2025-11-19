import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para o banco de dados
export interface User {
  id: string;
  email: string;
  telefone?: string;
  created_at: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  nome?: string;
  idade?: number;
  descricao?: string;
  foto_perfil: string;
}

export interface UserStats {
  id: string;
  user_id: string;
  xp: number;
  medalhas: string;
  cursos_concluidos: number;
  atividades_completadas: number;
}

export interface UserSubscription {
  id: string;
  user_id: string;
  plano: string;
  data_inicio: string;
  data_fim?: string;
  ativo: boolean;
}

export interface CompleteUser extends User {
  nome?: string;
  idade?: number;
  descricao?: string;
  foto_perfil: string;
  pontos: number;
  medalha_atual: string;
  cursos_concluidos: number;
  plano_atual: string;
}
