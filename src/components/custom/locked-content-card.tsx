"use client";

import { useState } from "react";
import { Lock, Crown } from "lucide-react";
import { SejaElitePopup } from "./seja-elite-popup";

interface LockedContentCardProps {
  title: string;
  description: string;
  requiredPlan: "pro" | "pro-plus" | "elite";
  currentPlan: "free" | "pro" | "pro-plus" | "elite";
  thumbnail?: string;
}

export function LockedContentCard({
  title,
  description,
  requiredPlan,
  currentPlan,
  thumbnail
}: LockedContentCardProps) {
  const [showPopup, setShowPopup] = useState(false);

  const planHierarchy = {
    free: 0,
    pro: 1,
    "pro-plus": 2,
    elite: 3
  };

  const isLocked = planHierarchy[currentPlan] < planHierarchy[requiredPlan];

  const handleClick = () => {
    if (isLocked) {
      setShowPopup(true);
    }
  };

  const planNames = {
    pro: "Pro",
    "pro-plus": "Pro Plus",
    elite: "Elite"
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl overflow-hidden border border-[#D4AF37]/20 transition-all ${
          isLocked
            ? "cursor-pointer hover:border-[#D4AF37]/50 hover:scale-105"
            : "cursor-default"
        }`}
      >
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            className={`w-full h-40 object-cover ${isLocked ? "opacity-50" : ""}`}
          />
        )}

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className={`text-xl font-bold ${isLocked ? "text-gray-400" : "text-white"}`}>
              {title}
            </h3>
            {isLocked && (
              <div className="flex items-center gap-2 bg-[#D4AF37]/20 px-3 py-1 rounded-full">
                <Lock className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs text-[#D4AF37] font-bold">
                  {planNames[requiredPlan]}
                </span>
              </div>
            )}
          </div>

          <p className={`text-sm mb-4 ${isLocked ? "text-gray-500" : "text-gray-300"}`}>
            {description}
          </p>

          {isLocked && (
            <button
              onClick={handleClick}
              className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2 animate-pulse-glow"
            >
              <Crown className="w-5 h-5" />
              Desbloquear Agora
            </button>
          )}
        </div>

        {isLocked && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="text-center p-6">
              <Lock className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
              <p className="text-white font-bold text-lg mb-2">Conteúdo Bloqueado</p>
              <p className="text-gray-300 text-sm mb-4">
                Assine o plano {planNames[requiredPlan]} para acessar
              </p>
              <div className="inline-flex items-center gap-2 bg-[#D4AF37] px-4 py-2 rounded-full text-black font-bold text-sm">
                <Crown className="w-4 h-4" />
                Clique para desbloquear
              </div>
            </div>
          </div>
        )}
      </div>

      <SejaElitePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        trigger="locked-content"
      />
    </>
  );
}
