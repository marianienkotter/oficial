"use client";

import { useState } from "react";
import { 
  GraduationCap, BookOpen, Trophy, Star, Lock, Check, 
  ChevronRight, Play, Award, Target, Brain, DollarSign,
  TrendingUp, Zap, Clock, Users, X, ChevronDown, Flame
} from "lucide-react";
import { allTracks, activitiesBank, quizzesBank, gamificationBadges } from "@/lib/data/courses-data";
import { Track, Course, Activity } from "@/lib/types/courses";

interface CoursesSectionProps {
  userPlan: "free" | "paid" | "influencer";
  onClose: () => void;
}

export default function CoursesSection({ userPlan, onClose }: CoursesSectionProps) {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<"iniciante" | "intermediario" | "avancado" | "especializacao">("iniciante");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showActivities, setShowActivities] = useState(false);
  const [showQuizzes, setShowQuizzes] = useState(false);

  const isLocked = userPlan === "free";

  const trackIcons: any = {
    financas: DollarSign,
    mentalidade: Brain,
    produtividade: Zap,
    marketing: TrendingUp,
    desenvolvimento: Target
  };

  if (isLocked) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4">
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] rounded-3xl p-8 max-w-2xl w-full border-2 border-[#D4AF37]/30">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-[#0B0B0B]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Área Exclusiva para Assinantes
            </h2>
            <p className="text-[#9A9A9A] text-lg mb-8">
              Desbloqueie acesso a mais de 100 cursos profissionais, 1000+ atividades práticas e 2000+ quizzes baseados em Harvard, MIT, Stanford e outras universidades de elite.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#2A2A2A] rounded-xl p-4">
                <GraduationCap className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white font-bold">100+ Cursos</p>
                <p className="text-sm text-[#9A9A9A]">Profissionais</p>
              </div>
              <div className="bg-[#2A2A2A] rounded-xl p-4">
                <BookOpen className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white font-bold">1000+ Atividades</p>
                <p className="text-sm text-[#9A9A9A]">Práticas</p>
              </div>
              <div className="bg-[#2A2A2A] rounded-xl p-4">
                <Trophy className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white font-bold">2000+ Quizzes</p>
                <p className="text-sm text-[#9A9A9A]">Profissionais</p>
              </div>
              <div className="bg-[#2A2A2A] rounded-xl p-4">
                <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-white font-bold">Certificados</p>
                <p className="text-sm text-[#9A9A9A]">Reconhecidos</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-4 bg-[#2A2A2A] text-white rounded-xl font-bold hover:bg-[#3A3A3A] transition-all"
              >
                Voltar
              </button>
              <button
                onClick={() => window.location.href = "#planos"}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Assinar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Visualização de Curso Individual
  if (selectedCourse) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 overflow-y-auto">
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] rounded-3xl p-8 max-w-6xl w-full border-2 border-[#D4AF37]/30 my-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${allTracks.find(t => t.id === selectedCourse.trackId)?.color} rounded-xl flex items-center justify-center`}>
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedCourse.title}</h2>
                  <p className="text-sm text-[#D4AF37]">{selectedCourse.university}</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setSelectedCourse(null)} 
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-white font-bold">{selectedCourse.duration}h</p>
              <p className="text-xs text-[#9A9A9A]">Duração</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <BookOpen className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-white font-bold">{selectedCourse.modules.length}</p>
              <p className="text-xs text-[#9A9A9A]">Módulos</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <Target className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-white font-bold">{selectedCourse.activities.length}</p>
              <p className="text-xs text-[#9A9A9A]">Atividades</p>
            </div>
            <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
              <Trophy className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-white font-bold">Certificado</p>
              <p className="text-xs text-[#9A9A9A]">Incluído</p>
            </div>
          </div>

          {/* Descrição */}
          <div className="bg-[#2A2A2A] rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-3">Sobre o Curso</h3>
            <p className="text-[#9A9A9A] leading-relaxed mb-4">{selectedCourse.longDescription}</p>
          </div>

          {/* Objetivos */}
          <div className="bg-[#2A2A2A] rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Objetivos de Aprendizagem</h3>
            <div className="grid grid-cols-2 gap-3">
              {selectedCourse.objectives.map((obj, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#9A9A9A] text-sm">{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Módulos */}
          <div className="bg-[#2A2A2A] rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Conteúdo do Curso</h3>
            <div className="space-y-3">
              {selectedCourse.modules.map((module, index) => (
                <div key={module.id} className="bg-[#1A1A1A] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold">Módulo {index + 1}: {module.title}</h4>
                    <span className="text-sm text-[#D4AF37]">{module.lessons.length} aulas</span>
                  </div>
                  <p className="text-sm text-[#9A9A9A] mb-3">{module.description}</p>
                  <div className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div key={lesson.id} className="flex items-center gap-3 p-2 bg-[#2A2A2A] rounded-lg">
                        <Play className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm text-white flex-1">{lesson.title}</span>
                        <span className="text-xs text-[#9A9A9A]">{lesson.duration}min</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedCourse(null)}
              className="flex-1 px-6 py-4 bg-[#2A2A2A] text-white rounded-xl font-bold hover:bg-[#3A3A3A] transition-all"
            >
              Voltar
            </button>
            <button
              className="flex-1 px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Começar Curso
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Visualização de Trilha Individual
  if (selectedTrack) {
    const TrackIcon = trackIcons[selectedTrack.id] || GraduationCap;
    const courses = selectedTrack.courses[selectedLevel];

    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 overflow-y-auto">
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] rounded-3xl p-8 max-w-6xl w-full border-2 border-[#D4AF37]/30 my-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${selectedTrack.color} rounded-xl flex items-center justify-center`}>
                  <TrackIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedTrack.title}</h2>
                  <p className="text-sm text-[#9A9A9A]">{selectedTrack.description}</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setSelectedTrack(null)} 
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Introdução */}
          <div className="bg-[#2A2A2A] rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-3">Sobre Esta Trilha</h3>
            <p className="text-[#9A9A9A] leading-relaxed">{selectedTrack.introduction}</p>
          </div>

          {/* Seletor de Nível */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {(["iniciante", "intermediario", "avancado", "especializacao"] as const).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
                  selectedLevel === level
                    ? `bg-gradient-to-r ${selectedTrack.color} text-white`
                    : "bg-[#2A2A2A] text-[#9A9A9A] hover:bg-[#3A3A3A]"
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>

          {/* Lista de Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="bg-[#2A2A2A] rounded-xl p-6 hover:bg-[#3A3A3A] transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {course.title}
                  </h4>
                  <ChevronRight className="w-5 h-5 text-[#9A9A9A] group-hover:text-[#D4AF37] transition-colors" />
                </div>
                <p className="text-sm text-[#9A9A9A] mb-4">{course.shortDescription}</p>
                <div className="flex items-center gap-4 text-xs text-[#9A9A9A]">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.modules.length} módulos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>Certificado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {courses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#9A9A9A] text-lg">
                Cursos deste nível em desenvolvimento. Em breve!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Visualização Principal - Todas as Trilhas
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] rounded-3xl p-8 max-w-7xl w-full border-2 border-[#D4AF37]/30 my-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Trilhas de Aprendizagem</h2>
            <p className="text-[#9A9A9A]">Escolha sua trilha e comece sua transformação</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-[#D4AF37] transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
            <GraduationCap className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">100+</p>
            <p className="text-sm text-[#9A9A9A]">Cursos</p>
          </div>
          <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
            <BookOpen className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">1000+</p>
            <p className="text-sm text-[#9A9A9A]">Atividades</p>
          </div>
          <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
            <Trophy className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">2000+</p>
            <p className="text-sm text-[#9A9A9A]">Quizzes</p>
          </div>
          <div className="bg-[#2A2A2A] rounded-xl p-4 text-center">
            <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">Elite</p>
            <p className="text-sm text-[#9A9A9A]">Certificados</p>
          </div>
        </div>

        {/* Trilhas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTracks.map((track) => {
            const TrackIcon = trackIcons[track.id] || GraduationCap;
            return (
              <div
                key={track.id}
                onClick={() => setSelectedTrack(track)}
                className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:scale-105 transition-all cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${track.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <TrackIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {track.title}
                </h3>
                <p className="text-[#9A9A9A] mb-4">{track.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#D4AF37]">4 níveis disponíveis</span>
                  <ChevronRight className="w-5 h-5 text-[#9A9A9A] group-hover:text-[#D4AF37] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Botões Extras */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button
            onClick={() => setShowActivities(true)}
            className="px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Target className="w-5 h-5" />
            Ver Todas as Atividades ({activitiesBank.length})
          </button>
          <button
            onClick={() => setShowQuizzes(true)}
            className="px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Trophy className="w-5 h-5" />
            Ver Todos os Quizzes ({quizzesBank.length})
          </button>
        </div>
      </div>
    </div>
  );
}
