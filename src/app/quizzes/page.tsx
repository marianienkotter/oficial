"use client";

import { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle,
  Clock, 
  Award, 
  Target,
  TrendingUp,
  Lock,
  Crown,
  ChevronRight,
  BookOpen,
  Brain,
  Trophy,
  Star,
  BarChart3,
  Lightbulb,
  Play
} from 'lucide-react';
import { useSubscription } from '@/lib/hooks/useSubscription';
import { PremiumModal } from '@/components/custom/premium-modal';
import Link from 'next/link';

// Tipos
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xp: number;
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  courseId: string;
  courseName: string;
  category: string;
  totalQuestions: number;
  timeLimit?: number; // em minutos
  passingScore: number; // porcentagem
  xp: number;
  bonusXP: number; // XP extra por nota alta
  isPremium: boolean;
  isCompleted?: boolean;
  lastScore?: number;
  bestScore?: number;
  attempts?: number;
  questions: Question[];
}

export default function QuizzesPage() {
  const { canAccessCourses, isPremium } = useSubscription();
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Quizzes
  const quizzes: Quiz[] = [
    {
      id: 'quiz-1',
      title: 'Fundamentos de Investimentos',
      description: 'Teste seus conhecimentos sobre os conceitos básicos de investimentos',
      courseId: 'financas-1',
      courseName: 'Investimentos para Iniciantes',
      category: 'Finanças',
      totalQuestions: 10,
      timeLimit: 15,
      passingScore: 70,
      xp: 20,
      bonusXP: 10,
      isPremium: false,
      isCompleted: true,
      lastScore: 85,
      bestScore: 90,
      attempts: 3,
      questions: [
        {
          id: 'q1',
          question: 'O que é diversificação de investimentos?',
          options: [
            'Investir todo o dinheiro em uma única ação',
            'Distribuir investimentos em diferentes ativos para reduzir risco',
            'Investir apenas em renda fixa',
            'Comprar ações de empresas do mesmo setor'
          ],
          correctAnswer: 1,
          explanation: 'Diversificação é a estratégia de distribuir investimentos em diferentes classes de ativos, setores e geografias para reduzir o risco total da carteira.',
          difficulty: 'easy',
          xp: 2
        },
        // Mais perguntas...
      ]
    },
    {
      id: 'quiz-2',
      title: 'Análise de Ações e Dividendos',
      description: 'Avalie seu conhecimento sobre análise de ações pagadoras de dividendos',
      courseId: 'financas-2',
      courseName: 'Ações e Dividendos',
      category: 'Finanças',
      totalQuestions: 15,
      timeLimit: 20,
      passingScore: 75,
      xp: 30,
      bonusXP: 15,
      isPremium: true,
      questions: []
    },
    {
      id: 'quiz-3',
      title: 'Mentalidade de Crescimento',
      description: 'Teste seu entendimento sobre mindset e mentalidade vencedora',
      courseId: 'mindset-1',
      courseName: 'Mentalidade Vencedora',
      category: 'Mindset',
      totalQuestions: 12,
      timeLimit: 15,
      passingScore: 70,
      xp: 25,
      bonusXP: 10,
      isPremium: false,
      isCompleted: true,
      lastScore: 100,
      bestScore: 100,
      attempts: 1,
      questions: []
    },
    {
      id: 'quiz-4',
      title: 'Inteligência Emocional Avançada',
      description: 'Desafie seus conhecimentos sobre IE e gestão emocional',
      courseId: 'mindset-2',
      courseName: 'Inteligência Emocional',
      category: 'Mindset',
      totalQuestions: 20,
      timeLimit: 25,
      passingScore: 80,
      xp: 40,
      bonusXP: 20,
      isPremium: true,
      questions: []
    },
    {
      id: 'quiz-5',
      title: 'Gestão de Tempo e Produtividade',
      description: 'Avalie suas estratégias de gestão de tempo',
      courseId: 'produtividade-1',
      courseName: 'Gestão de Tempo Avançada',
      category: 'Produtividade',
      totalQuestions: 10,
      passingScore: 70,
      xp: 20,
      bonusXP: 10,
      isPremium: true,
      isCompleted: true,
      lastScore: 70,
      bestScore: 80,
      attempts: 2,
      questions: []
    },
    {
      id: 'quiz-6',
      title: 'Hábitos de Alta Performance',
      description: 'Teste seu conhecimento sobre construção de hábitos',
      courseId: 'produtividade-2',
      courseName: 'Hábitos de Alta Performance',
      category: 'Produtividade',
      totalQuestions: 15,
      timeLimit: 20,
      passingScore: 75,
      xp: 30,
      bonusXP: 15,
      isPremium: true,
      questions: []
    },
    {
      id: 'quiz-7',
      title: 'E-commerce: Fundamentos',
      description: 'Conceitos essenciais para começar no e-commerce',
      courseId: 'ecommerce-1',
      courseName: 'E-commerce do Zero',
      category: 'E-commerce',
      totalQuestions: 12,
      timeLimit: 18,
      passingScore: 70,
      xp: 25,
      bonusXP: 10,
      isPremium: true,
      questions: []
    },
    {
      id: 'quiz-8',
      title: 'Dropshipping Avançado',
      description: 'Estratégias avançadas de dropshipping e escalabilidade',
      courseId: 'ecommerce-2',
      courseName: 'Dropshipping Avançado',
      category: 'E-commerce',
      totalQuestions: 18,
      timeLimit: 25,
      passingScore: 80,
      xp: 35,
      bonusXP: 20,
      isPremium: true,
      questions: []
    },
    {
      id: 'quiz-9',
      title: 'Saúde Integral',
      description: 'Conhecimentos sobre saúde física, mental e espiritual',
      courseId: 'saude-1',
      courseName: 'Saúde Integral',
      category: 'Saúde',
      totalQuestions: 10,
      passingScore: 70,
      xp: 20,
      bonusXP: 10,
      isPremium: true,
      questions: []
    },
    {
      id: 'quiz-10',
      title: 'Renda Passiva: Estratégias',
      description: 'Teste seu conhecimento sobre construção de renda passiva',
      courseId: 'financas-3',
      courseName: 'Construindo Renda Passiva',
      category: 'Finanças',
      totalQuestions: 15,
      timeLimit: 20,
      passingScore: 75,
      xp: 30,
      bonusXP: 15,
      isPremium: true,
      questions: []
    }
  ];

  // Filtros
  const filters = [
    { id: 'all', label: 'Todos', count: quizzes.length },
    { id: 'completed', label: 'Concluídos', count: quizzes.filter(q => q.isCompleted).length },
    { id: 'pending', label: 'Pendentes', count: quizzes.filter(q => !q.isCompleted).length },
    { id: 'Finanças', label: 'Finanças', count: quizzes.filter(q => q.category === 'Finanças').length },
    { id: 'Mindset', label: 'Mindset', count: quizzes.filter(q => q.category === 'Mindset').length },
    { id: 'Produtividade', label: 'Produtividade', count: quizzes.filter(q => q.category === 'Produtividade').length },
    { id: 'E-commerce', label: 'E-commerce', count: quizzes.filter(q => q.category === 'E-commerce').length },
  ];

  // Filtrar quizzes
  const filteredQuizzes = quizzes.filter(quiz => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'completed') return quiz.isCompleted;
    if (activeFilter === 'pending') return !quiz.isCompleted;
    return quiz.category === activeFilter;
  });

  const handleQuizClick = (quiz: Quiz) => {
    if (quiz.isPremium && !canAccessCourses()) {
      setShowPremiumModal(true);
      return;
    }
    setSelectedQuiz(quiz);
  };

  const handleSelectPlan = (planId: number) => {
    console.log('Plano selecionado:', planId);
  };

  // Estatísticas
  const stats = {
    total: quizzes.length,
    completed: quizzes.filter(q => q.isCompleted).length,
    averageScore: Math.round(
      quizzes.filter(q => q.lastScore).reduce((sum, q) => sum + (q.lastScore || 0), 0) / 
      quizzes.filter(q => q.lastScore).length || 0
    ),
    totalXP: quizzes.filter(q => q.isCompleted).reduce((sum, q) => sum + q.xp, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-[#0B0B0B]" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Quizzes</h1>
                <p className="text-[#9A9A9A]">{quizzes.length} quizzes disponíveis</p>
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
              <p className="text-[#9A9A9A] text-sm mb-1">Concluídos</p>
              <p className="text-green-500 text-2xl font-bold">{stats.completed}</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 border border-blue-500/10">
              <p className="text-[#9A9A9A] text-sm mb-1">Média</p>
              <p className="text-blue-500 text-2xl font-bold">{stats.averageScore}%</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/10">
              <p className="text-[#9A9A9A] text-sm mb-1">XP Total</p>
              <p className="text-[#D4AF37] text-2xl font-bold">{stats.totalXP}</p>
            </div>
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

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              onClick={() => handleQuizClick(quiz)}
              isLocked={quiz.isPremium && !canAccessCourses()}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredQuizzes.length === 0 && (
          <div className="text-center py-16">
            <Brain className="w-16 h-16 text-[#9A9A9A] mx-auto mb-4" />
            <p className="text-white text-lg font-medium mb-2">Nenhum quiz encontrado</p>
            <p className="text-[#9A9A9A]">Tente ajustar os filtros</p>
          </div>
        )}
      </div>

      {/* Quiz Detail Modal */}
      {selectedQuiz && (
        <QuizModal
          quiz={selectedQuiz}
          onClose={() => setSelectedQuiz(null)}
        />
      )}

      {/* Premium Modal */}
      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
        onSelectPlan={handleSelectPlan}
        feature="todos os quizzes"
      />
    </div>
  );
}

// Quiz Card Component
interface QuizCardProps {
  quiz: Quiz;
  onClick: () => void;
  isLocked: boolean;
}

function QuizCard({ quiz, onClick, isLocked }: QuizCardProps) {
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
      {quiz.isCompleted && !isLocked && (
        <div className="absolute top-4 right-4 bg-green-500/20 px-3 py-1 rounded-full flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-green-500" />
          <span className="text-xs font-bold text-green-500">CONCLUÍDO</span>
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Brain className="w-7 h-7 text-white" />
      </div>

      {/* Category & Course */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-bold text-[#D4AF37] uppercase">{quiz.category}</span>
        <span className="text-xs text-[#9A9A9A]">•</span>
        <span className="text-xs text-[#9A9A9A]">{quiz.courseName}</span>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
        {quiz.title}
      </h3>

      {/* Description */}
      <p className="text-[#9A9A9A] text-sm mb-4 line-clamp-2">
        {quiz.description}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center">
          <BookOpen className="w-4 h-4 text-[#9A9A9A] mx-auto mb-1" />
          <p className="text-white text-xs font-medium">{quiz.totalQuestions}</p>
          <p className="text-[#9A9A9A] text-xs">Perguntas</p>
        </div>
        {quiz.timeLimit && (
          <div className="text-center">
            <Clock className="w-4 h-4 text-[#9A9A9A] mx-auto mb-1" />
            <p className="text-white text-xs font-medium">{quiz.timeLimit} min</p>
            <p className="text-[#9A9A9A] text-xs">Tempo</p>
          </div>
        )}
        <div className="text-center">
          <Award className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
          <p className="text-[#D4AF37] text-xs font-bold">+{quiz.xp} XP</p>
          <p className="text-[#9A9A9A] text-xs">Pontos</p>
        </div>
      </div>

      {/* Score */}
      {quiz.isCompleted && quiz.bestScore && (
        <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#9A9A9A] text-xs">Melhor Nota</p>
              <p className="text-[#D4AF37] text-xl font-bold">{quiz.bestScore}%</p>
            </div>
            <Trophy className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </div>
      )}

      {/* CTA */}
      <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
        isLocked
          ? 'bg-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/30'
          : quiz.isCompleted
          ? 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30'
          : 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] hover:shadow-lg hover:shadow-[#D4AF37]/50'
      }`}>
        {isLocked ? (
          <>
            <Lock className="w-4 h-4" />
            Desbloquear
          </>
        ) : quiz.isCompleted ? (
          <>
            <Play className="w-4 h-4" />
            Refazer Quiz
          </>
        ) : (
          <>
            Iniciar Quiz
            <ChevronRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}

// Quiz Modal Component
interface QuizModalProps {
  quiz: Quiz;
  onClose: () => void;
}

function QuizModal({ quiz, onClose }: QuizModalProps) {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit ? quiz.timeLimit * 60 : null);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    // Simulação de cálculo de nota
    return Math.floor(Math.random() * 30) + 70; // 70-100%
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score >= quiz.passingScore;
    const earnedXP = quiz.xp + (score >= 90 ? quiz.bonusXP : 0);

    return (
      <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[110] p-4">
        <div className="w-full max-w-2xl bg-[#1A1A1A] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className={`p-8 text-center ${passed ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-orange-600'}`}>
            {passed ? (
              <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
            ) : (
              <XCircle className="w-16 h-16 text-white mx-auto mb-4" />
            )}
            <h2 className="text-3xl font-bold text-white mb-2">
              {passed ? 'Parabéns!' : 'Quase lá!'}
            </h2>
            <p className="text-white/90">
              {passed ? 'Você passou no quiz!' : 'Continue estudando e tente novamente'}
            </p>
          </div>

          {/* Results */}
          <div className="p-8 space-y-6">
            {/* Score */}
            <div className="text-center">
              <p className="text-[#9A9A9A] mb-2">Sua Nota</p>
              <p className="text-6xl font-bold text-white mb-2">{score}%</p>
              <p className="text-[#9A9A9A]">
                Nota mínima: {quiz.passingScore}%
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-white font-bold text-xl">
                  {Math.floor((score / 100) * quiz.totalQuestions)}
                </p>
                <p className="text-[#9A9A9A] text-sm">Acertos</p>
              </div>
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <XCircle className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-white font-bold text-xl">
                  {quiz.totalQuestions - Math.floor((score / 100) * quiz.totalQuestions)}
                </p>
                <p className="text-[#9A9A9A] text-sm">Erros</p>
              </div>
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <Award className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-[#D4AF37] font-bold text-xl">+{earnedXP}</p>
                <p className="text-[#9A9A9A] text-sm">XP Ganho</p>
              </div>
            </div>

            {/* Bonus */}
            {score >= 90 && (
              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border border-[#D4AF37]/30 rounded-xl p-4 text-center">
                <Star className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white font-bold">Bônus de Excelência!</p>
                <p className="text-[#9A9A9A] text-sm">+{quiz.bonusXP} XP extra por nota acima de 90%</p>
              </div>
            )}

            {/* CTA */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-[#2A2A2A] text-white rounded-xl font-bold hover:bg-[#3A3A3A] transition-all"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  setShowResults(false);
                  setIsStarted(false);
                  setCurrentQuestion(0);
                  setSelectedAnswers([]);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
              >
                Refazer Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isStarted) {
    return (
      <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[110] p-4">
        <div className="w-full max-w-2xl bg-[#1A1A1A] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#D4AF37] to-amber-600 p-6">
            <button
              onClick={onClose}
              className="float-right w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-all"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-[#0B0B0B] mb-2">{quiz.title}</h2>
            <p className="text-[#0B0B0B]/80">{quiz.courseName}</p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <p className="text-[#9A9A9A]">{quiz.description}</p>

            {/* Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <BookOpen className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white font-bold">{quiz.totalQuestions}</p>
                <p className="text-[#9A9A9A] text-xs">Perguntas</p>
              </div>
              {quiz.timeLimit && (
                <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                  <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-white font-bold">{quiz.timeLimit} min</p>
                  <p className="text-[#9A9A9A] text-xs">Tempo Limite</p>
                </div>
              )}
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <Target className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white font-bold">{quiz.passingScore}%</p>
                <p className="text-[#9A9A9A] text-xs">Nota Mínima</p>
              </div>
              <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
                <Award className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white font-bold">+{quiz.xp}</p>
                <p className="text-[#9A9A9A] text-xs">XP Base</p>
              </div>
            </div>

            {/* Bonus Info */}
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm mb-1">Bônus de XP</p>
                  <p className="text-[#9A9A9A] text-sm">
                    Ganhe +{quiz.bonusXP} XP extra ao atingir nota acima de 90%!
                  </p>
                </div>
              </div>
            </div>

            {/* Previous Attempts */}
            {quiz.attempts && quiz.attempts > 0 && (
              <div className="bg-[#2A2A2A] rounded-xl p-4">
                <p className="text-white font-bold mb-2">Tentativas Anteriores</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#9A9A9A] text-sm">Última Nota</p>
                    <p className="text-white font-bold">{quiz.lastScore}%</p>
                  </div>
                  <div>
                    <p className="text-[#9A9A9A] text-sm">Melhor Nota</p>
                    <p className="text-[#D4AF37] font-bold">{quiz.bestScore}%</p>
                  </div>
                  <div>
                    <p className="text-[#9A9A9A] text-sm">Tentativas</p>
                    <p className="text-white font-bold">{quiz.attempts}</p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <button
              onClick={() => setIsStarted(true)}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Iniciar Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz em andamento (simulação)
  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[110] p-4">
      <div className="w-full max-w-3xl bg-[#1A1A1A] rounded-2xl overflow-hidden">
        {/* Progress */}
        <div className="bg-[#2A2A2A] p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold">
              Pergunta {currentQuestion + 1} de {quiz.totalQuestions}
            </span>
            {timeLeft && (
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Clock className="w-4 h-4" />
                <span className="font-bold">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
            )}
          </div>
          <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-600 transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quiz.totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="p-8">
          <h3 className="text-white text-xl font-bold mb-6">
            Pergunta de exemplo sobre {quiz.category}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  selectedAnswers[currentQuestion] === index
                    ? 'bg-[#D4AF37]/20 border-2 border-[#D4AF37] text-white'
                    : 'bg-[#2A2A2A] border-2 border-transparent text-[#9A9A9A] hover:border-[#D4AF37]/30 hover:text-white'
                }`}
              >
                <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                Opção de resposta {index + 1}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#2A2A2A] text-white rounded-xl font-bold hover:bg-[#3A3A3A] transition-all"
            >
              Sair
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="flex-1 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {currentQuestion < quiz.totalQuestions - 1 ? (
                <>
                  Próxima
                  <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Finalizar Quiz
                  <CheckCircle2 className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
