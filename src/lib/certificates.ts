// 🎓 Sistema de Certificados Automáticos - Elite Life

export interface Certificate {
  id: string;
  userId: string;
  userName: string;
  courseTitle: string;
  completionDate: Date;
  duration: number; // carga horária em horas
  score: number; // nota final
  certificateNumber: string;
  qrCode: string; // URL do QR code para validação
  type: 'quiz' | 'activity' | 'exam' | 'course';
}

// 🎨 Gerar Certificado em PDF (simulação)
export function generateCertificate(data: {
  userName: string;
  courseTitle: string;
  completionDate: Date;
  duration: number;
  score: number;
  type: 'quiz' | 'activity' | 'exam' | 'course';
}): Certificate {
  const certificateNumber = `ELITE-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const qrCodeUrl = `https://elitelife.com/validate/${certificateNumber}`;

  return {
    id: `cert-${Date.now()}`,
    userId: 'user-id', // Será preenchido com ID real
    userName: data.userName,
    courseTitle: data.courseTitle,
    completionDate: data.completionDate,
    duration: data.duration,
    score: data.score,
    certificateNumber,
    qrCode: qrCodeUrl,
    type: data.type
  };
}

// 📄 Template HTML do Certificado
export function getCertificateHTML(certificate: Certificate): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @page {
          size: A4 landscape;
          margin: 0;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          color: #fff;
        }
        .certificate {
          width: 297mm;
          height: 210mm;
          padding: 40mm;
          box-sizing: border-box;
          position: relative;
          background-image: 
            linear-gradient(45deg, rgba(212, 175, 55, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(212, 175, 55, 0.1) 25%, transparent 25%);
          background-size: 60px 60px;
        }
        .border {
          border: 8px solid #D4AF37;
          padding: 30mm;
          height: 100%;
          box-sizing: border-box;
          position: relative;
        }
        .logo {
          text-align: center;
          font-size: 48px;
          font-weight: bold;
          color: #D4AF37;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 8px;
        }
        .title {
          text-align: center;
          font-size: 32px;
          color: #D4AF37;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
        .recipient {
          text-align: center;
          font-size: 18px;
          margin-bottom: 15px;
          color: #ccc;
        }
        .name {
          text-align: center;
          font-size: 42px;
          font-weight: bold;
          color: #fff;
          margin-bottom: 30px;
          text-transform: uppercase;
        }
        .course {
          text-align: center;
          font-size: 24px;
          color: #D4AF37;
          margin-bottom: 20px;
          font-style: italic;
        }
        .details {
          text-align: center;
          font-size: 16px;
          color: #aaa;
          margin-bottom: 40px;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 50px;
        }
        .signature {
          text-align: center;
          flex: 1;
        }
        .signature-line {
          border-top: 2px solid #D4AF37;
          width: 200px;
          margin: 0 auto 10px;
        }
        .qr-section {
          text-align: center;
          flex: 1;
        }
        .certificate-number {
          font-size: 12px;
          color: #888;
          margin-top: 10px;
        }
        .seal {
          position: absolute;
          bottom: 40mm;
          right: 40mm;
          width: 80px;
          height: 80px;
          border: 4px solid #D4AF37;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(212, 175, 55, 0.1);
          font-size: 12px;
          text-align: center;
          color: #D4AF37;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="border">
          <div class="logo">ELITE LIFE</div>
          <div class="title">Certificado de Conclusão</div>
          
          <div class="recipient">Certificamos que</div>
          <div class="name">${certificate.userName}</div>
          
          <div class="recipient">concluiu com êxito o curso</div>
          <div class="course">${certificate.courseTitle}</div>
          
          <div class="details">
            Carga Horária: ${certificate.duration}h | 
            Nota Final: ${certificate.score.toFixed(1)} | 
            Data: ${certificate.completionDate.toLocaleDateString('pt-BR')}
          </div>
          
          <div class="footer">
            <div class="signature">
              <div class="signature-line"></div>
              <div style="color: #D4AF37; font-weight: bold;">Elite Life Academy</div>
              <div style="color: #888; font-size: 12px;">Direção Acadêmica</div>
            </div>
            
            <div class="qr-section">
              <div style="color: #D4AF37; margin-bottom: 10px;">Validar Certificado</div>
              <div style="width: 100px; height: 100px; border: 2px solid #D4AF37; margin: 0 auto; display: flex; align-items: center; justify-content: center; background: white; color: black; font-size: 10px;">
                QR CODE
              </div>
              <div class="certificate-number">Nº ${certificate.certificateNumber}</div>
            </div>
          </div>
          
          <div class="seal">
            ELITE<br>LIFE<br>★
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// 🔍 Validar Certificado
export function validateCertificate(certificateNumber: string): boolean {
  // Aqui você implementaria a validação real no banco de dados
  // Por enquanto, validamos o formato
  return /^ELITE-\d+-[A-Z0-9]{9}$/.test(certificateNumber);
}

// 📊 Estatísticas de Certificados
export interface CertificateStats {
  totalCertificates: number;
  quizCertificates: number;
  activityCertificates: number;
  examCertificates: number;
  courseCertificates: number;
  averageScore: number;
}

export function getUserCertificateStats(certificates: Certificate[]): CertificateStats {
  return {
    totalCertificates: certificates.length,
    quizCertificates: certificates.filter(c => c.type === 'quiz').length,
    activityCertificates: certificates.filter(c => c.type === 'activity').length,
    examCertificates: certificates.filter(c => c.type === 'exam').length,
    courseCertificates: certificates.filter(c => c.type === 'course').length,
    averageScore: certificates.reduce((sum, c) => sum + c.score, 0) / certificates.length || 0
  };
}

// 🎯 Verificar se usuário pode receber certificado
export function canReceiveCertificate(score: number, minScore: number = 7.0): boolean {
  return score >= minScore;
}

// 📥 Baixar Certificado (simulação)
export function downloadCertificate(certificate: Certificate): void {
  const html = getCertificateHTML(certificate);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `certificado-${certificate.certificateNumber}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 🔗 Compartilhar Certificado
export function shareCertificate(certificate: Certificate): {
  linkedin: string;
  twitter: string;
  facebook: string;
} {
  const text = `Acabei de conquistar o certificado "${certificate.courseTitle}" na Elite Life! 🎓`;
  const url = `https://elitelife.com/validate/${certificate.certificateNumber}`;
  
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };
}
