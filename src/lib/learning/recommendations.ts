// 📚 ELITE LIFE - Recomendações de Livros, Filmes e Séries

export interface Book {
  id: string;
  title: string;
  author: string;
  category: "financas" | "marketing" | "produtividade" | "saude";
  description: string;
  whyImportant: string;
  forWho: string;
  coverUrl?: string;
  amazonLink?: string;
}

export interface Movie {
  id: string;
  title: string;
  type: "filme" | "serie" | "documentario";
  category: string;
  description: string;
  mainLesson: string;
  platformConnection: string;
  year?: number;
  rating?: number;
}

export interface Channel {
  id: string;
  name: string;
  category: "financas" | "marketing" | "saude" | "ecommerce" | "motivacao";
  description: string;
  youtubeUrl?: string;
  instagramUrl?: string;
}

// 📚 LIVROS RECOMENDADOS
export const recommendedBooks: Book[] = [
  // FINANÇAS / DINHEIRO / RIQUEZA
  {
    id: "book-1",
    title: "Pai Rico Pai Pobre",
    author: "Robert Kiyosaki",
    category: "financas",
    description: "O clássico sobre educação financeira que mudou a vida de milhões de pessoas ao redor do mundo.",
    whyImportant: "Ensina a diferença entre ativos e passivos, e como construir riqueza através de investimentos inteligentes.",
    forWho: "Iniciantes em educação financeira que querem mudar sua mentalidade sobre dinheiro."
  },
  {
    id: "book-2",
    title: "Segredos da Mente Milionária",
    author: "T. Harv Eker",
    category: "financas",
    description: "Descubra como sua programação mental sobre dinheiro determina seu sucesso financeiro.",
    whyImportant: "Revela os padrões mentais que separam ricos de pobres e como reprogramar sua mente para o sucesso.",
    forWho: "Pessoas que querem entender e mudar suas crenças limitantes sobre dinheiro."
  },
  {
    id: "book-3",
    title: "O Investidor Inteligente",
    author: "Benjamin Graham",
    category: "financas",
    description: "A bíblia dos investimentos, escrita pelo mentor de Warren Buffett.",
    whyImportant: "Ensina os princípios fundamentais do value investing e como investir com segurança.",
    forWho: "Investidores que querem aprender estratégias comprovadas de longo prazo."
  },
  {
    id: "book-4",
    title: "Antifrágil",
    author: "Nassim Nicholas Taleb",
    category: "financas",
    description: "Como se beneficiar do caos e da incerteza nos negócios e na vida.",
    whyImportant: "Ensina a criar sistemas que ficam mais fortes com a adversidade.",
    forWho: "Empreendedores e investidores que querem prosperar em tempos de crise."
  },
  {
    id: "book-5",
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    category: "produtividade",
    description: "Por que fazemos o que fazemos na vida e nos negócios.",
    whyImportant: "Explica a ciência dos hábitos e como mudá-los para alcançar seus objetivos.",
    forWho: "Qualquer pessoa que queira criar hábitos poderosos e eliminar os ruins."
  },

  // MARKETING DIGITAL / E-COMMERCE
  {
    id: "book-6",
    title: "A Bíblia do Marketing Digital",
    author: "Cláudio Torres",
    category: "marketing",
    description: "Guia completo sobre todas as estratégias de marketing digital.",
    whyImportant: "Cobre desde SEO até redes sociais, essencial para quem quer dominar o digital.",
    forWho: "Empreendedores digitais, profissionais de marketing e donos de e-commerce."
  },
  {
    id: "book-7",
    title: "Contágio",
    author: "Jonah Berger",
    category: "marketing",
    description: "Por que as coisas pegam e se tornam virais.",
    whyImportant: "Revela os 6 princípios que fazem produtos e ideias se espalharem.",
    forWho: "Criadores de conteúdo e profissionais de marketing que querem viralizar."
  },
  {
    id: "book-8",
    title: "This Is Marketing",
    author: "Seth Godin",
    category: "marketing",
    description: "Marketing não é sobre os produtos que você faz, mas sobre as histórias que você conta.",
    whyImportant: "Ensina marketing moderno focado em conexão e valor, não em interrupção.",
    forWho: "Empreendedores que querem construir marcas autênticas e duradouras."
  },
  {
    id: "book-9",
    title: "Copywriting para Mídias Sociais",
    author: "Vários autores",
    category: "marketing",
    description: "Como escrever textos que vendem nas redes sociais.",
    whyImportant: "Técnicas práticas de copywriting aplicadas ao ambiente digital.",
    forWho: "Profissionais de social media e afiliados que querem aumentar conversões."
  },

  // PRODUTIVIDADE / MINDSET
  {
    id: "book-10",
    title: "Hábitos Atômicos",
    author: "James Clear",
    category: "produtividade",
    description: "Mudanças pequenas, resultados extraordinários.",
    whyImportant: "Sistema comprovado para criar bons hábitos e eliminar os ruins.",
    forWho: "Qualquer pessoa que queira melhorar 1% a cada dia."
  },
  {
    id: "book-11",
    title: "Essencialismo",
    author: "Greg McKeown",
    category: "produtividade",
    description: "A disciplinada busca por menos.",
    whyImportant: "Ensina a focar apenas no que é essencial e eliminar o resto.",
    forWho: "Pessoas sobrecarregadas que querem fazer menos, mas melhor."
  },
  {
    id: "book-12",
    title: "O Milagre da Manhã",
    author: "Hal Elrod",
    category: "produtividade",
    description: "O segredo para transformar sua vida antes das 8h.",
    whyImportant: "Rotina matinal poderosa que transforma produtividade e bem-estar.",
    forWho: "Pessoas que querem começar o dia com energia e propósito."
  },
  {
    id: "book-13",
    title: "Mindset",
    author: "Carol Dweck",
    category: "produtividade",
    description: "A nova psicologia do sucesso.",
    whyImportant: "Diferença entre mentalidade fixa e de crescimento, e como isso afeta tudo.",
    forWho: "Qualquer pessoa que queira desenvolver resiliência e amor pelo aprendizado."
  },

  // SAÚDE E CORPO
  {
    id: "book-14",
    title: "Dieta Flexível na Prática",
    author: "Vários autores",
    category: "saude",
    description: "Como emagrecer sem dietas restritivas.",
    whyImportant: "Abordagem científica e sustentável para perda de peso.",
    forWho: "Pessoas que querem emagrecer de forma saudável e duradoura."
  },
  {
    id: "book-15",
    title: "O Corpo Fala",
    author: "Pierre Weil e Roland Tompakow",
    category: "saude",
    description: "A linguagem silenciosa da comunicação não-verbal.",
    whyImportant: "Entenda como seu corpo comunica emoções e estados mentais.",
    forWho: "Pessoas interessadas em autoconhecimento e comunicação."
  }
];

// 🎬 FILMES E SÉRIES RECOMENDADOS
export const recommendedMovies: Movie[] = [
  // FILMES
  {
    id: "movie-1",
    title: "À Procura da Felicidade",
    type: "filme",
    category: "Motivação",
    description: "História real de Chris Gardner, um pai que lutou contra a pobreza para se tornar um corretor de sucesso.",
    mainLesson: "Persistência e determinação podem superar qualquer obstáculo.",
    platformConnection: "Inspiração para nunca desistir dos seus sonhos, mesmo nas piores situações.",
    year: 2006,
    rating: 8.0
  },
  {
    id: "movie-2",
    title: "Fome de Poder",
    type: "filme",
    category: "Empreendedorismo",
    description: "A história de Ray Kroc e como ele transformou o McDonald's em um império global.",
    mainLesson: "Visão de negócios, escalabilidade e a importância de sistemas.",
    platformConnection: "Mostra como transformar uma ideia simples em um negócio bilionário.",
    year: 2016,
    rating: 7.2
  },
  {
    id: "movie-3",
    title: "O Lobo de Wall Street",
    type: "filme",
    category: "Finanças",
    description: "A ascensão e queda de Jordan Belfort no mercado financeiro.",
    mainLesson: "Vendas, persuasão e os perigos da ganância sem ética.",
    platformConnection: "Técnicas de vendas poderosas (use com ética!).",
    year: 2013,
    rating: 8.2
  },
  {
    id: "movie-4",
    title: "Joy",
    type: "filme",
    category: "Empreendedorismo",
    description: "História de Joy Mangano, inventora e empreendedora de sucesso.",
    mainLesson: "Criatividade, persistência e superação de obstáculos familiares.",
    platformConnection: "Inspiração para empreendedores que enfrentam desafios.",
    year: 2015,
    rating: 6.6
  },
  {
    id: "movie-5",
    title: "O Homem que Mudou o Jogo",
    type: "filme",
    category: "Estratégia",
    description: "Como Billy Beane revolucionou o baseball usando análise de dados.",
    mainLesson: "Inovação, análise de dados e pensar diferente da concorrência.",
    platformConnection: "Aplique análise de dados ao seu negócio para vencer.",
    year: 2011,
    rating: 7.6
  },
  {
    id: "movie-6",
    title: "Fyre Festival",
    type: "documentario",
    category: "Marketing",
    description: "O desastre do festival de música mais fraudulento da história.",
    mainLesson: "Os perigos do marketing sem substância e promessas vazias.",
    platformConnection: "Aprenda o que NÃO fazer em marketing e eventos.",
    year: 2019,
    rating: 7.2
  },

  // SÉRIES
  {
    id: "series-1",
    title: "Billions",
    type: "serie",
    category: "Finanças",
    description: "Batalha entre um bilionário hedge fund manager e um promotor público.",
    mainLesson: "Estratégia, negociação e o mundo das altas finanças.",
    platformConnection: "Mentalidade de alto nível financeiro e tomada de decisões.",
    year: 2016,
    rating: 8.3
  },
  {
    id: "series-2",
    title: "Suits",
    type: "serie",
    category: "Negócios",
    description: "Advogados brilhantes navegando pelo mundo corporativo de Nova York.",
    mainLesson: "Negociação, persuasão e inteligência emocional nos negócios.",
    platformConnection: "Habilidades de comunicação e fechamento de negócios.",
    year: 2011,
    rating: 8.5
  },
  {
    id: "series-3",
    title: "Mad Men",
    type: "serie",
    category: "Marketing",
    description: "O mundo da publicidade na década de 1960.",
    mainLesson: "Criatividade, storytelling e a arte da persuasão.",
    platformConnection: "Fundamentos atemporais de marketing e branding.",
    year: 2007,
    rating: 8.7
  },
  {
    id: "series-4",
    title: "Shark Tank",
    type: "serie",
    category: "Empreendedorismo",
    description: "Empreendedores apresentam seus negócios para investidores milionários.",
    mainLesson: "Pitch, avaliação de negócios e o que investidores procuram.",
    platformConnection: "Aprenda a apresentar seu negócio e entender valuation.",
    year: 2009,
    rating: 7.6
  },
  {
    id: "series-5",
    title: "Abstract",
    type: "serie",
    category: "Criatividade",
    description: "A arte do design através dos olhos de designers icônicos.",
    mainLesson: "Processo criativo, inovação e excelência no design.",
    platformConnection: "Inspiração para criar produtos e marcas memoráveis.",
    year: 2017,
    rating: 8.3
  },

  // DOCUMENTÁRIOS
  {
    id: "doc-1",
    title: "Minimalism",
    type: "documentario",
    category: "Estilo de Vida",
    description: "Como viver melhor com menos.",
    mainLesson: "Foco no essencial, liberdade financeira através da simplicidade.",
    platformConnection: "Elimine o desnecessário para focar no que importa.",
    year: 2016,
    rating: 7.0
  },
  {
    id: "doc-2",
    title: "Tony Robbins: Eu Não Sou Seu Guru",
    type: "documentario",
    category: "Desenvolvimento Pessoal",
    description: "Dentro do evento Date With Destiny de Tony Robbins.",
    mainLesson: "Transformação pessoal, coaching e superação de traumas.",
    platformConnection: "Técnicas de coaching e desenvolvimento pessoal de alto nível.",
    year: 2016,
    rating: 7.0
  },
  {
    id: "doc-3",
    title: "Explicando a Mente",
    type: "documentario",
    category: "Psicologia",
    description: "Como nossa mente funciona e nos engana.",
    mainLesson: "Vieses cognitivos, tomada de decisão e comportamento humano.",
    platformConnection: "Entenda como as pessoas pensam para vender e persuadir melhor.",
    year: 2019,
    rating: 7.8
  }
];

// 📺 CANAIS RECOMENDADOS
export const recommendedChannels: Channel[] = [
  {
    id: "channel-1",
    name: "Me Poupe!",
    category: "financas",
    description: "Nathalia Arcuri ensina educação financeira de forma divertida e prática.",
    youtubeUrl: "https://youtube.com/@MePoupeOficial"
  },
  {
    id: "channel-2",
    name: "Primo Rico",
    category: "financas",
    description: "Thiago Nigro compartilha estratégias de investimentos e enriquecimento.",
    youtubeUrl: "https://youtube.com/@ThiagoPrimoRico"
  },
  {
    id: "channel-3",
    name: "Neil Patel",
    category: "marketing",
    description: "Um dos maiores especialistas em marketing digital do mundo.",
    youtubeUrl: "https://youtube.com/@NeilPatel"
  },
  {
    id: "channel-4",
    name: "Pedro Sobral",
    category: "marketing",
    description: "Estratégias de marketing digital e vendas online.",
    youtubeUrl: "https://youtube.com/@PedroSobralOficial"
  },
  {
    id: "channel-5",
    name: "Caio Bottura",
    category: "saude",
    description: "Nutrição, dieta e emagrecimento baseado em ciência.",
    youtubeUrl: "https://youtube.com/@CaioBottura"
  },
  {
    id: "channel-6",
    name: "Cariani",
    category: "saude",
    description: "Treino, suplementação e hipertrofia muscular.",
    youtubeUrl: "https://youtube.com/@RenatoCariani"
  },
  {
    id: "channel-7",
    name: "Ecommerce na Prática",
    category: "ecommerce",
    description: "Bruno de Oliveira ensina tudo sobre e-commerce e dropshipping.",
    youtubeUrl: "https://youtube.com/@EcommercenaPratica"
  },
  {
    id: "channel-8",
    name: "Joel Jota",
    category: "motivacao",
    description: "Motivação, mentalidade e desenvolvimento pessoal.",
    youtubeUrl: "https://youtube.com/@JoelJota"
  }
];
