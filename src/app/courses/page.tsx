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
  Zap
} from 'lucide-react';
import { useSubscription } from '@/lib/hooks/useSubscription';
import { PremiumModal } from '@/components/custom/premium-modal';
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
      tags: ['Investimentos', 'Renda Fixa', 'Ações']
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
      tags: ['Renda Passiva', 'Dividendos', 'FIIs']
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
      tags: ['Ações', 'Dividendos', 'Análise']
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
      tags: ['Mindset', 'Liderança', 'Sucesso']
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
      tags: ['Emoções', 'Relacionamentos', 'Autoconhecimento']
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
      tags: ['Tempo', 'Produtividade', 'Foco']
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
      tags: ['Hábitos', 'Rotina', 'Performance']
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
      tags: ['E-commerce', 'Vendas', 'Loja Online']
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
      tags: ['Dropshipping', 'Escalabilidade', 'Automação']
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
      tags: ['Saúde', 'Bem-estar', 'Equilíbrio']
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
                <p className="text-[#9A9A9A]">{courses.length} cursos • 5 trilhas completas</p>
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
        />
      )}

      {/* Premium Modal */}
      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
        onSelectPlan={handleSelectPlan}
        feature="todos os cursos"
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
}

function CourseDetailModal({ course, onClose }: CourseDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'activities' | 'quizzes'>('overview');

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[110] p-4 overflow-y-auto">
      <div className="w-full max-w-5xl bg-[#1A1A1A] rounded-2xl overflow-hidden my-8">
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
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
          >
            ×
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-[#D4AF37] uppercase">{course.category}</span>
              <span className="text-sm text-white">•</span>
              <span className="text-sm text-white capitalize">{course.level}</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">{course.title}</h2>
            <p className="text-[#9A9A9A] text-lg">{course.description}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 px-6 border-b border-[#2A2A2A]">
          {[
            { id: 'overview', label: 'Visão Geral' },
            { id: 'modules', label: 'Módulos' },
            { id: 'activities', label: 'Atividades' },
            { id: 'quizzes', label: 'Quizzes' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-2 font-medium transition-all relative ${
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
        <div className="p-6">
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
