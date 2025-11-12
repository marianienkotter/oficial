'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, TrendingUp, Users, Award } from 'lucide-react';
import { getTranslation, type Language } from '@/lib/translations';

interface HeroSectionProps {
  lang: Language;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = (key: string) => getTranslation(lang, key);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-8">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-semibold">Método Exclusivo ELITE LIFE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{t('heroTitle')}</span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              em 90 dias
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#9A9A9A] mb-8 max-w-3xl mx-auto">
            Corpo, mente e dinheiro no mesmo lugar. Junte-se a mais de <span className="text-[#D4AF37] font-semibold">50.000 alunos</span> que já transformaram suas vidas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] font-bold text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105 shadow-2xl shadow-[#D4AF37]/50"
            >
              {t('createAccount')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#D4AF37] text-[#D4AF37] font-semibold text-lg px-8 py-6 hover:bg-[#D4AF37]/10"
            >
              {t('freeTrial')}
              <Play className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white font-semibold text-lg px-8 py-6 hover:bg-white/10"
            >
              {t('login')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#9A9A9A]">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] border-2 border-[#0B0B0B]"></div>
                ))}
              </div>
              <span>+ de 50 mil alunos</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <span className="ml-2">4.9/5 (12.543 avaliações)</span>
            </div>
          </div>
        </div>

        {/* Social Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 - Vidas Transformadas */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#0B0B0B]" />
            </div>
            <h3 className="text-[#D4AF37] font-bold text-3xl mb-2">50.000+</h3>
            <p className="text-white font-semibold mb-1">Vidas Transformadas</p>
            <p className="text-[#9A9A9A] text-sm">Alunos ativos em mais de 30 países</p>
          </div>

          {/* Card 2 - Valor Gerado */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-[#0B0B0B]" />
            </div>
            <h3 className="text-[#D4AF37] font-bold text-3xl mb-2">R$ 250M+</h3>
            <p className="text-white font-semibold mb-1">Valor Gerado</p>
            <p className="text-[#9A9A9A] text-sm">Em resultados financeiros dos alunos</p>
          </div>

          {/* Card 3 - Avaliações */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-[#0B0B0B]" />
            </div>
            <h3 className="text-[#D4AF37] font-bold text-3xl mb-2">4.9/5</h3>
            <p className="text-white font-semibold mb-1">Avaliação Média</p>
            <p className="text-[#9A9A9A] text-sm">Baseado em 12.543 avaliações reais</p>
          </div>
        </div>

        {/* Testimonial Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-[#D4AF37]/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-white text-lg mb-3 italic">
                  "Em 90 dias, perdi 15kg, organizei minhas finanças e comecei meu negócio online. O ELITE LIFE mudou completamente minha vida!"
                </p>
                <div>
                  <p className="text-[#D4AF37] font-semibold">Carlos Mendes</p>
                  <p className="text-[#9A9A9A] text-sm">Empresário • São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
