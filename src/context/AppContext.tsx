import React, { createContext, useContext, useState, useEffect } from 'react';
import { CourseModule, StudentProfile, AssessmentResult, CalendarEvent, Lesson, UserAccount } from '../types';
import { INITIAL_MODULES } from '../data/modulesData';
import confetti from 'canvas-confetti';

export type NavTab =
  | 'dashboard'
  | 'formacao'
  | 'materiais'
  | 'exercicios'
  | 'avaliacoes'
  | 'progresso'
  | 'calendario'
  | 'glossario'
  | 'tutor'
  | 'perfil'
  | 'certificado';

export interface AppContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  modules: CourseModule[];
  student: StudentProfile;
  assessmentResults: Record<number, AssessmentResult>;
  calendarEvents: CalendarEvent[];
  selectedModuleId: number | null;
  setSelectedModuleId: (id: number | null) => void;
  selectedLesson: Lesson | null;
  setSelectedLesson: (lesson: Lesson | null) => void;
  openLessonById: (moduleId: number, lessonId: string) => void;
  markLessonCompleted: (moduleId: number, lessonId: string) => void;
  submitAssessment: (moduleId: number, answers: Record<string, number>, isRecovery?: boolean) => AssessmentResult;
  updateStudent: (updates: Partial<StudentProfile>) => void;
  addCalendarEvent: (event: Omit<CalendarEvent, 'id' | 'completed'>) => void;
  toggleCalendarEvent: (id: string) => void;
  resetProgress: () => void;
  unlockAllForDemo: () => void;
  overallProgressPercent: number;
  completedModulesCount: number;
  nextLessonToStudy: { module: CourseModule; lesson: Lesson } | null;
  canGetCertificate: boolean;
  luandaTime: string;
  luandaDate: string;
  // Auth system
  currentUser: UserAccount | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

// Zeroed Student Profile (Fresh state)
const ZEROED_STUDENT: StudentProfile = {
  name: 'Hamilton Domingos',
  email: 'hamiltondomingos703@gmail.com',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  title: 'Gestor de Marketing em Formação Executiva',
  location: 'Luanda, Angola',
  startDate: 'Novembro de 2026',
  totalStudyHours: 0,
  streakDays: 0,
  weeklyGoalHours: 12,
  currentWeeklyHours: 0,
  completedModulesCount: 0,
  averageGrade: 0
};

// Zeroed Initial Modules
const getZeroedModules = (): CourseModule[] => {
  return INITIAL_MODULES.map((mod, index) => ({
    ...mod,
    status: index === 0 ? 'em_andamento' : 'disponivel',
    progressPercent: 0,
    assessmentScore: undefined,
    lessons: mod.lessons.map((l) => ({ ...l, isCompleted: false }))
  }));
};

const INITIAL_EVENTS: CalendarEvent[] = [
  {
    id: 'evt-1',
    title: 'Aula 1: O papel do gestor de Marketing Digital',
    date: '2026-11-09',
    time: '18:30',
    type: 'aula',
    moduleId: 1,
    completed: false,
    description: 'Início oficial do Módulo 1 na Academia de Marketing H-Digital.'
  },
  {
    id: 'evt-2',
    title: 'Exercício Prático: Diagnóstico de Negócios em Luanda',
    date: '2026-11-12',
    time: '19:00',
    type: 'exercicio',
    moduleId: 1,
    completed: false,
    description: 'Auditoria de maturidade digital dos 4 pilares com o Tutor IA.'
  },
  {
    id: 'evt-3',
    title: 'Avaliação Oficial do Módulo 1',
    date: '2026-11-18',
    time: '20:00',
    type: 'avaliacao',
    moduleId: 1,
    completed: false,
    description: 'Exame online de escolha múltipla (escala oficial 0-20 valores).'
  }
];

const DEFAULT_USER: UserAccount = {
  id: 'usr-1',
  email: 'hamiltondomingos703@gmail.com',
  name: 'Hamilton Domingos',
  role: 'aluno',
  createdAt: '2026-11-09'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Authentication State
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => {
    try {
      const savedUser = localStorage.getItem('amh_user_v2');
      if (savedUser) return JSON.parse(savedUser);
    } catch (e) {
      console.warn('Erro ao carregar usuário autenticado:', e);
    }
    return DEFAULT_USER;
  });

  // Zeroed Modules State (v2 storage to guarantee zeroed-out state)
  const [modules, setModules] = useState<CourseModule[]>(() => {
    try {
      const saved = localStorage.getItem('amh_modules_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Erro ao carregar dados salvos:', e);
    }
    return getZeroedModules();
  });

  // Zeroed Student Profile
  const [student, setStudent] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem('amh_student_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Erro ao carregar dados do aluno:', e);
    }
    return ZEROED_STUDENT;
  });

  // Zeroed Assessment results
  const [assessmentResults, setAssessmentResults] = useState<Record<number, AssessmentResult>>(() => {
    try {
      const saved = localStorage.getItem('amh_assessments_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Erro ao carregar avaliações:', e);
    }
    return {};
  });

  // Calendar events
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>(() => {
    try {
      const saved = localStorage.getItem('amh_calendar_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Erro ao carregar calendário:', e);
    }
    return INITIAL_EVENTS;
  });

  // Luanda Time Clock (Africa/Luanda - WAT GMT+1)
  const [luandaTime, setLuandaTime] = useState<string>('');
  const [luandaDate, setLuandaDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('pt-AO', {
        timeZone: 'Africa/Luanda',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      const dateStr = now.toLocaleDateString('pt-AO', {
        timeZone: 'Africa/Luanda',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      setLuandaTime(timeStr);
      setLuandaDate(dateStr.charAt(0).toUpperCase() + dateStr.slice(1));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Save changes to localStorage with v2 namespace
  useEffect(() => {
    try {
      localStorage.setItem('amh_modules_v2', JSON.stringify(modules));
    } catch (e) {
      console.warn('Erro ao persistir módulos:', e);
    }
  }, [modules]);

  useEffect(() => {
    try {
      localStorage.setItem('amh_student_v2', JSON.stringify(student));
    } catch (e) {
      console.warn('Erro ao persistir estudante:', e);
    }
  }, [student]);

  useEffect(() => {
    try {
      localStorage.setItem('amh_assessments_v2', JSON.stringify(assessmentResults));
    } catch (e) {
      console.warn('Erro ao persistir avaliações:', e);
    }
  }, [assessmentResults]);

  useEffect(() => {
    try {
      localStorage.setItem('amh_calendar_v2', JSON.stringify(calendarEvents));
    } catch (e) {
      console.warn('Erro ao persistir calendário:', e);
    }
  }, [calendarEvents]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('amh_user_v2', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('amh_user_v2');
      }
    } catch (e) {
      console.warn('Erro ao persistir sessão:', e);
    }
  }, [currentUser]);

  // Recalculate student statistics whenever modules or assessments change
  useEffect(() => {
    let completedLessonsCount = 0;
    let completedMods = 0;

    modules.forEach((mod) => {
      completedLessonsCount += mod.lessons.filter((l) => l.isCompleted).length;
      if (mod.status === 'concluido') {
        completedMods += 1;
      }
    });

    const scores = Object.values(assessmentResults).map((r) => r.score);
    const avgScore = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;

    setStudent((prev) => ({
      ...prev,
      completedModulesCount: completedMods,
      averageGrade: Number(avgScore.toFixed(1))
    }));
  }, [modules, assessmentResults]);

  // Calculate overall progress percent
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.isCompleted).length,
    0
  );
  const overallProgressPercent = Math.round((completedLessons / totalLessons) * 100);
  const completedModulesCount = modules.filter((m) => m.status === 'concluido').length;
  const canGetCertificate = completedModulesCount === 6;

  // Next lesson to study (starts with Module 1, Lesson 1)
  const nextLessonToStudy = React.useMemo(() => {
    for (const mod of modules) {
      const uncompleted = mod.lessons.find((l) => !l.isCompleted);
      if (uncompleted) {
        return { module: mod, lesson: uncompleted };
      }
    }
    return null;
  }, [modules]);

  const openLessonById = (moduleId: number, lessonId: string) => {
    const mod = modules.find((m) => m.id === moduleId);
    if (!mod) return;
    const lesson = mod.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;
    setSelectedModuleId(moduleId);
    setSelectedLesson(lesson);
    setActiveTab('formacao');
  };

  const markLessonCompleted = (moduleId: number, lessonId: string) => {
    setModules((prev) =>
      prev.map((mod) => {
        if (mod.id !== moduleId) return mod;

        const updatedLessons = mod.lessons.map((l) =>
          l.id === lessonId ? { ...l, isCompleted: true } : l
        );

        const doneCount = updatedLessons.filter((l) => l.isCompleted).length;
        const progress = Math.round((doneCount / updatedLessons.length) * 100);

        const hasPassed = (mod.assessmentScore ?? 0) >= 10;
        const newStatus =
          doneCount === updatedLessons.length && hasPassed
            ? 'concluido'
            : doneCount > 0
            ? 'em_andamento'
            : mod.status;

        return {
          ...mod,
          lessons: updatedLessons,
          progressPercent: progress,
          status: newStatus
        };
      })
    );

    setStudent((prev) => ({
      ...prev,
      totalStudyHours: prev.totalStudyHours + 1,
      currentWeeklyHours: prev.currentWeeklyHours + 1,
      streakDays: Math.max(prev.streakDays, 1)
    }));
  };

  const submitAssessment = (
    moduleId: number,
    answers: Record<string, number>,
    isRecovery = false
  ): AssessmentResult => {
    const mod = modules.find((m) => m.id === moduleId);
    if (!mod) throw new Error('Módulo não encontrado');

    const questionsList = isRecovery && mod.assessment.recoveryQuestions?.length
      ? mod.assessment.recoveryQuestions
      : mod.assessment.questions;

    let correctCount = 0;
    questionsList.forEach((q) => {
      if (answers[q.id] === q.correctAnswerIndex) {
        correctCount += 1;
      }
    });

    const rawScore = (correctCount / questionsList.length) * 20;
    const score = Math.round(rawScore);

    let status: AssessmentResult['status'] = 'nao_aprovado';
    if (score >= 18) status = 'excelente';
    else if (score >= 14) status = 'bom';
    else if (score >= 10) status = 'aprovado';
    else status = 'nao_aprovado';

    const strengths: string[] = [];
    const improvements: string[] = [];
    let recommendation = '';

    if (score >= 14) {
      strengths.push('Excelente raciocínio estratégico e domínio das métricas essenciais.');
      strengths.push('Capacidade de associar a teoria à tomada de decisões em Angola.');
      recommendation = 'Parabéns pelo elevado nível demonstrado. Continue para o módulo seguinte.';
      try {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      } catch (e) {
        // Confetti safe fallback
      }
    } else if (score >= 10) {
      strengths.push('Compreensão básica adequada dos conceitos principais.');
      improvements.push('Revisar a aplicação prática de fórmulas financeiras e métricas de tráfego.');
      recommendation = 'Aprovado. Recomenda-se descarregar o Guia de Fórmulas para consolidação.';
    } else {
      improvements.push('Revisitar as aulas teóricas e realizar o teste de recuperação.');
      recommendation = 'Pontuação insuficiente para aprovação definitiva. É necessário realizar o teste de recuperação.';
    }

    const result: AssessmentResult = {
      assessmentId: mod.assessment.id,
      moduleId,
      score,
      status,
      answers,
      completedAt: new Date().toISOString().split('T')[0],
      isRecovery,
      strengths,
      improvements,
      recommendation
    };

    setAssessmentResults((prev) => ({ ...prev, [moduleId]: result }));

    setModules((prev) =>
      prev.map((m) => {
        if (m.id !== moduleId) return m;

        const allLessonsDone = m.lessons.every((l) => l.isCompleted);
        const isPassed = score >= 10;

        return {
          ...m,
          assessmentScore: score,
          status: isPassed && allLessonsDone ? 'concluido' : 'em_andamento'
        };
      })
    );

    return result;
  };

  const updateStudent = (updates: Partial<StudentProfile>) => {
    setStudent((prev) => ({ ...prev, ...updates }));
  };

  const addCalendarEvent = (event: Omit<CalendarEvent, 'id' | 'completed'>) => {
    const newEvent: CalendarEvent = {
      ...event,
      id: `evt-${Date.now()}`,
      completed: false
    };
    setCalendarEvents((prev) => [newEvent, ...prev]);
  };

  const toggleCalendarEvent = (id: string) => {
    setCalendarEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e))
    );
  };

  // Reset all progress to 0 (Zeroed State)
  const resetProgress = () => {
    setModules(getZeroedModules());
    setStudent(ZEROED_STUDENT);
    setAssessmentResults({});
    setCalendarEvents(INITIAL_EVENTS);
    localStorage.removeItem('amh_modules_v2');
    localStorage.removeItem('amh_student_v2');
    localStorage.removeItem('amh_assessments_v2');
    localStorage.removeItem('amh_calendar_v2');
    // Also remove any older keys
    localStorage.removeItem('amd_modules_v1');
    localStorage.removeItem('amd_student_v1');
    localStorage.removeItem('amd_assessments_v1');
    localStorage.removeItem('amd_calendar_v1');
  };

  // Demo tool to simulate 100% completion for testing certificates and reports
  const unlockAllForDemo = () => {
    setModules((prev) =>
      prev.map((m) => ({
        ...m,
        status: 'concluido',
        progressPercent: 100,
        assessmentScore: 18,
        lessons: m.lessons.map((l) => ({ ...l, isCompleted: true }))
      }))
    );
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
    } catch (e) {
      // Confetti safe fallback
    }
  };

  // Auth Methods
  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const login = async (email: string, _password: string) => {
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Por favor, insira um endereço de email válido.' };
    }

    const name = email.split('@')[0].replace(/[._]/g, ' ');
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    const user: UserAccount = {
      id: `usr-${Date.now()}`,
      email: email.trim().toLowerCase(),
      name: formattedName,
      role: 'aluno',
      createdAt: new Date().toISOString()
    };

    setCurrentUser(user);
    setStudent((prev) => ({
      ...prev,
      name: formattedName,
      email: email.trim().toLowerCase()
    }));

    return { success: true };
  };

  const register = async (email: string, _password: string, name: string) => {
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Por favor, insira um email válido.' };
    }
    if (!name || name.trim().length < 3) {
      return { success: false, error: 'Por favor, insira o seu nome completo (mínimo 3 caracteres).' };
    }

    const user: UserAccount = {
      id: `usr-${Date.now()}`,
      email: email.trim().toLowerCase(),
      name: name.trim(),
      role: 'aluno',
      createdAt: new Date().toISOString()
    };

    setCurrentUser(user);
    // Reset to zeroed state for new student
    resetProgress();
    setStudent((prev) => ({
      ...prev,
      name: name.trim(),
      email: email.trim().toLowerCase()
    }));

    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('amh_user_v2');
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        modules,
        student,
        assessmentResults,
        calendarEvents,
        selectedModuleId,
        setSelectedModuleId,
        selectedLesson,
        setSelectedLesson,
        openLessonById,
        markLessonCompleted,
        submitAssessment,
        updateStudent,
        addCalendarEvent,
        toggleCalendarEvent,
        resetProgress,
        unlockAllForDemo,
        overallProgressPercent,
        completedModulesCount,
        nextLessonToStudy,
        canGetCertificate,
        luandaTime,
        luandaDate,
        currentUser,
        isAuthenticated: !!currentUser,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        login,
        register,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser utilizado dentro de um AppProvider');
  }
  return context;
};
