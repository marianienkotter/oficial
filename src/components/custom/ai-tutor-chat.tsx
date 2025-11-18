"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { usePathname } from "next/navigation";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  buttons?: ActionButton[];
}

interface ActionButton {
  label: string;
  action: string;
  href?: string;
}

export function AITutorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const pathname = usePathname();

  // Scroll automático para última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mensagem de boas-vindas ao abrir pela primeira vez
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        text: "Olá! 👋 Sou a IA da Elite Life, sua tutora pessoal.\n\nPosso te ajudar com planos, cursos, vídeos, quiz, foco, saúde, dinheiro e tudo da plataforma.\n\nO que você deseja saber agora?",
        sender: "ai",
        timestamp: new Date(),
        buttons: [
          { label: "Ver Planos", action: "plans", href: "/plans" },
          { label: "Abrir Cursos", action: "courses", href: "/courses" },
          { label: "Começar Quiz", action: "quiz", href: "/quiz" },
          { label: "Meu Plano Atual", action: "my-plan" },
        ],
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Processar mensagem do usuário
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simular delay de resposta da IA
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue, user, pathname);
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  // Processar ação de botão
  const handleButtonAction = (action: string, href?: string) => {
    if (href) {
      window.location.href = href;
    } else if (action === "my-plan") {
      const planInfo = getPlanInfo(user?.plan || "free");
      const response: Message = {
        id: Date.now().toString(),
        text: planInfo,
        sender: "ai",
        timestamp: new Date(),
        buttons: [{ label: "Ver Planos", action: "plans", href: "/plans" }],
      };
      setMessages((prev) => [...prev, response]);
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Fale com a IA Elite Life"
        >
          <div className="relative">
            {/* Círculo com gradiente dourado */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F4E5C3] to-[#D4AF37] flex items-center justify-center shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-110">
              <div className="w-14 h-14 rounded-full bg-[#0B0B0B] flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-[#D4AF37]" />
              </div>
            </div>
            
            {/* Pulso animado */}
            <div className="absolute inset-0 rounded-full bg-[#D4AF37]/30 animate-ping" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-[#0B0B0B] text-[#D4AF37] px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl border border-[#D4AF37]/20">
                Fale com a IA Elite Life
                <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#0B0B0B]" />
              </div>
            </div>
          </div>
        </button>
      )}

      {/* Janela de chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] flex flex-col bg-[#0B0B0B] rounded-2xl shadow-2xl border border-[#D4AF37]/20 overflow-hidden">
          {/* Cabeçalho */}
          <div className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5C3] to-[#D4AF37] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B0B0B] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B0B0B]">IA Elite Life</h3>
                <p className="text-xs text-[#0B0B0B]/70">Sua Tutora Pessoal</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-[#0B0B0B]/10 hover:bg-[#0B0B0B]/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-[#0B0B0B]" />
            </button>
          </div>

          {/* Subtexto */}
          <div className="px-4 py-2 bg-[#1A1A1A] border-b border-[#D4AF37]/10">
            <p className="text-xs text-[#D4AF37]/70">
              Pergunte qualquer coisa sobre a plataforma, sua rotina e seus estudos.
            </p>
          </div>

          {/* Área de mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0B0B0B]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] text-[#0B0B0B]"
                      : "bg-[#1A1A1A] text-[#F5F5F5] border border-[#D4AF37]/20"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  
                  {/* Botões de ação */}
                  {message.buttons && message.buttons.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.buttons.map((button, index) => (
                        <button
                          key={index}
                          onClick={() => handleButtonAction(button.action, button.href)}
                          className="w-full px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg text-sm font-medium transition-colors border border-[#D4AF37]/30"
                        >
                          {button.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Indicador de digitação */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A1A] rounded-2xl px-4 py-3 border border-[#D4AF37]/20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Campo de entrada */}
          <div className="p-4 bg-[#1A1A1A] border-t border-[#D4AF37]/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Digite sua pergunta..."
                className="flex-1 px-4 py-2 bg-[#0B0B0B] text-[#F5F5F5] rounded-lg border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none text-sm placeholder:text-[#F5F5F5]/30"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 text-[#0B0B0B]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Função para gerar resposta da IA baseada no contexto
function generateAIResponse(
  userInput: string,
  user: any,
  pathname: string
): Message {
  const input = userInput.toLowerCase();
  const userPlan = user?.plan || "free";

  // Detecção de contexto por página
  const pageContext = getPageContext(pathname);

  // Respostas sobre planos
  if (input.includes("plano") || input.includes("assinar") || input.includes("upgrade")) {
    return {
      id: Date.now().toString(),
      text: getPlanResponse(userPlan),
      sender: "ai",
      timestamp: new Date(),
      buttons: [{ label: "Ver Planos", action: "plans", href: "/plans" }],
    };
  }

  // Respostas sobre carteira inteligente
  if (input.includes("carteira") || input.includes("dinheiro") || input.includes("finanças")) {
    if (userPlan === "elite" || userPlan === "premium") {
      return {
        id: Date.now().toString(),
        text: "Ótimo! Como você está no plano " + (userPlan === "elite" ? "Elite" : "Premium") + ", tem acesso à Carteira Inteligente. Clique abaixo para abrir:",
        sender: "ai",
        timestamp: new Date(),
        buttons: [{ label: "Abrir Carteira Inteligente", action: "wallet", href: "/wallet" }],
      };
    } else {
      return {
        id: Date.now().toString(),
        text: "A Carteira Inteligente é um recurso premium liberado nos planos Elite e Anual.\n\nClique abaixo para ver os planos disponíveis 👇",
        sender: "ai",
        timestamp: new Date(),
        buttons: [{ label: "Ver Planos", action: "plans", href: "/plans" }],
      };
    }
  }

  // Respostas sobre cursos
  if (input.includes("curso") || input.includes("aula") || input.includes("estudar")) {
    return {
      id: Date.now().toString(),
      text: "Para acessar seus cursos, clique no botão abaixo:\n\nA constância é tudo! Continue estudando e completando suas atividades.",
      sender: "ai",
      timestamp: new Date(),
      buttons: [{ label: "Abrir Cursos", action: "courses", href: "/courses" }],
    };
  }

  // Respostas sobre quiz
  if (input.includes("quiz") || input.includes("teste") || input.includes("prova")) {
    return {
      id: Date.now().toString(),
      text: "O quiz é uma ótima forma de testar seus conhecimentos e ganhar XP!\n\nClique abaixo para começar:",
      sender: "ai",
      timestamp: new Date(),
      buttons: [{ label: "Começar Quiz", action: "quiz", href: "/quiz" }],
    };
  }

  // Respostas sobre vídeos
  if (input.includes("vídeo") || input.includes("video") || input.includes("assistir")) {
    return {
      id: Date.now().toString(),
      text: "Temos uma biblioteca completa de vídeos para você!\n\nClique abaixo para explorar:",
      sender: "ai",
      timestamp: new Date(),
      buttons: [{ label: "Abrir Vídeos", action: "videos", href: "/videos" }],
    };
  }

  // Respostas sobre perfil
  if (input.includes("perfil") || input.includes("editar") || input.includes("foto")) {
    return {
      id: Date.now().toString(),
      text: "Para editar seu nome, foto e idade, clique aqui:",
      sender: "ai",
      timestamp: new Date(),
      buttons: [{ label: "Editar Perfil", action: "profile", href: "/profile" }],
    };
  }

  // Respostas sobre ranking
  if (input.includes("ranking") || input.includes("medalha") || input.includes("posição")) {
    return {
      id: Date.now().toString(),
      text: "Veja sua posição no ranking e conquiste medalhas!\n\nQuanto mais você estuda, mais pontos ganha.",
      sender: "ai",
      timestamp: new Date(),
      buttons: [{ label: "Ver Ranking", action: "ranking", href: "/ranking" }],
    };
  }

  // Respostas sobre certificados
  if (input.includes("certificado") || input.includes("diploma")) {
    return {
      id: Date.now().toString(),
      text: "Seus certificados ficam salvos aqui. Complete cursos para ganhar novos certificados!",
      sender: "ai",
      timestamp: new Date(),
      buttons: [{ label: "Ver Certificados", action: "certificates", href: "/certificates" }],
    };
  }

  // Resposta padrão com contexto da página
  return {
    id: Date.now().toString(),
    text: `${pageContext}\n\nPosso te ajudar com:\n• Planos e assinaturas\n• Cursos e vídeos\n• Quiz e atividades\n• Perfil e configurações\n• Ranking e medalhas\n• Dicas de produtividade\n\nO que você gostaria de saber?`,
    sender: "ai",
    timestamp: new Date(),
    buttons: [
      { label: "Ver Planos", action: "plans", href: "/plans" },
      { label: "Abrir Cursos", action: "courses", href: "/courses" },
      { label: "Meu Plano Atual", action: "my-plan" },
    ],
  };
}

// Obter contexto da página atual
function getPageContext(pathname: string): string {
  if (pathname.includes("/courses")) return "Você está na área de Cursos.";
  if (pathname.includes("/videos")) return "Você está na área de Vídeos.";
  if (pathname.includes("/quiz")) return "Você está no Quiz.";
  if (pathname.includes("/ranking")) return "Você está vendo o Ranking.";
  if (pathname.includes("/plans")) return "Você está vendo os Planos disponíveis.";
  if (pathname.includes("/profile")) return "Você está no seu Perfil.";
  if (pathname.includes("/wallet")) return "Você está na Carteira Inteligente.";
  return "Bem-vindo à Elite Life!";
}

// Obter informações do plano
function getPlanInfo(plan: string): string {
  switch (plan) {
    case "free":
      return "🆓 **Plano Free**\n\nVocê está no plano Free, que libera apenas alguns recursos básicos.\n\nPara acessar cursos completos, vídeos, quiz avançado, ranking e IA Premium, considere fazer upgrade!";
    case "premium":
      return "🟡 **Plano Premium**\n\nVocê já tem acesso a cursos, vídeos, atividades e certificados.\n\nRecursos como IA Premium e Carteira Inteligente estão disponíveis no plano Elite.";
    case "elite":
      return "🟣 **Plano Elite**\n\nVocê é elite total! Tem acesso completo a tudo na plataforma.\n\nEm que posso te guiar hoje?";
    default:
      return "Não consegui identificar seu plano atual.";
  }
}

// Obter resposta sobre planos
function getPlanResponse(currentPlan: string): string {
  if (currentPlan === "elite") {
    return "Você já está no plano Elite, com acesso total a todos os recursos!\n\nAproveite ao máximo sua jornada. 🚀";
  }
  
  return "Veja nossos planos disponíveis:\n\n🆓 **Free** - Recursos básicos\n🟡 **Pro** - Cursos, vídeos e certificados\n🟠 **Pro Plus** - Quase tudo liberado\n🟣 **Elite/Anual** - Acesso total + IA Premium + Carteira Inteligente\n\nClique abaixo para ver detalhes:";
}
