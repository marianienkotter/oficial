"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Video,
  Target,
  Zap,
  Shield,
  Clock,
  Trophy,
  Sparkles
} from "lucide-react";

export default function LandingPage() {
  const plans = [
    {
      name: "Grátis",
      price: "R$ 0",
      period: "/mês",
      description: "Ideal para começar sua jornada",
      features: [
        "Acesso a 3 cursos básicos",
        "Comunidade exclusiva",
        "Certificado digital",
        "Suporte por email"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "R$ 97",
      period: "/mês",
      description: "Para quem quer resultados reais",
      features: [
        "Acesso a todos os cursos",
        "Mentorias em grupo semanais",
        "Certificados profissionais",
        "Suporte prioritário",
        "Material complementar",
        "Comunidade VIP"
      ],
      highlighted: false
    },
    {
      name: "Premium",
      price: "R$ 197",
      period: "/mês",
      description: "Transformação completa garantida",
      features: [
        "Tudo do plano Pro",
        "Mentoria individual mensal",
        "Acesso vitalício aos cursos",
        "Grupo exclusivo de networking",
        "Workshops ao vivo",
        "Suporte 24/7"
      ],
      highlighted: true
    },
    {
      name: "Elite",
      price: "R$ 497",
      period: "/mês",
      description: "Para quem busca a excelência",
      features: [
        "Tudo do plano Premium",
        "Mentoria individual semanal",
        "Acesso a eventos presenciais",
        "Consultoria personalizada",
        "Networking com empresários",
        "Garantia de resultados"
      ],
      highlighted: false
    }
  ];

  const benefits = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educação de Qualidade",
      description: "Cursos desenvolvidos por especialistas com metodologia comprovada"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco em Resultados",
      description: "Sistema gamificado que mantém você motivado e no caminho certo"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Ativa",
      description: "Mais de 50 mil alunos transformando suas vidas juntos"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificados Reconhecidos",
      description: "Certificados digitais que valorizam seu currículo"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Conteúdo Atualizado",
      description: "Novos cursos e materiais adicionados mensalmente"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia de 7 Dias",
      description: "Não gostou? Devolvemos 100% do seu investimento"
    }
  ];

  const modules = [
    {
      name: "Finanças",
      description: "Aprenda a gerenciar seu dinheiro e investir com inteligência",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Mindset",
      description: "Desenvolva mentalidade de alta performance e sucesso",
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Produtividade",
      description: "Técnicas comprovadas para multiplicar seus resultados",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Saúde",
      description: "Cuide do seu corpo e mente para ter energia máxima",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "E-commerce",
      description: "Construa seu negócio online do zero ao primeiro milhão",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Marketing",
      description: "Domine as estratégias que geram vendas reais",
      color: "from-yellow-500 to-amber-600"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empreendedor",
      avatar: "https://i.pravatar.cc/150?img=1",
      text: "Em 3 meses consegui organizar minhas finanças e começar a investir. Hoje tenho uma renda passiva de R$ 2.000/mês!"
    },
    {
      name: "Ana Paula",
      role: "Estudante",
      avatar: "https://i.pravatar.cc/150?img=5",
      text: "A Elite Life mudou minha vida! Consegui meu primeiro emprego na área que sempre sonhei graças aos cursos."
    },
    {
      name: "Roberto Mendes",
      role: "Empresário",
      avatar: "https://i.pravatar.cc/150?img=3",
      text: "Aumentei minha produtividade em 300% aplicando as técnicas ensinadas. Recomendo de olhos fechados!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-[#D4AF37]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white">ELITE LIFE</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="px-6 py-2 text-white hover:text-[#D4AF37] transition-colors font-medium"
              >
                Entrar
              </Link>
              <Link
                href="/dashboard"
                className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
              >
                Criar conta
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-semibold">Mais de 50 mil alunos transformados</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transforme sua vida em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-600">
                90 dias
              </span>
            </h1>
            
            <p className="text-xl text-[#9A9A9A] mb-8 max-w-3xl mx-auto">
              Corpo, mente e dinheiro no mesmo lugar. A plataforma completa de educação para quem busca resultados reais.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center gap-2"
              >
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 bg-[#1A1A1A] border border-[#D4AF37]/30 text-white rounded-xl font-bold text-lg hover:bg-[#2A2A2A] transition-all">
                Ver planos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">50k+</div>
                <div className="text-[#9A9A9A]">Alunos Ativos</div>
              </div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">200+</div>
                <div className="text-[#9A9A9A]">Cursos</div>
              </div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">98%</div>
                <div className="text-[#9A9A9A]">Satisfação</div>
              </div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">24/7</div>
                <div className="text-[#9A9A9A]">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Por que escolher a Elite Life?
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Tudo que você precisa para alcançar seus objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all"
              >
                <div className="text-[#D4AF37] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-[#9A9A9A]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Módulos de Aprendizado
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Conteúdo completo para transformar todas as áreas da sua vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:scale-105 transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{module.name}</h3>
                <p className="text-[#9A9A9A]">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Escolha seu plano
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Invista em você e comece sua transformação hoje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border ${
                  plan.highlighted
                    ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-105"
                    : "border-[#D4AF37]/20"
                } transition-all`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MAIS POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[#9A9A9A] text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#D4AF37]">{plan.price}</span>
                  <span className="text-[#9A9A9A]">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-[#9A9A9A] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/dashboard"
                  className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] hover:shadow-lg hover:shadow-[#D4AF37]/50"
                      : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
                  }`}
                >
                  Começar agora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              O que nossos alunos dizem
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Histórias reais de transformação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                
                <p className="text-[#9A9A9A] mb-6">{testimonial.text}</p>
                
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-[#D4AF37]"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-[#9A9A9A] text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#D4AF37]/10 to-amber-600/10 border-y border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl text-[#9A9A9A] mb-8">
            Junte-se a mais de 50 mil alunos que já estão no caminho do sucesso
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
          >
            Começar agora gratuitamente
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-[#9A9A9A] text-sm mt-4">
            Sem cartão de crédito necessário • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white">ELITE LIFE</span>
            </div>
            
            <div className="text-[#9A9A9A] text-sm">
              © 2025 Elite Life. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">
                Termos
              </Link>
              <Link href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
