"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { User, LogOut, Edit, Sparkles, Crown } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Header */}
      <header className="relative z-10 border-b border-[#D4AF37]/20 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full group-hover:bg-[#D4AF37]/30 transition-all" />
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                  alt="Elite Life Logo"
                  className="relative h-12 w-12 object-contain rounded-lg drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                />
              </div>
              <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider">
                ELITE LIFE
              </h1>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/profile/edit"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] rounded-lg font-semibold hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all"
              >
                <Edit className="w-4 h-4" />
                <span className="hidden sm:inline">Editar Perfil</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg font-semibold hover:bg-red-500/20 hover:border-red-500 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-600 p-1">
                  <div className="w-full h-full rounded-full bg-[#0D0D0D] flex items-center justify-center overflow-hidden">
                    {user.photo_url ? (
                      <img
                        src={user.photo_url}
                        alt={user.nome || "Usuário"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-12 h-12 text-gray-600" />
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-black text-white">
                    {user.nome ? `Olá, ${user.nome}!` : "Bem-vindo(a)!"}
                  </h2>
                  <Crown className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <p className="text-gray-400 mb-4">
                  {user.idade ? `${user.idade} anos` : "Complete seu perfil para uma experiência personalizada"}
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg">
                    <span className="text-[#D4AF37] font-semibold text-sm">{user.email}</span>
                  </div>
                  {user.telefone && (
                    <div className="px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg">
                      <span className="text-[#D4AF37] font-semibold text-sm">{user.telefone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/learning"
            className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
              Área de Aprendizado
            </h3>
            <p className="text-gray-400 text-sm">
              Acesse quizzes, atividades e provas
            </p>
          </Link>

          <Link
            href="/books"
            className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
              Biblioteca de Livros
            </h3>
            <p className="text-gray-400 text-sm">
              Recomendações de leitura premium
            </p>
          </Link>

          <Link
            href="/movies"
            className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
              Cinema Elite
            </h3>
            <p className="text-gray-400 text-sm">
              Filmes e séries recomendados
            </p>
          </Link>
        </div>

        {/* Profile Completion */}
        {(!user.nome || !user.idade || !user.photo_url) && (
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-600/10 border border-[#D4AF37]/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  Complete seu perfil
                </h3>
                <p className="text-gray-400 mb-4">
                  Adicione suas informações para uma experiência personalizada na Elite Life
                </p>
                <Link
                  href="/profile/edit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-xl font-bold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105"
                >
                  <Edit className="w-5 h-5" />
                  Completar agora
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
