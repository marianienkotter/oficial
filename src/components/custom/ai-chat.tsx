"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, X, Minimize2, Maximize2, Loader2, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  title: string;
  description: string;
  systemPrompt: string;
  suggestedQuestions?: string[];
  onClose?: () => void;
  isMinimized?: boolean;
  onToggleMinimize?: () => void;
  className?: string;
}

export function AIChat({
  title,
  description,
  systemPrompt,
  suggestedQuestions = [],
  onClose,
  isMinimized,
  onToggleMinimize,
  className = ''
}: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          })),
          systemPrompt
        })
      });

      if (!response.ok) throw new Error('Erro ao enviar mensagem');

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro. Tente novamente.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  if (isMinimized) {
    return null;
  }

  return (
    <div className={`flex flex-col bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] border-2 border-[#D4AF37] rounded-2xl shadow-2xl shadow-[#D4AF37]/20 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#D4AF37] to-amber-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="text-black font-black text-lg">{title}</h3>
            <p className="text-black/70 text-xs font-semibold">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {onToggleMinimize && (
            <button
              onClick={onToggleMinimize}
              className="p-2 hover:bg-black/10 rounded-lg transition-colors"
              aria-label="Minimizar"
            >
              <Minimize2 className="w-5 h-5 text-black" />
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/10 rounded-lg transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px] max-h-[500px]">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-black" />
            </div>
            <p className="text-white font-bold text-lg mb-2">Como posso ajudar?</p>
            <p className="text-gray-400 text-sm mb-6">Escolha uma pergunta ou digite sua dúvida</p>
            
            {suggestedQuestions.length > 0 && (
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="w-full text-left px-4 py-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-xl text-white text-sm transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black'
                  : 'bg-[#2A2A2A] text-white border border-[#D4AF37]/20'
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-black/60' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-2xl p-4">
              <Loader2 className="w-5 h-5 text-[#D4AF37] animate-spin" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-[#D4AF37]/20">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-[#2A2A2A] text-white px-4 py-3 rounded-xl border border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
