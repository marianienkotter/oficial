"use client";

import { Sparkles, TrendingUp, Star, Zap } from "lucide-react";

interface RecommendedItem {
  id: string;
  type: "course" | "video" | "activity" | "quiz";
  title: string;
  thumbnail: string;
  tag: string;
  duration?: string;
  points?: number;
}

interface RecommendedSectionProps {
  items: RecommendedItem[];
}

export function RecommendedSection({ items }: RecommendedSectionProps) {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Recomendado":
        return "from-[#D4AF37] to-amber-600";
      case "Popular":
        return "from-pink-500 to-rose-600";
      case "Baseado no seu progresso":
        return "from-blue-500 to-cyan-600";
      default:
        return "from-purple-500 to-indigo-600";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course":
        return <Star className="w-4 h-4" />;
      case "video":
        return <TrendingUp className="w-4 h-4" />;
      case "activity":
        return <Zap className="w-4 h-4" />;
      case "quiz":
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-8 h-8 text-[#D4AF37]" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Recomendados para Você</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group cursor-pointer hover:scale-105"
          >
            <div className="relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className={`absolute top-3 right-3 bg-gradient-to-r ${getTagColor(item.tag)} px-3 py-1 rounded-full flex items-center gap-1`}>
                {getTypeIcon(item.type)}
                <span className="text-xs font-bold text-white">{item.tag}</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-white font-semibold mb-2 line-clamp-2">{item.title}</h3>
              
              <div className="flex items-center justify-between text-sm">
                {item.duration && (
                  <span className="text-[#9A9A9A]">{item.duration}</span>
                )}
                {item.points && (
                  <span className="text-[#D4AF37] font-bold">+{item.points} XP</span>
                )}
              </div>

              <button className="w-full mt-3 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl font-medium transition-all">
                Ver Agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
