'use client';

import { Film, Tv, FileVideo, Play, Star, TrendingUp, Brain, Briefcase } from 'lucide-react';

// 🎬 Dados de Filmes e Séries Recomendados
const mediaCategories = [
  {
    id: 'movies',
    title: 'Filmes Inspiradores',
    icon: Film,
    color: 'from-red-500 to-pink-600',
    items: [
      {
        title: 'A Procura da Felicidade',
        year: 2006,
        type: 'Filme',
        description: 'História real de Chris Gardner, um homem que superou a pobreza extrema para se tornar um corretor de sucesso.',
        lesson: 'Nunca desista dos seus sonhos, mesmo nas situações mais difíceis.',
        connection: 'Resiliência, determinação e mentalidade de crescimento.',
        rating: 5,
        duration: '117 min'
      },
      {
        title: 'Fome de Poder',
        year: 2016,
        type: 'Filme',
        description: 'A história de Ray Kroc e como ele transformou o McDonald\'s em um império global.',
        lesson: 'Visão, persistência e estratégia são fundamentais para escalar um negócio.',
        connection: 'Empreendedorismo, franchising e crescimento exponencial.',
        rating: 5,
        duration: '115 min'
      },
      {
        title: 'O Lobo de Wall Street',
        year: 2013,
        type: 'Filme',
        description: 'A ascensão e queda de Jordan Belfort no mercado financeiro.',
        lesson: 'Sucesso sem ética é insustentável. Aprenda vendas, mas com integridade.',
        connection: 'Vendas, persuasão e consequências de escolhas erradas.',
        rating: 4,
        duration: '180 min'
      },
      {
        title: 'Joy',
        year: 2015,
        type: 'Filme',
        description: 'História de Joy Mangano, inventora e empreendedora que criou um império.',
        lesson: 'Inovação, persistência e acreditar em si mesmo contra todas as probabilidades.',
        connection: 'Empreendedorismo feminino, inovação e superação.',
        rating: 4,
        duration: '124 min'
      },
      {
        title: 'Fyre Festival',
        year: 2019,
        type: 'Documentário',
        description: 'O desastre do festival de luxo que nunca aconteceu.',
        lesson: 'Marketing sem produto real é fraude. Entregue valor genuíno.',
        connection: 'Marketing digital, influenciadores e ética nos negócios.',
        rating: 5,
        duration: '97 min'
      },
      {
        title: 'O Homem que Mudou o Jogo',
        year: 2011,
        type: 'Filme',
        description: 'Como Billy Beane revolucionou o baseball usando análise de dados.',
        lesson: 'Dados e inovação podem superar recursos limitados.',
        connection: 'Estratégia, análise de dados e pensamento inovador.',
        rating: 5,
        duration: '133 min'
      }
    ]
  },
  {
    id: 'series',
    title: 'Séries de Negócios',
    icon: Tv,
    color: 'from-blue-500 to-cyan-600',
    items: [
      {
        title: 'Billions',
        year: 2016,
        type: 'Série',
        description: 'O mundo dos hedge funds, poder, estratégia e jogos de alto risco.',
        lesson: 'Estratégia, negociação e mentalidade de alto desempenho.',
        connection: 'Investimentos, poder e tomada de decisão sob pressão.',
        rating: 5,
        seasons: '7 temporadas'
      },
      {
        title: 'Suits',
        year: 2011,
        type: 'Série',
        description: 'Advogados corporativos, negociações e estratégias de alto nível.',
        lesson: 'Confiança, persuasão e construção de relacionamentos estratégicos.',
        connection: 'Negociação, liderança e comunicação eficaz.',
        rating: 5,
        seasons: '9 temporadas'
      },
      {
        title: 'Mad Men',
        year: 2007,
        type: 'Série',
        description: 'O mundo da publicidade nos anos 60 e a arte da persuasão.',
        lesson: 'Criatividade, branding e como vender ideias.',
        connection: 'Marketing, publicidade e psicologia do consumidor.',
        rating: 5,
        seasons: '7 temporadas'
      },
      {
        title: 'Shark Tank',
        year: 2009,
        type: 'Reality',
        description: 'Empreendedores apresentam seus negócios para investidores milionários.',
        lesson: 'Como fazer pitch, avaliar negócios e negociar investimentos.',
        connection: 'Empreendedorismo, investimentos e avaliação de negócios.',
        rating: 5,
        seasons: '15+ temporadas'
      },
      {
        title: 'Abstract',
        year: 2017,
        type: 'Documentário',
        description: 'A arte do design através dos olhos de designers lendários.',
        lesson: 'Criatividade, inovação e processo criativo de alto nível.',
        connection: 'Design thinking, inovação e excelência criativa.',
        rating: 5,
        seasons: '2 temporadas'
      }
    ]
  },
  {
    id: 'documentaries',
    title: 'Documentários Transformadores',
    icon: FileVideo,
    color: 'from-purple-500 to-pink-600',
    items: [
      {
        title: 'Minimalism',
        year: 2016,
        type: 'Documentário',
        description: 'Como viver melhor com menos e focar no que realmente importa.',
        lesson: 'Menos é mais. Foque no essencial para ter mais liberdade.',
        connection: 'Essencialismo, foco e qualidade de vida.',
        rating: 5,
        duration: '79 min'
      },
      {
        title: 'Tony Robbins: Eu Não Sou Seu Guru',
        year: 2016,
        type: 'Documentário',
        description: 'Nos bastidores do evento Date With Destiny de Tony Robbins.',
        lesson: 'Transformação pessoal profunda e poder da mentalidade.',
        connection: 'Desenvolvimento pessoal, coaching e transformação.',
        rating: 5,
        duration: '115 min'
      },
      {
        title: 'Explicando a Mente',
        year: 2019,
        type: 'Série Documental',
        description: 'Como nossa mente funciona e como podemos melhorá-la.',
        lesson: 'Entenda sua mente para tomar melhores decisões.',
        connection: 'Psicologia, neurociência e autoconhecimento.',
        rating: 5,
        seasons: '3 temporadas'
      },
      {
        title: 'The Social Dilemma',
        year: 2020,
        type: 'Documentário',
        description: 'O impacto das redes sociais na sociedade e comportamento.',
        lesson: 'Use tecnologia conscientemente e entenda algoritmos.',
        connection: 'Marketing digital, redes sociais e comportamento online.',
        rating: 5,
        duration: '94 min'
      }
    ]
  }
];

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-2xl">
              <Film className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Cinema Elite
              </h1>
              <p className="text-gray-400 mt-2">
                Filmes e séries que transformam mentalidade e inspiram ação
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-white font-semibold">Aprendizado Visual</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Histórias que ensinam lições valiosas
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-white font-semibold">Casos Reais</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Baseados em histórias de sucesso reais
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-white font-semibold">Inspiração Prática</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Conteúdo aplicável ao seu negócio
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categorias */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {mediaCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="space-y-6">
                {/* Título da Categoria */}
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>

                {/* Grid de Conteúdo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105"
                    >
                      {/* Header do Card */}
                      <div className={`bg-gradient-to-r ${category.color} p-6`}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                              {item.type}
                            </span>
                            <h3 className="text-xl font-bold text-white mt-1">
                              {item.title}
                            </h3>
                            <p className="text-white/70 text-sm mt-1">
                              {item.year} • {'duration' in item ? item.duration : item.seasons}
                            </p>
                          </div>
                          <Play className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform" />
                        </div>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < item.rating
                                  ? 'fill-white text-white'
                                  : 'text-white/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Conteúdo do Card */}
                      <div className="p-6 space-y-4">
                        {/* Descrição */}
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>

                        {/* Lição Principal */}
                        <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg p-3">
                          <p className="text-[#D4AF37] text-xs font-semibold mb-1">
                            💡 Lição Principal
                          </p>
                          <p className="text-gray-300 text-sm">
                            {item.lesson}
                          </p>
                        </div>

                        {/* Conexão com a Plataforma */}
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                          <p className="text-blue-400 text-xs font-semibold mb-1">
                            🎯 Conexão Elite Life
                          </p>
                          <p className="text-gray-300 text-sm">
                            {item.connection}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Final */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border border-[#D4AF37]/30 rounded-3xl p-12 text-center">
          <Film className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Aprenda enquanto se inspira
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Cada filme e série foi selecionado para complementar seu aprendizado na Elite Life.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-transform">
            Voltar aos Cursos
          </button>
        </div>
      </div>
    </div>
  );
}
