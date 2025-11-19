'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Trophy, 
  Clock, 
  ArrowRight,
  RotateCcw,
  Home,
  Award
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Answer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
}

export default function ProvaPage() {
  const params = useParams();
  const router = useRouter();
  const provaId = params.id as string;
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [provaStarted, setProvaStarted] = useState(false);

  // Perguntas da prova (em produção viria do backend)
  const questions: Question[] = [
    {
      id: 1,
      question: "Qual é a principal diferença entre empreendedorismo e intraempreendedorismo?",
      options: [
        "Empreendedorismo é criar negócios próprios, intraempreendedorismo é inovar dentro de empresas",
        "Não há diferença",
        "Intraempreendedorismo é mais arriscado",
        "Empreendedorismo é apenas para grandes empresas"
      ],
      correctAnswer: 0,
      explanation: "Empreendedorismo envolve criar e gerenciar seu próprio negócio, enquanto intraempreendedorismo é inovar e criar dentro de uma organização existente."
    },
    {
      id: 2,
      question: "O que é análise SWOT?",
      options: [
        "Uma ferramenta de vendas",
        "Análise de Forças, Fraquezas, Oportunidades e Ameaças",
        "Um tipo de marketing",
        "Uma estratégia de precificação"
      ],
      correctAnswer: 1,
      explanation: "SWOT (Strengths, Weaknesses, Opportunities, Threats) é uma ferramenta estratégica para avaliar fatores internos e externos do negócio."
    },
    {
      id: 3,
      question: "Qual é o objetivo principal do Canvas de Modelo de Negócios?",
      options: [
        "Criar logotipos",
        "Visualizar e estruturar todos os elementos-chave de um negócio",
        "Fazer propaganda",
        "Contratar funcionários"
      ],
      correctAnswer: 1,
      explanation: "O Business Model Canvas permite visualizar de forma clara todos os componentes essenciais de um modelo de negócio em uma única página."
    },
    {
      id: 4,
      question: "O que significa ROI (Return on Investment)?",
      options: [
        "Retorno sobre Investimento",
        "Receita Operacional Interna",
        "Registro de Operações",
        "Renda Organizada"
      ],
      correctAnswer: 0,
      explanation: "ROI é a métrica que mede o retorno financeiro obtido em relação ao investimento realizado."
    },
    {
      id: 5,
      question: "Qual é a importância do networking para empreendedores?",
      options: [
        "Apenas para fazer amigos",
        "Criar conexões estratégicas, parcerias e oportunidades de negócio",
        "Não é importante",
        "Só serve para grandes empresas"
      ],
      correctAnswer: 1,
      explanation: "Networking é fundamental para criar relacionamentos estratégicos que podem gerar parcerias, clientes, investidores e oportunidades."
    },
    {
      id: 6,
      question: "O que é pitch de vendas?",
      options: [
        "Um tipo de produto",
        "Apresentação rápida e persuasiva de uma ideia ou produto",
        "Uma estratégia de marketing",
        "Um modelo de negócio"
      ],
      correctAnswer: 1,
      explanation: "Pitch é uma apresentação concisa e convincente usada para vender uma ideia, produto ou serviço de forma rápida e eficaz."
    },
    {
      id: 7,
      question: "Qual é a principal função do fluxo de caixa?",
      options: [
        "Controlar vendas",
        "Monitorar entrada e saída de dinheiro do negócio",
        "Fazer marketing",
        "Contratar funcionários"
      ],
      correctAnswer: 1,
      explanation: "Fluxo de caixa é essencial para controlar a saúde financeira do negócio, monitorando todas as entradas e saídas de recursos."
    },
    {
      id: 8,
      question: "O que é escalabilidade de um negócio?",
      options: [
        "Aumentar preços",
        "Capacidade de crescer sem aumentar custos proporcionalmente",
        "Contratar mais funcionários",
        "Abrir filiais"
      ],
      correctAnswer: 1,
      explanation: "Escalabilidade é a capacidade de um negócio crescer sua receita significativamente sem aumentar custos na mesma proporção."
    },
    {
      id: 9,
      question: "Qual é o objetivo do marketing digital?",
      options: [
        "Apenas vender produtos",
        "Atrair, engajar e converter clientes através de canais digitais",
        "Criar sites",
        "Fazer propaganda tradicional"
      ],
      correctAnswer: 1,
      explanation: "Marketing digital visa atrair e engajar o público-alvo através de estratégias online para gerar conversões e fidelização."
    },
    {
      id: 10,
      question: "O que é proposta de valor?",
      options: [
        "O preço do produto",
        "Benefício único que diferencia seu produto da concorrência",
        "Uma estratégia de vendas",
        "Um tipo de marketing"
      ],
      correctAnswer: 1,
      explanation: "Proposta de valor é o conjunto de benefícios únicos que seu produto/serviço oferece e que o diferencia da concorrência."
    }
  ];

  useEffect(() => {
    if (provaStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && provaStarted && !showResults) {
      handleFinishProva();
    }
  }, [timeLeft, provaStarted]);

  const startProva = () => {
    setProvaStarted(true);
    setTimeLeft(30 * 60); // 30 minutos
  };

  const handleSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    
    setAnswers([
      ...answers,
      {
        questionId: questions[currentQuestion].id,
        selectedOption,
        isCorrect
      }
    ]);

    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleFinishProva();
    }
  };

  const handleFinishProva = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    return (correctAnswers / questions.length) * 10;
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResults(false);
    setProvaStarted(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Tela inicial
  if (!provaStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-3xl p-8 border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/30">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#D4AF37]/50">
              <Award className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Prova Final - Elite Life</h1>
            <p className="text-[#9A9A9A] text-lg">Avaliação completa de conhecimentos</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20">
              <div className="flex items-center justify-between">
                <span className="text-[#9A9A9A]">Questões</span>
                <span className="text-white font-bold">{questions.length}</span>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20">
              <div className="flex items-center justify-between">
                <span className="text-[#9A9A9A]">Duração</span>
                <span className="text-white font-bold">30 minutos</span>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20">
              <div className="flex items-center justify-between">
                <span className="text-[#9A9A9A]">Nota Mínima para Aprovação</span>
                <span className="text-[#D4AF37] font-bold text-xl">7.0 (70%)</span>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20">
              <div className="flex items-center justify-between">
                <span className="text-[#9A9A9A]">XP ao Passar</span>
                <span className="text-[#D4AF37] font-bold">+500 XP</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-xl p-6 border-2 border-red-500 mb-8">
            <p className="text-white text-center font-semibold mb-2">
              ⚠️ ATENÇÃO: NOTA MÍNIMA OBRIGATÓRIA
            </p>
            <p className="text-[#9A9A9A] text-center text-sm">
              Você precisa tirar no mínimo <span className="text-red-400 font-bold">7.0 (70%)</span> para ser aprovado.
              <br />
              Caso contrário, será necessário refazer a prova.
            </p>
          </div>

          <button
            onClick={startProva}
            className="w-full px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-[#D4AF37]/50 flex items-center justify-center gap-2"
          >
            Iniciar Prova
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Tela de resultados
  if (showResults) {
    const score = calculateScore();
    const passed = score >= 7;
    const correctAnswers = answers.filter(a => a.isCorrect).length;

    return (
      <div className={`min-h-screen bg-gradient-to-b ${
        passed 
          ? 'from-[#D4AF37]/10 via-[#1A1A1A] to-[#0B0B0B]' 
          : 'from-red-500/10 via-[#1A1A1A] to-[#0B0B0B]'
      } p-4 pt-24`}>
        <div className="max-w-5xl mx-auto">
          {/* Card de Resultado Principal */}
          <div className={`bg-gradient-to-br ${
            passed 
              ? 'from-[#D4AF37]/30 to-amber-600/30 border-[#D4AF37]' 
              : 'from-red-500/30 to-red-700/30 border-red-500'
          } rounded-3xl p-10 border-4 shadow-2xl mb-8 animate-slideUp`}>
            <div className="text-center mb-8">
              <div className={`w-32 h-32 ${
                passed 
                  ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600' 
                  : 'bg-gradient-to-r from-red-500 to-red-700'
              } rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse`}>
                {passed ? (
                  <Trophy className="w-16 h-16 text-black" />
                ) : (
                  <XCircle className="w-16 h-16 text-white" />
                )}
              </div>

              <h1 className="text-5xl font-bold text-white mb-4">
                {passed ? '🎉 APROVADO!' : '😔 REPROVADO'}
              </h1>
              
              <div className="mb-6">
                <p className="text-[#9A9A9A] text-xl mb-2">Sua nota final:</p>
                <p className={`text-7xl font-bold ${passed ? 'text-[#D4AF37]' : 'text-red-500'}`}>
                  {score.toFixed(1)}
                </p>
              </div>

              <p className="text-white text-xl">
                Você acertou <span className="font-bold">{correctAnswers}</span> de <span className="font-bold">{questions.length}</span> questões
              </p>
            </div>

            {!passed && (
              <div className="bg-red-500/30 border-2 border-red-500 rounded-2xl p-8 mb-6">
                <h3 className="text-white text-2xl font-bold text-center mb-3">
                  ❌ Você não atingiu a nota mínima
                </h3>
                <p className="text-white text-center text-lg">
                  É necessário tirar no mínimo <span className="font-bold text-red-300">7.0 (70%)</span> para ser aprovado.
                  <br />
                  <span className="text-red-300">Estude o conteúdo e tente novamente!</span>
                </p>
              </div>
            )}

            {passed && (
              <div className="bg-[#D4AF37]/30 border-2 border-[#D4AF37] rounded-2xl p-8 mb-6">
                <h3 className="text-white text-2xl font-bold text-center mb-3">
                  ✅ Parabéns pela aprovação!
                </h3>
                <p className="text-white text-center text-lg">
                  Você demonstrou excelente domínio do conteúdo!
                  <br />
                  <span className="text-[#D4AF37] font-bold">+500 XP adicionados ao seu perfil</span>
                  <br />
                  <span className="text-green-400">Próximo módulo desbloqueado! 🚀</span>
                </p>
              </div>
            )}
          </div>

          {/* Tabela de Revisão Detalhada */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20 mb-8">
            <h2 className="text-white font-bold text-3xl mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-[#D4AF37]" />
              Revisão Completa da Prova
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#D4AF37]">
                    <th className="text-left text-[#D4AF37] font-bold p-4">Questão</th>
                    <th className="text-left text-[#D4AF37] font-bold p-4">Sua Resposta</th>
                    <th className="text-center text-[#D4AF37] font-bold p-4">Resultado</th>
                    <th className="text-left text-[#D4AF37] font-bold p-4">Explicação</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((question, index) => {
                    const userAnswer = answers.find(a => a.questionId === question.id);
                    const isCorrect = userAnswer?.isCorrect || false;

                    return (
                      <tr 
                        key={question.id}
                        className={`border-b border-[#3A3A3A] ${
                          isCorrect ? 'bg-green-500/5' : 'bg-red-500/5'
                        }`}
                      >
                        <td className="p-4">
                          <p className="text-white font-semibold mb-2">
                            {index + 1}. {question.question}
                          </p>
                          <div className="space-y-1 text-sm">
                            {question.options.map((opt, optIdx) => {
                              const isUserAnswer = userAnswer?.selectedOption === optIdx;
                              const isCorrectAnswer = optIdx === question.correctAnswer;
                              
                              return (
                                <p 
                                  key={optIdx}
                                  className={`${
                                    isCorrectAnswer 
                                      ? 'text-green-400 font-bold' 
                                      : isUserAnswer 
                                      ? 'text-red-400 font-bold' 
                                      : 'text-[#9A9A9A]'
                                  }`}
                                >
                                  {isCorrectAnswer && '✅ '}
                                  {isUserAnswer && !isCorrectAnswer && '❌ '}
                                  {opt}
                                </p>
                              );
                            })}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`font-bold ${
                            isCorrect ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {userAnswer ? question.options[userAnswer.selectedOption] : 'Não respondida'}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          {isCorrect ? (
                            <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="w-8 h-8 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="p-4">
                          <div className="bg-[#1A1A1A] rounded-lg p-3 border border-[#D4AF37]/20">
                            <p className="text-[#D4AF37] font-semibold text-sm mb-1">💡 Explicação:</p>
                            <p className="text-[#9A9A9A] text-sm">{question.explanation}</p>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-4">
            {!passed && (
              <button
                onClick={handleRetry}
                className="flex-1 px-8 py-5 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold text-lg rounded-xl hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-6 h-6" />
                Refazer Prova
              </button>
            )}
            
            <button
              onClick={() => router.push('/home')}
              className="flex-1 px-8 py-5 bg-[#2A2A2A] text-white font-bold text-lg rounded-xl hover:bg-[#3A3A3A] transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-6 h-6" />
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela da Prova
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] p-4 pt-24">
      <div className="max-w-3xl mx-auto">
        {/* Header com Timer e Progresso */}
        <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border-2 border-[#D4AF37] mb-8 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-white font-bold text-xl">{formatTime(timeLeft)}</span>
            </div>
            <span className="text-[#9A9A9A] font-semibold">
              Questão {currentQuestion + 1} de {questions.length}
            </span>
          </div>

          {/* Barra de Progresso Animada */}
          <div className="w-full h-4 bg-[#1A1A1A] rounded-full overflow-hidden border border-[#D4AF37]/30">
            <div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-600 transition-all duration-500 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <p className="text-[#D4AF37] text-sm mt-2 text-right font-semibold">{progress.toFixed(0)}% completo</p>
        </div>

        {/* Pergunta */}
        <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-8 border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 mb-8">
          <h2 className="text-white font-bold text-2xl mb-8 leading-relaxed">
            {question.question}
          </h2>

          {/* Opções */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                className={`w-full p-6 rounded-xl text-left transition-all border-2 ${ 
                  selectedOption === index
                    ? 'bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border-[#D4AF37] scale-105 shadow-lg shadow-[#D4AF37]/30'
                    : 'bg-[#1A1A1A] border-[#3A3A3A] hover:border-[#D4AF37]/50 hover:scale-102'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${ 
                    selectedOption === index
                      ? 'bg-[#D4AF37] border-[#D4AF37] scale-110'
                      : 'border-[#9A9A9A]'
                  }`}>
                    {selectedOption === index && (
                      <CheckCircle className="w-6 h-6 text-black" />
                    )}
                  </div>
                  <span className="text-white font-medium text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Botão Próxima */}
        <button
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
          className={`w-full px-8 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${ 
            selectedOption !== null
              ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/50'
              : 'bg-[#2A2A2A] text-[#9A9A9A] cursor-not-allowed'
          }`}
        >
          {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Finalizar Prova'}
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
