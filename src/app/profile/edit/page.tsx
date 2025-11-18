"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Camera,
  Image as ImageIcon,
  Save,
  User,
  FileText,
  Calendar,
  Loader2
} from "lucide-react";

export default function EditProfilePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "Usuário Elite",
    bio: "Empreendedora, estudante, foco em finanças e saúde.",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=12"
  });

  useEffect(() => {
    setMounted(true);
    setPreviewImage(formData.avatar);
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryClick = () => {
    fileInputRef.current?.click();
  };

  const handleCameraClick = () => {
    cameraInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular salvamento (em produção, salvaria no banco de dados)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setLoading(false);
    router.push("/profile");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Cancelar</span>
            </button>
            
            <h1 className="text-xl font-bold text-white">Editar Perfil</h1>
            
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">Salvar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Section */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20">
            <h2 className="text-xl font-bold text-white mb-6">Foto de Perfil</h2>
            
            <div className="flex flex-col items-center gap-6">
              {/* Avatar Preview */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full" />
                <img
                  src={previewImage || formData.avatar}
                  alt="Preview"
                  className="relative w-32 h-32 rounded-full border-4 border-[#D4AF37] object-cover"
                />
              </div>

              {/* Upload Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                  type="button"
                  onClick={handleGalleryClick}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <ImageIcon className="w-5 h-5" />
                  Escolher da Galeria
                </button>

                <button
                  type="button"
                  onClick={handleCameraClick}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  Tirar Foto
                </button>
              </div>

              {/* Hidden File Inputs */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageSelect}
                className="hidden"
              />

              <p className="text-sm text-[#9A9A9A] text-center">
                Escolha uma foto da sua galeria ou tire uma nova foto com a câmera
              </p>
            </div>
          </div>

          {/* Personal Info Section */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20">
            <h2 className="text-xl font-bold text-white mb-6">Informações Pessoais</h2>
            
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-2">
                  <User className="w-5 h-5 text-[#D4AF37]" />
                  Nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl text-white placeholder-[#9A9A9A] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              {/* Bio Field */}
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-2">
                  <FileText className="w-5 h-5 text-[#D4AF37]" />
                  Descrição
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl text-white placeholder-[#9A9A9A] focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                  placeholder="Conte um pouco sobre você..."
                />
                <p className="text-sm text-[#9A9A9A] mt-2">
                  Ex: "Empreendedora, estudante, foco em finanças e saúde."
                </p>
              </div>

              {/* Age Field */}
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-2">
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  Idade (Opcional)
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl text-white placeholder-[#9A9A9A] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  placeholder="Sua idade"
                  min="13"
                  max="120"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Salvar Alterações
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
