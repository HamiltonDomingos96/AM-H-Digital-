import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CourseModule, AssessmentResult, Question } from '../types';
import {
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Sparkles,
  HelpCircle,
  FileText,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

export const AssessmentsView: React.FC = () => {
  const { modules, assessmentResults, submitAssessment, setActiveTab } = useApp();

  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [isTakingQuiz, setIsTakingQuiz] = useState<boolean>(false);
  const [isRecoveryMode, setIsRecoveryMode] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [currentResult, setCurrentResult] = useState<AssessmentResult | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(30 * 60);

  const activeModule = modules.find((m) => m.id === activeModuleId);

  const startQuiz = (moduleId: number, recovery = false) => {
    setActiveModuleId(moduleId);
    setIsRecoveryMode(recovery);
    setSelectedAnswers({});
    setCurrentResult(null);
    setIsTakingQuiz(true);
    setTimeRemaining(30 * 60);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleFinishQuiz = () => {
    if (!activeModule) return;
    const res = submitAssessment(activeModule.id, selectedAnswers, isRecoveryMode);
    setCurrentResult(res);
    setIsTakingQuiz(false);
  };

  const getScoreCriteria = (score: number) => {
    if (score >= 18) {
      return {
        label: 'Excelente Desempenho',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        badge: '18 a 20 Valores'
      };
    }
    if (score >= 14) {
      return {
        label: 'Bom Desempenho',
        color: 'text-blue-700 bg-blue-50 border-blue-200',
        badge: '14 a 17 Valores'
      };
    }
    if (score >= 10) {
      return {
        label: 'Aprovado',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
        badge: '10 a 13 Valores'
      };
    }
    return {
      label: 'Não Aprovado',
      color: 'text-rose-700 bg-rose-50 border-rose-200',
      badge: '0 a 9 Valores'
    };
  };

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-[#1677E8] uppercase tracking-wider block">
            Sistema Oficial de Certificação Pedagógica
          </span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight mt-1">
            Centro de Avaliações e Exames Oficiais
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Avaliações com base na escala angolana de 0 a 20 valores. É obrigatório obter aprovação (mínimo de 10 valores) em cada módulo para desbloquear a conclusão oficial.
          </p>
        </div>

        {/* Scale Legend Box */}
        <div className="p-4 rounded-2xl bg-[#F3F6FC] border border-slate-200/60 text-xs space-y-1.5 shrink-0">
          <span className="font-bold text-[#102B50] block text-[11px] uppercase tracking-wider">
            Escala de Avaliação Oficial (Angola):
          </span>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
            <span className="text-rose-600 font-semibold">• 0 a 9: Não Aprovado</span>
            <span className="text-amber-600 font-semibold">• 10 a 13: Aprovado</span>
            <span className="text-blue-600 font-semibold">• 14 a 17: Bom Desempenho</span>
            <span className="text-emerald-600 font-semibold">• 18 a 20: Excelente</span>
          </div>
        </div>
      </div>

      {/* When taking quiz */}
      {isTakingQuiz && activeModule && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#1677E8] uppercase tracking-wider block">
                {isRecoveryMode ? 'Teste de Recuperação Pedagógica' : 'Exame Oficial de Módulo'}
              </span>
              <h2 className="text-xl font-extrabold text-[#102B50]">
                {activeModule.assessment.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Duração: 30 Minutos</span>
            </div>
          </div>

          {/* List of Questions */}
          <div className="space-y-8">
            {(isRecoveryMode && activeModule.assessment.recoveryQuestions?.length
              ? activeModule.assessment.recoveryQuestions
              : activeModule.assessment.questions
            ).map((q: Question, qIndex: number) => (
              <div key={q.id} className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#1677E8] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {qIndex + 1}
                  </span>
                  <p className="font-bold text-sm sm:text-base text-[#102B50] leading-snug">
                    {q.question}
                  </p>
                </div>

                <div className="space-y-2.5 pt-1 pl-10">
                  {q.options.map((opt, optIndex) => {
                    const isSelected = selectedAnswers[q.id] === optIndex;
                    return (
                      <button
                        key={optIndex}
                        onClick={() => handleSelectOption(q.id, optIndex)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 border-[#1677E8] text-[#102B50] shadow-xs'
                            : 'bg-white hover:bg-slate-100/60 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span>{opt}</span>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'border-[#1677E8] bg-[#1677E8]' : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={() => setIsTakingQuiz(false)}
              className="px-4 py-2.5 rounded-xl text-slate-500 hover:bg-slate-100 text-xs font-bold"
            >
              Cancelar Exame
            </button>

            <button
              onClick={handleFinishQuiz}
              disabled={
                Object.keys(selectedAnswers).length <
                (isRecoveryMode && activeModule.assessment.recoveryQuestions?.length
                  ? activeModule.assessment.recoveryQuestions.length
                  : activeModule.assessment.questions.length)
              }
              className="px-6 py-3 rounded-xl bg-[#21C66B] hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
            >
              Submeter Exame e Ver Pontuação
            </button>
          </div>
        </div>
      )}

      {/* Result Display Screen */}
      {currentResult && activeModule && !isTakingQuiz && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-8 animate-in fade-in">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#102B50] to-[#1677E8] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block">
                Resultado Oficial da Avaliação
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">{activeModule.title}</h2>
              <p className="text-xs sm:text-sm text-blue-100">
                Concluído em: {new Date().toLocaleDateString('pt-AO')} • {isRecoveryMode ? 'Teste de Recuperação' : 'Exame Ordinário'}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 min-w-[150px]">
              <span className="text-4xl sm:text-5xl font-black text-white">
                {currentResult.score}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-100 mt-1">
                De 0 a 20 Valores
              </span>
            </div>
          </div>

          {/* Status Criteria Alert */}
          {(() => {
            const criteria = getScoreCriteria(currentResult.score);
            return (
              <div className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${criteria.color}`}>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 shrink-0" />
                  <div>
                    <h3 className="font-extrabold text-sm">{criteria.label} ({criteria.badge})</h3>
                    <p className="text-xs mt-0.5">{currentResult.recommendation}</p>
                  </div>
                </div>

                {currentResult.score < 10 && (
                  <button
                    onClick={() => startQuiz(activeModule.id, true)}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shrink-0 cursor-pointer"
                  >
                    Fazer Teste de Recuperação
                  </button>
                )}
              </div>
            );
          })()}

          {/* Strengths and Improvements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pontos Fortes Demonstrados</span>
              </span>
              <ul className="space-y-1.5 text-xs text-emerald-950">
                {currentResult.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span>•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Áreas Que Precisam de Melhoria</span>
              </span>
              <ul className="space-y-1.5 text-xs text-amber-950">
                {currentResult.improvements.length > 0 ? (
                  currentResult.improvements.map((imp, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span>•</span>
                      <span>{imp}</span>
                    </li>
                  ))
                ) : (
                  <li>Excelente domínio. Nenhuma lacuna crítica detetada.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Detailed Question Review with Explanations */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="font-bold text-base text-[#102B50]">
              Revisão Pedagógica de Cada Questão
            </h3>

            <div className="space-y-4">
              {(isRecoveryMode && activeModule.assessment.recoveryQuestions?.length
                ? activeModule.assessment.recoveryQuestions
                : activeModule.assessment.questions
              ).map((q: Question, qIndex: number) => {
                const studentAns = currentResult.answers[q.id];
                const isCorrect = studentAns === q.correctAnswerIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border space-y-3 ${
                      isCorrect ? 'bg-emerald-50/30 border-emerald-200' : 'bg-rose-50/30 border-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-bold text-sm text-[#102B50]">
                        {qIndex + 1}. {q.question}
                      </p>
                      {isCorrect ? (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correto
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                          <XCircle className="w-3.5 h-3.5" /> Incorreto
                        </span>
                      )}
                    </div>

                    <div className="space-y-1 text-xs">
                      <p className="text-slate-600">
                        <strong className="text-slate-700">A tua resposta: </strong>
                        {studentAns !== undefined ? q.options[studentAns] : 'Não respondida'}
                      </p>
                      {!isCorrect && (
                        <p className="text-emerald-700 font-semibold">
                          <strong>Resposta correcta: </strong>
                          {q.options[q.correctAnswerIndex]}
                        </p>
                      )}
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600">
                      <strong className="text-[#1677E8]">Fundamentação: </strong>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
            <button
              onClick={() => startQuiz(activeModule.id, false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repetir Exame</span>
            </button>

            <button
              onClick={() => setActiveTab('formacao')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold shadow-xs"
            >
              <span>Voltar à Formação</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Grid of All Module Assessments */}
      {!isTakingQuiz && !currentResult && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const result = assessmentResults[mod.id];
            const hasResult = result !== undefined;
            const score = result?.score;
            const isApproved = hasResult && score !== undefined && score >= 10;
            const criteria = hasResult && score !== undefined ? getScoreCriteria(score) : null;

            return (
              <div
                key={mod.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1677E8] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      Módulo {mod.id}
                    </span>

                    {hasResult && score !== undefined ? (
                      <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${criteria?.color}`}>
                        {score} / 20 Valores
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        Pendente
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-base text-[#102B50] leading-snug">
                    {mod.assessment.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {mod.subtitle}
                  </p>

                  <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>Perguntas no exame:</span>
                      <span className="font-bold text-[#102B50]">{mod.assessment.questions.length} Questões</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tempo limite:</span>
                      <span className="font-bold text-[#102B50]">{mod.assessment.timeLimitMinutes} Minutos</span>
                    </div>
                    {hasResult && (
                      <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                        <span>Classificação:</span>
                        <span className="font-bold text-emerald-700">{criteria?.label}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => startQuiz(mod.id, false)}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isApproved
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                        : 'bg-[#1677E8] hover:bg-blue-600 text-white shadow-xs'
                    }`}
                  >
                    <span>{hasResult ? 'Refazer Avaliação' : 'Iniciar Exame Oficial'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {hasResult && score !== undefined && score < 14 && (
                    <button
                      onClick={() => startQuiz(mod.id, true)}
                      className="py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition-colors"
                      title="Teste de Recuperação para melhorar nota"
                    >
                      Recuperação
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
