'use client';

import { ActivityHistory } from '@/lib/types/progress';
import {
  BookOpen,
  Award,
  CheckCircle,
  TrendingUp,
  CheckSquare,
  Clock,
} from 'lucide-react';

interface ActivityTimelineProps {
  activities: ActivityHistory[];
}

const iconMap: Record<string, any> = {
  BookOpen,
  Award,
  CheckCircle,
  TrendingUp,
  CheckSquare,
};

const typeColors: Record<string, string> = {
  course: 'from-blue-500 to-cyan-600',
  medal: 'from-yellow-500 to-amber-600',
  quiz: 'from-green-500 to-emerald-600',
  level: 'from-purple-500 to-pink-600',
  activity: 'from-orange-500 to-red-600',
};

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Agora mesmo';
    if (diffInHours < 24) return `Há ${diffInHours}h`;
    if (diffInHours < 48) return 'Ontem';
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-6 h-6 text-yellow-500" />
        <div>
          <h3 className="text-xl font-bold text-white">Histórico de Atividades</h3>
          <p className="text-sm text-gray-400">Suas conquistas recentes</p>
        </div>
      </div>

      <div className="relative">
        {/* Linha vertical da timeline */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-purple-500 to-transparent" />

        <div className="space-y-4">
          {activities.map((activity, idx) => {
            const Icon = iconMap[activity.icon];
            const colorGradient = typeColors[activity.type];

            return (
              <div key={activity.id} className="relative pl-16">
                {/* Ícone na timeline */}
                <div
                  className={`absolute left-0 w-12 h-12 bg-gradient-to-br ${colorGradient} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Conteúdo */}
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:border-yellow-500/30 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-white font-semibold mb-1">{activity.title}</h4>
                      <p className="text-sm text-gray-400">{activity.description}</p>
                    </div>
                    {activity.xpGained > 0 && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-lg">
                        <TrendingUp className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs font-semibold text-yellow-500">
                          +{activity.xpGained} XP
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{formatDate(activity.timestamp)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ver mais */}
      <button className="w-full mt-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-yellow-500/30 rounded-xl text-white font-medium transition-all">
        Ver Histórico Completo
      </button>
    </div>
  );
}
