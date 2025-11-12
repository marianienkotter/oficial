"use client";

import { useState } from "react";
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
  Edit, Copy, Share2, Gift, Briefcase, LineChart, Save
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

  // User state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPlan, setUserPlan] = useState<"free" | "paid">("free");
  const [userAvatar, setUserAvatar] = useState("https://i.pravatar.cc/150?img=12");
  const [userDescription, setUserDescription] = useState("");

  // AI Chat state
  const [aiMessages, setAiMessages] = useState<Array<{role: string, content: string}>>([
    { role: "assistant", content: "Olá! Sou a IA da Elite Life. Como posso ajudar você hoje?" }
  ]);
  const [aiInput, setAiInput] = useState("");

  // Agenda state
  const [agendaItems, setAgendaItems] = useState([
    { id: 1, time: "07:00", title: "Treino Matinal", type: "fitness", editable: true },
    { id: 2, time: "12:00", title: "Almoço Saudável", type: "nutrition", editable: true },
    { id: 3, time: "15:00", title: "Estudar Curso", type: "learning", editable: true },
    { id: 4, time: "19:00", title: "Jantar", type: "nutrition", editable: true },
  ]);

  // Wallet state
  const [walletInvestments, setWalletInvestments] = useState([
    { id: 1, name: "Ações Tech", amount: 5000, profit: 12.5, editable: true },
    { id: 2, name: "Fundos Imobiliários", amount: 3000, profit: 8.3, editable: true },
    { id: 3, name: "Renda Fixa", amount: 2000, profit: 5.1, editable: true },
  ]);

  // Affiliate state
  const [affiliateCode, setAffiliateCode] = useState("ELITE-" + Math.random().toString(36).substr(2, 6).toUpperCase());
  const [affiliateLink, setAffiliateLink] = useState(`https://elitelife.com/ref/${affiliateCode}`);

  // Video categories
  const videoCategories = [
    { id: "all", label: "Todos" },
    { id: "motivacional", label: "Motivacionais" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "influencer", label: "Influencer Pro" },
  ];

  const [activeVideoCategory, setActiveVideoCategory] = useState("all");

  // Videos data organizados por categoria
  const videos = [
    // Motivacionais
    { id: "zqPA_xfQlVw", title: "Transformação Completa", category: "motivacional", duration: "12:45" },
    { id: "mgYO12VzvNk", title: "Mindset de Sucesso", category: "motivacional", duration: "15:30" },
    { id: "-bqT-Z3-6js", title: "Mentalidade Vencedora", category: "motivacional", duration: "18:20" },
    { id: "_qKQ1lVNVL0", title: "Foco e Disciplina", category: "motivacional", duration: "10:15" },
    { id: "hSrFmzk6E0w", title: "Produtividade Máxima", category: "motivacional", duration: "22:40" },
    { id: "IhoXqdUvnC0", title: "Hábitos Poderosos", category: "motivacional", duration: "14:55" },
    { id: "36MkeXmnBVU", title: "Superação", category: "motivacional", duration: "16:30" },
    { id: "MkDVZplKyTQ", title: "Motivação Diária", category: "motivacional", duration: "13:20" },
    { id: "GkW5jpPfaC0", title: "Resiliência", category: "motivacional", duration: "11:45" },
    { id: "7kR-C-Boy0Y", title: "Inteligência Emocional", category: "motivacional", duration: "19:10" },
    
    // E-commerce
    { id: "8UNgFZ7-5Ts", title: "Mercado Livre Avançado", category: "ecommerce", duration: "17:25" },
    { id: "Im9PNgnXRTo", title: "Amazon FBA", category: "ecommerce", duration: "12:50" },
    { id: "i1E4sgCeUEs", title: "Shopee Estratégias", category: "ecommerce", duration: "20:15" },
    { id: "dSFkPWhrtNg", title: "Tráfego Pago", category: "ecommerce", duration: "14:30" },
    { id: "9VuZlg-GHXk", title: "Google Ads", category: "ecommerce", duration: "18:45" },
    { id: "-tovD0nSPsA", title: "Copywriting para Vendas", category: "ecommerce", duration: "16:20" },
    { id: "kxm7n8BUgT0", title: "Anúncios Profissionais", category: "ecommerce", duration: "13:55" },
    { id: "rF6daSPnrgc", title: "Dropshipping", category: "ecommerce", duration: "21:30" },
    { id: "P3PU47_a-Kk", title: "Escalar Lojas", category: "ecommerce", duration: "15:40" },
    { id: "FYtF7FjUgU4", title: "Funil de Vendas", category: "ecommerce", duration: "19:25" },
    
    // Influencer Pro
    { id: "B89sP7HyfrQ", title: "Crescer no Instagram", category: "influencer", duration: "17:10" },
    { id: "lt-qsz3gFho", title: "TikTok Viral", category: "influencer", duration: "10:30" },
    { id: "DY2CfcVvc00", title: "YouTube Estratégias", category: "influencer", duration: "23:15" },
    { id: "YpUd8YhKo-o", title: "Thumbnails que Convertem", category: "influencer", duration: "14:20" },
    { id: "ogV4_WZcw7E", title: "Scripts Virais", category: "influencer", duration: "20:45" },
    { id: "X0Y7Rwwkh5A", title: "Hashtags Estratégicas", category: "influencer", duration: "12:35" },
    { id: "Wh44_CIxfYI", title: "Calendário de Conteúdo", category: "influencer", duration: "18:50" },
    { id: "JCV5HQOePDg", title: "Branding Pessoal", category: "influencer", duration: "16:15" },
    { id: "NdT7BRlaeVg", title: "Monetização", category: "influencer", duration: "22:30" },
    { id: "4I5QFma7Cso", title: "Engajamento Alto", category: "influencer", duration: "11:20" },
  ];

  const filteredVideos = activeVideoCategory === "all" 
    ? videos 
    : videos.filter(v => v.category === activeVideoCategory);

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
        "Tracker avançado (alimentação e nutrição)",
        "Certificado Elite Life a cada módulo"
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
        "Relatórios de performance completos",
        "Relatórios automáticos de evolução",
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
        "Funções premium da IA (planos automáticos fitness + financeiros)",
        "Chat social da comunidade",
        "Carteira Personalizada editável com relatórios de investimentos",
        "Dashboards avançados",
        "Relatórios detalhados de progresso físico e financeiro"
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
        "Todos os recursos do plano ELITE",
        "Pagamento anual com desconto",
        "Acesso completo a certificados",
        "Agenda completa editável",
        "Relatórios automáticos",
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
        "400 dietas de famosos (200 BR + 200 INT)",
        "Plano semanal de treino e alimentação",
        "Hashtags virais",
        "Ranking de influenciadores",
        "Tracker avançado",
        "Afiliação com comissões de 15%"
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
        "Treinamentos Mercado Livre, Amazon, Shopee",
        "+1000 atividades e vídeos explicativos",
        "Tráfego pago e Google Ads",
        "Criação de anúncios profissionais",
        "Estratégias para escalar lojas",
        "Tracker financeiro",
        "Relatórios de resultados",
        "Certificado Elite Life E-commerce"
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
      support: "Suporte IA",
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
      support: "AI Support",
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
      support: "Soporte IA",
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

  const ecommerceModules = [
    {
      platform: "Mercado Livre",
      icon: "ML",
      color: "bg-yellow-400 text-black",
      courses: 15,
      activities: 350
    },
    {
      platform: "Amazon",
      icon: "A",
      color: "bg-orange-500 text-white",
      courses: 12,
      activities: 300
    },
    {
      platform: "Shopee",
      icon: "S",
      color: "bg-orange-600 text-white",
      courses: 10,
      activities: 350
    }
  ];

  const certificates = [
    { id: 1, name: "Finanças Pessoais Avançadas", date: "15/01/2024", status: "completed" },
    { id: 2, name: "Fitness & Nutrição", date: "10/01/2024", status: "completed" },
    { id: 3, name: "Marketing Digital", date: "05/01/2024", status: "completed" },
    { id: 4, name: "E-commerce Mastery", date: "-", status: "locked" },
  ];

  const rankingData = [
    { position: 1, name: "João Silva", points: 15420, earnings: "R$ 3.450,00", medal: "🥇", badge: "Diamante" },
    { position: 2, name: "Maria Santos", points: 14890, earnings: "R$ 2.890,00", medal: "🥈", badge: "Platina" },
    { position: 3, name: "Pedro Costa", points: 13750, earnings: "R$ 2.340,00", medal: "🥉", badge: "Ouro" },
    { position: 4, name: "Ana Oliveira", points: 12340, earnings: "R$ 1.890,00", medal: "", badge: "Prata" },
    { position: 5, name: "Carlos Souza", points: 11890, earnings: "R$ 1.560,00", medal: "", badge: "Bronze" },
  ];

  const medals = [
    { id: 1, name: "Iniciante", icon: "🌱", requirement: "Completar 5 atividades", unlocked: true },
    { id: 2, name: "Bronze", icon: "🥉", requirement: "Completar 20 atividades", unlocked: true },
    { id: 3, name: "Prata", icon: "🥈", requirement: "Completar 50 atividades", unlocked: false },
    { id: 4, name: "Ouro", icon: "🥇", requirement: "Completar 100 atividades", unlocked: false },
    { id: 5, name: "Platina", icon: "💎", requirement: "Completar 200 atividades", unlocked: false },
    { id: 6, name: "Diamante", icon: "💠", requirement: "Completar 500 atividades", unlocked: false },
  ];

  const affiliateStats = [
    { label: "Total de Vendas", value: "R$ 2.450,00", icon: DollarSign },
    { label: "Comissões Ganhas", value: "R$ 367,50", icon: TrendingUp },
    { label: "Cliques no Link", value: "1.234", icon: Users },
    { label: "Taxa de Conversão", value: "3.2%", icon: Target },
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

    setAiMessages([...aiMessages, 
      { role: "user", content: aiInput },
      { role: "assistant", content: "Entendi sua pergunta! Como assistente da Elite Life, posso ajudar com informações sobre cursos, planos, agenda, tracker e muito mais. O que você gostaria de saber especificamente?" }
    ]);
    setAiInput("");
  };

  const copyAffiliateCode = () => {
    navigator.clipboard.writeText(affiliateCode);
    alert("Código copiado!");
  };

  const copyAffiliateLink = () => {
    navigator.clipboard.writeText(affiliateLink);
    alert("Link copiado!");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-md p-8 relative">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-[#0B0B0B]" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{t.login}</h2>
              <p className="text-[#9A9A9A]">Acesse sua conta Elite Life</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                  <input 
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                  <input 
                    type={showPasswordLogin ? "text" : "password"}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3 text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-white transition-colors"
                  >
                    {showPasswordLogin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                {t.login}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#9A9A9A] text-sm">
                Não tem uma conta?{" "}
                <button 
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowSignupModal(true);
                  }}
                  className="text-[#D4AF37] hover:text-amber-500 font-medium transition-colors"
                >
                  {t.signup}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-md p-8 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowSignupModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-[#0B0B0B]" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{t.signup}</h2>
              <p className="text-[#9A9A9A]">Comece sua transformação hoje</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                  <input 
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                  <input 
                    type={showPasswordSignup ? "text" : "password"}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3 text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordSignup(!showPasswordSignup)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-white transition-colors"
                  >
                    {showPasswordSignup ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Confirmar Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3 text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Telefone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                  <input 
                    type="tel"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                <input 
                  type="checkbox"
                  id="marketing"
                  className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-[#D4AF37] focus:ring-[#D4AF37]"
                />
                <label htmlFor="marketing" className="text-[#9A9A9A] text-sm">
                  Aceito receber novidades e ofertas exclusivas por e-mail
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                {t.signup}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#9A9A9A] text-sm">
                Já tem uma conta?{" "}
                <button 
                  onClick={() => {
                    setShowSignupModal(false);
                    setShowLoginModal(true);
                  }}
                  className="text-[#D4AF37] hover:text-amber-500 font-medium transition-colors"
                >
                  {t.login}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* AI Chat Modal */}
      {showAIChat && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl h-[600px] flex flex-col relative">
            <button 
              onClick={() => setShowAIChat(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#0B0B0B]" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Suporte IA Elite Life</h3>
                  <p className="text-[#9A9A9A] text-sm">Pergunte qualquer coisa sobre a plataforma</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {aiMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B]' 
                      : 'bg-white/5 text-white'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleAISubmit} className="p-6 border-t border-white/10">
              <div className="flex gap-3">
                <input 
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Digite sua pergunta..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Agenda Modal */}
      {showAgendaModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowAgendaModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Calendar className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Agenda Personalizada</h3>
                <p className="text-[#9A9A9A]">
                  {userPlan === "paid" 
                    ? "Edite sua agenda conforme suas necessidades" 
                    : "Assine um plano para desbloquear a agenda completa editável"}
                </p>
              </div>

              {userPlan === "free" && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <p className="text-yellow-400 text-sm">
                      Você está usando a versão gratuita. Assine para liberar rotinas ilimitadas, IA e relatórios.
                    </p>
                  </div>
                  <button 
                    onClick={navigateToPlans}
                    className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    Ver Planos
                  </button>
                </div>
              )}

              <div className="space-y-3">
                {agendaItems.map((item) => (
                  <div key={item.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-[#D4AF37] font-bold">{item.time}</div>
                      <div>
                        <div className="text-white font-medium">{item.title}</div>
                        <div className="text-[#9A9A9A] text-xs capitalize">{item.type}</div>
                      </div>
                    </div>
                    {userPlan === "paid" && (
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <Edit className="w-5 h-5 text-[#9A9A9A]" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {userPlan === "paid" && (
                <button className="w-full mt-6 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Adicionar Item
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Wallet Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowWalletModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Wallet className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Carteira Personalizada</h3>
                <p className="text-[#9A9A9A]">
                  Gerencie seus investimentos e teste estratégias
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-4">
                  <div className="text-green-400 text-sm mb-1">Total Investido</div>
                  <div className="text-2xl font-bold text-white">R$ 10.000,00</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-4">
                  <div className="text-blue-400 text-sm mb-1">Lucro Total</div>
                  <div className="text-2xl font-bold text-white">R$ 1.245,00</div>
                </div>
                <div className="bg-gradient-to-br from-[#D4AF37]/20 to-amber-600/20 border border-[#D4AF37]/30 rounded-xl p-4">
                  <div className="text-[#D4AF37] text-sm mb-1">Rentabilidade</div>
                  <div className="text-2xl font-bold text-white">+12.45%</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {walletInvestments.map((inv) => (
                  <div key={inv.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-bold">{inv.name}</div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${inv.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {inv.profit > 0 ? '+' : ''}{inv.profit}%
                        </span>
                        {userPlan === "paid" && (
                          <button className="p-1 hover:bg-white/5 rounded-lg transition-colors">
                            <Edit className="w-4 h-4 text-[#9A9A9A]" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="text-[#9A9A9A] text-sm">
                      Investido: R$ {inv.amount.toLocaleString('pt-BR')}
                    </div>
                  </div>
                ))}
              </div>

              {userPlan === "paid" ? (
                <>
                  <button className="w-full mb-4 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" />
                    Adicionar Investimento
                  </button>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <LineChart className="w-5 h-5" />
                    Gerar Relatório de Testes
                  </button>
                </>
              ) : (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
                  <Lock className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                  <p className="text-yellow-400 mb-4">Assine para editar sua carteira e gerar relatórios</p>
                  <button 
                    onClick={navigateToPlans}
                    className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    Ver Planos
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Medals Modal */}
      {showMedalsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowMedalsModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Medal className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Medalhas Disponíveis</h3>
                <p className="text-[#9A9A9A]">Complete atividades para desbloquear medalhas</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {medals.map((medal) => (
                  <div 
                    key={medal.id} 
                    className={`p-6 rounded-xl border ${
                      medal.unlocked 
                        ? 'bg-gradient-to-br from-[#D4AF37]/20 to-amber-600/20 border-[#D4AF37]/30' 
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-5xl mb-3">{medal.icon}</div>
                      <h4 className="text-white font-bold mb-2">{medal.name}</h4>
                      <p className="text-[#9A9A9A] text-sm mb-3">{medal.requirement}</p>
                      {medal.unlocked ? (
                        <div className="flex items-center justify-center gap-2 text-[#D4AF37] text-sm font-bold">
                          <CheckCircle className="w-4 h-4" />
                          Desbloqueada
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2 text-[#9A9A9A] text-sm">
                          <Lock className="w-4 h-4" />
                          Bloqueada
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Account Modal */}
      {showAccountModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-md relative">
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
                    className="w-24 h-24 rounded-full border-4 border-[#D4AF37]"
                  />
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center hover:scale-110 transition-all">
                    <Upload className="w-4 h-4 text-[#0B0B0B]" />
                  </button>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Minha Conta</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Nome</label>
                  <input 
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Descrição</label>
                  <textarea 
                    value={userDescription}
                    onChange={(e) => setUserDescription(e.target.value)}
                    placeholder="Conte um pouco sobre você..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Save className="w-5 h-5" />
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Affiliate Modal */}
      {showAffiliateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowAffiliateModal(false)}
              className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <Gift className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Programa de Afiliados</h3>
                <p className="text-[#9A9A9A]">Ganhe 15% de comissão em cada venda</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {affiliateStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#D4AF37]" />
                        </div>
                        <div>
                          <div className="text-[#9A9A9A] text-sm">{stat.label}</div>
                          <div className="text-white font-bold text-lg">{stat.value}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Seu Código</span>
                    <button 
                      onClick={copyAffiliateCode}
                      className="flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg hover:bg-[#D4AF37]/30 transition-colors text-sm"
                    >
                      <Copy className="w-4 h-4" />
                      Copiar
                    </button>
                  </div>
                  <div className="text-[#D4AF37] font-mono text-lg">{affiliateCode}</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Seu Link</span>
                    <button 
                      onClick={copyAffiliateLink}
                      className="flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg hover:bg-[#D4AF37]/30 transition-colors text-sm"
                    >
                      <Copy className="w-4 h-4" />
                      Copiar
                    </button>
                  </div>
                  <div className="text-[#9A9A9A] text-sm break-all">{affiliateLink}</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-xl p-6">
                <h4 className="text-white font-bold mb-3">Ranking de Afiliados</h4>
                <div className="space-y-2">
                  {rankingData.slice(0, 3).map((user) => (
                    <div key={user.position} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{user.medal}</span>
                        <div>
                          <div className="text-white font-medium">{user.name}</div>
                          <div className="text-[#9A9A9A] text-xs">{user.earnings}</div>
                        </div>
                      </div>
                      <div className="text-[#D4AF37] font-bold">#{user.position}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#D4AF37]/20 bg-[#0B0B0B]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4 border-b border-white/5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e52a264a-59c5-4588-b926-9e121ca1f989.jpg" 
                alt="Elite Life Logo"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <h1 className="text-2xl font-bold text-[#D4AF37]">ELITE LIFE</h1>
            </div>

            {/* Right Side - Social, Notifications, Language, User */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a 
                href="https://instagram.com/elitelife_experience"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
                <span className="text-sm text-white">@elitelife_experience</span>
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me/boost/elitelifeApp"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg transition-colors"
                title="Canal Telegram"
              >
                <Send className="w-5 h-5 text-cyan-400" />
              </a>

              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 hover:bg-white/5 rounded-lg transition-colors"
                  title="Notificações"
                >
                  <Bell className="w-5 h-5 text-[#9A9A9A]" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                </button>

                {/* Notifications Dropdown */}
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

                {/* Language Dropdown */}
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
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="hidden md:block text-left">
                      <div className="text-sm font-medium text-white">{userName}</div>
                      <div className="text-xs text-[#D4AF37]">Elite Member</div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-[#9A9A9A]" />
                  </button>

                  {/* User Dropdown */}
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
                      <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left">
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
                    className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-lg hover:scale-105 transition-all duration-300 text-sm font-bold"
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

          {/* Main Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-4`}>
            <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-6 text-sm">
              <li><a href="#" onClick={() => setActiveSection("home")} className="block px-4 py-2 text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors font-medium" title="Início">{t.home}</a></li>
              
              <li>
                <button 
                  onClick={() => userPlan === "paid" ? window.location.href = "#cursos" : handleLockedClick("/cursos")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  title="+ de 100 Cursos"
                >
                  {userPlan === "free" && <Lock className="w-4 h-4" />}
                  {t.courses}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => userPlan === "paid" ? window.location.href = "#videos" : handleLockedClick("/videos")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  title="Vídeos"
                >
                  {userPlan === "free" && <Lock className="w-4 h-4" />}
                  {t.videos}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => setShowAgendaModal(true)}
                  className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors" 
                  title="Agenda"
                >
                  {t.agenda}
                </button>
              </li>
              
              <li><a href="#tracker" onClick={() => setActiveSection("tracker")} className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Tracker">{t.tracker}</a></li>
              
              <li>
                <button 
                  onClick={() => userPlan === "paid" ? setShowWalletModal(true) : handleLockedClick("/carteira")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  title="Carteira Personalizada"
                >
                  {userPlan === "free" && <Lock className="w-4 h-4" />}
                  {t.wallet}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => handleLockedClick("/influencer-pro")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-pink-400 hover:text-pink-300 hover:bg-white/5 rounded-lg transition-colors"
                  title="Influencer Pro"
                >
                  <Lock className="w-4 h-4" />
                  {t.influencer}
                </button>
              </li>
              
              <li>
                <a 
                  href="#ecommerce" 
                  onClick={() => setActiveSection("ecommerce")} 
                  className="block px-4 py-2 text-cyan-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-colors" 
                  title="E-commerce"
                >
                  {t.ecommerce}
                </a>
              </li>
              
              <li>
                <button 
                  onClick={() => isLoggedIn ? setShowAffiliateModal(true) : setShowLoginModal(true)}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  title="Afiliados"
                >
                  {!isLoggedIn && <Lock className="w-4 h-4" />}
                  {t.affiliates}
                </button>
              </li>
              
              <li><a href="#ranking" onClick={() => setActiveSection("ranking")} className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Top pontos, medalhas e afiliados">{t.ranking}</a></li>
              
              <li>
                <button 
                  onClick={() => userPlan === "paid" ? window.location.href = "#dashboard" : handleLockedClick("/dashboard")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  title="Resumo do seu progresso (requer plano)"
                >
                  {userPlan === "free" && <Lock className="w-4 h-4" />}
                  {t.dashboard}
                </button>
              </li>
              
              <li>
                <button 
                  onClick={() => userPlan === "paid" ? window.location.href = "#certificados" : handleLockedClick("/certificados")}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  title="Certificados ELITE LIFE (desbloqueados ao concluir cursos)"
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
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-purple-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37] font-medium">Método Exclusivo ELITE LIFE</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.title.split(' ').slice(0, -2).join(' ')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                {t.hero.title.split(' ').slice(-2).join(' ')}
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#9A9A9A] mb-12 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
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

            {/* Stats */}
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

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Biblioteca de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
                Vídeos
              </span>
            </h3>
            <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto mb-8">
              Vídeos exclusivos organizados por categoria
            </p>
            
            {userPlan === "free" && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-8">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-yellow-400">Assine para acessar todos os vídeos</span>
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {videoCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveVideoCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeVideoCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B]'
                    : 'bg-white/5 border border-white/10 text-[#9A9A9A] hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredVideos.slice(0, userPlan === "paid" ? filteredVideos.length : 8).map((video) => (
              <div
                key={video.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/10"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-[#D4AF37]/20 to-purple-900/20 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-[#0B0B0B] ml-1" />
                    </div>
                  </div>
                  {userPlan === "free" && (
                    <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <Lock className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white">
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4 className="text-white font-bold mb-2 line-clamp-2">{video.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#9A9A9A] capitalize">{video.category}</span>
                    <button
                      onClick={() => {
                        if (userPlan === "paid") {
                          window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
                        } else {
                          handleLockedClick("/videos");
                        }
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        userPlan === "paid"
                          ? 'bg-[#D4AF37] text-[#0B0B0B] hover:scale-105'
                          : 'bg-white/10 text-[#9A9A9A]'
                      }`}
                    >
                      {userPlan === "paid" ? 'Assistir' : 'Bloqueado'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {userPlan === "free" && (
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <Video className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-3">
                  Desbloqueie {filteredVideos.length - 8}+ vídeos
                </h4>
                <p className="text-[#9A9A9A] mb-6">
                  Assine qualquer plano e tenha acesso completo a toda biblioteca de vídeos
                </p>
                <a
                  href="#planos"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Ver Planos
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Ranking Section */}
      <section id="ranking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ranking &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                  Gamificação
                </span>
              </h3>
              <p className="text-xl text-[#9A9A9A]">
                Compete com outros alunos e conquiste medalhas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <button className="px-6 py-3 bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] rounded-xl font-bold">
                Ranking de Pontos
              </button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 text-[#9A9A9A] rounded-xl font-bold hover:bg-white/10">
                Ranking de Medalhas
              </button>
              <button 
                onClick={() => setShowAffiliateModal(true)}
                className="px-6 py-3 bg-white/5 border border-white/10 text-[#9A9A9A] rounded-xl font-bold hover:bg-white/10"
              >
                Ranking de Afilhados
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h4 className="text-white font-bold">Top 5 - Ranking Global</h4>
                <p className="text-[#9A9A9A] text-sm">Ganhe pontos por 2h/dia na plataforma, concluir vídeos, atividades e questionários</p>
              </div>
              <div className="divide-y divide-white/5">
                {rankingData.map((user) => (
                  <div key={user.position} className="p-6 hover:bg-white/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                          user.position === 1 ? 'bg-gradient-to-br from-yellow-400 to-amber-500' :
                          user.position === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                          user.position === 3 ? 'bg-gradient-to-br from-orange-400 to-amber-600' :
                          'bg-white/10'
                        }`}>
                          {user.medal || user.position}
                        </div>
                        <div>
                          <div className="text-white font-bold">{user.name}</div>
                          <div className="text-[#9A9A9A] text-sm">{user.points.toLocaleString('pt-BR')} pontos • Medalha: {user.badge}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#D4AF37] font-bold">{user.earnings}</div>
                        <div className="text-[#9A9A9A] text-xs">Como afiliado</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {userPlan === "free" && (
              <div className="mt-8 bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-2xl p-6 text-center">
                <Medal className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Sua Posição</h4>
                <p className="text-[#9A9A9A] mb-4">Faça upgrade para participar do ranking e ganhar pontos</p>
                <a 
                  href="#planos"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Ver Planos
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Escolha Seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                Plano
              </span>
            </h3>
            <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto">
              Acesso completo a cursos, IA personalizada, comunidade exclusiva e muito mais
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
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/10 ${
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
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
                      <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-xs font-bold text-black">
                        ML
                      </div>
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                        A
                      </div>
                      <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">
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
                            <Lock className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${isLocked ? 'text-gray-500' : 'text-[#9A9A9A]'}`}>
                            {text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      if (plan.id === 1) {
                        setShowSignupModal(true);
                      } else {
                        alert(`Você selecionou o plano ${plan.name}! Redirecionando para pagamento...`);
                      }
                    }}
                    className={`w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl ${
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
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Suporte</a></li>
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
              Simulações educacionais não representam valores reais. Certificados emitidos pela Elite Life.
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
      `}</style>
    </div>
  );
}
