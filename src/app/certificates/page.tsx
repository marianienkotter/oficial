"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Award,
  Download,
  ExternalLink,
  Filter,
  Search,
  Calendar,
  Clock,
  CheckCircle,
  Medal,
  Star,
  Trophy,
  Sparkles,
  ChevronRight,
  FileCheck,
  Target
} from "lucide-react";

export default function CertificatesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  // Mock user data
  const userData = {
    name: "João Silva",
    avatar: "https://i.pravatar.cc/150?img=12",
    level: 15,
    totalCertificates: 8
  };

  // Mock certificates data
  const certificates = [
    {
      id: "ELITE-2025-FIN001",
      courseName: "Finanças Pessoais Avançadas",
      subtitle: "Nível Avançado",
      category: "Finanças",
      completionDate: "15/01/2025",
      workload: "40 horas",
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
      skills: ["Investimentos", "Planejamento Financeiro", "Análise de Risco"],
      medals: ["🥇", "💎", "🏆"],
      type: "course",
      level: "advanced"
    },
    {
      id: "ELITE-2025-MIN002",
      courseName: "Mindset de Alta Performance",
      subtitle: "Nível Intermediário",
      category: "Mindset",
      completionDate: "10/01/2025",
      workload: "30 horas",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      skills: ["Mentalidade Vencedora", "Foco", "Disciplina"],
      medals: ["🥈", "🔥"],
      type: "course",
      level: "intermediate"
    },
    {
      id: "ELITE-2025-PRO003",
      courseName: "Produtividade Extrema",
      subtitle: "Nível Iniciante",
      category: "Produtividade",
      completionDate: "05/01/2025",
      workload: "20 horas",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      skills: ["Gestão de Tempo", "Organização", "Foco Profundo"],
      medals: ["🥉", "⚡"],
      type: "course",
      level: "beginner"
    },
    {
      id: "ELITE-2025-TRL001",
      courseName: "Trilha Completa: Finanças",
      subtitle: "Trilha Completa",
      category: "Finanças",
      completionDate: "20/01/2025",
      workload: "120 horas",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      skills: ["Investimentos", "Empreendedorismo", "Gestão Financeira", "Criptomoedas"],
      medals: ["👑", "💎", "🏆", "🥇"],
      type: "trail",
      level: "advanced"
    },
    {
      id: "ELITE-2025-ECO004",
      courseName: "E-commerce do Zero ao Avançado",
      subtitle: "Nível Avançado",
      category: "E-commerce",
      completionDate: "28/12/2024",
      workload: "50 horas",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      skills: ["Vendas Online", "Marketing Digital", "Logística", "Gestão de Produtos"],
      medals: ["🥇", "💰", "🚀"],
      type: "course",
      level: "advanced"
    },
    {
      id: "ELITE-2025-SAU005",
      courseName: "Saúde e Bem-Estar Integral",
      subtitle: "Nível Intermediário",
      category: "Saúde",
      completionDate: "22/12/2024",
      workload: "35 horas",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      skills: ["Nutrição", "Exercícios", "Saúde Mental", "Rotinas Saudáveis"],
      medals: ["🥈", "💪", "🧘"],
      type: "course",
      level: "intermediate"
    }
  ];

  const filters = [
    { id: "all", label: "Todos", icon: FileCheck },
    { id: "course", label: "Cursos", icon: Award },
    { id: "trail", label: "Trilhas", icon: Target },
    { id: "beginner", label: "Iniciante", icon: Star },
    { id: "intermediate", label: "Intermediário", icon: Medal },
    { id: "advanced", label: "Avançado", icon: Trophy }
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesFilter = selectedFilter === "all" || 
                         cert.type === selectedFilter || 
                         cert.level === selectedFilter;
    const matchesSearch = cert.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-16 h-16 rounded-full border-2 border-[#D4AF37]"
              />
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Meus Certificados</h1>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#D4AF37] font-bold">Nível {userData.level}</span>
                  <span className="text-[#9A9A9A]">•</span>
                  <span className="text-[#9A9A9A]">{userData.totalCertificates} certificados conquistados</span>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Baixar Todos
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
            <input
              type="text"
              placeholder="Buscar certificados..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37]/50"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                    selectedFilter === filter.id
                      ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B]"
                      : "bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] border border-[#D4AF37]/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group hover:scale-105"
            >
              {/* Certificate Preview */}
              <div className="relative">
                <img
                  src={certificate.thumbnail}
                  alt={certificate.courseName}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Certificate Badge */}
                <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#0B0B0B] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {certificate.type === "trail" ? "Trilha" : "Curso"}
                </div>

                {/* Medals */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1">
                  {certificate.medals.map((medal, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-lg"
                    >
                      {medal}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <div className="text-xs text-[#D4AF37] font-bold mb-2">{certificate.category}</div>
                <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">{certificate.courseName}</h3>
                <p className="text-[#9A9A9A] text-sm mb-4">{certificate.subtitle}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-[#9A9A9A]" />
                    <span className="text-[#9A9A9A]">Concluído em {certificate.completionDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-[#9A9A9A]" />
                    <span className="text-[#9A9A9A]">{certificate.workload} de formação</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-[#9A9A9A] text-xs">ID: {certificate.id}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedCertificate(certificate.id)}
                    className="col-span-2 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    Ver
                  </button>
                  <button className="py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl transition-all flex items-center justify-center">
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <button className="w-full mt-2 py-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-[#D4AF37] rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm border border-[#D4AF37]/20">
                  <ExternalLink className="w-4 h-4" />
                  Validar Online
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-16">
            <Award className="w-16 h-16 text-[#9A9A9A] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Nenhum certificado encontrado</h3>
            <p className="text-[#9A9A9A]">Tente ajustar os filtros ou buscar por outro termo</p>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={certificates.find(c => c.id === selectedCertificate)!}
          userName={userData.name}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
}

// Certificate Modal Component
function CertificateModal({ 
  certificate, 
  userName, 
  onClose 
}: { 
  certificate: any; 
  userName: string; 
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37]/30">
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-[#D4AF37]/20 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Certificado de Conclusão</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-xl flex items-center justify-center text-white transition-all"
          >
            ✕
          </button>
        </div>

        {/* Certificate Content */}
        <div className="p-8">
          {/* Certificate Design */}
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl p-12 border-8 border-[#D4AF37] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full translate-x-16 translate-y-16" />
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-[#0B0B0B] mb-2">CERTIFICADO</h1>
              <p className="text-lg text-gray-600">de Conclusão com Excelência</p>
            </div>

            {/* Main Content */}
            <div className="text-center mb-8">
              <p className="text-gray-700 mb-4">Certificamos que</p>
              <h2 className="text-5xl font-bold text-[#D4AF37] mb-6">{userName}</h2>
              <p className="text-gray-700 mb-2">concluiu com excelência o programa</p>
              <h3 className="text-3xl font-bold text-[#0B0B0B] mb-2">{certificate.courseName}</h3>
              <p className="text-xl text-gray-600 mb-6">{certificate.subtitle}</p>
              
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-1" />
                  <p className="text-sm text-gray-600">Carga Horária</p>
                  <p className="font-bold text-[#0B0B0B]">{certificate.workload}</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-[#D4AF37] mx-auto mb-1" />
                  <p className="text-sm text-gray-600">Data de Conclusão</p>
                  <p className="font-bold text-[#0B0B0B]">{certificate.completionDate}</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-center text-lg font-bold text-[#0B0B0B] mb-4">Competências Adquiridas</h4>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {certificate.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#D4AF37]/20 text-[#0B0B0B] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Medals */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {certificate.medals.map((medal: string, index: number) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg"
                >
                  {medal}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t-2 border-[#D4AF37]/30 pt-6">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <div className="w-32 h-px bg-[#0B0B0B] mb-2" />
                  <p className="text-sm font-bold text-[#0B0B0B]">Elite Life</p>
                  <p className="text-xs text-gray-600">Direção Educacional</p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-white border-2 border-[#D4AF37] rounded-lg flex items-center justify-center mb-2">
                    <div className="text-xs text-center">
                      <p className="font-bold">QR CODE</p>
                      <p className="text-[10px] text-gray-500">Validação</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">ID: {certificate.id}</p>
                </div>

                <div className="text-right">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mb-2">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xs font-bold text-[#D4AF37]">Selo de</p>
                  <p className="text-xs font-bold text-[#D4AF37]">Qualidade</p>
                </div>
              </div>
            </div>

            {/* Institutional Text */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-600 italic">
                "Este certificado reconhece que o aluno concluiu com excelência o programa oficial da Elite Life
                e demonstrou domínio das competências propostas."
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <button className="py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Baixar PDF
            </button>
            <button className="py-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Validar Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
