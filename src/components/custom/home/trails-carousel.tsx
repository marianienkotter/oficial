"use client";

import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useState } from "react";

interface Trail {
  id: string;
  name: string;
  thumbnail: string;
  progress: number;
  xpEarned: number;
  totalXP: number;
  medals: number;
  color: string;
}

interface TrailsCarouselProps {
  trails: Trail[];
}

export function TrailsCarousel({ trails }: TrailsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % trails.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + trails.length) % trails.length);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Minhas Trilhas</h2>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="p-2 bg-[#2A2A2A] rounded-xl hover:bg-[#3A3A3A] transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={next}
            className="p-2 bg-[#2A2A2A] rounded-xl hover:bg-[#3A3A3A] transition-all"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {trails.map((trail) => (
          <div
            key={trail.id}
            className={`bg-gradient-to-br ${trail.color} rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all group cursor-pointer hover:scale-105`}
          >
            <img
              src={trail.thumbnail}
              alt={trail.name}
              className="w-full h-32 object-cover rounded-xl mb-4"
            />
            
            <h3 className="text-lg font-bold text-white mb-2">{trail.name}</h3>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-white/70">Progresso</span>
                <span className="text-xs text-white font-bold">{trail.progress}%</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: `${trail.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm mb-4">
              <div>
                <div className="text-white font-bold">{trail.xpEarned} XP</div>
                <div className="text-white/70 text-xs">de {trail.totalXP}</div>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-white font-bold">{trail.medals}</span>
              </div>
            </div>

            <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all">
              Continuar Trilha
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
