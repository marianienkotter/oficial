"use client";

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, UserPlus, Sparkles, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validações
    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setLoading(true);

    const { error } = await signUp(email, password, telefone);

    if (error) {
      setError('Erro ao criar conta. Tente novamente.');
      setLoading(false);
    } else {
      // Redirecionar para dashboard após cadastro
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full group-hover:bg-[#D4AF37]/30 transition-all" />
              <img
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                alt="Elite Life Logo"
                className="relative h-16 w-16 object-contain rounded-lg drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
              />
            </div>
            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider">
              ELITE LIFE
            </h1>
          </Link>
          <p className="text-[#9A9A9A] mt-2">Crie sua conta e comece sua jornada</p>
        </div>

        {/* Card de Cadastro */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#0B0B0B] text-white pl-12 pr-4 py-3 rounded-xl border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Telefone (opcional) */}
            <div>
              <label htmlFor="telefone" className="block text-white font-semibold mb-2">
                Telefone <span className="text-[#9A9A9A] text-sm font-normal">(opcional)</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                <input
                  id="telefone"
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full bg-[#0B0B0B] text-white pl-12 pr-4 py-3 rounded-xl border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="password" className="block text-white font-semibold mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#0B0B0B] text-white pl-12 pr-12 py-3 rounded-xl border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none transition-all"
                  placeholder="Mínimo 6 caracteres"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-[#D4AF37] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirmar Senha */}
            <div>
              <label htmlFor="confirmPassword" className="block text-white font-semibold mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full bg-[#0B0B0B] text-white pl-12 pr-12 py-3 rounded-xl border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none transition-all"
                  placeholder="Digite a senha novamente"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-[#D4AF37] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Erro */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Benefícios */}
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl p-4">
              <p className="text-[#D4AF37] font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Ao criar sua conta você ganha:
              </p>
              <ul className="text-white text-sm space-y-1 ml-7">
                <li>🎁 Cupom de 5% de desconto</li>
                <li>🌱 Medalha de Iniciante</li>
                <li>⭐ Acesso a conteúdos gratuitos</li>
              </ul>
            </div>

            {/* Botão de Cadastro */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#0B0B0B] border-t-transparent rounded-full animate-spin" />
                  Criando conta...
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  Criar Conta
                </>
              )}
            </button>
          </form>

          {/* Divisor */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#D4AF37]/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#1A1A1A] text-[#9A9A9A]">ou</span>
            </div>
          </div>

          {/* Link para Login */}
          <div className="text-center">
            <p className="text-[#9A9A9A]">
              Já tem uma conta?{' '}
              <Link
                href="/login"
                className="text-[#D4AF37] hover:text-amber-400 font-semibold transition-colors"
              >
                Entrar
              </Link>
            </p>
          </div>
        </div>

        {/* Link para Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors text-sm"
          >
            ← Voltar para home
          </Link>
        </div>
      </div>
    </div>
  );
}
