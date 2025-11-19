"use client";

import { useState } from 'react';
import { Lock, Play, CheckCircle2 } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  duration?: string;
  isLocked: boolean;
  isCompleted?: boolean;
  onUnlock?: () => void;
}

export function VideoPlayer({ 
  videoId, 
  title, 
  duration, 
  isLocked, 
  isCompleted = false,
  onUnlock 
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extrair ID do vídeo do YouTube da URL
  const getYouTubeId = (url: string) => {
    // Suporta formatos: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/shorts/ID
    const patterns = [
      /youtu\.be\/([^?]+)/,
      /youtube\.com\/watch\?v=([^&]+)/,
      /youtube\.com\/shorts\/([^?]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    
    return url; // Retorna o ID direto se já estiver no formato correto
  };

  const embedId = getYouTubeId(videoId);

  if (isLocked) {
    return (
      <div className="relative bg-[#2A2A2A] rounded-xl overflow-hidden group cursor-pointer hover:bg-[#3A3A3A] transition-all border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
        {/* Thumbnail bloqueado */}
        <div className="relative aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]">
          <img
            src={`https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover opacity-30 blur-sm"
            onError={(e) => {
              // Fallback para thumbnail de qualidade média se maxres não existir
              e.currentTarget.src = `https://img.youtube.com/vi/${embedId}/hqdefault.jpg`;
            }}
          />
          
          {/* Overlay de bloqueio */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center mb-3 shadow-2xl group-hover:scale-110 transition-transform">
              <Lock className="w-8 h-8 text-[#0B0B0B]" />
            </div>
            <p className="text-white font-bold text-lg mb-1">Conteúdo Bloqueado</p>
            <p className="text-[#9A9A9A] text-sm text-center px-4">
              Assine um plano para desbloquear
            </p>
          </div>

          {/* Badge Premium */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 px-3 py-1 rounded-full flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#0B0B0B]" />
            <span className="text-xs font-bold text-[#0B0B0B]">PREMIUM</span>
          </div>

          {/* Duração */}
          {duration && (
            <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white font-medium">
              {duration}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-white font-medium line-clamp-2 mb-2">{title}</h3>
          <button
            onClick={onUnlock}
            className="w-full py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
          >
            Desbloquear Agora
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#2A2A2A] rounded-xl overflow-hidden group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
      {/* Player ou Thumbnail */}
      <div className="relative aspect-video bg-black">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${embedId}/hqdefault.jpg`;
              }}
            />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
              >
                <Play className="w-10 h-10 text-[#0B0B0B] ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Duração */}
            {duration && (
              <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white font-medium">
                {duration}
              </div>
            )}

            {/* Badge de Concluído */}
            {isCompleted && (
              <div className="absolute top-3 right-3 bg-green-500 px-3 py-1 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-white" />
                <span className="text-xs font-bold text-white">CONCLUÍDO</span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-medium line-clamp-2">{title}</h3>
      </div>
    </div>
  );
}
