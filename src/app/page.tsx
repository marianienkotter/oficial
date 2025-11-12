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
  Shield, FileCheck, Newspaper, Tv, Popcorn, Library, Home
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

  const initialQuizQuestions = [
    {
      question: "Qual é o seu principal objetivo?",
      options: ["Perder peso", "Ganhar massa muscular", "Aumentar renda", "Crescer nas redes sociais", "Vender online"]
    },
    {
      question: "Quanto tempo você pode dedicar por dia?",
      options: ["Menos de 30 min", "30 min - 1h", "1h - 2h", "Mais de 2h"]
    },
    {
      question: "Qual sua experiência com fitness?",
      options: ["Iniciante", "Intermediário", "Avançado"]
    },
    {
      question: "Você já investe ou quer investir?",
      options: ["Sim, já invisto", "Quero começar", "Não tenho interesse"]
    },
    {
      question: "Tem interesse em criar conteúdo online?",
      options: ["Sim, muito", "Talvez no futuro", "Não"]
    },
    {
      question: "Quer vender produtos online?",
      options: ["Sim, já vendo", "Quero começar", "Não tenho interesse"]
    },
    {
      question: "Qual sua faixa etária?",
      options: ["18-25", "26-35", "36-45", "46+"]
    },
    {
      question: "Qual seu nível de conhecimento em finanças?",
      options: ["Iniciante", "Intermediário", "Avançado"]
    },
    {
      question: "Você prefere aprender com:",
      options: ["Vídeos", "Textos e apostilas", "Ambos"]
    },
    {
      question: "Qual área mais te interessa?",
      options: ["Fitness e Saúde", "Finanças", "Marketing Digital", "E-commerce", "Todas"]
    },
    {
      question: "Você tem rotina de exercícios?",
      options: ["Sim, regular", "Às vezes", "Não"]
    },
    {
      question: "Quanto você quer ganhar por mês?",
      options: ["R$ 1-3k", "R$ 3-5k", "R$ 5-10k", "R$ 10k+"]
    },
    {
      question: "Você acompanha influencers?",
      options: ["Sim, muito", "Às vezes", "Não"]
    },
    {
      question: "Tem interesse em certificados?",
      options: ["Sim, muito importante", "Talvez", "Não"]
    },
    {
      question: "Qual seu maior desafio atual?",
      options: ["Falta de tempo", "Falta de dinheiro", "Falta de conhecimento", "Falta de motivação"]
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
      stepsGoal: stepsGoals[activityLevel]
    });
    
    setShowTrackerQuizModal(false);
    setShowTrackerModal(true);
    
    alert(`Metas calculadas com sucesso!\n\nCalorias: ${Math.round(calories)} kcal/dia\nÁgua: ${Math.round(water)}ml/dia\nPassos: ${stepsGoals[activityLevel]} passos/dia\n\nBaseado em estudos de Harvard Medical School e MIT Health Sciences.`);
  };

  const analyzeInitialQuiz = () => {
    const answers = initialQuizAnswers;
    let recommendedPlan = plans[1]; // PRO por padrão
    
    // Lógica de análise
    if (answers[4] === "Sim, muito" || answers[5] === "Sim, já vendo") {
      recommendedPlan = plans[6]; // E-COMMERCE PRO
    } else if (answers[4] === "Sim, muito") {
      recommendedPlan = plans[5]; // INFLUENCER PRO
    } else if (answers[3] === "Sim, já invisto" && answers[7] === "Avançado") {
      recommendedPlan = plans[3]; // ELITE
    } else if (answers[1] === "Mais de 2h") {
      recommendedPlan = plans[2]; // PRO PLUS
    }
    
    setShowInitialQuizModal(false);
    alert(`Baseado no seu perfil, recomendamos o plano ${recommendedPlan.name}!\n\n${recommendedPlan.features.slice(0, 3).map((f: any) => typeof f === 'string' ? f : f.text).join('\n')}`);
    
    // Scroll para planos
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

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* HEADER MODERNO E RESPONSIVO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] border-b border-[#D4AF37]/20 backdrop-blur-lg shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-7 h-7 text-[#0B0B0B]" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-amber-500 bg-clip-text text-transparent">
                  Elite Life
                </h1>
                <p className="text-xs text-[#9A9A9A]">Transforme sua vida</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setActiveSection("home")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all duration-300 group"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.home}</span>
              </button>
              
              <button
                onClick={() => setShowCoursesModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group"
              >
                <GraduationCap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.courses}</span>
              </button>

              <button
                onClick={() => setActiveSection("videos")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 group"
              >
                <Video className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.videos}</span>
              </button>

              <button
                onClick={() => setShowAgendaModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.agenda}</span>
              </button>

              <button
                onClick={() => userPlan === "free" ? setShowTrackerQuizModal(true) : setShowTrackerModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
              >
                <Activity className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.tracker}</span>
              </button>

              <button
                onClick={() => canAccessWallet() ? setShowWalletModal(true) : handleLockedClick("/wallet")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 group"
              >
                <Wallet className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.wallet}</span>
                {!canAccessWallet() && <Lock className="w-3 h-3" />}
              </button>

              <button
                onClick={() => setShowInfluencerModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-pink-500/10 hover:text-pink-400 transition-all duration-300 group"
              >
                <Video className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.influencer}</span>
              </button>

              <button
                onClick={() => setActiveSection("ecommerce")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.ecommerce}</span>
              </button>

              <button
                onClick={() => setShowAffiliateModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300 group"
              >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.affiliates}</span>
              </button>

              <button
                onClick={() => setActiveSection("ranking")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-300 group"
              >
                <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t.ranking}</span>
              </button>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Notifications */}
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 transition-all duration-300 group"
              >
                <Bell className="w-5 h-5 text-white group-hover:text-[#D4AF37] group-hover:scale-110 transition-all" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-bold animate-pulse">
                  3
                </span>
              </button>

              {/* Language */}
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="hidden sm:flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 transition-all duration-300 group"
              >
                <Globe className="w-5 h-5 text-white group-hover:text-[#D4AF37] transition-colors" />
                <span className="text-sm font-medium text-white">{language.toUpperCase()}</span>
              </button>

              {/* User Menu */}
              {isLoggedIn ? (
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
                >
                  <img src={userAvatar} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                  <span className="hidden sm:block text-sm font-bold text-[#0B0B0B]">{userName}</span>
                  <ChevronDown className="w-4 h-4 text-[#0B0B0B]" />
                </button>
              ) : (
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="px-4 py-2.5 rounded-xl text-white hover:bg-[#1A1A1A] transition-all duration-300 font-medium"
                  >
                    {t.login}
                  </button>
                  <button
                    onClick={() => setShowSignupModal(true)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
                  >
                    {t.signup}
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 transition-all duration-300"
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
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => { setActiveSection("home"); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">{t.home}</span>
              </button>
              
              <button
                onClick={() => { setShowCoursesModal(true); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-purple-500/10 hover:text-purple-400 transition-all"
              >
                <GraduationCap className="w-5 h-5" />
                <span className="font-medium">{t.courses}</span>
              </button>

              <button
                onClick={() => { setActiveSection("videos"); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-red-500/10 hover:text-red-400 transition-all"
              >
                <Video className="w-5 h-5" />
                <span className="font-medium">{t.videos}</span>
              </button>

              <button
                onClick={() => { setShowAgendaModal(true); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-blue-500/10 hover:text-blue-400 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{t.agenda}</span>
              </button>

              <button
                onClick={() => { userPlan === "free" ? setShowTrackerQuizModal(true) : setShowTrackerModal(true); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-green-500/10 hover:text-green-400 transition-all"
              >
                <Activity className="w-5 h-5" />
                <span className="font-medium">{t.tracker}</span>
              </button>

              <button
                onClick={() => { canAccessWallet() ? setShowWalletModal(true) : handleLockedClick("/wallet"); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-emerald-500/10 hover:text-emerald-400 transition-all"
              >
                <Wallet className="w-5 h-5" />
                <span className="font-medium">{t.wallet}</span>
                {!canAccessWallet() && <Lock className="w-4 h-4" />}
              </button>

              <button
                onClick={() => { setShowInfluencerModal(true); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-pink-500/10 hover:text-pink-400 transition-all"
              >
                <Video className="w-5 h-5" />
                <span className="font-medium">{t.influencer}</span>
              </button>

              <button
                onClick={() => { setActiveSection("ecommerce"); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="font-medium">{t.ecommerce}</span>
              </button>

              <button
                onClick={() => { setShowAffiliateModal(true); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all"
              >
                <Users className="w-5 h-5" />
                <span className="font-medium">{t.affiliates}</span>
              </button>

              <button
                onClick={() => { setActiveSection("ranking"); setIsMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-yellow-500/10 hover:text-yellow-400 transition-all"
              >
                <Trophy className="w-5 h-5" />
                <span className="font-medium">{t.ranking}</span>
              </button>

              {!isLoggedIn && (
                <div className="pt-4 border-t border-[#D4AF37]/20 space-y-2">
                  <button
                    onClick={() => { setShowLoginModal(true); setIsMenuOpen(false); }}
                    className="w-full px-4 py-3 rounded-xl text-white bg-[#2A2A2A] hover:bg-[#3A3A3A] transition-all font-medium"
                  >
                    {t.login}
                  </button>
                  <button
                    onClick={() => { setShowSignupModal(true); setIsMenuOpen(false); }}
                    className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold hover:shadow-lg transition-all"
                  >
                    {t.signup}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* User Dropdown Menu */}
        {showUserMenu && isLoggedIn && (
          <div className="absolute right-4 top-24 w-72 bg-[#1A1A1A] rounded-2xl shadow-2xl border border-[#D4AF37]/20 overflow-hidden z-50">
            <div className="p-4 bg-gradient-to-r from-[#D4AF37]/10 to-amber-600/10 border-b border-[#D4AF37]/20">
              <div className="flex items-center gap-3">
                <img src={userAvatar} alt="Avatar" className="w-16 h-16 rounded-full border-2 border-[#D4AF37]" />
                <div>
                  <h3 className="font-bold text-white">{userName}</h3>
                  <p className="text-sm text-[#9A9A9A]">{userEmail}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-sm font-bold text-[#D4AF37]">{userPoints} pontos</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-2">
              <button
                onClick={() => { setShowAccountModal(true); setShowUserMenu(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[#D4AF37]/10 transition-all"
              >
                <User className="w-5 h-5" />
                <span>Minha Conta</span>
              </button>
              
              <button
                onClick={() => { setShowMedalsModal(true); setShowUserMenu(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[#D4AF37]/10 transition-all"
              >
                <Medal className="w-5 h-5" />
                <span>Medalhas e Pontos</span>
              </button>
              
              <button
                onClick={() => { setShowSettingsModal(true); setShowUserMenu(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[#D4AF37]/10 transition-all"
              >
                <Settings className="w-5 h-5" />
                <span>Configurações</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        )}

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute right-4 top-24 w-96 bg-[#1A1A1A] rounded-2xl shadow-2xl border border-[#D4AF37]/20 overflow-hidden z-50">
            <div className="p-4 bg-gradient-to-r from-[#D4AF37]/10 to-amber-600/10 border-b border-[#D4AF37]/20">
              <h3 className="font-bold text-white">Notificações</h3>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-4 border-b border-[#2A2A2A] hover:bg-[#2A2A2A] transition-all cursor-pointer ${!notif.read ? 'bg-[#D4AF37]/5' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-amber-600 flex items-center justify-center flex-shrink-0">
                      <Bell className="w-5 h-5 text-[#0B0B0B]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-sm">{notif.title}</h4>
                      <p className="text-sm text-[#9A9A9A] mt-1">{notif.message}</p>
                      <span className="text-xs text-[#D4AF37] mt-2 block">{notif.time}</span>
                    </div>
                    {!notif.read && (
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-3 bg-[#2A2A2A] border-t border-[#D4AF37]/20">
              <button className="w-full text-center text-sm text-[#D4AF37] hover:text-amber-500 font-medium">
                Ver todas as notificações
              </button>
            </div>
          </div>
        )}

        {/* Language Dropdown */}
        {showLanguageMenu && (
          <div className="absolute right-4 top-24 w-48 bg-[#1A1A1A] rounded-2xl shadow-2xl border border-[#D4AF37]/20 overflow-hidden z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code); setShowLanguageMenu(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#D4AF37]/10 transition-all"
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium">{lang.label}</span>
                {language === lang.code && <Check className="w-5 h-5 text-[#D4AF37] ml-auto" />}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION COM QUIZ INICIAL */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Quiz Inicial Banner */}
          {!isLoggedIn && (
            <div className="mb-12 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-3xl p-8 text-center shadow-2xl">
              <h2 className="text-3xl font-bold text-[#0B0B0B] mb-4">
                🎯 Descubra o Plano Ideal Para Você!
              </h2>
              <p className="text-lg text-[#0B0B0B]/80 mb-6">
                Responda 15 perguntas rápidas e receba uma recomendação personalizada
              </p>
              <button
                onClick={() => setShowInitialQuizModal(true)}
                className="px-8 py-4 bg-[#0B0B0B] text-[#D4AF37] rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                Começar Quiz Gratuito →
              </button>
            </div>
          )}

          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#9A9A9A] mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setShowSignupModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300"
              >
                Começar Agora Grátis
              </button>
              <button
                onClick={() => window.location.href = "#planos"}
                className="px-8 py-4 bg-[#1A1A1A] text-white rounded-xl font-bold text-lg hover:bg-[#2A2A2A] transition-all duration-300"
              >
                Ver Planos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#9A9A9A]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS SECTION */}
      <section id="planos" className="py-20 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Transforme sua vida com o plano perfeito para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-[#1A1A1A] rounded-3xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                {plan.badge && (
                  <div className={`absolute top-4 right-4 ${plan.badgeColor} px-3 py-1 rounded-full text-xs font-bold`}>
                    {plan.badge}
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-[#D4AF37]">{plan.price}</span>
                  <span className="text-[#9A9A9A]">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      {typeof feature === 'string' ? (
                        <>
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[#9A9A9A]">{feature}</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[#9A9A9A]">{feature.text}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                    plan.id === 1
                      ? 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
                      : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:shadow-${plan.color}/50`
                  }`}
                >
                  {plan.id === 1 ? 'Começar Grátis' : 'Assinar Agora'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resultados Reais
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Veja o que nossos alunos estão conquistando
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-3xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-[#D4AF37]"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-[#9A9A9A]">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                
                <p className="text-[#9A9A9A]">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] border-t border-[#D4AF37]/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                  <Crown className="w-7 h-7 text-[#0B0B0B]" />
                </div>
                <h3 className="text-xl font-bold text-white">Elite Life</h3>
              </div>
              <p className="text-[#9A9A9A] text-sm">
                Transformando vidas através de educação de qualidade
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Plataforma</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Cursos</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Vídeos</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Certificados</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Afiliados</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Central de Ajuda</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }} className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Termos de Uso</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }} className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Política de Privacidade</a></li>
                <li><a href="mailto:elitelife.norply@gmail.com" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a href="https://instagram.com/elitelife" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://t.me/elitelife" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <MessageSquare className="w-5 h-5 text-white" />
                </a>
                <a href="mailto:elitelife.norply@gmail.com" className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-8 text-center">
            <p className="text-[#9A9A9A] text-sm">
              © 2024 Elite Life. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* AI CHAT BUTTON */}
      <button
        onClick={() => setShowAIChat(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-40"
      >
        <MessageSquare className="w-8 h-8 text-[#0B0B0B]" />
      </button>

      {/* MODALS - Continuação com todos os modais implementados... */}
      {/* Por questão de espaço, os modais serão implementados na próxima parte */}

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
