// Tipos do sistema Elite Life

export type PlanType = 'free' | 'pro' | 'pro-plus' | 'elite' | 'anual' | 'influencer-pro';

export type MedalType = 'iniciante' | 'bronze' | 'prata' | 'ouro' | 'diamante';

export interface User {
  id: string;
  email: string;
  nome: string;
  idade?: number;
  descricao?: string;
  foto_perfil?: string;
  telefone?: string;
  plano_atual: PlanType;
  pontos: number;
  xp: number;
  medalha_atual: MedalType;
  cursos_concluidos: number;
  created_at: string;
}

export interface CourseProgress {
  courseId: string;
  progress: number; // 0-100
  completedLessons: string[];
  completedActivities: string[];
  completedQuizzes: string[];
  completedModules: string[];
  lastAccessed: string;
  xpEarned: number;
}

export interface UserProgress {
  userId: string;
  totalXP: number;
  totalPoints: number;
  coursesCompleted: number;
  coursesInProgress: number;
  lessonsCompleted: number;
  activitiesCompleted: number;
  quizzesCompleted: number;
  modulesCompleted: number;
  studyHours: number;
  currentMedal: MedalType;
  courses: CourseProgress[];
}

export interface RankingEntry {
  userId: string;
  nome: string;
  foto_perfil?: string;
  xp: number;
  position: number;
  medalha: MedalType;
}

// Configurações de XP
export const XP_CONFIG = {
  LESSON: 10,
  ACTIVITY: 30,
  MODULE: 200,
  COURSE: 500,
  QUIZ_PASS: 50,
};

// Configurações de Medalhas
export const MEDAL_CONFIG = {
  INICIANTE: 0,
  BRONZE: 1,
  PRATA: 3,
  OURO: 7,
  DIAMANTE: 15,
};

// Configurações de Planos
export const PLAN_CONFIG = {
  free: {
    name: 'Gratuito',
    features: ['Cursos básicos', 'Conteúdo limitado'],
  },
  pro: {
    name: 'Pro',
    features: ['Cursos básicos', 'Alguns cursos avançados'],
  },
  'pro-plus': {
    name: 'Pro Plus',
    features: ['Todos os cursos Pro', 'Cursos avançados', 'Suporte prioritário'],
  },
  elite: {
    name: 'Elite',
    features: ['Todos os cursos', 'Conteúdo exclusivo', 'Suporte VIP', 'Certificados'],
  },
  anual: {
    name: 'Anual',
    features: ['Todos os recursos Elite', 'Desconto anual', 'Bônus exclusivos'],
  },
  'influencer-pro': {
    name: 'Influencer Pro',
    features: [
      'Todos os recursos Elite',
      'IA de Hashtags',
      '400 Dietas',
      'Criador de Thumbnails',
      'Scripts Automáticos',
      'Agenda Personalizada',
    ],
  },
};
