"use client";

import Link from "next/link";
import { Sparkles, ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
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
            <Shield className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Política de Privacidade
            </h1>
            <p className="text-[#9A9A9A]">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Privacy Content */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20">
            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  A Elite Life ("nós", "nosso" ou "nos") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nossa plataforma.
                </p>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Ao usar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta política.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Informações que Coletamos</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
                </p>
                
                <h3 className="text-xl font-bold text-white mb-3 mt-6">2.1 Informações Pessoais</h3>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone (opcional)</li>
                  <li>Data de nascimento</li>
                  <li>Informações de pagamento (processadas pelo Stripe)</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">2.2 Informações de Uso</h3>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Cursos acessados e progresso</li>
                  <li>Tempo gasto na plataforma</li>
                  <li>Interações com o conteúdo</li>
                  <li>Preferências e configurações</li>
                  <li>Histórico de atividades</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">2.3 Informações Técnicas</h3>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador</li>
                  <li>Sistema operacional</li>
                  <li>Dispositivo utilizado</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Como Usamos Suas Informações</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Utilizamos as informações coletadas para diversos fins:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Fornecer e manter nossos serviços</li>
                  <li>Processar transações e gerenciar assinaturas</li>
                  <li>Personalizar sua experiência de aprendizado</li>
                  <li>Enviar notificações importantes e atualizações</li>
                  <li>Melhorar nossos serviços e desenvolver novos recursos</li>
                  <li>Prevenir fraudes e garantir a segurança da plataforma</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Enviar comunicações de marketing (com seu consentimento)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento de Informações</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes situações:
                </p>
                
                <h3 className="text-xl font-bold text-white mb-3 mt-6">4.1 Provedores de Serviços</h3>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Compartilhamos informações com terceiros que nos ajudam a operar nossa plataforma:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Stripe (processamento de pagamentos)</li>
                  <li>Provedores de hospedagem e infraestrutura</li>
                  <li>Serviços de análise e monitoramento</li>
                  <li>Ferramentas de comunicação e suporte</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">4.2 Requisitos Legais</h3>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Podemos divulgar suas informações se exigido por lei ou em resposta a solicitações válidas de autoridades públicas.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">4.3 Transferência de Negócios</h3>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Em caso de fusão, aquisição ou venda de ativos, suas informações podem ser transferidas para a nova entidade.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Segurança dos Dados</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Criptografia SSL/TLS para transmissão de dados</li>
                  <li>Armazenamento seguro de senhas (hashing)</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares</li>
                  <li>Auditorias de segurança periódicas</li>
                </ul>
                <p className="text-[#9A9A9A] leading-relaxed mb-4 mt-4">
                  No entanto, nenhum método de transmissão pela Internet é 100% seguro. Embora nos esforcemos para proteger suas informações, não podemos garantir segurança absoluta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li><strong className="text-white">Acesso:</strong> Solicitar cópias de suas informações pessoais</li>
                  <li><strong className="text-white">Retificação:</strong> Corrigir informações imprecisas ou incompletas</li>
                  <li><strong className="text-white">Exclusão:</strong> Solicitar a exclusão de suas informações</li>
                  <li><strong className="text-white">Portabilidade:</strong> Receber suas informações em formato estruturado</li>
                  <li><strong className="text-white">Oposição:</strong> Opor-se ao processamento de suas informações</li>
                  <li><strong className="text-white">Revogação:</strong> Retirar consentimento a qualquer momento</li>
                </ul>
                <p className="text-[#9A9A9A] leading-relaxed mb-4 mt-4">
                  Para exercer esses direitos, entre em contato conosco através do e-mail: privacidade@elitelife.com.br
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Cookies e Tecnologias Similares</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Usamos cookies e tecnologias similares para:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Manter você conectado à sua conta</li>
                  <li>Lembrar suas preferências</li>
                  <li>Analisar o uso da plataforma</li>
                  <li>Personalizar conteúdo e anúncios</li>
                </ul>
                <p className="text-[#9A9A9A] leading-relaxed mb-4 mt-4">
                  Você pode controlar o uso de cookies através das configurações do seu navegador. No entanto, desabilitar cookies pode afetar a funcionalidade da plataforma.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Retenção de Dados</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para:
                </p>
                <ul className="list-disc list-inside text-[#9A9A9A] space-y-2 ml-4">
                  <li>Fornecer nossos serviços</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Resolver disputas</li>
                  <li>Fazer cumprir nossos acordos</li>
                </ul>
                <p className="text-[#9A9A9A] leading-relaxed mb-4 mt-4">
                  Quando você cancela sua conta, excluímos ou anonimizamos suas informações, exceto quando a retenção for necessária por motivos legais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Privacidade de Menores</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações de menores. Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Alterações nesta Política</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas por e-mail ou através de um aviso em nossa plataforma. A data da "Última atualização" no topo desta página indica quando a política foi revisada pela última vez.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Transferências Internacionais</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Suas informações podem ser transferidas e mantidas em computadores localizados fora do seu estado, província, país ou outra jurisdição governamental onde as leis de proteção de dados podem diferir. Tomamos medidas para garantir que suas informações sejam tratadas com segurança e de acordo com esta Política de Privacidade.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. Contato</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações, entre em contato conosco:
                </p>
                <ul className="list-none text-[#9A9A9A] space-y-2 ml-4">
                  <li><strong className="text-white">Email:</strong> privacidade@elitelife.com.br</li>
                  <li><strong className="text-white">Email de Suporte:</strong> suporte@elitelife.com.br</li>
                  <li><strong className="text-white">Telefone:</strong> (11) 1234-5678</li>
                  <li><strong className="text-white">Endereço:</strong> São Paulo, SP, Brasil</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">13. Encarregado de Dados (DPO)</h2>
                <p className="text-[#9A9A9A] leading-relaxed mb-4">
                  Designamos um Encarregado de Proteção de Dados (DPO) para supervisionar o cumprimento desta Política de Privacidade e da LGPD. Para questões relacionadas à proteção de dados, você pode entrar em contato com nosso DPO em: dpo@elitelife.com.br
                </p>
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
