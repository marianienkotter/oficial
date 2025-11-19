"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Activity, Apple, Dumbbell, ChevronRight, Sparkles } from 'lucide-react';
import { AIChat } from '@/components/custom/ai-chat';

interface QuizAnswers {
  peso: string;
  altura: string;
  idade: string;
  objetivo: string;
  nivelAtividade: string;
  habitosAlimentares: string;
  restricoes: string;
  rotinaTreeino: string;
  tempoDisponivel: string;
  horarioRefeicoes: string;
  historicoDieta: string;
}

export default function HealthAIPage() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'report'>('intro');
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [report, setReport] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const quizQuestions = [
    {
      id: 'peso',
      question: 'Qual é o seu peso atual? (kg)',
      type: 'number',
      placeholder: 'Ex: 70'
    },
    {
      id: 'altura',
      question: 'Qual é a sua altura? (cm)',
      type: 'number',
      placeholder: 'Ex: 175'
    },
    {
      id: 'idade',
      question: 'Qual é a sua idade?',
      type: 'number',
      placeholder: 'Ex: 25'
    },
    {
      id: 'objetivo',
      question: 'Qual é o seu objetivo principal?',
      type: 'select',
      options: ['Perder peso', 'Ganhar massa muscular', 'Definição muscular', 'Manter peso saudável']
    },
    {
      id: 'nivelAtividade',
      question: 'Qual é o seu nível de atividade física?',
      type: 'select',
      options: ['Sedentário', 'Levemente ativo', 'Moderadamente ativo', 'Muito ativo', 'Extremamente ativo']
    },
    {
      id: 'habitosAlimentares',
      question: 'Como você descreveria seus hábitos alimentares atuais?',
      type: 'select',
      options: ['Muito ruins', 'Ruins', 'Regulares', 'Bons', 'Excelentes']
    },
    {
      id: 'restricoes',
      question: 'Você tem alguma restrição alimentar?',
      type: 'text',
      placeholder: 'Ex: Lactose, glúten, vegetariano... (ou "Nenhuma")'
    },
    {
      id: 'rotinaTreeino',
      question: 'Você já treina atualmente?',
      type: 'select',
      options: ['Não treino', 'Treino 1-2x por semana', 'Treino 3-4x por semana', 'Treino 5-6x por semana', 'Treino todos os dias']
    },
    {
      id: 'tempoDisponivel',
      question: 'Quanto tempo você tem disponível por dia para treinar?',
      type: 'select',
      options: ['Menos de 30 min', '30-45 min', '45-60 min', '60-90 min', 'Mais de 90 min']
    },
    {
      id: 'horarioRefeicoes',
      question: 'Qual horário você costuma fazer as refeições principais?',
      type: 'text',
      placeholder: 'Ex: Café 7h, Almoço 12h, Jantar 19h'
    },
    {
      id: 'historicoDieta',
      question: 'Você já fez alguma dieta antes? Qual foi o resultado?',
      type: 'text',
      placeholder: 'Conte sua experiência...'
    }
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNextQuestion = () => {
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(prev => prev + 1);
    } else {
      generateReport();
    }
  };

  const handlePreviousQuestion = () => {
    if (quizStep > 0) {
      setQuizStep(prev => prev - 1);
    }
  };

  const generateReport = async () => {
    setIsGenerating(true);
    
    try {
      const prompt = `Com base nas seguintes informações do usuário, gere um relatório completo de saúde:

Peso: ${answers.peso}kg
Altura: ${answers.altura}cm
Idade: ${answers.idade} anos
Objetivo: ${answers.objetivo}
Nível de Atividade: ${answers.nivelAtividade}
Hábitos Alimentares: ${answers.habitosAlimentares}
Restrições: ${answers.restricoes}
Rotina de Treino: ${answers.rotinaTreeino}
Tempo Disponível: ${answers.tempoDisponivel}
Horário das Refeições: ${answers.horarioRefeicoes}
Histórico: ${answers.historicoDieta}

Gere um relatório COMPLETO e DETALHADO contendo:

1. ANÁLISE GERAL
- IMC e classificação
- Peso ideal
- Gasto calórico diário (TMB)
- Calorias recomendadas por dia

2. PLANO DE DIETA PERSONALIZADO
- Café da manhã (com opções)
- Lanche da manhã
- Almoço (com opções)
- Lanche da tarde
- Pré-treino
- Pós-treino
- Jantar (com opções)
- Ceia (se necessário)
- Lista de compras
- Alimentos a evitar
- Substituições saudáveis

3. PLANO DE TREINO PERSONALIZADO
- Divisão de treino (ex: ABC, ABCDE, etc)
- Exercícios específicos para cada dia
- Séries e repetições
- Tempo de descanso
- Dicas de execução
- Progressão sugerida

4. MACRONUTRIENTES
- Proteínas (g/dia)
- Carboidratos (g/dia)
- Gorduras (g/dia)
- Distribuição por refeição

5. DICAS EXTRAS
- Hidratação
- Suplementação (se necessário)
- Sono e recuperação
- Consistência

Seja MUITO detalhado, prático e motivador. Use formatação clara com títulos, subtítulos e listas.`;

      const response = await fetch('/api/ai/generate-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      setReport(data.report);
      setStep('report');
    } catch (error) {
      console.error('Erro ao gerar relatório:', error);
      alert('Erro ao gerar relatório. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  const currentQuestion = quizQuestions[quizStep];
  const currentAnswer = answers[currentQuestion?.id as keyof QuizAnswers] || '';
  const canProceed = currentAnswer.trim() !== '';

  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-[#000000] p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/home" className="text-[#D4AF37] hover:text-amber-500 font-semibold mb-8 inline-block">
            ← Voltar ao Dashboard
          </Link>

          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#D4AF37]/50">
              <Heart className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              IA de Saúde Elite Life
            </h1>
            <p className="text-xl text-gray-400">
              Relatório completo + Dieta + Treino personalizados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Análise Completa</h3>
              <p className="text-gray-400 text-sm">IMC, TMB, peso ideal e mais</p>
            </div>

            <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dieta Personalizada</h3>
              <p className="text-gray-400 text-sm">Plano alimentar completo</p>
            </div>

            <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Treino Personalizado</h3>
              <p className="text-gray-400 text-sm">Exercícios, séries e repetições</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20 mb-8">
            <h2 className="text-2xl font-black text-white mb-4">Como funciona?</h2>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">1</span>
                <span>Responda 11 perguntas sobre sua saúde e objetivos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">2</span>
                <span>Nossa IA analisa suas informações e gera um relatório completo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">3</span>
                <span>Receba seu plano de dieta e treino personalizado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">4</span>
                <span>Converse com a IA para tirar dúvidas e ajustar o plano</span>
              </li>
            </ol>
          </div>

          <button
            onClick={() => setStep('quiz')}
            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black text-xl font-black rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-[#D4AF37]/50 flex items-center justify-center gap-3"
          >
            Começar Quiz de Saúde
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  if (step === 'quiz') {
    return (
      <div className="min-h-screen bg-[#000000] p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#D4AF37] font-bold">
                Pergunta {quizStep + 1} de {quizQuestions.length}
              </span>
              <span className="text-gray-400 text-sm">
                {Math.round(((quizStep + 1) / quizQuestions.length) * 100)}% completo
              </span>
            </div>
            <div className="w-full h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-600 transition-all duration-300"
                style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border-2 border-[#D4AF37]/30">
            <h2 className="text-2xl font-bold text-white mb-6">{currentQuestion.question}</h2>

            {currentQuestion.type === 'select' && (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerChange(currentQuestion.id, option)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      currentAnswer === option
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                        : 'border-[#2A2A2A] hover:border-[#D4AF37]/50 text-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {(currentQuestion.type === 'text' || currentQuestion.type === 'number') && (
              <input
                type={currentQuestion.type}
                value={currentAnswer}
                onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                className="w-full p-4 bg-[#2A2A2A] text-white rounded-xl border-2 border-[#D4AF37]/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            )}

            <div className="flex gap-4 mt-8">
              {quizStep > 0 && (
                <button
                  onClick={handlePreviousQuestion}
                  className="flex-1 py-3 bg-[#2A2A2A] text-white font-bold rounded-xl hover:bg-[#3A3A3A] transition-all"
                >
                  Voltar
                </button>
              )}
              <button
                onClick={handleNextQuestion}
                disabled={!canProceed || isGenerating}
                className="flex-1 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isGenerating ? 'Gerando...' : quizStep === quizQuestions.length - 1 ? 'Gerar Relatório' : 'Próxima'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'report') {
    const systemPrompt = `Você é a IA de Saúde da Elite Life. O usuário acabou de receber um relatório personalizado de saúde, dieta e treino.

RELATÓRIO DO USUÁRIO:
${report}

SUAS FUNÇÕES:
1. Responder dúvidas sobre o relatório
2. Explicar termos técnicos (IMC, TMB, macronutrientes)
3. Sugerir substituições de alimentos
4. Ajustar o plano conforme necessidade
5. Dar dicas de execução de exercícios
6. Motivar e encorajar o usuário
7. Explicar a importância de cada refeição
8. Sugerir receitas saudáveis

IMPORTANTE:
- Seja prático e objetivo
- Use linguagem acessível
- Seja motivador
- Baseie-se sempre no relatório gerado
- Não recomende suplementos específicos sem orientação médica
- Incentive consulta com profissionais quando necessário`;

    return (
      <div className="min-h-screen bg-[#000000] p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/home" className="text-[#D4AF37] hover:text-amber-500 font-semibold mb-8 inline-block">
            ← Voltar ao Dashboard
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Relatório */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white">Seu Relatório de Saúde</h2>
                    <p className="text-gray-400">Gerado pela IA Elite Life</p>
                  </div>
                </div>
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                    {report}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setStep('intro');
                  setQuizStep(0);
                  setAnswers({});
                  setReport('');
                }}
                className="w-full py-3 bg-[#2A2A2A] text-white font-bold rounded-xl hover:bg-[#3A3A3A] transition-all"
              >
                Fazer Novo Quiz
              </button>
            </div>

            {/* Chat com IA */}
            <div className="lg:col-span-1">
              <AIChat
                title="IA de Saúde"
                description="Tire suas dúvidas"
                systemPrompt={systemPrompt}
                suggestedQuestions={[
                  "Como calcular meu IMC?",
                  "Posso substituir algum alimento?",
                  "Como fazer o exercício X corretamente?",
                  "Posso ajustar o horário das refeições?",
                  "Quanto de água devo beber?"
                ]}
                className="h-[800px] sticky top-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
