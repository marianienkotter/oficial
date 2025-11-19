"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Preencha todos os campos");
      setLoading(false);
      return;
    }

    const result = await login(email, password);

    if (result.success) {
      router.push("/home");
    } else {
      setError(result.error || "Erro ao fazer login");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center group">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-[#D4AF37]/30 blur-3xl rounded-full animate-pulse" />
              <img
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                alt="Elite Life"
                className="relative w-24 h-24 object-contain rounded-2xl drop-shadow-[0_0_50px_rgba(212,175,55,0.9)] group-hover:drop-shadow-[0_0_70px_rgba(212,175,55,1)] transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider mb-2">
              ELITE LIFE
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
            </div>
          </Link>
        </div>

        {/* Card de Login */}
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/10">
          <h2 className="text-3xl font-black text-white mb-2 text-center">
            Bem-vindo de volta!
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Entre na sua conta para continuar sua jornada
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-sm font-semibold text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl pl-12 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full group px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-black text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/60 transition-all transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {loading ? "Entrando..." : "Entrar"}
              </span>
              {!loading && <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>

          {/* Link para Registro */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Não tem uma conta?{" "}
              <Link
                href="/auth/register"
                className="text-[#D4AF37] font-bold hover:text-amber-400 transition-colors"
              >
                Criar conta grátis
              </Link>
            </p>
          </div>
        </div>

        {/* Link para Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-gray-400 hover:text-[#D4AF37] transition-colors font-semibold"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
