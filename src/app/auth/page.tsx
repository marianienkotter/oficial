"use client";

import Link from "next/link";
import { Crown, Sparkles, LogIn, UserPlus } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-md w-full relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#D4AF37]/30 blur-3xl rounded-full animate-pulse" />
              <img
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                alt="Elite Life"
                className="relative w-24 h-24 object-contain rounded-2xl drop-shadow-[0_0_50px_rgba(212,175,55,0.9)]"
              />
            </div>
          </div>
          
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider mb-3">
            ELITE LIFE
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
            <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">
            Bem-vindo(a) à Elite Life
          </h2>
          <p className="text-gray-400 text-lg">
            Acesse sua conta ou crie sua jornada agora.
          </p>
        </div>

        {/* Card de Autenticação */}
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10">
          <div className="space-y-4">
            {/* Botão Entrar */}
            <Link
              href="/auth/login"
              className="group w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
                  <LogIn className="w-5 h-5" />
                </div>
                <span>Entrar</span>
              </div>
              <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
            </Link>

            {/* Divisor */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
              <span className="text-gray-500 text-sm font-semibold">OU</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            </div>

            {/* Botão Criar Conta */}
            <Link
              href="/auth/signup"
              className="group w-full flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] text-[#D4AF37] rounded-2xl font-bold text-lg hover:bg-[#D4AF37] hover:text-black transition-all transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <UserPlus className="w-5 h-5" />
                </div>
                <span>Criar conta</span>
              </div>
              <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
            </Link>
          </div>

          {/* Badge Premium */}
          <div className="mt-6 pt-6 border-t border-[#D4AF37]/20">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span>Mais de <span className="text-[#D4AF37] font-bold">50 mil</span> vidas transformadas</span>
            </div>
          </div>
        </div>

        {/* Link para Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm font-semibold"
          >
            ← Voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
