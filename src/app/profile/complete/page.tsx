"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { User, Calendar, Camera, Image as ImageIcon, Sparkles, AlertCircle } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function CompleteProfilePage() {
  const router = useRouter();
  const { user, updateProfile } = useAuth();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        setPhotoUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validações
    if (!nome) {
      setError("Por favor, digite seu nome.");
      return;
    }

    if (!idade || parseInt(idade) < 1 || parseInt(idade) > 120) {
      setError("Por favor, insira uma idade válida.");
      return;
    }

    setLoading(true);

    try {
      const success = await updateProfile({
        nome,
        idade: parseInt(idade),
        photo_url: photoUrl || undefined,
      });

      if (success) {
        router.push("/dashboard");
      } else {
        setError("Erro ao salvar perfil. Tente novamente.");
      }
    } catch (err) {
      setError("Erro ao salvar perfil. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    router.push("/dashboard");
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
            Complete seu perfil
          </h2>
          <p className="text-gray-400">
            Personalize sua experiência na Elite Life
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

            {/* Botões */}
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Salvando..." : "Salvar perfil"}
              </button>

              <button
                type="button"
                onClick={handleSkip}
                className="w-full py-4 bg-white/5 border border-[#D4AF37]/30 text-gray-400 rounded-xl font-semibold hover:text-white hover:border-[#D4AF37] transition-all"
              >
                Pular por enquanto
              </button>
            </div>
          </form>
        </div>

        {/* Info */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Você poderá editar seu perfil a qualquer momento
          </p>
        </div>
      </div>
    </div>
  );
}
