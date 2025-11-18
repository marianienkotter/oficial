"use client";

import { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Award, 
  Target,
  TrendingUp,
  Lock,
  Crown,
  ChevronRight,
  BookOpen,
  Zap,
  Brain,
  Lightbulb,
  Trophy,
  Star,
  Calendar,
  FileText
} from 'lucide-react';
import { useSubscription } from '@/lib/hooks/useSubscription';
import { PremiumModal } from '@/components/custom/premium-modal';
import Link from 'next/link';

// Tipos
interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'reflexive' | 'practical' | 'case-study' | 'checklist' | 'planning' | 'high-performance' | 'challenge' | 'simulation';
  courseId: string;
  courseName: string;
  objective: string;
  estimatedTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xp: number;
  isPremium: boolean;
  isCompleted?: boolean;
  progress?: number;
  medal?: string;
  scientificExplanation?: string;
}

export default function ActivitiesPage() {
  const { canAccessCourses, isPremium } = useSubscription();
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Atividades
  const activities: Activity[] = [
    // Atividades Reflexivas
    {
      id: 'ref-1',
      title: 'Mapeamento de Crenças Limitantes',
      description: 'Identifique e transforme crenças que bloqueiam seu crescimento',
      type: 'reflexive',
      courseId: 'mindset-1',
      courseName: 'Mentalidade Vencedora',
      objective: 'Reconhecer padrões mentais negativos e criar novas crenças empoderadoras',
      estimatedTime: '30 min',
      difficulty: 'medium',
      xp: 20,
      isPremium: false,
      isCompleted: true,
      scientificExplanation: 'Baseado em neuroplasticidade e terapia cognitivo-comportamental'
    },
    {
      id: 'ref-2',
      title: 'Diário de Gratidão Profundo',
      description: 'Pratique gratidão consciente para reprogramar seu cérebro',
      type: 'reflexive',
      courseId: 'mindset-1',
      courseName: 'Mentalidade Vencedora',
      objective: 'Desenvolver mentalidade positiva através da gratidão diária',
      estimatedTime: '15 min',
      difficulty: 'easy',
      xp: 10,
      isPremium: false,
      progress: 60
    },

    // Atividades Práticas
    {
      id: 'prat-1',
      title: 'Primeira Venda Online',
      description: 'Execute sua primeira venda e documente o processo',
      type: 'practical',
      courseId: 'ecommerce-1',
      courseName: 'E-commerce do Zero',
      objective: 'Realizar uma venda real e entender o funil completo',
      estimatedTime: '2 horas',
      difficulty: 'hard',
      xp: 40,
      isPremium: true,
      medal: '🏆 Primeira Venda'
    },
    {
      id: 'prat-2',
      title: 'Rotina Matinal de Alta Performance',
      description: 'Implemente uma rotina matinal de 90 dias',
      type: 'practical',
      courseId: 'produtividade-1',
      courseName: 'Hábitos de Alta Performance',
      objective: 'Criar e manter uma rotina matinal consistente',
      estimatedTime: '1 hora/dia',
      difficulty: 'medium',
      xp: 20,
      isPremium: true
    },

    // Estudos de Caso
    {
      id: 'case-1',
      title: 'Análise de Portfólio de Dividendos',
      description: 'Analise um portfólio real de ações pagadoras de dividendos',
      type: 'case-study',
      courseId: 'financas-1',
      courseName: 'Ações e Dividendos',
      objective: 'Desenvolver capacidade analítica de investimentos',
      estimatedTime: '45 min',
      difficulty: 'hard',
      xp: 40,
      isPremium: true
    },
    {
      id: 'case-2',
      title: 'Estudo: Crise Emocional no Trabalho',
      description: 'Analise um caso real de gestão emocional corporativa',
      type: 'case-study',
      courseId: 'mindset-2',
      courseName: 'Inteligência Emocional',
      objective: 'Aplicar técnicas de IE em situações reais',
      estimatedTime: '30 min',
      difficulty: 'medium',
      xp: 20,
      isPremium: true
    },

    // Checklists
    {
      id: 'check-1',
      title: 'Checklist: Lançamento de Produto Digital',
      description: 'Passo a passo completo para lançar seu produto',
      type: 'checklist',
      courseId: 'ecommerce-1',
      courseName: 'E-commerce do Zero',
      objective: 'Garantir que todos os passos do lançamento sejam executados',
      estimatedTime: '20 min',
      difficulty: 'easy',
      xp: 10,
      isPremium: true
    },

    // Planejamentos
    {
      id: 'plan-1',
      title: 'Planejamento Financeiro 12 Meses',
      description: 'Crie seu plano financeiro completo para o próximo ano',
      type: 'planning',
      courseId: 'financas-1',
      courseName: 'Investimentos para Iniciantes',
      objective: 'Estruturar metas financeiras e estratégias de investimento',
      estimatedTime: '1 hora',
      difficulty: 'medium',
      xp: 20,
      isPremium: false,
      progress: 30
    },
    {
      id: 'plan-2',
      title: 'Mapa Mental de Objetivos',
      description: 'Visualize e organize seus objetivos de vida',
      type: 'planning',
      courseId: 'mindset-1',
      courseName: 'Mentalidade Vencedora',
      objective: 'Clareza total sobre direção de vida',
      estimatedTime: '40 min',
      difficulty: 'easy',
      xp: 10,
      isPremium: false
    },

    // Alta Performance
    {
      id: 'perf-1',
      title: 'Protocolo de Foco Extremo',
      description: 'Técnica avançada de concentração profunda',
      type: 'high-performance',
      courseId: 'produtividade-1',
      courseName: 'Gestão de Tempo Avançada',
      objective: 'Alcançar estado de flow e produtividade máxima',
      estimatedTime: '25 min',
      difficulty: 'hard',
      xp: 40,
      isPremium: true,
      scientificExplanation: 'Baseado em neurociência do foco e técnica Pomodoro avançada'
    },
    {
      id: 'perf-2',
      title: 'Treino Mental para Decisões',
      description: 'Exercícios para melhorar tomada de decisão sob pressão',
      type: 'high-performance',
      courseId: 'mindset-2',
      courseName: 'Inteligência Emocional',
      objective: 'Desenvolver clareza mental em momentos críticos',
      estimatedTime: '35 min',
      difficulty: 'hard',
      xp: 40,
      isPremium: true
    },

    // Desafios
    {
      id: 'chal-1',
      title: 'Desafio 21 Dias: Disciplina Total',
      description: 'Transforme sua vida em 21 dias de disciplina extrema',
      type: 'challenge',
      courseId: 'mindset-1',
      courseName: 'Mentalidade Vencedora',
      objective: 'Criar hábito de disciplina inabalável',
      estimatedTime: '21 dias',
      difficulty: 'hard',
      xp: 40,
      isPremium: true,
      medal: '🏅 Disciplina de Aço'
    },
    {
      id: 'chal-2',
      title: 'Desafio 7 Dias: Produtividade Máxima',
      description: 'Uma semana de produtividade extrema',
      type: 'challenge',
      courseId: 'produtividade-1',
      courseName: 'Gestão de Tempo Avançada',
      objective: 'Multiplicar sua produtividade em 7 dias',
      estimatedTime: '7 dias',
      difficulty: 'medium',
      xp: 20,
      isPremium: true,
      medal: '⚡ Produtividade Extrema'
    },

    // Simulações
    {
      id: 'sim-1',
      title: 'Simulação: Gestão de E-commerce',
      description: 'Gerencie uma loja virtual simulada por 30 dias',
      type: 'simulation',
      courseId: 'ecommerce-1',
      courseName: 'E-commerce do Zero',
      objective: 'Experiência prática de gestão completa',
      estimatedTime: '30 dias',
      difficulty: 'hard',
      xp: 40,
      isPremium: true,
      medal: '🛒 Gestor E-commerce'
    },
    {
      id: 'sim-2',
      title: 'Simulação: Portfólio de Investimentos',
      description: 'Invista R$ 10.000 virtuais e acompanhe resultados',
      type: 'simulation',
      courseId: 'financas-1',
      courseName: 'Investimentos para Iniciantes',
      objective: 'Praticar estratégias de investimento sem risco',
      estimatedTime: '30 dias',
      difficulty: 'medium',
      xp: 20,
      isPremium: true
    }
  ];

  // Filtros
  const filters = [
    { id: 'all', label: 'Todas', count: activities.length },
    { id: 'completed', label: 'Concluídas', count: activities.filter(a => a.isCompleted).length },
    { id: 'in-progress', label: 'Em Andamento', count: activities.filter(a => a.progress && a.progress > 0).length },
    { id: 'pending', label: 'Pendentes', count: activities.filter(a => !a.isCompleted && !a.progress).length },
    { id: 'easy', label: 'Fácil', count: activities.filter(a => a.difficulty === 'easy').length },
    { id: 'medium', label: 'Médio', count: activities.filter(a => a.difficulty === 'medium').length },
    { id: 'hard', label: 'Difícil', count: activities.filter(a => a.difficulty === 'hard').length },
  ];

  // Tipos de atividades
  const activityTypes = [
    { id: 'reflexive', label: 'Reflexivas', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'practical', label: 'Práticas', icon: Target, color: 'from-blue-500 to-cyan-600' },
    { id: 'case-study', label: 'Estudos de Caso', icon: BookOpen, color: 'from-green-500 to-emerald-600' },
    { id: 'checklist', label: 'Checklists', icon: CheckCircle2, color: 'from-orange-500 to-red-600' },
    { id: 'planning', label: 'Planejamentos', icon: Lightbulb, color: 'from-yellow-500 to-amber-600' },
    { id: 'high-performance', label: 'Alta Performance', icon: Zap, color: 'from-indigo-500 to-purple-600' },
    { id: 'challenge', label: 'Desafios', icon: Trophy, color: 'from-red-500 to-pink-600' },
    { id: 'simulation', label: 'Simulações', icon: TrendingUp, color: 'from-teal-500 to-green-600' },
  ];

  // Filtrar atividades
  const filteredActivities = activities.filter(activity => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'completed') return activity.isCompleted;
    if (activeFilter === 'in-progress') return activity.progress && activity.progress > 0 && !activity.isCompleted;
    if (activeFilter === 'pending') return !activity.isCompleted && !activity.progress;
    if (activeFilter === 'easy') return activity.difficulty === 'easy';
    if (activeFilter === 'medium') return activity.difficulty === 'medium';
    if (activeFilter === 'hard') return activity.difficulty === 'hard';
    return true;
  });

  const handleActivityClick = (activity: Activity) => {
    if (activity.isPremium && !canAccessCourses()) {
      setShowPremiumModal(true);
      return;
    }
    setSelectedActivity(activity);
  };

  const handleSelectPlan = (planId: number) => {
    console.log('Plano selecionado:', planId);
  };

  // Estatísticas
  const stats = {
    total: activities.length,
    completed: activities.filter(a => a.isCompleted).length,
    inProgress: activities.filter(a => a.progress && a.progress > 0).length,
    totalXP: activities.filter(a => a.isCompleted).reduce((sum, a) => sum + a.xp, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-[#0B0B0B]" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Atividades</h1>
                <p className="text-[#9A9A9A]">{activities.length} atividades • 8 tipos diferentes</p>
              </div>
            </div>
            <Link
              href="/courses"
              className="px-6 py-3 bg-[#2A2A2A] text-white rounded-xl hover:bg-[#3A3A3A] transition-all font-medium"
            >
              Voltar aos Cursos
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/10">
              <p className="text-[#9A9A9A] text-sm mb-1">Total</p>
              <p className="text-white text-2xl font-bold">{stats.total}</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 border border-green-500/10">
              <p className="text-[#9A9A9A] text-sm mb-1">Concluídas</p>
              <p className="text-green-500 text-2xl font-bold">{stats.completed}</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 border border-blue-500/10">
              <p className="text-[#9A9A9A] text-sm mb-1">Em Andamento</p>
              <p className="text-blue-500 text-2xl font-bold">{stats.inProgress}</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/10">
              <p className="text-[#9A9A9A] text-sm mb-1">XP Ganho</p>
              <p className="text-[#D4AF37] text-2xl font-bold">{stats.totalXP}</p>
            </div>
          </div>
        </div>

        {/* Tipos de Atividades */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Tipos de Atividades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {activityTypes.map((type) => {
              const Icon = type.icon;
              const count = activities.filter(a => a.type === type.id).length;
              return (
                <div
                  key={type.id}
                  className="bg-[#2A2A2A] rounded-xl p-4 hover:bg-[#3A3A3A] transition-all cursor-pointer group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium mb-1">{type.label}</p>
                  <p className="text-[#9A9A9A] text-xs">{count} atividades</p>
                </div>
              );
            })}
          </div>
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
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onClick={() => handleActivityClick(activity)}
              isLocked={activity.isPremium && !canAccessCourses()}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredActivities.length === 0 && (
          <div className="text-center py-16">
            <Target className="w-16 h-16 text-[#9A9A9A] mx-auto mb-4" />
            <p className="text-white text-lg font-medium mb-2">Nenhuma atividade encontrada</p>
            <p className="text-[#9A9A9A]">Tente ajustar os filtros</p>
          </div>
        )}
      </div>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <ActivityDetailModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}

      {/* Premium Modal */}
      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
        onSelectPlan={handleSelectPlan}
        feature="todas as atividades"
      />
    </div>
  );
}

// Activity Card Component
interface ActivityCardProps {
  activity: Activity;
  onClick: () => void;
  isLocked: boolean;
}

function ActivityCard({ activity, onClick, isLocked }: ActivityCardProps) {
  const typeConfig = {
    reflexive: { icon: Brain, color: 'from-purple-500 to-pink-600', label: 'Reflexiva' },
    practical: { icon: Target, color: 'from-blue-500 to-cyan-600', label: 'Prática' },
    'case-study': { icon: BookOpen, color: 'from-green-500 to-emerald-600', label: 'Estudo de Caso' },
    checklist: { icon: CheckCircle2, color: 'from-orange-500 to-red-600', label: 'Checklist' },
    planning: { icon: Lightbulb, color: 'from-yellow-500 to-amber-600', label: 'Planejamento' },
    'high-performance': { icon: Zap, color: 'from-indigo-500 to-purple-600', label: 'Alta Performance' },
    challenge: { icon: Trophy, color: 'from-red-500 to-pink-600', label: 'Desafio' },
    simulation: { icon: TrendingUp, color: 'from-teal-500 to-green-600', label: 'Simulação' },
  };

  const config = typeConfig[activity.type];
  const Icon = config.icon;

  const difficultyConfig = {
    easy: { label: 'Fácil', color: 'text-green-500' },
    medium: { label: 'Médio', color: 'text-yellow-500' },
    hard: { label: 'Difícil', color: 'text-red-500' },
  };

  const difficulty = difficultyConfig[activity.difficulty];

  return (
    <div
      onClick={onClick}
      className={`bg-[#2A2A2A] rounded-2xl p-6 hover:bg-[#3A3A3A] transition-all cursor-pointer group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 relative ${
        isLocked ? 'opacity-60' : ''
      }`}
    >
      {/* Lock Badge */}
      {isLocked && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 px-3 py-1 rounded-full flex items-center gap-1">
          <Crown className="w-3 h-3 text-[#0B0B0B]" />
          <span className="text-xs font-bold text-[#0B0B0B]">PREMIUM</span>
        </div>
      )}

      {/* Completed Badge */}
      {activity.isCompleted && !isLocked && (
        <div className="absolute top-4 right-4 bg-green-500/20 px-3 py-1 rounded-full flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-green-500" />
          <span className="text-xs font-bold text-green-500">CONCLUÍDA</span>
        </div>
      )}

      {/* Type Icon */}
      <div className={`w-14 h-14 bg-gradient-to-br ${config.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Type & Course */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-bold text-[#D4AF37] uppercase">{config.label}</span>
        <span className="text-xs text-[#9A9A9A]">•</span>
        <span className="text-xs text-[#9A9A9A]">{activity.courseName}</span>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
        {activity.title}
      </h3>

      {/* Description */}
      <p className="text-[#9A9A9A] text-sm mb-4 line-clamp-2">
        {activity.description}
      </p>

      {/* Progress */}
      {activity.progress && activity.progress > 0 && !activity.isCompleted && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-[#9A9A9A]">Progresso</span>
            <span className="text-[#D4AF37] font-bold">{activity.progress}%</span>
          </div>
          <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${config.color} transition-all duration-500`}
              style={{ width: `${activity.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center">
          <Clock className="w-4 h-4 text-[#9A9A9A] mx-auto mb-1" />
          <p className="text-white text-xs font-medium">{activity.estimatedTime}</p>
        </div>
        <div className="text-center">
          <Star className={`w-4 h-4 ${difficulty.color} mx-auto mb-1`} />
          <p className={`text-xs font-medium ${difficulty.color}`}>{difficulty.label}</p>
        </div>
        <div className="text-center">
          <Award className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
          <p className="text-[#D4AF37] text-xs font-bold">+{activity.xp} XP</p>
        </div>
      </div>

      {/* Medal */}
      {activity.medal && (
        <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-2 mb-4">
          <p className="text-[#D4AF37] text-xs font-medium text-center">{activity.medal}</p>
        </div>
      )}

      {/* CTA */}
      <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
        isLocked
          ? 'bg-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/30'
          : activity.isCompleted
          ? 'bg-green-500/20 text-green-500'
          : 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] hover:shadow-lg hover:shadow-[#D4AF37]/50'
      }`}>
        {isLocked ? (
          <>
            <Lock className="w-4 h-4" />
            Desbloquear
          </>
        ) : activity.isCompleted ? (
          <>
            <CheckCircle2 className="w-4 h-4" />
            Revisar
          </>
        ) : activity.progress ? (
          <>
            Continuar
            <ChevronRight className="w-4 h-4" />
          </>
        ) : (
          <>
            Começar
            <ChevronRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}

// Activity Detail Modal Component
interface ActivityDetailModalProps {
  activity: Activity;
  onClose: () => void;
}

function ActivityDetailModal({ activity, onClose }: ActivityDetailModalProps) {
  const [userResponse, setUserResponse] = useState('');
  const [isCompleting, setIsCompleting] = useState(false);

  const handleComplete = () => {
    setIsCompleting(true);
    // Simular conclusão
    setTimeout(() => {
      setIsCompleting(false);
      onClose();
      // Aqui você salvaria no banco de dados
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[110] p-4 overflow-y-auto">
      <div className="w-full max-w-3xl bg-[#1A1A1A] rounded-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D4AF37] to-amber-600 p-6">
          <button
            onClick={onClose}
            className="float-right w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-all"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold text-[#0B0B0B] mb-2">{activity.title}</h2>
          <p className="text-[#0B0B0B]/80">{activity.courseName}</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Descrição</h3>
            <p className="text-[#9A9A9A]">{activity.description}</p>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Objetivo</h3>
            <p className="text-[#9A9A9A]">{activity.objective}</p>
          </div>

          {/* Scientific Explanation */}
          {activity.scientificExplanation && (
            <div className="bg-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20">
              <h3 className="text-[#D4AF37] font-bold text-sm mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Base Científica
              </h3>
              <p className="text-[#9A9A9A] text-sm">{activity.scientificExplanation}</p>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-white font-bold">{activity.estimatedTime}</p>
              <p className="text-[#9A9A9A] text-xs">Tempo Estimado</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <Star className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-white font-bold capitalize">{activity.difficulty}</p>
              <p className="text-[#9A9A9A] text-xs">Dificuldade</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <Award className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-white font-bold">+{activity.xp} XP</p>
              <p className="text-[#9A9A9A] text-xs">Pontos</p>
            </div>
          </div>

          {/* Response Area */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Sua Resposta</h3>
            <textarea
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              placeholder="Digite sua resposta aqui..."
              className="w-full h-40 bg-[#2A2A2A] text-white rounded-xl p-4 border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none resize-none"
            />
          </div>

          {/* CTA */}
          <button
            onClick={handleComplete}
            disabled={isCompleting || !userResponse.trim()}
            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isCompleting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0B0B0B] border-t-transparent rounded-full animate-spin" />
                Concluindo...
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Concluir Atividade
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
