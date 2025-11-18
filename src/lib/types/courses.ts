// 🎓 ELITE LIFE - Sistema de Cursos Completo
// Tipos TypeScript para toda a estrutura de cursos

export type CourseLevel = "iniciante" | "intermediario" | "avancado" | "especializacao";
export type TrackId = "financas" | "mentalidade" | "produtividade" | "marketing" | "desenvolvimento";

export interface Lesson {
  id: string;
  title: string;
  duration: number; // em minutos
  content: {
    theory: string;
    practice: string;
    summary: string;
    checklist: string[];
    insight: string;
  };
  videoUrl?: string;
  completed?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  quiz?: Quiz;
}

export interface Activity {
  id: string;
  title: string;
  type: "reflexiva" | "pratica" | "estudo-caso" | "desafio" | "protocolo" | "planejamento";
  objective: string;
  scientificBasis: string;
  instructions: string[];
  expectedResult: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  estimatedTime: number; // em minutos
  points: number;
}

export interface QuizQuestion {
  id: string;
  theme: string;
  subtheme: string;
  question: string;
  options: string[];
  correctAnswer: number;
  justification: string;
  level: 1 | 2 | 3 | 4 | 5;
  points: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface Course {
  id: string;
  trackId: TrackId;
  level: CourseLevel;
  title: string;
  shortDescription: string;
  longDescription: string;
  targetAudience: string[];
  objectives: string[];
  duration: number; // horas totais
  competencies: string[];
  expectedResults: string[];
  modules: Module[];
  activities: Activity[];
  finalQuiz: Quiz;
  certificate?: Certificate;
  prerequisites?: string[];
  university: string;
}

export interface Track {
  id: TrackId;
  title: string;
  description: string;
  icon: string;
  color: string;
  introduction: string;
  progression: string;
  recommendations: {
    persona: string;
    reason: string;
  }[];
  weeklySchedule: string;
  courses: {
    iniciante: Course[];
    intermediario: Course[];
    avancado: Course[];
    especializacao: Course[];
  };
}

export interface Certificate {
  id: string;
  courseName: string;
  studentName: string;
  completionDate: string;
  competencies: string[];
  level: CourseLevel;
  institution: string;
  qrCode?: string;
  motivationalPhrase: string;
}

export interface GamificationBadge {
  id: string;
  name: string;
  icon: string;
  requirement: string;
  points: number;
  unlocked: boolean;
  description: string;
}

export interface UserProgress {
  userId: string;
  completedCourses: string[];
  completedLessons: string[];
  completedActivities: string[];
  completedQuizzes: string[];
  points: number;
  level: number;
  badges: GamificationBadge[];
  certificates: Certificate[];
  currentTrack?: TrackId;
  currentCourse?: string;
}
