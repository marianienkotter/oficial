"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Activity, BookOpen, Award, X, Calendar, Zap } from "lucide-react";

interface ProgressData {
  date: string;
  xp: number;
  type: "atividade" | "curso" | "quiz" | "prova";
  description: string;
}

interface ProgressChartProps {
  data?: ProgressData[];
}

export default function ProgressChart({ data = [] }: ProgressChartProps) {
  const [selectedPoint, setSelectedPoint] = useState<ProgressData | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [view, setView] = useState<"diario" | "semanal" | "mensal">("diario");

  // Dados de exemplo se não houver dados
  const chartData: ProgressData[] = data.length > 0 ? data : [
    { date: "01/01", xp: 50, type: "curso", description: "Módulo 1 - Introdução" },
    { date: "02/01", xp: 120, type: "atividade", description: "Exercício de Fixação" },
    { date: "03/01", xp: 200, type: "quiz", description: "Quiz Capítulo 1" },
    { date: "04/01", xp: 280, type: "curso", description: "Módulo 2 - Avançado" },
    { date: "05/01", xp: 350, type: "atividade", description: "Projeto Prático" },
    { date: "06/01", xp: 450, type: "prova", description: "Prova Final Módulo 1" },
    { date: "07/01", xp: 520, type: "curso", description: "Módulo 3 - Expert" },
  ];

  const maxXP = Math.max(...chartData.map(d => d.xp));
  const chartHeight = 300;
  const chartWidth = 100;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "curso":
        return <BookOpen className="w-4 h-4" />;
      case "atividade":
        return <Activity className="w-4 h-4" />;
      case "quiz":
        return <Award className="w-4 h-4" />;
      case "prova":
        return <Zap className="w-4 h-4" />;
      default:
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "curso":
        return "text-blue-400";
      case "atividade":
        return "text-green-400";
      case "quiz":
        return "text-purple-400";
      case "prova":
        return "text-[#D4AF37]";
      default:
        return "text-[#D4AF37]";
    }
  };

  const getTypeBgColor = (type: string) => {
    switch (type) {
      case "curso":
        return "bg-blue-500/20 border-blue-500/30";
      case "atividade":
        return "bg-green-500/20 border-green-500/30";
      case "quiz":
        return "bg-purple-500/20 border-purple-500/30";
      case "prova":
        return "bg-[#D4AF37]/20 border-[#D4AF37]/30";
      default:
        return "bg-[#D4AF37]/20 border-[#D4AF37]/30";
    }
  };

  // Calcular estatísticas
  const totalXP = chartData[chartData.length - 1]?.xp || 0;
  const cursoXP = chartData.filter(d => d.type === "curso").reduce((acc, d) => acc + (d.xp - (chartData[chartData.indexOf(d) - 1]?.xp || 0)), 0);
  const atividadeXP = chartData.filter(d => d.type === "atividade").reduce((acc, d) => acc + (d.xp - (chartData[chartData.indexOf(d) - 1]?.xp || 0)), 0);
  const quizXP = chartData.filter(d => d.type === "quiz").reduce((acc, d) => acc + (d.xp - (chartData[chartData.indexOf(d) - 1]?.xp || 0)), 0);
  const provaXP = chartData.filter(d => d.type === "prova").reduce((acc, d) => acc + (d.xp - (chartData[chartData.indexOf(d) - 1]?.xp || 0)), 0);

  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-black text-white mb-1 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
            Evolução de Progresso
          </h3>
          <p className="text-gray-400 text-sm">Acompanhe seu crescimento em tempo real</p>
        </div>
        <div className="flex items-center gap-2 text-[#D4AF37]">
          <Zap className="w-6 h-6 animate-pulse" />
          <span className="text-3xl font-black">{totalXP}</span>
          <span className="text-sm font-semibold">XP</span>
        </div>
      </div>

      {/* View Filters */}
      <div className="flex gap-2 mb-6">
        {["diario", "semanal", "mensal"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v as typeof view)}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              view === v
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black"
                : "bg-black/40 text-gray-400 hover:text-white border border-[#D4AF37]/20"
            }`}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-black/40 rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/50 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-gray-400 font-semibold">Cursos</span>
          </div>
          <p className="text-2xl font-black text-blue-400">{cursoXP}</p>
          <p className="text-xs text-gray-500">pontos</p>
        </div>
        <div className="bg-black/40 rounded-xl p-4 border border-green-500/20 hover:border-green-500/50 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-400 font-semibold">Atividades</span>
          </div>
          <p className="text-2xl font-black text-green-400">{atividadeXP}</p>
          <p className="text-xs text-gray-500">pontos</p>
        </div>
        <div className="bg-black/40 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/50 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-gray-400 font-semibold">Quizzes</span>
          </div>
          <p className="text-2xl font-black text-purple-400">{quizXP}</p>
          <p className="text-xs text-gray-500">pontos</p>
        </div>
        <div className="bg-black/40 rounded-xl p-4 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs text-gray-400 font-semibold">Provas</span>
          </div>
          <p className="text-2xl font-black text-[#D4AF37]">{provaXP}</p>
          <p className="text-xs text-gray-500">pontos</p>
        </div>
      </div>

      {/* Chart */}
      <div className="relative bg-black/40 rounded-xl p-6 border border-[#D4AF37]/10">
        <svg
          className="w-full"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((percent) => (
            <line
              key={percent}
              x1="0"
              y1={chartHeight - (chartHeight * percent) / 100}
              x2={chartWidth}
              y2={chartHeight - (chartHeight * percent) / 100}
              stroke="#D4AF37"
              strokeOpacity="0.1"
              strokeWidth="0.5"
            />
          ))}

          {/* Line path */}
          <path
            d={chartData
              .map((point, index) => {
                const x = (index / (chartData.length - 1)) * chartWidth;
                const y = chartHeight - (point.xp / maxXP) * chartHeight;
                return `${index === 0 ? "M" : "L"} ${x} ${y}`;
              })
              .join(" ")}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F4D03F" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>

          {/* Area under curve */}
          <path
            d={`${chartData
              .map((point, index) => {
                const x = (index / (chartData.length - 1)) * chartWidth;
                const y = chartHeight - (point.xp / maxXP) * chartHeight;
                return `${index === 0 ? "M" : "L"} ${x} ${y}`;
              })
              .join(" ")} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
            fill="url(#areaGradient)"
            opacity="0.2"
          />

          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Points */}
          {chartData.map((point, index) => {
            const x = (index / (chartData.length - 1)) * chartWidth;
            const y = chartHeight - (point.xp / maxXP) * chartHeight;
            const isHovered = hoveredPoint === index;

            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? "2.5" : "1.5"}
                  fill="#D4AF37"
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    filter: isHovered
                      ? "drop-shadow(0 0 12px rgba(212,175,55,1))"
                      : "drop-shadow(0 0 6px rgba(212,175,55,0.6))",
                  }}
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  onClick={() => setSelectedPoint(point)}
                />
                {isHovered && (
                  <g>
                    <circle cx={x} cy={y} r="3.5" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5">
                      <animate attributeName="r" from="3.5" to="5" dur="1s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="1s" repeatCount="indefinite" />
                    </circle>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between mt-4 px-2">
          {chartData.map((point, index) => (
            <span key={index} className="text-xs text-gray-500 font-semibold">
              {point.date}
            </span>
          ))}
        </div>
      </div>

      {/* Tooltip on hover */}
      {hoveredPoint !== null && (
        <div className="mt-4 bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-[#D4AF37]/30 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className={`${getTypeColor(chartData[hoveredPoint].type)}`}>
              {getTypeIcon(chartData[hoveredPoint].type)}
            </div>
            <div>
              <p className="text-white font-bold">{chartData[hoveredPoint].description}</p>
              <p className="text-gray-400 text-sm">{chartData[hoveredPoint].date}</p>
            </div>
            <div className="ml-auto">
              <p className="text-2xl font-black text-[#D4AF37]">{chartData[hoveredPoint].xp}</p>
              <p className="text-xs text-gray-500 text-right">XP</p>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedPoint && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/30 max-w-md w-full shadow-2xl shadow-[#D4AF37]/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-black text-white">Detalhes da Atividade</h4>
              <button
                onClick={() => setSelectedPoint(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div className={`flex items-center gap-3 p-4 rounded-xl border ${getTypeBgColor(selectedPoint.type)}`}>
                <div className={`${getTypeColor(selectedPoint.type)}`}>
                  {getTypeIcon(selectedPoint.type)}
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold uppercase">{selectedPoint.type}</p>
                  <p className="text-white font-bold">{selectedPoint.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/40 rounded-xl border border-[#D4AF37]/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <p className="text-xs text-gray-400">Data</p>
                  </div>
                  <p className="text-lg font-black text-white">{selectedPoint.date}</p>
                </div>
                <div className="p-4 bg-black/40 rounded-xl border border-[#D4AF37]/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-[#D4AF37]" />
                    <p className="text-xs text-gray-400">Pontuação</p>
                  </div>
                  <p className="text-lg font-black text-[#D4AF37]">{selectedPoint.xp} XP</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedPoint(null)}
                className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
