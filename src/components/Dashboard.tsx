import React from 'react';
import { useApp, NavTab } from '../context/AppContext';
import {
  Compass,
  CalendarCheck,
  Zap,
  Globe,
  BarChart3,
  Award,
  BookOpen,
  FileText,
  CheckCircle2,
  Clock,
  Sparkles,
  Calendar,
  Flame,
  ArrowRight,
  TrendingUp,
  Target,
  PlayCircle,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const {
    student,
    modules,
    overallProgressPercent,
    completedModulesCount,
    nextLessonToStudy,
    openLessonById,
    setActiveTab,
    setSelectedModuleId,
    luandaDate
  } = useApp();

  // Icon mapping for modules
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'CalendarCheck':
        return CalendarCheck;
      case 'Zap':
        return Zap;
      case 'Globe':
        return Globe;
      case 'BarChart3':
        return BarChart3;
      case 'Award':
      default:
        return Award;
    }
  };

  // Main menu quick items
  const menuCards: {
    id: NavTab;
    title: string;
    description: string;
    icon: any;
    color: string;
    badge?: string;
  }[] = [
    {
      id: 'formacao',
      title: 'Formação',
      description: 'Aceda aos 6 módulos curriculares e 67 aulas completas.',
      icon: BookOpen,
      color: 'from-blue-600 to-indigo-700',
      badge: '6 Módulos'
    },
    {
      id: 'materiais',
      title: 'Materiais de Apoio',
      description: 'Gere manuais da formação, resumos e guias em formato PDF.',
      icon: FileText,
      color: 'from-sky-600 to-blue-700',
      badge: 'PDF A4'
    },
    {
      id: 'exercicios',
      title: 'Exercícios',
      description: 'Actividades práticas interactivas e resoluções de negócio.',
      icon: Target,
      color: 'from-indigo-600 to-violet-700',
      badge: 'Casos Reais'
    },
    {
      id: 'avaliacoes',
      title: 'Avaliações',
      description: 'Testes e exames oficiais na escala angolana de 0 a 20 valores.',
      icon: Award,
      color: 'from-amber-600 to-orange-700',
      badge: 'Média 16.0'
    },
    {
      id: 'progresso',
      title: 'Meu Progresso',
      description: 'Acompanhe métricas, horas de estudo e competências adquiridas.',
      icon: TrendingUp,
      color: 'from-emerald-600 to-teal-700',
      badge: `${overallProgressPercent}% Concluído`
    },
    {
      id: 'calendario',
      title: 'Calendário',
      description: 'Programação de estudos e metas no fuso horário de Luanda.',
      icon: Calendar,
      color: 'from-purple-600 to-pink-700',
      badge: 'WAT (GMT+1)'
    },
    {
      id: 'glossario',
      title: 'Glossário',
      description: 'Dicionário pesquisável com mais de 20 termos e métricas essenciais.',
      icon: BookOpen,
      color: 'from-cyan-600 to-blue-800',
      badge: 'Pesquisável'
    },
    {
      id: 'tutor',
      title: 'Tutor IA',
      description: 'Esclareça dúvidas complexas, cálculos e simulações com IA Google.',
      icon: Sparkles,
      color: 'from-blue-500 to-emerald-500',
      badge: 'Interativo'
    }
  ];

  // Circle calculation for progress ring
  const circleRadius = 52;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (overallProgressPercent / 100) * circumference;

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-300">
      {/* A. Cabeçalho de Boas-Vindas */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="relative">
            <img
              src={student.avatarUrl}
              alt={student.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-4 ring-[#1677E8]/15 shadow-md"
            />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#21C66B] border-2 border-white rounded-full flex items-center justify-center text-[10px] text-white font-bold" title="Estudante Activo">
              ✓
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight">
                Olá, {student.name.split(' ')[0]}!
              </h1>
              <span className="bg-blue-50 text-[#1677E8] text-xs font-bold px-3 py-1 rounded-full border border-blue-100/80">
                Turma Executiva 2026
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-500 mt-1">
              Bem-vindo à tua <span className="font-semibold text-slate-700">Academia de Marketing H-Digital</span>.
            </p>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{luandaDate} • Luanda, Angola</span>
            </p>
          </div>
        </div>

        {/* Quick Quick Status Badges */}
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <div className="px-4 py-3 rounded-2xl bg-[#F3F6FC] border border-slate-200/60 min-w-[130px] flex-1 md:flex-none">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Dias Consecutivos
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Flame className="w-5 h-5 text-amber-500" />
              <span className="text-lg font-black text-[#102B50]">{student.streakDays} Dias</span>
            </div>
          </div>

          <div className="px-4 py-3 rounded-2xl bg-[#F3F6FC] border border-slate-200/60 min-w-[130px] flex-1 md:flex-none">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Média Avaliações
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Award className="w-5 h-5 text-[#1677E8]" />
              <span className="text-lg font-black text-[#102B50]">{student.averageGrade} / 20</span>
            </div>
          </div>
        </div>
      </section>

      {/* B. Cartão de Progresso Inspirado no Design de Referência */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#102B50] via-[#133A6B] to-[#1677E8] text-white shadow-xl shadow-blue-950/15 p-6 sm:p-8 lg:p-10">
        {/* Background decorative subtle circles */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Progress Info & Next Lesson CTA */}
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-blue-100">
              <ShieldCheck className="w-4 h-4 text-[#21C66B]" />
              <span>Programa Oficial • 240 Horas Lectivas</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                A Tua Jornada Rumo à Liderança em Marketing
              </h2>
              <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl leading-relaxed">
                Progresso calculado em tempo real com base nas 67 aulas teóricas e testes de recuperação concluídos.
              </p>
            </div>

            {/* Next Lesson Box */}
            {nextLessonToStudy && (
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block">
                    Próxima Aula a Estudar:
                  </span>
                  <p className="font-bold text-base sm:text-lg text-white">
                    {nextLessonToStudy.lesson.title}
                  </p>
                  <p className="text-xs text-blue-100">
                    {nextLessonToStudy.module.title} • {nextLessonToStudy.lesson.durationMinutes} minutos recomendados
                  </p>
                </div>

                <button
                  onClick={() => openLessonById(nextLessonToStudy.module.id, nextLessonToStudy.lesson.id)}
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#102B50] font-extrabold text-sm shadow-lg transition-all hover:scale-102 cursor-pointer"
                >
                  <PlayCircle className="w-5 h-5 text-[#1677E8]" />
                  <span>Continuar aprendizagem</span>
                </button>
              </div>
            )}

            {/* Linear Progress Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="text-blue-100">Evolução Curricular Global</span>
                <span className="text-white font-bold">{completedModulesCount} de 6 Módulos Concluídos ({overallProgressPercent}%)</span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-[#21C66B] to-emerald-300 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${Math.max(overallProgressPercent, 8)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Circular Progress Ring Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col items-center justify-center text-center w-full max-w-xs shadow-inner">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
                  {/* Background Track */}
                  <circle
                    cx="60"
                    cy="60"
                    r={circleRadius}
                    className="text-white/15"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  {/* Progress Arc */}
                  <circle
                    cx="60"
                    cy="60"
                    r={circleRadius}
                    className="text-[#21C66B] transition-all duration-1000 ease-out"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>

                {/* Inner Text */}
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {overallProgressPercent}%
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                    Concluído
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 w-full text-center">
                <span className="text-xs text-blue-100 block">
                  {completedModulesCount > 0 ? (
                    <>Módulos Concluídos: <strong className="text-white font-bold">{completedModulesCount} de 6</strong></>
                  ) : (
                    <>Início do Curso: <strong className="text-white font-bold">Módulo 1 Activo</strong></>
                  )}
                </span>
                <span className="text-[11px] text-[#21C66B] font-semibold mt-0.5 block">
                  {completedModulesCount === 6 ? 'Certificado Disponível' : 'Pronto para Aprender'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. Menu Principal de Navegação (Cartões com Ícones Modernos) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#102B50]">
              Menu de Acesso Rápido
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Explore as ferramentas centrais da tua formação profissional
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {menuCards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => setActiveTab(card.id)}
                className="group p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#1677E8]/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all text-left flex flex-col justify-between focus:outline-hidden cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {card.badge && (
                      <span className="text-[10px] font-bold text-[#1677E8] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-[#102B50] group-hover:text-[#1677E8] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#1677E8] group-hover:translate-x-1 transition-transform">
                  <span>Abrir secção</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* D. Categorias da Formação (Os 6 Módulos em Grelha Responsiva) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#102B50]">
              Módulos da Formação Profissional
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Currículo estruturado de 6 meses (24 semanas lectivas)
            </p>
          </div>
          <button
            onClick={() => setActiveTab('formacao')}
            className="text-xs sm:text-sm font-bold text-[#1677E8] hover:underline flex items-center gap-1"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {modules.map((mod) => {
            const ModIcon = getModuleIcon(mod.iconName);
            const isCompleted = mod.status === 'concluido';
            const isInProgress = mod.status === 'em_andamento';

            return (
              <div
                key={mod.id}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Status */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${mod.gradient} text-white flex items-center justify-center shadow-xs`}
                    >
                      <ModIcon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCompleted ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Concluído
                        </span>
                      ) : isInProgress ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-[#1677E8] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                          <Clock className="w-3.5 h-3.5 text-[#1677E8]" /> Em Andamento
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                          Disponível
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-base text-[#102B50] leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-[#1677E8] font-semibold mt-1">
                    {mod.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-500 font-medium">
                      {mod.lessonsCount} Aulas • {mod.durationHours}h
                    </span>
                    <span className="font-bold text-[#102B50]">
                      {isCompleted ? '100%' : `${mod.progressPercent}%`}
                    </span>
                  </div>

                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted ? 'bg-[#21C66B]' : 'bg-[#1677E8]'
                      }`}
                      style={{ width: `${isCompleted ? 100 : mod.progressPercent}%` }}
                    />
                  </div>

                  <button
                    onClick={() => {
                      setSelectedModuleId(mod.id);
                      setActiveTab('formacao');
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isInProgress
                        ? 'bg-[#1677E8] hover:bg-blue-600 text-white shadow-xs'
                        : isCompleted
                        ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{isInProgress ? 'Continuar Módulo' : 'Ver Módulo e Aulas'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* E. Actividade Diária & Metas */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Exercício do Dia */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Exercício do Dia
              </span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>

            <h3 className="font-bold text-base text-[#102B50]">
              Cálculo de CAC e LTV para Negócios em Luanda
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Uma empresa investiu 450.000 AOA em Meta Ads e gerou 18 clientes com ticket médio de 35.000 AOA.
              Calcule se a operação é saudável sabendo que a retenção média é de 4 meses.
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveTab('exercicios')}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors shadow-xs"
            >
              Resolver Exercício Prático
            </button>
          </div>
        </div>

        {/* Meta Semanal */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1677E8] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                Meta Semanal de Estudo
              </span>
              <Target className="w-4 h-4 text-[#1677E8]" />
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#102B50]">
                  {student.currentWeeklyHours}h
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  de {student.weeklyGoalHours}h recomendadas
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Faltam apenas 3.5 horas para bateres a tua meta semanal de aprendizagem.
              </p>
            </div>

            <div className="mt-4 w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#1677E8] to-[#21C66B] rounded-full"
                style={{ width: `${Math.round((student.currentWeeklyHours / student.weeklyGoalHours) * 100)}%` }}
              />
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Carga horária total acumulada:</span>
            <span className="font-bold text-[#102B50]">{student.totalStudyHours} Horas</span>
          </div>
        </div>

        {/* Próxima Avaliação */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                Próxima Avaliação Oficial
              </span>
              <Award className="w-4 h-4 text-purple-600" />
            </div>

            <h3 className="font-bold text-base text-[#102B50]">
              Exame Oficial do Módulo 2
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Planeamento e Gestão de Marketing
            </p>

            <div className="mt-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span>Duração do teste:</span>
                <span className="font-bold text-[#102B50]">30 Minutos</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Nota mínima de aprovação:</span>
                <span className="font-bold text-emerald-700">10 / 20 Valores</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Data agendada:</span>
                <span className="font-bold text-[#1677E8]">14 de Novembro (Luanda)</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveTab('avaliacoes')}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors shadow-xs"
            >
              Aceder ao Centro de Avaliações
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
