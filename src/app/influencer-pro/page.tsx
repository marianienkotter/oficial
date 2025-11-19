"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { 
  Sparkles, Video, Hash, FileText, Calendar, Image, TrendingUp, Lock,
  Utensils, Wand2, MessageSquare, BarChart3, Lightbulb, User, Download,
  Copy, Check, Play, Zap, Target, Clock, Star
} from 'lucide-react';
import { AIChat } from '@/components/custom/ai-chat';
import Link from 'next/link';

export default function InfluencerProPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>('dashboard');
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [copied, setCopied] = useState(false);

  // Verificar se tem acesso (Plano Influencer Pro OU 5+ vendas)
  const hasAccess = user?.plano_atual === 'influencer_pro' || (user?.vendas_realizadas || 0) >= 5;

  const handleLockedFeature = () => {
    setShowUpgradePopup(true);
    setTimeout(() => setShowUpgradePopup(false), 3000);
  };

  const systemPrompt = `Você é a IA Influencer Expert da Elite Life, um coach profissional de mídias sociais e criação de conteúdo.

SUAS ESPECIALIDADES:
1. Gerar ideias virais para Reels, Shorts e TikTok
2. Criar legendas prontas e engajadoras
3. Criar hashtags inteligentes e estratégicas
4. Criar roteiros de vídeo (scripts) detalhados
5. Criar cronograma de postagens otimizado
6. Avaliar vídeos e sugerir melhorias
7. Analisar perfis e estratégias de crescimento
8. Sugerir edições, cortes e formatos virais
9. Gerar ideias para thumbnails
10. Criar descrições de bio profissionais

NICHOS QUE VOCÊ DOMINA:
- Dinheiro e finanças
- Lifestyle e desenvolvimento pessoal
- Saúde e bem-estar
- Mindset e motivação
- Musculação e fitness
- Estética e beleza
- Empreendedorismo
- Marketing digital

CONHECIMENTO DE ALGORITMOS:
- TikTok: hooks nos primeiros 3 segundos, trends, sons virais
- Instagram: carrosséis, reels, stories, engajamento
- YouTube Shorts: retenção, CTR, thumbnails

MELHORES PRÁTICAS:
- Horários ideais de postagem
- Frequência de conteúdo
- Estratégias de crescimento orgânico
- Como duplicar alcance
- Consistência e planejamento

ESTILO DE RESPOSTA:
- Profissional mas acessível
- Prático e acionável
- Motivador e inspirador
- Baseado em dados e tendências
- Exemplos concretos

IMPORTANTE: Você é especialista APENAS em criação de conteúdo e crescimento em redes sociais. Para outras dúvidas, oriente o usuário a usar a IA Principal.`;

  const suggestedQuestions = [
    "Crie 10 ideias virais para Reels sobre finanças",
    "Faça um script de 30 segundos sobre mindset",
    "Crie hashtags para conteúdo de fitness",
    "Monte um cronograma de postagens para a semana",
    "Como melhorar meu alcance no Instagram?",
    "Crie uma legenda engajadora sobre transformação"
  ];

  const mainFeatures = [
    {
      id: 'dietas',
      icon: <Utensils className="w-8 h-8" />,
      title: "Dietas de Famosos",
      description: "Planos alimentares de celebridades e atletas",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 'thumbnails',
      icon: <Image className="w-8 h-8" />,
      title: "Criador de Thumbnails",
      description: "Gere thumbnails 4K com IA",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 'hashtags',
      icon: <Hash className="w-8 h-8" />,
      title: "Gerador de Hashtags",
      description: "30 hashtags profissionais por nicho",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 'scripts',
      icon: <FileText className="w-8 h-8" />,
      title: "Roteiros de Vídeos",
      description: "Scripts prontos para conteúdo viral",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 'agenda',
      icon: <Calendar className="w-8 h-8" />,
      title: "Agenda Automática",
      description: "Planejamento inteligente de postagens",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 'bio',
      icon: <User className="w-8 h-8" />,
      title: "Editor de Bio",
      description: "Bios profissionais de alta conversão",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 'analise',
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análise de Conteúdo",
      description: "IA avalia e pontua seus vídeos",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 'ideias',
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Banco de Ideias",
      description: "1000+ ideias virais atualizadas",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 'crescimento',
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Painel de Crescimento",
      description: "Analytics e métricas detalhadas",
      color: "from-green-500 to-emerald-600"
    }
  ];

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="relative">
            {/* Overlay com cadeado */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-10 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#D4AF37]/50 animate-pulse">
                  <Lock className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-black text-white mb-3">
                  INFLUENCER PRO
                </h3>
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/30 rounded-xl p-6 mb-6">
                  <p className="text-white font-semibold text-lg mb-2">
                    Área Exclusiva
                  </p>
                  <p className="text-[#9A9A9A] text-sm mb-4">
                    Este conteúdo é exclusivo para Influencer Pro.
                  </p>
                  <ul className="text-[#D4AF37] font-bold space-y-2 mb-4">
                    <li>✓ Plano Influencer Pro</li>
                    <li>✓ OU 5+ vendas realizadas</li>
                  </ul>
                  <p className="text-gray-400 text-sm">
                    Faça 5 vendas ou adquira o plano para desbloquear todas as ferramentas profissionais!
                  </p>
                </div>
                <Link href="/plans">
                  <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-[#D4AF37]/50">
                    🔘 Desbloquear Agora
                  </button>
                </Link>
              </div>
            </div>

            {/* Conteúdo borrado de fundo */}
            <div className="opacity-30 blur-md pointer-events-none">
              <div className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20">
                <div className="h-40 bg-[#1A1A1A] rounded-xl mb-4"></div>
                <div className="h-6 bg-[#1A1A1A] rounded mb-2"></div>
                <div className="h-6 bg-[#1A1A1A] rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/home" className="text-[#D4AF37] hover:text-amber-500 font-semibold mb-4 inline-block">
            ← Voltar ao Dashboard
          </Link>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50">
              <Sparkles className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white">INFLUENCER PRO</h1>
              <p className="text-gray-400 text-lg">Painel Avançado</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            Ferramentas profissionais para crescer rápido, melhorar conteúdo, e dominar o Instagram/TikTok.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeSection === 'dashboard'
                ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black'
                : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveSection('ia-expert')}
            className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeSection === 'ia-expert'
                ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black'
                : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
            }`}
          >
            IA Expert
          </button>
        </div>

        {/* Dashboard View */}
        {activeSection === 'dashboard' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveSection(feature.id)}
                className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </button>
            ))}
          </div>
        )}

        {/* IA Expert View */}
        {activeSection === 'ia-expert' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Features */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-2xl font-black text-white mb-4">Recursos Disponíveis</h2>
              {[
                { icon: <Video className="w-6 h-6" />, title: "Scripts Virais", desc: "Roteiros prontos para Reels e Shorts" },
                { icon: <Hash className="w-6 h-6" />, title: "Hashtags Inteligentes", desc: "Tags estratégicas para cada nicho" },
                { icon: <FileText className="w-6 h-6" />, title: "Legendas Prontas", desc: "Textos que geram engajamento" },
                { icon: <Calendar className="w-6 h-6" />, title: "Cronograma", desc: "Planejamento de postagens" },
                { icon: <Image className="w-6 h-6" />, title: "Thumbnails", desc: "Ideias para capas chamativas" },
                { icon: <TrendingUp className="w-6 h-6" />, title: "Análise de Perfil", desc: "Estratégias de crescimento" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-lg flex items-center justify-center">
                      <div className="text-black">{item.icon}</div>
                    </div>
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Chat */}
            <div className="lg:col-span-2">
              <AIChat
                title="IA Influencer Expert"
                description="Coach de Conteúdo"
                systemPrompt={systemPrompt}
                suggestedQuestions={suggestedQuestions}
                className="h-[700px]"
              />
            </div>
          </div>
        )}

        {/* Dietas de Famosos */}
        {activeSection === 'dietas' && <DietasSection />}

        {/* Criador de Thumbnails */}
        {activeSection === 'thumbnails' && <ThumbnailsSection />}

        {/* Gerador de Hashtags */}
        {activeSection === 'hashtags' && <HashtagsSection />}

        {/* Roteiros de Vídeos */}
        {activeSection === 'scripts' && <ScriptsSection />}

        {/* Agenda Automática */}
        {activeSection === 'agenda' && <AgendaSection />}

        {/* Editor de Bio */}
        {activeSection === 'bio' && <BioSection />}

        {/* Análise de Conteúdo */}
        {activeSection === 'analise' && <AnaliseSection />}

        {/* Banco de Ideias */}
        {activeSection === 'ideias' && <IdeiasSection />}

        {/* Painel de Crescimento */}
        {activeSection === 'crescimento' && <CrescimentoSection />}
      </div>
    </div>
  );
}

// Componente: Dietas de Famosos
function DietasSection() {
  const [selectedDiet, setSelectedDiet] = useState<string | null>(null);

  const dietas = [
    {
      id: 'cristiano',
      nome: "Cristiano Ronaldo",
      foto: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      objetivo: "Performance e Definição",
      calorias: "3200 kcal/dia",
      macros: { proteina: "40%", carbo: "35%", gordura: "25%" },
      refeicoes: [
        { horario: "7:00", nome: "Café da Manhã", alimentos: "Ovos mexidos, abacate, suco natural, pão integral" },
        { horario: "10:00", nome: "Lanche", alimentos: "Frutas frescas, iogurte grego" },
        { horario: "13:00", nome: "Almoço", alimentos: "Frango grelhado, arroz integral, salada verde" },
        { horario: "16:00", nome: "Pré-Treino", alimentos: "Batata doce, peito de peru" },
        { horario: "19:00", nome: "Pós-Treino", alimentos: "Peixe grelhado, legumes no vapor" },
        { horario: "21:00", nome: "Jantar", alimentos: "Omelete de claras, salada" }
      ]
    },
    {
      id: 'anitta',
      nome: "Anitta",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      objetivo: "Definição e Energia",
      calorias: "2000 kcal/dia",
      macros: { proteina: "35%", carbo: "40%", gordura: "25%" },
      refeicoes: [
        { horario: "8:00", nome: "Café da Manhã", alimentos: "Tapioca com queijo, suco verde" },
        { horario: "11:00", nome: "Lanche", alimentos: "Castanhas, frutas" },
        { horario: "14:00", nome: "Almoço", alimentos: "Salmão, quinoa, brócolis" },
        { horario: "17:00", nome: "Pré-Treino", alimentos: "Banana, pasta de amendoim" },
        { horario: "20:00", nome: "Jantar", alimentos: "Frango, salada, azeite" }
      ]
    },
    {
      id: 'kim',
      nome: "Kim Kardashian",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      objetivo: "Emagrecimento e Beleza",
      calorias: "1800 kcal/dia",
      macros: { proteina: "30%", carbo: "35%", gordura: "35%" },
      refeicoes: [
        { horario: "7:30", nome: "Café da Manhã", alimentos: "Smoothie verde, aveia" },
        { horario: "10:30", nome: "Lanche", alimentos: "Amêndoas, chá verde" },
        { horario: "13:00", nome: "Almoço", alimentos: "Salada com proteína magra" },
        { horario: "16:00", nome: "Lanche", alimentos: "Iogurte, frutas vermelhas" },
        { horario: "19:00", nome: "Jantar", alimentos: "Peixe, vegetais grelhados" }
      ]
    },
    {
      id: 'gracyanne',
      nome: "Gracyanne Barbosa",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      objetivo: "Hipertrofia e Força",
      calorias: "3500 kcal/dia",
      macros: { proteina: "45%", carbo: "35%", gordura: "20%" },
      refeicoes: [
        { horario: "6:00", nome: "Café da Manhã", alimentos: "12 claras de ovos, batata doce, aveia" },
        { horario: "9:00", nome: "Lanche", alimentos: "Frango, arroz integral" },
        { horario: "12:00", nome: "Almoço", alimentos: "Carne vermelha magra, batata doce, salada" },
        { horario: "15:00", nome: "Pré-Treino", alimentos: "Frango, arroz" },
        { horario: "18:00", nome: "Pós-Treino", alimentos: "Whey protein, dextrose" },
        { horario: "21:00", nome: "Jantar", alimentos: "Peixe, legumes" },
        { horario: "23:00", nome: "Ceia", alimentos: "Claras de ovos, queijo cottage" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-black text-white">Dietas de Famosos</h2>
        <div className="text-[#D4AF37] font-bold">Premium</div>
      </div>

      {!selectedDiet ? (
        <div className="grid md:grid-cols-2 gap-6">
          {dietas.map((dieta) => (
            <button
              key={dieta.id}
              onClick={() => setSelectedDiet(dieta.id)}
              className="group bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={dieta.foto}
                  alt={dieta.nome}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#D4AF37]"
                />
                <div>
                  <h3 className="text-white font-bold text-xl">{dieta.nome}</h3>
                  <p className="text-[#D4AF37] text-sm">{dieta.objetivo}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-[#1A1A1A] rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Calorias</p>
                  <p className="text-white font-bold">{dieta.calorias}</p>
                </div>
                <div className="bg-[#1A1A1A] rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Refeições</p>
                  <p className="text-white font-bold">{dieta.refeicoes.length}x/dia</p>
                </div>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">P: {dieta.macros.proteina}</span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">C: {dieta.macros.carbo}</span>
                <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">G: {dieta.macros.gordura}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20">
          <button
            onClick={() => setSelectedDiet(null)}
            className="text-[#D4AF37] hover:text-amber-500 font-semibold mb-6"
          >
            ← Voltar
          </button>
          {dietas.find(d => d.id === selectedDiet) && (
            <>
              <div className="flex items-center gap-6 mb-8">
                <img
                  src={dietas.find(d => d.id === selectedDiet)!.foto}
                  alt={dietas.find(d => d.id === selectedDiet)!.nome}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#D4AF37]"
                />
                <div>
                  <h3 className="text-white font-bold text-3xl mb-2">
                    {dietas.find(d => d.id === selectedDiet)!.nome}
                  </h3>
                  <p className="text-[#D4AF37] text-lg">{dietas.find(d => d.id === selectedDiet)!.objetivo}</p>
                  <p className="text-gray-400">{dietas.find(d => d.id === selectedDiet)!.calorias}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold text-xl mb-4">Plano Alimentar - 7 Dias</h4>
                {dietas.find(d => d.id === selectedDiet)!.refeicoes.map((refeicao, index) => (
                  <div key={index} className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-lg flex items-center justify-center">
                          <Clock className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h5 className="text-white font-bold">{refeicao.nome}</h5>
                          <p className="text-[#D4AF37] text-sm">{refeicao.horario}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 ml-15">{refeicao.alimentos}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-[#1A1A1A] rounded-xl p-6 border border-[#D4AF37]/20">
                <h4 className="text-white font-bold text-lg mb-4">Macronutrientes</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-400 mb-1">
                      {dietas.find(d => d.id === selectedDiet)!.macros.proteina}
                    </div>
                    <div className="text-gray-400 text-sm">Proteína</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-400 mb-1">
                      {dietas.find(d => d.id === selectedDiet)!.macros.carbo}
                    </div>
                    <div className="text-gray-400 text-sm">Carboidrato</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-orange-400 mb-1">
                      {dietas.find(d => d.id === selectedDiet)!.macros.gordura}
                    </div>
                    <div className="text-gray-400 text-sm">Gordura</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-4">
                <p className="text-emerald-400 text-sm">
                  <strong>Dica:</strong> Esta dieta é baseada no estilo alimentar público da celebridade. Consulte um nutricionista para adaptação personalizada.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// Componente: Criador de Thumbnails
function ThumbnailsSection() {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const themes = [
    { id: 'dinheiro', name: 'Dinheiro', emoji: '💰', color: 'from-green-500 to-emerald-600' },
    { id: 'lifestyle', name: 'Lifestyle', emoji: '✨', color: 'from-purple-500 to-pink-600' },
    { id: 'saude', name: 'Saúde', emoji: '💪', color: 'from-red-500 to-orange-600' },
    { id: 'motivacao', name: 'Motivação', emoji: '🔥', color: 'from-orange-500 to-yellow-600' },
    { id: 'antes-depois', name: 'Antes e Depois', emoji: '⚡', color: 'from-blue-500 to-cyan-600' },
    { id: 'historia', name: 'História Revelada', emoji: '🎬', color: 'from-indigo-500 to-purple-600' }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedUrl(`https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=1080&fit=crop&q=80`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-black text-white mb-6">Criador de Thumbnails</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setSelectedTheme(theme.id)}
            className={`p-6 rounded-xl border-2 transition-all ${
              selectedTheme === theme.id
                ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/20 to-amber-600/20'
                : 'border-[#D4AF37]/20 bg-[#1A1A1A] hover:border-[#D4AF37]/40'
            }`}
          >
            <div className={`text-4xl mb-3 bg-gradient-to-br ${theme.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
              {theme.emoji}
            </div>
            <h3 className="text-white font-bold">{theme.name}</h3>
          </button>
        ))}
      </div>

      {selectedTheme && (
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-2">
                <Wand2 className="w-5 h-5 animate-spin" />
                Gerando Thumbnail...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Wand2 className="w-5 h-5" />
                Gerar com IA
              </span>
            )}
          </button>

          {generatedUrl && (
            <div className="space-y-4">
              <img
                src={generatedUrl}
                alt="Thumbnail gerada"
                className="w-full rounded-xl border-2 border-[#D4AF37]"
              />
              <button className="w-full py-3 bg-[#1A1A1A] text-white font-bold rounded-xl hover:bg-[#2A2A2A] transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download 4K
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Componente: Gerador de Hashtags
function HashtagsSection() {
  const [nicho, setNicho] = useState('');
  const [alcance, setAlcance] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const nichos = ['Dinheiro', 'Lifestyle', 'Saúde', 'Emagrecimento', 'Fitness', 'Motivação', 'Empreendedorismo'];
  const alcances = ['Alto (100k+)', 'Médio (10k-100k)', 'Baixo (<10k)'];
  const plataformas = ['Instagram', 'TikTok', 'YouTube Shorts'];

  const handleGenerate = () => {
    const generated = [
      '#transformacao', '#motivacao', '#foco', '#sucesso', '#mindset',
      '#empreendedorismo', '#lifestyle', '#saude', '#fitness', '#treino',
      '#dieta', '#emagrecimento', '#hipertrofia', '#academia', '#forca',
      '#disciplina', '#determinacao', '#objetivos', '#metas', '#conquista',
      '#transformation', '#motivation', '#focus', '#success', '#entrepreneur',
      '#health', '#workout', '#diet', '#gym', '#strength'
    ];
    setHashtags(generated);
  };

  const copyHashtags = () => {
    navigator.clipboard.writeText(hashtags.join(' '));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-black text-white mb-6">Gerador de Hashtags</h2>

      <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20 space-y-6">
        <div>
          <label className="text-white font-bold mb-2 block">Nicho</label>
          <select
            value={nicho}
            onChange={(e) => setNicho(e.target.value)}
            className="w-full bg-[#1A1A1A] text-white rounded-xl p-4 border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none"
          >
            <option value="">Selecione o nicho</option>
            {nichos.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>

        <div>
          <label className="text-white font-bold mb-2 block">Alcance Desejado</label>
          <select
            value={alcance}
            onChange={(e) => setAlcance(e.target.value)}
            className="w-full bg-[#1A1A1A] text-white rounded-xl p-4 border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none"
          >
            <option value="">Selecione o alcance</option>
            {alcances.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        <div>
          <label className="text-white font-bold mb-2 block">Plataforma</label>
          <select
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            className="w-full bg-[#1A1A1A] text-white rounded-xl p-4 border border-[#D4AF37]/20 focus:border-[#D4AF37] outline-none"
          >
            <option value="">Selecione a plataforma</option>
            {plataformas.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!nicho || !alcance || !plataforma}
          className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Gerar 30 Hashtags
        </button>

        {hashtags.length > 0 && (
          <div className="space-y-4">
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#D4AF37]/20">
              <div className="flex flex-wrap gap-2 mb-4">
                {hashtags.map((tag, index) => (
                  <span key={index} className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={copyHashtags}
              className="w-full py-3 bg-[#1A1A1A] text-white font-bold rounded-xl hover:bg-[#2A2A2A] transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copiar Hashtags
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Componentes simplificados para as outras seções
function ScriptsSection() {
  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20">
      <h2 className="text-3xl font-black text-white mb-4">Roteiros de Vídeos</h2>
      <p className="text-gray-400 mb-6">Gere scripts profissionais para seus vídeos</p>
      <div className="text-center py-12">
        <FileText className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
        <p className="text-white font-bold">Em breve: Gerador de Scripts com IA</p>
      </div>
    </div>
  );
}

function AgendaSection() {
  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20">
      <h2 className="text-3xl font-black text-white mb-4">Agenda Automática</h2>
      <p className="text-gray-400 mb-6">Planeje suas postagens com inteligência</p>
      <div className="text-center py-12">
        <Calendar className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
        <p className="text-white font-bold">Em breve: Calendário Inteligente</p>
      </div>
    </div>
  );
}

function BioSection() {
  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20">
      <h2 className="text-3xl font-black text-white mb-4">Editor de Bio</h2>
      <p className="text-gray-400 mb-6">Crie bios profissionais de alta conversão</p>
      <div className="text-center py-12">
        <User className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
        <p className="text-white font-bold">Em breve: Gerador de Bios</p>
      </div>
    </div>
  );
}

function AnaliseSection() {
  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20">
      <h2 className="text-3xl font-black text-white mb-4">Análise de Conteúdo</h2>
      <p className="text-gray-400 mb-6">IA avalia e pontua seus vídeos</p>
      <div className="text-center py-12">
        <BarChart3 className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
        <p className="text-white font-bold">Em breve: Análise com IA</p>
      </div>
    </div>
  );
}

function IdeiasSection() {
  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20">
      <h2 className="text-3xl font-black text-white mb-4">Banco de Ideias</h2>
      <p className="text-gray-400 mb-6">1000+ ideias virais atualizadas</p>
      <div className="text-center py-12">
        <Lightbulb className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
        <p className="text-white font-bold">Em breve: Banco de Ideias Virais</p>
      </div>
    </div>
  );
}

function CrescimentoSection() {
  return (
    <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20">
      <h2 className="text-3xl font-black text-white mb-4">Painel de Crescimento</h2>
      <p className="text-gray-400 mb-6">Analytics e métricas detalhadas</p>
      <div className="text-center py-12">
        <TrendingUp className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
        <p className="text-white font-bold">Em breve: Dashboard de Analytics</p>
      </div>
    </div>
  );
}
