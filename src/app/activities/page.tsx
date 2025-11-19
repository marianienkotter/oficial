'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Clock, Target, Lock, CheckCircle, PlayCircle, AlertCircle, Upload } from 'lucide-react';
import { activities, type PlanType, type Activity } from '@/lib/activities';

export default function ActivitiesPage() {
  // Simulando plano do usuário - em produção viria do contexto/auth
  const [userPlan] = useState<PlanType>('free');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedLockedActivity, setSelectedLockedActivity] = useState<Activity | null>(null);

  // Simulando progresso do usuário - APENAS atividades REALMENTE completadas
  const [userProgress] = useState<Record<string, { status: string; score?: number; completed: boolean }>>({}); // Vazio = nenhuma atividade feita ainda

  const canAccess = (activity: Activity) => {
    const planHierarchy: Record<PlanType, number> = {
      free: 0,
      pro: 1,
      pro_plus: 2,
      elite: 3,
      annual: 3
    };
    return planHierarchy[userPlan] >= planHierarchy[activity.requiredPlan];
  };

  const getStatusIcon = (activityId: string) => {
    const progress = userProgress[activityId];
    if (!progress || !progress.completed) return <PlayCircle className="w-5 h-5 text-gray-400" />;
    if (progress.status === 'completed') {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    if (progress.status === 'pending_review') {
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
    return <PlayCircle className="w-5 h-5 text-gray-400" />;
  };

  const getStatusText = (activityId: string) => {
    const progress = userProgress[activityId];
    if (!progress || !progress.completed) return 'Não iniciado';
    if (progress.status === 'completed') return 'Concluído';
    if (progress.status === 'pending_review') return 'Aguardando Correção';
    return 'Em andamento';
  };

  const getCompletionPercentage = (activityId: string) => {
    const progress = userProgress[activityId];
    if (!progress || !progress.completed) return 0;
    return 100; // Se completou, é 100%
  };

  const handleLockedClick = (activity: Activity) => {
    setSelectedLockedActivity(activity);
    setShowUpgradeModal(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante': return 'text-green-400';
      case 'Intermediário': return 'text-yellow-400';
      case 'Avançado': return 'text-orange-400';
      case 'Elite': return 'text-[#D4AF37]';
      default: return 'text-gray-400';
    }
  };

  const getActivityTypeIcon = (activity: Activity) => {
    const hasUpload = activity.questions.some(q => q.type === 'upload');
    const hasEssay = activity.questions.some(q => q.type === 'essay');
    
    if (hasUpload) return <Upload className="w-4 h-4" />;
    if (hasEssay) return <FileText className="w-4 h-4" />;
    return <Target className="w-4 h-4" />;
  };

  // Calcular XP total APENAS de atividades completadas
  const totalXP = Object.entries(userProgress).reduce((acc, [activityId, progress]) => {
    if (progress.completed && progress.status === 'completed') {
      const activity = activities.find(a => a.id === activityId);
      return acc + (activity?.xpReward || 0);
    }
    return acc;
  }, 0);

  // Contar atividades completadas
  const completedActivities = Object.values(userProgress).filter(
    p => p.completed && p.status === 'completed'
  ).length;

  // Contar atividades aguardando correção
  const pendingReview = Object.values(userProgress).filter(
    p => p.completed && p.status === 'pending_review'
  ).length;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-12 h-12 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-yellow-600 bg-clip-text text-transparent">
              Atividades Práticas
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            Aplique seus conhecimentos em atividades práticas e receba feedback personalizado.
            Ganhe XP e medalhas ao completar cada desafio.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#D4AF37]/10 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Atividades Concluídas</p>
                <p className="text-2xl font-bold text-white">{completedActivities}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500/10 p-3 rounded-xl">
                <AlertCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Aguardando Correção</p>
                <p className="text-2xl font-bold text-white">{pendingReview}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#D4AF37]/10 p-3 rounded-xl">
                <Target className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">XP de Atividades</p>
                <p className="text-2xl font-bold text-white">{totalXP} XP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => {
            const isLocked = !canAccess(activity);
            const progress = userProgress[activity.id];
            const completionPercentage = getCompletionPercentage(activity.id);

            return (
              <div
                key={activity.id}
                className={`group relative bg-gradient-to-br from-gray-900 to-black border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isLocked
                    ? 'border-gray-700 opacity-75 cursor-not-allowed'
                    : 'border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1'
                }`}
              >
                {/* Lock Overlay */}
                {isLocked && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                      <p className="text-white font-semibold mb-2">Conteúdo Bloqueado</p>
                      <p className="text-gray-400 text-sm mb-4">
                        Plano necessário: <span className="text-[#D4AF37] font-bold">{activity.requiredPlan.toUpperCase()}</span>
                      </p>
                      <button
                        onClick={() => handleLockedClick(activity)}
                        className="bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform"
                      >
                        Ver Planos
                      </button>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {activity.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar - Só aparece se tiver progresso */}
                  {progress && progress.completed && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">Progresso</span>
                        <span className="text-xs text-[#D4AF37] font-bold">{completionPercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#D4AF37] to-yellow-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${completionPercentage}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{activity.duration} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className={`w-4 h-4 ${getDifficultyColor(activity.difficulty)}`} />
                      <span className={`text-sm ${getDifficultyColor(activity.difficulty)}`}>
                        {activity.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getActivityTypeIcon(activity)}
                      <span className="text-sm text-gray-300">
                        {activity.autoCorrect ? 'Auto-corrigida' : 'Com feedback'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(activity.id)}
                      <span className="text-sm text-gray-300">{getStatusText(activity.id)}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold">
                      {activity.category}
                    </span>
                  </div>

                  {/* Action Button */}
                  {!isLocked && (
                    <Link href={`/activities/${activity.id}`}>
                      <button className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold py-3 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        {progress?.completed && progress.status === 'completed' ? (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            Ver Atividade
                          </>
                        ) : progress?.completed && progress.status === 'pending_review' ? (
                          <>
                            <AlertCircle className="w-5 h-5" />
                            Aguardando Correção
                          </>
                        ) : (
                          <>
                            <PlayCircle className="w-5 h-5" />
                            Iniciar Atividade
                          </>
                        )}
                      </button>
                    </Link>
                  )}
                </div>

                {/* XP Reward Badge */}
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-bold">
                  +{activity.xpReward} XP
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && selectedLockedActivity && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37] rounded-3xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowUpgradeModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="text-center">
              <Lock className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Conteúdo Exclusivo
              </h3>
              <p className="text-gray-400 mb-6">
                Esta atividade está disponível apenas para assinantes do plano{' '}
                <span className="text-[#D4AF37] font-bold">
                  {selectedLockedActivity.requiredPlan.toUpperCase()}
                </span>
              </p>

              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-2xl p-6 mb-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  Desbloqueie agora e tenha acesso a:
                </h4>
                <ul className="text-left space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    Todas as atividades práticas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    Feedback personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    Certificados de conclusão
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    XP e medalhas exclusivas
                  </li>
                </ul>
              </div>

              <Link href="/plans">
                <button className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform">
                  Ver Planos e Desbloquear
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
