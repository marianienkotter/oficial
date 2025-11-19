'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Trophy, 
  Clock,
  Target,
  Sparkles,
  AlertCircle,
  Home
} from 'lucide-react';
import { quizzes, calculateScore, type Quiz } from '@/lib/quizzes';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;
  
  const quiz = quizzes.find(q => q.id === quizId);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    if (!quiz) {
      router.push('/quizzes');
    }
  }, [quiz, router]);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Quiz não encontrado</h2>
          <Link href="/quizzes">
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold rounded-xl hover:scale-105 transition-transform">
              Voltar aos Quizzes
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setAnswers(new Array(quiz.questions.length).fill(-1));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] !== -1 ? answers[currentQuestion + 1] : null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] !== -1 ? answers[currentQuestion - 1] : null);
    }
  };

  const handleFinishQuiz = () => {
    const finalScore = calculateScore(quiz, answers);
    setScore(finalScore);
    setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    setShowResult(true);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(quiz.questions.length).fill(-1));
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizStarted(true);
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  const correctAnswers = answers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length;
  const isPassed = score >= 7;

  // Tela inicial do quiz
  if (!quizStarted && !showResult) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/quizzes">
            <button className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-8">
              <ArrowLeft className="w-5 h-5" />
              Voltar aos Quizzes
            </button>
          </Link>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-3xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-amber-600 mb-6">
                <Trophy className="w-10 h-10 text-black" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {quiz.title}
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {quiz.description}
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Duração</p>
                <p className="text-white font-bold">{quiz.duration} min</p>
              </div>
              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-4 text-center">
                <Target className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Perguntas</p>
                <p className="text-white font-bold">{quiz.questions.length}</p>
              </div>
              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-4 text-center">
                <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-gray-400 text-sm">XP Recompensa</p>
                <p className="text-white font-bold">+{quiz.xpReward} XP</p>
              </div>
            </div>

            {/* Instruções */}
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-6 mb-8">
              <h3 className="text-[#D4AF37] font-bold text-lg mb-3">📋 Instruções</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Leia cada pergunta com atenção</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Selecione a alternativa que você considera correta</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Você pode voltar e revisar suas respostas</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="font-bold">Nota mínima para aprovação: 7.0</span>
                </li>
              </ul>
            </div>

            {/* Botão Iniciar */}
            <button
              onClick={handleStartQuiz}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 text-lg"
            >
              Iniciar Quiz
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela de resultado
  if (showResult) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className={`bg-gradient-to-br ${isPassed ? 'from-green-900/50 to-black' : 'from-red-900/50 to-black'} border ${isPassed ? 'border-green-500/30' : 'border-red-500/30'} rounded-3xl p-8 md:p-12`}>
            {/* Ícone e Título */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${isPassed ? 'bg-green-500/20' : 'bg-red-500/20'} mb-6 animate-pulse`}>
                {isPassed ? (
                  <CheckCircle className="w-16 h-16 text-green-500" />
                ) : (
                  <XCircle className="w-16 h-16 text-red-500" />
                )}
              </div>
              <h1 className={`text-4xl md:text-5xl font-black mb-4 ${isPassed ? 'text-green-500' : 'text-red-500'}`}>
                {isPassed ? '🎉 Parabéns! Você passou!' : '❌ Você precisa refazer o quiz'}
              </h1>
              <p className="text-gray-300 text-lg">
                {isPassed 
                  ? 'Você atingiu a nota mínima e conquistou este desafio!'
                  : 'Para concluir esta etapa, você deve alcançar nota mínima 7.0'
                }
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
                <p className="text-gray-400 text-sm mb-2">Nota Final</p>
                <p className={`text-4xl font-black ${isPassed ? 'text-green-500' : 'text-red-500'}`}>
                  {score.toFixed(1)}
                </p>
              </div>
              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
                <p className="text-gray-400 text-sm mb-2">Acertos</p>
                <p className="text-4xl font-black text-white">
                  {correctAnswers}/{quiz.questions.length}
                </p>
              </div>
              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
                <p className="text-gray-400 text-sm mb-2">Tempo</p>
                <p className="text-4xl font-black text-white">
                  {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
                </p>
              </div>
            </div>

            {/* XP Ganho (apenas se passou) */}
            {isPassed && (
              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 border border-[#D4AF37]/50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                    <div>
                      <p className="text-white font-bold text-lg">XP Conquistado</p>
                      <p className="text-gray-400 text-sm">Continue assim para desbloquear medalhas!</p>
                    </div>
                  </div>
                  <p className="text-3xl font-black text-[#D4AF37]">+{quiz.xpReward} XP</p>
                </div>
              </div>
            )}

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              {isPassed ? (
                <>
                  <Link href="/" className="flex-1">
                    <button className="w-full bg-white/5 border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-4 rounded-xl hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-2">
                      <Home className="w-5 h-5" />
                      Voltar à Home
                    </button>
                  </Link>
                  <Link href="/quizzes" className="flex-1">
                    <button className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                      Ver Próximo Quiz
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleRetry}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  Refazer Quiz Agora
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tela do quiz em andamento
  const question = quiz.questions[currentQuestion];
  const isLastQuestion = currentQuestion === quiz.questions.length - 1;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header com progresso */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link href="/quizzes">
              <button className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Sair
              </button>
            </Link>
            <div className="text-gray-400 font-semibold">
              Pergunta {currentQuestion + 1} de {quiz.questions.length}
            </div>
          </div>
          
          {/* Barra de progresso */}
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-[#D4AF37] to-yellow-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Pergunta */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-3xl p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {question.question}
          </h2>

          {/* Alternativas */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                  selectedAnswer === index
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                    : 'border-gray-700 hover:border-[#D4AF37]/50 bg-gray-900/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedAnswer === index
                      ? 'border-[#D4AF37] bg-[#D4AF37]'
                      : 'border-gray-600'
                  }`}>
                    {selectedAnswer === index && (
                      <CheckCircle className="w-5 h-5 text-black" />
                    )}
                  </div>
                  <span className="text-white font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
              currentQuestion === 0
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-white/5 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>

          {isLastQuestion ? (
            <button
              onClick={handleFinishQuiz}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
                selectedAnswer === null
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black hover:scale-105'
              }`}
            >
              Concluir Quiz
              <CheckCircle className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
                selectedAnswer === null
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black hover:scale-105'
              }`}
            >
              Próxima
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
