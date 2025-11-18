"use client";

import Link from "next/link";
import { Sparkles, ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-[#D4AF37]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white">ELITE LIFE</span>
            </Link>
            
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-2 text-white hover:text-[#D4AF37] transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Termos de Uso
            </h1>
            <p className="text-[#9A9A9A]">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20">
            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Ao acessar e usar a plataforma Elite Life, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Descrição do Serviço</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  A Elite Life é uma plataforma de educação online que oferece cursos, vídeos, ferramentas de produtividade e recursos de desenvolvimento pessoal e profissional. Nossos serviços incluem:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Acesso a cursos e conteúdos educacionais</li>
                  <li>Ferramentas de produtividade e organização</li>
                  <li>Comunidade exclusiva de membros</li>
                  <li>Certificados de conclusão</li>
                  <li>Suporte e mentoria</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Registro e Conta</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Para acessar determinados recursos da plataforma, você precisará criar uma conta. Você concorda em:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Fornecer informações precisas, atuais e completas durante o processo de registro</li>
                  <li>Manter a segurança de sua senha e identificação</li>
                  <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                  <li>Ser responsável por todas as atividades que ocorrem em sua conta</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Planos e Pagamentos</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  A Elite Life oferece diferentes planos de assinatura com recursos variados:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Os pagamentos são processados de forma segura através do Stripe</li>
                  <li>As assinaturas são renovadas automaticamente, a menos que canceladas</li>
                  <li>Você pode cancelar sua assinatura a qualquer momento</li>
                  <li>Oferecemos garantia de reembolso de 7 dias para novos assinantes</li>
                  <li>Os preços estão sujeitos a alterações mediante aviso prévio</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Propriedade Intelectual</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Todo o conteúdo disponível na plataforma Elite Life, incluindo textos, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Elite Life ou de seus fornecedores de conteúdo e é protegido por leis de direitos autorais.
                </p>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Você não pode:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Reproduzir, distribuir ou modificar o conteúdo sem autorização</li>
                  <li>Usar o conteúdo para fins comerciais sem permissão</li>
                  <li>Remover avisos de direitos autorais ou marcas registradas</li>
                  <li>Fazer engenharia reversa de qualquer software da plataforma</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Uso Aceitável</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Você concorda em usar a plataforma apenas para fins legais e de acordo com estes Termos. Você não deve:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Violar qualquer lei ou regulamento aplicável</li>
                  <li>Infringir os direitos de terceiros</li>
                  <li>Transmitir material ofensivo, difamatório ou ilegal</li>
                  <li>Interferir no funcionamento da plataforma</li>
                  <li>Tentar obter acesso não autorizado a sistemas ou dados</li>
                  <li>Compartilhar sua conta com terceiros</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Cancelamento e Reembolso</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta. O cancelamento entrará em vigor no final do período de cobrança atual.
                </p>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Oferecemos garantia de reembolso de 7 dias para novos assinantes. Após este período, os pagamentos não são reembolsáveis, exceto quando exigido por lei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitação de Responsabilidade</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  A Elite Life não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar nossos serviços.
                </p>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Fornecemos a plataforma "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Modificações dos Termos</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos você sobre mudanças significativas por e-mail ou através de um aviso em nossa plataforma. O uso continuado da plataforma após tais modificações constitui sua aceitação dos novos termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Lei Aplicável</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições sobre conflitos de leis.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Contato</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <ul className="list-none text-[#9A9A9A] space-y-2 ml-4">
                  <li>Email: suporte@elitelife.com.br</li>
                  <li>Telefone: (11) 1234-5678</li>
                  <li>Endereço: São Paulo, SP, Brasil</li>
                </ul>
              </section>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white">ELITE LIFE</span>
            </div>
            
            <div className="text-[#9A9A9A] text-sm">
              © 2025 Elite Life. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
