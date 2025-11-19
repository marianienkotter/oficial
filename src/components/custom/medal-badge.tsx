"use client";

import { Award } from 'lucide-react';
import { MedalType } from '@/lib/types/user';

interface MedalBadgeProps {
  medal: MedalType;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const MEDAL_CONFIG = {
  iniciante: {
    color: 'from-gray-400 to-gray-600',
    icon: '🥉',
    label: 'Iniciante',
  },
  bronze: {
    color: 'from-orange-700 to-orange-900',
    icon: '🥉',
    label: 'Bronze',
  },
  prata: {
    color: 'from-gray-300 to-gray-500',
    icon: '🥈',
    label: 'Prata',
  },
  ouro: {
    color: 'from-yellow-400 to-yellow-600',
    icon: '🥇',
    label: 'Ouro',
  },
  diamante: {
    color: 'from-cyan-400 to-blue-600',
    icon: '💎',
    label: 'Diamante',
  },
};

export function MedalBadge({ medal, size = 'md', showLabel = true }: MedalBadgeProps) {
  const config = MEDAL_CONFIG[medal];
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${sizeClasses[size]} bg-gradient-to-br ${config.color} rounded-full flex items-center justify-center shadow-lg`}>
        <span>{config.icon}</span>
      </div>
      {showLabel && (
        <span className="text-white font-bold text-sm">{config.label}</span>
      )}
    </div>
  );
}
