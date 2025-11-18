"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  BookOpen,
  CheckSquare,
  Trophy,
  Award,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Flag,
  Image as ImageIcon,
  Video,
  Smile,
  Hash,
  TrendingUp,
  Flame,
  Users,
  Filter,
  X,
  Send,
  MoreHorizontal,
  ThumbsUp,
  Sparkles,
  Target,
  Medal,
  ChevronRight,
  Search,
  Plus
} from "lucide-react";

export default function CommunityPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showComments, setShowComments] = useState<string | null>(null);

  // Mock user data
  const currentUser = {
    name: "Usuário Elite",
    avatar: "https://i.pravatar.cc/150?img=12",
    level: 15,
    medals: ["🥇", "🏆", "💎"]
  };

  // Categories
  const categories = [
    { id: "all", name: "Todos", icon: "🌟" },
    { id: "finances", name: "Finanças", icon: "💰" },
    { id: "mindset", name: "Mindset", icon: "🧠" },
    { id: "productivity", name: "Produtividade", icon: "⚡" },
    { id: "ecommerce", name: "E-commerce", icon: "🛒" },
    { id: "health", name: "Saúde", icon: "💪" },
    { id: "challenges", name: "Desafios", icon: "🎯" },
    { id: "achievements", name: "Conquistas", icon: "🏆" },
    { id: "medals", name: "Medalhas", icon: "🥇" },
    { id: "studies", name: "Aulas e Estudos", icon: "📚" },
    { id: "mentors", name: "Posts dos Mentores", icon: "👨‍🏫" }
  ];

  // Trending posts
  const trendingPosts = [
    {
      id: "t1",
      title: "Como conquistei minha primeira medalha de ouro! 🥇",
      author: "Maria Silva",
      likes: 234,
      comments: 45
    },
    {
      id: "t2",
      title: "Minha transformação em 30 dias - Elite Life",
      author: "João Santos",
      likes: 189,
      comments: 32
    },
    {
      id: "t3",
      title: "Dicas de produtividade que mudaram minha vida",
      author: "Ana Costa",
      likes: 156,
      comments: 28
    }
  ];

  // Mock posts data
  const posts = [
    {
      id: "1",
      author: {
        name: "Carlos Mendes",
        avatar: "https://i.pravatar.cc/150?img=33",
        level: 18,
        medals: ["🥇", "💎", "🏆"]
      },
      content: "Acabei de completar o curso de Finanças Pessoais Avançadas! 🎉 Foram 3 semanas intensas de aprendizado. A sensação de conquista é indescritível. Agora vou aplicar tudo que aprendi para organizar minhas finanças e investir melhor. #EliteMindset #Finanças",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
      category: "finances",
      timestamp: "2h atrás",
      likes: 45,
      comments: 12,
      saves: 8,
      shares: 3,
      reactions: {
        like: 30,
        fire: 10,
        medal: 3,
        brain: 2
      }
    },
    {
      id: "2",
      author: {
        name: "Juliana Oliveira",
        avatar: "https://i.pravatar.cc/150?img=45",
        level: 22,
        medals: ["🥇", "💎", "🏆", "⭐"]
      },
      content: "Desbloqueei a medalha de Prata hoje! 🥈 Foram 7 dias consecutivos estudando sem parar. A constância é a chave do sucesso. Quem mais está mantendo o streak? 🔥",
      category: "achievements",
      timestamp: "4h atrás",
      likes: 89,
      comments: 23,
      saves: 15,
      shares: 7,
      reactions: {
        like: 50,
        fire: 25,
        medal: 10,
        brain: 4
      }
    },
    {
      id: "3",
      author: {
        name: "Ricardo Santos",
        avatar: "https://i.pravatar.cc/150?img=68",
        level: 15,
        medals: ["🥇", "🏆"]
      },
      content: "Minha rotina matinal mudou completamente depois do curso de Produtividade! ⏰ Acordo às 5h, medito por 15 minutos, faço exercícios e estudo 1 hora antes do trabalho. Resultado: mais foco, energia e produtividade durante o dia todo. Quem quer dicas?",
      category: "productivity",
      timestamp: "6h atrás",
      likes: 67,
      comments: 34,
      saves: 22,
      shares: 11,
      reactions: {
        like: 40,
        fire: 15,
        medal: 8,
        brain: 4
      }
    },
    {
      id: "4",
      author: {
        name: "Mentor Elite",
        avatar: "https://i.pravatar.cc/150?img=15",
        level: 50,
        medals: ["👑", "💎", "🥇", "🏆", "⭐"]
      },
      content: "🎯 DICA DO DIA: A diferença entre quem alcança resultados e quem não alcança está na CONSISTÊNCIA. Não importa se você avança devagar, o importante é não parar. Pequenos passos diários levam a grandes transformações. Continue firme na sua jornada! 💪",
      category: "mentors",
      timestamp: "8h atrás",
      likes: 234,
      comments: 67,
      saves: 89,
      shares: 45,
      reactions: {
        like: 150,
        fire: 50,
        medal: 20,
        brain: 14
      }
    },
    {
      id: "5",
      author: {
        name: "Fernanda Lima",
        avatar: "https://i.pravatar.cc/150?img=27",
        level: 12,
        medals: ["🥇", "🏆"]
      },
      content: "Comecei o desafio de 21 dias hoje! 🎯 Vou documentar minha jornada aqui na comunidade. Quem quer fazer junto comigo? Vamos nos apoiar mutuamente! #Desafio21Dias #EliteLife",
      category: "challenges",
      timestamp: "10h atrás",
      likes: 56,
      comments: 28,
      saves: 12,
      shares: 9,
      reactions: {
        like: 35,
        fire: 12,
        medal: 6,
        brain: 3
      }
    }
  ];

  // Recommended users
  const recommendedUsers = [
    {
      id: "1",
      name: "Pedro Alves",
      avatar: "https://i.pravatar.cc/150?img=51",
      level: 25,
      medals: 12,
      courses: 8
    },
    {
      id: "2",
      name: "Camila Rocha",
      avatar: "https://i.pravatar.cc/150?img=38",
      level: 20,
      medals: 10,
      courses: 6
    },
    {
      id: "3",
      name: "Lucas Ferreira",
      avatar: "https://i.pravatar.cc/150?img=62",
      level: 18,
      medals: 8,
      courses: 5
    }
  ];

  // Forums
  const forums = [
    { id: "finances", name: "Finanças", icon: "💰", members: 1234, posts: 567 },
    { id: "productivity", name: "Produtividade", icon: "⚡", members: 987, posts: 432 },
    { id: "mindset", name: "Mindset", icon: "🧠", members: 1456, posts: 789 },
    { id: "ecommerce", name: "E-commerce", icon: "🛒", members: 654, posts: 234 },
    { id: "health", name: "Saúde", icon: "💪", members: 876, posts: 345 },
    { id: "challenges", name: "Desafios", icon: "🎯", members: 1098, posts: 456 }
  ];

  const filteredPosts = activeFilter === "all" 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#D4AF37]/20 z-50 lg:hidden">
        <div className="flex items-center justify-around py-3">
          <Link href="/" className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link href="/courses" className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-medium">Cursos</span>
          </Link>
          <Link href="/community" className="flex flex-col items-center gap-1 text-[#D4AF37]">
            <Users className="w-6 h-6" />
            <span className="text-xs font-medium">Comunidade</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
            <Trophy className="w-6 h-6" />
            <span className="text-xs font-medium">Ranking</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
            <Award className="w-6 h-6" />
            <span className="text-xs font-medium">Perfil</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Comunidade Elite Life
            </h1>
            <p className="text-[#9A9A9A]">Conecte-se, compartilhe e cresça junto com a comunidade</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 bg-[#1A1A1A] rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
              <Search className="w-5 h-5 text-white" />
            </button>
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-12 h-12 rounded-full border-2 border-[#D4AF37]"
            />
          </div>
        </div>

        {/* Create Post Button */}
        <button
          onClick={() => setShowCreatePost(!showCreatePost)}
          className="w-full mb-6 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Criar Post
        </button>

        {/* Create Post Modal */}
        {showCreatePost && (
          <div className="mb-6 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Criar Novo Post</h3>
              <button
                onClick={() => setShowCreatePost(false)}
                className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-12 h-12 rounded-full border-2 border-[#D4AF37]"
              />
              <div className="flex-1">
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Compartilhe suas conquistas, progresso ou reflexões..."
                  className="w-full bg-[#2A2A2A] text-white rounded-xl p-4 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {categories.slice(1).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#D4AF37] text-[#0B0B0B]"
                      : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-colors">
                  <ImageIcon className="w-5 h-5 text-white" />
                </button>
                <button className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-colors">
                  <Video className="w-5 h-5 text-white" />
                </button>
                <button className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-colors">
                  <Smile className="w-5 h-5 text-white" />
                </button>
                <button className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-colors">
                  <Hash className="w-5 h-5 text-white" />
                </button>
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all">
                Publicar
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Filters and Trending */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories Filter */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#D4AF37]" />
                Categorias
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                      activeFilter === cat.id
                        ? "bg-[#D4AF37] text-[#0B0B0B]"
                        : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
                    }`}
                  >
                    <span className="mr-2">{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                Trending da Semana
              </h3>
              <div className="space-y-4">
                {trendingPosts.map((post, index) => (
                  <div key={post.id} className="flex items-start gap-3">
                    <div className="text-2xl font-bold text-[#D4AF37]">#{index + 1}</div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-[#9A9A9A]">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Users */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                Recomendado para Você
              </h3>
              <div className="space-y-4">
                {recommendedUsers.map((user) => (
                  <div key={user.id} className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/50"
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">{user.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-[#9A9A9A]">
                        <span>Nível {user.level}</span>
                        <span>•</span>
                        <span>{user.medals} medalhas</span>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-[#D4AF37] text-[#0B0B0B] rounded-lg text-xs font-bold hover:bg-amber-600 transition-colors">
                      Seguir
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Forums */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#D4AF37]" />
                Fóruns Elite
              </h3>
              <div className="space-y-3">
                {forums.map((forum) => (
                  <button
                    key={forum.id}
                    className="w-full text-left bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-xl p-3 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{forum.icon}</span>
                      <span className="text-white font-semibold">{forum.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#9A9A9A]">
                      <span>{forum.members} membros</span>
                      <span>•</span>
                      <span>{forum.posts} posts</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl border border-[#D4AF37]/20 overflow-hidden"
              >
                {/* Post Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full border-2 border-[#D4AF37]"
                      />
                      <div>
                        <h3 className="text-white font-bold">{post.author.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-[#9A9A9A]">
                          <span>Nível {post.author.level}</span>
                          <span>•</span>
                          <span>{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Medals */}
                  <div className="flex items-center gap-1 mb-4">
                    {post.author.medals.map((medal, index) => (
                      <span key={index} className="text-xl">{medal}</span>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white mb-4 leading-relaxed">{post.content}</p>

                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg text-sm font-medium">
                      {categories.find(c => c.id === post.category)?.icon}{" "}
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Post Image */}
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-64 object-cover"
                  />
                )}

                {/* Reactions Bar */}
                <div className="px-6 py-3 border-t border-[#D4AF37]/10">
                  <div className="flex items-center justify-between text-sm text-[#9A9A9A]">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        {post.reactions.fire}
                      </span>
                      <span className="flex items-center gap-1">
                        <Medal className="w-4 h-4" />
                        {post.reactions.medal}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>{post.comments} comentários</span>
                      <span>{post.shares} compartilhamentos</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 py-3 border-t border-[#D4AF37]/10">
                  <div className="flex items-center justify-around">
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A] rounded-xl transition-all text-white">
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">Curtir</span>
                    </button>
                    <button
                      onClick={() => setShowComments(showComments === post.id ? null : post.id)}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A] rounded-xl transition-all text-white"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">Comentar</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A] rounded-xl transition-all text-white">
                      <Bookmark className="w-5 h-5" />
                      <span className="font-medium">Salvar</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#2A2A2A] rounded-xl transition-all text-white">
                      <Share2 className="w-5 h-5" />
                      <span className="font-medium">Compartilhar</span>
                    </button>
                  </div>
                </div>

                {/* Comments Section */}
                {showComments === post.id && (
                  <div className="px-6 py-4 border-t border-[#D4AF37]/10 bg-[#0B0B0B]/50">
                    {/* Comment Input */}
                    <div className="flex items-start gap-3 mb-4">
                      <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="w-10 h-10 rounded-full border-2 border-[#D4AF37]"
                      />
                      <div className="flex-1 flex gap-2">
                        <input
                          type="text"
                          placeholder="Escreva um comentário..."
                          className="flex-1 bg-[#2A2A2A] text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                        />
                        <button className="p-2 bg-[#D4AF37] text-[#0B0B0B] rounded-xl hover:bg-amber-600 transition-colors">
                          <Send className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Sample Comments */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <img
                          src="https://i.pravatar.cc/150?img=20"
                          alt="User"
                          className="w-10 h-10 rounded-full border-2 border-[#D4AF37]/50"
                        />
                        <div className="flex-1">
                          <div className="bg-[#2A2A2A] rounded-xl p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white font-semibold text-sm">Ana Silva</span>
                              <span className="text-xs text-[#9A9A9A]">Nível 14</span>
                            </div>
                            <p className="text-white text-sm">Parabéns pela conquista! Muito inspirador! 🎉</p>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-xs text-[#9A9A9A]">
                            <button className="hover:text-[#D4AF37] transition-colors">Curtir</button>
                            <button className="hover:text-[#D4AF37] transition-colors">Responder</button>
                            <span>1h atrás</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
