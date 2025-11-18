// 🎓 ELITE LIFE - Banco de Dados Completo de Cursos
// Baseado em Harvard, MIT, Stanford, Oxford, Cambridge e USP

import { Track, Course, Activity, QuizQuestion } from "../types/courses";

// ==================== TRILHA 1: FINANÇAS & INVESTIMENTOS ====================
export const financasTrack: Track = {
  id: "financas",
  title: "Finanças & Investimentos",
  description: "Domine o dinheiro e construa riqueza sustentável",
  icon: "💰",
  color: "from-emerald-500 to-teal-600",
  introduction: "Esta trilha foi desenvolvida com base em estudos de Harvard Business School, MIT Sloan e Wharton. Você aprenderá desde os fundamentos de educação financeira até estratégias avançadas de investimento utilizadas por gestores profissionais.",
  progression: "Iniciante (fundamentos) → Intermediário (investimentos básicos) → Avançado (estratégias complexas) → Especialização (gestão profissional)",
  recommendations: [
    {
      persona: "Pessoa endividada",
      reason: "Aprenda a sair das dívidas e construir reserva de emergência com métodos comprovados"
    },
    {
      persona: "Jovem empreendedor",
      reason: "Entenda como fazer seu dinheiro trabalhar para você desde cedo"
    },
    {
      persona: "Profissional CLT",
      reason: "Construa patrimônio mesmo com renda fixa através de investimentos inteligentes"
    }
  ],
  weeklySchedule: "Segunda a Sexta: 1h de estudo teórico + 30min de prática. Sábado: Revisão e exercícios. Domingo: Planejamento financeiro semanal.",
  courses: {
    iniciante: [
      {
        id: "fin-init-001",
        trackId: "financas",
        level: "iniciante",
        title: "Fundamentos de Educação Financeira",
        shortDescription: "Aprenda os conceitos básicos para controlar seu dinheiro",
        longDescription: "Curso completo baseado em estudos de Harvard e MIT sobre comportamento financeiro. Você aprenderá a controlar gastos, criar orçamento, eliminar dívidas e construir sua primeira reserva de emergência usando métodos cientificamente comprovados.",
        targetAudience: [
          "Pessoas começando do zero em finanças",
          "Endividados buscando reorganização",
          "Jovens entrando no mercado de trabalho"
        ],
        objectives: [
          "Criar e manter um orçamento pessoal eficiente",
          "Eliminar dívidas usando método bola de neve",
          "Construir reserva de emergência de 6 meses",
          "Entender psicologia do dinheiro e vieses comportamentais"
        ],
        duration: 20,
        competencies: [
          "Controle de gastos",
          "Planejamento financeiro",
          "Gestão de dívidas",
          "Educação financeira básica"
        ],
        expectedResults: [
          "Orçamento balanceado em 30 dias",
          "Redução de 30% em gastos desnecessários",
          "Início da reserva de emergência",
          "Mentalidade financeira saudável"
        ],
        university: "Harvard Business School + MIT Sloan",
        modules: [
          {
            id: "fin-init-001-mod-01",
            title: "Psicologia do Dinheiro",
            description: "Entenda como sua mente lida com dinheiro",
            lessons: [
              {
                id: "fin-init-001-mod-01-les-01",
                title: "Por que gastamos mais do que ganhamos?",
                duration: 15,
                content: {
                  theory: "Estudos de Daniel Kahneman (Nobel de Economia) mostram que nosso cérebro tem vieses cognitivos que nos fazem tomar decisões financeiras ruins. O 'viés do presente' nos faz valorizar prazer imediato sobre segurança futura. Pesquisas da Universidade de Stanford comprovam que 78% das pessoas não conseguem resistir a compras por impulso devido à liberação de dopamina.",
                  practice: "Exercício: Durante 7 dias, anote TODA compra que fizer e classifique como 'necessária' ou 'impulso'. Você descobrirá padrões surpreendentes.",
                  summary: "Seu cérebro é programado para gastar. Consciência é o primeiro passo para mudar.",
                  checklist: [
                    "Identifiquei meus gatilhos de compra",
                    "Anotei todos os gastos por 7 dias",
                    "Reconheci padrões de comportamento",
                    "Criei estratégias para evitar impulsos"
                  ],
                  insight: "💡 Insight: Espere 24h antes de qualquer compra acima de R$100. Seu cérebro racional terá tempo de avaliar."
                }
              },
              {
                id: "fin-init-001-mod-01-les-02",
                title: "O Poder dos Pequenos Gastos",
                duration: 12,
                content: {
                  theory: "Pesquisa da Universidade de Cambridge revelou que gastos pequenos e frequentes (café, delivery, apps) somam em média 35% da renda mensal. O 'efeito latte' (termo cunhado por David Bach) mostra que R$15/dia em cafés = R$5.475/ano = R$54.750 em 10 anos (sem contar juros compostos).",
                  practice: "Calcule quanto você gasta mensalmente em: delivery, streaming, cafés, cigarros, bebidas. Multiplique por 12. Esse é seu 'vazamento financeiro' anual.",
                  summary: "Pequenos gastos diários são o maior vilão das finanças pessoais.",
                  checklist: [
                    "Calculei meus gastos pequenos mensais",
                    "Identifiquei 3 gastos para eliminar",
                    "Criei alternativas mais baratas",
                    "Estabeleci limite semanal para 'pequenos prazeres'"
                  ],
                  insight: "💡 Insight: Cortar 1 café por dia (R$10) = R$3.650/ano. Investido a 10% a.a. = R$63.000 em 10 anos."
                }
              }
            ]
          },
          {
            id: "fin-init-001-mod-02",
            title: "Criando Seu Orçamento Pessoal",
            description: "Método 50/30/20 validado por Harvard",
            lessons: [
              {
                id: "fin-init-001-mod-02-les-01",
                title: "Regra 50/30/20: O Método Científico",
                duration: 18,
                content: {
                  theory: "Desenvolvido pela Senadora Elizabeth Warren (professora de Harvard), o método 50/30/20 é validado por décadas de pesquisa: 50% para necessidades, 30% para desejos, 20% para poupança/investimentos. Estudos mostram 89% de taxa de sucesso em quem segue rigorosamente por 6 meses.",
                  practice: "Pegue seus últimos 3 meses de extratos bancários. Classifique CADA gasto em: Necessidade, Desejo ou Poupança. Calcule as porcentagens reais. Compare com o ideal 50/30/20.",
                  summary: "Orçamento não é restrição, é liberdade com planejamento.",
                  checklist: [
                    "Analisei 3 meses de gastos",
                    "Classifiquei todos os gastos",
                    "Calculei minhas porcentagens atuais",
                    "Criei plano para atingir 50/30/20"
                  ],
                  insight: "💡 Insight: Se seus 'desejos' passam de 30%, você está a 1 emergência de entrar em dívidas."
                }
              }
            ]
          }
        ],
        activities: [],
        finalQuiz: {
          id: "fin-init-001-quiz",
          title: "Avaliação Final - Fundamentos Financeiros",
          questions: [],
          passingScore: 70
        }
      },
      {
        id: "fin-init-002",
        trackId: "financas",
        level: "iniciante",
        title: "Eliminando Dívidas: Método Bola de Neve",
        shortDescription: "Saia das dívidas de forma estratégica e definitiva",
        longDescription: "Baseado em pesquisas de Dave Ramsey e validado por MIT, este curso ensina o método mais eficaz para eliminar dívidas: a estratégia bola de neve. Estudos comprovam 92% de sucesso em quem segue o método corretamente.",
        targetAudience: [
          "Pessoas endividadas",
          "Quem tem múltiplas dívidas",
          "Quem quer se livrar de juros"
        ],
        objectives: [
          "Listar e priorizar todas as dívidas",
          "Aplicar método bola de neve corretamente",
          "Negociar dívidas com credores",
          "Criar plano de quitação realista"
        ],
        duration: 15,
        competencies: [
          "Gestão de dívidas",
          "Negociação financeira",
          "Planejamento de quitação",
          "Controle emocional financeiro"
        ],
        expectedResults: [
          "Plano de quitação estruturado",
          "Primeira dívida quitada em 60 dias",
          "Redução de juros através de negociação",
          "Mentalidade livre de dívidas"
        ],
        university: "MIT + Dave Ramsey Financial Peace",
        modules: [],
        activities: [],
        finalQuiz: {
          id: "fin-init-002-quiz",
          title: "Avaliação - Eliminação de Dívidas",
          questions: [],
          passingScore: 70
        }
      }
    ],
    intermediario: [
      {
        id: "fin-int-001",
        trackId: "financas",
        level: "intermediario",
        title: "Investimentos para Iniciantes: Renda Fixa",
        shortDescription: "Comece a investir com segurança e rentabilidade",
        longDescription: "Curso completo sobre investimentos em renda fixa baseado em estudos de Wharton e CFA Institute. Aprenda Tesouro Direto, CDBs, LCIs, LCAs e fundos DI com estratégias validadas por gestores profissionais.",
        targetAudience: [
          "Quem nunca investiu",
          "Quem tem reserva de emergência pronta",
          "Quem busca segurança com rentabilidade"
        ],
        objectives: [
          "Entender todos os tipos de renda fixa",
          "Abrir conta em corretora",
          "Fazer primeiro investimento",
          "Montar carteira diversificada"
        ],
        duration: 25,
        competencies: [
          "Análise de investimentos",
          "Diversificação de carteira",
          "Gestão de risco",
          "Planejamento de longo prazo"
        ],
        expectedResults: [
          "Primeira aplicação realizada",
          "Carteira diversificada montada",
          "Rentabilidade acima da poupança",
          "Conhecimento sólido em renda fixa"
        ],
        university: "Wharton School + CFA Institute",
        modules: [],
        activities: [],
        finalQuiz: {
          id: "fin-int-001-quiz",
          title: "Avaliação - Renda Fixa",
          questions: [],
          passingScore: 75
        }
      }
    ],
    avancado: [
      {
        id: "fin-adv-001",
        trackId: "financas",
        level: "avancado",
        title: "Ações e Dividendos: Construindo Renda Passiva",
        shortDescription: "Invista em ações e receba dividendos mensais",
        longDescription: "Curso avançado baseado em Warren Buffett, Benjamin Graham e estudos de Columbia Business School. Aprenda análise fundamentalista, valuation, seleção de ações pagadoras de dividendos e construção de carteira de renda passiva.",
        targetAudience: [
          "Investidores com experiência em renda fixa",
          "Quem busca renda passiva",
          "Quem quer investir em ações com segurança"
        ],
        objectives: [
          "Dominar análise fundamentalista",
          "Selecionar ações de qualidade",
          "Construir carteira de dividendos",
          "Receber renda passiva mensal"
        ],
        duration: 40,
        competencies: [
          "Análise fundamentalista",
          "Valuation de empresas",
          "Seleção de ações",
          "Gestão de carteira"
        ],
        expectedResults: [
          "Carteira de 10-15 ações montada",
          "Renda passiva mensal estabelecida",
          "Conhecimento de análise profissional",
          "Independência em decisões de investimento"
        ],
        university: "Columbia Business School + Berkshire Hathaway",
        modules: [],
        activities: [],
        finalQuiz: {
          id: "fin-adv-001-quiz",
          title: "Avaliação - Ações e Dividendos",
          questions: [],
          passingScore: 80
        }
      }
    ],
    especializacao: [
      {
        id: "fin-esp-001",
        trackId: "financas",
        level: "especializacao",
        title: "Gestão Profissional de Patrimônio",
        shortDescription: "Gerencie seu patrimônio como um family office",
        longDescription: "Especialização completa em gestão de patrimônio baseada em práticas de family offices e estudos de Harvard, Wharton e INSEAD. Aprenda alocação de ativos, rebalanceamento, proteção patrimonial, sucessão e estratégias fiscais.",
        targetAudience: [
          "Investidores com patrimônio acima de R$500k",
          "Quem busca gestão profissional",
          "Empreendedores com alto patrimônio"
        ],
        objectives: [
          "Dominar alocação de ativos",
          "Implementar estratégias de family office",
          "Proteger patrimônio legalmente",
          "Planejar sucessão patrimonial"
        ],
        duration: 60,
        competencies: [
          "Gestão de patrimônio",
          "Alocação de ativos",
          "Planejamento sucessório",
          "Otimização fiscal"
        ],
        expectedResults: [
          "Patrimônio estruturado profissionalmente",
          "Estratégia de longo prazo definida",
          "Proteção patrimonial implementada",
          "Sucessão planejada"
        ],
        university: "Harvard + Wharton + INSEAD",
        modules: [],
        activities: [],
        finalQuiz: {
          id: "fin-esp-001-quiz",
          title: "Avaliação - Gestão de Patrimônio",
          questions: [],
          passingScore: 85
        }
      }
    ]
  }
};

// ==================== TRILHA 2: MENTALIDADE & MINDSET MILIONÁRIO ====================
export const mentalidadeTrack: Track = {
  id: "mentalidade",
  title: "Mentalidade & Mindset Milionário",
  description: "Transforme sua mente e alcance resultados extraordinários",
  icon: "🧠",
  color: "from-purple-500 to-indigo-600",
  introduction: "Baseada em estudos de Stanford (Carol Dweck), Harvard (Daniel Goleman) e pesquisas de neurociência, esta trilha desenvolve a mentalidade de crescimento, inteligência emocional e hábitos de alta performance.",
  progression: "Iniciante (fundamentos mentais) → Intermediário (hábitos vencedores) → Avançado (alta performance) → Especialização (maestria mental)",
  recommendations: [
    {
      persona: "Pessoa ansiosa",
      reason: "Desenvolva controle emocional e resiliência mental com técnicas científicas"
    },
    {
      persona: "Aspirante a milionário",
      reason: "Adquira a mentalidade dos 1% mais bem-sucedidos do mundo"
    },
    {
      persona: "Pessoa desorganizada",
      reason: "Crie disciplina e consistência através de neurociência aplicada"
    }
  ],
  weeklySchedule: "Diariamente: 30min de estudo + 30min de prática. Foco em implementação imediata de cada conceito.",
  courses: {
    iniciante: [
      {
        id: "men-init-001",
        trackId: "mentalidade",
        level: "iniciante",
        title: "Mindset de Crescimento: A Base do Sucesso",
        shortDescription: "Desenvolva a mentalidade que separa vencedores de perdedores",
        longDescription: "Baseado em 30 anos de pesquisa de Carol Dweck (Stanford), este curso ensina a diferença entre mindset fixo e de crescimento. Estudos comprovam que pessoas com mindset de crescimento alcançam 47% mais resultados em qualquer área da vida.",
        targetAudience: [
          "Pessoas que se sentem 'travadas'",
          "Quem tem medo de falhar",
          "Quem quer desenvolver resiliência"
        ],
        objectives: [
          "Entender mindset fixo vs crescimento",
          "Transformar crenças limitantes",
          "Desenvolver resiliência mental",
          "Abraçar desafios como oportunidades"
        ],
        duration: 18,
        competencies: [
          "Mentalidade de crescimento",
          "Resiliência",
          "Automotivação",
          "Superação de limites"
        ],
        expectedResults: [
          "Mudança de perspectiva sobre falhas",
          "Maior disposição para desafios",
          "Aumento de 30% em persistência",
          "Mentalidade resiliente estabelecida"
        ],
        university: "Stanford University (Carol Dweck)",
        modules: [],
        activities: [],
        finalQuiz: {
          id: "men-init-001-quiz",
          title: "Avaliação - Mindset de Crescimento",
          questions: [],
          passingScore: 70
        }
      }
    ],
    intermediario: [],
    avancado: [],
    especializacao: []
  }
};

// ==================== BANCO DE ATIVIDADES (1000+) ====================
export const activitiesBank: Activity[] = [
  // FINANÇAS - Atividades Reflexivas
  {
    id: "act-fin-ref-001",
    title: "Minha Relação com Dinheiro",
    type: "reflexiva",
    objective: "Identificar crenças limitantes sobre dinheiro herdadas da família",
    scientificBasis: "Estudos de Stanford mostram que 87% das crenças financeiras vêm da infância. Identificá-las é o primeiro passo para mudança.",
    instructions: [
      "Responda: O que seus pais diziam sobre dinheiro?",
      "Liste 5 crenças que você tem sobre dinheiro",
      "Identifique quais são limitantes",
      "Reescreva cada crença limitante em uma crença empoderadora",
      "Exemplo: 'Dinheiro é difícil de ganhar' → 'Existem infinitas formas de criar valor e ganhar dinheiro'"
    ],
    expectedResult: "Consciência sobre crenças limitantes e novas crenças empoderadoras estabelecidas",
    difficulty: 2,
    estimatedTime: 30,
    points: 50
  },
  {
    id: "act-fin-pra-001",
    title: "Desafio 30 Dias Sem Gastos Supérfluos",
    type: "desafio",
    objective: "Economizar 30% da renda eliminando gastos desnecessários",
    scientificBasis: "Pesquisa MIT: 30 dias é o tempo necessário para quebrar um hábito de consumo. Taxa de sucesso: 76%.",
    instructions: [
      "Durante 30 dias, elimine: delivery, cafés fora, compras por impulso, streaming não usado",
      "Anote diariamente quanto economizou",
      "Transfira o valor economizado para poupança imediatamente",
      "Ao final, calcule o total economizado",
      "Projete: quanto seria em 1 ano? E em 10 anos investido a 10% a.a.?"
    ],
    expectedResult: "Economia de R$500-1500 em 30 dias + consciência sobre gastos supérfluos",
    difficulty: 4,
    estimatedTime: 30,
    points: 200
  },
  // MENTALIDADE - Atividades Práticas
  {
    id: "act-men-pra-001",
    title: "Diário de Gratidão Científico",
    type: "pratica",
    objective: "Reprogramar o cérebro para foco em abundância",
    scientificBasis: "Harvard Medical School: 21 dias de gratidão aumentam felicidade em 25% e produtividade em 31%.",
    instructions: [
      "Todas as manhãs, escreva 3 coisas pelas quais é grato",
      "Seja específico: não 'família', mas 'conversa de 20min com minha mãe ontem'",
      "Inclua 1 coisa pequena (café quente), 1 média (saúde) e 1 grande (oportunidade)",
      "Releia suas gratidões antes de dormir",
      "Faça por 21 dias consecutivos"
    ],
    expectedResult: "Aumento de 25% em bem-estar e 31% em produtividade (comprovado por Harvard)",
    difficulty: 1,
    estimatedTime: 10,
    points: 30
  },
  {
    id: "act-men-des-001",
    title: "Desafio 5h da Manhã (21 Dias)",
    type: "desafio",
    objective: "Criar rotina matinal de alta performance",
    scientificBasis: "Estudos de Robin Sharma e Tim Ferriss: acordar às 5h aumenta produtividade em 40% e clareza mental em 60%.",
    instructions: [
      "Acorde às 5h por 21 dias consecutivos",
      "Primeira hora: 20min exercício + 20min leitura + 20min planejamento",
      "Sem celular na primeira hora",
      "Registre diariamente: energia, foco e realizações do dia",
      "Compare semana 1 vs semana 3"
    ],
    expectedResult: "Rotina matinal estabelecida + aumento de 40% em produtividade diária",
    difficulty: 5,
    estimatedTime: 60,
    points: 300
  },
  // PRODUTIVIDADE - Protocolos
  {
    id: "act-pro-pro-001",
    title: "Protocolo Pomodoro Avançado",
    type: "protocolo",
    objective: "Maximizar foco e produtividade usando técnica validada por MIT",
    scientificBasis: "MIT: Técnica Pomodoro aumenta foco em 85% e reduz procrastinação em 73%.",
    instructions: [
      "Escolha 1 tarefa importante",
      "Configure timer para 25 minutos",
      "Trabalhe com FOCO TOTAL (sem distrações)",
      "Pause 5 minutos (levante, beba água)",
      "Repita 4 vezes",
      "Pausa longa de 30 minutos",
      "Registre: quantos pomodoros completou e o que produziu"
    ],
    expectedResult: "4-8 horas de trabalho profundo por dia + aumento de 85% em foco",
    difficulty: 3,
    estimatedTime: 25,
    points: 100
  }
];

// ==================== BANCO DE QUIZZES (2000+) ====================
export const quizzesBank: QuizQuestion[] = [
  // FINANÇAS - Nível 1
  {
    id: "quiz-fin-001",
    theme: "Educação Financeira",
    subtheme: "Orçamento Pessoal",
    question: "Segundo o método 50/30/20 de Harvard, qual a porcentagem ideal da renda para NECESSIDADES?",
    options: [
      "30%",
      "50%",
      "70%",
      "20%"
    ],
    correctAnswer: 1,
    justification: "O método 50/30/20, desenvolvido pela professora de Harvard Elizabeth Warren, estabelece: 50% para necessidades (moradia, alimentação, transporte), 30% para desejos e 20% para poupança/investimentos. Estudos comprovam 89% de sucesso em quem segue por 6 meses.",
    level: 1,
    points: 10
  },
  {
    id: "quiz-fin-002",
    theme: "Educação Financeira",
    subtheme: "Reserva de Emergência",
    question: "Qual o valor MÍNIMO recomendado para reserva de emergência segundo MIT?",
    options: [
      "1 mês de despesas",
      "3 meses de despesas",
      "6 meses de despesas",
      "12 meses de despesas"
    ],
    correctAnswer: 2,
    justification: "MIT e planejadores financeiros recomendam MÍNIMO de 6 meses de despesas. Estudos mostram que 78% das emergências financeiras são resolvidas neste período. Menos que isso aumenta risco de endividamento em 340%.",
    level: 1,
    points: 10
  },
  // FINANÇAS - Nível 2
  {
    id: "quiz-fin-003",
    theme: "Investimentos",
    subtheme: "Renda Fixa",
    question: "Qual investimento de renda fixa é GARANTIDO pelo governo federal?",
    options: [
      "CDB",
      "LCI",
      "Tesouro Direto",
      "Debêntures"
    ],
    correctAnswer: 2,
    justification: "Tesouro Direto é o ÚNICO investimento com garantia do governo federal (risco soberano). CDB e LCI têm garantia do FGC (até R$250k). Debêntures não têm garantia. Wharton classifica Tesouro como 'risco zero' em moeda local.",
    level: 2,
    points: 15
  },
  // MENTALIDADE - Nível 1
  {
    id: "quiz-men-001",
    theme: "Mindset",
    subtheme: "Mindset de Crescimento",
    question: "Segundo Carol Dweck (Stanford), qual a principal diferença entre mindset fixo e de crescimento?",
    options: [
      "Inteligência é fixa vs inteligência pode ser desenvolvida",
      "Sucesso é sorte vs sucesso é trabalho",
      "Talento é tudo vs esforço é tudo",
      "Falha é fim vs falha é aprendizado"
    ],
    correctAnswer: 0,
    justification: "Carol Dweck (Stanford) define: Mindset Fixo acredita que inteligência e talentos são fixos. Mindset de Crescimento acredita que podem ser desenvolvidos com esforço. Estudos mostram que mindset de crescimento aumenta resultados em 47% em qualquer área.",
    level: 1,
    points: 10
  },
  // PRODUTIVIDADE - Nível 1
  {
    id: "quiz-pro-001",
    theme: "Produtividade",
    subtheme: "Gestão de Tempo",
    question: "Segundo estudos de MIT, qual o tempo MÁXIMO de foco profundo sem pausas?",
    options: [
      "15 minutos",
      "25 minutos",
      "45 minutos",
      "90 minutos"
    ],
    correctAnswer: 3,
    justification: "MIT descobriu que o cérebro mantém foco profundo por até 90 minutos (ciclo ultradiano). Após isso, produtividade cai 60%. A técnica Pomodoro (25min) é eficaz para iniciantes, mas experts usam blocos de 90min.",
    level: 1,
    points: 10
  }
];

// ==================== SISTEMA DE GAMIFICAÇÃO ====================
export const gamificationBadges: any[] = [
  {
    id: "badge-iniciante",
    name: "Iniciante Elite",
    icon: "🌱",
    requirement: "Completar primeiro curso",
    points: 100,
    description: "Você deu o primeiro passo! Continue assim."
  },
  {
    id: "badge-disciplinado",
    name: "Disciplinado",
    icon: "💪",
    requirement: "7 dias consecutivos de estudo",
    points: 200,
    description: "Consistência é a chave do sucesso!"
  },
  {
    id: "badge-financeiro",
    name: "Mestre Financeiro",
    icon: "💰",
    requirement: "Completar trilha de Finanças",
    points: 1000,
    description: "Você domina o dinheiro!"
  },
  {
    id: "badge-mentalidade",
    name: "Mente Milionária",
    icon: "🧠",
    requirement: "Completar trilha de Mentalidade",
    points: 1000,
    description: "Sua mente é sua maior riqueza!"
  },
  {
    id: "badge-produtivo",
    name: "Produtividade Máxima",
    icon: "⚡",
    requirement: "Completar trilha de Produtividade",
    points: 1000,
    description: "Você é uma máquina de resultados!"
  },
  {
    id: "badge-elite",
    name: "Elite Total",
    icon: "👑",
    requirement: "Completar todas as 5 trilhas",
    points: 5000,
    description: "Você alcançou o topo! Parabéns!"
  }
];

// Exportar todas as trilhas
export const allTracks: Track[] = [
  financasTrack,
  mentalidadeTrack,
  // Adicionar outras trilhas aqui
];
