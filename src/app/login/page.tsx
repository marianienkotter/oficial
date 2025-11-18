"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Instagram, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "E-mail inválido" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value && value.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Senha deve ter no mínimo 6 caracteres" }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação final
    if (!email || !password) {
      setErrors({
        email: !email ? "E-mail é obrigatório" : "",
        password: !password ? "Senha é obrigatória" : "",
      });
      return;
    }

    if (!validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: "E-mail inválido" }));
      return;
    }

    setIsLoading(true);

    // Simulação de login (integração futura com banco de dados)
    setTimeout(() => {
      setIsLoading(false);
      // Aqui será implementada a lógica de autenticação real
      console.log("Login attempt:", { email, password });
    }, 1500);
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/elitelife_experience",
      color: "hover:text-pink-500",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/boost/elitelifeApp",
      color: "hover:text-blue-400",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/yVPMQG8tk",
      color: "hover:text-indigo-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://whatsapp.com/channel/0029Vb79nXTBvvsjVktkoE05",
      color: "hover:text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Cabeçalho */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E5B8] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#D4AF37]/20">
              <span className="text-3xl font-bold text-black">EL</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Bem-vindo(a) à <span className="text-[#D4AF37]">Elite Life</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-sm mx-auto">
            Transforme corpo, mente, finanças e produtividade em um só lugar.
          </p>
        </div>

        {/* Formulário de Login */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo de E-mail */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Digite seu e-mail"
                  className={`w-full bg-black/50 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
              )}
            </div>

            {/* Campo de Senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Digite sua senha"
                  className={`w-full bg-black/50 border ${
                    errors.password ? "border-red-500" : "border-gray-700"
                  } rounded-xl pl-12 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#D4AF37] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>
              )}
            </div>

            {/* Link Esqueci Senha */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Esqueci minha senha
              </Link>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black font-semibold py-3 rounded-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Entrando...
                </span>
              ) : (
                "Entrar na Elite Life"
              )}
            </button>

            {/* Link Criar Conta */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Não tem uma conta?{" "}
                <Link
                  href="/signup"
                  className="text-[#D4AF37] hover:text-[#F4E5B8] font-medium transition-colors"
                >
                  Criar conta
                </Link>
              </p>
            </div>
          </form>

          {/* Divisor */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-900/50 text-gray-500">Junte-se à comunidade</span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-center text-sm font-medium text-gray-300">
              🔗 Acessar Comunidade Elite Life
            </h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-12 h-12 bg-black/50 border border-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#D4AF37] transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-8 text-center space-y-3">
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Ao continuar, você concorda com os{" "}
            <Link href="/terms" className="text-[#D4AF37] hover:underline">
              Termos de Uso
            </Link>{" "}
            e a{" "}
            <Link href="/privacy" className="text-[#D4AF37] hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
          <Link
            href="/support"
            className="text-xs text-gray-500 hover:text-[#D4AF37] transition-colors inline-block"
          >
            Precisa de ajuda? Entre em contato com o Suporte
          </Link>
        </div>
      </div>
    </div>
  );
}
