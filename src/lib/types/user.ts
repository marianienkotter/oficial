// Tipos do sistema Elite Life

export type UserPlan = "free" | "basic" | "premium" | "elite";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  age?: number;
  plan: UserPlan;
  createdAt: string;
  
  // Gamificação
  level: number;
  xp: number;
  xpToNextLevel: number;
  streak: number;
  totalMedals: number;
  
  // Estatísticas
  hoursStudied: number;
  daysStudied: number;
  coursesCompleted: number;
  coursesInProgress: number;
  trailsCompleted: number;
  quizzesCompleted: number;
  activitiesCompleted: number;
  weeklyPoints: number;
  totalPoints: number;
  ranking: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  progress: number;
  modulesCompleted: number;
  totalModules: number;
  xpReward: number;
  duration: string;
  isPremium: boolean;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  difficulty: "Fácil" | "Médio" | "Difícil";
  points: number;
  status: "pending" | "completed";
  isPremium: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: number;
  points: number;
  medal: string;
  isPremium: boolean;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  progress: number;
  url: string;
  isPremium: boolean;
}

export interface Trail {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  progress: number;
  xpEarned: number;
  totalXP: number;
  medals: number;
  color: string;
  isPremium: boolean;
}

export interface Medal {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  unlockedAt?: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  points: number;
  medal: string;
  completed: boolean;
  type: "daily" | "weekly" | "monthly";
}
