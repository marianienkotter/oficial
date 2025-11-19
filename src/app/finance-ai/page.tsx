"use client";

import { useState } from 'react';
import Link from 'next/link';
import { DollarSign, TrendingUp, PiggyBank, Target, ChevronRight } from 'lucide-react';
import { AIChat } from '@/components/custom/ai-chat';

interface QuizAnswers {
  rendaMensal: string;
  gastosFixos: string;
  gastosVariaveis: string;
  dividas: string;
  objetivos: string;
  tempoMetas: string;
  quantoPoupar: string;
  nivelRisco: string;
  idade: string;
  investimentos: string;
  situacaoTrabalhista: string;
}

export default function FinanceAIPage() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'report'>('intro');
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [report, setReport] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const quizQuestions = [
    {
      id: 'rendaMensal',
      question: 'Qual é a sua renda mensal? (R$)',
      type: 'number',
      placeholder: 'Ex: 3000'
    },
    {
      id: 'gastosFixos',
      question: 'Quanto você gasta com despesas fixas? (R$)',
      type: 'number',
      placeholder: 'Ex: 1500 (aluguel, contas, etc)'
    },
    {
      id: 'gastosVariaveis',
      question: 'Quanto você gasta com despesas variáveis? (R$)',
      type: 'number',
      placeholder: 'Ex: 800 (alimentação, lazer, etc)'
    },
    {
      id: 'dividas',
      question: 'Você possui dívidas? Quanto? (R$)',
      type: 'text',
      placeholder: 'Ex: R$ 5000 no cartão (ou "Não tenho dívidas")'
    },
    {
      id: 'objetivos',
      question: 'Quais são seus objetivos financeiros?',
      type: 'text',
      placeholder: 'Ex: Comprar casa, viajar, aposentadoria...'
    },
    {
      id: 'tempoMetas',
      question: 'Em quanto tempo quer atingir suas metas?',
      type: 'select',
      options: ['Curto prazo (até 1 ano)', 'Médio prazo (1-5 anos)', 'Longo prazo (5+ anos)', 'Não tenho prazo definido']
    },
    {
      id: 'quantoPoupar',
      question: 'Quanto você consegue poupar por mês? (R$)',
      type: 'number',
      placeholder: 'Ex: 500'
    },
    {
      id: 'nivelRisco',
      question: 'Qual seu perfil de investidor?',
      type: 'select',
      options: ['Conservador (baixo risco)', 'Moderado (risco médio)', 'Arrojado (alto risco)', 'Não sei']
    },
    {
      id: 'idade',
      question: 'Qual é a sua idade?',
      type: 'number',
      placeholder: 'Ex: 30'
    },
    {
      id: 'investimentos',
      question: 'Você já investe? Em quê?',
      type: 'text',
      placeholder: 'Ex: Poupança, Tesouro Direto... (ou "Não invisto")'
    },
    {
      id: 'situacaoTrabalhista',
      question: 'Qual é a sua situação trabalhista?',
      type: 'select',
      options: ['CLT', 'Autônomo', 'Empresário', 'Desempregado', 'Estudante']
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
      const prompt = `Com base nas seguintes informações financeiras do usuário, gere um relatório completo e um plano de ação:

Renda Mensal: R$ ${answers.rendaMensal}
Gastos Fixos: R$ ${answers.gastosFixos}
Gastos Variáveis: R$ ${answers.gastosVariaveis}
Dívidas: ${answers.dividas}
Objetivos: ${answers.objetivos}
Prazo das Metas: ${answers.tempoMetas}
Capacidade de Poupança: R$ ${answers.quantoPoupar}
Perfil de Risco: ${answers.nivelRisco}
Idade: ${answers.idade} anos
Investimentos Atuais: ${answers.investimentos}
Situação: ${answers.situacaoTrabalhista}

Gere um relatório COMPLETO e DETALHADO contendo:

1. ANÁLISE FINANCEIRA ATUAL
- Situação geral das finanças
- Percentual de gastos vs renda
- Capacidade de poupança real
- Pontos de atenção

2. DIAGNÓSTICO
- Saúde financeira (nota de 0-10)
- Principais problemas identificados
- Oportunidades de melhoria
- Riscos atuais

3. PLANO DE ORGANIZAÇÃO FINANCEIRA
- Como cortar gastos desnecessários
- Reorganização do orçamento
- Distribuição ideal da renda (50/30/20 ou similar)
- Criação de reserva de emergência

4. ESTRATÉGIA PARA DÍVIDAS (se houver)
- Priorização de pagamentos
- Método bola de neve ou avalanche
- Cronograma de quitação
- Como evitar novas dívidas

5. PLANO DE INVESTIMENTOS (genérico)
- Perfil de investidor adequado
- Tipos de investimento recomendados (SEM citar ativos específicos)
- Estratégia de diversificação
- Importância da educação financeira

6. OBJETIVOS DE CURTO, MÉDIO E LONGO PRAZO
- Metas específicas para cada período
- Valores necessários
- Cronograma de conquistas
- Milestones importantes

7. PLANO DE 7 DIAS PARA REORGANIZAÇÃO
- Dia 1: [ação específica]
- Dia 2: [ação específica]
- ... até Dia 7

8. DICAS DE CONSTRUÇÃO DE PATRIMÔNIO
- Mentalidade financeira
- Hábitos de pessoas ricas
- Livros e recursos recomendados
- Próximos passos

IMPORTANTE:
- NÃO cite ativos específicos (ações, fundos, etc)
- Foque em educação financeira e organização
- Seja motivador mas realista
- Use exemplos práticos
- Inclua alertas sobre riscos

AVISO OBRIGATÓRIO NO FINAL:
"⚠️ IMPORTANTE: Este relatório é educacional e não constitui recomendação de investimento. Não posso recomendar ativos específicos. Consulte um profissional certificado (CFP, CPA) para orientações personalizadas sobre investimentos."`;

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
              <DollarSign className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              IA Financeira Elite Life
            </h1>
            <p className="text-xl text-gray-400">
              Seu coach pessoal de finanças e investimentos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Análise Completa</h3>
              <p className="text-gray-400 text-sm">Diagnóstico da sua saúde financeira</p>
            </div>

            <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <PiggyBank className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Plano Personalizado</h3>
              <p className="text-gray-400 text-sm">Estratégia de organização financeira</p>
            </div>

            <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Metas e Objetivos</h3>
              <p className="text-gray-400 text-sm">Cronograma de conquistas</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20 mb-8">
            <h2 className="text-2xl font-black text-white mb-4">Como funciona?</h2>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">1</span>
                <span>Responda 11 perguntas sobre sua situação financeira</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">2</span>
                <span>Nossa IA analisa suas finanças e gera um diagnóstico completo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">3</span>
                <span>Receba um plano de ação personalizado para organizar suas finanças</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">4</span>
                <span>Converse com a IA para tirar dúvidas e ajustar estratégias</span>
              </li>
            </ol>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-amber-400 font-bold mb-2">Aviso Importante</h3>
                <p className="text-gray-300 text-sm">
                  Esta IA fornece orientações educacionais sobre organização financeira e não constitui recomendação de investimento. 
                  Não recomendamos ativos específicos. Para investimentos, consulte um profissional certificado.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setStep('quiz')}
            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black text-xl font-black rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-[#D4AF37]/50 flex items-center justify-center gap-3"
          >
            Começar Quiz Financeiro
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
    const systemPrompt = `Você é a IA Financeira da Elite Life. O usuário acabou de receber um relatório personalizado de finanças.

RELATÓRIO DO USUÁRIO:
${report}

SUAS FUNÇÕES:
1. Responder dúvidas sobre o relatório
2. Explicar conceitos financeiros (juros compostos, diversificação, etc)
3. Sugerir ajustes no orçamento
4. Ajudar a criar metas financeiras realistas
5. Orientar sobre organização financeira
6. Motivar e encorajar disciplina financeira
7. Explicar estratégias de investimento (SEM recomendar ativos)
8. Ajudar a priorizar gastos e investimentos

REGRAS IMPORTANTES:
- NÃO recomende ativos específicos (ações, fundos, criptomoedas)
- Foque em educação financeira e organização
- Seja prático e motivador
- Use exemplos do dia a dia
- Incentive consulta com profissionais certificados para investimentos
- Baseie-se sempre no relatório gerado

AVISO PADRÃO:
Sempre que falar de investimentos, lembre: "Não posso recomendar ativos específicos. Consulte um profissional certificado (CFP, CPA) para orientações personalizadas."`;

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
                    <DollarSign className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white">Seu Relatório Financeiro</h2>
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
                title="IA Financeira"
                description="Coach de Finanças"
                systemPrompt={systemPrompt}
                suggestedQuestions={[
                  "Como criar uma reserva de emergência?",
                  "Qual a diferença entre renda fixa e variável?",
                  "Como sair das dívidas mais rápido?",
                  "Quanto devo poupar por mês?",
                  "Como começar a investir?"
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
