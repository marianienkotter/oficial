'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Upload,
  Trophy,
  Clock,
  Target,
  Sparkles,
  AlertCircle,
  Home,
  Send
} from 'lucide-react';
import { activities, calculateActivityScore, type Activity, type ActivityQuestion } from '@/lib/activities';

export default function ActivityPage() {
  const params = useParams();
  const router = useRouter();
  const activityId = params.id as string;
  
  const activity = activities.find(a => a.id === activityId);
  
  const [answers, setAnswers] = useState<(string | number)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [startTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [activityStarted, setActivityStarted] = useState(false);

  useEffect(() => {
    if (!activity) {
      router.push('/activities');
    }
  }, [activity, router]);

  if (!activity) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Atividade não encontrada</h2>
          <Link href="/activities">
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold rounded-xl hover:scale-105 transition-transform">
              Voltar às Atividades
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleStartActivity = () => {
    setActivityStarted(true);
    setAnswers(new Array(activity.questions.length).fill(''));
  };

  const handleAnswerChange = (questionIndex: number, value: string | number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleFinishActivity = () => {
    const finalScore = calculateActivityScore(activity, answers);
    setScore(finalScore);
    setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    setShowResult(true);
  };

  const allAnswersFilled = answers.every((answer, index) => {
    const question = activity.questions[index];
    if (question.type === 'multiple_choice') {
      return answer !== '' && answer !== -1;
    }
    if (question.type === 'essay') {
      return typeof answer === 'string' && answer.trim().length > 0;
    }
    return true;
  });

  // Tela inicial da atividade
  if (!activityStarted && !showResult) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/activities">
            <button className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-8">
              <ArrowLeft className="w-5 h-5" />
              Voltar às Atividades
            </button>
          </Link>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-3xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-amber-600 mb-6">
                <FileText className="w-10 h-10 text-black" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {activity.title}
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {activity.description}
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Duração Estimada</p>
                <p className="text-white font-bold">{activity.duration} min</p>
              </div>
              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-4 text-center">
                <Target className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Questões</p>
                <p className="text-white font-bold">{activity.questions.length}</p>
              </div>
              <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-4 text-center">
                <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-gray-400 text-sm">XP Recompensa</p>
                <p className="text-white font-bold">+{activity.xpReward} XP</p>
              </div>
            </div>

            {/* Tipo de Atividade */}
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-6 mb-8">
              <h3 className="text-[#D4AF37] font-bold text-lg mb-3">
                {activity.autoCorrect ? '✅ Atividade Auto-Corrigida' : '📝 Atividade com Feedback Personalizado'}
              </h3>
              <p className="text-gray-300">
                {activity.autoCorrect 
                  ? 'Esta atividade será corrigida automaticamente ao finalizar.'
                  : 'Suas respostas serão avaliadas por um instrutor e você receberá feedback personalizado.'
                }
              </p>
            </div>

            {/* Botão Iniciar */}
            <button
              onClick={handleStartActivity}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 text-lg"
            >
              Iniciar Atividade
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela de resultado
  if (showResult) {
    const isPassed = score !== null && score >= 7;
    const isPendingReview = !activity.autoCorrect;

    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className={`bg-gradient-to-br ${isPendingReview ? 'from-yellow-900/50 to-black' : isPassed ? 'from-green-900/50 to-black' : 'from-blue-900/50 to-black'} border ${isPendingReview ? 'border-yellow-500/30' : isPassed ? 'border-green-500/30' : 'border-blue-500/30'} rounded-3xl p-8 md:p-12`}>
            {/* Ícone e Título */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${isPendingReview ? 'bg-yellow-500/20' : isPassed ? 'bg-green-500/20' : 'bg-blue-500/20'} mb-6 animate-pulse`}>
                {isPendingReview ? (
                  <AlertCircle className="w-16 h-16 text-yellow-500" />
                ) : isPassed ? (
                  <CheckCircle className="w-16 h-16 text-green-500" />
                ) : (
                  <Send className="w-16 h-16 text-blue-500" />
                )}
              </div>
              <h1 className={`text-4xl md:text-5xl font-black mb-4 ${isPendingReview ? 'text-yellow-500' : isPassed ? 'text-green-500' : 'text-blue-500'}`}>
                {isPendingReview 
                  ? '⏳ Aguardando Correção'
                  : isPassed 
                    ? '🎉 Atividade Concluída!'
                    : '✅ Atividade Enviada!'
                }
              </h1>
              <p className="text-gray-300 text-lg">
                {isPendingReview 
                  ? 'Suas respostas foram enviadas e estão sendo avaliadas. Você receberá feedback em breve!'
                  : isPassed 
                    ? 'Parabéns! Você completou esta atividade com sucesso!'
                    : 'Sua atividade foi enviada e registrada com sucesso!'
                }
              </p>
            </div>

            {/* Estatísticas (apenas se auto-corrigida) */}
            {activity.autoCorrect && score !== null && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-2">Nota</p>
                  <p className={`text-4xl font-black ${isPassed ? 'text-green-500' : 'text-blue-500'}`}>
                    {score.toFixed(1)}
                  </p>
                </div>
                <div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-2">Tempo</p>
                  <p className="text-4xl font-black text-white">
                    {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
                  </p>
                </div>
              </div>
            )}

            {/* XP Ganho */}
            {(activity.autoCorrect && isPassed) || !activity.autoCorrect ? (
              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 border border-[#D4AF37]/50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                    <div>
                      <p className="text-white font-bold text-lg">
                        {isPendingReview ? 'XP Pendente' : 'XP Conquistado'}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {isPendingReview 
                          ? 'Você receberá o XP após a correção'
                          : 'Continue assim para desbloquear medalhas!'
                        }
                      </p>
                    </div>
                  </div>
                  <p className="text-3xl font-black text-[#D4AF37]">+{activity.xpReward} XP</p>
                </div>
              </div>
            ) : null}

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <button className="w-full bg-white/5 border-2 border-[#D4AF37] text-[#D4AF37] font-bold py-4 rounded-xl hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-2">
                  <Home className="w-5 h-5" />
                  Voltar à Home
                </button>
              </Link>
              <Link href="/activities" className="flex-1">
                <button className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                  Ver Próxima Atividade
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tela da atividade em andamento
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/activities">
            <button className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-4">
              <ArrowLeft className="w-5 h-5" />
              Sair
            </button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{activity.title}</h1>
        </div>

        {/* Questões */}
        <div className="space-y-8 mb-8">
          {activity.questions.map((question, index) => (
            <div key={question.id} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-3xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-black">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{question.question}</h3>
                  {question.maxWords && (
                    <p className="text-gray-400 text-sm">Máximo: {question.maxWords} palavras</p>
                  )}
                </div>
              </div>

              {/* Multiple Choice */}
              {question.type === 'multiple_choice' && question.options && (
                <div className="space-y-3">
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerChange(index, optionIndex)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        answers[index] === optionIndex
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                          : 'border-gray-700 hover:border-[#D4AF37]/50 bg-gray-900/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          answers[index] === optionIndex
                            ? 'border-[#D4AF37] bg-[#D4AF37]'
                            : 'border-gray-600'
                        }`}>
                          {answers[index] === optionIndex && (
                            <CheckCircle className="w-4 h-4 text-black" />
                          )}
                        </div>
                        <span className="text-white">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Essay */}
              {question.type === 'essay' && (
                <textarea
                  value={answers[index] as string || ''}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  placeholder="Digite sua resposta aqui..."
                  rows={8}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none resize-none"
                />
              )}

              {/* Upload */}
              {question.type === 'upload' && (
                <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-[#D4AF37]/50 transition-all cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 mb-2">Clique para fazer upload ou arraste o arquivo</p>
                  {question.acceptedFormats && (
                    <p className="text-gray-500 text-sm">
                      Formatos aceitos: {question.acceptedFormats.join(', ')}
                    </p>
                  )}
                  <input
                    type="file"
                    accept={question.acceptedFormats?.join(',')}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleAnswerChange(index, file.name);
                      }
                    }}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botão Concluir */}
        <button
          onClick={handleFinishActivity}
          disabled={!allAnswersFilled}
          className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-lg ${
            allAnswersFilled
              ? 'bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-black hover:scale-105'
              : 'bg-gray-800 text-gray-600 cursor-not-allowed'
          }`}
        >
          Concluir Atividade
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
