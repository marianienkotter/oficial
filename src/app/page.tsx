'use client';

import { useState } from 'react';
import Header from '@/components/custom/Header';
import HeroSection from '@/components/custom/HeroSection';
import PricingSection from '@/components/custom/PricingSection';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Video, 
  Calendar, 
  Activity, 
  Wallet, 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Trophy, 
  LayoutDashboard, 
  Award,
  MessageCircle,
  Instagram,
  Send,
  Star,
  Play,
  Lock,
  CheckCircle2
} from 'lucide-react';
import type { Language } from '@/lib/translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection lang={lang} />

      {/* Quiz Section */}
      <section className="py-20 bg-[#0B0B0B]" id="quiz">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border-2 border-[#D4AF37] rounded-2xl p-12">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#0B0B0B]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Descubra seu Perfil ELITE
              </h2>
              <p className="text-xl text-[#9A9A9A] mb-8">
                Responda 15 perguntas e receba um plano personalizado para transformar sua vida em 90 dias
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] font-bold text-lg px-12 py-6 hover:opacity-90"
              >
                Começar Quiz Gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection lang={lang} />

      {/* Features Overview */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0B0B0B]" id="recursos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tudo que você precisa em <span className="text-[#D4AF37]">um só lugar</span>
            </h2>
            <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto">
              Ferramentas completas para transformar corpo, mente e finanças
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Feature Cards */}
            {[
              {
                icon: BookOpen,
                title: '+ de 100 Cursos',
                description: 'Conteúdo completo sobre saúde, fitness, finanças e negócios',
                href: '#cursos'
              },
              {
                icon: Video,
                title: 'Vídeos Exclusivos',
                description: 'Motivacional, fitness, saúde, finanças, influencer e e-commerce',
                href: '#videos'
              },
              {
                icon: Calendar,
                title: 'Agenda Inteligente',
                description: 'Organize sua rotina com streaks e lembretes automáticos',
                href: '#agenda'
              },
              {
                icon: Activity,
                title: 'Tracker Completo',
                description: 'Monitore água, calorias, macros, treino, sono e muito mais',
                href: '#tracker'
              },
              {
                icon: Wallet,
                title: 'Carteira Digital',
                description: 'Gerencie finanças com bolsos inteligentes e gráficos',
                href: '#carteira'
              },
              {
                icon: TrendingUp,
                title: 'Influencer Pro',
                description: 'IA para thumbnails, scripts e 400 dietas de famosos',
                href: '#influencer'
              },
              {
                icon: ShoppingCart,
                title: 'E-commerce Pro',
                description: 'Domine Mercado Livre, Amazon e Shopee',
                href: '#ecommerce'
              },
              {
                icon: Users,
                title: 'Sistema de Afiliados',
                description: 'Ganhe 20% na primeira venda e 15% nas seguintes',
                href: '#afilhados'
              },
              {
                icon: Trophy,
                title: 'Ranking & Gamificação',
                description: 'Ganhe pontos, medalhas e compete com outros alunos',
                href: '#ranking'
              },
              {
                icon: LayoutDashboard,
                title: 'Dashboard Completo',
                description: 'Visualize todo seu progresso em um só lugar',
                href: '#dashboard'
              },
              {
                icon: Award,
                title: 'Certificados',
                description: 'Certificados ELITE LIFE ao concluir cada curso',
                href: '#certificados'
              },
              {
                icon: MessageCircle,
                title: 'Suporte IA 24/7',
                description: 'Assistente inteligente que entende todas as funções',
                href: '#suporte-ia'
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <a
                  key={index}
                  href={feature.href}
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#0B0B0B]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-[#9A9A9A] text-sm">{feature.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-[#0B0B0B]" id="cursos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              + de 100 Cursos <span className="text-[#D4AF37]">Completos</span>
            </h2>
            <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto">
              Conteúdo atualizado com 1000 atividades e 1000 questionários
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: 'Finanças Pessoais', category: 'Finanças', lessons: 24, locked: false },
              { title: 'Treino Funcional', category: 'Fitness', lessons: 32, locked: true },
              { title: 'Nutrição Avançada', category: 'Saúde', lessons: 28, locked: true },
              { title: 'Marketing Digital', category: 'Negócios', lessons: 36, locked: true },
              { title: 'Mindset de Sucesso', category: 'Motivacional', lessons: 20, locked: true },
              { title: 'E-commerce do Zero', category: 'E-commerce', lessons: 40, locked: true },
              { title: 'Criação de Conteúdo', category: 'Influencer', lessons: 30, locked: true },
              { title: 'Investimentos', category: 'Finanças', lessons: 25, locked: true },
            ].map((course, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all hover:scale-105 group"
              >
                {/* Course Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 flex items-center justify-center">
                  {course.locked && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <Lock className="w-12 h-12 text-[#D4AF37]" />
                    </div>
                  )}
                  <BookOpen className="w-16 h-16 text-[#D4AF37]/50" />
                </div>

                {/* Course Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full">
                      {course.category}
                    </span>
                    <span className="text-xs text-[#9A9A9A]">{course.lessons} aulas</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">{course.title}</h3>
                  <Button
                    size="sm"
                    variant={course.locked ? 'outline' : 'default'}
                    className={
                      course.locked
                        ? 'w-full border-[#D4AF37] text-[#D4AF37]'
                        : 'w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B]'
                    }
                  >
                    {course.locked ? (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Assinar para acessar
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Ver Preview
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] font-bold px-12"
            >
              Ver Todos os Cursos
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0B0B0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resultados <span className="text-[#D4AF37]">Reais</span>
            </h2>
            <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto">
              Veja o que nossos alunos estão conquistando
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Ana Paula',
                result: 'Perdi 18kg em 3 meses',
                text: 'O método ELITE LIFE mudou minha relação com a comida e exercícios. Nunca me senti tão bem!',
                rating: 5,
              },
              {
                name: 'Ricardo Santos',
                result: 'Faturei R$ 50mil no primeiro mês',
                text: 'Os cursos de e-commerce são incríveis. Aprendi tudo sobre Mercado Livre e Amazon.',
                rating: 5,
              },
              {
                name: 'Juliana Costa',
                result: '100mil seguidores em 60 dias',
                text: 'O Influencer Pro com IA de thumbnails e scripts virais transformou meu canal!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-[#D4AF37]/20 rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-[#D4AF37] font-bold text-lg mb-2">{testimonial.result}</p>
                <p className="text-white mb-4 italic">"{testimonial.text}"</p>
                <p className="text-[#9A9A9A] text-sm">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0B0B] border-t border-[#D4AF37]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <span className="text-[#0B0B0B] font-bold text-xl">EL</span>
                </div>
                <div>
                  <h3 className="text-[#D4AF37] font-bold text-lg">ELITE LIFE</h3>
                </div>
              </div>
              <p className="text-[#9A9A9A] text-sm">
                Transforme sua vida em 90 dias com o método exclusivo ELITE LIFE.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#cursos" className="text-[#9A9A9A] hover:text-[#D4AF37] text-sm">Cursos</a></li>
                <li><a href="#planos" className="text-[#9A9A9A] hover:text-[#D4AF37] text-sm">Planos</a></li>
                <li><a href="#afilhados" className="text-[#9A9A9A] hover:text-[#D4AF37] text-sm">Afiliados</a></li>
                <li><a href="#certificados" className="text-[#9A9A9A] hover:text-[#D4AF37] text-sm">Certificados</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] text-sm">Central de Ajuda</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] text-sm">Termos de Uso</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] text-sm">Privacidade</a></li>
                <li><a href="#" className="text-[#9A A9A] hover:text-[#D4AF37] text-sm">Contato</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Siga-nos</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/elitelife_experience"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5 text-[#D4AF37]" />
                </a>
                <a
                  href="https://t.me/boost/elitelifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center transition-all"
                >
                  <Send className="w-5 h-5 text-[#D4AF37]" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-8 text-center">
            <p className="text-[#9A9A9A] text-sm">
              © 2024 ELITE LIFE. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Support Button (Floating) */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full shadow-2xl shadow-[#D4AF37]/50 flex items-center justify-center hover:scale-110 transition-all z-50">
        <MessageCircle className="w-8 h-8 text-[#0B0B0B]" />
      </button>
    </div>
  );
}
