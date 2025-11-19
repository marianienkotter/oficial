// 🚀 Gerador Automático de Conteúdo - Elite Life
// Sistema que gera 2.000 quizzes, 2.000 atividades e 2.000 provas

import { Quiz, QuizQuestion, QuizDifficulty, PlanType } from './quizzes';
import { Activity, ActivityQuestion, ActivityType } from './activities';

// 📚 Categorias e Temas (25 categorias)
export const categories = [
  '6 em 7',
  'Marketing Digital',
  'Afiliados e Vendas',
  'E-commerce e Dropshipping',
  'Empreendedorismo',
  'Investimentos',
  'Renda Extra',
  'Mindset Milionário',
  'Mentalidade de Sucesso',
  'Desenvolvimento Pessoal',
  'Hábitos',
  'Finanças Pessoais',
  'Gestão de Tempo',
  'Produtividade',
  'Saúde e Alimentação',
  'Dieta e Emagrecimento',
  'Performance no Treino',
  'Influencer Digital',
  'Instagram e TikTok',
  'Copywriting',
  'Persuasão',
  'Comportamento Humano',
  'Relacionamento Saudável',
  'Motivação Diária',
  'Inteligência Emocional'
];

// 🎯 Templates de Perguntas Inteligentes por Categoria
const questionTemplates: Record<string, Array<{question: string, options: string[], correct: number, explanation: string}>> = {
  'Marketing Digital': [
    {
      question: 'Qual a principal métrica para medir ROI em campanhas digitais?',
      options: ['Número de curtidas', 'Custo por aquisição vs. Lifetime Value', 'Apenas impressões', 'Seguidores totais'],
      correct: 1,
      explanation: 'ROI real compara o custo de aquisição com o valor que o cliente gera ao longo do tempo.'
    },
    {
      question: 'O que é funil de vendas no marketing digital?',
      options: ['Uma ferramenta física', 'Jornada do cliente desde descoberta até compra', 'Apenas a página de vendas', 'Um tipo de anúncio'],
      correct: 1,
      explanation: 'O funil representa todas as etapas que o cliente passa até realizar a compra.'
    }
  ],
  'Mindset Milionário': [
    {
      question: 'Qual a diferença entre mentalidade de escassez e abundância?',
      options: ['Não há diferença', 'Escassez foca em limitações, abundância em oportunidades', 'Apenas sobre dinheiro', 'É o mesmo conceito'],
      correct: 1,
      explanation: 'Mentalidade de abundância vê oportunidades onde a escassez vê apenas limitações.'
    },
    {
      question: 'Como desenvolver disciplina financeira?',
      options: ['Gastar tudo', 'Criar hábitos consistentes de poupança e investimento', 'Apenas ganhar mais', 'Não importa'],
      correct: 1,
      explanation: 'Disciplina vem de hábitos consistentes, não de ganhos esporádicos.'
    }
  ],
  'Investimentos': [
    {
      question: 'O que é diversificação de investimentos?',
      options: ['Colocar tudo em um lugar', 'Distribuir investimentos em diferentes ativos', 'Apenas ações', 'Não investir'],
      correct: 1,
      explanation: 'Diversificação reduz riscos ao distribuir investimentos em diferentes classes de ativos.'
    }
  ],
  'E-commerce': [
    {
      question: 'Como reduzir abandono de carrinho?',
      options: ['Aumentar preços', 'Simplificar checkout e oferecer garantias', 'Esconder custos', 'Não fazer nada'],
      correct: 1,
      explanation: 'Checkout simples, transparente e com garantias reduz significativamente o abandono.'
    }
  ]
};

// 🎲 Gerador de Quizzes com Conteúdo Inteligente
export function generateQuizzes(count: number = 2000): Quiz[] {
  const quizzes: Quiz[] = [];
  const difficulties: QuizDifficulty[] = ['Iniciante', 'Intermediário', 'Avançado', 'Elite'];
  const plans: PlanType[] = ['free', 'pro', 'pro_plus', 'elite'];
  
  for (let i = 0; i < count; i++) {
    const category = categories[i % categories.length];
    const difficultyIndex = Math.floor(i / 500) % 4;
    const difficulty = difficulties[difficultyIndex];
    const plan = plans[difficultyIndex];
    
    const quiz: Quiz = {
      id: `quiz-${i + 1}`,
      title: generateTitle(category, i, 'Quiz'),
      description: generateDescription(category, difficulty),
      duration: 10 + (i % 30),
      difficulty,
      points: 50 + (difficultyIndex * 50),
      xpReward: 25 + (difficultyIndex * 25),
      category,
      requiredPlan: plan,
      questions: generateIntelligentQuestions(category, 5 + (i % 16), difficulty)
    };
    
    quizzes.push(quiz);
  }
  
  return quizzes;
}

// 🎯 Gerador de Atividades com Variedade
export function generateActivities(count: number = 2000): Activity[] {
  const activities: Activity[] = [];
  const difficulties: ('Iniciante' | 'Intermediário' | 'Avançado' | 'Elite')[] = ['Iniciante', 'Intermediário', 'Avançado', 'Elite'];
  const plans: PlanType[] = ['free', 'pro', 'pro_plus', 'elite'];
  
  for (let i = 0; i < count; i++) {
    const category = categories[i % categories.length];
    const difficultyIndex = Math.floor(i / 500) % 4;
    const difficulty = difficulties[difficultyIndex];
    const plan = plans[difficultyIndex];
    
    const activity: Activity = {
      id: `activity-${i + 1}`,
      title: generateActivityTitle(category, i),
      description: generateActivityDescription(category, difficulty),
      duration: 20 + (i % 70),
      difficulty,
      points: 100 + (difficultyIndex * 50),
      xpReward: 50 + (difficultyIndex * 25),
      category,
      requiredPlan: plan,
      autoCorrect: i % 3 === 0,
      questions: generateActivityQuestions(category, 2 + (i % 4), difficulty)
    };
    
    activities.push(activity);
  }
  
  return activities;
}

// 📝 Gerador de Provas (Exames Completos)
export function generateExams(count: number = 2000): Quiz[] {
  const exams: Quiz[] = [];
  const difficulties: QuizDifficulty[] = ['Iniciante', 'Intermediário', 'Avançado', 'Elite'];
  const plans: PlanType[] = ['free', 'pro', 'pro_plus', 'elite'];
  
  for (let i = 0; i < count; i++) {
    const category = categories[i % categories.length];
    const difficultyIndex = Math.floor(i / 500) % 4;
    const difficulty = difficulties[difficultyIndex];
    const plan = plans[difficultyIndex];
    
    const exam: Quiz = {
      id: `exam-${i + 1}`,
      title: `Prova ${i + 1}: ${category} - ${difficulty}`,
      description: `Avaliação completa de ${category}. Nota mínima para aprovação: 7.0. Certificado automático ao passar.`,
      duration: 30 + (i % 60),
      difficulty,
      points: 200 + (difficultyIndex * 100),
      xpReward: 100 + (difficultyIndex * 50),
      category,
      requiredPlan: plan,
      questions: generateIntelligentQuestions(category, 10 + (i % 21), difficulty)
    };
    
    exams.push(exam);
  }
  
  return exams;
}

// 🔧 Funções Auxiliares Inteligentes
function generateTitle(category: string, index: number, type: string): string {
  const prefixes = [
    'Fundamentos de',
    'Estratégias Avançadas de',
    'Dominando',
    'Masterclass de',
    'Segredos de',
    'Técnicas Elite de',
    'Guia Completo de',
    'Transformação através de'
  ];
  const prefix = prefixes[index % prefixes.length];
  return `${prefix} ${category} - ${type} ${(index % 100) + 1}`;
}

function generateDescription(category: string, difficulty: string): string {
  const descriptions = [
    `Aprenda conceitos ${difficulty.toLowerCase()} de ${category} e aplique no seu dia a dia.`,
    `Domine ${category} com estratégias práticas e comprovadas.`,
    `Transforme seu conhecimento em ${category} e alcance resultados extraordinários.`,
    `Desenvolva habilidades ${difficulty.toLowerCase()} em ${category} de forma prática.`
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function generateActivityTitle(category: string, index: number): string {
  const types = [
    'Exercício Prático',
    'Desafio de 7 Dias',
    'Projeto Real',
    'Atividade Transformadora',
    'Missão Elite',
    'Estudo de Caso',
    'Checklist Completo',
    'Plano de Ação'
  ];
  const type = types[index % types.length];
  return `${type}: ${category} - Nível ${(index % 50) + 1}`;
}

function generateActivityDescription(category: string, difficulty: string): string {
  return `Atividade prática ${difficulty.toLowerCase()} para aplicar conceitos de ${category} e desenvolver suas habilidades de forma concreta.`;
}

function generateIntelligentQuestions(category: string, count: number, difficulty: string): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  const templates = questionTemplates[category] || questionTemplates['Marketing Digital'];
  
  for (let i = 0; i < count; i++) {
    const template = templates[i % templates.length];
    questions.push({
      id: `q${i + 1}`,
      question: `[${difficulty}] ${template.question}`,
      options: template.options,
      correctAnswer: template.correct,
      explanation: template.explanation
    });
  }
  
  return questions;
}

function generateActivityQuestions(category: string, count: number, difficulty: string): ActivityQuestion[] {
  const questions: ActivityQuestion[] = [];
  const types: ActivityType[] = ['multiple_choice', 'essay', 'upload', 'practical'];
  
  for (let i = 0; i < count; i++) {
    const type = types[i % types.length];
    
    const question: ActivityQuestion = {
      id: `aq${i + 1}`,
      question: `[${difficulty}] Questão ${i + 1}: Desenvolva uma solução prática para ${category}`,
      type
    };
    
    if (type === 'multiple_choice') {
      question.options = [
        'Estratégia A: Abordagem conservadora e segura',
        'Estratégia B: Abordagem moderada e balanceada',
        'Estratégia C: Abordagem agressiva e inovadora',
        'Estratégia D: Combinação personalizada'
      ];
      question.correctAnswer = 3; // Combinação é geralmente a melhor
    } else if (type === 'essay') {
      question.maxWords = 200 + (i * 100);
    } else if (type === 'upload') {
      question.acceptedFormats = ['.pdf', '.docx', '.xlsx', '.png', '.jpg'];
    }
    
    questions.push(question);
  }
  
  return questions;
}

// 📊 Estatísticas do Conteúdo
export function getContentStats() {
  const avgQuestionsPerQuiz = 12.5;
  const avgQuestionsPerActivity = 3;
  const avgQuestionsPerExam = 20;
  
  return {
    totalQuizzes: 2000,
    totalActivities: 2000,
    totalExams: 2000,
    totalCategories: categories.length,
    totalQuestions: (2000 * avgQuestionsPerQuiz) + (2000 * avgQuestionsPerActivity) + (2000 * avgQuestionsPerExam),
    estimatedHours: Math.round((2000 * 20 + 2000 * 45 + 2000 * 45) / 60),
    certificatesAvailable: 2000 + 2000 + 2000, // Um certificado por quiz, atividade e prova
    totalXPAvailable: (2000 * 50) + (2000 * 75) + (2000 * 125)
  };
}

// 🎯 Buscar Conteúdo por Filtros
export function searchContent(
  type: 'quiz' | 'activity' | 'exam',
  filters: {
    category?: string;
    difficulty?: string;
    plan?: PlanType;
    searchTerm?: string;
  }
) {
  let content: (Quiz | Activity)[] = [];
  
  switch (type) {
    case 'quiz':
      content = generateQuizzes(2000);
      break;
    case 'activity':
      content = generateActivities(2000);
      break;
    case 'exam':
      content = generateExams(2000);
      break;
  }
  
  return content.filter(item => {
    if (filters.category && item.category !== filters.category) return false;
    if (filters.difficulty && item.difficulty !== filters.difficulty) return false;
    if (filters.plan && item.requiredPlan !== filters.plan) return false;
    if (filters.searchTerm && !item.title.toLowerCase().includes(filters.searchTerm.toLowerCase())) return false;
    return true;
  });
}
