"use client";

import { Lock, Crown } from 'lucide-react';
import { ReactNode } from 'react';

interface LockOverlayProps {
  isLocked: boolean;
  children: ReactNode;
  onUnlock?: () => void;
  message?: string;
  showButton?: boolean;
}

export function LockOverlay({ 
  isLocked, 
  children, 
  onUnlock, 
  message = "Recurso exclusivo. Assine um plano Elite Life para liberar.",
  showButton = true 
}: LockOverlayProps) {
  if (!isLocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Conteúdo com blur */}
      <div className="pointer-events-none opacity-40 blur-sm">
        {children}
      </div>

      {/* Overlay de bloqueio */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center p-6 rounded-xl">
        <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-2xl">
          <Lock className="w-10 h-10 text-[#0B0B0B]" />
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-5 h-5 text-[#D4AF37]" />
          <h3 className="text-white font-bold text-xl">Conteúdo Premium</h3>
        </div>
        
        <p className="text-[#9A9A9A] text-center mb-6 max-w-md">
          {message}
        </p>

        {showButton && onUnlock && (
          <button
            onClick={onUnlock}
            className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105"
          >
            Ver Planos
          </button>
        )}
      </div>
    </div>
  );
}
