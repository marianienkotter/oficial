"use client";

import { useState, useEffect } from "react";
import { 
  Bell, Globe, User, Crown, Lock, Check, Star, TrendingUp, 
  Zap, Video, ShoppingCart, Calendar, Activity, Wallet, 
  Users, BarChart3, Award, MessageSquare, Menu, X,
  ChevronDown, Play, BookOpen, Film, Sparkles, Clock,
  Heart, Brain, Dumbbell, Apple, Droplet, Moon, Smile,
  AlertCircle, Upload, ExternalLink, Trophy, Medal,
  Target, Flame, CheckCircle, XCircle, Plus, Minus,
  DollarSign, PieChart, TrendingDown, Send, Image as ImageIcon,
  Mail, Eye, EyeOff, Phone, LogOut, Settings, Instagram,
  Edit, Copy, Share2, Gift, Briefcase, LineChart, Save,
  Download, FileText, Search, Filter, ChevronRight, CreditCard,
  Smartphone, QrCode, Trash2, BookMarked, Lightbulb, GraduationCap,
  Shield, FileCheck, Newspaper, Tv, Popcorn, Library, Home,
  MessageCircle
} from "lucide-react";

export default function EliteLifeHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Modal states
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordSignup, setShowPasswordSignup] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [showAgendaModal, setShowAgendaModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showMedalsModal, setShowMedalsModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showAffiliateModal, setShowAffiliateModal] = useState(false);
  const [showTrackerModal, setShowTrackerModal] = useState(false);
  const [showInfluencerModal, setShowInfluencerModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [showCertificatesModal, setShowCertificatesModal] = useState(false);
  const [showVideoPlayerModal, setShowVideoPlayerModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showCoursesModal, setShowCoursesModal] = useState(false);
  const [showWorkbooksModal, setShowWorkbooksModal] = useState(false);
  const [showQuizzesModal, setShowQuizzesModal] = useState(false);
  const [showRecommendationsModal, setShowRecommendationsModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTrackerQuizModal, setShowTrackerQuizModal] = useState(false);
  const [showInitialQuizModal, setShowInitialQuizModal] = useState(false);
  const [showVideosModal, setShowVideosModal] = useState(false);
  const [showRankingModal, setShowRankingModal] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  // User state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPlan, setUserPlan] = useState<"free" | "paid" | "influencer">("free");
  const [userAvatar, setUserAvatar] = useState("https://i.pravatar.cc/150?img=12");
  const [userDescription, setUserDescription] = useState("Membro Elite Life em busca de transformação");
  const [userEmail, setUserEmail] = useState("usuario@email.com");
  const [userPhone, setUserPhone] = useState("(11) 99999-9999");
  const [userPoints, setUserPoints] = useState(2450);
  const [couponUsed, setCouponUsed] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  // Initial Quiz state
  const [initialQuizStep, setInitialQuizStep] = useState(0);
  const [initialQuizAnswers, setInitialQuizAnswers] = useState<any>({});

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "debit" | "pix">("credit");
  const [paymentEmail, setPaymentEmail] = useState("");
  const [paymentPhone, setPaymentPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [pixQRCode, setPixQRCode] = useState("");

  // AI Chat state
  const [aiMessages, setAiMessages] = useState<Array<{role: string, content: string}>>([]); // Será preenchido dinamicamente
  const [aiInput, setAiInput] = useState("");

  // Tracker state
  const [trackerData, setTrackerData] = useState({
    water: 0,
    waterGoal: 2000,
    calories: 0,
    caloriesGoal: 2000,
    protein: 0,
    proteinGoal: 150,
    carbs: 0,
    carbsGoal: 250,
    fat: 0,
    fatGoal: 70,
    fiber: 0,
    fiberGoal: 30,
    steps: 0,
    stepsGoal: 10000,
    exercise: 0,
    exerciseGoal: 60
  });

  // Tracker Quiz state
  const [trackerQuizStep, setTrackerQuizStep] = useState(0);
  const [trackerQuizData, setTrackerQuizData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    activityLevel: "",
    goal: ""
  });

  // Agenda state
  const [agendaItems, setAgendaItems] = useState([
    { id: 1, time: "07:00", title: "Treino Matinal", type: "fitness", editable: true, reminder: true },
    { id: 2, time: "12:00", title: "Almoço Saudável", type: "nutrition", editable: true, reminder: true },
    { id: 3, time: "15:00", title: "Estudar Curso", type: "learning", editable: true, reminder: false },
    { id: 4, time: "19:00", title: "Jantar", type: "nutrition", editable: true, reminder: true },
  ]);

  // Wallet state
  const [walletInvestments, setWalletInvestments] = useState([
    { id: 1, name: "Ações Tech", amount: 5000, profit: 12.5, type: "stocks", editable: true },
    { id: 2, name: "Fundos Imobiliários", amount: 3000, profit: 8.3, type: "realestate", editable: true },
    { id: 3, name: "Renda Fixa", amount: 2000, profit: 5.1, type: "fixed", editable: true },
  ]);

  // Affiliate state
  const [affiliateCode, setAffiliateCode] = useState("ELITE5-" + Math.random().toString(36).substr(2, 6).toUpperCase());
  const [affiliateLink, setAffiliateLink] = useState(`https://elitelife.com/ref/${affiliateCode}`);
  const [isAffiliate, setIsAffiliate] = useState(false);
  const [affiliateStats, setAffiliateStats] = useState({
    sales: 0,
    clicks: 0,
    commission: 0,
    conversionRate: 0
  });

  const initialQuizQuestions = [
    {
      question: "Qual é o seu principal objetivo de vida neste momento?",
      subtitle: "Baseado em estudos de Harvard sobre definição de metas",
      options: [
        { text: "Transformar meu corpo e saúde", icon: Dumbbell },
        { text: "Aumentar minha renda significativamente", icon: DollarSign },
        { text: "Crescer nas redes sociais", icon: TrendingUp },
        { text: "Construir um negócio online", icon: ShoppingCart },
        { text: "Todos os acima", icon: Target }
      ]
    },
    {
      question: "Quanto tempo você pode dedicar diariamente ao seu desenvolvimento?",
      subtitle: "MIT comprova que consistência supera intensidade",
      options: [
        { text: "Menos de 30 minutos", icon: Clock },
        { text: "30 minutos a 1 hora", icon: Clock },
        { text: "1 a 2 horas", icon: Clock },
        { text: "Mais de 2 horas", icon: Clock }
      ]
    },
    {
      question: "Qual seu nível atual de conhecimento em fitness e nutrição?",
      subtitle: "Stanford: 78% das pessoas subestimam a importância da nutrição",
      options: [
        { text: "Iniciante - Preciso de orientação básica", icon: Lightbulb },
        { text: "Intermediário - Já treino mas quero evoluir", icon: TrendingUp },
        { text: "Avançado - Busco otimização", icon: Trophy }
      ]
    },
    {
      question: "Você já investe ou tem interesse em investir?",
      subtitle: "Oxford: Educação financeira aumenta patrimônio em 40% em 5 anos",
      options: [
        { text: "Sim, já invisto regularmente", icon: TrendingUp },
        { text: "Quero começar mas não sei como", icon: Lightbulb },
        { text: "Não tenho interesse no momento", icon: XCircle }
      ]
    },
    {
      question: "Tem interesse em criar conteúdo e ser influenciador digital?",
      subtitle: "Cambridge: Mercado de influência cresce 25% ao ano",
      options: [
        { text: "Sim, é meu sonho!", icon: Star },
        { text: "Talvez no futuro", icon: Clock },
        { text: "Não tenho interesse", icon: XCircle }
      ]
    },
    {
      question: "Você quer vender produtos online (E-commerce)?",
      subtitle: "Yale: E-commerce é o setor que mais cresce globalmente",
      options: [
        { text: "Sim, já vendo online", icon: CheckCircle },
        { text: "Quero começar agora", icon: Zap },
        { text: "Não tenho interesse", icon: XCircle }
      ]
    },
    {
      question: "Qual sua faixa etária?",
      subtitle: "Princeton: Cada fase da vida exige estratégias diferentes",
      options: [
        { text: "18-25 anos", icon: User },
        { text: "26-35 anos", icon: User },
        { text: "36-45 anos", icon: User },
        { text: "46+ anos", icon: User }
      ]
    },
    {
      question: "Como você avalia seu conhecimento em finanças pessoais?",
      subtitle: "Columbia: 65% dos adultos não sabem gerenciar dinheiro",
      options: [
        { text: "Iniciante - Preciso aprender o básico", icon: Lightbulb },
        { text: "Intermediário - Sei o básico", icon: BookOpen },
        { text: "Avançado - Domino o assunto", icon: Trophy }
      ]
    },
    {
      question: "Como você prefere aprender novos conteúdos?",
      subtitle: "University of Chicago: Aprendizado multimodal aumenta retenção em 60%",
      options: [
        { text: "Vídeos práticos e diretos", icon: Video },
        { text: "Textos e apostilas detalhadas", icon: BookOpen },
        { text: "Ambos - Vídeos + Textos", icon: GraduationCap }
      ]
    },
    {
      question: "Qual área mais te interessa neste momento?",
      subtitle: "USP: Foco em uma área acelera resultados em 3x",
      options: [
        { text: "Fitness e Saúde", icon: Dumbbell },
        { text: "Finanças e Investimentos", icon: DollarSign },
        { text: "Marketing Digital", icon: TrendingUp },
        { text: "E-commerce e Vendas", icon: ShoppingCart },
        { text: "Todas as áreas", icon: Target }
      ]
    },
    {
      question: "Você tem uma rotina de exercícios físicos?",
      subtitle: "Harvard Medical: Exercício regular aumenta produtividade em 40%",
      options: [
        { text: "Sim, treino regularmente", icon: CheckCircle },
        { text: "Às vezes, mas sem consistência", icon: Clock },
        { text: "Não, mas quero começar", icon: Zap }
      ]
    },
    {
      question: "Qual sua meta de renda mensal nos próximos 6 meses?",
      subtitle: "MIT Sloan: Metas específicas aumentam chances de sucesso em 90%",
      options: [
        { text: "R$ 1.000 - R$ 3.000", icon: DollarSign },
        { text: "R$ 3.000 - R$ 5.000", icon: DollarSign },
        { text: "R$ 5.000 - R$ 10.000", icon: DollarSign },
        { text: "Mais de R$ 10.000", icon: DollarSign }
      ]
    },
    {
      question: "Você acompanha influenciadores digitais?",
      subtitle: "Stanford: 89% das decisões de compra são influenciadas por criadores",
      options: [
        { text: "Sim, sigo muitos e me inspiro", icon: Star },
        { text: "Às vezes, alguns específicos", icon: Eye },
        { text: "Não costumo acompanhar", icon: XCircle }
      ]
    },
    {
      question: "Certificados profissionais são importantes para você?",
      subtitle: "Oxford: Certificações aumentam empregabilidade em 35%",
      options: [
        { text: "Sim, muito importante para minha carreira", icon: Award },
        { text: "Talvez, depende da área", icon: BookOpen },
        { text: "Não, prefiro experiência prática", icon: Briefcase }
      ]
    },
    {
      question: "Qual seu maior desafio atual?",
      subtitle: "Cambridge: Identificar obstáculos é o primeiro passo para superá-los",
      options: [
        { text: "Falta de tempo e organização", icon: Clock },
        { text: "Falta de dinheiro para investir", icon: DollarSign },
        { text: "Falta de conhecimento técnico", icon: Brain },
        { text: "Falta de motivação e disciplina", icon: Flame }
      ]
    }
  ];

  const videoCategories = [
    { id: "all", label: "Todos" },
    { id: "motivacional", label: "Motivacionais" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "influencer", label: "Influencer Pro" },
    { id: "financas", label: "Finanças" },
  ];

  const [activeVideoCategory, setActiveVideoCategory] = useState("all");

  const videos = [
    // Motivacionais
    { id: "zqPA_xfQlVw", title: "Transformação Completa", category: "motivacional", duration: "12:45" },
    { id: "mgYO12VzvNk", title: "Mindset de Sucesso", category: "motivacional", duration: "15:30" },
    { id: "-bqT-Z3-6js", title: "Mentalidade Vencedora", category: "motivacional", duration: "18:20" },
    { id: "_qKQ1lVNVL0", title: "Foco e Disciplina", category: "motivacional", duration: "10:15" },
    { id: "hSrFmzk6E0w", title: "Produtividade Máxima", category: "motivacional", duration: "22:40" },
    { id: "IhoXqdUvnC0", title: "Superação e Vitória", category: "motivacional", duration: "14:20" },
    { id: "36MkeXmnBVU", title: "Motivação Diária", category: "motivacional", duration: "11:30" },
    { id: "MkDVZplKyTQ", title: "Força Interior", category: "motivacional", duration: "16:45" },
    { id: "GkW5jpPfaC0", title: "Conquiste Seus Sonhos", category: "motivacional", duration: "19:10" },
    { id: "7kR-C-Boy0Y", title: "Determinação Total", category: "motivacional", duration: "13:25" },
    
    // E-commerce
    { id: "8UNgFZ7-5Ts", title: "Mercado Livre Avançado", category: "ecommerce", duration: "17:25" },
    { id: "Im9PNgnXRTo", title: "Amazon FBA", category: "ecommerce", duration: "12:50" },
    { id: "i1E4sgCeUEs", title: "Shopee Estratégias", category: "ecommerce", duration: "20:15" },
    { id: "dSFkPWhrtNg", title: "Tráfego Pago", category: "ecommerce", duration: "14:30" },
    { id: "9VuZlg-GHXk", title: "Google Ads", category: "ecommerce", duration: "18:45" },
    { id: "-tovD0nSPsA", title: "Dropshipping Avançado", category: "ecommerce", duration: "21:30" },
    { id: "kxm7n8BUgT0", title: "Marketplace Completo", category: "ecommerce", duration: "16:20" },
    { id: "rF6daSPnrgc", title: "Vendas Online", category: "ecommerce", duration: "15:40" },
    { id: "P3PU47_a-Kk", title: "E-commerce do Zero", category: "ecommerce", duration: "24:15" },
    { id: "FYtF7FjUgU4", title: "Escalar Vendas", category: "ecommerce", duration: "19:50" },
    { id: "32hRlmYsPa0", title: "Logística E-commerce", category: "ecommerce", duration: "17:30" },
    { id: "ePdUc2xMW6M", title: "Precificação Estratégica", category: "ecommerce", duration: "14:45" },
    { id: "TasDB-Gn0do", title: "Marketing para E-commerce", category: "ecommerce", duration: "20:10" },
    { id: "cfouyjYKzn0", title: "Anúncios que Vendem", category: "ecommerce", duration: "16:35" },
    { id: "lT_eRUHdJ7g", title: "Conversão de Vendas", category: "ecommerce", duration: "18:20" },
    
    // Influencer Pro
    { id: "B89sP7HyfrQ", title: "Crescer no Instagram", category: "influencer", duration: "17:10" },
    { id: "lt-qsz3gFho", title: "TikTok Viral", category: "influencer", duration: "10:30" },
    { id: "DY2CfcVvc00", title: "YouTube Estratégias", category: "influencer", duration: "23:15" },
    { id: "YpUd8YhKo-o", title: "Thumbnails que Convertem", category: "influencer", duration: "14:20" },
    { id: "ogV4_WZcw7E", title: "Scripts Virais", category: "influencer", duration: "20:45" },
    { id: "X0Y7Rwwkh5A", title: "Conteúdo Engajador", category: "influencer", duration: "15:30" },
    { id: "Wh44_CIxfYI", title: "Monetização Digital", category: "influencer", duration: "19:20" },
    { id: "JCV5HQOePDg", title: "Algoritmo das Redes", category: "influencer", duration: "16:45" },
    { id: "NdT7BRlaeVg", title: "Edição Profissional", category: "influencer", duration: "21:10" },
    { id: "4I5QFma7Cso", title: "Hashtags Estratégicas", category: "influencer", duration: "12:30" },
    { id: "vdCv0BiFqEQ", title: "Parcerias e Marcas", category: "influencer", duration: "18:15" },
    { id: "x0W1kIvBerg", title: "Crescimento Orgânico", category: "influencer", duration: "20:40" },
    { id: "_6XeJ-XGK3Y", title: "Reels que Viralizam", category: "influencer", duration: "14:50" },
    { id: "2-rneqJ6QDU", title: "Stories Estratégicos", category: "influencer", duration: "11:25" },
    { id: "zgbtjg1Kb4g", title: "Lives de Sucesso", category: "influencer", duration: "17:35" },
    { id: "5f15qZNphcY", title: "Audiência Engajada", category: "influencer", duration: "16:20" },
    { id: "-xG104jgeyo", title: "Branding Pessoal", category: "influencer", duration: "19:45" },
    { id: "9gbLAq_CoCY", title: "Conteúdo Autêntico", category: "influencer", duration: "15:10" },
    { id: "cYzODhgJIAQ", title: "Planejamento de Conteúdo", category: "influencer", duration: "18:30" },
    { id: "2fjKm3Vsb-E", title: "Análise de Métricas", category: "influencer", duration: "20:15" },
    { id: "d8T48bm-8Ps", title: "Tendências Digitais", category: "influencer", duration: "14:40" },
    { id: "fLjUM3Puy48", title: "Colaborações Estratégicas", category: "influencer", duration: "17:20" },
    { id: "zxk4kOaqyMU", title: "Copywriting para Redes", category: "influencer", duration: "16:55" },
    { id: "YDoI2xGAU1g", title: "Engajamento Autêntico", category: "influencer", duration: "19:10" },
    { id: "XjzPknnRwpQ", title: "Nichos Lucrativos", category: "influencer", duration: "21:25" },
    { id: "5u8KFhVRWI0", title: "Comunidade Fiel", category: "influencer", duration: "15:45" },
    { id: "GuMPTPK-qJs", title: "Vídeos Profissionais", category: "influencer", duration: "18:50" },
    { id: "_bTtYhQsrOM", title: "Influência Digital", category: "influencer", duration: "20:30" },

    // Finanças
    { id: "nX5nPjcVP_I", title: "Investimentos para Iniciantes", category: "financas", duration: "18:30" },
    { id: "l8zh-v3FIpM", title: "Renda Passiva", category: "financas", duration: "22:15" },
    { id: "PHH-BMCuES0", title: "Ações e Dividendos", category: "financas", duration: "25:40" },
    { id: "NNMBNRcP_tU", title: "Fundos Imobiliários", category: "financas", duration: "19:20" },
    { id: "YBJwJuSkgno", title: "Tesouro Direto", category: "financas", duration: "16:45" },
    { id: "phwa27l7fgs", title: "Planejamento Financeiro", category: "financas", duration: "20:30" },
    { id: "T5ZgYbvHwE0", title: "Educação Financeira", category: "financas", duration: "17:50" },
    { id: "cR5FGUBuNEw", title: "Independência Financeira", category: "financas", duration: "23:15" },
    { id: "dxfx0Yw3n7k", title: "Carteira de Investimentos", category: "financas", duration: "19:40" },
    { id: "Frr6cMXMcEY", title: "Criptomoedas", category: "financas", duration: "21:25" },
  ];

  const filteredVideos = activeVideoCategory === "all" 
    ? videos 
    : videos.filter(v => v.category === activeVideoCategory);

  const famousDiets = [
    { id: 1, name: "Cristiano Ronaldo", country: "PT", diet: "6 refeições/dia, alto consumo de proteínas", workout: "Treino intenso 5x/semana", calories: 3200 },
    { id: 2, name: "Anitta", country: "BR", diet: "Dieta balanceada com foco em proteínas", workout: "Dança e musculação 4x/semana", calories: 2000 },
    { id: 3, name: "The Rock", country: "US", diet: "7 refeições/dia, 5000 calorias", workout: "Musculação pesada 6x/semana", calories: 5000 },
    { id: 4, name: "Gisele Bündchen", country: "BR", diet: "80% vegetais, 20% proteínas magras", workout: "Yoga e pilates 5x/semana", calories: 1800 },
    { id: 5, name: "Neymar Jr", country: "BR", diet: "Alta proteína, carboidratos controlados", workout: "Treino funcional 6x/semana", calories: 3000 },
    { id: 6, name: "Jennifer Lopez", country: "US", diet: "Sem açúcar, sem carboidratos refinados", workout: "Dança e musculação 5x/semana", calories: 1400 },
  ];

  const plans = [
    {
      id: 1,
      name: "Gratuito",
      price: "R$ 0,00",
      period: "",
      badge: null,
      color: "from-gray-400 to-gray-600",
      icon: Lock,
      features: [
        "Acesso limitado",
        "Agenda personalizável (versão reduzida)",
        "Tracker básico (água, calorias e passos)",
        "Quiz inicial",
        "Relatório simples após 7 dias",
        { text: "Cursos e IA bloqueados", locked: true }
      ]
    },
    {
      id: 2,
      name: "PRO",
      price: "R$ 49,90",
      period: "/mês",
      badge: null,
      color: "from-purple-500 to-indigo-600",
      icon: Zap,
      features: [
        "+ de 100 cursos desbloqueados",
        "1000 atividades e 1000 questionários",
        "Acesso à IA de suporte",
        "Relatórios semanais",
        "Agenda completa editável",
        "Tracker avançado",
        "Certificado Elite Life"
      ]
    },
    {
      id: 3,
      name: "PRO PLUS",
      price: "R$ 79,90",
      period: "/mês",
      badge: "Mais Popular",
      badgeColor: "bg-gradient-to-r from-orange-400 to-pink-600",
      color: "from-pink-500 to-purple-600",
      icon: Crown,
      features: [
        "Tudo do PRO +",
        "Comunidade exclusiva",
        "Desafios de 30 dias",
        "Sistema de medalhas e ranking",
        "Relatórios de performance",
        "Notificações personalizadas"
      ]
    },
    {
      id: 4,
      name: "ELITE",
      price: "R$ 89,90",
      period: "/mês",
      badge: "Acesso Total",
      badgeColor: "bg-[#D4AF37] text-[#0B0B0B]",
      color: "from-[#D4AF37] to-amber-600",
      icon: Crown,
      features: [
        "Tudo do PRO PLUS +",
        "IA Premium (planos automáticos)",
        "Chat social da comunidade",
        "Carteira Personalizada editável",
        "Dashboards avançados",
        "Relatórios detalhados"
      ]
    },
    {
      id: 5,
      name: "ANUAL",
      price: "R$ 299,00",
      period: "/ano",
      badge: "Melhor Economia",
      badgeColor: "bg-gradient-to-r from-green-400 to-emerald-600",
      color: "from-emerald-500 to-teal-600",
      icon: Crown,
      features: [
        "Todos os recursos ELITE",
        "Pagamento anual com desconto",
        "Acesso completo a certificados",
        "Agenda completa editável",
        "IA completa",
        "Suporte exclusivo"
      ]
    },
    {
      id: 6,
      name: "INFLUENCER PRO",
      price: "R$ 39,99",
      period: "/mês",
      badge: "Criadores de Conteúdo",
      badgeColor: "bg-gradient-to-r from-pink-400 to-rose-600",
      color: "from-rose-400 to-pink-600",
      icon: Video,
      features: [
        "IA cria thumbnails e scripts",
        "Relatórios de vídeos virais",
        "Calendários de postagens",
        "400 dietas de famosos",
        "Plano semanal de treino",
        "Hashtags virais",
        "Tracker avançado",
        "Afiliação com 15% comissão",
        { text: "SEM acesso à Carteira", locked: true },
        { text: "SEM vídeos de Finanças", locked: true }
      ]
    },
    {
      id: 7,
      name: "E-COMMERCE PRO",
      price: "R$ 89,90",
      period: "/mês",
      badge: "Vendas Online",
      badgeColor: "bg-gradient-to-r from-blue-400 to-cyan-600",
      color: "from-cyan-500 to-blue-600",
      icon: ShoppingCart,
      features: [
        "Mercado Livre, Amazon, Shopee",
        "+1000 atividades e vídeos",
        "Tráfego pago e Google Ads",
        "Anúncios profissionais",
        "Estratégias para escalar",
        "Tracker financeiro",
        "Certificado E-commerce"
      ],
      marketplaces: true
    }
  ];

  const stats = [
    { label: "+ de 50K alunos transformados", value: "50K+", icon: Users },
    { label: "+ de 100 cursos", value: "100+", icon: GraduationCap },
    { label: "+ de 1000 atividades", value: "1000+", icon: BookOpen },
    { label: "Certificados ELITE LIFE", value: "✓", icon: Award }
  ];

  const notifications = [
    { id: 1, title: "Boas-vindas!", message: "Bem-vindo à Elite Life! Comece sua jornada de transformação agora.", time: "Agora", read: false, type: "welcome" },
    { id: 2, title: "Desconto disponível", message: "Cupom de 5% liberado: ELITE5OFF", time: "1h atrás", read: false, type: "coupon" },
    { id: 3, title: "Lembrete de agenda", message: "Treino em 30 minutos", time: "2h atrás", read: true, type: "reminder" },
  ];

  const translations = {
    pt: {
      home: "Início",
      courses: "Cursos",
      videos: "Vídeos",
      agenda: "Agenda",
      tracker: "Tracker",
      wallet: "Carteira",
      influencer: "Influencer Pro",
      ecommerce: "E-commerce",
      affiliates: "Afiliados",
      ranking: "Ranking",
      dashboard: "Dashboard",
      certificates: "Certificados",
      login: "Entrar",
      signup: "Criar Conta",
      hero: {
        title: "Transforme sua vida em 90 dias",
        subtitle: "Corpo, mente e dinheiro no mesmo lugar. + de 50K alunos transformados."
      },
      quiz: {
        title: "Descubra o Plano Ideal Para Você!",
        subtitle: "Responda 15 perguntas rápidas e receba uma recomendação personalizada baseada em IA",
        button: "Começar Quiz Gratuito"
      },
      cta: {
        startFree: "Começar Agora Grátis",
        viewPlans: "Ver Planos Premium"
      },
      stats: {
        students: "+ de 50K alunos transformados",
        courses: "+ de 100 cursos",
        activities: "+ de 1000 atividades",
        certificates: "Certificados ELITE LIFE"
      },
      plans: {
        title: "Escolha Seu Plano",
        subtitle: "Transforme sua vida com o plano perfeito para você",
        free: "Começar Grátis",
        subscribe: "Assinar Agora"
      },
      testimonials: {
        title: "Resultados Reais",
        subtitle: "Veja o que nossos alunos estão conquistando"
      },
      footer: {
        description: "Transformando vidas através de educação de qualidade",
        platform: "Plataforma",
        support: "Suporte",
        social: "Redes Sociais",
        copyright: "© 2024 Elite Life. Todos os direitos reservados."
      }
    },
    en: {
      home: "Home",
      courses: "Courses",
      videos: "Videos",
      agenda: "Schedule",
      tracker: "Tracker",
      wallet: "Wallet",
      influencer: "Influencer Pro",
      ecommerce: "E-commerce",
      affiliates: "Affiliates",
      ranking: "Ranking",
      dashboard: "Dashboard",
      certificates: "Certificates",
      login: "Login",
      signup: "Sign Up",
      hero: {
        title: "Transform your life in 90 days",
        subtitle: "Body, mind and money in one place. + 50K students transformed."
      },
      quiz: {
        title: "Discover Your Ideal Plan!",
        subtitle: "Answer 15 quick questions and get a personalized AI-based recommendation",
        button: "Start Free Quiz"
      },
      cta: {
        startFree: "Start Now Free",
        viewPlans: "View Premium Plans"
      },
      stats: {
        students: "+ 50K students transformed",
        courses: "+ 100 courses",
        activities: "+ 1000 activities",
        certificates: "ELITE LIFE Certificates"
      },
      plans: {
        title: "Choose Your Plan",
        subtitle: "Transform your life with the perfect plan for you",
        free: "Start Free",
        subscribe: "Subscribe Now"
      },
      testimonials: {
        title: "Real Results",
        subtitle: "See what our students are achieving"
      },
      footer: {
        description: "Transforming lives through quality education",
        platform: "Platform",
        support: "Support",
        social: "Social Media",
        copyright: "© 2024 Elite Life. All rights reserved."
      }
    },
    es: {
      home: "Inicio",
      courses: "Cursos",
      videos: "Videos",
      agenda: "Agenda",
      tracker: "Tracker",
      wallet: "Cartera",
      influencer: "Influencer Pro",
      ecommerce: "E-commerce",
      affiliates: "Afiliados",
      ranking: "Ranking",
      dashboard: "Dashboard",
      certificates: "Certificados",
      login: "Entrar",
      signup: "Crear Cuenta",
      hero: {
        title: "Transforma tu vida en 90 días",
        subtitle: "Cuerpo, mente y dinero en un solo lugar. + de 50K alumnos transformados."
      },
      quiz: {
        title: "¡Descubre Tu Plan Ideal!",
        subtitle: "Responde 15 preguntas rápidas y recibe una recomendación personalizada basada en IA",
        button: "Comenzar Quiz Gratuito"
      },
      cta: {
        startFree: "Comenzar Ahora Gratis",
        viewPlans: "Ver Planes Premium"
      },
      stats: {
        students: "+ de 50K alumnos transformados",
        courses: "+ de 100 cursos",
        activities: "+ de 1000 actividades",
        certificates: "Certificados ELITE LIFE"
      },
      plans: {
        title: "Elige Tu Plan",
        subtitle: "Transforma tu vida con el plan perfecto para ti",
        free: "Comenzar Gratis",
        subscribe: "Suscribirse Ahora"
      },
      testimonials: {
        title: "Resultados Reales",
        subtitle: "Mira lo que nuestros alumnos están logrando"
      },
      footer: {
        description: "Transformando vidas a través de educación de calidad",
        platform: "Plataforma",
        support: "Soporte",
        social: "Redes Sociales",
        copyright: "© 2024 Elite Life. Todos los derechos reservados."
      }
    }
  };

  const t = translations[language as keyof typeof translations];

  const languages = [
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  // Atualizar mensagem inicial da IA quando idioma mudar
  useEffect(() => {
    const aiWelcomeMessages: any = {
      pt: "Olá! Sou a IA da Elite Life. Como posso ajudar você hoje? Posso responder sobre cursos, planos, agenda, tracker, investimentos, afiliados, certificados, dietas de famosos, e-commerce e muito mais!",
      en: "Hello! I'm the Elite Life AI. How can I help you today? I can answer questions about courses, plans, schedule, tracker, investments, affiliates, certificates, celebrity diets, e-commerce and much more!",
      es: "¡Hola! Soy la IA de Elite Life. ¿Cómo puedo ayudarte hoy? Puedo responder sobre cursos, planes, agenda, tracker, inversiones, afiliados, certificados, dietas de famosos, e-commerce y mucho más!"
    };

    setAiMessages([
      { role: "assistant", content: aiWelcomeMessages[language] || aiWelcomeMessages.pt }
    ]);
  }, [language]);

  const certificates = [
    { id: 1, name: "Finanças Pessoais Avançadas", date: "15/01/2024", status: "completed", institution: "Harvard Business School" },
    { id: 2, name: "Fitness & Nutrição", date: "10/01/2024", status: "completed", institution: "MIT Health Sciences" },
    { id: 3, name: "Marketing Digital", date: "05/01/2024", status: "completed", institution: "Stanford University" },
    { id: 4, name: "E-commerce Mastery", date: "-", status: "locked", institution: "USP Business" },
  ];

  const rankingData = [
    { position: 1, name: "João Silva", points: 15420, earnings: "R$ 3.450,00", medal: "🥇", badge: "Diamante" },
    { position: 2, name: "Maria Santos", points: 14890, earnings: "R$ 2.890,00", medal: "🥈", badge: "Platina" },
    { position: 3, name: "Pedro Costa", points: 13750, earnings: "R$ 2.340,00", medal: "🥉", badge: "Ouro" },
    { position: 4, name: "Ana Oliveira", points: 12340, earnings: "R$ 1.890,00", medal: "", badge: "Prata" },
    { position: 5, name: "Carlos Souza", points: 11890, earnings: "R$ 1.560,00", medal: "", badge: "Bronze" },
  ];

  const medals = [
    { 
      id: 1, 
      name: "Iniciante", 
      icon: "🌱", 
      requirement: "Completar 5 atividades", 
      points: 100,
      unlocked: true,
      description: "Bem-vindo à Elite Life! Você deu o primeiro passo rumo à transformação."
    },
    { 
      id: 2, 
      name: "Bronze", 
      icon: "🥉", 
      requirement: "Completar 20 atividades + 500 pontos", 
      points: 500,
      unlocked: true,
      description: "Você está progredindo! Continue assim e alcance novos patamares."
    },
    { 
      id: 3, 
      name: "Prata", 
      icon: "🥈", 
      requirement: "Completar 50 atividades + 2.000 pontos", 
      points: 2000,
      unlocked: true,
      description: "Excelente trabalho! Você está entre os melhores alunos da Elite Life."
    },
    { 
      id: 4, 
      name: "Ouro", 
      icon: "🥇", 
      requirement: "Completar 100 atividades + 5.000 pontos", 
      points: 5000,
      unlocked: false,
      description: "Elite! Você dominou as habilidades essenciais. Continue para o topo!"
    },
    { 
      id: 5, 
      name: "Platina", 
      icon: "💎", 
      requirement: "Completar 200 atividades + 10.000 pontos", 
      points: 10000,
      unlocked: false,
      description: "Lendário! Poucos chegam aqui. Você é referência na comunidade."
    },
    { 
      id: 6, 
      name: "Diamante", 
      icon: "💠", 
      requirement: "Completar 500 atividades + 20.000 pontos", 
      points: 20000,
      unlocked: false,
      description: "Mestre absoluto! Você alcançou o nível máximo da Elite Life."
    },
  ];

  const recommendations = {
    filmes: [
      { title: "The Social Network", category: "Empreendedorismo", platform: "Netflix" },
      { title: "The Wolf of Wall Street", category: "Finanças", platform: "Prime Video" },
      { title: "The Pursuit of Happyness", category: "Motivação", platform: "Netflix" },
      { title: "Steve Jobs", category: "Inovação", platform: "Apple TV" },
    ],
    livros: [
      { title: "Pai Rico, Pai Pobre", author: "Robert Kiyosaki", category: "Finanças" },
      { title: "Os Segredos da Mente Milionária", author: "T. Harv Eker", category: "Mindset" },
      { title: "Como Fazer Amigos e Influenciar Pessoas", author: "Dale Carnegie", category: "Influência" },
      { title: "A Startup Enxuta", author: "Eric Ries", category: "E-commerce" },
    ],
    series: [
      { title: "Billions", category: "Finanças", platform: "Paramount+" },
      { title: "Silicon Valley", category: "Startups", platform: "HBO Max" },
      { title: "Suits", category: "Negócios", platform: "Netflix" },
      { title: "The Dropout", category: "Empreendedorismo", platform: "Disney+" },
    ]
  };

  const universities = [
    "Harvard University",
    "MIT (Massachusetts Institute of Technology)",
    "Stanford University",
    "USP (Universidade de São Paulo)",
    "Oxford University",
    "Cambridge University",
    "Yale University",
    "Princeton University",
    "Columbia University",
    "University of Chicago"
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Empreendedora Digital",
      image: "https://i.pravatar.cc/150?img=1",
      text: "Elite Life mudou completamente minha vida! Em 3 meses perdi 12kg e aumentei minha renda em 40%. A plataforma é incrível!",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Influencer",
      image: "https://i.pravatar.cc/150?img=3",
      text: "O módulo Influencer Pro me ajudou a crescer de 5k para 50k seguidores em 2 meses. Recomendo demais!",
      rating: 5
    },
    {
      name: "Juliana Costa",
      role: "Vendedora E-commerce",
      image: "https://i.pravatar.cc/150?img=5",
      text: "Faturei R$ 15 mil no primeiro mês aplicando as estratégias do curso de E-commerce. Simplesmente sensacional!",
      rating: 5
    },
    {
      name: "Roberto Alves",
      role: "Coach de Fitness",
      image: "https://i.pravatar.cc/150?img=7",
      text: "A combinação de treino, nutrição e mindset da Elite Life é perfeita. Meus clientes adoram!",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      role: "Investidora",
      image: "https://i.pravatar.cc/150?img=9",
      text: "A carteira personalizada me ajudou a organizar meus investimentos e aumentar meus lucros em 25%!",
      rating: 5
    },
    {
      name: "Lucas Mendes",
      role: "Estudante",
      image: "https://i.pravatar.cc/150?img=11",
      text: "Consegui meu primeiro emprego aplicando o que aprendi nos cursos. Elite Life mudou minha vida!",
      rating: 5
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUserName("Usuário Elite");
    setUserPlan("paid");
    setShowLoginModal(false);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUserName("Novo Usuário");
    setUserPlan("free");
    setShowSignupModal(false);
    setAffiliateStats({
      sales: 0,
      clicks: 0,
      commission: 0,
      conversionRate: 0
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserPlan("free");
    setShowUserMenu(false);
  };

  const handleLockedClick = (path: string) => {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-[#D4AF37] text-[#0B0B0B] px-6 py-3 rounded-xl font-bold shadow-2xl z-[200] animate-shake';
    toast.textContent = '🔒 Assine um plano para desbloquear esta área.';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
      window.location.href = `#planos`;
    }, 2000);
  };

  const navigateToPlans = () => {
    window.location.href = "#planos";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAISubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    let response = "Entendi sua pergunta! ";
    
    const input = aiInput.toLowerCase();
    
    if (input.includes("plano") || input.includes("preço") || input.includes("assinar")) {
      response += "Temos 7 planos disponíveis: Gratuito, PRO (R$ 49,90), PRO PLUS (R$ 79,90), ELITE (R$ 89,90), ANUAL (R$ 299,00), INFLUENCER PRO (R$ 39,99) e E-COMMERCE PRO (R$ 89,90). Qual se encaixa melhor no seu objetivo?";
    } else if (input.includes("curso") || input.includes("aprender")) {
      response += "Temos + de 100 cursos nas áreas de Fitness, Nutrição, Finanças, E-commerce, Marketing Digital e Desenvolvimento Pessoal. Todos baseados em estudos de Harvard, MIT, Stanford, USP, Oxford, Cambridge, Yale, Princeton, Columbia e University of Chicago!";
    } else if (input.includes("certificado")) {
      response += "Ao concluir cada curso, você recebe um Certificado Elite Life oficial que pode ser baixado e compartilhado no LinkedIn!";
    } else if (input.includes("afiliado") || input.includes("ganhar")) {
      response += "Nosso programa de afiliados oferece 15% de comissão em cada venda. Você recebe um código de desconto de 5% e um link exclusivo. Pode acompanhar tudo em tempo real!";
    } else if (input.includes("tracker") || input.includes("água") || input.includes("calorias")) {
      response += "O Tracker permite registrar água, calorias, passos e exercícios. Fazemos um quiz inicial personalizado para calcular suas metas ideais baseado em estudos científicos e geramos relatórios semanais!";
    } else if (input.includes("agenda")) {
      response += "A Agenda é totalmente editável e se adapta ao seu plano. Versão gratuita tem recursos básicos, enquanto planos pagos têm agenda completa com lembretes personalizados!";
    } else if (input.includes("carteira") || input.includes("investimento")) {
      response += "A Carteira Personalizada (plano ELITE) permite simular investimentos em ações, fundos imobiliários e renda fixa, com relatórios detalhados de performance e testes de estratégias!";
    } else if (input.includes("influencer") || input.includes("dieta") || input.includes("famoso")) {
      response += "O plano Influencer Pro inclui 400 dietas de famosos (200 BR + 200 INT), IA para criar thumbnails e scripts, calendário de postagens, hashtags virais e muito mais!";
    } else if (input.includes("medalha") || input.includes("pontos") || input.includes("ranking")) {
      response += "Sistema de gamificação com 6 medalhas: Iniciante (100 pts), Bronze (500 pts), Prata (2.000 pts), Ouro (5.000 pts), Platina (10.000 pts) e Diamante (20.000 pts). Ganhe pontos completando atividades, assistindo vídeos e ficando 2h/dia na plataforma!";
    } else if (input.includes("apostila") || input.includes("atividade")) {
      response += "Temos + de 1000 atividades práticas e apostilas completas para cada área: Fitness, Nutrição, Finanças, E-commerce e Marketing Digital!";
    } else if (input.includes("quiz")) {
      response += "Oferecemos + de 1000 quizzes personalizados para testar seu conhecimento e ajudar no seu desenvolvimento em todas as áreas!";
    } else if (input.includes("filme") || input.includes("livro") || input.includes("série")) {
      response += "Temos uma seção exclusiva com recomendações de filmes, livros e séries sobre empreendedorismo, finanças, mente milionária e influência digital!";
    } else {
      response += "Posso ajudar com informações sobre cursos, planos, agenda, tracker, investimentos, afiliados, certificados, dietas de famosos, e-commerce, medalhas, apostilas, quizzes, recomendações e muito mais. O que você gostaria de saber especificamente?";
    }

    setAiMessages([...aiMessages, 
      { role: "user", content: aiInput },
      { role: "assistant", content: response }
    ]);
    setAiInput("");
  };

  const copyAffiliateCode = () => {
    navigator.clipboard.writeText(affiliateCode);
    alert("Código copiado! Compartilhe com seus amigos.");
  };

  const copyAffiliateLink = () => {
    navigator.clipboard.writeText(affiliateLink);
    alert("Link copiado! Compartilhe nas suas redes sociais.");
  };

  const handleBecomeAffiliate = () => {
    setIsAffiliate(true);
    alert("Parabéns! Você agora é um afiliado Elite Life. Seu código de desconto de 5% e link foram gerados! Recebemos sua inscrição no email elitelife.norply@gmail.com");
  };

  const handleVideoClick = (videoId: string) => {
    if (userPlan === "paid" || userPlan === "influencer") {
      setSelectedVideoId(videoId);
      setShowVideoPlayerModal(true);
    } else {
      handleLockedClick("/videos");
    }
  };

  const canAccessVideo = (category: string) => {
    if (userPlan === "paid") return true;
    if (userPlan === "influencer" && category !== "financas") return true;
    return false;
  };

  const canAccessWallet = () => {
    return userPlan === "paid";
  };

  const handleSelectPlan = (plan: any) => {
    if (plan.id === 1) {
      setShowSignupModal(true);
    } else {
      setSelectedPlan(plan);
      setShowPaymentModal(true);
    }
  };

  const generatePixQRCode = () => {
    setPixQRCode("00020126580014BR.GOV.BCB.PIX0136" + Math.random().toString(36).substr(2, 32) + "5204000053039865802BR5913ELITE LIFE6009SAO PAULO62070503***6304");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === "pix") {
      generatePixQRCode();
      alert("QR Code PIX gerado! Escaneie para finalizar o pagamento.");
    } else {
      alert(`Pagamento processado com sucesso! Bem-vindo ao plano ${selectedPlan?.name}!`);
      setUserPlan("paid");
      setShowPaymentModal(false);
    }
  };

  const calculateTrackerGoals = () => {
    const { weight, height, age, gender, activityLevel, goal } = trackerQuizData;
    
    let bmr = 0;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    
    if (gender === "male") {
      bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
    } else {
      bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
    }
    
    const activityFactors: any = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    
    const tdee = bmr * activityFactors[activityLevel];
    
    let calories = tdee;
    if (goal === "lose") calories -= 500;
    if (goal === "gain") calories += 500;
    
    const water = w * 35;
    
    const stepsGoals: any = {
      sedentary: 5000,
      light: 7500,
      moderate: 10000,
      active: 12500,
      veryActive: 15000
    };
    
    setTrackerData({
      ...trackerData,
      caloriesGoal: Math.round(calories),
      waterGoal: Math.round(water),
      stepsGoal: stepsGoals[activityLevel],
      proteinGoal: Math.round(w * 2),
      carbsGoal: Math.round(calories * 0.5 / 4),
      fatGoal: Math.round(calories * 0.25 / 9),
      fiberGoal: 30
    });
    
    setShowTrackerQuizModal(false);
    setShowTrackerModal(true);
    
    alert(`Metas calculadas com sucesso!\n\nCalorias: ${Math.round(calories)} kcal/dia\nÁgua: ${Math.round(water)}ml/dia\nPassos: ${stepsGoals[activityLevel]} passos/dia\n\nBaseado em estudos de Harvard Medical School e MIT Health Sciences.`);
  };

  const analyzeInitialQuiz = () => {
    const answers = initialQuizAnswers;
    let recommendedPlan = plans[1]; // PRO por padrão
    
    // Lógica de recomendação baseada nas respostas
    if (answers[4]?.includes("Sim, é meu sonho") || answers[5]?.includes("Sim, já vendo")) {
      recommendedPlan = plans[6]; // E-COMMERCE PRO
    } else if (answers[4]?.includes("Sim, é meu sonho")) {
      recommendedPlan = plans[5]; // INFLUENCER PRO
    } else if (answers[3]?.includes("Sim, já invisto") && answers[7]?.includes("Avançado")) {
      recommendedPlan = plans[3]; // ELITE
    } else if (answers[1]?.includes("Mais de 2 horas")) {
      recommendedPlan = plans[2]; // PRO PLUS
    }
    
    setShowInitialQuizModal(false);
    
    // Mostrar resultado persuasivo
    const resultMessage = `🎯 ANÁLISE COMPLETA!\n\nBaseado nas suas respostas e em estudos das melhores universidades do mundo (Harvard, MIT, Stanford, Oxford, Cambridge), identificamos que o plano ideal para você é:\n\n✨ ${recommendedPlan.name} ✨\n\nPor quê?\n${recommendedPlan.features.slice(0, 3).map((f: any) => `✓ ${typeof f === 'string' ? f : f.text}`).join('\n')}\n\n💡 Este plano foi escolhido com base em:\n• Seus objetivos de vida\n• Tempo disponível\n• Nível de conhecimento atual\n• Áreas de interesse\n\n🚀 Pronto para começar sua transformação?`;
    
    alert(resultMessage);
    
    setTimeout(() => {
      window.location.href = "#planos";
    }, 1000);
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelPlan = () => {
    if (confirm("Tem certeza que deseja cancelar seu plano? Você perderá acesso a todos os recursos premium.")) {
      setUserPlan("free");
      alert("Plano cancelado com sucesso. Sentiremos sua falta!");
      setShowSettingsModal(false);
    }
  };

  const getNextMedal = () => {
    const nextMedal = medals.find(m => !m.unlocked);
    return nextMedal || medals[medals.length - 1];
  };

  const currentMedal = medals.filter(m => m.unlocked).pop() || medals[0];
  const nextMedal = getNextMedal();
  const progressToNextLevel = ((userPoints - currentMedal.points) / (nextMedal.points - currentMedal.points)) * 100;

  const handleNotificationClick = (notif: any) => {
    if (notif.type === "coupon") {
      setShowCouponModal(true);
      setShowNotifications(false);
    } else if (notif.type === "welcome") {
      alert("Bem-vindo à Elite Life! 🎉\n\nEstamos muito felizes em tê-lo conosco. Comece explorando nossos cursos, vídeos e ferramentas para transformar sua vida em 90 dias!\n\nQualquer dúvida, nossa IA está sempre disponível para ajudar.");
    }
  };

  const handleApplyDiscount = () => {
    if (discountCode === "ELITE5OFF" && !couponUsed && selectedPlan) {
      const originalPrice = parseFloat(selectedPlan.price.replace("R$ ", "").replace(",", "."));
      const discountedPrice = originalPrice * 0.95;
      alert(`Desconto aplicado! Novo valor: R$ ${discountedPrice.toFixed(2).replace(".", ",")}`);
      setCouponUsed(true);
    } else if (couponUsed) {
      alert("Este cupom já foi utilizado!");
    } else {
      alert("Cupom inválido!");
    }
  };

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    setInitialQuizAnswers({
      ...initialQuizAnswers,
      [questionIndex]: answer
    });

    if (questionIndex < initialQuizQuestions.length - 1) {
      setInitialQuizStep(questionIndex + 1);
    } else {
      // Última pergunta - analisar resultados
      analyzeInitialQuiz();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] w-full overflow-x-hidden">
      {/* HEADER OTIMIZADO - Mobile First + Desktop Perfeito */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-2xl">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-24">
            {/* Logo e Nome - Responsivo */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/63e7ff74-0183-4d37-90a3-89096c2f65ac.jpg" 
                alt="Elite Life Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 rounded-xl shadow-lg object-cover ring-2 ring-[#D4AF37]/30"
              />
              <span className="text-lg sm:text-xl lg:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37] bg-clip-text text-transparent">
                Elite Life
              </span>
            </div>

            {/* Desktop Navigation - Melhorado */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-[#D4AF37]/10 hover:to-amber-600/10 hover:text-[#D4AF37] transition-all duration-300 group"
              >
                <Home className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{t.home}</span>
              </button>
              
              <button
                onClick={() => userPlan === "free" ? handleLockedClick("/courses") : setShowCoursesModal(true)}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-600/10 hover:text-purple-400 transition-all duration-300 group"
              >
                <GraduationCap className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{t.courses}</span>
                {userPlan === "free" && <Lock className="w-3 h-3" />}
              </button>

              <button
                onClick={() => userPlan === "free" ? handleLockedClick("/videos") : setShowVideosModal(true)}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-red-500/10 hover:to-pink-600/10 hover:text-red-400 transition-all duration-300 group"
              >
                <Video className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{t.videos}</span>
                {userPlan === "free" && <Lock className="w-3 h-3" />}
              </button>

              <button
                onClick={() => setShowAgendaModal(true)}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-600/10 hover:text-blue-400 transition-all duration-300 group"
              >
                <Calendar className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{t.agenda}</span>
              </button>

              <button
                onClick={() => userPlan === "free" ? setShowTrackerQuizModal(true) : setShowTrackerModal(true)}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-600/10 hover:text-green-400 transition-all duration-300 group"
              >
                <Activity className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{t.tracker}</span>
                {userPlan === "free" && <Lock className="w-3 h-3" />}
              </button>

              <button
                onClick={() => canAccessWallet() ? setShowWalletModal(true) : handleLockedClick("/wallet")}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-600/10 hover:text-emerald-400 transition-all duration-300 group"
              >
                <Wallet className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{t.wallet}</span>
                {!canAccessWallet() && <Lock className="w-3 h-3" />}
              </button>

              <button
                onClick={() => userPlan === "free" ? handleLockedClick("/influencer") : setShowInfluencerModal(true)}
                className="flex items-center gap-2 px-2 xl:px-3 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-rose-600/10 hover:text-pink-400 transition-all duration-300 group"
              >
                <Video className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-xs xl:text-sm">{t.influencer}</span>
                {userPlan === "free" && <Lock className="w-3 h-3" />}
              </button>

              <button
                onClick={() => userPlan === "free" ? handleLockedClick("/ecommerce") : setActiveSection("ecommerce")}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-600/10 hover:text-cyan-400 transition-all duration-300 group"
              >
                <ShoppingCart className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{t.ecommerce}</span>
                {userPlan === "free" && <Lock className="w-3 h-3" />}
              </button>

              <button
                onClick={() => setShowAffiliateModal(true)}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-amber-600/10 hover:text-orange-400 transition-all duration-300 group"
              >
                <Users className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{t.affiliates}</span>
              </button>

              <button
                onClick={() => setShowRankingModal(true)}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 rounded-xl text-white hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-amber-600/10 hover:text-yellow-400 transition-all duration-300 group"
              >
                <Trophy className="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">{t.ranking}</span>
              </button>
            </nav>

            {/* Right Actions - Responsivo */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Social Links - Desktop Only */}
              <div className="hidden xl:flex items-center gap-2">
                <a 
                  href="https://www.instagram.com/elitelife_experience?igsh=MWlhZzh0NGgxNTR1ag%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 group"
                >
                  <Instagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://t.me/boost/elitelifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
                >
                  <Send className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://discord.gg/yVPMQG8tk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 group"
                >
                  <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://whatsapp.com/channel/0029Vb79nXTBvvsjVktkoE05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 group"
                >
                  <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Notifications - Responsivo */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 sm:p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 transition-all duration-300 group"
                >
                  <Bell className="w-5 h-5 text-white group-hover:text-[#D4AF37] group-hover:scale-110 transition-all" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-bold animate-pulse">
                    2
                  </span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 lg:w-96 bg-[#1A1A1A] rounded-2xl shadow-2xl border border-[#D4AF37]/20 p-4 z-50">
                    <h3 className="text-white font-bold mb-4 text-base sm:text-lg">Notificações</h3>
                    <div className="space-y-3">
                      {notifications.map(notif => (
                        <div 
                          key={notif.id} 
                          onClick={() => handleNotificationClick(notif)}
                          className={`p-3 rounded-xl ${notif.read ? 'bg-[#2A2A2A]' : 'bg-[#D4AF37]/10'} cursor-pointer hover:bg-[#D4AF37]/20 transition-all`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-white font-semibold text-sm">{notif.title}</h4>
                            <span className="text-xs text-[#9A9A9A]">{notif.time}</span>
                          </div>
                          <p className="text-[#9A9A9A] text-sm">{notif.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Language - Sempre Visível */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 transition-all duration-300 group"
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-[#D4AF37] transition-colors" />
                  <span className="hidden sm:inline text-sm font-medium text-white">{language.toUpperCase()}</span>
                </button>

                {showLanguageMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[#1A1A1A] rounded-2xl shadow-2xl border border-[#D4AF37]/20 p-2 z-50">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguageMenu(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#D4AF37]/10 transition-all text-left ${
                          language === lang.code ? 'bg-[#D4AF37]/20' : ''
                        }`}
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="text-white font-medium text-sm">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* User Menu - Responsivo */}
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
                  >
                    <img src={userAvatar} alt="Avatar" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white" />
                    <span className="hidden sm:block text-sm lg:text-base font-bold text-[#0B0B0B]">{userName}</span>
                    <ChevronDown className="w-4 h-4 text-[#0B0B0B]" />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-56 sm:w-64 lg:w-72 bg-[#1A1A1A] rounded-2xl shadow-2xl border border-[#D4AF37]/20 p-4 z-50">
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#D4AF37]/20">
                        <img src={userAvatar} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-[#D4AF37]" />
                        <div>
                          <h4 className="text-white font-bold text-base">{userName}</h4>
                          <p className="text-xs text-[#9A9A9A]">Plano: {userPlan === "free" ? "Gratuito" : "Premium"}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setShowAccountModal(true);
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#D4AF37]/10 transition-all text-left mb-2"
                      >
                        <User className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white font-medium text-sm">Minha Conta</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowMedalsModal(true);
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#D4AF37]/10 transition-all text-left mb-2"
                      >
                        <Medal className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white font-medium text-sm">Medalhas</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowSettingsModal(true);
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#D4AF37]/10 transition-all text-left mb-2"
                      >
                        <Settings className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white font-medium text-sm">Configurações</span>
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 transition-all text-left"
                      >
                        <LogOut className="w-5 h-5 text-red-500" />
                        <span className="text-red-500 font-medium text-sm">Sair</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-white hover:bg-[#1A1A1A] transition-all duration-300 font-medium text-sm"
                  >
                    {t.login}
                  </button>
                  <button
                    onClick={() => setShowSignupModal(true)}
                    className="px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300 text-sm"
                  >
                    {t.signup}
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1A1A1A] border-t border-[#D4AF37]/20">
            <div className="w-full max-w-[1920px] mx-auto px-4 py-4 space-y-2">
              {/* Social Links Mobile */}
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#D4AF37]/20">
                <a 
                  href="https://www.instagram.com/elitelife_experience?igsh=MWlhZzh0NGgxNTR1ag%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:shadow-lg transition-all"
                >
                  <Instagram className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">Instagram</span>
                </a>
                <a 
                  href="https://t.me/boost/elitelifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">Telegram</span>
                </a>
                <a 
                  href="https://discord.gg/yVPMQG8tk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">Discord</span>
                </a>
                <a 
                  href="https://whatsapp.com/channel/0029Vb79nXTBvvsjVktkoE05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[#D4AF37]/10 transition-all"
              >
                <Home className="w-5 h-5" />
                <span>{t.home}</span>
              </button>

              <button
                onClick={() => {
                  userPlan === "free" ? handleLockedClick("/courses") : setShowCoursesModal(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-purple-500/10 transition-all"
              >
                <GraduationCap className="w-5 h-5" />
                <span>{t.courses}</span>
                {userPlan === "free" && <Lock className="w-4 h-4 ml-auto" />}
              </button>

              <button
                onClick={() => {
                  userPlan === "free" ? handleLockedClick("/videos") : setShowVideosModal(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-red-500/10 transition-all"
              >
                <Video className="w-5 h-5" />
                <span>{t.videos}</span>
                {userPlan === "free" && <Lock className="w-4 h-4 ml-auto" />}
              </button>

              <button
                onClick={() => {
                  setShowAgendaModal(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-blue-500/10 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.agenda}</span>
              </button>

              <button
                onClick={() => {
                  userPlan === "free" ? setShowTrackerQuizModal(true) : setShowTrackerModal(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-green-500/10 transition-all"
              >
                <Activity className="w-5 h-5" />
                <span>{t.tracker}</span>
                {userPlan === "free" && <Lock className="w-4 h-4 ml-auto" />}
              </button>

              <button
                onClick={() => {
                  canAccessWallet() ? setShowWalletModal(true) : handleLockedClick("/wallet");
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-emerald-500/10 transition-all"
              >
                <Wallet className="w-5 h-5" />
                <span>{t.wallet}</span>
                {!canAccessWallet() && <Lock className="w-4 h-4 ml-auto" />}
              </button>

              <button
                onClick={() => {
                  userPlan === "free" ? handleLockedClick("/influencer") : setShowInfluencerModal(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-pink-500/10 transition-all"
              >
                <Video className="w-5 h-5" />
                <span>{t.influencer}</span>
                {userPlan === "free" && <Lock className="w-4 h-4 ml-auto" />}
              </button>

              <button
                onClick={() => {
                  userPlan === "free" ? handleLockedClick("/ecommerce") : setActiveSection("ecommerce");
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-cyan-500/10 transition-all"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{t.ecommerce}</span>
                {userPlan === "free" && <Lock className="w-4 h-4 ml-auto" />}
              </button>

              <button
                onClick={() => {
                  setShowAffiliateModal(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-orange-500/10 transition-all"
              >
                <Users className="w-5 h-5" />
                <span>{t.affiliates}</span>
              </button>

              <button
                onClick={() => {
                  setShowRankingModal(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-yellow-500/10 transition-all"
              >
                <Trophy className="w-5 h-5" />
                <span>{t.ranking}</span>
              </button>

              {!isLoggedIn && (
                <div className="pt-4 border-t border-[#D4AF37]/20 space-y-2">
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl text-white bg-[#2A2A2A] hover:bg-[#3A3A3A] transition-all font-medium"
                  >
                    {t.login}
                  </button>
                  <button
                    onClick={() => {
                      setShowSignupModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold hover:shadow-lg transition-all"
                  >
                    {t.signup}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION - Mobile First + Desktop Perfeito */}
      <section className="pt-24 sm:pt-28 lg:pt-40 pb-12 sm:pb-16 lg:pb-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden w-full">
        {/* Background Animado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="w-full max-w-7xl mx-auto relative z-10">
          {/* Quiz Inicial Banner - Responsivo */}
          {!isLoggedIn && (
            <div className="mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#0B0B0B] animate-pulse" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B0B0B]">
                  {t.quiz.title}
                </h2>
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#0B0B0B] animate-pulse" />
              </div>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#0B0B0B]/80 mb-4 sm:mb-6 lg:mb-8 max-w-3xl mx-auto">
                {t.quiz.subtitle}
              </p>
              <button
                onClick={() => setShowInitialQuizModal(true)}
                className="px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 bg-[#0B0B0B] text-[#D4AF37] rounded-xl font-bold text-base sm:text-lg lg:text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
              >
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                {t.quiz.button}
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          )}

          <div className="text-center">
            {/* Título Principal - Responsivo */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
            
            {/* Subtítulo - Responsivo */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#9A9A9A] mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            {/* CTAs - Responsivo */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
              <button
                onClick={() => setShowSignupModal(true)}
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37] text-[#0B0B0B] rounded-xl font-bold text-base sm:text-lg lg:text-xl hover:shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                {t.cta.startFree}
              </button>
              <button
                onClick={() => window.location.href = "#planos"}
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 bg-[#1A1A1A] text-white rounded-xl font-bold text-base sm:text-lg lg:text-xl hover:bg-[#2A2A2A] hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 border border-[#D4AF37]/30"
              >
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                {t.cta.viewPlans}
              </button>
            </div>

            {/* Stats - Grid Responsivo */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:scale-105 transition-all duration-300 group"
                >
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#D4AF37] mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#D4AF37] mb-1 sm:mb-2 lg:mb-3">{stat.value}</div>
                  <div className="text-xs sm:text-sm lg:text-base text-[#9A9A9A]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS SECTION - Grid Responsivo Perfeito */}
      <section id="planos" className="py-12 sm:py-16 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#0B0B0B] w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
                {t.plans.title}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-[#9A9A9A]">
              {t.plans.subtitle}
            </p>
          </div>

          {/* Grid Responsivo de Planos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 ${plan.badgeColor} px-2 sm:px-3 py-1 rounded-full text-xs font-bold z-10`}>
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform`}>
                  <plan.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                {/* Nome e Preço */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-5 sm:mb-6 lg:mb-8">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4AF37]">{plan.price}</span>
                  <span className="text-[#9A9A9A] text-sm sm:text-base">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 lg:mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm sm:text-base">
                      {typeof feature === 'string' ? (
                        <>
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[#9A9A9A]">{feature}</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[#9A9A9A]">{feature.text}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Marketplaces Badge */}
                {plan.marketplaces && (
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 p-2 sm:p-3 bg-[#2A2A2A] rounded-xl">
                    <span className="text-xs text-[#9A9A9A]">Integração:</span>
                    <div className="flex gap-1 sm:gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded flex items-center justify-center text-xs font-bold">ML</div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded flex items-center justify-center text-xs font-bold">S</div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded flex items-center justify-center text-xs font-bold">A</div>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3 sm:py-3.5 lg:py-4 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base lg:text-lg ${
                    plan.id === 1
                      ? 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
                      : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:scale-105`
                  }`}
                >
                  {plan.id === 1 ? t.plans.free : t.plans.subscribe}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Grid Responsivo */}
      <section className="py-12 sm:py-16 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#0B0B0B] to-[#1A1A1A] w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
                {t.testimonials.title}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-[#9A9A9A]">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[#D4AF37]"
                  />
                  <div>
                    <h4 className="font-bold text-white text-base sm:text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-[#9A9A9A]">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                
                <p className="text-[#9A9A9A] text-sm sm:text-base leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Responsivo */}
      <footer className="bg-[#1A1A1A] border-t border-[#D4AF37]/20 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/63e7ff74-0183-4d37-90a3-89096c2f65ac.jpg" 
                  alt="Elite Life Logo" 
                  className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-xl object-cover"
                />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Elite Life</h3>
              </div>
              <p className="text-[#9A9A9A] text-sm sm:text-base">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-base sm:text-lg">{t.footer.platform}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors text-sm sm:text-base">{t.courses}</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors text-sm sm:text-base">{t.videos}</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors text-sm sm:text-base">{t.certificates}</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors text-sm sm:text-base">{t.affiliates}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-base sm:text-lg">{t.footer.support}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors text-sm sm:text-base">Central de Ajuda</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }} className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors text-sm sm:text-base">Termos de Uso</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }} className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors text-sm sm:text-base">Política de Privacidade</a></li>
                <li><a href="mailto:elitelife.norply@gmail.com" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors text-sm sm:text-base">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-base sm:text-lg">{t.footer.social}</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a href="https://www.instagram.com/elitelife_experience?igsh=MWlhZzh0NGgxNTR1ag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a href="https://t.me/boost/elitelifeApp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a href="https://discord.gg/yVPMQG8tk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a href="https://whatsapp.com/channel/0029Vb79nXTBvvsjVktkoE05" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
                <a href="mailto:elitelife.norply@gmail.com" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-6 sm:pt-8 text-center">
            <p className="text-[#9A9A9A] text-sm sm:text-base">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* AI CHAT BUTTON - Responsivo */}
      <button
        onClick={() => setShowAIChat(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-40 group"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#0B0B0B] group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {/* MODAL - Quiz Inicial Persuasivo */}
      {showInitialQuizModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] rounded-3xl p-6 sm:p-8 lg:p-12 max-w-3xl w-full border-2 border-[#D4AF37]/30 shadow-2xl my-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-[#0B0B0B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Quiz Personalizado</h2>
                    <p className="text-sm text-[#9A9A9A]">Pergunta {initialQuizStep + 1} de {initialQuizQuestions.length}</p>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-[#2A2A2A] rounded-full h-2 mt-4">
                  <div 
                    className="bg-gradient-to-r from-[#D4AF37] to-amber-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((initialQuizStep + 1) / initialQuizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <button 
                onClick={() => setShowInitialQuizModal(false)} 
                className="text-white hover:text-[#D4AF37] transition-colors ml-4"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {initialQuizQuestions[initialQuizStep].question}
              </h3>
              <p className="text-sm text-[#D4AF37] flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                {initialQuizQuestions[initialQuizStep].subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {initialQuizQuestions[initialQuizStep].options.map((option, index) => {
                const OptionIcon = option.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(initialQuizStep, option.text)}
                    className="w-full p-4 sm:p-5 bg-[#2A2A2A] hover:bg-gradient-to-r hover:from-[#D4AF37]/20 hover:to-amber-600/20 border-2 border-transparent hover:border-[#D4AF37] rounded-xl transition-all duration-300 group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#1A1A1A] group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-amber-600 rounded-xl flex items-center justify-center transition-all">
                        <OptionIcon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#0B0B0B]" />
                      </div>
                      <span className="text-white font-medium text-base sm:text-lg flex-1">{option.text}</span>
                      <ChevronRight className="w-5 h-5 text-[#9A9A9A] group-hover:text-[#D4AF37] transition-colors" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#D4AF37]/20">
              <button
                onClick={() => initialQuizStep > 0 && setInitialQuizStep(initialQuizStep - 1)}
                disabled={initialQuizStep === 0}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  initialQuizStep === 0
                    ? 'bg-[#2A2A2A] text-[#9A9A9A] cursor-not-allowed'
                    : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
                }`}
              >
                Voltar
              </button>
              <div className="text-center">
                <p className="text-sm text-[#9A9A9A]">
                  {initialQuizStep === initialQuizQuestions.length - 1 ? 'Última pergunta!' : `Faltam ${initialQuizQuestions.length - initialQuizStep - 1} perguntas`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODALS - Login */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-md w-full border border-[#D4AF37]/20">
            <div className="flex justify-between items-center mb-5 sm:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{t.login}</h2>
              <button onClick={() => setShowLoginModal(false)} className="text-white hover:text-[#D4AF37]">
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-white mb-2 text-sm sm:text-base">E-mail</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 sm:py-4 rounded-xl bg-[#2A2A2A] text-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-sm sm:text-base">Senha</label>
                <div className="relative">
                  <input
                    type={showPasswordLogin ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-[#2A2A2A] text-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none text-sm sm:text-base"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-white"
                  >
                    {showPasswordLogin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg transition-all text-base sm:text-lg"
              >
                {t.login}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODALS - Signup */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-md w-full border border-[#D4AF37]/20">
            <div className="flex justify-between items-center mb-5 sm:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{t.signup}</h2>
              <button onClick={() => setShowSignupModal(false)} className="text-white hover:text-[#D4AF37]">
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
            <form onSubmit={handleSignup} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-white mb-2 text-sm sm:text-base">E-mail</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 sm:py-4 rounded-xl bg-[#2A2A2A] text-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-sm sm:text-base">Telefone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 sm:py-4 rounded-xl bg-[#2A2A2A] text-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none text-sm sm:text-base"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-sm sm:text-base">Senha</label>
                <div className="relative">
                  <input
                    type={showPasswordSignup ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-[#2A2A2A] text-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none text-sm sm:text-base"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordSignup(!showPasswordSignup)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-white"
                  >
                    {showPasswordSignup ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-white mb-2 text-sm sm:text-base">Confirmar Senha</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-[#2A2A2A] text-white border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none text-sm sm:text-base"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg transition-all text-base sm:text-lg"
              >
                {t.signup}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL - Cupom */}
      {showCouponModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-md w-full border border-[#D4AF37]/20">
            <div className="flex justify-between items-center mb-5 sm:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2">
                <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                Cupom de Desconto
              </h2>
              <button onClick={() => setShowCouponModal(false)} className="text-white hover:text-[#D4AF37]">
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-2xl p-5 sm:p-6 lg:p-8 mb-5 sm:mb-6 lg:mb-8">
                <p className="text-[#0B0B0B] font-bold text-base sm:text-lg lg:text-xl mb-2">Seu Cupom de 5% OFF</p>
                <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-5 flex items-center justify-between">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B0B0B]">ELITE5OFF</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("ELITE5OFF");
                      alert("Cupom copiado!");
                    }}
                    className="p-2 sm:p-2.5 lg:p-3 bg-[#D4AF37] rounded-lg hover:bg-amber-600 transition-all"
                  >
                    <Copy className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B0B0B]" />
                  </button>
                </div>
              </div>
              <p className="text-[#9A9A9A] mb-4 text-sm sm:text-base">
                Use este cupom na hora de assinar qualquer plano e ganhe 5% de desconto!
              </p>
              <p className="text-sm text-[#D4AF37]">
                ⚠️ Válido apenas para primeira compra
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.15s ease-in-out;
        }
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
