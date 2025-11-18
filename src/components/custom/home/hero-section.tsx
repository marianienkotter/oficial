"use client";

import { User, Flame, Award, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  userName: string;
  userAvatar: string;
  userLevel: number;
  userXP: number;
  xpToNextLevel: number;
  streak: number;
  totalMedals: number;
}

export function HeroSection({
  userName,
  userAvatar,
  userLevel,
  userXP,
  xpToNextLevel,
  streak,
  totalMedals
}: HeroSectionProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  const progressPercentage = (userXP / xpToNextLevel) * 100;

  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/20 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={userAvatar}
              alt={userName}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#D4AF37] shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full px-3 py-1 flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-[#0B0B0B]" />
              <span className="text-sm font-bold text-[#0B0B0B]">{userLevel}</span>
            </div>
          </div>
          
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {getGreeting()}, {userName}!
            </h1>
            <p className="text-[#9A9A9A] text-sm sm:text-base">
              Continue sua jornada de transformação
            </p>
            
            {/* XP Progress */}
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[#9A9A9A]">Nível {userLevel}</span>
                <span className="text-xs text-[#D4AF37] font-bold">{userXP} / {xpToNextLevel} XP</span>
              </div>
              <div className="w-full bg-[#2A2A2A] rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#D4AF37] to-amber-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-4">
          <div className="bg-[#2A2A2A] rounded-xl p-4 text-center min-w-[80px] hover:bg-[#3A3A3A] transition-all">
            <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
            <div className="text-2xl font-bold text-white">{streak}</div>
            <div className="text-xs text-[#9A9A9A]">dias</div>
          </div>
          
          <div className="bg-[#2A2A2A] rounded-xl p-4 text-center min-w-[80px] hover:bg-[#3A3A3A] transition-all">
            <Award className="w-6 h-6 text-[#D4AF37] mx-auto mb-1" />
            <div className="text-2xl font-bold text-white">{totalMedals}</div>
            <div className="text-xs text-[#9A9A9A]">medalhas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
