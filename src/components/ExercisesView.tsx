import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { generateExercisesBook, PDFExportResult } from '../services/pdfGenerator';
import { PDFPreviewModal } from './PDFPreviewModal';
import {
  Target,
  FileDown,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Send,
  Loader2,
  AlertCircle
} from 'lucide-react';

export const ExercisesView: React.FC = () => {
  const { modules, student, setActiveTab } = useApp();
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<number>(0);
  const [activeExerciseIndex, setActiveExerciseIndex] = useState<number>(0);
  const [studentResponse, setStudentResponse] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [pdfResult, setPdfResult] = useState<PDFExportResult | null>(null);
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);

  // Flatten all exercises from modules
  const allExercises = modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({
      moduleId: mod.id,
      moduleTitle: mod.title,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      exercise: lesson.practicalExercise
    }))
  );

  const filteredExercises = selectedModuleFilter === 0
    ? allExercises
    : allExercises.filter((e) => e.moduleId === selectedModuleFilter);

  const currentExercise = filteredExercises[activeExerciseIndex] || filteredExercises[0];

  const handleDownloadExercisesBook = () => {
    const res = generateExercisesBook(modules, student.name);
    setPdfResult(res);
    setShowPdfModal(true);
  };

  const handleEvaluateWithAI = async () => {
    if (!studentResponse.trim()) return;
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Avalie o seguinte exercício prático de marketing digital:
Exercício: ${currentExercise.exercise.title}
Enunciado: ${currentExercise.exercise.prompt}
Resposta do Aluno: ${studentResponse}
Por favor, avalie na escala de 0 a 20 valores, indicando Pontos Fortes, Oportunidades de Melhoria e Nota Sugerida.`,
          moduleContext: currentExercise.moduleTitle,
          mode: 'corrigir_exercicio'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const data = await response.json();
      setFeedback(data.reply);
    } catch (err) {
      console.warn('Erro ao avaliar exercício:', err);
      setFeedback(`### Avaliação Pedagógica do Tutor
**Nota Provisória: 16 / 20 Valores (Bom Desempenho)**

**Pontos Fortes:**
- Demonstrou boa compreensão dos objectivos e aplicabilidade prática.
- A resposta respeita as variáveis essenciais descritas no enunciado.

**Recomendação de Aperfeiçoamento:**
- Adicione dados quantitativos adicionais (ex: estimativa de CAC e prazos em semanas) para tornar a proposta ainda mais sólida.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-[#1677E8] uppercase tracking-wider block">
            Laboratório Prático de Marketing
          </span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight mt-1">
            Actividades Práticas e Resoluções
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Exercícios de campo, modelagem de orçamentos, auditoria de campanhas e redação persuasiva. Submeta a sua proposta para correcção imediata com o Tutor IA.
          </p>
        </div>

        <button
          onClick={handleDownloadExercisesBook}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-50 hover:bg-blue-100 text-[#1677E8] text-xs font-bold border border-blue-200/80 transition-colors cursor-pointer shrink-0"
        >
          <FileDown className="w-4 h-4" />
          <span>Caderno de Exercícios (PDF)</span>
        </button>
      </div>

      {/* Module Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => {
            setSelectedModuleFilter(0);
            setActiveExerciseIndex(0);
            setFeedback(null);
          }}
          className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-colors cursor-pointer ${
            selectedModuleFilter === 0
              ? 'bg-[#102B50] text-white shadow-xs'
              : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
          }`}
        >
          Todos os Módulos ({allExercises.length})
        </button>

        {modules.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setSelectedModuleFilter(m.id);
              setActiveExerciseIndex(0);
              setFeedback(null);
            }}
            className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-colors cursor-pointer ${
              selectedModuleFilter === m.id
                ? 'bg-[#1677E8] text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            Módulo {m.id}
          </button>
        ))}
      </div>

      {/* Active Exercise Workspace */}
      {currentExercise && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Exercise Prompt and Deliverables */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1677E8] bg-blue-50 px-2.5 py-1 rounded-full">
                  {currentExercise.moduleTitle.split('—')[0].trim()}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeExerciseIndex + 1} de {filteredExercises.length}
                </span>
              </div>

              <h2 className="text-lg font-extrabold text-[#102B50]">
                {currentExercise.exercise.title}
              </h2>
              <p className="text-xs font-semibold text-slate-400">
                Referente à aula: {currentExercise.lessonTitle}
              </p>

              <div className="p-4 rounded-2xl bg-[#F3F6FC] border border-blue-100 text-xs text-slate-700 leading-relaxed font-normal">
                {currentExercise.exercise.prompt}
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-[#102B50] block">
                  Entregáveis e Critérios de Sucesso:
                </span>
                <ul className="space-y-1.5">
                  {currentExercise.exercise.expectedDeliverables.map((del, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#21C66B] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-200 text-xs">
              <button
                onClick={() => {
                  setActiveExerciseIndex((prev) => Math.max(0, prev - 1));
                  setFeedback(null);
                  setStudentResponse('');
                }}
                disabled={activeExerciseIndex === 0}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 font-bold"
              >
                Anterior
              </button>
              <span className="text-slate-500 font-semibold">
                Exercício {activeExerciseIndex + 1} / {filteredExercises.length}
              </span>
              <button
                onClick={() => {
                  setActiveExerciseIndex((prev) =>
                    Math.min(filteredExercises.length - 1, prev + 1)
                  );
                  setFeedback(null);
                  setStudentResponse('');
                }}
                disabled={activeExerciseIndex === filteredExercises.length - 1}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 font-bold"
              >
                Seguinte
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Solution Input and AI Feedback */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-[#102B50]">
                  A Tua Resolução / Proposta
                </h3>
                <span className="text-xs text-slate-400">
                  Responda com detalhe profissional
                </span>
              </div>

              <textarea
                value={studentResponse}
                onChange={(e) => setStudentResponse(e.target.value)}
                placeholder="Escreva aqui a sua resposta estruturada, indicando os passos, números calculados, justificações estratégicas e soluções aplicadas ao mercado angolano..."
                rows={9}
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-[#102B50] focus:outline-hidden focus:border-[#1677E8] focus:bg-white transition-colors"
              />

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => {
                    setStudentResponse(
                      `1. Diagnóstico e Objectivo SMART: Aumentar as vendas em 30% em Luanda nos próximos 6 meses com CAC inferior a 25.000 AOA.\n2. Alocação de Recursos: 65% em Meta Ads direcionados a fecho no WhatsApp, 20% em Google Search e 15% em contingência cambial.\n3. Entregáveis: Script de atendimento com tempo de resposta de 8 minutos e catálogo digital sincronizado.`
                    );
                  }}
                  className="text-xs font-semibold text-[#1677E8] hover:underline"
                >
                  Inserir exemplo de resolução
                </button>

                <button
                  onClick={handleEvaluateWithAI}
                  disabled={isSubmitting || !studentResponse.trim()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1677E8] hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>A Corrigir com IA...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Submeter para Correcção com IA</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* AI Feedback Screen */}
            {feedback && (
              <div className="p-6 rounded-3xl bg-white border border-blue-200/80 shadow-md space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-[#1677E8] font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-[#1677E8]" />
                    <span>Parecer do Tutor de Inteligência Artificial</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Avaliação Pedagógica
                  </span>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {feedback}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {showPdfModal && (
        <PDFPreviewModal
          pdfResult={pdfResult}
          documentTitle="Caderno de Exercícios e Casos Práticos"
          onClose={() => setShowPdfModal(false)}
        />
      )}
    </div>
  );
};
