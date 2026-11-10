export type ModuleStatus = 'concluido' | 'em_andamento' | 'disponivel' | 'bloqueado';

export interface Lesson {
  id: string;
  moduleId: number;
  order: number;
  title: string;
  durationMinutes: number;
  objectives: string[];
  introduction: string;
  theory: string;
  fundamentalConcepts: { term: string; definition: string }[];
  practicalExamples: string[];
  angolaContext: string;
  caseStudy: {
    company: string;
    sector: string;
    location: string;
    situation: string;
    solution: string;
    results: string;
  };
  recommendedTools: { name: string; category: string; description: string; link?: string }[];
  practicalExercise: {
    title: string;
    prompt: string;
    expectedDeliverables: string[];
  };
  reviewQuestions: {
    question: string;
    explanation: string;
  }[];
  summary: string;
  resources: string[];
  isCompleted?: boolean;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  practicalContext?: string;
}

export interface OpenQuestion {
  id: string;
  question: string;
  rubric: string[];
  idealAnswer: string;
}

export interface ModuleAssessment {
  id: string;
  moduleId: number;
  title: string;
  timeLimitMinutes: number;
  questions: Question[];
  openQuestions?: OpenQuestion[];
  recoveryQuestions?: Question[];
}

export interface AssessmentResult {
  assessmentId: string;
  moduleId: number;
  score: number; // 0 to 20
  status: 'nao_aprovado' | 'aprovado' | 'bom' | 'excelente';
  answers: { [questionId: string]: number };
  completedAt: string;
  isRecovery?: boolean;
  strengths: string[];
  improvements: string[];
  recommendation: string;
}

export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  lessonsCount: number;
  durationWeeks: number;
  durationHours: number;
  status: ModuleStatus;
  progressPercent: number;
  assessmentScore?: number; // 0-20
  gradient: string;
  iconName: string;
  lessons: Lesson[];
  assessment: ModuleAssessment;
}

export interface GlossaryItem {
  id: string;
  term: string;
  fullName: string;
  translation?: string;
  category: 'Metricas' | 'Estrategia' | 'Trafego' | 'SEO' | 'Automacao' | 'Design';
  simpleExplanation: string;
  professionalApplication: string;
  practicalExample: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  type: 'aula' | 'exercicio' | 'avaliacao' | 'mentoria';
  moduleId?: number;
  completed: boolean;
  description: string;
}

export interface StudentProfile {
  name: string;
  email: string;
  avatarUrl: string;
  title: string;
  location: string;
  startDate: string;
  totalStudyHours: number;
  streakDays: number;
  weeklyGoalHours: number;
  currentWeeklyHours: number;
  completedModulesCount: number;
  averageGrade: number; // 0-20
}

export interface AcquiredSkill {
  name: string;
  level: number; // 0-100%
  category: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  sector: string;
  location: string;
  scenario: string;
  challenge: string;
  strategy: string;
  metrics: { label: string; value: string }[];
  keyTakeaway: string;
  hypotheticalDisclaimer: boolean;
}

export interface UserAccount {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: 'aluno' | 'administrador';
  createdAt: string;
}

