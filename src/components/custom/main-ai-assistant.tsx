"use client";

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AIChat } from './ai-chat';
import { useAuth } from '@/lib/auth-context';

export function MainAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { user } = useAuth();

  const systemPrompt = `Você é a IA Tutor Geral da Elite Life, uma plataforma premium de transformação pessoal.

INFORMAÇÕES DO USUÁRIO:
- Nome: ${user?.nome || 'Usuário'}
- Plano atual: ${user?.plano_atual || 'free'}
- XP: ${user?.pontos || 0}
- Cursos concluídos: ${user?.cursos_concluidos || 0}

SUAS FUNÇÕES:
1. Responder TUDO sobre o aplicativo Elite Life
2. Explicar como usar: cursos, vídeos, provas, ranking, agenda, wallet, influencer pro, e-commerce, certificados
3. Ajudar com problemas de login, perfil, configurações
4. Explicar planos e assinaturas (Free, Pro, Pro Plus, Elite, Influencer Pro)
5. Explicar sistema de ranking, medalhas, XP e atividades
6. Orientar sobre quizzes, provas e certificados
7. Ajudar com dúvidas sobre pagamentos e cancelamentos

PLANOS DISPONÍVEIS:
- FREE: Acesso básico aos cursos
- PRO: Trilhas básicas desbloqueadas
- PRO PLUS: Trilhas completas + recursos avançados
- ELITE: Acesso total + área premium
- INFLUENCER PRO: IA de conteúdo + 400 dietas + scripts + thumbnails

REGRAS:
- Seja amigável, profissional e motivador
- Use o nome do usuário quando apropriado
- Adapte respostas ao plano atual do usuário
- Seja claro e objetivo
- Incentive upgrades quando relevante (sem ser insistente)
- Responda em português brasileiro

IMPORTANTE: Você é a IA PRINCIPAL do app. Não confunda com as IAs especializadas (Influencer Expert, Saúde, Financeira).`;

  const suggestedQuestions = [
    "Como funcionam os cursos?",
    "O que é o sistema de ranking?",
    "Como ganhar mais XP?",
    "Quais são os planos disponíveis?",
    "Como fazer provas e ganhar certificados?",
    "O que é o Influencer Pro?"
  ];

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full shadow-2xl shadow-[#D4AF37]/50 flex items-center justify-center hover:scale-110 transition-all group"
          aria-label="Abrir IA da Elite Life"
        >
          <MessageCircle className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-black/90 text-white text-sm font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Fale com a IA da Elite Life
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md">
          <AIChat
            title="IA Elite Life"
            description="Seu tutor pessoal"
            systemPrompt={systemPrompt}
            suggestedQuestions={suggestedQuestions}
            onClose={() => setIsOpen(false)}
            isMinimized={isMinimized}
            onToggleMinimize={() => setIsMinimized(!isMinimized)}
            className="h-[600px]"
          />
        </div>
      )}
    </>
  );
}
