'use client';

import { useState } from 'react';
import { FileText, Lock, Clock, Award, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import { generateExams } from '@/lib/content-generator';
import { Quiz } from '@/lib/quizzes';

export default function ExamsPage() {
  const [userPlan] = useState<'free' | 'pro' | 'pro_plus' | 'elite'>('free');
  const allExams = generateExams(2000);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filtrar provas
  const filteredExams = allExams.filter(exam => {
    if (selectedDifficulty !== 'all' && exam.difficulty !== selectedDifficulty) return false;
    if (selectedCategory !== 'all' && exam.category !== selectedCategory) return false;
    return true;
  });

  // Pegar categorias únicas
  const categories = Array.from(new Set(allExams.map(e => e.category)));

  const canAccess = (exam: Quiz) => {
    const planHierarchy = { free: 0, pro: 1, pro_plus: 2, elite: 3, annual: 3 };
    return planHierarchy[userPlan] >= planHierarchy[exam.requiredPlan];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-2xl">
              <FileText className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Provas Elite Life
              </h1>
              <p className="text-gray-400 mt-2">
                2.000 provas para certificar seu conhecimento
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <p className="text-2xl font-bold text-white">2.000</p>
                  <p className="text-gray-400 text-sm">Provas Disponíveis</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <p className="text-2xl font-bold text-white">Certificado</p>
                  <p className="text-gray-400 text-sm">Ao passar (nota ≥ 7)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold text-white">Auto-Correção</p>
                  <p className="text-gray-400 text-sm">Resultado imediato</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-white">XP Bônus</p>
                  <p className="text-gray-400 text-sm">Ganhe mais XP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Filtro de Dificuldade */}
            <div>
              <label className="text-white font-semibold mb-2 block">
                Dificuldade
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="all">Todas</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
                <option value="Elite">Elite</option>
              </select>
            </div>

            {/* Filtro de Categoria */}
            <div>
              <label className="text-white font-semibold mb-2 block">
                Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="all">Todas</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Mostrando {filteredExams.length} de {allExams.length} provas
          </p>
        </div>
      </div>

      {/* Grid de Provas */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.slice(0, 50).map((exam) => {
            const isLocked = !canAccess(exam);
            const difficultyColors = {
              'Iniciante': 'from-green-500 to-emerald-600',
              'Intermediário': 'from-blue-500 to-cyan-600',
              'Avançado': 'from-purple-500 to-pink-600',
              'Elite': 'from-[#D4AF37] to-amber-600'
            };

            return (
              <div
                key={exam.id}
                className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isLocked
                    ? 'border-gray-700 opacity-60'
                    : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:scale-105'
                }`}
              >
                {/* Badge de Dificuldade */}
                <div className={`bg-gradient-to-r ${difficultyColors[exam.difficulty]} px-4 py-2`}>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-sm">
                      {exam.difficulty}
                    </span>
                    {isLocked && <Lock className="w-4 h-4 text-white" />}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {exam.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {exam.description}
                  </p>

                  {/* Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <FileText className="w-4 h-4 text-[#D4AF37]" />
                      <span>{exam.questions.length} questões</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <span>{exam.duration} minutos</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Award className="w-4 h-4 text-[#D4AF37]" />
                      <span>{exam.xpReward} XP</span>
                    </div>
                  </div>

                  {/* Categoria */}
                  <div className="mb-4">
                    <span className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold px-3 py-1 rounded-full">
                      {exam.category}
                    </span>
                  </div>

                  {/* Botão */}
                  {isLocked ? (
                    <button className="w-full bg-gray-700 text-gray-400 py-3 rounded-xl font-semibold cursor-not-allowed">
                      Bloqueado - Upgrade Necessário
                    </button>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                      Iniciar Prova
                    </button>
                  )}
                </div>

                {/* Overlay de Bloqueio */}
                {isLocked && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                      <p className="text-white font-semibold">Conteúdo Bloqueado</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Plano {exam.requiredPlan.toUpperCase()} necessário
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Aviso de Mais Conteúdo */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border border-[#D4AF37]/30 rounded-2xl p-8 inline-block">
            <FileText className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <p className="text-white font-semibold text-lg mb-2">
              Mostrando 50 de {filteredExams.length} provas
            </p>
            <p className="text-gray-400 text-sm">
              Role para ver mais ou ajuste os filtros acima
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
