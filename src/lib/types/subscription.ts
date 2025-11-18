// Tipos de planos e assinaturas

export type PlanId = "free" | "pro" | "pro-plus" | "elite" | "anual" | "influencer-pro" | "ecommerce-pro";

export interface Plan {
  id: PlanId;
  name: string;
  price: number;
  priceAnnual?: number;
  interval: "monthly" | "annual";
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

export interface UserSubscription {
  id: string;
  userId: string;
  planId: PlanId;
  status: "active" | "cancelled" | "expired" | "pending";
  startDate: string;
  nextBillingDate?: string;
  paymentMethod: "card" | "pix" | "debit";
  stripeSubscriptionId?: string;
  stripeCustomerId?: string;
}

export interface UserPermissions {
  userId: string;
  // Permissões básicas
  acesso_cursos: boolean;
  acesso_videos: boolean;
  acesso_agenda: boolean;
  acesso_tracker: boolean;
  acesso_certificados: boolean;
  
  // Permissões avançadas
  acesso_comunidade: boolean;
  acesso_ia_premium: boolean;
  acesso_influencer: boolean;
  acesso_ecommerce: boolean;
  acesso_dashboards: boolean;
  acesso_carteira: boolean;
  acesso_desafios: boolean;
  acesso_ranking: boolean;
  acesso_relatorios: boolean;
}

export interface PromoCode {
  id: string;
  code: string;
  discount: number; // Porcentagem de desconto
  type: "percentage" | "fixed";
  validUntil: string;
  maxUses: number;
  currentUses: number;
  active: boolean;
}

export const PLANS: Record<PlanId, Plan> = {
  free: {
    id: "free",
    name: "Free",
    price: 0,
    interval: "monthly",
    description: "Acesso básico à plataforma",
    features: [
      "Acesso limitado aos cursos",
      "Vídeos básicos",
      "Comunidade básica"
    ],
    color: "from-gray-500 to-gray-600"
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: 97,
    interval: "monthly",
    description: "Para quem quer resultados reais",
    features: [
      "Todos os cursos completos",
      "Vídeos ilimitados",
      "Atividades práticas",
      "Agenda completa",
      "Tracker avançado",
      "Certificados"
    ],
    color: "from-blue-500 to-cyan-600"
  },
  "pro-plus": {
    id: "pro-plus",
    name: "Pro Plus",
    price: 147,
    interval: "monthly",
    description: "Tudo do Pro + Comunidade Elite",
    features: [
      "Tudo do plano Pro",
      "Comunidade exclusiva",
      "Desafios 30 dias",
      "Medalhas & Ranking",
      "Relatórios avançados"
    ],
    popular: true,
    color: "from-purple-500 to-indigo-600"
  },
  elite: {
    id: "elite",
    name: "Elite",
    price: 297,
    interval: "monthly",
    description: "Transformação completa garantida",
    features: [
      "Tudo do Pro Plus",
      "IA Premium personalizada",
      "Carteira inteligente",
      "Dashboards milionários",
      "Relatório 360º",
      "Suporte prioritário"
    ],
    color: "from-amber-500 to-yellow-600"
  },
  anual: {
    id: "anual",
    name: "Anual Master",
    price: 997,
    priceAnnual: 997,
    interval: "annual",
    description: "Acesso total por 12 meses",
    features: [
      "TUDO da plataforma desbloqueado",
      "12 meses de acesso total",
      "Economia de R$ 2.567",
      "Bônus exclusivos",
      "Garantia estendida"
    ],
    color: "from-green-500 to-emerald-600"
  },
  "influencer-pro": {
    id: "influencer-pro",
    name: "Influencer Pro",
    price: 197,
    interval: "monthly",
    description: "Para criadores de conteúdo",
    features: [
      "IA para criadores",
      "400 dietas prontas",
      "Calendário de postagens",
      "Scripts virais",
      "Dicas de edição",
      "Hashtags virais"
    ],
    color: "from-pink-500 to-rose-600"
  },
  "ecommerce-pro": {
    id: "ecommerce-pro",
    name: "E-commerce Pro",
    price: 197,
    interval: "monthly",
    description: "Para empreendedores digitais",
    features: [
      "Vídeos de e-commerce",
      "Treinos de vendas",
      "Anúncios prontos",
      "Estratégias ML e Shopee",
      "Certificado e-commerce"
    ],
    color: "from-orange-500 to-red-600"
  }
};

// Mapeamento de permissões por plano
export const PLAN_PERMISSIONS: Record<PlanId, Partial<UserPermissions>> = {
  free: {
    acesso_cursos: false,
    acesso_videos: false,
    acesso_agenda: false,
    acesso_tracker: false,
    acesso_certificados: false,
    acesso_comunidade: false,
    acesso_ia_premium: false,
    acesso_influencer: false,
    acesso_ecommerce: false,
    acesso_dashboards: false,
    acesso_carteira: false,
    acesso_desafios: false,
    acesso_ranking: false,
    acesso_relatorios: false
  },
  pro: {
    acesso_cursos: true,
    acesso_videos: true,
    acesso_agenda: true,
    acesso_tracker: true,
    acesso_certificados: true,
    acesso_comunidade: false,
    acesso_ia_premium: false,
    acesso_influencer: false,
    acesso_ecommerce: false,
    acesso_dashboards: false,
    acesso_carteira: false,
    acesso_desafios: false,
    acesso_ranking: false,
    acesso_relatorios: false
  },
  "pro-plus": {
    acesso_cursos: true,
    acesso_videos: true,
    acesso_agenda: true,
    acesso_tracker: true,
    acesso_certificados: true,
    acesso_comunidade: true,
    acesso_desafios: true,
    acesso_ranking: true,
    acesso_relatorios: true,
    acesso_ia_premium: false,
    acesso_influencer: false,
    acesso_ecommerce: false,
    acesso_dashboards: false,
    acesso_carteira: false
  },
  elite: {
    acesso_cursos: true,
    acesso_videos: true,
    acesso_agenda: true,
    acesso_tracker: true,
    acesso_certificados: true,
    acesso_comunidade: true,
    acesso_desafios: true,
    acesso_ranking: true,
    acesso_relatorios: true,
    acesso_ia_premium: true,
    acesso_dashboards: true,
    acesso_carteira: true,
    acesso_influencer: false,
    acesso_ecommerce: false
  },
  anual: {
    acesso_cursos: true,
    acesso_videos: true,
    acesso_agenda: true,
    acesso_tracker: true,
    acesso_certificados: true,
    acesso_comunidade: true,
    acesso_desafios: true,
    acesso_ranking: true,
    acesso_relatorios: true,
    acesso_ia_premium: true,
    acesso_dashboards: true,
    acesso_carteira: true,
    acesso_influencer: true,
    acesso_ecommerce: true
  },
  "influencer-pro": {
    acesso_cursos: false,
    acesso_videos: true,
    acesso_agenda: true,
    acesso_tracker: false,
    acesso_certificados: true,
    acesso_comunidade: false,
    acesso_ia_premium: false,
    acesso_influencer: true,
    acesso_ecommerce: false,
    acesso_dashboards: false,
    acesso_carteira: false,
    acesso_desafios: false,
    acesso_ranking: false,
    acesso_relatorios: false
  },
  "ecommerce-pro": {
    acesso_cursos: false,
    acesso_videos: true,
    acesso_agenda: false,
    acesso_tracker: false,
    acesso_certificados: true,
    acesso_comunidade: false,
    acesso_ia_premium: false,
    acesso_influencer: false,
    acesso_ecommerce: true,
    acesso_dashboards: false,
    acesso_carteira: false,
    acesso_desafios: false,
    acesso_ranking: false,
    acesso_relatorios: false
  }
};
