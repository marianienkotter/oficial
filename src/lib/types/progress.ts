export interface UserProgress {
  id: string;
  name: string;
  avatar: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  totalCourses: number;
  completedCourses: number;
  completedTrails: number;
  totalMedals: number;
  currentStreak: number;
  longestStreak: number;
}

export interface XPEvolution {
  date: string;
  xp: number;
  label: string;
}

export interface TrailProgress {
  id: string;
  name: string;
  icon: string;
  progress: number;
  totalCourses: number;
  completedCourses: number;
  xpEarned: number;
  medals: string[];
  color: string;
}

export interface CourseProgress {
  id: string;
  title: string;
  thumbnail: string;
  progress: number;
  hoursStudied: number;
  xpEarned: number;
  status: 'in-progress' | 'completed';
  lastAccessed: string;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  weeklyGoal: number;
  weeklyProgress: number;
  monthlyGoal: number;
  monthlyProgress: number;
  calendar: {
    date: string;
    studied: boolean;
  }[];
}

export interface PerformanceStats {
  completionRate: number;
  averageQuizScore: number;
  totalHoursStudied: number;
  hoursPerWeek: number;
  quizzesCompleted: number;
  activitiesCompleted: number;
  challengesCompleted: number;
  bestWeek: {
    week: string;
    xp: number;
  };
  bestMonth: {
    month: string;
    xp: number;
  };
}

export interface UserGoal {
  id: string;
  title: string;
  description: string;
  type: 'weekly' | 'monthly' | 'custom';
  progress: number;
  target: number;
  icon: string;
  completed: boolean;
}

export interface RankingComparison {
  userPosition: number;
  userXP: number;
  top10Average: number;
  xpToTop10: number;
  suggestedActivities: {
    activity: string;
    xpGain: number;
  }[];
  nextMedals: string[];
}

export interface ActivityHistory {
  id: string;
  type: 'course' | 'quiz' | 'medal' | 'level' | 'activity';
  title: string;
  description: string;
  xpGained: number;
  timestamp: string;
  icon: string;
}
