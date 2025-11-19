'use client';

import { useState } from 'react';
import { Award, Download, Share2, CheckCircle, Calendar, Clock, Star, TrendingUp } from 'lucide-react';
import { Certificate, downloadCertificate, shareCertificate, getUserCertificateStats } from '@/lib/certificates';

// Mock de certificados do usuário
const mockCertificates: Certificate[] = [
  {
    id: 'cert-1',
    userId: 'user-1',
    userName: 'João Silva',
    courseTitle: 'Fundamentos de Marketing Digital',
    completionDate: new Date('2024-01-15'),
    duration: 20,
    score: 9.5,
    certificateNumber: 'ELITE-1705334400000-ABC123XYZ',
    qrCode: 'https://elitelife.com/validate/ELITE-1705334400000-ABC123XYZ',
    type: 'quiz'
  },
  {
    id: 'cert-2',
    userId: 'user-1',
    userName: 'João Silva',
    courseTitle: 'Mindset Milionário Avançado',
    completionDate: new Date('2024-02-20'),
    duration: 40,
    score: 8.7,
    certificateNumber: 'ELITE-1708473600000-DEF456UVW',
    qrCode: 'https://elitelife.com/validate/ELITE-1708473600000-DEF456UVW',
    type: 'exam'
  },
  {
    id: 'cert-3',
    userId: 'user-1',
    userName: 'João Silva',
    courseTitle: 'E-commerce Completo',
    completionDate: new Date('2024-03-10'),
    duration: 60,
    score: 9.2,
    certificateNumber: 'ELITE-1710115200000-GHI789RST',
    qrCode: 'https://elitelife.com/validate/ELITE-1710115200000-GHI789RST',
    type: 'course'
  }
];

export default function CertificatesPage() {
  const [certificates] = useState<Certificate[]>(mockCertificates);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const stats = getUserCertificateStats(certificates);

  const handleDownload = (cert: Certificate) => {
    downloadCertificate(cert);
  };

  const handleShare = (cert: Certificate, platform: 'linkedin' | 'twitter' | 'facebook') => {
    const links = shareCertificate(cert);
    window.open(links[platform], '_blank');
  };

  const typeLabels = {
    quiz: 'Quiz',
    activity: 'Atividade',
    exam: 'Prova',
    course: 'Curso Completo'
  };

  const typeColors = {
    quiz: 'from-blue-500 to-cyan-600',
    activity: 'from-green-500 to-emerald-600',
    exam: 'from-purple-500 to-pink-600',
    course: 'from-[#D4AF37] to-amber-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-2xl">
              <Award className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Meus Certificados
              </h1>
              <p className="text-gray-400 mt-2">
                Suas conquistas e certificações Elite Life
              </p>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-gray-400 text-sm">Total</span>
              </div>
              <p className="text-3xl font-bold text-white">{stats.totalCertificates}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400 text-sm">Quizzes</span>
              </div>
              <p className="text-3xl font-bold text-white">{stats.quizCertificates}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-5 h-5 text-purple-500" />
                <span className="text-gray-400 text-sm">Provas</span>
              </div>
              <p className="text-3xl font-bold text-white">{stats.examCertificates}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-gray-400 text-sm">Média</span>
              </div>
              <p className="text-3xl font-bold text-white">{stats.averageScore.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Certificados */}
      <div className="container mx-auto px-4 py-12">
        {certificates.length === 0 ? (
          <div className="text-center py-20">
            <Award className="w-20 h-20 text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Nenhum certificado ainda
            </h2>
            <p className="text-gray-400 mb-8">
              Complete quizzes, atividades e provas para ganhar certificados!
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-transform">
              Explorar Conteúdo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105"
              >
                {/* Header com Tipo */}
                <div className={`bg-gradient-to-r ${typeColors[cert.type]} p-4`}>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-sm uppercase tracking-wider">
                      {typeLabels[cert.type]}
                    </span>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 line-clamp-2">
                    {cert.courseTitle}
                  </h3>

                  {/* Informações */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <span>{cert.completionDate.toLocaleDateString('pt-BR')}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <span>{cert.duration}h de carga horária</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Star className="w-4 h-4 text-[#D4AF37]" />
                      <span>Nota: {cert.score.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Número do Certificado */}
                  <div className="bg-black/30 rounded-lg p-3 mb-4">
                    <p className="text-gray-400 text-xs mb-1">Nº do Certificado</p>
                    <p className="text-[#D4AF37] text-xs font-mono break-all">
                      {cert.certificateNumber}
                    </p>
                  </div>

                  {/* Ações */}
                  <div className="space-y-2">
                    <button
                      onClick={() => handleDownload(cert)}
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Baixar Certificado
                    </button>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleShare(cert, 'linkedin')}
                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                      >
                        LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare(cert, 'twitter')}
                        className="flex-1 bg-sky-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors"
                      >
                        Twitter
                      </button>
                      <button
                        onClick={() => handleShare(cert, 'facebook')}
                        className="flex-1 bg-blue-800 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors"
                      >
                        Facebook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border border-[#D4AF37]/30 rounded-3xl p-12 text-center">
          <Award className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Continue conquistando certificados
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Cada certificado é uma prova do seu comprometimento com a excelência.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-transform">
            Ver Próximos Desafios
          </button>
        </div>
      </div>
    </div>
  );
}
