"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  XCircle,
  Search,
  Calendar,
  Clock,
  User,
  BookOpen,
  Shield,
  Sparkles,
  Home
} from "lucide-react";

export default function ValidateCertificatePage() {
  const [certificateId, setCertificateId] = useState("");
  const [validationResult, setValidationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock certificates database
  const certificatesDatabase = {
    "ELITE-2025-FIN001": {
      valid: true,
      studentName: "João Silva",
      courseName: "Finanças Pessoais Avançadas",
      courseDescription: "Programa completo de educação financeira avançada, incluindo investimentos, planejamento financeiro e análise de risco.",
      workload: "40 horas",
      completionDate: "15/01/2025",
      category: "Finanças",
      level: "Avançado",
      skills: ["Investimentos", "Planejamento Financeiro", "Análise de Risco"]
    },
    "ELITE-2025-MIN002": {
      valid: true,
      studentName: "Maria Santos",
      courseName: "Mindset de Alta Performance",
      courseDescription: "Desenvolvimento de mentalidade vencedora, técnicas de foco e disciplina para alcançar resultados extraordinários.",
      workload: "30 horas",
      completionDate: "10/01/2025",
      category: "Mindset",
      level: "Intermediário",
      skills: ["Mentalidade Vencedora", "Foco", "Disciplina"]
    },
    "ELITE-2025-PRO003": {
      valid: true,
      studentName: "Pedro Oliveira",
      courseName: "Produtividade Extrema",
      courseDescription: "Técnicas avançadas de gestão de tempo, organização e foco profundo para maximizar resultados.",
      workload: "20 horas",
      completionDate: "05/01/2025",
      category: "Produtividade",
      level: "Iniciante",
      skills: ["Gestão de Tempo", "Organização", "Foco Profundo"]
    }
  };

  const handleValidate = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const certificate = certificatesDatabase[certificateId as keyof typeof certificatesDatabase];
      
      if (certificate) {
        setValidationResult(certificate);
      } else {
        setValidationResult({ valid: false });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Validação de Certificado</h1>
                <p className="text-[#9A9A9A] text-sm">Verifique a autenticidade de certificados Elite Life</p>
              </div>
            </div>
            <Link
              href="/"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl transition-all"
            >
              <Home className="w-4 h-4" />
              Início
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Validation Form */}
        {!validationResult && (
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Validar Certificado</h2>
              <p className="text-[#9A9A9A]">
                Insira o ID do certificado para verificar sua autenticidade
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">ID do Certificado</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A9A9A]" />
                  <input
                    type="text"
                    placeholder="Ex: ELITE-2025-FIN001"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                    className="w-full pl-12 pr-4 py-4 bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-xl text-white placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#D4AF37]/50 text-lg font-mono"
                  />
                </div>
              </div>

              <button
                onClick={handleValidate}
                disabled={!certificateId || isLoading}
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0B0B0B] border-t-transparent rounded-full animate-spin" />
                    Validando...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    Validar Certificado
                  </>
                )}
              </button>
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-[#0B0B0B] rounded-xl p-4 border border-[#D4AF37]/10">
              <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                Como validar?
              </h3>
              <ul className="space-y-2 text-sm text-[#9A9A9A]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>O ID do certificado está localizado no rodapé do documento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Você também pode escanear o QR Code presente no certificado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>O formato do ID é: ELITE-ANO-CÓDIGO (ex: ELITE-2025-FIN001)</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Validation Result - Valid */}
        {validationResult && validationResult.valid && (
          <div className="space-y-6">
            {/* Success Banner */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/50 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Certificado Autêntico</h2>
                  <p className="text-green-400">Este certificado é válido e foi emitido pela Elite Life</p>
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl border border-[#D4AF37]/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border-b border-[#D4AF37]/20 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{validationResult.courseName}</h3>
                    <p className="text-[#D4AF37] font-medium">{validationResult.level}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Student Info */}
                <div className="bg-[#0B0B0B] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[#9A9A9A] text-sm">Aluno</span>
                  </div>
                  <p className="text-white text-xl font-bold">{validationResult.studentName}</p>
                </div>

                {/* Course Info */}
                <div className="bg-[#0B0B0B] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[#9A9A9A] text-sm">Descrição do Curso</span>
                  </div>
                  <p className="text-white">{validationResult.courseDescription}</p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#0B0B0B] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-[#9A9A9A] text-xs">Data de Conclusão</span>
                    </div>
                    <p className="text-white font-bold">{validationResult.completionDate}</p>
                  </div>

                  <div className="bg-[#0B0B0B] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-[#9A9A9A] text-xs">Carga Horária</span>
                    </div>
                    <p className="text-white font-bold">{validationResult.workload}</p>
                  </div>

                  <div className="bg-[#0B0B0B] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-[#9A9A9A] text-xs">Categoria</span>
                    </div>
                    <p className="text-white font-bold">{validationResult.category}</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    Competências Adquiridas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {validationResult.skills.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium border border-[#D4AF37]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate ID */}
                <div className="bg-gradient-to-r from-[#D4AF37]/10 to-amber-600/10 rounded-xl p-4 border border-[#D4AF37]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#9A9A9A] text-sm mb-1">ID do Certificado</p>
                      <p className="text-white font-mono font-bold text-lg">{certificateId}</p>
                    </div>
                    <Shield className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setCertificateId("");
                  setValidationResult(null);
                }}
                className="flex-1 py-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl font-bold transition-all"
              >
                Validar Outro Certificado
              </button>
              <Link
                href="/"
                className="flex-1 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all text-center"
              >
                Voltar ao Início
              </Link>
            </div>
          </div>
        )}

        {/* Validation Result - Invalid */}
        {validationResult && !validationResult.valid && (
          <div className="space-y-6">
            {/* Error Banner */}
            <div className="bg-gradient-to-r from-red-500/20 to-rose-600/20 border border-red-500/50 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Certificado Não Encontrado</h2>
                  <p className="text-red-400">O ID informado não corresponde a nenhum certificado válido</p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <h3 className="text-white font-bold mb-4">Possíveis motivos:</h3>
              <ul className="space-y-3 text-[#9A9A9A]">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>O ID do certificado foi digitado incorretamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>O certificado não foi emitido pela Elite Life</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>O certificado pode ter sido revogado ou cancelado</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setCertificateId("");
                  setValidationResult(null);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
              >
                Tentar Novamente
              </button>
              <Link
                href="/"
                className="flex-1 py-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl font-bold transition-all text-center"
              >
                Voltar ao Início
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
