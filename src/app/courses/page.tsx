"use client";

import { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Award, 
  TrendingUp,
  Play,
  CheckCircle2,
  Lock,
  Crown,
  ChevronRight,
  Target,
  Zap,
  Video
} from 'lucide-react';
import { useSubscription } from '@/lib/hooks/useSubscription';
import { PremiumModal } from '@/components/custom/premium-modal';
import { VideoPlayer } from '@/components/custom/video-player';
import Link from 'next/link';

// Tipos
interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  thumbnail: string;
  duration: string;
  modules: number;
  lessons: number;
  activities: number;
  quizzes: number;
  xp: number;
  progress?: number;
  isPremium: boolean;
  isRecommended?: boolean;
  isPopular?: boolean;
  tags: string[];
  videos?: CourseVideo[];
}

interface CourseVideo {
  id: string;
  title: string;
  videoId: string; // YouTube video ID ou URL
  duration?: string;
  isPremium: boolean;
}

interface Trail {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  progress: number;
  courses: number;
  xp: number;
  medals: number;
}

export default function CoursesPage() {
  const { canAccessCourses, isPremium } = useSubscription();
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Trilhas
  const trails: Trail[] = [
    {
      id: 'financas',
      name: 'Finanças',
      description: 'Domine investimentos e gestão financeira',
      icon: '💰',
      color: 'from-green-500 to-emerald-600',
      progress: 45,
      courses: 8,
      xp: 2400,
      medals: 3
    },
    {
      id: 'mindset',
      name: 'Mindset',
      description: 'Desenvolva mentalidade de sucesso',
      icon: '🧠',
      color: 'from-purple-500 to-pink-600',
      progress: 60,
      courses: 6,
      xp: 1800,
      medals: 2
    },
    {
      id: 'produtividade',
      name: 'Produtividade',
      description: 'Maximize seu tempo e resultados',
      icon: '⚡',
      color: 'from-blue-500 to-cyan-600',
      progress: 30,
      courses: 7,
      xp: 1200,
      medals: 1
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      description: 'Construa seu império digital',
      icon: '🛒',
      color: 'from-orange-500 to-red-600',
      progress: 20,
      courses: 9,
      xp: 800,
      medals: 1
    },
    {
      id: 'saude',
      name: 'Saúde',
      description: 'Corpo e mente em equilíbrio',
      icon: '💪',
      color: 'from-teal-500 to-green-600',
      progress: 15,
      courses: 5,
      xp: 600,
      medals: 0
    }
  ];

  // Vídeos do curso (todos os vídeos fornecidos)
  const courseVideos: CourseVideo[] = [
    // Primeira leva de vídeos
    { id: 'v1', title: 'Introdução ao Curso Elite Life', videoId: 'KG0jxw07eYI', isPremium: true },
    { id: 'v2', title: 'Fundamentos de Investimentos', videoId: 'SAQaTgNz1Ug', isPremium: true },
    { id: 'v3', title: 'Estratégias de Renda Passiva', videoId: 'vOiWdjVrr8Y', isPremium: true },
    { id: 'v4', title: 'Mindset de Sucesso', videoId: 'rPcqrxjABMc', isPremium: true },
    { id: 'v5', title: 'Gestão de Tempo Eficaz', videoId: 'FSCbKzwtxAE', isPremium: true },
    { id: 'v6', title: 'E-commerce do Zero', videoId: '3cEYg-zGaEk', isPremium: true },
    { id: 'v7', title: 'Saúde e Bem-estar', videoId: 'fNIYRYTZUXs', isPremium: true },
    { id: 'v8', title: 'Inteligência Emocional', videoId: 'P6OUnbVfBYM', isPremium: true },
    { id: 'v9', title: 'Produtividade Avançada', videoId: 'W02Y7VC2S6Y', isPremium: true },
    { id: 'v10', title: 'Ações e Dividendos', videoId: '_kmhsLOekgc', isPremium: true },
    { id: 'v11', title: 'Dropshipping Estratégico', videoId: '8xvptPRs2cg', isPremium: true },
    { id: 'v12', title: 'Hábitos de Alta Performance', videoId: 'fCc9JeIhW7A', isPremium: true },
    { id: 'v13', title: 'Análise de Mercado', videoId: 'DgKlWlijSg8', isPremium: true },
    { id: 'v14', title: 'Marketing Digital', videoId: 'a7vaeTcENqM', isPremium: true },
    { id: 'v15', title: 'Vendas Online', videoId: '8iMJJ3wHrxw', isPremium: true },
    { id: 'v16', title: 'Gestão Financeira Pessoal', videoId: 'gmJ0QP18R3A', isPremium: true },
    { id: 'v17', title: 'Investimentos em Criptomoedas', videoId: '5u-BYYivqYU', isPremium: true },
    { id: 'v18', title: 'Planejamento Estratégico', videoId: 'uIg8aamqysM', isPremium: true },
    { id: 'v19', title: 'Liderança e Gestão', videoId: 'AJOAtisYWtM', isPremium: true },
    { id: 'v20', title: 'Negociação Avançada', videoId: 'RunL87QhBNQ', isPremium: true },
    { id: 'v21', title: 'Automação de Processos', videoId: 'UiiWGCmK_Qc', isPremium: true },
    { id: 'v22', title: 'Escalabilidade de Negócios', videoId: 'dHg2sxPaMbo', isPremium: true },
    { id: 'v23', title: 'Branding Pessoal', videoId: 'JrK1jy6gB6s', isPremium: true },
    { id: 'v24', title: 'Redes Sociais para Negócios', videoId: 'veXySM5LwPE', isPremium: true },
    { id: 'v25', title: 'SEO e Tráfego Orgânico', videoId: 'rDvS67bp0jM', isPremium: true },
    { id: 'v26', title: 'Copywriting Persuasivo', videoId: 'VpHILj9kNdc', isPremium: true },
    { id: 'v27', title: 'Funis de Vendas', videoId: '1klDaH0WHww', isPremium: true },
    { id: 'v28', title: 'Email Marketing', videoId: 'S7yacMsDJUc', isPremium: true },
    { id: 'v29', title: 'Tráfego Pago', videoId: 'dYEtfIflkk0', isPremium: true },
    { id: 'v30', title: 'Análise de Dados', videoId: 'tfAXHFjUccg', isPremium: true },
    
    // Segunda leva de vídeos
    { id: 'v31', title: 'Métricas e KPIs', videoId: '828xD0nlUa8', isPremium: true },
    { id: 'v32', title: 'Growth Hacking', videoId: 'XBYJmbZ3L0M', isPremium: true },
    { id: 'v33', title: 'Produto Digital', videoId: 'oMIWe7pLseA', isPremium: true },
    { id: 'v34', title: 'Infoprodutos', videoId: 'TZU2J1WL5vM', isPremium: true },
    { id: 'v35', title: 'Lançamentos Digitais', videoId: 'ZXnvvBrtArM', isPremium: true },
    { id: 'v36', title: 'Afiliados e Parcerias', videoId: '6NzcOH9_oiA', isPremium: true },
    { id: 'v37', title: 'Comunidades Online', videoId: 'MRLmmoV1Ow4', isPremium: true },
    { id: 'v38', title: 'Monetização de Conteúdo', videoId: 'HS3YJwi8lyY', isPremium: true },
    { id: 'v39', title: 'YouTube para Negócios', videoId: 'ErkDwE5k59g', isPremium: true },
    { id: 'v40', title: 'Instagram Avançado', videoId: 'Uu8yFMtgY8s', isPremium: true },
    { id: 'v41', title: 'TikTok Marketing', videoId: 'H1sDTGOk2Mk', isPremium: true },
    { id: 'v42', title: 'LinkedIn B2B', videoId: 'OEzWMQmsbTQ', isPremium: true },
    { id: 'v43', title: 'Podcast Estratégico', videoId: 'eyEXJ3agKuU', isPremium: true },
    { id: 'v44', title: 'Webinars de Alto Impacto', videoId: 'GN0KWrj8gEA', isPremium: true },
    { id: 'v45', title: 'Live Commerce', videoId: 'AA4kFuOUOzE', isPremium: true },
    { id: 'v46', title: 'Marketplace Estratégias', videoId: 'iyTAeHp7vFE', isPremium: true },
    { id: 'v47', title: 'Logística e Fulfillment', videoId: 'LDWKS9z005M', isPremium: true },
    { id: 'v48', title: 'Atendimento ao Cliente', videoId: '5G4VLBmszyY', isPremium: true },
    { id: 'v49', title: 'Retenção de Clientes', videoId: 'RqIv0hFd5QQ', isPremium: true },
    { id: 'v50', title: 'Upsell e Cross-sell', videoId: 'AcjPz8Qr_i8', isPremium: true },
    { id: 'v51', title: 'Precificação Estratégica', videoId: 'PpN4_nj7WE4', isPremium: true },
    { id: 'v52', title: 'Posicionamento de Marca', videoId: 'Hir6lj4WX18', isPremium: true },
    { id: 'v53', title: 'Storytelling', videoId: 'eif5_XolUDM', isPremium: true },
    { id: 'v54', title: 'Design Thinking', videoId: 'n30Qz6EcHEM', isPremium: true },
    { id: 'v55', title: 'Inovação e Criatividade', videoId: 'tCx9HKdORso', isPremium: true },
    { id: 'v56', title: 'Resolução de Problemas', videoId: 'm7Med0-y88I', isPremium: true },
    { id: 'v57', title: 'Tomada de Decisão', videoId: 'ZtgcWbcIWy4', isPremium: true },
    { id: 'v58', title: 'Gestão de Riscos', videoId: 'TVtCJbpQQ74', isPremium: true },
    { id: 'v59', title: 'Compliance e Ética', videoId: '32hRlmYsPa0', isPremium: true },
    { id: 'v60', title: 'Contratos e Jurídico', videoId: 'ePdUc2xMW6M', isPremium: true },
    
    // Terceira leva de vídeos
    { id: 'v61', title: 'Tributação para Empreendedores', videoId: 'TasDB-Gn0do', isPremium: true },
    { id: 'v62', title: 'Contabilidade Básica', videoId: 'cfouyjYKzn0', isPremium: true },
    { id: 'v63', title: 'Fluxo de Caixa', videoId: 'lT_eRUHdJ7g', isPremium: true },
    { id: 'v64', title: 'Balanço Patrimonial', videoId: 'le6Xf7XS1-o', isPremium: true },
    { id: 'v65', title: 'DRE e Indicadores', videoId: '17yQpfiDFCY', isPremium: true },
    { id: 'v66', title: 'Valuation de Empresas', videoId: 'SolU30Rl8rQ', isPremium: true },
    { id: 'v67', title: 'Captação de Recursos', videoId: 'BOkaELzR9aM', isPremium: true },
    { id: 'v68', title: 'Investidores Anjo', videoId: 'J9wbTmuPfNg', isPremium: true },
    { id: 'v69', title: 'Venture Capital', videoId: 'XkbDaNZTedc', isPremium: true },
    { id: 'v70', title: 'Pitch Perfeito', videoId: 'NaPFO4O5llo', isPremium: true },
    { id: 'v71', title: 'Business Plan', videoId: '_LPIyvLLzyo', isPremium: true },
    { id: 'v72', title: 'Modelo de Negócios', videoId: 'RNB9uCQVEBI', isPremium: true },
    { id: 'v73', title: 'Canvas e Lean Startup', videoId: 'ROYi13bMbbQ', isPremium: true },
    { id: 'v74', title: 'MVP e Validação', videoId: 'gIqiopx5qvQ', isPremium: true },
    { id: 'v75', title: 'Product Market Fit', videoId: 'lof9u_8ULf0', isPremium: true },
    { id: 'v76', title: 'Escalabilidade', videoId: 'exbgpMKPowo', isPremium: true },
    { id: 'v77', title: 'Internacionalização', videoId: 'Em0UqsiYij8', isPremium: true },
    { id: 'v78', title: 'Franchising', videoId: 'XVOZItdAUbw', isPremium: true },
    { id: 'v79', title: 'Licenciamento', videoId: 'CtfOALRAf8s', isPremium: true },
    { id: 'v80', title: 'Parcerias Estratégicas', videoId: 'vpU4zJ7MlzQ', isPremium: true },
    { id: 'v81', title: 'Networking Eficaz', videoId: 'gMLJfHko1II', isPremium: true },
    { id: 'v82', title: 'Comunicação Assertiva', videoId: 'PPDECleQNtc', isPremium: true },
    { id: 'v83', title: 'Oratória e Apresentações', videoId: 'm-6r2sAV8QE', isPremium: true },
    { id: 'v84', title: 'Persuasão e Influência', videoId: 'hcluoA_zvzQ', isPremium: true },
    
    // Quarta leva de vídeos (novos adicionados)
    { id: 'v85', title: 'Gestão de Equipes Remotas', videoId: 'zqPA_xfQlVw', isPremium: true },
    { id: 'v86', title: 'Cultura Organizacional', videoId: 'mgYO12VzvNk', isPremium: true },
    { id: 'v87', title: 'Recrutamento e Seleção', videoId: '-bqT-Z3-6js', isPremium: true },
    { id: 'v88', title: 'Onboarding Eficaz', videoId: '_qKQ1lVNVL0', isPremium: true },
    { id: 'v89', title: 'Feedback e Avaliação', videoId: 'hSrFmzk6E0w', isPremium: true },
    { id: 'v90', title: 'Desenvolvimento de Talentos', videoId: 'IhoXqdUvnC0', isPremium: true },
    { id: 'v91', title: 'Retenção de Talentos', videoId: '36MkeXmnBVU', isPremium: true },
    { id: 'v92', title: 'Gestão de Conflitos', videoId: 'MkDVZplKyTQ', isPremium: true },
    { id: 'v93', title: 'Motivação de Equipes', videoId: 'GkW5jpPfaC0', isPremium: true },
    { id: 'v94', title: 'Delegação Eficaz', videoId: '7kR-C-Boy0Y', isPremium: true },
    { id: 'v95', title: 'Gestão de Projetos', videoId: '8UNgFZ7-5Ts', isPremium: true },
    { id: 'v96', title: 'Metodologias Ágeis', videoId: 'Im9PNgnXRTo', isPremium: true },
    { id: 'v97', title: 'Scrum Master', videoId: 'i1E4sgCeUEs', isPremium: true },
    { id: 'v98', title: 'Kanban e Produtividade', videoId: 'dSFkPWhrtNg', isPremium: true },
    { id: 'v99', title: 'OKRs e Metas', videoId: '9VuZlg-GHXk', isPremium: true },
    { id: 'v100', title: 'KPIs de Performance', videoId: '-tovD0nSPsA', isPremium: true },
    { id: 'v101', title: 'Dashboard de Gestão', videoId: 'kxm7n8BUgT0', isPremium: true },
    { id: 'v102', title: 'Business Intelligence', videoId: 'rF6daSPnrgc', isPremium: true },
    { id: 'v103', title: 'Data Analytics', videoId: 'P3PU47_a-Kk', isPremium: true },
    { id: 'v104', title: 'Machine Learning Básico', videoId: 'FYtF7FjUgU4', isPremium: true },
    { id: 'v105', title: 'IA para Negócios', videoId: 'B89sP7HyfrQ', isPremium: true },
    { id: 'v106', title: 'Automação com IA', videoId: 'lt-qsz3gFho', isPremium: true },
    { id: 'v107', title: 'ChatGPT para Empresas', videoId: 'DY2CfcVvc00', isPremium: true },
    { id: 'v108', title: 'Ferramentas de IA', videoId: 'YpUd8YhKo-o', isPremium: true },
    { id: 'v109', title: 'Prompt Engineering', videoId: 'ogV4_WZcw7E', isPremium: true },
    { id: 'v110', title: 'IA Generativa', videoId: 'X0Y7Rwwkh5A', isPremium: true },
    { id: 'v111', title: 'Segurança Digital', videoId: 'Wh44_CIxfYI', isPremium: true },
    { id: 'v112', title: 'LGPD e Privacidade', videoId: 'JCV5HQOePDg', isPremium: true },
    { id: 'v113', title: 'Cloud Computing', videoId: 'NdT7BRlaeVg', isPremium: true },
    { id: 'v114', title: 'DevOps Básico', videoId: '4I5QFma7Cso', isPremium: true },
    { id: 'v115', title: 'APIs e Integrações', videoId: 'vdCv0BiFqEQ', isPremium: true },
    { id: 'v116', title: 'No-Code e Low-Code', videoId: 'x0W1kIvBerg', isPremium: true },
    { id: 'v117', title: 'Automação de Marketing', videoId: '_6XeJ-XGK3Y', isPremium: true },
    { id: 'v118', title: 'CRM Estratégico', videoId: '2-rneqJ6QDU', isPremium: true },
    { id: 'v119', title: 'ERP para PMEs', videoId: 'zgbtjg1Kb4g', isPremium: true },
    { id: 'v120', title: 'Ferramentas de Gestão', videoId: '5f15qZNphcY', isPremium: true },
    
    // Quinta leva de vídeos
    { id: 'v121', title: 'Produtividade com Notion', videoId: '-xG104jgeyo', isPremium: true },
    { id: 'v122', title: 'Gestão com Trello', videoId: '9gbLAq_CoCY', isPremium: true },
    { id: 'v123', title: 'Asana para Projetos', videoId: 'cYzODhgJIAQ', isPremium: true },
    { id: 'v124', title: 'Monday.com Avançado', videoId: '2fjKm3Vsb-E', isPremium: true },
    { id: 'v125', title: 'Slack para Equipes', videoId: 'd8T48bm-8Ps', isPremium: true },
    { id: 'v126', title: 'Zoom Profissional', videoId: 'fLjUM3Puy48', isPremium: true },
    { id: 'v127', title: 'Google Workspace', videoId: 'zxk4kOaqyMU', isPremium: true },
    { id: 'v128', title: 'Microsoft 365', videoId: 'YDoI2xGAU1g', isPremium: true },
    { id: 'v129', title: 'Canva para Negócios', videoId: 'XjzPknnRwpQ', isPremium: true },
    { id: 'v130', title: 'Figma Básico', videoId: '5u8KFhVRWI0', isPremium: true },
    { id: 'v131', title: 'Adobe Creative Cloud', videoId: 'GuMPTPK-qJs', isPremium: true },
    { id: 'v132', title: 'Edição de Vídeo', videoId: '_bTtYhQsrOM', isPremium: true },
    { id: 'v133', title: 'Fotografia para Negócios', videoId: 'nX5nPjcVP_I', isPremium: true },
    { id: 'v134', title: 'Design Gráfico', videoId: 'l8zh-v3FIpM', isPremium: true },
    { id: 'v135', title: 'UI/UX Design', videoId: 'PHH-BMCuES0', isPremium: true },
    { id: 'v136', title: 'Prototipagem', videoId: 'NNMBNRcP_tU', isPremium: true },
    { id: 'v137', title: 'Wireframes', videoId: 'YBJwJuSkgno', isPremium: true },
    { id: 'v138', title: 'Design System', videoId: 'phwa27l7fgs', isPremium: true },
    { id: 'v139', title: 'Acessibilidade Web', videoId: 'T5ZgYbvHwE0', isPremium: true },
    { id: 'v140', title: 'Responsividade', videoId: 'cR5FGUBuNEw', isPremium: true },
    { id: 'v141', title: 'Performance Web', videoId: 'dxfx0Yw3n7k', isPremium: true },
    { id: 'v142', title: 'SEO Técnico', videoId: 'Frr6cMXMcEY', isPremium: true },
    { id: 'v143', title: 'Google Analytics 4', videoId: 'LHWJuZwx8SM', isPremium: true },
    { id: 'v144', title: 'Google Tag Manager', videoId: 'gpD6boRgXdI', isPremium: true },
    { id: 'v145', title: 'Facebook Ads', videoId: 'quBBAXjMzac', isPremium: true },
    { id: 'v146', title: 'Instagram Ads', videoId: 'xws5gfEfRU4', isPremium: true },
    { id: 'v147', title: 'Google Ads', videoId: 'Q5t76g9yh3g', isPremium: true },
    { id: 'v148', title: 'LinkedIn Ads', videoId: '9j8IHdic0F0', isPremium: true },
    { id: 'v149', title: 'TikTok Ads', videoId: 'pRxyQXL1eVA', isPremium: true },
    { id: 'v150', title: 'YouTube Ads', videoId: 'obvenrhem9Q', isPremium: true },
    { id: 'v151', title: 'Remarketing', videoId: 'zbN3mChHGDI', isPremium: true },
    { id: 'v152', title: 'Lookalike Audiences', videoId: 'WvvzpUaNvOo', isPremium: true },
    { id: 'v153', title: 'Pixel e Conversões', videoId: 'NN99hUNwO1A', isPremium: true },
    { id: 'v154', title: 'A/B Testing', videoId: 'Flo47gIJQfg', isPremium: true },
    { id: 'v155', title: 'CRO - Otimização', videoId: '14h1Sn5irdE', isPremium: true },
    { id: 'v156', title: 'Landing Pages', videoId: 'mZRHqSmTiwE', isPremium: true },
    { id: 'v157', title: 'Checkout Otimizado', videoId: 'l4VFryL5SC0', isPremium: true },
    { id: 'v158', title: 'Carrinho Abandonado', videoId: '5ZLAxK7jrQ4', isPremium: true },
    { id: 'v159', title: 'Email Sequences', videoId: '-e2x7oQ9C1g', isPremium: true },
    { id: 'v160', title: 'Automação de Vendas', videoId: 'f4m3asFg3oo', isPremium: true },
    
    // Sexta leva de vídeos
    { id: 'v161', title: 'WhatsApp Business', videoId: 'yAsyW3ie8AA', isPremium: true },
    { id: 'v162', title: 'Chatbots', videoId: 'v4yMnlFR6u0', isPremium: true },
    { id: 'v163', title: 'Atendimento Omnichannel', videoId: 'FIiOd412sRs', isPremium: true },
    { id: 'v164', title: 'Customer Success', videoId: 'AT7nSkn8Cs8', isPremium: true },
    { id: 'v165', title: 'NPS e Satisfação', videoId: 'X71YbXctXeM', isPremium: true },
    { id: 'v166', title: 'Churn e Retenção', videoId: 'wJBof_K85YY', isPremium: true },
    { id: 'v167', title: 'LTV - Lifetime Value', videoId: 'Huii3YbR6ek', isPremium: true },
    { id: 'v168', title: 'CAC - Custo de Aquisição', videoId: 'qTH_P4PBEI8', isPremium: true },
    { id: 'v169', title: 'ROI e ROAS', videoId: 'ULoPE2xOBCo', isPremium: true },
    { id: 'v170', title: 'Margem de Contribuição', videoId: 'ywUuoTJJznA', isPremium: true },
    { id: 'v171', title: 'Break Even Point', videoId: '0rtNKdODxbo', isPremium: true },
    { id: 'v172', title: 'Projeções Financeiras', videoId: 'ORe4506BNwc', isPremium: true },
    { id: 'v173', title: 'Orçamento Empresarial', videoId: 'kqAex5L6D-M', isPremium: true },
    { id: 'v174', title: 'Controle de Custos', videoId: 'ykkty8JCx30', isPremium: true },
    { id: 'v175', title: 'Redução de Despesas', videoId: 'sNtGkTP8LGo', isPremium: true },
    { id: 'v176', title: 'Aumento de Receita', videoId: 'pSB5kxFnrWM', isPremium: true },
    { id: 'v177', title: 'Diversificação', videoId: 'g5sQWenxCVU', isPremium: true },
    { id: 'v178', title: 'Novos Mercados', videoId: '10uVIjhJ9Ks', isPremium: true },
    { id: 'v179', title: 'Expansão Geográfica', videoId: 'lDH7qc__b1c', isPremium: true },
    { id: 'v180', title: 'Novos Produtos', videoId: '-trhi2VNtcs', isPremium: true },
    { id: 'v181', title: 'Inovação de Produto', videoId: 'in0XbfQEm2A', isPremium: true },
    { id: 'v182', title: 'Pesquisa de Mercado', videoId: 'UynCG_el504', isPremium: true },
    { id: 'v183', title: 'Análise de Concorrência', videoId: '24kNIWWzQHw', isPremium: true },
    { id: 'v184', title: 'Benchmarking', videoId: 'Fm_67R1DRzQ', isPremium: true },
    { id: 'v185', title: 'Matriz SWOT', videoId: 'R8HE5xI575o', isPremium: true },
    { id: 'v186', title: '5 Forças de Porter', videoId: '5g42STXmcWM', isPremium: true },
    { id: 'v187', title: 'Análise PESTEL', videoId: 'bg8yyVGD24g', isPremium: true },
    { id: 'v188', title: 'Blue Ocean Strategy', videoId: 'jJhEIBp0FF4', isPremium: true },
    { id: 'v189', title: 'Oceano Azul na Prática', videoId: 'HOEexijBDzc', isPremium: true },
    { id: 'v190', title: 'Diferenciação Competitiva', videoId: 'JNbmS3uTvnw', isPremium: true },
    { id: 'v191', title: 'Vantagem Competitiva', videoId: 'HxnK3VgagXo', isPremium: true },
    { id: 'v192', title: 'Proposta de Valor', videoId: 'xp6w5POP0Yg', isPremium: true },
    { id: 'v193', title: 'Value Proposition Canvas', videoId: 'dgkR1LtHFNw', isPremium: true },
    { id: 'v194', title: 'Jobs to be Done', videoId: '62E1F3T6BhU', isPremium: true },
    { id: 'v195', title: 'Customer Journey', videoId: '7pw1Ct3LAec', isPremium: true },
    { id: 'v196', title: 'Persona e ICP', videoId: 'zUYYBCQAilA', isPremium: true },
    { id: 'v197', title: 'Segmentação de Mercado', videoId: 's-pHHcBHwug', isPremium: true },
    { id: 'v198', title: 'Nicho de Mercado', videoId: 'yY0_tkd-eYA', isPremium: true },
    { id: 'v199', title: 'Posicionamento Premium', videoId: 'mcQYKxmR1DE', isPremium: true },
    { id: 'v200', title: 'Estratégia de Preços', videoId: 'OOCcgOtauM0', isPremium: true },
  ];

  // Cursos
  const courses: Course[] = [
    // Finanças
    {
      id: 'investimentos-iniciantes',
      title: 'Investimentos para Iniciantes',
      description: 'Aprenda a investir do zero e construir patrimônio',
      category: 'Finanças',
      level: 'beginner',
      thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
      duration: '8h 30min',
      modules: 6,
      lessons: 42,
      activities: 15,
      quizzes: 8,
      xp: 500,
      progress: 65,
      isPremium: false,
      isRecommended: true,
      tags: ['Investimentos', 'Renda Fixa', 'Ações'],
      videos: courseVideos.slice(0, 20)
    },
    {
      id: 'renda-passiva',
      title: 'Construindo Renda Passiva',
      description: 'Estratégias para gerar renda sem trabalhar ativamente',
      category: 'Finanças',
      level: 'intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      duration: '12h 15min',
      modules: 8,
      lessons: 56,
      activities: 20,
      quizzes: 12,
      xp: 800,
      isPremium: true,
      isPopular: true,
      tags: ['Renda Passiva', 'Dividendos', 'FIIs'],
      videos: courseVideos.slice(20, 45)
    },
    {
      id: 'acoes-dividendos',
      title: 'Ações e Dividendos',
      description: 'Invista em ações que pagam dividendos consistentes',
      category: 'Finanças',
      level: 'advanced',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      duration: '15h 45min',
      modules: 10,
      lessons: 68,
      activities: 25,
      quizzes: 15,
      xp: 1200,
      isPremium: true,
      tags: ['Ações', 'Dividendos', 'Análise'],
      videos: courseVideos.slice(45, 70)
    },

    // Mindset
    {
      id: 'mentalidade-vencedora',
      title: 'Mentalidade Vencedora',
      description: 'Desenvolva a mentalidade dos grandes líderes',
      category: 'Mindset',
      level: 'beginner',
      thumbnail: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop',
      duration: '6h 20min',
      modules: 5,
      lessons: 35,
      activities: 12,
      quizzes: 6,
      xp: 400,
      progress: 80,
      isPremium: false,
      isRecommended: true,
      tags: ['Mindset', 'Liderança', 'Sucesso'],
      videos: courseVideos.slice(70, 90)
    },
    {
      id: 'inteligencia-emocional',
      title: 'Inteligência Emocional',
      description: 'Domine suas emoções e relacionamentos',
      category: 'Mindset',
      level: 'intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
      duration: '10h 30min',
      modules: 7,
      lessons: 48,
      activities: 18,
      quizzes: 10,
      xp: 700,
      isPremium: true,
      isPopular: true,
      tags: ['Emoções', 'Relacionamentos', 'Autoconhecimento'],
      videos: courseVideos.slice(90, 110)
    },

    // Produtividade
    {
      id: 'gestao-tempo',
      title: 'Gestão de Tempo Avançada',
      description: 'Técnicas comprovadas para multiplicar sua produtividade',
      category: 'Produtividade',
      level: 'intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      duration: '7h 45min',
      modules: 6,
      lessons: 40,
      activities: 16,
      quizzes: 8,
      xp: 550,
      progress: 40,
      isPremium: true,
      isRecommended: true,
      tags: ['Tempo', 'Produtividade', 'Foco'],
      videos: courseVideos.slice(110, 130)
    },
    {
      id: 'habitos-alta-performance',
      title: 'Hábitos de Alta Performance',
      description: 'Construa rotinas que levam ao sucesso',
      category: 'Produtividade',
      level: 'beginner',
      thumbnail: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
      duration: '9h 15min',
      modules: 7,
      lessons: 52,
      activities: 20,
      quizzes: 11,
      xp: 650,
      isPremium: true,
      tags: ['Hábitos', 'Rotina', 'Performance'],
      videos: courseVideos.slice(130, 150)
    },

    // E-commerce
    {
      id: 'ecommerce-zero',
      title: 'E-commerce do Zero',
      description: 'Monte sua loja online e comece a vender',
      category: 'E-commerce',
      level: 'beginner',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      duration: '11h 30min',
      modules: 8,
      lessons: 60,
      activities: 22,
      quizzes: 12,
      xp: 750,
      isPremium: true,
      isPopular: true,
      tags: ['E-commerce', 'Vendas', 'Loja Online'],
      videos: courseVideos.slice(150, 170)
    },
    {
      id: 'dropshipping-avancado',
      title: 'Dropshipping Avançado',
      description: 'Estratégias avançadas para escalar seu negócio',
      category: 'E-commerce',
      level: 'advanced',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      duration: '14h 20min',
      modules: 9,
      lessons: 72,
      activities: 28,
      quizzes: 16,
      xp: 1000,
      isPremium: true,
      tags: ['Dropshipping', 'Escalabilidade', 'Automação'],
      videos: courseVideos.slice(170, 190)
    },

    // Saúde
    {
      id: 'saude-integral',
      title: 'Saúde Integral',
      description: 'Corpo, mente e espírito em harmonia',
      category: 'Saúde',
      level: 'beginner',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      duration: '8h 00min',
      modules: 6,
      lessons: 45,
      activities: 18,
      quizzes: 9,
      xp: 500,
      isPremium: true,
      tags: ['Saúde', 'Bem-estar', 'Equilíbrio'],
      videos: courseVideos.slice(190, 200)
    }
  ];

  // Categorias
  const categories = [
    { id: 'all', label: 'Todos', count: courses.length },
    { id: 'Finanças', label: 'Finanças', count: courses.filter(c => c.category === 'Finanças').length },
    { id: 'Mindset', label: 'Mindset', count: courses.filter(c => c.category === 'Mindset').length },
    { id: 'Produtividade', label: 'Produtividade', count: courses.filter(c => c.category === 'Produtividade').length },
    { id: 'E-commerce', label: 'E-commerce', count: courses.filter(c => c.category === 'E-commerce').length },
    { id: 'Saúde', label: 'Saúde', count: courses.filter(c => c.category === 'Saúde').length },
  ];

  // Filtros
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'in-progress', label: 'Em Andamento' },
    { id: 'completed', label: 'Concluídos' },
    { id: 'not-started', label: 'Não Iniciados' },
    { id: 'favorites', label: 'Favoritos' },
    { id: 'beginner', label: 'Iniciante' },
    { id: 'intermediate', label: 'Intermediário' },
    { id: 'advanced', label: 'Avançado' },
  ];

  // Filtrar cursos
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    
    let matchesFilter = true;
    if (activeFilter === 'in-progress') matchesFilter = !!course.progress && course.progress > 0 && course.progress < 100;
    if (activeFilter === 'completed') matchesFilter = course.progress === 100;
    if (activeFilter === 'not-started') matchesFilter = !course.progress || course.progress === 0;
    if (activeFilter === 'beginner') matchesFilter = course.level === 'beginner';
    if (activeFilter === 'intermediate') matchesFilter = course.level === 'intermediate';
    if (activeFilter === 'advanced') matchesFilter = course.level === 'advanced';
    
    return matchesSearch && matchesCategory && matchesFilter;
  });

  // Cursos recomendados
  const recommendedCourses = courses.filter(c => c.isRecommended);

  const handleCourseClick = (course: Course) => {
    if (course.isPremium && !canAccessCourses()) {
      setShowPremiumModal(true);
      return;
    }
    setSelectedCourse(course);
  };

  const handleSelectPlan = (planId: number) => {
    console.log('Plano selecionado:', planId);
  };

  const handleUnlockVideo = () => {
    setShowPremiumModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-[#0B0B0B]" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Cursos Elite Life</h1>
                <p className="text-[#9A9A9A]">{courses.length} cursos • 5 trilhas • {courseVideos.length} vídeos</p>
              </div>
            </div>
            <Link
              href="/"
              className="px-6 py-3 bg-[#2A2A2A] text-white rounded-xl hover:bg-[#3A3A3A] transition-all font-medium"
            >
              Voltar
            </Link>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
            <input
              type="text"
              placeholder="Buscar cursos, palavras-chave, categorias..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#2A2A2A] text-white rounded-xl border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none text-lg"
            />
          </div>
        </div>

        {/* Trilhas */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Target className="w-6 h-6 text-[#D4AF37]" />
              Trilhas de Aprendizado
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {trails.map((trail) => (
              <div
                key={trail.id}
                className="bg-[#2A2A2A] rounded-2xl p-6 hover:bg-[#3A3A3A] transition-all cursor-pointer group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${trail.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {trail.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{trail.name}</h3>
                <p className="text-[#9A9A9A] text-sm mb-4">{trail.description}</p>
                
                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#9A9A9A]">Progresso</span>
                    <span className="text-[#D4AF37] font-bold">{trail.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${trail.color} transition-all duration-500`}
                      style={{ width: `${trail.progress}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-white font-bold">{trail.courses}</p>
                    <p className="text-[#9A9A9A] text-xs">Cursos</p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37] font-bold">{trail.xp}</p>
                    <p className="text-[#9A9A9A] text-xs">XP</p>
                  </div>
                  <div>
                    <p className="text-white font-bold">{trail.medals}</p>
                    <p className="text-[#9A9A9A] text-xs">Medalhas</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recomendados */}
        {recommendedCourses.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="text-2xl font-bold text-white">Recomendados para Você</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => handleCourseClick(course)}
                  isLocked={course.isPremium && !canAccessCourses()}
                />
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B]'
                  : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]'
                  : 'bg-[#2A2A2A] text-[#9A9A9A] hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course)}
              isLocked={course.isPremium && !canAccessCourses()}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-[#9A9A9A] mx-auto mb-4" />
            <p className="text-white text-lg font-medium mb-2">Nenhum curso encontrado</p>
            <p className="text-[#9A9A9A]">Tente ajustar os filtros ou busca</p>
          </div>
        )}
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onUnlockVideo={handleUnlockVideo}
          canAccessCourses={canAccessCourses()}
        />
      )}

      {/* Premium Modal */}
      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
        onSelectPlan={handleSelectPlan}
        feature="todos os cursos e vídeos"
      />
    </div>
  );
}

// Course Card Component
interface CourseCardProps {
  course: Course;
  onClick: () => void;
  isLocked: boolean;
}

function CourseCard({ course, onClick, isLocked }: CourseCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#2A2A2A] rounded-2xl overflow-hidden hover:bg-[#3A3A3A] transition-all cursor-pointer group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img
          src={course.thumbnail}
          alt={course.title}
          className={`w-full h-full object-cover ${isLocked ? 'opacity-40 blur-sm' : 'group-hover:scale-105 transition-transform duration-500'}`}
        />
        
        {/* Lock Overlay */}
        {isLocked && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-2xl">
                <Lock className="w-8 h-8 text-[#0B0B0B]" />
              </div>
              <p className="text-white font-bold">Premium</p>
            </div>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {course.isRecommended && (
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
              <Star className="w-3 h-3" />
              Recomendado
            </div>
          )}
          {course.isPopular && (
            <div className="bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Popular
            </div>
          )}
        </div>

        {isLocked && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 px-3 py-1 rounded-full flex items-center gap-1">
            <Crown className="w-3 h-3 text-[#0B0B0B]" />
            <span className="text-xs font-bold text-[#0B0B0B]">PREMIUM</span>
          </div>
        )}

        {/* Progress */}
        {!isLocked && course.progress && course.progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
            <div 
              className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-600"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-[#D4AF37] uppercase">{course.category}</span>
          <span className="text-xs text-[#9A9A9A]">•</span>
          <span className="text-xs text-[#9A9A9A] capitalize">{course.level}</span>
          {course.videos && (
            <>
              <span className="text-xs text-[#9A9A9A]">•</span>
              <span className="text-xs text-[#9A9A9A] flex items-center gap-1">
                <Video className="w-3 h-3" />
                {course.videos.length} vídeos
              </span>
            </>
          )}
        </div>

        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
          {course.title}
        </h3>
        
        <p className="text-[#9A9A9A] text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="text-center">
            <p className="text-white font-bold text-sm">{course.modules}</p>
            <p className="text-[#9A9A9A] text-xs">Módulos</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-sm">{course.lessons}</p>
            <p className="text-[#9A9A9A] text-xs">Aulas</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-sm">{course.quizzes}</p>
            <p className="text-[#9A9A9A] text-xs">Quizzes</p>
          </div>
          <div className="text-center">
            <p className="text-[#D4AF37] font-bold text-sm">{course.xp}</p>
            <p className="text-[#9A9A9A] text-xs">XP</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#3A3A3A]">
          <div className="flex items-center gap-1 text-[#9A9A9A] text-sm">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          
          {!isLocked && course.progress && course.progress > 0 ? (
            <div className="flex items-center gap-2 text-[#D4AF37] font-medium text-sm">
              <span>{course.progress}%</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          ) : (
            <div className="flex items-center gap-1 text-white font-medium text-sm group-hover:text-[#D4AF37] transition-colors">
              <Play className="w-4 h-4" />
              <span>Começar</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Course Detail Modal Component
interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
  onUnlockVideo: () => void;
  canAccessCourses: boolean;
}

function CourseDetailModal({ course, onClose, onUnlockVideo, canAccessCourses }: CourseDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'videos' | 'modules' | 'activities' | 'quizzes'>('overview');

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[110] p-4 overflow-y-auto">
      <div className="w-full max-w-6xl bg-[#1A1A1A] rounded-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="relative h-80">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all text-2xl"
          >
            ×
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-[#D4AF37] uppercase">{course.category}</span>
              <span className="text-sm text-white">•</span>
              <span className="text-sm text-white capitalize">{course.level}</span>
              {course.videos && (
                <>
                  <span className="text-sm text-white">•</span>
                  <span className="text-sm text-white flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    {course.videos.length} vídeos
                  </span>
                </>
              )}
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">{course.title}</h2>
            <p className="text-[#9A9A9A] text-lg">{course.description}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 px-6 border-b border-[#2A2A2A] overflow-x-auto">
          {[
            { id: 'overview', label: 'Visão Geral' },
            { id: 'videos', label: `Vídeos (${course.videos?.length || 0})` },
            { id: 'modules', label: 'Módulos' },
            { id: 'activities', label: 'Atividades' },
            { id: 'quizzes', label: 'Quizzes' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-2 font-medium transition-all relative whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-[#D4AF37]'
                  : 'text-[#9A9A9A] hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-amber-600" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                  <BookOpen className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-white font-bold text-2xl">{course.modules}</p>
                  <p className="text-[#9A9A9A] text-sm">Módulos</p>
                </div>
                <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                  <Play className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-white font-bold text-2xl">{course.lessons}</p>
                  <p className="text-[#9A9A9A] text-sm">Aulas</p>
                </div>
                <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-white font-bold text-2xl">{course.duration}</p>
                  <p className="text-[#9A9A9A] text-sm">Duração</p>
                </div>
                <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                  <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-white font-bold text-2xl">{course.xp}</p>
                  <p className="text-[#9A9A9A] text-sm">XP Total</p>
                </div>
              </div>

              {/* What you'll learn */}
              <div>
                <h3 className="text-white font-bold text-xl mb-4">O que você vai aprender</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Fundamentos completos do tema',
                    'Estratégias práticas e aplicáveis',
                    'Técnicas avançadas de profissionais',
                    'Cases reais de sucesso',
                    'Ferramentas e recursos exclusivos',
                    'Certificado de conclusão'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-[#9A9A9A]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all">
                Começar Curso Agora
              </button>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="space-y-4">
              {course.videos && course.videos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {course.videos.map((video) => (
                    <VideoPlayer
                      key={video.id}
                      videoId={video.videoId}
                      title={video.title}
                      duration={video.duration}
                      isLocked={video.isPremium && !canAccessCourses}
                      onUnlock={onUnlockVideo}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Video className="w-16 h-16 text-[#9A9A9A] mx-auto mb-4" />
                  <p className="text-white font-medium mb-2">Nenhum vídeo disponível</p>
                  <p className="text-[#9A9A9A] text-sm">Os vídeos serão adicionados em breve</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'modules' && (
            <div className="space-y-4">
              {Array.from({ length: course.modules }).map((_, index) => (
                <div key={index} className="bg-[#2A2A2A] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold text-lg">Módulo {index + 1}</h4>
                    <span className="text-[#9A9A9A] text-sm">{Math.floor(course.lessons / course.modules)} aulas</span>
                  </div>
                  <p className="text-[#9A9A9A] mb-4">Conteúdo detalhado do módulo {index + 1}</p>
                  <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-600"
                      style={{ width: `${Math.random() * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="space-y-4">
              {Array.from({ length: course.activities }).map((_, index) => (
                <div key={index} className="bg-[#2A2A2A] rounded-xl p-5 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold mb-1">Atividade {index + 1}</h4>
                    <p className="text-[#9A9A9A] text-sm">Exercício prático do módulo</p>
                  </div>
                  <button className="px-4 py-2 bg-[#D4AF37] text-[#0B0B0B] rounded-lg font-medium hover:bg-amber-600 transition-all">
                    Fazer
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'quizzes' && (
            <div className="space-y-4">
              {Array.from({ length: course.quizzes }).map((_, index) => (
                <div key={index} className="bg-[#2A2A2A] rounded-xl p-5 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold mb-1">Quiz {index + 1}</h4>
                    <p className="text-[#9A9A9A] text-sm">{Math.floor(course.xp / course.quizzes)} XP</p>
                  </div>
                  <button className="px-4 py-2 bg-[#D4AF37] text-[#0B0B0B] rounded-lg font-medium hover:bg-amber-600 transition-all">
                    Responder
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
