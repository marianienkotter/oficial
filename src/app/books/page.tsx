'use client';

import { Book, Sparkles, TrendingUp, Brain, Heart, DollarSign } from 'lucide-react';

// 📚 Dados dos Livros Recomendados
const bookCategories = [
  {
    id: 'finances',
    title: 'Finanças / Dinheiro / Riqueza',
    icon: DollarSign,
    color: 'from-yellow-500 to-amber-600',
    books: [
      {
        title: 'Pai Rico Pai Pobre',
        author: 'Robert Kiyosaki',
        description: 'O clássico sobre educação financeira que mudou a vida de milhões. Aprenda a diferença entre ativos e passivos.',
        why: 'Fundamental para entender como o dinheiro funciona e como construir riqueza.',
        forWho: 'Iniciantes em finanças que querem mudar sua mentalidade sobre dinheiro.',
        rating: 5
      },
      {
        title: 'Segredos da Mente Milionária',
        author: 'T. Harv Eker',
        description: 'Descubra como sua programação mental sobre dinheiro afeta seus resultados financeiros.',
        why: 'Ensina a reprogramar sua mente para o sucesso financeiro.',
        forWho: 'Quem quer desenvolver mentalidade de riqueza.',
        rating: 5
      },
      {
        title: 'O Poder do Hábito',
        author: 'Charles Duhigg',
        description: 'Como os hábitos funcionam e como transformá-los para alcançar seus objetivos.',
        why: 'Hábitos financeiros corretos são a base da riqueza sustentável.',
        forWho: 'Pessoas que querem criar hábitos financeiros sólidos.',
        rating: 5
      },
      {
        title: 'Antifrágil',
        author: 'Nassim Taleb',
        description: 'Como se beneficiar do caos e da incerteza nos investimentos e na vida.',
        why: 'Ensina a prosperar em ambientes de incerteza.',
        forWho: 'Investidores e empreendedores avançados.',
        rating: 4
      },
      {
        title: 'O Investidor Inteligente',
        author: 'Benjamin Graham',
        description: 'A bíblia do value investing, usado por Warren Buffett.',
        why: 'Fundamentos sólidos de investimento em ações.',
        forWho: 'Quem quer investir em ações com segurança.',
        rating: 5
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Digital / E-commerce',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-600',
    books: [
      {
        title: 'A Bíblia do Marketing Digital',
        author: 'Cláudio Torres',
        description: 'Guia completo sobre todas as estratégias de marketing digital.',
        why: 'Referência completa para quem quer dominar marketing online.',
        forWho: 'Empreendedores e profissionais de marketing.',
        rating: 5
      },
      {
        title: 'Contágio',
        author: 'Jonah Berger',
        description: 'Por que as coisas pegam e como fazer seu conteúdo viralizar.',
        why: 'Ensina os princípios científicos da viralização.',
        forWho: 'Criadores de conteúdo e marketeiros.',
        rating: 5
      },
      {
        title: 'This Is Marketing',
        author: 'Seth Godin',
        description: 'Marketing moderno focado em servir e criar conexões genuínas.',
        why: 'Mudança de paradigma no marketing contemporâneo.',
        forWho: 'Quem quer fazer marketing ético e eficaz.',
        rating: 5
      },
      {
        title: 'Copywriting para Mídias Sociais',
        author: 'Vários Autores',
        description: 'Como escrever textos que vendem nas redes sociais.',
        why: 'Essencial para converter seguidores em clientes.',
        forWho: 'Gestores de redes sociais e vendedores online.',
        rating: 4
      }
    ]
  },
  {
    id: 'productivity',
    title: 'Produtividade / Mindset',
    icon: Brain,
    color: 'from-purple-500 to-pink-600',
    books: [
      {
        title: 'Hábitos Atômicos',
        author: 'James Clear',
        description: 'Como pequenas mudanças geram grandes resultados através de hábitos.',
        why: 'O melhor livro sobre formação de hábitos já escrito.',
        forWho: 'Qualquer pessoa que quer melhorar sua vida.',
        rating: 5
      },
      {
        title: 'Essencialismo',
        author: 'Greg McKeown',
        description: 'A disciplina de fazer menos, mas melhor.',
        why: 'Ensina a focar no que realmente importa.',
        forWho: 'Pessoas sobrecarregadas que querem mais foco.',
        rating: 5
      },
      {
        title: 'O Milagre da Manhã',
        author: 'Hal Elrod',
        description: 'Como transformar sua vida antes das 8h da manhã.',
        why: 'Rotina matinal poderosa para alta performance.',
        forWho: 'Quem quer começar o dia com energia e propósito.',
        rating: 4
      },
      {
        title: 'Mindset',
        author: 'Carol Dweck',
        description: 'A diferença entre mentalidade fixa e mentalidade de crescimento.',
        why: 'Fundamental para desenvolvimento pessoal e profissional.',
        forWho: 'Todos que querem crescer continuamente.',
        rating: 5
      }
    ]
  },
  {
    id: 'health',
    title: 'Saúde e Corpo',
    icon: Heart,
    color: 'from-red-500 to-orange-600',
    books: [
      {
        title: 'Dieta Flexível na Prática',
        author: 'Vários Autores',
        description: 'Como emagrecer sem dietas restritivas e sofrimento.',
        why: 'Abordagem sustentável para perda de peso.',
        forWho: 'Quem quer emagrecer de forma saudável.',
        rating: 5
      },
      {
        title: 'O Corpo Fala',
        author: 'Pierre Weil',
        description: 'A linguagem silenciosa da comunicação não-verbal.',
        why: 'Entenda como seu corpo comunica emoções.',
        forWho: 'Interessados em comunicação e autoconhecimento.',
        rating: 4
      },
      {
        title: 'Mude Seus Dias',
        author: 'Vários Autores',
        description: 'Hábitos simples para transformar sua saúde.',
        why: 'Práticas diárias para bem-estar físico e mental.',
        forWho: 'Quem quer vida mais saudável e equilibrada.',
        rating: 4
      }
    ]
  }
];

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-2xl">
              <Book className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Biblioteca Elite
              </h1>
              <p className="text-gray-400 mt-2">
                Livros essenciais para sua jornada de transformação
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-white font-semibold">Curadoria Elite</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Livros selecionados por especialistas
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-white font-semibold">Transformação Real</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Conhecimento aplicável e prático
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-white font-semibold">Resultados Comprovados</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Livros que mudaram milhões de vidas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categorias de Livros */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {bookCategories.map((category) => {
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

                {/* Grid de Livros */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.books.map((book, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105"
                    >
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${
                              i < book.rating
                                ? 'bg-[#D4AF37]'
                                : 'bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Título e Autor */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        por {book.author}
                      </p>

                      {/* Descrição */}
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {book.description}
                      </p>

                      {/* Por que é importante */}
                      <div className="space-y-3">
                        <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg p-3">
                          <p className="text-[#D4AF37] text-xs font-semibold mb-1">
                            Por que ler?
                          </p>
                          <p className="text-gray-300 text-sm">
                            {book.why}
                          </p>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                          <p className="text-blue-400 text-xs font-semibold mb-1">
                            Para quem é?
                          </p>
                          <p className="text-gray-300 text-sm">
                            {book.forWho}
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
          <Book className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Comece sua jornada de conhecimento hoje
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Estes livros são a base do conhecimento dos maiores empreendedores e investidores do mundo.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-transform">
            Explorar Mais Recursos
          </button>
        </div>
      </div>
    </div>
  );
}
