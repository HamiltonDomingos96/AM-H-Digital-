import React from 'react';
import { useApp } from '../context/AppContext';
import {
  TrendingUp,
  Award,
  BookOpen,
  Clock,
  Target,
  CheckCircle2,
  Calendar,
  Zap,
  BarChart2,
  Layers,
  Flame,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const ProgressView: React.FC = () => {
  const {
    student,
    modules,
    overallProgressPercent,
    completedModulesCount,
    assessmentResults,
    setActiveTab
  } = useApp();

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.isCompleted).length,
    0
  );

  // Acquired Competencies matrix
  const competencies = [
    { name: 'Diagnóstico & Estratégia de Negócios', level: 95, category: 'Estratégia' },
    { name: 'Planeamento & Orçamento 70-20-10', level: 80, category: 'Gestão' },
    { name: 'Copywriting Persuasivo (AIDA & PAS)', level: 85, category: 'Comunicação' },
    { name: 'Tráfego Pago & Meta Ads Manager', level: 60, category: 'Aquisição' },
    { name: 'Google Ads & SEO Local', level: 45, category: 'Mecanismos de Busca' },
    { name: 'Google Analytics 4 & Looker Studio', level: 50, category: 'Análise de Dados' },
    { name: 'Liderança de Equipas & Direcção Executiva', level: 40, category: 'Liderança' }
  ];

  // Weekly study hours breakdown
  const weeklyHistory = [
    { week: 'Semana 1', hours: 10.5, target: 12 },
    { week: 'Semana 2', hours: 11.0, target: 12 },
    { week: 'Semana 3', hours: 12.0, target: 12 },
    { week: 'Semana 4 (Actual)', hours: student.currentWeeklyHours, target: student.weeklyGoalHours }
  ];

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-[#1677E8] uppercase tracking-wider block">
            Painel Executivo Individual
          </span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight mt-1">
            Meu Progresso e Desempenho
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Acompanhe a sua evolução em tempo real, horas acumuladas, notas de exame e competências desenvolvidas ao longo dos 6 meses.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('certificado')}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#102B50] to-[#1677E8] text-white text-xs font-bold shadow-md transition-all hover:scale-102 cursor-pointer shrink-0"
        >
          <Award className="w-4 h-4 text-[#21C66B]" />
          <span>Ver Estado do Certificado</span>
        </button>
      </div>

      {/* Main Stats 4-Card Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Conclusão Geral
            </span>
            <TrendingUp className="w-4 h-4 text-[#1677E8]" />
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-[#102B50]">
              {overallProgressPercent}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-[#1677E8] rounded-full transition-all duration-500"
              style={{ width: `${overallProgressPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 block pt-1">
            {completedLessons} de {totalLessons} aulas estudadas
          </span>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Módulos Concluídos
            </span>
            <CheckCircle2 className="w-4 h-4 text-[#21C66B]" />
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-[#102B50]">
              {completedModulesCount}
            </span>
            <span className="text-xs text-slate-400 font-bold">/ 6 Módulos</span>
          </div>
          <span className="text-[11px] text-[#21C66B] font-semibold block pt-3">
            Módulo 1 Concluído • Módulo 2 Em Andamento
          </span>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Horas de Estudo
            </span>
            <Clock className="w-4 h-4 text-purple-600" />
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-[#102B50]">
              {student.totalStudyHours}h
            </span>
            <span className="text-xs text-slate-400 font-bold">de 240h</span>
          </div>
          <span className="text-[11px] text-purple-700 font-semibold block pt-3">
            Ritmo médio: 10.5h por semana
          </span>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Média Avaliações
            </span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-[#102B50]">
              {student.averageGrade}
            </span>
            <span className="text-xs text-slate-400 font-bold">/ 20 Valores</span>
          </div>
          <span className="text-[11px] text-blue-700 font-semibold block pt-3">
            Bom Desempenho Académico
          </span>
        </div>
      </div>

      {/* Evolution Section: Charts and Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Weekly Evolution Chart */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-[#102B50]">
                Evolução Semanal de Horas Lectivas
              </h3>
              <p className="text-xs text-slate-500">
                Meta recomendada de 10 a 12 horas por semana
              </p>
            </div>
            <span className="text-xs font-bold text-[#1677E8] bg-blue-50 px-2.5 py-1 rounded-full">
              Meta: 12h/sem
            </span>
          </div>

          {/* Bar Chart Representation */}
          <div className="space-y-4 pt-2">
            {weeklyHistory.map((item, i) => {
              const percent = Math.min(100, Math.round((item.hours / item.target) * 100));

              return (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#102B50]">{item.week}</span>
                    <span className="text-slate-500">
                      <strong>{item.hours}h</strong> / {item.target}h ({percent}%)
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-[#1677E8] to-[#21C66B] rounded-full transition-all duration-700"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-[#F3F6FC] border border-slate-200/60 text-xs text-slate-600 space-y-1">
            <span className="font-bold text-[#102B50] block">Recomendação Pedagógica:</span>
            <p>
              Mantenha o ritmo actual de estudo nos dias úteis às 18:30 (horário de Luanda) para finalizar o Módulo 2 dentro da previsão curricular.
            </p>
          </div>
        </div>

        {/* Right Column: Acquired Competencies Breakdown */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-[#102B50]">
                Competências Profissionais Desenvolvidas
              </h3>
              <p className="text-xs text-slate-500">
                Nível de domínio demonstrado nos exercícios e exames
              </p>
            </div>
            <Zap className="w-5 h-5 text-amber-500" />
          </div>

          <div className="space-y-3.5 pt-1">
            {competencies.map((comp, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#102B50]">{comp.name}</span>
                  <span className="font-extrabold text-[#1677E8]">{comp.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-[#1677E8] rounded-full"
                    style={{ width: `${comp.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Module Completion Status Cards */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <h3 className="font-extrabold text-base text-[#102B50]">
          Estado Oficial de Aprovação por Módulo
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => {
            const result = assessmentResults[m.id];
            const hasScore = result?.score !== undefined;
            const isApproved = hasScore && (result.score ?? 0) >= 10;

            return (
              <div
                key={m.id}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#1677E8] uppercase tracking-wider block">
                    Módulo {m.id}
                  </span>
                  <h4 className="font-bold text-sm text-[#102B50] line-clamp-1">
                    {m.title.replace(`Módulo ${m.id} — `, '')}
                  </h4>
                  <span className="text-xs text-slate-500 mt-1 block">
                    {m.lessons.filter((l) => l.isCompleted).length} de {m.lessons.length} aulas concluídas
                  </span>
                </div>

                <div className="text-right shrink-0">
                  {hasScore ? (
                    <span className="text-sm font-black text-[#102B50] block">
                      {result.score} / 20
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400 block">—</span>
                  )}
                  {isApproved ? (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                      Aprovado
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full mt-1 inline-block">
                      {m.status === 'em_andamento' ? 'Em Curso' : 'Disponível'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
