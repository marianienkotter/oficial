"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, Phone, Sparkles, AlertCircle, CheckCircle } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return telefone;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setTelefone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validações
    if (!email || !senha || !confirmarSenha || !telefone) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    const phoneNumbers = telefone.replace(/\D/g, "");
    if (phoneNumbers.length < 10) {
      setError("Por favor, insira um número de telefone válido.");
      return;
    }

    setLoading(true);

    try {
      const success = await signup(email, senha, telefone);
      
      if (success) {
        router.push("/profile/complete");
      } else {
        setError("Este e-mail já está em uso.");
      }
    } catch (err) {
      setError("Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-md w-full relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#D4AF37]/30 blur-3xl rounded-full animate-pulse" />
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                  alt="Elite Life"
                  className="relative w-20 h-20 object-contain rounded-2xl drop-shadow-[0_0_50px_rgba(212,175,55,0.9)]"
                />
              </div>
            </div>
          </Link>
          
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider mb-3">
            ELITE LIFE
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">
            Criar sua conta Elite
          </h2>
          <p className="text-gray-400">
            Comece sua jornada de transformação agora
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Erro */}
            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {/* E-mail */}
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  className="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                />
              </div>
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="telefone" className="block text-white font-semibold mb-2">
                Número de telefone
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  id="telefone"
                  type="tel"
                  value={telefone}
                  onChange={handlePhoneChange}
                  placeholder="(XX) XXXXX-XXXX"
                  maxLength={15}
                  className="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="senha" className="block text-white font-semibold mb-2">
                Senha
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="senha"
                  type={showPassword ? "text" : "password"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Crie uma senha (mínimo 6 caracteres)"
                  className="w-full pl-12 pr-12 py-3.5 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
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

            {/* Confirmar Senha */}
            <div>
              <label htmlFor="confirmarSenha" className="block text-white font-semibold mb-2">
                Confirmar senha
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="confirmarSenha"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  placeholder="Confirme sua senha"
                  className="w-full pl-12 pr-12 py-3.5 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Indicador de Força da Senha */}
            {senha && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className={`w-4 h-4 ${senha.length >= 6 ? 'text-green-500' : 'text-gray-500'}`} />
                  <span className={senha.length >= 6 ? 'text-green-500' : 'text-gray-500'}>
                    Mínimo 6 caracteres
                  </span>
                </div>
                {confirmarSenha && (
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className={`w-4 h-4 ${senha === confirmarSenha ? 'text-green-500' : 'text-gray-500'}`} />
                    <span className={senha === confirmarSenha ? 'text-green-500' : 'text-gray-500'}>
                      Senhas coincidem
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Botão Criar Conta */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
            >
              {loading ? "Criando conta..." : "Criar conta"}
            </button>
          </form>

          {/* Divisor */}
          <div className="flex items-center gap-4 py-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            <span className="text-gray-500 text-sm">Já tem conta?</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          </div>

          {/* Link Entrar */}
          <Link
            href="/auth/login"
            className="block w-full py-4 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] text-[#D4AF37] rounded-xl font-bold text-center hover:bg-[#D4AF37] hover:text-black transition-all transform hover:scale-105"
          >
            Fazer login
          </Link>
        </div>

        {/* Link Voltar */}
        <div className="text-center mt-6">
          <Link
            href="/auth"
            className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm font-semibold"
          >
            ← Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
