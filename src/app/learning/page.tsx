"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Trophy,
  Target,
  Award,
  TrendingUp,
  Zap,
  Crown,
  Star,
  ChevronRight,
  Filter,
  Search,
  Clock,
  CheckCircle,
  Lock
} from "lucide-react";
import { generateQuizzes, generateActivities, generateExams, type Category, type DifficultyLevel } from "@/lib/learning/data";

export default function LearningPage() {
  const [activeTab, setActiveTab] = useState<"quizzes" | "activities" | "exams">("quizzes");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const quizzes = generateQuizzes();
  const activities = generateActivities();
  const exams = generateExams();

  const categories: { value: Category | "all"; label: string }[] = [
    { value: "all", label: "Todas as Categorias" },
    { value: "6em7", label: "6 em 7" },
    { value: "marketing-digital", label: "Marketing Digital" },
    { value: "afiliados", label: "Afiliados" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "empreendedorismo", label: "Empreendedorismo" },
    { value: "investimentos", label: "Investimentos" },
    { value: "mindset-milionario", label: "Mindset Milionário" },
    { value: "produtividade", label: "Produtividade" },
    { value: "saude-alimentacao", label: "Saúde" }
  ];

  const difficulties: { value: DifficultyLevel | "all"; label: string; color: string }[] = [
    { value: "all", label: "Todos os Níveis", color: "gray" },
    { value: "iniciante", label: "Iniciante", color: "green" },
    { value: "intermediário", label: "Intermediário", color: "blue" },
    { value: "avançado", label: "Avançado", color: "purple" },
    { value: "expert", label: "Expert", color: "amber" }
  ];

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesCategory = selectedCategory === "all" || quiz.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || quiz.difficulty === selectedDifficulty;
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = selectedCategory === "all" || activity.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || activity.difficulty === selectedDifficulty;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const filteredExams = exams.filter(exam => {
    const matchesCategory = selectedCategory === "all" || exam.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || exam.difficulty === selectedDifficulty;
    const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#000000] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-3 mb-6">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">Sistema de Aprendizado Elite</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Centro de
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
              Aprendizado
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            2.000 quizzes • 2.000 atividades • 2.000 provas
            <br />
            <span className="text-white font-semibold">Certificação automática e correção inteligente</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <BookOpen className="w-8 h-8 text-[#D4AF37] mb-3" />
            <div className="text-3xl font-black text-white mb-1">{quizzes.length}</div>
            <div className="text-gray-400 text-sm">Quizzes</div>
          </div>
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <Target className="w-8 h-8 text-[#D4AF37] mb-3" />
            <div className="text-3xl font-black text-white mb-1">{activities.length}</div>
            <div className="text-gray-400 text-sm">Atividades</div>
          </div>
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <Trophy className="w-8 h-8 text-[#D4AF37] mb-3" />
            <div className="text-3xl font-black text-white mb-1">{exams.length}</div>
            <div className="text-gray-400 text-sm">Provas</div>
          </div>
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <Award className="w-8 h-8 text-[#D4AF37] mb-3" />
            <div className="text-3xl font-black text-white mb-1">1.000+</div>
            <div className="text-gray-400 text-sm">Certificados</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("quizzes")}
            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
              activeTab === "quizzes"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-5 h-5 inline mr-2" />
            Quizzes ({filteredQuizzes.length})
          </button>
          <button
            onClick={() => setActiveTab("activities")}
            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
              activeTab === "activities"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            <Target className="w-5 h-5 inline mr-2" />
            Atividades ({filteredActivities.length})
          </button>
          <button
            onClick={() => setActiveTab("exams")}
            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
              activeTab === "exams"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            <Trophy className="w-5 h-5 inline mr-2" />
            Provas ({filteredExams.length})
          </button>
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Category | "all")}
              className="px-4 py-3 bg-black/50 border border-[#D4AF37]/20 rounded-xl text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as DifficultyLevel | "all")}
              className="px-4 py-3 bg-black/50 border border-[#D4AF37]/20 rounded-xl text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {difficulties.map(diff => (
                <option key={diff.value} value={diff.value}>{diff.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "quizzes" && filteredQuizzes.slice(0, 12).map(quiz => (
            <div
              key={quiz.id}
              className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  quiz.difficulty === "iniciante" ? "bg-green-500/20 text-green-400" :
                  quiz.difficulty === "intermediário" ? "bg-blue-500/20 text-blue-400" :
                  quiz.difficulty === "avançado" ? "bg-purple-500/20 text-purple-400" :
                  "bg-amber-500/20 text-amber-400"
                }`}>
                  {quiz.difficulty}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                {quiz.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{quiz.timeLimit} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  <span>{quiz.questions.length} questões</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#D4AF37] font-bold">
                  <Star className="w-4 h-4" />
                  <span>{quiz.points} pts</span>
                </div>
                <button className="px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black rounded-lg font-semibold transition-all flex items-center gap-2">
                  Iniciar
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {activeTab === "activities" && filteredActivities.slice(0, 12).map(activity => (
            <div
              key={activity.id}
              className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  activity.difficulty === "iniciante" ? "bg-green-500/20 text-green-400" :
                  activity.difficulty === "intermediário" ? "bg-blue-500/20 text-blue-400" :
                  activity.difficulty === "avançado" ? "bg-purple-500/20 text-purple-400" :
                  "bg-amber-500/20 text-amber-400"
                }`}>
                  {activity.difficulty}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                {activity.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {activity.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#D4AF37] font-bold">
                  <Star className="w-4 h-4" />
                  <span>{activity.points} pts</span>
                </div>
                <button className="px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black rounded-lg font-semibold transition-all flex items-center gap-2">
                  Começar
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {activeTab === "exams" && filteredExams.slice(0, 12).map(exam => (
            <div
              key={exam.id}
              className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  exam.difficulty === "iniciante" ? "bg-green-500/20 text-green-400" :
                  exam.difficulty === "intermediário" ? "bg-blue-500/20 text-blue-400" :
                  exam.difficulty === "avançado" ? "bg-purple-500/20 text-purple-400" :
                  "bg-amber-500/20 text-amber-400"
                }`}>
                  {exam.difficulty}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                {exam.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{exam.timeLimit} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  <span>{exam.questions.length} questões</span>
                </div>
              </div>
              {exam.certificateOnPass && (
                <div className="flex items-center gap-2 text-[#D4AF37] text-sm mb-4">
                  <Award className="w-4 h-4" />
                  <span>Certificado incluso</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#D4AF37] font-bold">
                  <Star className="w-4 h-4" />
                  <span>{exam.points} pts</span>
                </div>
                <button className="px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black rounded-lg font-semibold transition-all flex items-center gap-2">
                  Fazer Prova
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black rounded-full font-bold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105">
            Carregar Mais
          </button>
        </div>
      </div>
    </div>
  );
}
