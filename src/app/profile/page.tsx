"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Camera, 
  Upload, 
  Save, 
  User, 
  Calendar, 
  FileText, 
  ArrowLeft,
  Loader2,
  CheckCircle,
  AlertCircle,
  Crown,
  Trophy,
  Star
} from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  
  // Estados do perfil
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  
  // Dados do perfil
  const [profile, setProfile] = useState({
    photo: "",
    name: "",
    age: "",
    description: "",
    medal: "Iniciante",
    xp: 0,
    completedActivities: 0
  });

  // Preview da foto
  const [photoPreview, setPhotoPreview] = useState("");
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  // Verificar autenticação
  useEffect(() => {
    const checkAuth = () => {
      // Simular verificação de autenticação
      const auth = localStorage.getItem("isAuthenticated");
      if (auth === "true") {
        setIsAuthenticated(true);
        loadProfile();
      } else {
        router.push("/auth/login");
      }
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  // Carregar perfil do usuário
  const loadProfile = () => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfile(parsed);
      setPhotoPreview(parsed.photo || "");
    }
  };

  // Validações
  const validateName = (name: string) => {
    return name.trim().length >= 3;
  };

  const validateAge = (age: string) => {
    const ageNum = parseInt(age);
    return ageNum >= 12 && ageNum <= 100;
  };

  const validateDescription = (desc: string) => {
    return desc.length <= 400;
  };

  // Manipular seleção de foto da galeria
  const handleGallerySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("A foto deve ter no máximo 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        setShowPhotoModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Manipular captura de foto da câmera
  const handleCameraCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        setShowPhotoModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Confirmar foto
  const confirmPhoto = () => {
    setProfile({ ...profile, photo: photoPreview });
    setShowPhotoModal(false);
  };

  // Salvar alterações
  const handleSave = async () => {
    // Validações
    if (!validateName(profile.name)) {
      setError("O nome deve ter no mínimo 3 caracteres");
      return;
    }

    if (profile.age && !validateAge(profile.age)) {
      setError("A idade deve estar entre 12 e 100 anos");
      return;
    }

    if (!validateDescription(profile.description)) {
      setError("A descrição deve ter no máximo 400 caracteres");
      return;
    }

    setError("");
    setSaving(true);

    try {
      // Simular salvamento no banco de dados
      await new Promise(resolve => setTimeout(resolve, 1500));

      const updatedProfile = {
        ...profile,
        photo: photoPreview,
        updated_at: new Date().toISOString()
      };

      // Salvar no localStorage (simular banco)
      localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
      
      setProfile(updatedProfile);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (err) {
      setError("Erro ao salvar perfil. Tente novamente.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-[#D4AF37] animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/dashboard"
              className="flex items-center gap-2 text-[#D4AF37] hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Voltar</span>
            </Link>
            <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
              Editar Perfil
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-green-500 font-semibold">Perfil atualizado com sucesso!</span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="text-red-500 font-semibold">{error}</span>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl border border-[#D4AF37]/20 overflow-hidden">
          {/* Header com Stats */}
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 p-6 sm:p-8 border-b border-[#D4AF37]/20">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Foto de Perfil */}
              <div className="relative group">
                <div className="absolute inset-0 bg-[#D4AF37]/30 blur-2xl rounded-full" />
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#D4AF37] overflow-hidden bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20">
                  {photoPreview ? (
                    <img 
                      src={photoPreview} 
                      alt="Foto de perfil" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-[#D4AF37]/50" />
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setShowPhotoModal(true)}
                  className="absolute bottom-0 right-0 p-3 bg-gradient-to-r from-[#D4AF37] to-amber-500 rounded-full shadow-lg hover:shadow-[#D4AF37]/50 transition-all hover:scale-110"
                >
                  <Camera className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* Stats */}
              <div className="flex-1 grid grid-cols-3 gap-4 w-full">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-2xl font-black text-white">{profile.xp}</div>
                  <div className="text-xs text-gray-400">XP Total</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Crown className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-2xl font-black text-[#D4AF37]">{profile.medal}</div>
                  <div className="text-xs text-gray-400">Medalha</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-2xl font-black text-white">{profile.completedActivities}</div>
                  <div className="text-xs text-gray-400">Concluídos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Nome */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-3">
                <User className="w-5 h-5 text-[#D4AF37]" />
                Nome de Usuário
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                placeholder="Digite seu nome (mínimo 3 caracteres)"
                className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              />
              {profile.name && !validateName(profile.name) && (
                <p className="text-red-500 text-sm mt-2">Nome deve ter no mínimo 3 caracteres</p>
              )}
            </div>

            {/* Idade */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-3">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                Idade
              </label>
              <input
                type="number"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                placeholder="Digite sua idade (12-100)"
                min="12"
                max="100"
                className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              />
              {profile.age && !validateAge(profile.age) && (
                <p className="text-red-500 text-sm mt-2">Idade deve estar entre 12 e 100 anos</p>
              )}
            </div>

            {/* Descrição */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-3">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
                Descrição / Bio
              </label>
              <textarea
                value={profile.description}
                onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                placeholder="Conte um pouco sobre você... (máximo 400 caracteres)"
                rows={4}
                maxLength={400}
                className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-500 text-sm">
                  {profile.description.length}/400 caracteres
                </p>
                {!validateDescription(profile.description) && (
                  <p className="text-red-500 text-sm">Limite excedido</p>
                )}
              </div>
            </div>

            {/* Botão Salvar */}
            <button
              onClick={handleSave}
              disabled={saving || !validateName(profile.name) || (profile.age && !validateAge(profile.age)) || !validateDescription(profile.description)}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {saving ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Salvando...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Salvar Alterações
                </>
              )}
            </button>
          </div>
        </div>
      </main>

      {/* Modal de Seleção de Foto */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl border border-[#D4AF37]/30 p-6 sm:p-8 max-w-md w-full">
            <h3 className="text-2xl font-black text-white mb-6 text-center">
              Alterar Foto de Perfil
            </h3>

            <div className="space-y-4">
              {/* Galeria */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 border border-[#D4AF37]/50 text-white font-bold rounded-xl hover:border-[#D4AF37] transition-all flex items-center justify-center gap-3 group"
              >
                <Upload className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                Escolher da Galeria
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleGallerySelect}
                className="hidden"
              />

              {/* Câmera */}
              <button
                onClick={() => cameraInputRef.current?.click()}
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 border border-[#D4AF37]/50 text-white font-bold rounded-xl hover:border-[#D4AF37] transition-all flex items-center justify-center gap-3 group"
              >
                <Camera className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                Tirar Foto Agora
              </button>
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="user"
                onChange={handleCameraCapture}
                className="hidden"
              />

              {/* Preview */}
              {photoPreview && (
                <div className="mt-6">
                  <p className="text-white font-semibold mb-3 text-center">Preview:</p>
                  <div className="relative w-32 h-32 mx-auto rounded-full border-4 border-[#D4AF37] overflow-hidden">
                    <img 
                      src={photoPreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={confirmPhoto}
                    className="w-full mt-4 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all"
                  >
                    Confirmar Foto
                  </button>
                </div>
              )}

              {/* Cancelar */}
              <button
                onClick={() => setShowPhotoModal(false)}
                className="w-full py-3 bg-white/5 text-gray-400 font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
