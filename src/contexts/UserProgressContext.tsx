"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User, 
  UserProgress, 
  CourseProgress, 
  MedalType, 
  XP_CONFIG, 
  MEDAL_CONFIG 
} from '@/lib/types/user';

interface UserProgressContextType {
  user: User | null;
  progress: UserProgress | null;
  updateProgress: (courseId: string, type: 'lesson' | 'activity' | 'module' | 'quiz', itemId: string) => void;
  getCourseProgress: (courseId: string) => CourseProgress | null;
  calculateMedal: (coursesCompleted: number) => MedalType;
  addXP: (amount: number) => void;
  isLoading: boolean;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

export function UserProgressProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar dados do usuário e progresso
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    try {
      // Carregar usuário do localStorage
      const userData = localStorage.getItem('elite_user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);

        // Carregar progresso
        const progressData = localStorage.getItem(`elite_progress_${parsedUser.id}`);
        if (progressData) {
          setProgress(JSON.parse(progressData));
        } else {
          // Criar progresso inicial
          const initialProgress: UserProgress = {
            userId: parsedUser.id,
            totalXP: 0,
            totalPoints: 0,
            coursesCompleted: 0,
            coursesInProgress: 0,
            lessonsCompleted: 0,
            activitiesCompleted: 0,
            quizzesCompleted: 0,
            modulesCompleted: 0,
            studyHours: 0,
            currentMedal: 'iniciante',
            courses: [],
          };
          setProgress(initialProgress);
          localStorage.setItem(`elite_progress_${parsedUser.id}`, JSON.stringify(initialProgress));
        }
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateMedal = (coursesCompleted: number): MedalType => {
    if (coursesCompleted >= MEDAL_CONFIG.DIAMANTE) return 'diamante';
    if (coursesCompleted >= MEDAL_CONFIG.OURO) return 'ouro';
    if (coursesCompleted >= MEDAL_CONFIG.PRATA) return 'prata';
    if (coursesCompleted >= MEDAL_CONFIG.BRONZE) return 'bronze';
    return 'iniciante';
  };

  const addXP = (amount: number) => {
    if (!user || !progress) return;

    const newTotalXP = progress.totalXP + amount;
    const newMedal = calculateMedal(progress.coursesCompleted);

    const updatedProgress = {
      ...progress,
      totalXP: newTotalXP,
      currentMedal: newMedal,
    };

    setProgress(updatedProgress);
    localStorage.setItem(`elite_progress_${user.id}`, JSON.stringify(updatedProgress));

    // Atualizar usuário
    const updatedUser = {
      ...user,
      xp: newTotalXP,
      medalha_atual: newMedal,
    };
    setUser(updatedUser);
    localStorage.setItem('elite_user', JSON.stringify(updatedUser));
  };

  const getCourseProgress = (courseId: string): CourseProgress | null => {
    if (!progress) return null;
    return progress.courses.find(c => c.courseId === courseId) || null;
  };

  const updateProgress = (
    courseId: string, 
    type: 'lesson' | 'activity' | 'module' | 'quiz', 
    itemId: string
  ) => {
    if (!user || !progress) return;

    // Encontrar ou criar progresso do curso
    let courseProgress = progress.courses.find(c => c.courseId === courseId);
    
    if (!courseProgress) {
      courseProgress = {
        courseId,
        progress: 0,
        completedLessons: [],
        completedActivities: [],
        completedQuizzes: [],
        completedModules: [],
        lastAccessed: new Date().toISOString(),
        xpEarned: 0,
      };
      progress.courses.push(courseProgress);
    }

    // Atualizar baseado no tipo
    let xpToAdd = 0;
    let shouldUpdate = false;

    switch (type) {
      case 'lesson':
        if (!courseProgress.completedLessons.includes(itemId)) {
          courseProgress.completedLessons.push(itemId);
          xpToAdd = XP_CONFIG.LESSON;
          progress.lessonsCompleted++;
          shouldUpdate = true;
        }
        break;
      case 'activity':
        if (!courseProgress.completedActivities.includes(itemId)) {
          courseProgress.completedActivities.push(itemId);
          xpToAdd = XP_CONFIG.ACTIVITY;
          progress.activitiesCompleted++;
          shouldUpdate = true;
        }
        break;
      case 'module':
        if (!courseProgress.completedModules.includes(itemId)) {
          courseProgress.completedModules.push(itemId);
          xpToAdd = XP_CONFIG.MODULE;
          progress.modulesCompleted++;
          shouldUpdate = true;
        }
        break;
      case 'quiz':
        if (!courseProgress.completedQuizzes.includes(itemId)) {
          courseProgress.completedQuizzes.push(itemId);
          xpToAdd = XP_CONFIG.QUIZ_PASS;
          progress.quizzesCompleted++;
          shouldUpdate = true;
        }
        break;
    }

    if (shouldUpdate) {
      // Atualizar XP do curso
      courseProgress.xpEarned += xpToAdd;
      courseProgress.lastAccessed = new Date().toISOString();

      // Calcular progresso do curso (exemplo: baseado em aulas concluídas)
      // TODO: Ajustar cálculo baseado no curso específico
      const totalItems = 50; // Exemplo
      const completedItems = 
        courseProgress.completedLessons.length +
        courseProgress.completedActivities.length +
        courseProgress.completedModules.length +
        courseProgress.completedQuizzes.length;
      courseProgress.progress = Math.min(100, Math.floor((completedItems / totalItems) * 100));

      // Verificar se curso foi concluído
      if (courseProgress.progress === 100) {
        progress.coursesCompleted++;
        xpToAdd += XP_CONFIG.COURSE;
      }

      // Adicionar XP total
      addXP(xpToAdd);

      // Salvar progresso
      const updatedProgress = { ...progress };
      setProgress(updatedProgress);
      localStorage.setItem(`elite_progress_${user.id}`, JSON.stringify(updatedProgress));
    }
  };

  return (
    <UserProgressContext.Provider
      value={{
        user,
        progress,
        updateProgress,
        getCourseProgress,
        calculateMedal,
        addXP,
        isLoading,
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}

export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (context === undefined) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
}
