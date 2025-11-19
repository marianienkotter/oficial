// 🎯 Sistema de Atividades - Elite Life

export type ActivityType = 'multiple_choice' | 'essay' | 'upload' | 'practical';
export type ActivityStatus = 'not_started' | 'in_progress' | 'completed' | 'pending_review';
export type PlanType = 'free' | 'pro' | 'pro_plus' | 'elite' | 'annual';

export interface ActivityQuestion {
  id: string;
  question: string;
  type: ActivityType;
  options?: string[]; // Para multiple choice
  correctAnswer?: number; // Para correção automática
  maxWords?: number; // Para essays
  acceptedFormats?: string[]; // Para uploads
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  duration: number; // em minutos
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Elite';
  points: number;
  xpReward: number;
  questions: ActivityQuestion[];
  requiredPlan: PlanType;
  category: string;
  autoCorrect: boolean; // Se pode ser corrigida automaticamente
}

export interface ActivityProgress {
  activityId: string;
  userId: string;
  answers: (string | number)[]; // Respostas podem ser texto ou índice
  score?: number; // Apenas se auto-corrigida
  status: ActivityStatus;
  completedAt?: Date;
  xpEarned: number;
  feedback?: string; // Feedback do instrutor
}

// 🎯 Dados das Atividades
export const activities: Activity[] = [
  {
    id: 'activity-1',
    title: 'Crie sua Primeira Campanha de Marketing',
    description: 'Desenvolva uma campanha completa de marketing digital para um produto fictício.',
    duration: 30,
    difficulty: 'Iniciante',
    points: 150,
    xpReward: 75,
    category: 'Marketing',
    requiredPlan: 'free',
    autoCorrect: false,
    questions: [
      {
        id: 'q1',
        question: 'Descreva o produto ou serviço que você escolheu para a campanha (mínimo 100 palavras)',
        type: 'essay',
        maxWords: 500
      },
      {
        id: 'q2',
        question: 'Qual é o público-alvo desta campanha?',
        type: 'multiple_choice',
        options: [
          'Jovens de 18-25 anos interessados em tecnologia',
          'Profissionais de 30-45 anos buscando crescimento',
          'Empreendedores iniciantes',
          'Todos os públicos'
        ],
        correctAnswer: 0
      },
      {
        id: 'q3',
        question: 'Descreva 3 estratégias de marketing que você usaria nesta campanha',
        type: 'essay',
        maxWords: 300
      }
    ]
  },
  {
    id: 'activity-2',
    title: 'Análise de Concorrência',
    description: 'Analise 3 concorrentes do seu nicho e identifique oportunidades de mercado.',
    duration: 45,
    difficulty: 'Intermediário',
    points: 200,
    xpReward: 100,
    category: 'Estratégia',
    requiredPlan: 'pro',
    autoCorrect: false,
    questions: [
      {
        id: 'q1',
        question: 'Liste 3 concorrentes diretos e suas principais características',
        type: 'essay',
        maxWords: 400
      },
      {
        id: 'q2',
        question: 'Qual a principal vantagem competitiva que você identificou?',
        type: 'multiple_choice',
        options: [
          'Preço mais baixo',
          'Qualidade superior',
          'Atendimento diferenciado',
          'Inovação tecnológica'
        ],
        correctAnswer: 1
      },
      {
        id: 'q3',
        question: 'Faça upload de uma planilha comparativa (formato: .xlsx, .csv)',
        type: 'upload',
        acceptedFormats: ['.xlsx', '.csv', '.pdf']
      }
    ]
  },
  {
    id: 'activity-3',
    title: 'Criação de Funil de Vendas',
    description: 'Desenvolva um funil de vendas completo para seu produto ou serviço.',
    duration: 60,
    difficulty: 'Avançado',
    points: 250,
    xpReward: 125,
    category: 'Vendas',
    requiredPlan: 'pro_plus',
    autoCorrect: false,
    questions: [
      {
        id: 'q1',
        question: 'Descreva cada etapa do seu funil de vendas (Topo, Meio, Fundo)',
        type: 'essay',
        maxWords: 600
      },
      {
        id: 'q2',
        question: 'Qual métrica é mais importante no topo do funil?',
        type: 'multiple_choice',
        options: [
          'Taxa de conversão',
          'Alcance e impressões',
          'Ticket médio',
          'Taxa de recompra'
        ],
        correctAnswer: 1
      },
      {
        id: 'q3',
        question: 'Faça upload do diagrama do seu funil (imagem ou PDF)',
        type: 'upload',
        acceptedFormats: ['.png', '.jpg', '.pdf']
      }
    ]
  },
  {
    id: 'activity-4',
    title: 'Estratégia de Conteúdo para Redes Sociais',
    description: 'Crie um calendário editorial de 30 dias para suas redes sociais.',
    duration: 90,
    difficulty: 'Elite',
    points: 300,
    xpReward: 150,
    category: 'Redes Sociais',
    requiredPlan: 'elite',
    autoCorrect: false,
    questions: [
      {
        id: 'q1',
        question: 'Descreva sua estratégia de conteúdo e pilares temáticos',
        type: 'essay',
        maxWords: 500
      },
      {
        id: 'q2',
        question: 'Qual a frequência ideal de postagem para seu nicho?',
        type: 'multiple_choice',
        options: [
          '1 vez por semana',
          '3-4 vezes por semana',
          '1-2 vezes por dia',
          'Múltiplas vezes ao dia'
        ],
        correctAnswer: 2
      },
      {
        id: 'q3',
        question: 'Faça upload do seu calendário editorial completo',
        type: 'upload',
        acceptedFormats: ['.xlsx', '.pdf', '.png']
      }
    ]
  },
  {
    id: 'activity-5',
    title: 'Teste de Copywriting',
    description: 'Escreva 5 copies persuasivas para diferentes objetivos de marketing.',
    duration: 40,
    difficulty: 'Intermediário',
    points: 180,
    xpReward: 90,
    category: 'Copywriting',
    requiredPlan: 'pro',
    autoCorrect: true,
    questions: [
      {
        id: 'q1',
        question: 'Qual o principal objetivo de uma headline?',
        type: 'multiple_choice',
        options: [
          'Ser bonita',
          'Capturar atenção e despertar curiosidade',
          'Usar palavras difíceis',
          'Ser longa e detalhada'
        ],
        correctAnswer: 1
      },
      {
        id: 'q2',
        question: 'Escreva uma copy de 100 palavras para vender um curso online',
        type: 'essay',
        maxWords: 150
      },
      {
        id: 'q3',
        question: 'Qual gatilho mental é mais eficaz para produtos de alto valor?',
        type: 'multiple_choice',
        options: [
          'Escassez',
          'Autoridade',
          'Prova social',
          'Todos os anteriores'
        ],
        correctAnswer: 3
      }
    ]
  }
];

// 🎯 Funções auxiliares
export function canAccessActivity(activity: Activity, userPlan: PlanType): boolean {
  const planHierarchy: Record<PlanType, number> = {
    free: 0,
    pro: 1,
    pro_plus: 2,
    elite: 3,
    annual: 3
  };
  
  return planHierarchy[userPlan] >= planHierarchy[activity.requiredPlan];
}

export function calculateActivityScore(activity: Activity, answers: (string | number)[]): number | null {
  if (!activity.autoCorrect) return null;
  
  let correct = 0;
  let total = 0;
  
  activity.questions.forEach((question, index) => {
    if (question.type === 'multiple_choice' && question.correctAnswer !== undefined) {
      total++;
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    }
  });
  
  if (total === 0) return null;
  return Math.round((correct / total) * 10);
}

export function getActivitiesByPlan(userPlan: PlanType): Activity[] {
  return activities.filter(activity => canAccessActivity(activity, userPlan));
}

export function getLockedActivities(userPlan: PlanType): Activity[] {
  return activities.filter(activity => !canAccessActivity(activity, userPlan));
}
