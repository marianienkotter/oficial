"use client";

import { useState } from 'react';
import { Video, X, Play, Filter, Search, Lock } from 'lucide-react';
import { useSubscription } from '@/lib/hooks/useSubscription';
import { LockedVideoCard } from '@/components/custom/premium-lock';
import { PremiumModal } from '@/components/custom/premium-modal';
import Link from 'next/link';

export default function VideosPage() {
  const { canAccessVideos, canAccessFinanceVideos, isPremium } = useSubscription();
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Lista completa de vídeos do YouTube fornecidos
  const allVideos = [
    // Vídeos anteriores
    { id: "bfFNe6fit1E", title: "Transformação Completa", category: "mindset", duration: "12:45", isPremium: true },
    { id: "a7vaeTcENqM", title: "Mentalidade de Sucesso", category: "mindset", duration: "15:30", isPremium: true },
    { id: "8iMJJ3wHrxw", title: "Produtividade Extrema", category: "produtividade", duration: "18:20", isPremium: true },
    { id: "gmJ0QP18R3A", title: "Finanças Pessoais", category: "financas", duration: "17:25", isPremium: true },
    { id: "5u-BYYivqYU", title: "Investimentos Inteligentes", category: "financas", duration: "12:50", isPremium: true },
    { id: "uIg8aamqysM", title: "E-commerce do Zero", category: "ecommerce", duration: "20:15", isPremium: true },
    { id: "AJOAtisYWtM", title: "Marketing Digital", category: "ecommerce", duration: "17:10", isPremium: true },
    { id: "RunL87QhBNQ", title: "Influencer Estratégias", category: "influencer", duration: "10:30", isPremium: true },
    { id: "UiiWGCmK_Qc", title: "Crescimento no Instagram", category: "influencer", duration: "23:15", isPremium: true },
    { id: "dHg2sxPaMbo", title: "Saúde e Bem-Estar", category: "saude", duration: "18:30", isPremium: true },
    { id: "JrK1jy6gB6s", title: "Rotina Matinal de Sucesso", category: "saude", duration: "22:15", isPremium: true },
    { id: "veXySM5LwPE", title: "Gestão de Tempo", category: "produtividade", duration: "25:40", isPremium: true },
    { id: "rDvS67bp0jM", title: "Foco e Concentração", category: "produtividade", duration: "14:20", isPremium: true },
    { id: "VpHILj9kNdc", title: "Metas e Objetivos", category: "mindset", duration: "16:45", isPremium: true },
    { id: "1klDaH0WHww", title: "Superando Obstáculos", category: "mindset", duration: "19:30", isPremium: true },
    { id: "S7yacMsDJUc", title: "Inteligência Emocional", category: "mindset", duration: "21:15", isPremium: true },
    { id: "dYEtfIflkk0", title: "Renda Passiva", category: "financas", duration: "24:50", isPremium: true },
    { id: "tfAXHFjUccg", title: "Ações e Dividendos", category: "financas", duration: "28:30", isPremium: true },
    { id: "828xD0nlUa8", title: "Dropshipping Avançado", category: "ecommerce", duration: "26:15", isPremium: true },
    { id: "XBYJmbZ3L0M", title: "Amazon FBA", category: "ecommerce", duration: "30:45", isPremium: true },
    { id: "oMIWe7pLseA", title: "Shopee Estratégias", category: "ecommerce", duration: "22:20", isPremium: true },
    { id: "fCc9JeIhW7A", title: "TikTok Viral", category: "influencer", duration: "15:40", isPremium: true },
    { id: "TZU2J1WL5vM", title: "YouTube Monetização", category: "influencer", duration: "27:30", isPremium: true },
    { id: "ZXnvvBrtArM", title: "Criação de Conteúdo", category: "influencer", duration: "20:10", isPremium: true },
    { id: "6NzcOH9_oiA", title: "Alimentação Saudável", category: "saude", duration: "18:25", isPremium: true },
    { id: "MRLmmoV1Ow4", title: "Exercícios em Casa", category: "saude", duration: "16:50", isPremium: true },
    { id: "HS3YJwi8lyY", title: "Meditação e Mindfulness", category: "saude", duration: "12:30", isPremium: true },
    { id: "ErkDwE5k59g", title: "Hábitos de Alta Performance", category: "produtividade", duration: "23:45", isPremium: true },
    { id: "Uu8yFMtgY8s", title: "Organização Pessoal", category: "produtividade", duration: "19:20", isPremium: true },
    { id: "H1sDTGOk2Mk", title: "Planejamento Estratégico", category: "produtividade", duration: "25:15", isPremium: true },
    { id: "OEzWMQmsbTQ", title: "Liderança e Gestão", category: "mindset", duration: "29:40", isPremium: true },
    { id: "KG0jxw07eYI", title: "Comunicação Eficaz", category: "mindset", duration: "17:55", isPremium: true },
    
    // NOVOS VÍDEOS - Lote 1
    { id: "SAQaTgNz1Ug", title: "Estratégias Avançadas", category: "mindset", duration: "21:30", isPremium: true },
    { id: "vOiWdjVrr8Y", title: "Crescimento Pessoal", category: "mindset", duration: "19:45", isPremium: true },
    { id: "rPcqrxjABMc", title: "Desenvolvimento Profissional", category: "produtividade", duration: "24:20", isPremium: true },
    { id: "FSCbKzwtxAE", title: "Gestão Financeira", category: "financas", duration: "26:15", isPremium: true },
    { id: "3cEYg-zGaEk", title: "Investimentos Estratégicos", category: "financas", duration: "22:40", isPremium: true },
    { id: "fNIYRYTZUXs", title: "E-commerce Avançado", category: "ecommerce", duration: "28:30", isPremium: true },
    { id: "P6OUnbVfBYM", title: "Marketing de Influência", category: "influencer", duration: "20:15", isPremium: true },
    { id: "W02Y7VC2S6Y", title: "Criação de Marca Pessoal", category: "influencer", duration: "25:50", isPremium: true },
    { id: "_kmhsLOekgc", title: "Saúde Mental", category: "saude", duration: "18:40", isPremium: true },
    { id: "8xvptPRs2cg", title: "Bem-Estar Integral", category: "saude", duration: "23:25", isPremium: true },
    
    // NOVOS VÍDEOS - Lote 2
    { id: "eyEXJ3agKuU", title: "Técnicas de Produtividade", category: "produtividade", duration: "19:30", isPremium: true },
    { id: "GN0KWrj8gEA", title: "Mindset Milionário", category: "mindset", duration: "27:15", isPremium: true },
    { id: "AA4kFuOUOzE", title: "Finanças para Iniciantes", category: "financas", duration: "21:45", isPremium: true },
    { id: "iyTAeHp7vFE", title: "Investimentos de Alto Retorno", category: "financas", duration: "24:30", isPremium: true },
    { id: "LDWKS9z005M", title: "E-commerce Lucrativo", category: "ecommerce", duration: "26:20", isPremium: true },
    { id: "5G4VLBmszyY", title: "Vendas Online", category: "ecommerce", duration: "22:50", isPremium: true },
    { id: "RqIv0hFd5QQ", title: "Influencer Marketing", category: "influencer", duration: "20:40", isPremium: true },
    { id: "AcjPz8Qr_i8", title: "Crescimento nas Redes", category: "influencer", duration: "25:15", isPremium: true },
    { id: "PpN4_nj7WE4", title: "Saúde e Performance", category: "saude", duration: "19:25", isPremium: true },
    { id: "Hir6lj4WX18", title: "Nutrição Inteligente", category: "saude", duration: "23:10", isPremium: true },
    { id: "eif5_XolUDM", title: "Exercícios Funcionais", category: "saude", duration: "21:35", isPremium: true },
    { id: "n30Qz6EcHEM", title: "Rotina de Sucesso", category: "produtividade", duration: "18:50", isPremium: true },
    { id: "tCx9HKdORso", title: "Gestão de Projetos", category: "produtividade", duration: "26:40", isPremium: true },
    { id: "m7Med0-y88I", title: "Liderança Transformadora", category: "mindset", duration: "24:15", isPremium: true },
    { id: "ZtgcWbcIWy4", title: "Mentalidade Vencedora", category: "mindset", duration: "20:30", isPremium: true },
    { id: "TVtCJbpQQ74", title: "Dicas Rápidas de Sucesso", category: "mindset", duration: "0:59", isPremium: true },
    { id: "32hRlmYsPa0", title: "Planejamento Financeiro", category: "financas", duration: "25:45", isPremium: true },
    { id: "ePdUc2xMW6M", title: "Renda Extra", category: "financas", duration: "22:20", isPremium: true },
    { id: "TasDB-Gn0do", title: "Dropshipping Masterclass", category: "ecommerce", duration: "28:50", isPremium: true },
    { id: "cfouyjYKzn0", title: "Marketplace Estratégias", category: "ecommerce", duration: "23:40", isPremium: true },
    { id: "lT_eRUHdJ7g", title: "Conteúdo Viral", category: "influencer", duration: "19:55", isPremium: true },
    { id: "le6Xf7XS1-o", title: "Engajamento nas Redes", category: "influencer", duration: "21:25", isPremium: true },
    { id: "17yQpfiDFCY", title: "Monetização Digital", category: "influencer", duration: "27:10", isPremium: true },
    
    // NOVOS VÍDEOS - Lote 3
    { id: "SolU30Rl8rQ", title: "Curso Completo de Finanças", category: "financas", duration: "45:30", isPremium: true },
    { id: "BOkaELzR9aM", title: "Investimentos Avançados", category: "financas", duration: "38:20", isPremium: true },
    { id: "J9wbTmuPfNg", title: "E-commerce Profissional", category: "ecommerce", duration: "42:15", isPremium: true },
    { id: "XkbDaNZTedc", title: "Marketing Digital Completo", category: "ecommerce", duration: "50:40", isPremium: true },
    { id: "NaPFO4O5llo", title: "Influencer Pro", category: "influencer", duration: "35:25", isPremium: true },
    { id: "_LPIyvLLzyo", title: "Criação de Conteúdo Pro", category: "influencer", duration: "40:50", isPremium: true },
    { id: "RNB9uCQVEBI", title: "Mindset Elite", category: "mindset", duration: "33:15", isPremium: true },
    { id: "ROYi13bMbbQ", title: "Transformação Total", category: "mindset", duration: "37:45", isPremium: true },
    { id: "gIqiopx5qvQ", title: "Produtividade Máxima", category: "produtividade", duration: "31:20", isPremium: true },
    { id: "lof9u_8ULf0", title: "Gestão de Tempo Avançada", category: "produtividade", duration: "29:55", isPremium: true },
    { id: "exbgpMKPowo", title: "Saúde Integral", category: "saude", duration: "34:40", isPremium: true },
    { id: "Em0UqsiYij8", title: "Bem-Estar Completo", category: "saude", duration: "36:25", isPremium: true },
    { id: "XVOZItdAUbw", title: "Finanças Pessoais Avançadas", category: "financas", duration: "41:30", isPremium: true },
    { id: "CtfOALRAf8s", title: "Investimentos Inteligentes Pro", category: "financas", duration: "39:15", isPremium: true },
    { id: "vpU4zJ7MlzQ", title: "E-commerce Masterclass", category: "ecommerce", duration: "47:20", isPremium: true },
    { id: "gMLJfHko1II", title: "Vendas Online Pro", category: "ecommerce", duration: "44:50", isPremium: true },
    { id: "PPDECleQNtc", title: "Influencer Avançado", category: "influencer", duration: "38:40", isPremium: true },
    { id: "m-6r2sAV8QE", title: "Redes Sociais Pro", category: "influencer", duration: "42:30", isPremium: true },
    { id: "hcluoA_zvzQ", title: "Mentalidade de Campeão", category: "mindset", duration: "35:55", isPremium: true },
  ];

  const categories = [
    { id: 'all', label: 'Todos', count: allVideos.length },
    { id: 'mindset', label: 'Mindset', count: allVideos.filter(v => v.category === 'mindset').length },
    { id: 'financas', label: 'Finanças', count: allVideos.filter(v => v.category === 'financas').length },
    { id: 'produtividade', label: 'Produtividade', count: allVideos.filter(v => v.category === 'produtividade').length },
    { id: 'ecommerce', label: 'E-commerce', count: allVideos.filter(v => v.category === 'ecommerce').length },
    { id: 'influencer', label: 'Influencer', count: allVideos.filter(v => v.category === 'influencer').length },
    { id: 'saude', label: 'Saúde', count: allVideos.filter(v => v.category === 'saude').length },
  ];

  // Filtrar vídeos
  const filteredVideos = allVideos.filter(video => {
    const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleVideoClick = (videoId: string, category: string, isPremium: boolean) => {
    // Verificar se usuário tem acesso
    if (isPremium && !canAccessVideos()) {
      setShowPremiumModal(true);
      return;
    }

    // Verificar se é vídeo de finanças e usuário é influencer
    if (category === 'financas' && !canAccessFinanceVideos()) {
      setShowPremiumModal(true);
      return;
    }

    // Abrir vídeo
    setSelectedVideoId(videoId);
  };

  const handleUpgradeClick = () => {
    setShowPremiumModal(true);
  };

  const handleSelectPlan = (planId: number) => {
    // Redirecionar para página de pagamento
    window.location.href = `/checkout/${planId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Video className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Vídeos Elite Life</h1>
                <p className="text-slate-400">{allVideos.length}+ vídeos exclusivos premium</p>
              </div>
            </div>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all border border-slate-700"
            >
              Voltar
            </Link>
          </div>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar vídeos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 text-white rounded-xl border border-slate-700 focus:border-amber-500 outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => {
            const isLocked = video.isPremium && (!canAccessVideos() || (video.category === 'financas' && !canAccessFinanceVideos()));
            
            return (
              <div
                key={video.id}
                className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => handleVideoClick(video.id, video.category, video.isPremium)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay com cadeado se bloqueado */}
                  {isLocked && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="w-12 h-12 text-amber-500 mx-auto mb-2" />
                        <p className="text-white text-sm font-medium">Exclusivo Premium</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Play button se desbloqueado */}
                  {!isLocked && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/50">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded-lg text-white text-xs font-medium">
                    {video.duration}
                  </div>
                  
                  {/* Premium badge */}
                  {video.isPremium && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-yellow-600 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg">
                      PREMIUM
                    </div>
                  )}
                </div>
                
                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm line-clamp-2 mb-2 group-hover:text-amber-500 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="capitalize">{video.category}</span>
                    {isLocked && (
                      <span className="text-amber-500 font-medium">🔒 Bloqueado</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <Video className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-white text-lg font-medium mb-2">Nenhum vídeo encontrado</p>
            <p className="text-slate-400">Tente ajustar os filtros ou busca</p>
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      {selectedVideoId && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[110] p-4">
          <div className="w-full max-w-6xl">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setSelectedVideoId(null)}
                className="text-white hover:text-amber-500 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Premium Modal */}
      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
        onSelectPlan={handleSelectPlan}
        feature="todos os vídeos exclusivos"
      />
    </div>
  );
}
