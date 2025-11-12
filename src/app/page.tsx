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
  Shield, FileCheck, Newspaper, Tv, Popcorn, Library
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
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  // User state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPlan, setUserPlan] = useState<"free" | "paid" | "influencer">("free");
  const [userAvatar, setUserAvatar] = useState("https://i.pravatar.cc/150?img=12");
  const [userDescription, setUserDescription] = useState("");
  const [userEmail, setUserEmail] = useState("usuario@email.com");
  const [userPhone, setUserPhone] = useState("(11) 99999-9999");
  const [userPoints, setUserPoints] = useState(2450);

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
  const [aiMessages, setAiMessages] = useState<Array<{role: string, content: string}>>([
    { role: "assistant", content: "Olá! Sou a IA da Elite Life. Como posso ajudar você hoje? Posso responder sobre cursos, planos, agenda, tracker, investimentos, afiliados, certificados, dietas de famosos, e-commerce e muito mais!" }
  ]);
  const [aiInput, setAiInput] = useState("");

  // Tracker state
  const [trackerData, setTrackerData] = useState({
    water: 0,
    waterGoal: 2000,
    calories: 0,
    caloriesGoal: 2000,
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
    { id: 1, name: "Ações Tech", amount: 5000, profit: 12.5, editable: true },
    { id: 2, name: "Fundos Imobiliários", amount: 3000, profit: 8.3, editable: true },
    { id: 3, name: "Renda Fixa", amount: 2000, profit: 5.1, editable: true },
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

  // Notifications system - a cada 30 minutos
  useEffect(() => {
    const notificationMessages = [
      "💪 Hora de treinar! Não deixe para amanhã.",
      "📚 Continue seus estudos! Você está quase lá.",
      "💧 Lembre-se de beber água!",
      "🎯 Foco! Você está no caminho certo.",
      "⭐ Nova medalha disponível! Continue assim.",
      "🔥 Seu progresso está incrível!",
      "📈 Confira seu dashboard atualizado!",
      "🎓 Novo curso disponível para você!"
    ];

    const interval = setInterval(() => {
      const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
      
      // Criar notificação visual
      const toast = document.createElement('div');
      toast.className = 'fixed top-20 right-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] px-6 py-4 rounded-xl font-bold shadow-2xl z-[200] animate-slide-in max-w-sm';
      toast.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="text-2xl">🔔</div>
          <div>
            <div class="font-bold mb-1">Elite Life</div>
            <div class="text-sm">${randomMessage}</div>
          </div>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.remove();
      }, 5000);
    }, 30 * 60 * 1000); // 30 minutos

    return () => clearInterval(interval);
  }, []);

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
    
    // E-commerce
    { id: "8UNgFZ7-5Ts", title: "Mercado Livre Avançado", category: "ecommerce", duration: "17:25" },
    { id: "Im9PNgnXRTo", title: "Amazon FBA", category: "ecommerce", duration: "12:50" },
    { id: "i1E4sgCeUEs", title: "Shopee Estratégias", category: "ecommerce", duration: "20:15" },
    { id: "dSFkPWhrtNg", title: "Tráfego Pago", category: "ecommerce", duration: "14:30" },
    { id: "9VuZlg-GHXk", title: "Google Ads", category: "ecommerce", duration: "18:45" },
    
    // Influencer Pro
    { id: "B89sP7HyfrQ", title: "Crescer no Instagram", category: "influencer", duration: "17:10" },
    { id: "lt-qsz3gFho", title: "TikTok Viral", category: "influencer", duration: "10:30" },
    { id: "DY2CfcVvc00", title: "YouTube Estratégias", category: "influencer", duration: "23:15" },
    { id: "YpUd8YhKo-o", title: "Thumbnails que Convertem", category: "influencer", duration: "14:20" },
    { id: "ogV4_WZcw7E", title: "Scripts Virais", category: "influencer", duration: "20:45" },

    // Finanças
    { id: "nX5nPjcVP_I", title: "Investimentos para Iniciantes", category: "financas", duration: "18:30" },
    { id: "l8zh-v3FIpM", title: "Renda Passiva", category: "financas", duration: "22:15" },
    { id: "PHH-BMCuES0", title: "Ações e Dividendos", category: "financas", duration: "25:40" },
    { id: "NNMBNRcP_tU", title: "Fundos Imobiliários", category: "financas", duration: "19:20" },
    { id: "YBJwJuSkgno", title: "Tesouro Direto", category: "financas", duration: "16:45" },
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
    { label: "+ de 50.000 alunos", value: "50k+" },
    { label: "+ de 100 cursos", value: "100+" },
    { label: "+ de 1000 atividades", value: "1000+" },
    { label: "Certificados ELITE LIFE", value: "✓" }
  ];

  const notifications = [
    { id: 1, title: "Boas-vindas!", message: "Bem-vindo à Elite Life", time: "Agora", read: false },
    { id: 2, title: "Desconto disponível", message: "Cupom de 5% liberado", time: "1h atrás", read: false },
    { id: 3, title: "Lembrete de agenda", message: "Treino em 30 minutos", time: "2h atrás", read: true },
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
        subtitle: "Corpo, mente e dinheiro no mesmo lugar. + de 50 mil alunos transformados."
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
        subtitle: "Body, mind and money in one place. + 50k students transformed."
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
        subtitle: "Cuerpo, mente y dinero en un solo lugar. + de 50 mil alumnos transformados."
      }
    }
  };

  const t = translations[language as keyof typeof translations];

  const languages = [
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

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
      unlocked: true 
    },
    { 
      id: 2, 
      name: "Bronze", 
      icon: "🥉", 
      requirement: "Completar 20 atividades + 500 pontos", 
      points: 500,
      unlocked: true 
    },
    { 
      id: 3, 
      name: "Prata", 
      icon: "🥈", 
      requirement: "Completar 50 atividades + 2.000 pontos", 
      points: 2000,
      unlocked: true 
    },
    { 
      id: 4, 
      name: "Ouro", 
      icon: "🥇", 
      requirement: "Completar 100 atividades + 5.000 pontos", 
      points: 5000,
      unlocked: false 
    },
    { 
      id: 5, 
      name: "Platina", 
      icon: "💎", 
      requirement: "Completar 200 atividades + 10.000 pontos", 
      points: 10000,
      unlocked: false 
    },
    { 
      id: 6, 
      name: "Diamante", 
      icon: "💠", 
      requirement: "Completar 500 atividades + 20.000 pontos", 
      points: 20000,
      unlocked: false 
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
    // Zerar stats de afiliado para novo usuário
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
    // Simular envio de email para elitelife.norply@gmail.com
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
    // Simular geração de QR Code PIX
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
    
    // Cálculo baseado em estudos científicos
    let bmr = 0;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    
    // Fórmula de Harris-Benedict
    if (gender === "male") {
      bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
    } else {
      bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
    }
    
    // Fator de atividade
    const activityFactors: any = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    
    const tdee = bmr * activityFactors[activityLevel];
    
    // Ajuste baseado no objetivo
    let calories = tdee;
    if (goal === "lose") calories -= 500;
    if (goal === "gain") calories += 500;
    
    // Água: 35ml por kg de peso corporal
    const water = w * 35;
    
    // Passos: baseado em nível de atividade
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
      stepsGoal: stepsGoals[activityLevel]
    });
    
    setShowTrackerQuizModal(false);
    setShowTrackerModal(true);
    
    alert(`Metas calculadas com sucesso!\n\nCalorias: ${Math.round(calories)} kcal/dia\nÁgua: ${Math.round(water)}ml/dia\nPassos: ${stepsGoals[activityLevel]} passos/dia\n\nBaseado em estudos de Harvard Medical School e MIT Health Sciences.`);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Payment Modal */}
      {showPaymentModal && selectedPlan && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${selectedPlan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl`}>
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Finalizar Assinatura</h3>
                <p className="text-[#9A9A9A] mb-2">Plano: {selectedPlan.name}</p>
                <p className="text-3xl font-bold text-[#D4AF37]">{selectedPlan.price}{selectedPlan.period}</p>
              </div>

              {/* Payment Method Selection */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <button
                  onClick={() => setPaymentMethod("credit")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "credit"
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <CreditCard className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === "credit" ? "text-[#D4AF37]" : "text-[#9A9A9A]"}`} />
                  <div className={`text-sm font-bold ${paymentMethod === "credit" ? "text-[#D4AF37]" : "text-[#9A9A9A]"}`}>
                    Crédito
                  </div>
                  <div className="text-xs text-[#9A9A9A]">À vista</div>
                </button>

                <button
                  onClick={() => setPaymentMethod("debit")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "debit"
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <CreditCard className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === "debit" ? "text-[#D4AF37]" : "text-[#9A9A9A]"}`} />
                  <div className={`text-sm font-bold ${paymentMethod === "debit" ? "text-[#D4AF37]" : "text-[#9A9A9A]"}`}>
                    Débito
                  </div>
                  <div className="text-xs text-[#9A9A9A]">À vista</div>
                </button>

                <button
                  onClick={() => {
                    setPaymentMethod("pix");
                    generatePixQRCode();
                  }}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "pix"
                      ? "border-[#D4AF37] bg-[#D4AF37]/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <QrCode className={`w-8 h-8 mx-auto mb-2 ${paymentMethod === "pix" ? "text-[#D4AF37]" : "text-[#9A9A9A]"}`} />
                  <div className={`text-sm font-bold ${paymentMethod === "pix" ? "text-[#D4AF37]" : "text-[#9A9A9A]"}`}>
                    PIX
                  </div>
                  <div className="text-xs text-[#9A9A9A]">Instantâneo</div>
                </button>
              </div>

              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      value={paymentEmail}
                      onChange={(e) => setPaymentEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={paymentPhone}
                      onChange={(e) => setPaymentPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                </div>

                {/* Card Details (if not PIX) */}
                {paymentMethod !== "pix" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Número do Cartão</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Nome no Cartão</label>
                      <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                        placeholder="NOME COMPLETO"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Validade</label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                          placeholder="MM/AA"
                          maxLength={5}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">CVV</label>
                        <input
                          type="text"
                          value={cardCVV}
                          onChange={(e) => setCardCVV(e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                          placeholder="123"
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>

                    {paymentMethod === "credit" && (
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <p className="text-yellow-400 text-sm">
                          ⚠️ Pagamento no crédito não pode ser parcelado (apenas à vista)
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* PIX QR Code */}
                {paymentMethod === "pix" && pixQRCode && (
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="w-64 h-64 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-xl">
                      <QrCode className="w-48 h-48 text-gray-400" />
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Escaneie o QR Code com seu app de banco</p>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 font-mono break-all">{pixQRCode}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4AF37]/30"
                >
                  {paymentMethod === "pix" ? "Confirmar Pagamento PIX" : "Finalizar Pagamento"}
                </button>

                <p className="text-center text-xs text-[#9A9A9A]">
                  Pagamento seguro e criptografado 🔒
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Medals Modal - MELHORADO */}
      {showMedalsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowMedalsModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Trophy className="w-20 h-20 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">Sistema de Medalhas</h3>
                <p className="text-[#9A9A9A] mb-4">
                  Ganhe pontos completando atividades, assistindo vídeos e ficando 2h/dia na plataforma
                </p>
                
                {/* Pontos Atuais */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border border-[#D4AF37]/30 rounded-xl">
                  <Star className="w-6 h-6 text-[#D4AF37]" />
                  <div className="text-left">
                    <div className="text-sm text-[#9A9A9A]">Seus Pontos Atuais</div>
                    <div className="text-2xl font-bold text-[#D4AF37]">{userPoints.toLocaleString('pt-BR')} pontos</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {medals.map((medal) => {
                  const progress = (userPoints / medal.points) * 100;
                  const pointsNeeded = medal.points - userPoints;
                  
                  return (
                    <div 
                      key={medal.id}
                      className={`p-6 rounded-2xl border-2 transition-all ${
                        medal.unlocked
                          ? "bg-gradient-to-br from-[#D4AF37]/20 to-amber-600/20 border-[#D4AF37]/50"
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`text-5xl ${medal.unlocked ? "" : "grayscale opacity-50"}`}>
                            {medal.icon}
                          </div>
                          <div>
                            <h4 className={`text-xl font-bold ${medal.unlocked ? "text-[#D4AF37]" : "text-white"}`}>
                              {medal.name}
                            </h4>
                            <p className="text-sm text-[#9A9A9A]">{medal.points.toLocaleString('pt-BR')} pontos</p>
                          </div>
                        </div>
                        {medal.unlocked && (
                          <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
                        )}
                      </div>

                      <p className="text-[#9A9A9A] text-sm mb-4">{medal.requirement}</p>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-[#9A9A9A] mb-2">
                          <span>Progresso</span>
                          <span>{Math.min(progress, 100).toFixed(0)}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              medal.unlocked 
                                ? "bg-gradient-to-r from-[#D4AF37] to-amber-600" 
                                : "bg-gradient-to-r from-gray-500 to-gray-600"
                            }`}
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          ></div>
                        </div>
                      </div>

                      {!medal.unlocked && pointsNeeded > 0 && (
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <p className="text-sm text-[#9A9A9A]">
                            Faltam <span className="text-[#D4AF37] font-bold">{pointsNeeded.toLocaleString('pt-BR')} pontos</span> para desbloquear
                          </p>
                        </div>
                      )}

                      {medal.unlocked && (
                        <div className="bg-[#D4AF37]/10 rounded-lg p-3 text-center">
                          <p className="text-sm text-[#D4AF37] font-bold">
                            ✓ Medalha Desbloqueada!
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  Como Ganhar Pontos
                </h4>
                <ul className="space-y-2 text-sm text-[#9A9A9A]">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Completar atividades: <strong className="text-white">+50 pontos</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Assistir vídeos completos: <strong className="text-white">+25 pontos</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Fazer quizzes: <strong className="text-white">+30 pontos</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Ficar 2h/dia na plataforma: <strong className="text-white">+100 pontos</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Concluir cursos: <strong className="text-white">+200 pontos</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Account Modal - MELHORADO */}
      {showAccountModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowAccountModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="relative inline-block mb-4">
                  <img 
                    src={userAvatar}
                    alt="Avatar"
                    className="w-32 h-32 rounded-full ring-4 ring-[#D4AF37]/50"
                  />
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center hover:scale-110 transition-all">
                    <Upload className="w-5 h-5 text-[#0B0B0B]" />
                  </button>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Minha Conta</h3>
                <p className="text-[#9A9A9A]">Gerencie suas informações pessoais</p>
              </div>

              <div className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nome Completo
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                    <button className="px-4 py-3 bg-[#D4AF37] text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all">
                      <Save className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Descrição */}
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Edit className="w-4 h-4" />
                    Descrição / Bio
                  </label>
                  <div className="flex gap-2">
                    <textarea
                      value={userDescription}
                      onChange={(e) => setUserDescription(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                      rows={3}
                      placeholder="Conte um pouco sobre você..."
                    />
                    <button className="px-4 py-3 bg-[#D4AF37] text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all self-start">
                      <Save className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    E-mail
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                    <button className="px-4 py-3 bg-[#D4AF37] text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all">
                      <Save className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefone
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                    <button className="px-4 py-3 bg-[#D4AF37] text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all">
                      <Save className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Senha */}
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Alterar Senha
                  </label>
                  <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[#9A9A9A] hover:bg-white/10 hover:text-white transition-all text-left flex items-center justify-between">
                    <span>••••••••</span>
                    <Edit className="w-5 h-5" />
                  </button>
                </div>

                {/* Plano Atual */}
                <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border border-[#D4AF37]/30 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#9A9A9A] mb-1">Plano Atual</div>
                      <div className="text-2xl font-bold text-[#D4AF37]">
                        {userPlan === "free" ? "Gratuito" : userPlan === "paid" ? "PRO" : "Influencer Pro"}
                      </div>
                    </div>
                    <button 
                      onClick={navigateToPlans}
                      className="px-6 py-3 bg-[#D4AF37] text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all"
                    >
                      Fazer Upgrade
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal - NOVO */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowSettingsModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Settings className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Configurações</h3>
                <p className="text-[#9A9A9A]">Gerencie suas preferências</p>
              </div>

              <div className="space-y-4">
                <button className="w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-left flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-[#9A9A9A] group-hover:text-[#D4AF37]" />
                    <div>
                      <div className="text-white font-medium">Notificações</div>
                      <div className="text-sm text-[#9A9A9A]">Gerenciar alertas e lembretes</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#9A9A9A]" />
                </button>

                <button className="w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-left flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#9A9A9A] group-hover:text-[#D4AF37]" />
                    <div>
                      <div className="text-white font-medium">Idioma</div>
                      <div className="text-sm text-[#9A9A9A]">Português (Brasil)</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#9A9A9A]" />
                </button>

                <button className="w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-left flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#9A9A9A] group-hover:text-[#D4AF37]" />
                    <div>
                      <div className="text-white font-medium">Privacidade</div>
                      <div className="text-sm text-[#9A9A9A]">Controle seus dados</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#9A9A9A]" />
                </button>

                <button 
                  onClick={() => setShowTermsModal(true)}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-left flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-5 h-5 text-[#9A9A9A] group-hover:text-[#D4AF37]" />
                    <div>
                      <div className="text-white font-medium">Termos de Uso</div>
                      <div className="text-sm text-[#9A9A9A]">Leia nossos termos</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#9A9A9A]" />
                </button>

                <button 
                  onClick={() => setShowPrivacyModal(true)}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-left flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#9A9A9A] group-hover:text-[#D4AF37]" />
                    <div>
                      <div className="text-white font-medium">Política de Privacidade</div>
                      <div className="text-sm text-[#9A9A9A]">Como protegemos seus dados</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#9A9A9A]" />
                </button>

                {userPlan !== "free" && (
                  <button className="w-full p-4 bg-red-500/10 border border-red-500/30 rounded-xl hover:bg-red-500/20 transition-all text-left flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <div>
                        <div className="text-red-400 font-medium">Cancelar Plano</div>
                        <div className="text-sm text-red-400/70">Cancelar assinatura atual</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-red-400" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal - NOVO */}
      {showTermsModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <FileCheck className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Termos de Uso</h3>
                <p className="text-[#9A9A9A]">Última atualização: Janeiro 2024</p>
              </div>

              <div className="prose prose-invert max-w-none space-y-6 text-[#9A9A9A]">
                <section>
                  <h4 className="text-xl font-bold text-white mb-3">1. Aceitação dos Termos</h4>
                  <p>Ao acessar e usar a plataforma Elite Life, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">2. Descrição dos Serviços</h4>
                  <p>A Elite Life oferece uma plataforma educacional com cursos, vídeos, tracker de saúde, carteira de investimentos, sistema de afiliados e ferramentas de desenvolvimento pessoal e profissional.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">3. Planos e Pagamentos</h4>
                  <p>Oferecemos diferentes planos de assinatura. Os valores e recursos de cada plano estão claramente descritos na página de planos. Pagamentos são processados de forma segura através de nossos parceiros.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">4. Cancelamento</h4>
                  <p>Você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta. O acesso aos recursos pagos permanecerá ativo até o fim do período já pago.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">5. Propriedade Intelectual</h4>
                  <p>Todo o conteúdo da plataforma Elite Life, incluindo cursos, vídeos, textos e materiais, é protegido por direitos autorais e não pode ser reproduzido sem autorização.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">6. Programa de Afiliados</h4>
                  <p>Nosso programa de afiliados oferece comissões de 15% sobre vendas realizadas através de seu link exclusivo. Códigos de desconto são de uso único por pessoa.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">7. Limitação de Responsabilidade</h4>
                  <p>A Elite Life não se responsabiliza por resultados individuais. Os resultados podem variar de pessoa para pessoa.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">8. Contato</h4>
                  <p>Para dúvidas sobre estes termos, entre em contato através de elitelife.norply@gmail.com</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal - NOVO */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Shield className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Política de Privacidade</h3>
                <p className="text-[#9A9A9A]">Última atualização: Janeiro 2024</p>
              </div>

              <div className="prose prose-invert max-w-none space-y-6 text-[#9A9A9A]">
                <section>
                  <h4 className="text-xl font-bold text-white mb-3">1. Informações que Coletamos</h4>
                  <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e dados de pagamento. Também coletamos dados de uso da plataforma para melhorar sua experiência.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">2. Como Usamos Suas Informações</h4>
                  <p>Usamos suas informações para:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Fornecer e melhorar nossos serviços</li>
                    <li>Processar pagamentos e gerenciar assinaturas</li>
                    <li>Enviar notificações e atualizações importantes</li>
                    <li>Personalizar sua experiência na plataforma</li>
                    <li>Gerenciar o programa de afiliados</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">3. Compartilhamento de Dados</h4>
                  <p>Não vendemos suas informações pessoais. Compartilhamos dados apenas com:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Processadores de pagamento (para transações)</li>
                    <li>Provedores de serviços essenciais</li>
                    <li>Quando exigido por lei</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">4. Segurança</h4>
                  <p>Implementamos medidas de segurança para proteger suas informações, incluindo criptografia de dados e acesso restrito.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">5. Seus Direitos</h4>
                  <p>Você tem direito a:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Acessar seus dados pessoais</li>
                    <li>Corrigir informações incorretas</li>
                    <li>Solicitar exclusão de seus dados</li>
                    <li>Exportar seus dados</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">6. Cookies</h4>
                  <p>Usamos cookies para melhorar sua experiência, lembrar suas preferências e analisar o uso da plataforma.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">7. Alterações nesta Política</h4>
                  <p>Podemos atualizar esta política periodicamente. Notificaremos você sobre mudanças significativas.</p>
                </section>

                <section>
                  <h4 className="text-xl font-bold text-white mb-3">8. Contato</h4>
                  <p>Para questões sobre privacidade, entre em contato: elitelife.norply@gmail.com</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tracker Quiz Modal - NOVO */}
      {showTrackerQuizModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowTrackerQuizModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Brain className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Quiz Personalizado</h3>
                <p className="text-[#9A9A9A]">
                  Responda algumas perguntas para calcularmos suas metas ideais
                </p>
                <p className="text-xs text-[#9A9A9A] mt-2">
                  Baseado em estudos de Harvard Medical School e MIT Health Sciences
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Peso (kg)</label>
                  <input
                    type="number"
                    value={trackerQuizData.weight}
                    onChange={(e) => setTrackerQuizData({...trackerQuizData, weight: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Ex: 70"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Altura (cm)</label>
                  <input
                    type="number"
                    value={trackerQuizData.height}
                    onChange={(e) => setTrackerQuizData({...trackerQuizData, height: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Ex: 170"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Idade</label>
                  <input
                    type="number"
                    value={trackerQuizData.age}
                    onChange={(e) => setTrackerQuizData({...trackerQuizData, age: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Ex: 25"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Sexo</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setTrackerQuizData({...trackerQuizData, gender: "male"})}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        trackerQuizData.gender === "male"
                          ? "border-[#D4AF37] bg-[#D4AF37]/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className="text-2xl mb-2">👨</div>
                      <div className={`font-bold ${trackerQuizData.gender === "male" ? "text-[#D4AF37]" : "text-[#9A9A9A]"}`}>
                        Masculino
                      </div>
                    </button>
                    <button
                      onClick={() => setTrackerQuizData({...trackerQuizData, gender: "female"})}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        trackerQuizData.gender === "female"
                          ? "border-[#D4AF37] bg-[#D4AF37]/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className="text-2xl mb-2">👩</div>
                      <div className={`font-bold ${trackerQuizData.gender === "female" ? "text-[#D4AF37]" : "text-[#9A9A9A]"}`}>
                        Feminino
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Nível de Atividade</label>
                  <select
                    value={trackerQuizData.activityLevel}
                    onChange={(e) => setTrackerQuizData({...trackerQuizData, activityLevel: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="sedentary">Sedentário (pouco ou nenhum exercício)</option>
                    <option value="light">Leve (exercício 1-3x/semana)</option>
                    <option value="moderate">Moderado (exercício 3-5x/semana)</option>
                    <option value="active">Ativo (exercício 6-7x/semana)</option>
                    <option value="veryActive">Muito Ativo (exercício 2x/dia)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Objetivo</label>
                  <select
                    value={trackerQuizData.goal}
                    onChange={(e) => setTrackerQuizData({...trackerQuizData, goal: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="lose">Perder peso</option>
                    <option value="maintain">Manter peso</option>
                    <option value="gain">Ganhar peso/massa</option>
                  </select>
                </div>

                <button
                  onClick={calculateTrackerGoals}
                  disabled={!trackerQuizData.weight || !trackerQuizData.height || !trackerQuizData.age || !trackerQuizData.gender || !trackerQuizData.activityLevel || !trackerQuizData.goal}
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Calcular Minhas Metas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recommendations Modal - NOVO */}
      {showRecommendationsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowRecommendationsModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Lightbulb className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Recomendações Elite</h3>
                <p className="text-[#9A9A9A]">
                  Filmes, livros e séries sobre empreendedorismo, finanças e mente milionária
                </p>
              </div>

              {/* Filmes */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Film className="w-6 h-6 text-[#D4AF37]" />
                  Filmes Recomendados
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendations.filmes.map((item, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-white font-bold">{item.title}</h5>
                        <span className="text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded">{item.platform}</span>
                      </div>
                      <p className="text-sm text-[#9A9A9A]">{item.category}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Livros */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#D4AF37]" />
                  Livros Recomendados
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendations.livros.map((item, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                      <h5 className="text-white font-bold mb-1">{item.title}</h5>
                      <p className="text-sm text-[#9A9A9A] mb-2">por {item.author}</p>
                      <span className="text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded">{item.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Séries */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Tv className="w-6 h-6 text-[#D4AF37]" />
                  Séries Recomendadas
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendations.series.map((item, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-white font-bold">{item.title}</h5>
                        <span className="text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded">{item.platform}</span>
                      </div>
                      <p className="text-sm text-[#9A9A9A]">{item.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Affiliate Modal - MELHORADO */}
      {showAffiliateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowAffiliateModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Users className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Programa de Afiliados</h3>
                <p className="text-[#9A9A9A]">
                  Ganhe 15% de comissão em cada venda + código de desconto de 5%
                </p>
              </div>

              {!isAffiliate ? (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border border-[#D4AF37]/30 rounded-2xl p-8 text-center mb-8">
                    <Gift className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-3">Torne-se um Afiliado</h4>
                    <p className="text-[#9A9A9A] mb-6">
                      Comece a ganhar dinheiro compartilhando a Elite Life com seus amigos e seguidores
                    </p>
                    <button
                      onClick={handleBecomeAffiliate}
                      className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300"
                    >
                      Quero Ser Afiliado
                    </button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                      <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-2">15%</div>
                      <div className="text-sm text-[#9A9A9A]">Comissão por venda</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                      <Gift className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-2">5%</div>
                      <div className="text-sm text-[#9A9A9A]">Desconto para amigos</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                      <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-2">∞</div>
                      <div className="text-sm text-[#9A9A9A]">Ganhos ilimitados</div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Stats */}
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
                      <DollarSign className="w-10 h-10 text-green-400 mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">R$ {affiliateStats.sales.toFixed(2)}</div>
                      <div className="text-sm text-[#9A9A9A]">Total de Vendas</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#D4AF37]/20 to-amber-600/20 border border-[#D4AF37]/30 rounded-xl p-6">
                      <TrendingUp className="w-10 h-10 text-[#D4AF37] mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">R$ {affiliateStats.commission.toFixed(2)}</div>
                      <div className="text-sm text-[#9A9A9A]">Comissões Ganhas</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
                      <Users className="w-10 h-10 text-blue-400 mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">{affiliateStats.clicks}</div>
                      <div className="text-sm text-[#9A9A9A]">Cliques no Link</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
                      <Target className="w-10 h-10 text-purple-400 mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">{affiliateStats.conversionRate.toFixed(1)}%</div>
                      <div className="text-sm text-[#9A9A9A]">Taxa de Conversão</div>
                    </div>
                  </div>

                  {/* Código e Link */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-bold flex items-center gap-2">
                          <Gift className="w-5 h-5 text-[#D4AF37]" />
                          Código de Desconto (5%)
                        </h4>
                        <button
                          onClick={copyAffiliateCode}
                          className="p-2 bg-[#D4AF37] text-[#0B0B0B] rounded-lg hover:scale-110 transition-all"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4 font-mono text-[#D4AF37] text-center text-lg">
                        {affiliateCode}
                      </div>
                      <p className="text-xs text-[#9A9A9A] mt-3">
                        ⚠️ Uso único por pessoa. Você não pode usar seu próprio código.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-bold flex items-center gap-2">
                          <Share2 className="w-5 h-5 text-[#D4AF37]" />
                          Link de Afiliado
                        </h4>
                        <button
                          onClick={copyAffiliateLink}
                          className="p-2 bg-[#D4AF37] text-[#0B0B0B] rounded-lg hover:scale-110 transition-all"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4 font-mono text-[#D4AF37] text-sm break-all">
                        {affiliateLink}
                      </div>
                      <p className="text-xs text-[#9A9A9A] mt-3">
                        Compartilhe este link nas suas redes sociais
                      </p>
                    </div>
                  </div>

                  {/* Comunidade */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6 mb-8">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      Junte-se à Comunidade de Afiliados
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <a
                        href="https://t.me/boost/elitelifeApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                      >
                        <Send className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-all" />
                        <div>
                          <div className="text-white font-bold">Grupo Telegram</div>
                          <div className="text-sm text-[#9A9A9A]">Dicas e estratégias</div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-[#9A9A9A] ml-auto" />
                      </a>

                      <a
                        href="https://instagram.com/elitelife_experience"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                      >
                        <Instagram className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-all" />
                        <div>
                          <div className="text-white font-bold">Instagram</div>
                          <div className="text-sm text-[#9A9A9A]">Novidades e conteúdo</div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-[#9A9A9A] ml-auto" />
                      </a>
                    </div>
                  </div>

                  {/* Ranking de Afiliados */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-[#D4AF37]" />
                      Ranking de Afiliados
                    </h4>
                    <div className="space-y-3">
                      {rankingData.map((user) => (
                        <div key={user.position} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold ${
                              user.position === 1 ? 'bg-gradient-to-br from-yellow-400 to-amber-500' :
                              user.position === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                              user.position === 3 ? 'bg-gradient-to-br from-orange-400 to-amber-600' :
                              'bg-white/10'
                            }`}>
                              {user.medal || user.position}
                            </div>
                            <div>
                              <div className="text-white font-bold">{user.name}</div>
                              <div className="text-sm text-[#9A9A9A]">Medalha: {user.badge}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[#D4AF37] font-bold">{user.earnings}</div>
                            <div className="text-xs text-[#9A9A9A]">{user.points.toLocaleString('pt-BR')} pontos</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* AI Chat Modal - MELHORADO */}
      {showAIChat && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-4xl h-[80vh] flex flex-col relative">
            <button 
              onClick={() => setShowAIChat(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-[#0B0B0B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">IA Elite Life</h3>
                  <p className="text-sm text-[#9A9A9A]">Assistente inteligente 24/7</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {aiMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-[#0B0B0B]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-[#D4AF37] text-[#0B0B0B]"
                        : "bg-white/5 border border-white/10 text-white"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleAISubmit} className="p-6 border-t border-white/10">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Pergunte qualquer coisa sobre a Elite Life..."
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#9A9A9A] focus:border-[#D4AF37] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Continue com o resto dos modais e conteúdo... */}
      {/* Por questão de espaço, vou manter a estrutura do header e seções principais */}

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#D4AF37]/30 bg-[#0B0B0B]/98 backdrop-blur-md shadow-lg shadow-[#D4AF37]/5">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4 border-b border-white/5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e52a264a-59c5-4588-b926-9e121ca1f989.jpg" 
                alt="Elite Life Logo"
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/20"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37] bg-clip-text text-transparent">
                ELITE LIFE
              </h1>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a 
                href="https://instagram.com/elitelife_experience"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-pink-400 transition-colors" />
                <span className="text-sm text-white group-hover:text-pink-400 transition-colors">@elitelife_experience</span>
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me/boost/elitelifeApp"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg transition-colors group"
                title="Canal Telegram"
              >
                <Send className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </a>

              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 hover:bg-white/5 rounded-lg transition-colors"
                  title="Notificações"
                >
                  <Bell className="w-5 h-5 text-[#9A9A9A]" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/10">
                      <h3 className="text-white font-bold">Notificações</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div 
                          key={notif.id}
                          className={`p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer ${
                            !notif.read ? 'bg-[#D4AF37]/5' : ''
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-white font-medium text-sm">{notif.title}</h4>
                              <p className="text-[#9A9A9A] text-xs mt-1">{notif.message}</p>
                            </div>
                            <span className="text-[#9A9A9A] text-xs">{notif.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                  title="Mudar idioma"
                >
                  <Globe className="w-5 h-5 text-[#9A9A9A]" />
                  <span className="text-sm text-[#9A9A9A] uppercase">{language}</span>
                  <ChevronDown className="w-4 h-4 text-[#9A9A9A]" />
                </button>

                {showLanguageMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguageMenu(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors ${
                          language === lang.code ? 'bg-[#D4AF37]/10' : ''
                        }`}
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className={`text-sm ${language === lang.code ? 'text-[#D4AF37]' : 'text-white'}`}>
                          {lang.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* User Menu */}
              {isLoggedIn ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <img 
                      src={userAvatar}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full ring-2 ring-[#D4AF37]/50"
                    />
                    <div className="hidden md:block text-left">
                      <div className="text-sm font-medium text-white">{userName}</div>
                      <div className="text-xs text-[#D4AF37]">Elite Member</div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-[#9A9A9A]" />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                      <button 
                        onClick={() => {
                          setShowAccountModal(true);
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
                      >
                        <User className="w-5 h-5 text-[#9A9A9A]" />
                        <span className="text-white text-sm">Minha Conta</span>
                      </button>
                      <button 
                        onClick={navigateToPlans}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
                      >
                        <Crown className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white text-sm">Editar Plano</span>
                      </button>
                      <button 
                        onClick={() => {
                          setShowMedalsModal(true);
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
                      >
                        <Medal className="w-5 h-5 text-[#9A9A9A]" />
                        <span className="text-white text-sm">Medalhas</span>
                      </button>
                      <button 
                        onClick={() => {
                          setShowSettingsModal(true);
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
                      >
                        <Settings className="w-5 h-5 text-[#9A9A9A]" />
                        <span className="text-white text-sm">Configurações</span>
                      </button>
                      <div className="border-t border-white/10">
                        <button 
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 transition-colors text-left"
                        >
                          <LogOut className="w-5 h-5 text-red-400" />
                          <span className="text-red-400 text-sm">Sair</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowLoginModal(true)}
                    className="px-4 py-2 text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                    title="Entrar na sua conta"
                  >
                    {t.login}
                  </button>
                  <button 
                    onClick={() => setShowSignupModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-lg hover:scale-105 transition-all duration-300 text-sm font-bold shadow-lg shadow-[#D4AF37]/20"
                    title="Crie sua conta"
                  >
                    {t.signup}
                  </button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Main Navigation - MELHORADO */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-4`}>
            <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-2 text-sm font-semibold">
              <li>
                <a 
                  href="#" 
                  onClick={() => setActiveSection("home")} 
                  className="block px-4 py-2 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all duration-300" 
                  title="Início"
                >
                  {t.home}
                </a>
              </li>
              
              <li>
                <button 
                  onClick={() => setShowCoursesModal(true)}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all duration-300"
                  title="+ de 100 Cursos"
                >
                  {userPlan === "free" && <Lock className="w-4 h-4" />}
                  {t.courses}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => userPlan !== "free" ? window.location.href = "#videos" : handleLockedClick("/videos")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all duration-300"
                  title="Vídeos"
                >
                  {userPlan === "free" && <Lock className="w-4 h-4" />}
                  {t.videos}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => setShowAgendaModal(true)}
                  className="block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all duration-300" 
                  title="Agenda"
                >
                  {t.agenda}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => userPlan !== "free" ? setShowTrackerModal(true) : setShowTrackerQuizModal(true)}
                  className="block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all duration-300" 
                  title="Tracker"
                >
                  {t.tracker}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => canAccessWallet() ? setShowWalletModal(true) : handleLockedClick("/carteira")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all duration-300"
                  title="Carteira Personalizada"
                >
                  {!canAccessWallet() && <Lock className="w-4 h-4" />}
                  {t.wallet}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => userPlan === "influencer" ? setShowInfluencerModal(true) : handleLockedClick("/influencer-pro")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-pink-400 hover:text-pink-300 hover:bg-white/5 rounded-lg transition-all duration-300"
                  title="Influencer Pro"
                >
                  {userPlan !== "influencer" && <Lock className="w-4 h-4" />}
                  {t.influencer}
                </button>
              </li>
              
              <li>
                <a 
                  href="#ecommerce" 
                  onClick={() => setActiveSection("ecommerce")} 
                  className="block px-4 py-2 text-cyan-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-300" 
                  title="E-commerce"
                >
                  {t.ecommerce}
                </a>
              </li>
              
              <li>
                <button 
                  onClick={() => isLoggedIn ? setShowAffiliateModal(true) : setShowLoginModal(true)}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all duration-300"
                  title="Afiliados"
                >
                  {!isLoggedIn && <Lock className="w-4 h-4" />}
                  {t.affiliates}
                </button>
              </li>
              
              <li>
                <a 
                  href="#ranking" 
                  onClick={() => setActiveSection("ranking")} 
                  className="block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all duration-300" 
                  title="Ranking"
                >
                  {t.ranking}
                </a>
              </li>
              
              <li>
                <button 
                  onClick={() => userPlan !== "free" ? setShowDashboardModal(true) : handleLockedClick("/dashboard")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all duration-300"
                  title="Dashboard"
                >
                  {userPlan === "free" && <Lock className="w-4 h-4" />}
                  {t.dashboard}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => userPlan !== "free" ? setShowCertificatesModal(true) : handleLockedClick("/certificados")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all duration-300"
                  title="Certificados"
                >
                  {userPlan === "free" && <Lock className="w-4 h-4" />}
                  {t.certificates}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-purple-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37] font-medium">Método Exclusivo ELITE LIFE</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.title.split(' ').slice(0, -2).join(' ')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                {t.hero.title.split(' ').slice(-2).join(' ')}
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#9A9A9A] mb-12 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={() => setShowSignupModal(true)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20"
              >
                {t.signup}
              </button>
              <a 
                href="#planos"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-xl hover:bg-[#D4AF37]/10 transition-all duration-300 text-center"
              >
                Ver Planos
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[#9A9A9A]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mais de <span className="text-[#D4AF37]">50.000 pessoas</span> mudaram de vida
            </h3>
            <p className="text-xl text-[#9A9A9A]">Veja o que nossos alunos estão dizendo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-[#9A9A9A] text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-[#9A9A9A] text-sm">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 text-center">
              <Star className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-[#9A9A9A]">Avaliação média</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50k+</div>
              <div className="text-[#9A9A9A]">Vidas transformadas</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">R$ 10M+</div>
              <div className="text-[#9A9A9A]">Valor gerado por alunos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section - NOVO */}
      <section className="py-16 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <GraduationCap className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Baseado nas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                Melhores Universidades
              </span>
            </h3>
            <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto">
              Nosso conteúdo é desenvolvido com base em estudos e pesquisas das instituições mais renomadas do mundo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {universities.map((uni, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-[#D4AF37]/30"
              >
                <div className="text-[#D4AF37] font-bold text-sm">{uni}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Escolha Seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                Plano
              </span>
            </h3>
            <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto mb-4">
              Acesso completo a cursos, IA personalizada, comunidade exclusiva e muito mais
            </p>
            <p className="text-sm text-[#D4AF37]">
              Baseado em estudos de {universities.slice(0, 4).join(", ")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isPopular = plan.id === 3;
              const isElite = plan.id === 4;
              
              return (
                <div
                  key={plan.id}
                  className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/10 ${
                    isPopular || isElite ? 'ring-2 ring-[#D4AF37]/50' : ''
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg`}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-[#9A9A9A] text-lg">{plan.period}</span>
                    )}
                  </div>

                  {/* Marketplaces Icons (E-commerce) */}
                  {plan.marketplaces && (
                    <div className="flex justify-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-sm font-bold text-black shadow-lg">
                        ML
                      </div>
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-lg">
                        A
                      </div>
                      <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-lg">
                        S
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => {
                      const isLocked = typeof feature === 'object' && feature.locked;
                      const text = typeof feature === 'string' ? feature : feature.text;
                      
                      return (
                        <li key={index} className="flex items-start gap-2">
                          {isLocked ? (
                            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${isLocked ? 'text-red-400 line-through' : 'text-[#9A9A9A]'}`}>
                            {text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg ${
                      plan.id === 1
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700'
                        : `bg-gradient-to-r ${plan.color}`
                    }`}
                  >
                    {plan.id === 1 ? 'Começar Grátis' : 'Assinar Agora'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Support Chat Button */}
      <button 
        onClick={() => setShowAIChat(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full shadow-2xl shadow-[#D4AF37]/30 flex items-center justify-center hover:scale-110 transition-all duration-300 z-50"
        title="Ajuda por IA"
      >
        <MessageSquare className="w-8 h-8 text-[#0B0B0B]" />
      </button>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e52a264a-59c5-4588-b926-9e121ca1f989.jpg" 
                  alt="Elite Life Logo"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <h1 className="text-2xl font-bold text-[#D4AF37]">ELITE LIFE</h1>
              </div>
              <p className="text-[#9A9A9A] text-sm">
                Transforme sua vida em 90 dias. Corpo, mente e dinheiro no mesmo lugar.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => setShowTermsModal(true)}
                    className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors"
                  >
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors"
                  >
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowAIChat(true)}
                    className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors"
                  >
                    Suporte
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://instagram.com/elitelife_experience" target="_blank" rel="noopener noreferrer" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    @elitelife_experience
                  </a>
                </li>
                <li>
                  <a href="https://t.me/boost/elitelifeApp" target="_blank" rel="noopener noreferrer" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Telegram (Canal)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-[#9A9A9A] text-sm">
            <p>© 2024 Elite Life. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs">
              Baseado em estudos de {universities.slice(0, 4).join(", ")} e outras instituições renomadas.
            </p>
          </div>
        </div>
      </footer>

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
