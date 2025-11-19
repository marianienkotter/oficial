"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import {
  ChevronLeft,
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  BookOpen,
  Target,
  AlertTriangle,
  Trophy,
  Zap
} from "lucide-react";
import { backupSystem } from "@/lib/backup-system";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Prova {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  xpReward: number;
  minScore: number;
  timeLimit: number; // em segundos
}

export default function ProvasPage() {
  const { user, isAuthenticated, updateProfile } = useAuth();
  const router = useRouter();
  const [selectedProva, setSelectedProva] = useState<Prova | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (selectedProva && !showResults && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            finishProva(answers);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [selectedProva, showResults, timeLeft]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const provas: Prova[] = [
    {
      id: "1",
      title: "Prova Final - Produtividade Avançada",
      description: "Avaliação completa sobre gestão de tempo, produtividade e alta performance",
      xpReward: 250,
      minScore: 7,
      timeLimit: 600, // 10 minutos
      questions: [
        {
          id: 1,
          question: "Qual é o princípio fundamental da Técnica Pomodoro?",
          options: [
            "Trabalhar 8 horas seguidas sem parar",
            "Dividir o trabalho em blocos de 25 minutos com pausas curtas",
            "Fazer todas as tarefas ao mesmo tempo",
            "Trabalhar apenas quando estiver inspirado"
          ],
          correctAnswer: 1,
          explanation: "A Técnica Pomodoro divide o trabalho em intervalos de 25 minutos (pomodoros) seguidos de pausas de 5 minutos, aumentando o foco e reduzindo a fadiga mental."
        },
        {
          id: 2,
          question: "O que significa a sigla SMART em definição de metas?",
          options: [
            "Simple, Measurable, Achievable, Relevant, Timely",
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Strategic, Meaningful, Actionable, Realistic, Trackable",
            "Specific, Meaningful, Ambitious, Relevant, Timely"
          ],
          correctAnswer: 1,
          explanation: "SMART: Specific (Específico), Measurable (Mensurável), Achievable (Alcançável), Relevant (Relevante), Time-bound (Com prazo definido)."
        },
        {
          id: 3,
          question: "Qual quadrante da Matriz de Eisenhower deve ser priorizado?",
          options: [
            "Urgente e Importante (Quadrante 1)",
            "Não Urgente mas Importante (Quadrante 2)",
            "Urgente mas Não Importante (Quadrante 3)",
            "Não Urgente e Não Importante (Quadrante 4)"
          ],
          correctAnswer: 1,
          explanation: "O Quadrante 2 (Não Urgente mas Importante) deve ser priorizado pois contém atividades estratégicas que previnem crises e geram resultados de longo prazo."
        },
        {
          id: 4,
          question: "O que é 'Deep Work' segundo Cal Newport?",
          options: [
            "Trabalhar em horários noturnos",
            "Trabalho focado sem distrações em tarefas cognitivamente exigentes",
            "Trabalhar em equipe",
            "Trabalhar mais de 12 horas por dia"
          ],
          correctAnswer: 1,
          explanation: "Deep Work é o estado de concentração profunda sem distrações, focado em tarefas cognitivamente exigentes que geram alto valor."
        },
        {
          id: 5,
          question: "Qual é a regra dos 2 minutos de David Allen (GTD)?",
          options: [
            "Trabalhar apenas 2 minutos por hora",
            "Se uma tarefa leva menos de 2 minutos, faça imediatamente",
            "Fazer pausas de 2 minutos a cada hora",
            "Planejar o dia em 2 minutos"
          ],
          correctAnswer: 1,
          explanation: "Se uma tarefa pode ser feita em menos de 2 minutos, você deve fazê-la imediatamente em vez de adiá-la, evitando acúmulo de pequenas tarefas."
        },
        {
          id: 6,
          question: "O que é 'batching' em gestão de tempo?",
          options: [
            "Fazer várias tarefas ao mesmo tempo (multitasking)",
            "Agrupar tarefas similares para fazer de uma vez",
            "Adiar tarefas para o final do dia",
            "Delegar todas as tarefas para outras pessoas"
          ],
          correctAnswer: 1,
          explanation: "Batching é agrupar tarefas similares e executá-las em um único bloco de tempo, reduzindo o custo de troca de contexto e aumentando a eficiência."
        },
        {
          id: 7,
          question: "Qual é o melhor momento para planejar o dia seguinte?",
          options: [
            "Logo ao acordar",
            "Durante o almoço",
            "No final do dia anterior",
            "Não é necessário planejar"
          ],
          correctAnswer: 2,
          explanation: "Planejar no final do dia anterior permite começar o próximo dia com clareza e direção, sem perder tempo decidindo o que fazer."
        },
        {
          id: 8,
          question: "O que é a 'Lei de Parkinson'?",
          options: [
            "O trabalho se expande para preencher o tempo disponível",
            "Quanto mais você trabalha, mais produtivo fica",
            "Tarefas importantes devem ser feitas primeiro",
            "É impossível fazer tudo em um dia"
          ],
          correctAnswer: 0,
          explanation: "A Lei de Parkinson afirma que o trabalho se expande para preencher o tempo disponível para sua conclusão, por isso é importante definir prazos apertados."
        },
        {
          id: 9,
          question: "Qual é o principal benefício de fazer pausas regulares?",
          options: [
            "Economizar energia elétrica",
            "Aumentar a concentração e prevenir fadiga mental",
            "Reduzir o tempo total de trabalho",
            "Evitar reuniões"
          ],
          correctAnswer: 1,
          explanation: "Pausas regulares ajudam a manter a concentração, prevenir fadiga mental, aumentar a criatividade e melhorar a produtividade geral."
        },
        {
          id: 10,
          question: "Qual é o principal objetivo do método GTD (Getting Things Done)?",
          options: [
            "Trabalhar mais rápido",
            "Capturar, organizar e executar todas as tarefas de forma sistemática",
            "Delegar todas as tarefas",
            "Trabalhar menos horas"
          ],
          correctAnswer: 1,
          explanation: "O GTD é um sistema de produtividade que visa capturar todas as tarefas e compromissos, organizá-los e executá-los de forma sistemática e eficiente."
        }
      ]
    },
    {
      id: "2",
      title: "Prova Final - Inteligência Emocional",
      description: "Avaliação completa sobre inteligência emocional, autoconhecimento e habilidades sociais",
      xpReward: 300,
      minScore: 7,
      timeLimit: 720, // 12 minutos
      questions: [
        {
          id: 1,
          question: "Quais são os cinco pilares da Inteligência Emocional segundo Daniel Goleman?",
          options: [
            "Felicidade, Tristeza, Raiva, Medo, Surpresa",
            "Autoconsciência, Autorregulação, Motivação, Empatia, Habilidades Sociais",
            "Pensamento, Sentimento, Ação, Reflexão, Comunicação",
            "Corpo, Mente, Espírito, Emoção, Razão"
          ],
          correctAnswer: 1,
          explanation: "Os cinco pilares são: Autoconsciência, Autorregulação, Motivação, Empatia e Habilidades Sociais."
        },
        {
          id: 2,
          question: "O que é autoconsciência emocional?",
          options: [
            "Controlar as emoções dos outros",
            "Reconhecer e entender suas próprias emoções",
            "Evitar sentir emoções negativas",
            "Expressar todas as emoções sem filtro"
          ],
          correctAnswer: 1,
          explanation: "Autoconsciência emocional é a capacidade de reconhecer e entender suas próprias emoções e como elas afetam seus pensamentos e comportamentos."
        },
        {
          id: 3,
          question: "O que significa ter empatia?",
          options: [
            "Concordar com tudo que os outros dizem",
            "Sentir pena das pessoas",
            "Compreender e compartilhar os sentimentos dos outros",
            "Evitar conflitos a todo custo"
          ],
          correctAnswer: 2,
          explanation: "Empatia é a capacidade de compreender e compartilhar os sentimentos dos outros, colocando-se no lugar deles."
        },
        {
          id: 4,
          question: "Qual é a melhor forma de lidar com emoções negativas intensas?",
          options: [
            "Ignorá-las completamente",
            "Expressá-las imediatamente sem pensar",
            "Reconhecê-las, entendê-las e escolher como responder",
            "Culpar os outros por elas"
          ],
          correctAnswer: 2,
          explanation: "A melhor abordagem é reconhecer as emoções, entender sua origem e escolher conscientemente como responder a elas."
        },
        {
          id: 5,
          question: "O que é autorregulação emocional?",
          options: [
            "Nunca sentir emoções negativas",
            "Controlar e gerenciar suas emoções de forma saudável",
            "Reprimir todas as emoções",
            "Deixar as emoções controlarem suas ações"
          ],
          correctAnswer: 1,
          explanation: "Autorregulação é a capacidade de controlar e gerenciar suas emoções de forma saudável, sem reprimi-las ou deixá-las dominar."
        },
        {
          id: 6,
          question: "Por que a inteligência emocional é importante no ambiente de trabalho?",
          options: [
            "Para manipular colegas",
            "Para melhorar relacionamentos, comunicação e tomada de decisões",
            "Para evitar trabalhar em equipe",
            "Não é importante no trabalho"
          ],
          correctAnswer: 1,
          explanation: "A IE melhora relacionamentos, comunicação, resolução de conflitos e tomada de decisões no ambiente profissional."
        },
        {
          id: 7,
          question: "O que é resiliência emocional?",
          options: [
            "Nunca enfrentar dificuldidades",
            "Capacidade de se recuperar de adversidades e se adaptar",
            "Evitar situações desafiadoras",
            "Ignorar problemas"
          ],
          correctAnswer: 1,
          explanation: "Resiliência emocional é a capacidade de se recuperar de adversidades, aprender com elas e se adaptar positivamente."
        },
        {
          id: 8,
          question: "Como a inteligência emocional pode ser desenvolvida?",
          options: [
            "É impossível desenvolver, é algo inato",
            "Através de prática, autoconhecimento e feedback",
            "Apenas com medicação",
            "Evitando emoções"
          ],
          correctAnswer: 1,
          explanation: "A IE pode ser desenvolvida através de prática consciente, autoconhecimento, reflexão e feedback construtivo."
        },
        {
          id: 9,
          question: "O que é escuta ativa?",
          options: [
            "Ouvir música enquanto trabalha",
            "Prestar atenção plena ao que o outro diz, sem julgar",
            "Interromper para dar conselhos",
            "Pensar na resposta enquanto o outro fala"
          ],
          correctAnswer: 1,
          explanation: "Escuta ativa é prestar atenção plena ao que o outro está dizendo, sem julgar ou preparar uma resposta enquanto ele fala."
        },
        {
          id: 10,
          question: "Qual é o papel da motivação intrínseca na inteligência emocional?",
          options: [
            "Não tem relação com IE",
            "Impulsiona ações baseadas em valores pessoais e satisfação interna",
            "É menos importante que recompensas externas",
            "Deve ser evitada"
          ],
          correctAnswer: 1,
          explanation: "A motivação intrínseca impulsiona ações baseadas em valores pessoais e satisfação interna, sendo fundamental para a IE."
        }
      ]
    }
  ];

  const handleSelectProva = (prova: Prova) => {
    setSelectedProva(prova);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setScore(0);
    setTimeLeft(prova.timeLimit);
    setAttempts(0);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < selectedProva!.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishProva(newAnswers);
    }
  };

  const finishProva = async (finalAnswers: number[]) => {
    const correctAnswers = finalAnswers.filter(
      (answer, index) => answer === selectedProva!.questions[index].correctAnswer
    ).length;
    setScore(correctAnswers);
    setShowResults(true);
    setAttempts(attempts + 1);

    // Se passou (nota >= 7), adicionar XP e salvar progresso
    if (correctAnswers >= selectedProva!.minScore) {
      const newXP = (user.pontos || 0) + selectedProva!.xpReward;
      await updateProfile({ pontos: newXP });
      
      // Salvar backup automático
      if (user.id) {
        await backupSystem.autoBackup(user.id, { ...user, pontos: newXP }, "action");
      }
    }
  };

  const retakeProva = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setScore(0);
    setTimeLeft(selectedProva!.timeLimit);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Tela de prova em andamento
  if (selectedProva && !showResults) {
    const question = selectedProva.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedProva.questions.length) * 100;

    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-t-2xl p-6 border-x border-t border-[#D4AF37]/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black text-white">{selectedProva.title}</h2>
              <div className={`flex items-center gap-2 ${timeLeft < 60 ? "text-red-400 animate-pulse" : "text-[#D4AF37]"}`}>
                <Clock className="w-5 h-5" />
                <span className="text-xl font-bold">{formatTime(timeLeft)}</span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="relative h-3 bg-black/40 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#D4AF37] to-amber-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Questão {currentQuestion + 1} de {selectedProva.questions.length}
            </p>
          </div>

          {/* Question Card */}
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-b-2xl p-8 border-x border-b border-[#D4AF37]/20">
            <h3 className="text-xl font-bold text-white mb-6">{question.question}</h3>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-4 bg-black/40 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-xl transition-all text-white font-semibold"
                >
                  <span className="text-[#D4AF37] font-black mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tela de resultados
  if (showResults && selectedProva) {
    const passed = score >= selectedProva.minScore;
    const percentage = (score / selectedProva.questions.length) * 100;

    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className={`bg-gradient-to-br ${passed ? "from-green-900/20 to-emerald-900/20" : "from-red-900/20 to-rose-900/20"} rounded-2xl p-8 border ${passed ? "border-green-500/30" : "border-red-500/30"}`}>
            {/* Result Header */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${passed ? "bg-green-500/20" : "bg-red-500/20"} mb-4`}>
                {passed ? (
                  <Trophy className="w-16 h-16 text-green-400 animate-bounce" />
                ) : (
                  <AlertTriangle className="w-16 h-16 text-red-400 animate-pulse" />
                )}
              </div>
              <h2 className={`text-4xl font-black mb-2 ${passed ? "text-green-400" : "text-red-400"}`}>
                {passed ? "🎉 Parabéns! Você passou!" : "❌ Você não atingiu a nota mínima"}
              </h2>
              <p className="text-gray-400 text-lg">
                {passed
                  ? `Você acertou ${score} de ${selectedProva.questions.length} questões e ganhou ${selectedProva.xpReward} XP!`
                  : `Você acertou ${score} de ${selectedProva.questions.length} questões. Nota mínima: ${selectedProva.minScore}`}
              </p>
              {!passed && (
                <p className="text-red-400 font-bold mt-2">
                  Estude e tente novamente!
                </p>
              )}
            </div>

            {/* Score Display */}
            <div className="bg-black/40 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 font-semibold text-lg">Sua Nota</span>
                <span className={`text-5xl font-black ${passed ? "text-green-400" : "text-red-400"}`}>
                  {score}/{selectedProva.questions.length}
                </span>
              </div>
              <div className="relative h-6 bg-black/60 rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 ${passed ? "bg-gradient-to-r from-green-500 to-emerald-600" : "bg-gradient-to-r from-red-500 to-rose-600"} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-center text-gray-400 mt-2">{percentage.toFixed(0)}% de aproveitamento</p>
            </div>

            {/* Detailed Results Table */}
            <div className="space-y-4 mb-6">
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#D4AF37]" />
                Tabela de Respostas Detalhadas
              </h3>
              <div className="bg-black/40 rounded-xl overflow-hidden border border-[#D4AF37]/20">
                <table className="w-full">
                  <thead className="bg-[#D4AF37]/10">
                    <tr>
                      <th className="text-left p-4 text-[#D4AF37] font-bold">Questão</th>
                      <th className="text-left p-4 text-[#D4AF37] font-bold">Sua Resposta</th>
                      <th className="text-center p-4 text-[#D4AF37] font-bold">Resultado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D4AF37]/10">
                    {selectedProva.questions.map((q, index) => {
                      const userAnswer = answers[index];
                      const isCorrect = userAnswer === q.correctAnswer;

                      return (
                        <tr key={q.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-4">
                            <p className="text-white font-semibold text-sm">{q.question}</p>
                          </td>
                          <td className="p-4">
                            <p className={`text-sm ${isCorrect ? "text-green-400" : "text-red-400"}`}>
                              {q.options[userAnswer]}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-green-400 mt-1">
                                ✓ Correta: {q.options[q.correctAnswer]}
                              </p>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {isCorrect ? (
                              <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" />
                            ) : (
                              <XCircle className="w-6 h-6 text-red-400 mx-auto" />
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Explanations */}
            <div className="space-y-3 mb-6">
              <h3 className="text-xl font-black text-white">Explicações</h3>
              {selectedProva.questions.map((q, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`bg-black/40 rounded-xl p-4 border ${isCorrect ? "border-green-500/30" : "border-red-500/30"}`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="text-white font-semibold mb-1">Questão {index + 1}</p>
                        <p className="text-sm text-gray-400 italic">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              {!passed && (
                <button
                  onClick={retakeProva}
                  className="flex-1 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all text-lg"
                >
                  Refazer Prova
                </button>
              )}
              <Link
                href="/home"
                className={`${passed ? "flex-1" : "flex-1"} py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-center text-lg`}
              >
                {passed ? "Ir para Próximo Módulo" : "Voltar ao Início"}
              </Link>
            </div>

            {!passed && (
              <p className="text-center text-gray-500 text-sm mt-4">
                Tentativa {attempts} - Continue estudando para melhorar!
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Tela de seleção de provas
  return (
    <div className="min-h-screen bg-[#000000] pb-12">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/home"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Link>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Provas Finais</h1>
              <p className="text-gray-400 mt-1">Avaliações completas com nota mínima de 7 para aprovação</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Aviso importante */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-black text-white mb-2">Atenção: Prova Rigorosa</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Nota mínima para aprovação: <span className="text-[#D4AF37] font-bold">7 de 10</span></li>
                <li>• Se tirar menos de 7, você precisará refazer a prova</li>
                <li>• O progresso só será liberado após aprovação</li>
                <li>• Tempo limitado para cada prova</li>
                <li>• Leia com atenção cada questão</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {provas.map((prova) => (
            <div
              key={prova.id}
              className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer"
              onClick={() => handleSelectProva(prova)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-[#D4AF37] to-amber-500 p-3 rounded-xl">
                  <Trophy className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white mb-1">{prova.title}</h3>
                  <p className="text-gray-400 text-sm">{prova.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <BookOpen className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Questões</p>
                  <p className="text-lg font-black text-white">{prova.questions.length}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <Target className="w-5 h-5 text-red-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Nota Mín.</p>
                  <p className="text-lg font-black text-white">{prova.minScore}</p>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <Clock className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Tempo</p>
                  <p className="text-lg font-black text-white">{prova.timeLimit / 60}min</p>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <Zap className="w-5 h-5 text-[#D4AF37] mx-auto mb-1" />
                  <p className="text-xs text-gray-400">XP</p>
                  <p className="text-lg font-black text-[#D4AF37]">{prova.xpReward}</p>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all">
                Iniciar Prova
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
