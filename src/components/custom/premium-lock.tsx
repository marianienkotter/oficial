"use client";

import { Lock, Crown, Sparkles } from 'lucide-react';
import { ReactNode } from 'react';

interface PremiumLockProps {
  isLocked: boolean;
  children: ReactNode;
  onUpgradeClick?: () => void;
  message?: string;
  blur?: boolean;
  showBadge?: boolean;
}

/**
 * Componente de cadeado premium reutilizável
 * Bloqueia conteúdo para usuários free
 */
export function PremiumLock({
  isLocked,
  children,
  onUpgradeClick,
  message = "Disponível apenas para assinantes",
  blur = true,
  showBadge = true
}: PremiumLockProps) {
  if (!isLocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative group">
      {/* Conteúdo com blur */}
      <div className={`${blur ? 'blur-sm opacity-40' : 'opacity-60'} pointer-events-none select-none`}>
        {children}
      </div>

      {/* Overlay de bloqueio */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 transition-all duration-300">
        {/* Badge Premium */}
        {showBadge && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
            <Crown className="w-3.5 h-3.5 text-[#0B0B0B]" />
            <span className="text-xs font-bold text-[#0B0B0B]">PREMIUM</span>
          </div>
        )}

        {/* Ícone de cadeado */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <Lock className="w-10 h-10 text-[#0B0B0B]" />
        </div>

        {/* Mensagem */}
        <p className="text-white font-bold text-lg mb-2 text-center px-4">
          {message}
        </p>
        <p className="text-[#9A9A9A] text-sm mb-6 text-center px-4">
          Assine um plano para desbloquear
        </p>

        {/* Botão de upgrade */}
        {onUpgradeClick && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUpgradeClick();
            }}
            className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Ver Planos
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Componente de card de vídeo com cadeado
 */
interface LockedVideoCardProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  duration?: string;
  category?: string;
  isLocked: boolean;
  onUpgradeClick?: () => void;
  onVideoClick?: () => void;
}

export function LockedVideoCard({
  videoId,
  title,
  thumbnail,
  duration,
  category,
  isLocked,
  onUpgradeClick,
  onVideoClick
}: LockedVideoCardProps) {
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  const handleClick = () => {
    if (isLocked && onUpgradeClick) {
      onUpgradeClick();
    } else if (!isLocked && onVideoClick) {
      onVideoClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative bg-[#2A2A2A] rounded-xl overflow-hidden transition-all duration-300 ${
        isLocked ? 'cursor-pointer hover:scale-102' : 'cursor-pointer hover:scale-105'
      }`}
    >
      {/* Thumbnail */}
      <div className="aspect-video relative">
        <img
          src={thumbnailUrl}
          alt={title}
          className={`w-full h-full object-cover ${isLocked ? 'opacity-40 blur-sm' : ''}`}
        />
        
        {/* Overlay de bloqueio */}
        {isLocked && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-2xl">
                <Lock className="w-8 h-8 text-[#0B0B0B]" />
              </div>
              <p className="text-white font-bold text-sm">Conteúdo Premium</p>
            </div>
          </div>
        )}

        {/* Badge de duração */}
        {!isLocked && duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-medium">
            {duration}
          </div>
        )}

        {/* Badge Premium */}
        {isLocked && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 px-2 py-1 rounded-full flex items-center gap-1">
            <Crown className="w-3 h-3 text-[#0B0B0B]" />
            <span className="text-xs font-bold text-[#0B0B0B]">PREMIUM</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p className={`text-white text-sm font-medium line-clamp-2 ${isLocked ? 'opacity-60' : ''}`}>
          {title}
        </p>
        {category && (
          <p className="text-[#9A9A9A] text-xs mt-1">{category}</p>
        )}
      </div>
    </div>
  );
}
