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
  Home
} from 'lucide-react';
import { quizzes } from '@/lib/quizzes';

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

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;
  
  const quiz = quizzes.find(q => q.id === quizId);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  // Perguntas simuladas (em produção viria do backend)
  const questions: Question[] = [
    {
      id: 1,
      question: "Qual é o primeiro passo para criar um negócio de sucesso?",
      options: [
        "Conseguir investimento",
        "Validar a ideia com o mercado",
        "Contratar funcionários",
        "Criar um site"
      ],
      correctAnswer: 1,
      explanation: "Validar a ideia com o mercado é essencial para garantir que existe demanda real antes de investir tempo e recursos."
    },
    {
      id: 2,
      question: "O que significa MVP (Minimum Viable Product)?",
      options: [
        "Produto mais vendido",
        "Produto mínimo viável",
        "Melhor valor possível",
        "Marketing viral premium"
      ],
      correctAnswer: 1,
      explanation: "MVP significa Produto Mínimo Viável - a versão mais simples do produto que permite validar a ideia com clientes reais."
    },
    {
      id: 3,
      question: "Qual métrica é mais importante para um e-commerce iniciante?",
      options: [
        "Número de visitantes",
        "Taxa de conversão",
        "Seguidores nas redes sociais",
        "Número de produtos"
      ],
      correctAnswer: 1,
      explanation: "A taxa de conversão mostra quantos visitantes realmente compram, sendo a métrica mais importante para rentabilidade."
    },
    {
      id: 4,
      question: "O que é funil de vendas?",
      options: [
        "Uma ferramenta de marketing",
        "O processo que leva o cliente da descoberta à compra",
        "Um tipo de anúncio",
        "Uma estratégia de precificação"
      ],
      correctAnswer: 1,
      explanation: "O funil de vendas representa a jornada do cliente desde o primeiro contato até a compra final."
    },
    {
      id: 5,
      question: "Qual é a melhor forma de precificar um produto digital?",
      options: [
        "Copiar o preço dos concorrentes",
        "Cobrar o máximo possível",
        "Baseado no valor percebido pelo cliente",
        "Sempre oferecer o menor preço"
      ],
      correctAnswer: 2,
      explanation: "Precificar baseado no valor percebido garante que você capture o real valor que entrega ao cliente."
    },
    {
      id: 6,
      question: "O que é CAC (Custo de Aquisição de Cliente)?",
      options: [
        "Custo total da empresa",
        "Quanto custa adquirir um novo cliente",
        "Valor do produto",
        "Margem de lucro"
      ],
      correctAnswer: 1,
      explanation: "CAC é o investimento necessário em marketing e vendas para conquistar cada novo cliente."
    },
    {
      id: 7,
      question: "Qual é a importância do LTV (Lifetime Value)?",
      options: [
        "Medir vendas diárias",
        "Calcular o valor total que um cliente gera ao longo do tempo",
        "Definir preços",
        "Controlar estoque"
      ],
      correctAnswer: 1,
      explanation: "LTV mostra quanto lucro um cliente gera durante todo seu relacionamento com a empresa."
    },
    {
      id: 8,
      question: "O que é remarketing?",
      options: [
        "Criar novos produtos",
        "Impactar novamente pessoas que já interagiram com sua marca",
        "Mudar o nome da empresa",
        "Fazer promoções"
      ],
      correctAnswer: 1,
      explanation: "Remarketing permite impactar novamente visitantes que não compraram na primeira visita, aumentando conversões."
    },
    {
      id: 9,
      question: "Qual é o principal objetivo do marketing de conteúdo?",
      options: [
        "Vender diretamente",
        "Educar e atrair o público-alvo",
        "Aumentar seguidores",
        "Fazer propaganda"
      ],
      correctAnswer: 1,
      explanation: "Marketing de conteúdo foca em educar e atrair o público, construindo autoridade e confiança antes da venda."
    },
    {
      id: 10,
      question: "O que é taxa de churn?",
      options: [
        "Taxa de crescimento",
        "Percentual de clientes que cancelam o serviço",
        "Margem de lucro",
        "Taxa de conversão"
      ],
      correctAnswer: 1,
      explanation: "Churn é a taxa de cancelamento - quanto menor, melhor para a saúde do negócio."
    }
  ];

  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && quizStarted && !showResults) {
      handleFinishQuiz();
    }
  }, [timeLeft, quizStarted]);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeLeft((quiz?.duration || 15) * 60);
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
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
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
    setQuizStarted(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!quiz) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Quiz não encontrado</h1>
          <button
            onClick={() => router.push('/quizzes')}
            className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl"
          >
            Voltar para Quizzes
          </button>
        </div>
      </div>
    );
  }

  // Tela inicial
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-3xl p-8 border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/30">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#D4AF37]/50">
              <Trophy className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">{quiz.title}</h1>
            <p className="text-[#9A9A9A] text-lg">{quiz.description}</p>
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
                <span className="text-white font-bold">{quiz.duration} minutos</span>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20">
              <div className="flex items-center justify-between">
                <span className="text-[#9A9A9A]">Nota Mínima</span>
                <span className="text-[#D4AF37] font-bold">7.0</span>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20">
              <div className="flex items-center justify-between">
                <span className="text-[#9A9A9A]">XP ao Passar</span>
                <span className="text-[#D4AF37] font-bold">+{quiz.xpReward} XP</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 rounded-xl p-6 border border-[#D4AF37] mb-8">
            <p className="text-white text-center font-semibold">
              ⚠️ Você precisa tirar no mínimo <span className="text-[#D4AF37]">7.0</span> para ser aprovado!
            </p>
          </div>

          <button
            onClick={startQuiz}
            className="w-full px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-[#D4AF37]/50 flex items-center justify-center gap-2"
          >
            Iniciar Quiz
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
      <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] p-4 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Card de Resultado */}
          <div className={`bg-gradient-to-br ${
            passed 
              ? 'from-[#D4AF37]/20 to-amber-600/20 border-[#D4AF37]' 
              : 'from-red-500/20 to-red-700/20 border-red-500'
          } rounded-3xl p-8 border-2 shadow-2xl mb-8`}>
            <div className="text-center mb-8">
              <div className={`w-24 h-24 ${
                passed 
                  ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600' 
                  : 'bg-gradient-to-r from-red-500 to-red-700'
              } rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse`}>
                {passed ? (
                  <CheckCircle className="w-12 h-12 text-black" />
                ) : (
                  <XCircle className="w-12 h-12 text-white" />
                )}
              </div>

              <h1 className="text-4xl font-bold text-white mb-3">
                {passed ? '🎉 Parabéns!' : '😔 Não foi dessa vez'}
              </h1>
              
              <p className="text-2xl text-white mb-6">
                Sua nota: <span className={`font-bold ${passed ? 'text-[#D4AF37]' : 'text-red-500'}`}>
                  {score.toFixed(1)}
                </span>
              </p>

              <p className="text-[#9A9A9A] text-lg">
                Você acertou {correctAnswers} de {questions.length} questões
              </p>
            </div>

            {!passed && (
              <div className="bg-red-500/20 border border-red-500 rounded-xl p-6 mb-6">
                <p className="text-white text-center font-semibold">
                  Você precisa tirar no mínimo 7 para avançar. Refaça o quiz!
                </p>
              </div>
            )}

            {passed && (
              <div className="bg-[#D4AF37]/20 border border-[#D4AF37] rounded-xl p-6 mb-6">
                <p className="text-white text-center font-semibold">
                  ✅ Você ganhou +{quiz.xpReward} XP e desbloqueou a próxima etapa!
                </p>
              </div>
            )}
          </div>

          {/* Revisão das Respostas */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-8 border border-[#D4AF37]/20 mb-8">
            <h2 className="text-white font-bold text-2xl mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
              Revisão das Respostas
            </h2>

            <div className="space-y-6">
              {questions.map((question, index) => {
                const userAnswer = answers.find(a => a.questionId === question.id);
                const isCorrect = userAnswer?.isCorrect || false;

                return (
                  <div 
                    key={question.id}
                    className={`bg-[#1A1A1A] rounded-xl p-6 border-2 ${
                      isCorrect ? 'border-green-500/50' : 'border-red-500/50'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="text-white font-semibold text-lg mb-4">
                          {index + 1}. {question.question}
                        </p>

                        <div className="space-y-2 mb-4">
                          {question.options.map((option, optIndex) => {
                            const isUserAnswer = userAnswer?.selectedOption === optIndex;
                            const isCorrectAnswer = optIndex === question.correctAnswer;

                            return (
                              <div
                                key={optIndex}
                                className={`p-3 rounded-lg border-2 ${
                                  isCorrectAnswer
                                    ? 'bg-green-500/20 border-green-500'
                                    : isUserAnswer
                                    ? 'bg-red-500/20 border-red-500'
                                    : 'bg-[#2A2A2A] border-[#3A3A3A]'
                                }`}
                              >
                                <p className="text-white">
                                  {isCorrectAnswer && '✅ '}
                                  {isUserAnswer && !isCorrectAnswer && '❌ '}
                                  {option}
                                </p>
                              </div>
                            );
                          })}
                        </div>

                        <div className="bg-[#2A2A2A] rounded-lg p-4 border border-[#D4AF37]/20">
                          <p className="text-[#D4AF37] font-semibold mb-2">💡 Explicação:</p>
                          <p className="text-[#9A9A9A]">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-4">
            {!passed && (
              <button
                onClick={handleRetry}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Refazer Quiz
              </button>
            )}
            
            <button
              onClick={() => router.push('/quizzes')}
              className="flex-1 px-8 py-4 bg-[#2A2A2A] text-white font-bold rounded-xl hover:bg-[#3A3A3A] transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Voltar para Quizzes
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela do Quiz
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] p-4 pt-24">
      <div className="max-w-3xl mx-auto">
        {/* Header com Timer e Progresso */}
        <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-white font-bold">{formatTime(timeLeft)}</span>
            </div>
            <span className="text-[#9A9A9A]">
              Questão {currentQuestion + 1} de {questions.length}
            </span>
          </div>

          {/* Barra de Progresso */}
          <div className="w-full h-3 bg-[#1A1A1A] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-600 transition-all duration-500 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Pergunta */}
        <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-8 border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 mb-8">
          <h2 className="text-white font-bold text-2xl mb-8">
            {question.question}
          </h2>

          {/* Opções */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                className={`w-full p-5 rounded-xl text-left transition-all border-2 ${
                  selectedOption === index
                    ? 'bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border-[#D4AF37] scale-105 shadow-lg shadow-[#D4AF37]/30'
                    : 'bg-[#1A1A1A] border-[#3A3A3A] hover:border-[#D4AF37]/50 hover:scale-102'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedOption === index
                      ? 'bg-[#D4AF37] border-[#D4AF37]'
                      : 'border-[#9A9A9A]'
                  }`}>
                    {selectedOption === index && (
                      <CheckCircle className="w-5 h-5 text-black" />
                    )}
                  </div>
                  <span className="text-white font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Botão Próxima */}
        <button
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
          className={`w-full px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
            selectedOption !== null
              ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/50'
              : 'bg-[#2A2A2A] text-[#9A9A9A] cursor-not-allowed'
          }`}
        >
          {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Finalizar Quiz'}
          <ArrowRight className="w-5 h-5" />
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

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
