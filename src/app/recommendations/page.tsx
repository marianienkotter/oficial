"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Video,
  Youtube,
  Star,
  ExternalLink,
  ChevronRight,
  Crown,
  Filter,
  Search,
  Play,
  Film,
  Tv,
  FileText
} from "lucide-react";
import { recommendedBooks, recommendedMovies, recommendedChannels, type Book, type Movie } from "@/lib/learning/recommendations";

export default function RecommendationsPage() {
  const [activeTab, setActiveTab] = useState<"books" | "movies" | "channels">("books");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const bookCategories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "financas", label: "Finanças & Investimentos" },
    { value: "marketing", label: "Marketing Digital" },
    { value: "produtividade", label: "Produtividade & Mindset" },
    { value: "saude", label: "Saúde & Corpo" }
  ];

  const movieTypes = [
    { value: "all", label: "Todos os Tipos" },
    { value: "filme", label: "Filmes" },
    { value: "serie", label: "Séries" },
    { value: "documentario", label: "Documentários" }
  ];

  const channelCategories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "financas", label: "Finanças" },
    { value: "marketing", label: "Marketing" },
    { value: "saude", label: "Saúde" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "motivacao", label: "Motivação" }
  ];

  const filteredBooks = selectedCategory === "all" 
    ? recommendedBooks 
    : recommendedBooks.filter(book => book.category === selectedCategory);

  const filteredMovies = selectedCategory === "all"
    ? recommendedMovies
    : recommendedMovies.filter(movie => movie.type === selectedCategory);

  const filteredChannels = selectedCategory === "all"
    ? recommendedChannels
    : recommendedChannels.filter(channel => channel.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#000000] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-3 mb-6">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">Recomendações Elite</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Biblioteca de
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
              Conhecimento
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Livros, filmes, séries e canais selecionados para acelerar sua transformação
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => {
              setActiveTab("books");
              setSelectedCategory("all");
            }}
            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
              activeTab === "books"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-5 h-5 inline mr-2" />
            Livros ({recommendedBooks.length})
          </button>
          <button
            onClick={() => {
              setActiveTab("movies");
              setSelectedCategory("all");
            }}
            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
              activeTab === "movies"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            <Video className="w-5 h-5 inline mr-2" />
            Filmes & Séries ({recommendedMovies.length})
          </button>
          <button
            onClick={() => {
              setActiveTab("channels");
              setSelectedCategory("all");
            }}
            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
              activeTab === "channels"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            <Youtube className="w-5 h-5 inline mr-2" />
            Canais ({recommendedChannels.length})
          </button>
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white font-bold">Filtrar por:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {(activeTab === "books" ? bookCategories : activeTab === "movies" ? movieTypes : channelCategories).map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat.value
                    ? "bg-[#D4AF37] text-black"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Books Content */}
        {activeTab === "books" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map(book => (
              <div
                key={book.id}
                className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-20 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-400">{book.author}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#D4AF37] mb-1">📖 Sobre:</h4>
                    <p className="text-sm text-gray-300">{book.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-[#D4AF37] mb-1">💡 Por que é importante:</h4>
                    <p className="text-sm text-gray-300">{book.whyImportant}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-[#D4AF37] mb-1">👤 Para quem:</h4>
                    <p className="text-sm text-gray-300">{book.forWho}</p>
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  Ver na Amazon
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Movies Content */}
        {activeTab === "movies" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.map(movie => (
              <div
                key={movie.id}
                className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                    {movie.type === "filme" ? <Film className="w-8 h-8 text-white" /> :
                     movie.type === "serie" ? <Tv className="w-8 h-8 text-white" /> :
                     <FileText className="w-8 h-8 text-white" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D4AF37]/20 text-[#D4AF37]">
                    {movie.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {movie.title}
                </h3>

                {movie.year && (
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{movie.year}</span>
                    {movie.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                        <span className="text-white font-bold">{movie.rating}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#D4AF37] mb-1">🎬 Sinopse:</h4>
                    <p className="text-sm text-gray-300">{movie.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-[#D4AF37] mb-1">📚 Lição Principal:</h4>
                    <p className="text-sm text-gray-300">{movie.mainLesson}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-[#D4AF37] mb-1">🔗 Conexão com Elite Life:</h4>
                    <p className="text-sm text-gray-300">{movie.platformConnection}</p>
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Assistir Agora
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Channels Content */}
        {activeTab === "channels" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChannels.map(channel => (
              <div
                key={channel.id}
                className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mb-4">
                  <Youtube className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {channel.name}
                </h3>

                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#D4AF37]/20 text-[#D4AF37] mb-4">
                  {channel.category}
                </span>

                <p className="text-sm text-gray-300 mb-6">
                  {channel.description}
                </p>

                <div className="flex gap-3">
                  {channel.youtubeUrl && (
                    <a
                      href={channel.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <Youtube className="w-4 h-4" />
                      YouTube
                    </a>
                  )}
                  {channel.instagramUrl && (
                    <a
                      href={channel.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
