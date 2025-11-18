import {
  UserProgress,
  XPEvolution,
  TrailProgress,
  CourseProgress,
  StreakData,
  PerformanceStats,
  UserGoal,
  RankingComparison,
  ActivityHistory,
} from '../types/progress';

export const mockUserProgress: UserProgress = {
  id: '1',
  name: 'Carlos Silva',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  level: 7,
  xp: 3450,
  xpToNextLevel: 4000,
  totalCourses: 24,
  completedCourses: 8,
  completedTrails: 2,
  totalMedals: 12,
  currentStreak: 15,
  longestStreak: 28,
};

export const mockXPEvolutionDaily: XPEvolution[] = [
  { date: '2024-01-15', xp: 120, label: 'Seg' },
  { date: '2024-01-16', xp: 85, label: 'Ter' },
  { date: '2024-01-17', xp: 150, label: 'Qua' },
  { date: '2024-01-18', xp: 95, label: 'Qui' },
  { date: '2024-01-19', xp: 180, label: 'Sex' },
  { date: '2024-01-20', xp: 110, label: 'Sáb' },
  { date: '2024-01-21', xp: 140, label: 'Dom' },
];

export const mockXPEvolutionWeekly: XPEvolution[] = [
  { date: '2024-W01', xp: 450, label: 'Sem 1' },
  { date: '2024-W02', xp: 620, label: 'Sem 2' },
  { date: '2024-W03', xp: 580, label: 'Sem 3' },
  { date: '2024-W04', xp: 720, label: 'Sem 4' },
];

export const mockXPEvolutionMonthly: XPEvolution[] = [
  { date: '2023-10', xp: 1200, label: 'Out' },
  { date: '2023-11', xp: 1850, label: 'Nov' },
  { date: '2023-12', xp: 2100, label: 'Dez' },
  { date: '2024-01', xp: 3450, label: 'Jan' },
];

export const mockTrailProgress: TrailProgress[] = [
  {
    id: '1',
    name: 'Finanças',
    icon: 'TrendingUp',
    progress: 75,
    totalCourses: 8,
    completedCourses: 6,
    xpEarned: 1200,
    medals: ['💰', '📈', '💎'],
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: '2',
    name: 'Mindset',
    icon: 'Brain',
    progress: 60,
    totalCourses: 10,
    completedCourses: 6,
    xpEarned: 950,
    medals: ['🧠', '⚡'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: '3',
    name: 'Produtividade',
    icon: 'Zap',
    progress: 40,
    totalCourses: 6,
    completedCourses: 2,
    xpEarned: 450,
    medals: ['⚡'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: '4',
    name: 'E-commerce',
    icon: 'ShoppingCart',
    progress: 25,
    totalCourses: 12,
    completedCourses: 3,
    xpEarned: 380,
    medals: [],
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: '5',
    name: 'Saúde',
    icon: 'Heart',
    progress: 10,
    totalCourses: 8,
    completedCourses: 1,
    xpEarned: 150,
    medals: [],
    color: 'from-red-500 to-rose-600',
  },
];

export const mockCourseProgress: CourseProgress[] = [
  {
    id: '1',
    title: 'Investimentos para Iniciantes',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop',
    progress: 85,
    hoursStudied: 12.5,
    xpEarned: 450,
    status: 'in-progress',
    lastAccessed: '2024-01-21',
  },
  {
    id: '2',
    title: 'Mindset Milionário',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    progress: 100,
    hoursStudied: 8.0,
    xpEarned: 600,
    status: 'completed',
    lastAccessed: '2024-01-18',
  },
  {
    id: '3',
    title: 'Gestão de Tempo',
    thumbnail: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=300&fit=crop',
    progress: 45,
    hoursStudied: 5.5,
    xpEarned: 220,
    status: 'in-progress',
    lastAccessed: '2024-01-20',
  },
];

export const mockStreakData: StreakData = {
  currentStreak: 15,
  longestStreak: 28,
  weeklyGoal: 7,
  weeklyProgress: 5,
  monthlyGoal: 25,
  monthlyProgress: 15,
  calendar: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2024, 0, i + 1).toISOString(),
    studied: Math.random() > 0.3,
  })),
};

export const mockPerformanceStats: PerformanceStats = {
  completionRate: 75,
  averageQuizScore: 85,
  totalHoursStudied: 48.5,
  hoursPerWeek: 12.5,
  quizzesCompleted: 42,
  activitiesCompleted: 156,
  challengesCompleted: 8,
  bestWeek: {
    week: 'Semana 4 - Jan',
    xp: 720,
  },
  bestMonth: {
    month: 'Janeiro 2024',
    xp: 3450,
  },
};

export const mockUserGoals: UserGoal[] = [
  {
    id: '1',
    title: 'Concluir 20 atividades',
    description: 'Meta mensal de atividades',
    type: 'monthly',
    progress: 15,
    target: 20,
    icon: 'Target',
    completed: false,
  },
  {
    id: '2',
    title: 'Estudar 7 dias seguidos',
    description: 'Manter constância semanal',
    type: 'weekly',
    progress: 5,
    target: 7,
    icon: 'Flame',
    completed: false,
  },
  {
    id: '3',
    title: 'Terminar 1 trilha',
    description: 'Concluir trilha de Finanças',
    type: 'custom',
    progress: 6,
    target: 8,
    icon: 'Award',
    completed: false,
  },
  {
    id: '4',
    title: 'Responder 100 quizzes',
    description: 'Meta trimestral de quizzes',
    type: 'custom',
    progress: 42,
    target: 100,
    icon: 'CheckCircle',
    completed: false,
  },
];

export const mockRankingComparison: RankingComparison = {
  userPosition: 12,
  userXP: 3450,
  top10Average: 5200,
  xpToTop10: 1750,
  suggestedActivities: [
    { activity: 'Concluir trilha de Finanças', xpGain: 500 },
    { activity: 'Finalizar 3 cursos em andamento', xpGain: 450 },
    { activity: 'Responder 20 quizzes', xpGain: 400 },
    { activity: 'Conquistar medalha "Constância"', xpGain: 300 },
  ],
  nextMedals: ['🏆 Top 10', '⭐ Elite Master', '💎 Diamante'],
};

export const mockActivityHistory: ActivityHistory[] = [
  {
    id: '1',
    type: 'course',
    title: 'Curso Concluído',
    description: 'Mindset Milionário',
    xpGained: 150,
    timestamp: '2024-01-21T14:30:00',
    icon: 'BookOpen',
  },
  {
    id: '2',
    type: 'medal',
    title: 'Medalha Conquistada',
    description: 'Produtor - 50 atividades concluídas',
    xpGained: 300,
    timestamp: '2024-01-20T18:45:00',
    icon: 'Award',
  },
  {
    id: '3',
    type: 'quiz',
    title: 'Quiz Finalizado',
    description: 'Investimentos Básicos - 90% de acertos',
    xpGained: 20,
    timestamp: '2024-01-20T10:15:00',
    icon: 'CheckCircle',
  },
  {
    id: '4',
    type: 'level',
    title: 'Nível Alcançado',
    description: 'Subiu para Elite Nível 7',
    xpGained: 0,
    timestamp: '2024-01-19T16:20:00',
    icon: 'TrendingUp',
  },
  {
    id: '5',
    type: 'activity',
    title: 'Atividade Concluída',
    description: 'Exercício de Gestão de Tempo',
    xpGained: 10,
    timestamp: '2024-01-19T09:30:00',
    icon: 'CheckSquare',
  },
];
