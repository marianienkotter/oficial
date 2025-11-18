"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Lock, ArrowLeft, Clock, Star } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { PlanLockModal } from "@/components/custom/plan-lock-modal";

export default function VideoPlayerPage() {
  const { user, hasAccess } = useAuth();
  const [showLockModal, setShowLockModal] = useState(false);

  const videos = [
    {
      id: "1",
      title: "Introdução ao Curso de Finanças",
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
      duration: "15:30",
      isPremium: false
    },
    {
      id: "2",
      title: "Estratégias de Investimento Avançadas",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      duration: "25:45",
      isPremium: true
    },
    {
      id: "3",
      title: "Como Criar um Portfólio Diversificado",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      duration: "18:20",
      isPremium: true
    },
    {
      id: "4",
      title: "Mindset Milionário - Aula 1",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      duration: "22:15",
      isPremium: true
    }
  ];

  const handleVideoClick = (isPremium: boolean) => {
    if (isPremium && !hasAccess("premium")) {
      setShowLockModal(true);
    } else {
      // Reproduzir vídeo
      alert("Reproduzindo vídeo...");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/dashboard" className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Voltar</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <img
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                alt="Elite Life"
                className="h-10 w-10 object-contain rounded-lg"
              />
              <h1 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                ELITE LIFE
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
            Biblioteca de Vídeos
          </h1>
          <p className="text-gray-400">
            Assista aos melhores conteúdos sobre finanças e desenvolvimento pessoal
          </p>
        </div>

        {/* User Plan Info */}
        {user && (
          <div className="mb-8 bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Seu Plano Atual</p>
                <p className="text-lg font-bold text-[#D4AF37] capitalize">{user.plan}</p>
              </div>
              {user.plan === "free" && (
                <Link
                  href="/plans"
                  className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-full font-bold hover:shadow-lg transition-all text-sm"
                >
                  Fazer Upgrade
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleVideoClick(video.isPremium)}
              className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all cursor-pointer hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Premium Badge */}
                {video.isPremium && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center gap-1">
                    <Lock className="w-3 h-3 text-black" />
                    <span className="text-xs font-bold text-black">Premium</span>
                  </div>
                )}

                {/* Duration */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded-lg flex items-center gap-1">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-semibold">{video.duration}</span>
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    {video.isPremium && !hasAccess("premium") ? (
                      <Lock className="w-8 h-8 text-black" />
                    ) : (
                      <Play className="w-8 h-8 text-black ml-1" />
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Star className="w-4 h-4 text-[#D4AF37]" />
                  <span>4.9/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Lock Modal */}
      <PlanLockModal
        isOpen={showLockModal}
        onClose={() => setShowLockModal(false)}
      />
    </div>
  );
}
