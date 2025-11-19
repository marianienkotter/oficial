// Definições dos planos da Elite Life

export type PlanType = 'free' | 'pro' | 'pro_plus' | 'elite' | 'elite_anual' | 'influencer_pro';

export interface Plan {
  id: PlanType;
  name: string;
  price: number;
  priceLabel: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  features: {
    name: string;
    included: boolean;
    locked?: boolean;
  }[];
  highlighted?: boolean;
  popular?: boolean;
  bestValue?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    priceLabel: 'Grátis',
    description: 'Comece sua jornada',
    features: [
      { name: 'Acesso aos cursos principais', included: false },
      { name: 'Acesso completo aos vídeos', included: false },
      { name: 'Certificados', included: false },
      { name: 'Agenda Básica', included: true },
      { name: 'Agenda Premium', included: false },
      { name: 'IA Tutor ilimitada', included: false },
      { name: 'Trilhas avançadas', included: false },
      { name: 'Influencer Pro', included: false, locked: true },
      { name: 'E-commerce Pro', included: false },
      { name: 'Lives Privadas', included: false },
      { name: 'Ranking Pro', included: false },
      { name: 'Ranking Elite', included: false },
      { name: 'Comunidade VIP', included: false },
      { name: 'Medalhas especiais', included: false },
      { name: 'XP Premium', included: false },
      { name: 'Suporte prioritário', included: false },
      { name: 'Acesso antecipado a novos cursos', included: false },
      { name: 'Curso bônus anual', included: false },
      { name: 'Badge Especial no Perfil', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29.90,
    priceLabel: 'R$ 29,90/mês',
    description: 'Para quem quer evoluir',
    features: [
      { name: 'Acesso aos cursos principais', included: true },
      { name: 'Acesso completo aos vídeos', included: true },
      { name: 'Certificados', included: true },
      { name: 'Agenda Básica', included: true },
      { name: 'Agenda Premium', included: false },
      { name: 'IA Tutor ilimitada', included: false },
      { name: 'Trilhas avançadas', included: true },
      { name: 'Influencer Pro', included: false, locked: true },
      { name: 'E-commerce Pro', included: false },
      { name: 'Lives Privadas', included: false },
      { name: 'Ranking Pro', included: true },
      { name: 'Ranking Elite', included: false },
      { name: 'Comunidade VIP', included: false },
      { name: 'Medalhas especiais', included: true },
      { name: 'XP Premium', included: false },
      { name: 'Suporte prioritário', included: false },
      { name: 'Acesso antecipado a novos cursos', included: false },
      { name: 'Curso bônus anual', included: false },
      { name: 'Badge Especial no Perfil', included: true },
    ],
  },
  {
    id: 'pro_plus',
    name: 'Pro Plus',
    price: 49.90,
    priceLabel: 'R$ 49,90/mês',
    badge: 'Melhor escolha',
    badgeColor: 'from-purple-500 to-pink-500',
    description: 'Máximo desempenho',
    popular: true,
    features: [
      { name: 'Acesso aos cursos principais', included: true },
      { name: 'Acesso completo aos vídeos', included: true },
      { name: 'Certificados', included: true },
      { name: 'Agenda Básica', included: true },
      { name: 'Agenda Premium', included: true },
      { name: 'IA Tutor ilimitada', included: true },
      { name: 'Trilhas avançadas', included: true },
      { name: 'Influencer Pro', included: false, locked: true },
      { name: 'E-commerce Pro', included: true },
      { name: 'Lives Privadas', included: true },
      { name: 'Ranking Pro', included: true },
      { name: 'Ranking Elite', included: false },
      { name: 'Comunidade VIP', included: true },
      { name: 'Medalhas especiais', included: true },
      { name: 'XP Premium', included: true },
      { name: 'Suporte prioritário', included: true },
      { name: 'Acesso antecipado a novos cursos', included: true },
      { name: 'Curso bônus anual', included: false },
      { name: 'Badge Especial no Perfil', included: true },
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 79.90,
    priceLabel: 'R$ 79,90/mês',
    badge: 'Completo',
    badgeColor: 'from-[#D4AF37] to-amber-500',
    description: 'Experiência completa',
    highlighted: true,
    features: [
      { name: 'Acesso aos cursos principais', included: true },
      { name: 'Acesso completo aos vídeos', included: true },
      { name: 'Certificados', included: true },
      { name: 'Agenda Básica', included: true },
      { name: 'Agenda Premium', included: true },
      { name: 'IA Tutor ilimitada', included: true },
      { name: 'Trilhas avançadas', included: true },
      { name: 'Influencer Pro', included: false, locked: true },
      { name: 'E-commerce Pro', included: true },
      { name: 'Lives Privadas', included: true },
      { name: 'Ranking Pro', included: true },
      { name: 'Ranking Elite', included: true },
      { name: 'Comunidade VIP', included: true },
      { name: 'Medalhas especiais', included: true },
      { name: 'XP Premium', included: true },
      { name: 'Suporte prioritário', included: true },
      { name: 'Acesso antecipado a novos cursos', included: true },
      { name: 'Curso bônus anual', included: true },
      { name: 'Badge Especial no Perfil', included: true },
    ],
  },
  {
    id: 'elite_anual',
    name: 'Anual Elite',
    price: 497.00,
    priceLabel: 'R$ 497,00/ano',
    badge: 'Melhor preço',
    badgeColor: 'from-green-500 to-emerald-500',
    description: '2 meses grátis',
    bestValue: true,
    features: [
      { name: 'Acesso aos cursos principais', included: true },
      { name: 'Acesso completo aos vídeos', included: true },
      { name: 'Certificados', included: true },
      { name: 'Agenda Básica', included: true },
      { name: 'Agenda Premium', included: true },
      { name: 'IA Tutor ilimitada', included: true },
      { name: 'Trilhas avançadas', included: true },
      { name: 'Influencer Pro', included: false, locked: true },
      { name: 'E-commerce Pro', included: true },
      { name: 'Lives Privadas', included: true },
      { name: 'Ranking Pro', included: true },
      { name: 'Ranking Elite', included: true },
      { name: 'Comunidade VIP', included: true },
      { name: 'Medalhas especiais', included: true },
      { name: 'XP Premium', included: true },
      { name: 'Suporte prioritário', included: true },
      { name: 'Acesso antecipado a novos cursos', included: true },
      { name: 'Curso bônus anual', included: true },
      { name: 'Badge Especial no Perfil', included: true },
    ],
  },
  {
    id: 'influencer_pro',
    name: 'Influencer Pro',
    price: 0,
    priceLabel: 'Desbloqueado com 5 vendas',
    badge: 'Exclusivo',
    badgeColor: 'from-pink-500 to-rose-500',
    description: 'Para criadores de conteúdo',
    features: [
      { name: 'Acesso aos cursos principais', included: true },
      { name: 'Acesso completo aos vídeos', included: true },
      { name: 'Certificados', included: true },
      { name: 'Agenda Básica', included: true },
      { name: 'Agenda Premium', included: true },
      { name: 'IA Tutor ilimitada', included: true },
      { name: 'Trilhas avançadas', included: true },
      { name: 'Influencer Pro', included: true, locked: false },
      { name: 'E-commerce Pro', included: true },
      { name: 'Lives Privadas', included: true },
      { name: 'Ranking Pro', included: true },
      { name: 'Ranking Elite', included: true },
      { name: 'Comunidade VIP', included: true },
      { name: 'Medalhas especiais', included: true },
      { name: 'XP Premium', included: true },
      { name: 'Suporte prioritário', included: true },
      { name: 'Acesso antecipado a novos cursos', included: true },
      { name: 'Curso bônus anual', included: true },
      { name: 'Badge Especial no Perfil', included: true },
    ],
  },
];

// Verificar se usuário tem acesso a um recurso
export function hasFeatureAccess(userPlan: PlanType, featureName: string): boolean {
  const plan = PLANS.find(p => p.id === userPlan);
  if (!plan) return false;
  
  const feature = plan.features.find(f => f.name === featureName);
  return feature?.included || false;
}

// Obter plano por ID
export function getPlanById(planId: PlanType): Plan | undefined {
  return PLANS.find(p => p.id === planId);
}
