"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import {
  User,
  Mail,
  Calendar,
  FileText,
  Camera,
  Save,
  ArrowLeft,
  Trophy,
  Zap,
  Crown,
  Sparkles,
  Upload
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { user, updateProfile, uploadProfilePhoto } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [nome, setNome] = useState(user?.nome || "");
  const [idade, setIdade] = useState(user?.idade?.toString() || "");
  const [descricao, setDescricao] = useState(user?.descricao || "");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  if (!user) {
    router.push("/auth/login");
    return null;
  }

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
      setError('Por favor, selecione uma imagem válida');
      return;
    }

    // Validar tamanho (máx 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('A imagem deve ter no máximo 5MB');
      return;
    }

    setUploadingPhoto(true);
    setError("");

    const result = await uploadProfilePhoto(file);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError(result.error || 'Erro ao fazer upload da foto');
    }

    setUploadingPhoto(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    const idadeNum = idade ? parseInt(idade) : undefined;

    if (idadeNum && (idadeNum < 0 || idadeNum > 150)) {
      setError("Idade inválida");
      setLoading(false);
      return;
    }

    const result = await updateProfile({
      nome: nome || undefined,
      idade: idadeNum,
      descricao: descricao || undefined
    });

    if (result.success) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError(result.error || "Erro ao atualizar perfil");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30 z-50 shadow-2xl shadow-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/home" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full group-hover:bg-[#D4AF37]/30 transition-all" />
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                  alt="Elite Life Logo"
                  className="relative h-10 w-10 sm:h-14 sm:h-14 object-contain rounded-lg drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.9)] transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider group-hover:from-amber-400 group-hover:to-yellow-600 transition-all">
                  ELITE LIFE
                </h1>
                <p className="text-[8px] sm:text-[10px] text-[#D4AF37]/70 font-semibold tracking-widest uppercase hidden sm:block">Meu Perfil</p>
              </div>
            </Link>
            
            <Link
              href="/home"
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#D4AF37] transition-all font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl animate-slide-down">
              <p className="text-green-400 text-sm font-semibold text-center">
                ✓ Perfil atualizado com sucesso!
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-sm font-semibold text-center">{error}</p>
            </div>
          )}

          {/* Profile Header */}
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/20 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Foto de Perfil */}
              <div className="relative group">
                <div className="absolute inset-0 bg-[#D4AF37]/30 blur-2xl rounded-full animate-pulse" />
                <div className="relative">
                  <img
                    src={user.foto_perfil}
                    alt="Foto de Perfil"
                    className="w-32 h-32 rounded-full border-4 border-[#D4AF37] object-cover"
                  />
                  <button
                    onClick={handlePhotoClick}
                    disabled={uploadingPhoto}
                    className="absolute bottom-0 right-0 p-3 bg-gradient-to-r from-[#D4AF37] to-amber-500 rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all hover:scale-110 disabled:opacity-50"
                  >
                    {uploadingPhoto ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Camera className="w-5 h-5 text-black" />
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Info do Usuário */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-black text-white mb-2">
                  {user.nome || "Novo Usuário"}
                </h2>
                <p className="text-gray-400 mb-4">{user.email}</p>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-[#D4AF37]/30">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-bold">{user.pontos} XP</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-[#D4AF37]/30">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-white font-bold">{user.medalha_atual}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-[#D4AF37]/30">
                    <Crown className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-bold">{user.plano_atual === 'free' ? 'Gratuito' : user.plano_atual?.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Edição */}
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl">
                <User className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-black text-white">Editar Perfil</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              {/* Idade */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Idade
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Sua idade"
                    min="0"
                    max="150"
                  />
                </div>
              </div>

              {/* Descrição */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Descrição / Bio
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    className="w-full bg-black/50 border border-[#D4AF37]/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all min-h-[120px] resize-none"
                    placeholder="Conte um pouco sobre você..."
                  />
                </div>
              </div>

              {/* Medalhas e XP (Somente Leitura) */}
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="text-white font-bold text-lg">Suas Conquistas</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-400 text-sm">Pontos (XP)</span>
                    </div>
                    <p className="text-2xl font-black text-white">{user.pontos}</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-amber-400" />
                      <span className="text-gray-400 text-sm">Medalha Atual</span>
                    </div>
                    <p className="text-2xl font-black text-white">{user.medalha_atual}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center">
                  * Medalhas e XP são atualizados automaticamente conforme você completa atividades
                </p>
              </div>

              {/* Botão Salvar */}
              <button
                type="submit"
                disabled={loading}
                className="w-full group px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-black text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/60 transition-all transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-6 h-6 relative z-10" />
                <span className="relative z-10">
                  {loading ? "Salvando..." : "Salvar Alterações"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
