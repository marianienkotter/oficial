"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Calendar, Camera, Image as ImageIcon, Sparkles, AlertCircle, Mail, Phone, ArrowLeft, CheckCircle, FileText } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function EditProfilePage() {
  const router = useRouter();
  const { user, updateProfile, isAuthenticated } = useAuth();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fotoUrl, setFotoUrl] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
      return;
    }

    if (user) {
      setNome(user.nome || "");
      setIdade(user.idade?.toString() || "");
      setDescricao(user.descricao || "");
      setFotoUrl(user.foto_perfil || "");
      setPhotoPreview(user.foto_perfil || "");
    }
  }, [user, isAuthenticated, router]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        setFotoUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validações
    if (!nome) {
      setError("Por favor, digite seu nome.");
      return;
    }

    if (idade && (parseInt(idade) < 1 || parseInt(idade) > 120)) {
      setError("Por favor, insira uma idade válida.");
      return;
    }

    setLoading(true);

    try {
      const success = await updateProfile({
        nome,
        idade: idade ? parseInt(idade) : undefined,
        descricao: descricao || undefined,
        foto_perfil: fotoUrl || undefined,
      });

      if (success) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/courses");
        }, 2000);
      } else {
        setError("Erro ao salvar perfil. Tente novamente.");
      }
    } catch (err) {
      setError("Erro ao salvar perfil. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-md w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
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
          
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider mb-3">
            ELITE LIFE
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">
            Editar perfil
          </h2>
          <p className="text-gray-400">
            Atualize suas informações pessoais
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 border border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Erro */}
            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {/* Sucesso */}
            {success && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">Perfil atualizado com sucesso! Redirecionando...</p>
              </div>
            )}

            {/* Foto de Perfil */}
            <div>
              <label className="block text-white font-semibold mb-4 text-center">
                Foto de perfil
              </label>
              
              {/* Preview da Foto */}
              <div className="flex justify-center mb-4">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-600 p-1">
                    <div className="w-full h-full rounded-full bg-[#0D0D0D] flex items-center justify-center overflow-hidden">
                      {photoPreview ? (
                        <img
                          src={photoPreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-16 h-16 text-gray-600" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de Upload */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] rounded-xl font-semibold hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all"
                >
                  <ImageIcon className="w-5 h-5" />
                  <span className="text-sm">Galeria</span>
                </button>

                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => cameraInputRef.current?.click()}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] rounded-xl font-semibold hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all"
                >
                  <Camera className="w-5 h-5" />
                  <span className="text-sm">Câmera</span>
                </button>
              </div>
            </div>

            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-white font-semibold mb-2">
                Nome completo
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome"
                  className="w-full pl-12 pr-4 py-4 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                />
              </div>
            </div>

            {/* Idade */}
            <div>
              <label htmlFor="idade" className="block text-white font-semibold mb-2">
                Idade
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <input
                  id="idade"
                  type="number"
                  min="1"
                  max="120"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  placeholder="Digite sua idade"
                  className="w-full pl-12 pr-4 py-4 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                />
              </div>
            </div>

            {/* Descrição/Bio */}
            <div>
              <label htmlFor="descricao" className="block text-white font-semibold mb-2">
                Descrição / Bio
              </label>
              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <FileText className="w-5 h-5" />
                </div>
                <textarea
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Conte um pouco sobre você..."
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 bg-black/40 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
                />
              </div>
            </div>

            {/* Informações não editáveis */}
            <div className="space-y-4 pt-4 border-t border-[#D4AF37]/20">
              <div>
                <label className="block text-gray-500 font-semibold mb-2 text-sm">
                  E-mail (não editável)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full pl-12 pr-4 py-3 bg-black/20 border border-gray-800 rounded-xl text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              {user.telefone && (
                <div>
                  <label className="block text-gray-500 font-semibold mb-2 text-sm">
                    Telefone (não editável)
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      value={user.telefone}
                      disabled
                      className="w-full pl-12 pr-4 py-3 bg-black/20 border border-gray-800 rounded-xl text-gray-500 cursor-not-allowed"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Botão Salvar */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
            >
              {loading ? "Salvando..." : "Salvar alterações"}
            </button>
          </form>
        </div>

        {/* Link Voltar */}
        <div className="text-center mt-6">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para os cursos
          </Link>
        </div>
      </div>
    </div>
  );
}
