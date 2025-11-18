"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Settings,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  SkipBack,
  Star,
  BookOpen,
  Clock,
  CheckCircle,
  PictureInPicture,
  Subtitles,
  Gauge,
  Home,
  Award,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react";

export default function VideoPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(3600); // 1 hour in seconds
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [quality, setQuality] = useState("1080p");
  const [showSettings, setShowSettings] = useState(false);
  const [showChapters, setShowChapters] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(0);

  const videoRef = useRef<HTMLDivElement>(null);

  // Mock lesson data
  const lesson = {
    title: "Fundamentos de Investimentos em Ações",
    course: "Finanças Pessoais Avançadas",
    module: "Módulo 3: Investimentos",
    instructor: "Prof. Carlos Mendes",
    description: "Aprenda os fundamentos essenciais para começar a investir em ações com segurança e estratégia.",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop",
    duration: "1h 00min",
    xpReward: 150,
    category: "Finanças"
  };

  // Chapters
  const chapters = [
    { id: 1, title: "Introdução ao Mercado de Ações", startTime: 0, duration: "10:30", thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop", watched: true },
    { id: 2, title: "Como Escolher Boas Ações", startTime: 630, duration: "15:45", thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=225&fit=crop", watched: true },
    { id: 3, title: "Análise Fundamentalista", startTime: 1575, duration: "18:20", thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=225&fit=crop", watched: false },
    { id: 4, title: "Gestão de Risco", startTime: 2675, duration: "12:15", thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop", watched: false },
    { id: 5, title: "Estratégias de Investimento", startTime: 3410, duration: "8:50", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop", watched: false }
  ];

  // Notes
  const [notes, setNotes] = useState([
    { id: 1, timestamp: "12:43", text: "Importante: Sempre diversificar a carteira" },
    { id: 2, timestamp: "25:18", text: "Análise fundamentalista: P/L, ROE, Dividend Yield" }
  ]);

  // Recommended content
  const recommendations = [
    {
      id: 1,
      type: "lesson",
      title: "Análise Técnica para Iniciantes",
      thumbnail: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=225&fit=crop",
      duration: "45min",
      xp: 120
    },
    {
      id: 2,
      type: "activity",
      title: "Exercício: Monte sua Carteira",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop",
      xp: 100
    },
    {
      id: 3,
      type: "quiz",
      title: "Quiz: Fundamentos de Ações",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop",
      questions: 10,
      xp: 80
    }
  ];

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Video Player Container */}
      <div className="relative bg-black">
        <div
          ref={videoRef}
          className="relative max-w-7xl mx-auto aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Video Thumbnail/Placeholder */}
          <img
            src={lesson.thumbnail}
            alt={lesson.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

          {/* Top Bar */}
          <div className={`absolute top-0 left-0 right-0 p-6 transition-opacity ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-xl hover:bg-black/70 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Voltar</span>
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-xl backdrop-blur-sm transition-all ${
                    isFavorite ? 'bg-[#D4AF37] text-[#0B0B0B]' : 'bg-black/50 text-white hover:bg-black/70'
                  }`}
                >
                  <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-xl hover:bg-black/70 transition-all"
                >
                  <BookOpen className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-2xl font-bold text-white mb-1">{lesson.title}</h1>
              <p className="text-[#9A9A9A]">{lesson.course} • {lesson.module}</p>
            </div>
          </div>

          {/* Center Play Button */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
            >
              <Play className="w-10 h-10 text-[#0B0B0B] ml-1" />
            </button>
          )}

          {/* Bottom Controls */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-white/20 rounded-full h-1 cursor-pointer group">
                <div
                  className="bg-[#D4AF37] h-1 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-1 text-xs text-white">
                <span>{formatTime(Math.floor(currentTime))}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-[#0B0B0B]" />
                  ) : (
                    <Play className="w-6 h-6 text-[#0B0B0B] ml-1" />
                  )}
                </button>

                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <SkipBack className="w-5 h-5 text-white" />
                </button>

                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <SkipForward className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>

                <div className="text-white font-medium">
                  {formatTime(Math.floor(currentTime))} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowChapters(!showChapters)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white font-medium flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Capítulos
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Settings className="w-5 h-5 text-white" />
                  </button>

                  {showSettings && (
                    <div className="absolute bottom-full right-0 mb-2 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl p-4 min-w-[200px]">
                      <div className="space-y-4">
                        {/* Playback Speed */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Gauge className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-white font-medium text-sm">Velocidade</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {[0.5, 1.0, 1.25, 1.5, 1.75, 2.0].map((speed) => (
                              <button
                                key={speed}
                                onClick={() => setPlaybackSpeed(speed)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                                  playbackSpeed === speed
                                    ? 'bg-[#D4AF37] text-[#0B0B0B]'
                                    : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
                                }`}
                              >
                                {speed}x
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Quality */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Settings className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-white font-medium text-sm">Qualidade</span>
                          </div>
                          <div className="space-y-1">
                            {['Auto', '4K', '1080p', '720p'].map((q) => (
                              <button
                                key={q}
                                onClick={() => setQuality(q)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                  quality === q
                                    ? 'bg-[#D4AF37] text-[#0B0B0B]'
                                    : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
                                }`}
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Subtitles */}
                        <button className="w-full flex items-center gap-2 px-3 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-lg transition-colors">
                          <Subtitles className="w-4 h-4 text-white" />
                          <span className="text-white font-medium text-sm">Legendas</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <PictureInPicture className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isFullscreen ? (
                    <Minimize className="w-5 h-5 text-white" />
                  ) : (
                    <Maximize className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Below Video */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Lesson Info */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg text-sm font-bold">
                      {lesson.category}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-bold flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      +{lesson.xpReward} XP
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{lesson.title}</h2>
                  <p className="text-[#9A9A9A] mb-4">{lesson.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-[#9A9A9A]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lesson.duration}
                    </span>
                    <span>•</span>
                    <span>{lesson.instructor}</span>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="bg-[#0B0B0B] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Seu Progresso</span>
                  <span className="text-[#D4AF37] font-bold">{Math.floor(progress)}%</span>
                </div>
                <div className="w-full bg-[#2A2A2A] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#D4AF37] to-amber-600 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Chapters */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                Capítulos da Aula
              </h3>
              <div className="space-y-3">
                {chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => setSelectedChapter(index)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                      selectedChapter === index
                        ? 'bg-[#D4AF37]/20 border-2 border-[#D4AF37]'
                        : 'bg-[#2A2A2A] hover:bg-[#3A3A3A] border-2 border-transparent'
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={chapter.thumbnail}
                        alt={chapter.title}
                        className="w-32 h-18 object-cover rounded-lg"
                      />
                      {chapter.watched && (
                        <div className="absolute top-1 right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-white font-semibold mb-1">{chapter.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-[#9A9A9A]">
                        <Clock className="w-3 h-3" />
                        <span>{chapter.duration}</span>
                        {chapter.watched && (
                          <>
                            <span>•</span>
                            <span className="text-green-400">Assistido</span>
                          </>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#9A9A9A]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                Minhas Notas
              </h3>

              {/* Add Note */}
              <div className="mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Adicionar nota..."
                    className="flex-1 bg-[#2A2A2A] text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                  />
                  <button
                    onClick={() => {
                      if (noteText.trim()) {
                        setNotes([...notes, {
                          id: notes.length + 1,
                          timestamp: formatTime(Math.floor(currentTime)),
                          text: noteText
                        }]);
                        setNoteText("");
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
                  >
                    Adicionar
                  </button>
                </div>
              </div>

              {/* Notes List */}
              <div className="space-y-3">
                {notes.map((note) => (
                  <div key={note.id} className="bg-[#2A2A2A] rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-[#D4AF37] font-mono text-sm font-bold">{note.timestamp}</span>
                      <button className="text-[#9A9A9A] hover:text-red-400 transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-white">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Lesson */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-lg font-bold text-white mb-4">Próxima Aula</h3>
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=225&fit=crop"
                  alt="Next lesson"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <h4 className="text-white font-semibold mb-2">Diversificação de Carteira</h4>
              <p className="text-[#9A9A9A] text-sm mb-4">Aprenda a diversificar seus investimentos</p>
              <button className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all">
                Assistir Próxima
              </button>
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                Recomendado para Você
              </h3>
              <div className="space-y-4">
                {recommendations.map((item) => (
                  <div key={item.id} className="bg-[#2A2A2A] rounded-xl overflow-hidden hover:bg-[#3A3A3A] transition-all cursor-pointer">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3">
                      <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2">{item.title}</h4>
                      <div className="flex items-center gap-2 text-xs">
                        {item.duration && (
                          <span className="text-[#9A9A9A]">{item.duration}</span>
                        )}
                        {item.questions && (
                          <span className="text-[#9A9A9A]">{item.questions} perguntas</span>
                        )}
                        <span className="text-[#D4AF37] font-bold">+{item.xp} XP</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
