"use client";

import { useState } from 'react';
import { Video, X, Play, Filter, Search } from 'lucide-react';
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

  // Lista completa de vídeos
  const allVideos = [
    // Motivacionais
    { id: "zqPA_xfQlVw", title: "Transformação Completa", category: "motivacional", duration: "12:45" },
    { id: "mgYO12VzvNk", title: "Mindset de Sucesso", category: "motivacional", duration: "15:30" },
    { id: "-bqT-Z3-6js", title: "Mentalidade Vencedora", category: "motivacional", duration: "18:20" },
    
    // E-commerce
    { id: "8UNgFZ7-5Ts", title: "Mercado Livre Avançado", category: "ecommerce", duration: "17:25" },
    { id: "Im9PNgnXRTo", title: "Amazon FBA", category: "ecommerce", duration: "12:50" },
    { id: "i1E4sgCeUEs", title: "Shopee Estratégias", category: "ecommerce", duration: "20:15" },
    
    // Influencer
    { id: "B89sP7HyfrQ", title: "Crescer no Instagram", category: "influencer", duration: "17:10" },
    { id: "lt-qsz3gFho", title: "TikTok Viral", category: "influencer", duration: "10:30" },
    { id: "DY2CfcVvc00", title: "YouTube Estratégias", category: "influencer", duration: "23:15" },
    
    // Finanças
    { id: "nX5nPjcVP_I", title: "Investimentos para Iniciantes", category: "financas", duration: "18:30" },
    { id: "l8zh-v3FIpM", title: "Renda Passiva", category: "financas", duration: "22:15" },
    { id: "PHH-BMCuES0", title: "Ações e Dividendos", category: "financas", duration: "25:40" },
  ];

  const categories = [
    { id: 'all', label: 'Todos', count: allVideos.length },
    { id: 'motivacional', label: 'Motivacionais', count: allVideos.filter(v => v.category === 'motivacional').length },
    { id: 'ecommerce', label: 'E-commerce', count: allVideos.filter(v => v.category === 'ecommerce').length },
    { id: 'influencer', label: 'Influencer', count: allVideos.filter(v => v.category === 'influencer').length },
    { id: 'financas', label: 'Finanças', count: allVideos.filter(v => v.category === 'financas').length },
  ];

  // Filtrar vídeos
  const filteredVideos = allVideos.filter(video => {
    const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleVideoClick = (videoId: string, category: string) => {
    // Verificar se usuário tem acesso
    if (!canAccessVideos()) {
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
    // Redirecionar para página de pagamento ou abrir link do Stripe
    console.log('Plano selecionado:', planId);
    // window.location.href = `/checkout?plan=${planId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Video className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Vídeos Elite Life</h1>
                <p className="text-[#9A9A9A]">{allVideos.length}+ vídeos exclusivos</p>
              </div>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-[#2A2A2A] text-white rounded-xl hover:bg-[#3A3A3A] transition-all"
            >
              Voltar
            </Link>
          </div>

          {/* Search e Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
              <input
                type="text"
                placeholder="Buscar vídeos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#2A2A2A] text-white rounded-xl border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B]'
                  : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredVideos.map((video) => {
            const isLocked = !canAccessVideos() || (video.category === 'financas' && !canAccessFinanceVideos());
            
            return (
              <LockedVideoCard
                key={video.id}
                videoId={video.id}
                title={video.title}
                duration={video.duration}
                category={video.category}
                isLocked={isLocked}
                onUpgradeClick={handleUpgradeClick}
                onVideoClick={() => handleVideoClick(video.id, video.category)}
              />
            );
          })}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <Video className="w-16 h-16 text-[#9A9A9A] mx-auto mb-4" />
            <p className="text-white text-lg font-medium mb-2">Nenhum vídeo encontrado</p>
            <p className="text-[#9A9A9A]">Tente ajustar os filtros ou busca</p>
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
                className="text-white hover:text-[#D4AF37] transition-colors"
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
        feature="todos os vídeos"
      />
    </div>
  );
}
