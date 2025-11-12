'use client';

import { Button } from '@/components/ui/button';
import { Check, Lock, Crown, Sparkles, TrendingUp, ShoppingCart } from 'lucide-react';
import { getTranslation, type Language } from '@/lib/translations';

interface PricingSectionProps {
  lang: Language;
}

export default function PricingSection({ lang }: PricingSectionProps) {
  const t = (key: string) => getTranslation(lang, key);

  const plans = [
    {
      id: 'free',
      name: t('free'),
      price: 'R$ 0',
      period: '',
      description: 'Experimente o básico',
      features: [
        { text: t('limitedSchedule'), included: true },
        { text: t('basicTracker'), included: true },
        { text: t('reportAfter7Days'), included: true },
        { text: t('noAI'), included: false },
        { text: t('allCourses'), included: false },
        { text: t('certificates'), included: false },
      ],
      cta: t('freeTrial'),
      badge: null,
      color: 'gray',
      icon: Lock,
    },
    {
      id: 'pro',
      name: t('pro'),
      price: 'R$ 49,90',
      period: '/mês',
      description: 'Para quem quer resultados',
      features: [
        { text: t('allCourses'), included: true },
        { text: t('activities'), included: true },
        { text: t('quizzes'), included: true },
        { text: t('aiSupport'), included: true },
        { text: t('weeklyReports'), included: true },
        { text: t('fullSchedule'), included: true },
        { text: t('advancedTracker'), included: true },
        { text: t('certificates'), included: true },
      ],
      cta: t('subscribeNow'),
      badge: null,
      color: 'gold',
      icon: Crown,
    },
    {
      id: 'proplus',
      name: t('proPlus'),
      price: 'R$ 79,90',
      period: '/mês',
      description: 'Máxima performance',
      features: [
        { text: 'Tudo do Pro +', included: true },
        { text: t('exclusiveCommunity'), included: true },
        { text: t('challenges30Days'), included: true },
        { text: t('badgeSystem'), included: true },
        { text: t('performanceReports'), included: true },
        { text: 'Conteúdos premium', included: true },
        { text: 'Suporte prioritário', included: true },
      ],
      cta: t('subscribeNow'),
      badge: t('mostPopular'),
      color: 'gold',
      icon: Sparkles,
      popular: true,
    },
    {
      id: 'annual',
      name: t('annual'),
      price: 'R$ 299',
      period: '/ano',
      description: 'Economia de 2 meses',
      features: [
        { text: 'Tudo do Pro Plus', included: true },
        { text: 'Economia de R$ 659,80', included: true },
        { text: 'Acesso vitalício a atualizações', included: true },
        { text: 'Bônus exclusivos', included: true },
        { text: 'Certificados ilimitados', included: true },
      ],
      cta: t('subscribeNow'),
      badge: t('fullAccess'),
      color: 'gold',
      icon: Crown,
    },
    {
      id: 'influencer',
      name: t('influencer'),
      price: 'R$ 39,99',
      period: '/mês',
      description: 'Para criadores de conteúdo',
      features: [
        { text: t('celebrityDiets'), included: true },
        { text: t('aiThumbnails'), included: true },
        { text: t('aiScripts'), included: true },
        { text: t('viralHashtags'), included: true },
        { text: t('contentCalendar'), included: true },
        { text: t('advancedTracker'), included: true },
        { text: t('weeklyReports'), included: true },
      ],
      cta: t('subscribeNow'),
      badge: 'Exclusivo',
      color: 'pink',
      icon: TrendingUp,
    },
    {
      id: 'ecommerce',
      name: t('ecommercePro'),
      price: 'R$ 89,90',
      period: '/mês',
      description: 'Domine vendas online',
      features: [
        { text: t('mlTraining'), included: true },
        { text: t('amazonTraining'), included: true },
        { text: t('shopeeTraining'), included: true },
        { text: t('paidTraffic'), included: true },
        { text: t('googleAds'), included: true },
        { text: '+ de 1000 atividades', included: true },
        { text: 'Certificado E-commerce', included: true },
      ],
      cta: t('subscribeNow'),
      badge: 'Completo',
      color: 'blue',
      icon: ShoppingCart,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0B0B] to-[#1A1A1A]" id="planos">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha seu <span className="text-[#D4AF37]">Plano</span>
          </h2>
          <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto">
            Invista em você. Todos os planos incluem garantia de 7 dias.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            const isPink = plan.color === 'pink';
            const isBlue = plan.color === 'blue';
            const isFree = plan.id === 'free';

            return (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] rounded-2xl p-6 border-2 transition-all hover:scale-105 ${
                  isPopular
                    ? 'border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/50'
                    : isPink
                    ? 'border-pink-500/50 hover:border-pink-500'
                    : isBlue
                    ? 'border-blue-500/50 hover:border-blue-500'
                    : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B]'
                        : isPink
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                        : isBlue
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-[#D4AF37] text-[#0B0B0B]'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isPink
                      ? 'bg-gradient-to-br from-pink-500 to-rose-500'
                      : isBlue
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                      : 'bg-gradient-to-br from-[#D4AF37] to-[#FFD700]'
                  }`}
                >
                  <Icon className="w-6 h-6 text-[#0B0B0B]" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[#9A9A9A] text-sm mb-4">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${
                        isPink ? 'text-pink-500' : isBlue ? 'text-blue-500' : 'text-[#D4AF37]'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-[#9A9A9A]">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            isPink ? 'text-pink-500' : isBlue ? 'text-blue-500' : 'text-[#D4AF37]'
                          }`}
                        />
                      ) : (
                        <Lock className="w-5 h-5 text-[#9A9A9A] flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-white' : 'text-[#9A9A9A] line-through'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full font-bold ${
                    isFree
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : isPink
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:opacity-90'
                      : isBlue
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90'
                      : 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0B0B0B] hover:opacity-90'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Affiliate CTA */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Plano VIP Afilhados</h3>
            <p className="text-[#9A9A9A] mb-4">
              Ganhe 20% na primeira venda e 15% nas seguintes. Bônus de R$ 250 ao atingir R$ 3.500 em vendas!
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:opacity-90">
              Torne-se Afilhado Grátis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
