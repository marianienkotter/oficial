// 🧠 Sistema de Quizzes - Elite Life

export type QuizDifficulty = 'Iniciante' | 'Intermediário' | 'Avançado' | 'Elite';
export type QuizStatus = 'not_started' | 'in_progress' | 'completed' | 'failed';
export type PlanType = 'free' | 'pro' | 'pro_plus' | 'elite' | 'annual';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // índice da resposta correta
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  duration: number; // em minutos
  difficulty: QuizDifficulty;
  points: number;
  xpReward: number;
  questions: QuizQuestion[];
  requiredPlan: PlanType;
  category: string;
  thumbnail?: string;
}

export interface QuizProgress {
  quizId: string;
  userId: string;
  answers: number[]; // índices das respostas selecionadas
  score: number; // nota de 0 a 10
  attempts: number;
  status: QuizStatus;
  completedAt?: Date;
  xpEarned: number;
  timeSpent: number; // em segundos
}

export interface UserMedals {
  iniciante: boolean; // 1 quiz
  bronze: boolean; // 5 quizzes
  prata: boolean; // 15 quizzes
  ouro: boolean; // 30 quizzes
  eliteSupreme: boolean; // 50+ quizzes
}

// 🎯 Dados dos Quizzes
export const quizzes: Quiz[] = [
  {
    id: 'quiz-1',
    title: 'Fundamentos do Marketing Digital',
    description: 'Aprenda os conceitos básicos do marketing digital e como aplicá-los no seu negócio.',
    duration: 15,
    difficulty: 'Iniciante',
    points: 100,
    xpReward: 50,
    category: 'Marketing',
    requiredPlan: 'free',
    questions: [
      {
        id: 'q1',
        question: 'O que é Marketing Digital?',
        options: [
          'Vender produtos apenas em lojas físicas',
          'Estratégias de marketing usando canais digitais',
          'Criar sites sem estratégia',
          'Apenas redes sociais'
        ],
        correctAnswer: 1,
        explanation: 'Marketing Digital envolve todas as estratégias de marketing realizadas em canais digitais como redes sociais, sites, e-mail, etc.'
      },
      {
        id: 'q2',
        question: 'Qual a principal vantagem do Marketing Digital?',
        options: [
          'É mais caro que marketing tradicional',
          'Não precisa de planejamento',
          'Permite segmentação precisa do público',
          'Funciona apenas para grandes empresas'
        ],
        correctAnswer: 2,
        explanation: 'A segmentação precisa permite atingir exatamente o público que tem interesse no seu produto ou serviço.'
      },
      {
        id: 'q3',
        question: 'O que significa SEO?',
        options: [
          'Social Engine Optimization',
          'Search Engine Optimization',
          'Sales Engine Online',
          'Simple Email Operation'
        ],
        correctAnswer: 1,
        explanation: 'SEO (Search Engine Optimization) é a otimização para mecanismos de busca como Google.'
      },
      {
        id: 'q4',
        question: 'Qual métrica é mais importante para medir engajamento?',
        options: [
          'Número de seguidores apenas',
          'Curtidas, comentários e compartilhamentos',
          'Apenas visualizações',
          'Cor do logo'
        ],
        correctAnswer: 1,
        explanation: 'O engajamento real é medido pela interação do público com seu conteúdo.'
      },
      {
        id: 'q5',
        question: 'O que é funil de vendas?',
        options: [
          'Um objeto físico para vender',
          'Jornada do cliente desde o conhecimento até a compra',
          'Apenas a página de checkout',
          'Um tipo de anúncio'
        ],
        correctAnswer: 1,
        explanation: 'O funil de vendas representa as etapas que o cliente passa desde conhecer sua marca até realizar a compra.'
      }
    ]
  },
  {
    id: 'quiz-2',
    title: 'Estratégias de Redes Sociais',
    description: 'Domine as principais estratégias para crescer nas redes sociais e engajar sua audiência.',
    duration: 20,
    difficulty: 'Intermediário',
    points: 150,
    xpReward: 75,
    category: 'Redes Sociais',
    requiredPlan: 'pro',
    questions: [
      {
        id: 'q1',
        question: 'Qual a melhor frequência de postagem no Instagram?',
        options: [
          'Uma vez por mês',
          '1-2 vezes por dia com qualidade',
          '10 vezes por dia',
          'Apenas quando lembrar'
        ],
        correctAnswer: 1,
        explanation: 'Consistência com qualidade é melhor que quantidade sem estratégia.'
      },
      {
        id: 'q2',
        question: 'O que é storytelling?',
        options: [
          'Contar histórias para conectar emocionalmente',
          'Apenas postar fotos',
          'Vender diretamente',
          'Copiar conteúdo de outros'
        ],
        correctAnswer: 0,
        explanation: 'Storytelling é a arte de contar histórias que criam conexão emocional com a audiência.'
      },
      {
        id: 'q3',
        question: 'Qual o melhor horário para postar?',
        options: [
          'Não importa o horário',
          'Quando sua audiência está mais ativa',
          'Sempre de madrugada',
          'Apenas aos finais de semana'
        ],
        correctAnswer: 1,
        explanation: 'Analise os insights para descobrir quando seu público está online.'
      },
      {
        id: 'q4',
        question: 'O que são hashtags?',
        options: [
          'Palavras aleatórias',
          'Etiquetas para categorizar e aumentar alcance',
          'Apenas decoração',
          'Não servem para nada'
        ],
        correctAnswer: 1,
        explanation: 'Hashtags ajudam a categorizar conteúdo e aumentar o alcance orgânico.'
      },
      {
        id: 'q5',
        question: 'Como aumentar engajamento?',
        options: [
          'Comprar seguidores falsos',
          'Criar conteúdo de valor e interagir com a audiência',
          'Postar apenas propaganda',
          'Ignorar comentários'
        ],
        correctAnswer: 1,
        explanation: 'Engajamento real vem de conteúdo relevante e interação genuína.'
      }
    ]
  },
  {
    id: 'quiz-3',
    title: 'E-commerce Avançado',
    description: 'Técnicas avançadas para escalar seu e-commerce e aumentar as vendas exponencialmente.',
    duration: 25,
    difficulty: 'Avançado',
    points: 200,
    xpReward: 100,
    category: 'E-commerce',
    requiredPlan: 'pro_plus',
    questions: [
      {
        id: 'q1',
        question: 'O que é taxa de conversão?',
        options: [
          'Número total de visitantes',
          'Percentual de visitantes que compram',
          'Valor do frete',
          'Cor do site'
        ],
        correctAnswer: 1,
        explanation: 'Taxa de conversão é a porcentagem de visitantes que realizam a ação desejada (compra).'
      },
      {
        id: 'q2',
        question: 'Como reduzir abandono de carrinho?',
        options: [
          'Aumentar os preços',
          'Simplificar checkout e oferecer garantias',
          'Esconder informações',
          'Não fazer nada'
        ],
        correctAnswer: 1,
        explanation: 'Um checkout simples, transparente e com garantias reduz significativamente o abandono.'
      },
      {
        id: 'q3',
        question: 'O que é upsell?',
        options: [
          'Vender mais caro sem motivo',
          'Oferecer produto complementar ou superior',
          'Descontar muito',
          'Não vender nada'
        ],
        correctAnswer: 1,
        explanation: 'Upsell é oferecer um produto superior ou complementar para aumentar o ticket médio.'
      },
      {
        id: 'q4',
        question: 'Qual a importância do pós-venda?',
        options: [
          'Não é importante',
          'Fidelizar clientes e gerar recompra',
          'Apenas para reclamações',
          'Perda de tempo'
        ],
        correctAnswer: 1,
        explanation: 'Um bom pós-venda fideliza clientes e aumenta o lifetime value.'
      },
      {
        id: 'q5',
        question: 'O que é remarketing?',
        options: [
          'Spam para clientes',
          'Impactar novamente quem já visitou seu site',
          'Apenas e-mail marketing',
          'Não funciona'
        ],
        correctAnswer: 1,
        explanation: 'Remarketing permite impactar novamente pessoas que já demonstraram interesse.'
      }
    ]
  },
  {
    id: 'quiz-4',
    title: 'Mindset Elite',
    description: 'Desenvolva a mentalidade de um empreendedor de alto nível e alcance resultados extraordinários.',
    duration: 30,
    difficulty: 'Elite',
    points: 300,
    xpReward: 150,
    category: 'Mindset',
    requiredPlan: 'elite',
    questions: [
      {
        id: 'q1',
        question: 'O que diferencia um empreendedor Elite?',
        options: [
          'Apenas dinheiro',
          'Mentalidade de crescimento e ação consistente',
          'Sorte',
          'Não fazer nada'
        ],
        correctAnswer: 1,
        explanation: 'A mentalidade e ação consistente são os pilares do sucesso sustentável.'
      },
      {
        id: 'q2',
        question: 'Como lidar com fracassos?',
        options: [
          'Desistir imediatamente',
          'Ver como aprendizado e ajustar estratégia',
          'Culpar outros',
          'Ignorar e repetir o erro'
        ],
        correctAnswer: 1,
        explanation: 'Fracassos são oportunidades de aprendizado para quem tem mindset de crescimento.'
      },
      {
        id: 'q3',
        question: 'Qual a importância da disciplina?',
        options: [
          'Não é importante',
          'É o que mantém você no caminho quando motivação acaba',
          'Apenas para militares',
          'Limita criatividade'
        ],
        correctAnswer: 1,
        explanation: 'Disciplina é fazer o que precisa ser feito, mesmo sem motivação.'
      },
      {
        id: 'q4',
        question: 'Como escalar um negócio?',
        options: [
          'Trabalhar 24h por dia',
          'Sistemas, automação e delegação',
          'Fazer tudo sozinho',
          'Não crescer'
        ],
        correctAnswer: 1,
        explanation: 'Escalar requer criar sistemas que funcionem sem sua presença constante.'
      },
      {
        id: 'q5',
        question: 'O que é networking estratégico?',
        options: [
          'Adicionar todos no LinkedIn',
          'Construir relacionamentos genuínos com pessoas certas',
          'Apenas pedir favores',
          'Não importa'
        ],
        correctAnswer: 1,
        explanation: 'Networking de qualidade é sobre relacionamentos genuínos e troca de valor.'
      }
    ]
  },
  {
    id: 'quiz-5',
    title: 'Copywriting Persuasivo',
    description: 'Aprenda a escrever textos que vendem e convertem leitores em clientes.',
    duration: 20,
    difficulty: 'Intermediário',
    points: 150,
    xpReward: 75,
    category: 'Copywriting',
    requiredPlan: 'pro',
    questions: [
      {
        id: 'q1',
        question: 'O que é copywriting?',
        options: [
          'Copiar textos de outros',
          'Arte de escrever textos persuasivos que vendem',
          'Apenas gramática',
          'Escrever muito'
        ],
        correctAnswer: 1,
        explanation: 'Copywriting é a habilidade de escrever textos que persuadem e convertem.'
      },
      {
        id: 'q2',
        question: 'Qual a estrutura básica de uma copy?',
        options: [
          'Apenas preço',
          'Atenção, Interesse, Desejo, Ação (AIDA)',
          'Texto longo sem estrutura',
          'Apenas imagens'
        ],
        correctAnswer: 1,
        explanation: 'AIDA é uma das estruturas mais eficazes para copywriting persuasivo.'
      },
      {
        id: 'q3',
        question: 'O que são gatilhos mentais?',
        options: [
          'Manipulação',
          'Princípios psicológicos que influenciam decisões',
          'Apenas truques',
          'Não funcionam'
        ],
        correctAnswer: 1,
        explanation: 'Gatilhos mentais são princípios da psicologia aplicados à persuasão ética.'
      },
      {
        id: 'q4',
        question: 'Qual o gatilho da escassez?',
        options: [
          'Oferecer tudo ilimitado',
          'Criar senso de urgência com disponibilidade limitada',
          'Mentir sobre estoque',
          'Não usar prazos'
        ],
        correctAnswer: 1,
        explanation: 'Escassez real cria urgência e aumenta o valor percebido.'
      },
      {
        id: 'q5',
        question: 'Como criar headlines poderosas?',
        options: [
          'Ser genérico',
          'Prometer benefício claro e específico',
          'Usar apenas palavras difíceis',
          'Não importa o título'
        ],
        correctAnswer: 1,
        explanation: 'Headlines eficazes prometem um benefício claro e despertam curiosidade.'
      }
    ]
  }
];

// 🎯 Funções auxiliares
export function calculateScore(quiz: Quiz, answers: number[]): number {
  let correct = 0;
  quiz.questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correct++;
    }
  });
  return Math.round((correct / quiz.questions.length) * 10);
}

export function checkMedalUnlock(completedQuizzes: number): Partial<UserMedals> {
  return {
    iniciante: completedQuizzes >= 1,
    bronze: completedQuizzes >= 5,
    prata: completedQuizzes >= 15,
    ouro: completedQuizzes >= 30,
    eliteSupreme: completedQuizzes >= 50
  };
}

export function canAccessQuiz(quiz: Quiz, userPlan: PlanType): boolean {
  const planHierarchy: Record<PlanType, number> = {
    free: 0,
    pro: 1,
    pro_plus: 2,
    elite: 3,
    annual: 3
  };
  
  return planHierarchy[userPlan] >= planHierarchy[quiz.requiredPlan];
}

export function getQuizzesByPlan(userPlan: PlanType): Quiz[] {
  return quizzes.filter(quiz => canAccessQuiz(quiz, userPlan));
}

export function getLockedQuizzes(userPlan: PlanType): Quiz[] {
  return quizzes.filter(quiz => !canAccessQuiz(quiz, userPlan));
}
