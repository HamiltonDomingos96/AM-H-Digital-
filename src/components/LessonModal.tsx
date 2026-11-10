import React, { useState } from 'react';
import { Lesson, CourseModule } from '../types';
import { useApp } from '../context/AppContext';
import { generateLessonManual, PDFExportResult } from '../services/pdfGenerator';
import { PDFPreviewModal } from './PDFPreviewModal';
import {
  X,
  CheckCircle2,
  FileDown,
  Sparkles,
  BookOpen,
  Clock,
  Compass,
  Briefcase,
  Wrench,
  HelpCircle,
  BookmarkCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface LessonModalProps {
  lesson: Lesson;
  module: CourseModule;
  onClose: () => void;
  onNextLesson?: () => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  module,
  onClose,
  onNextLesson
}) => {
  const { markLessonCompleted, student, setActiveTab } = useApp();
  const [activeTab, setActiveTabSection] = useState<'conteudo' | 'caso' | 'exercicio' | 'revisao'>('conteudo');
  const [pdfResult, setPdfResult] = useState<PDFExportResult | null>(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [completed, setCompleted] = useState(!!lesson.isCompleted);

  const handleMarkDone = () => {
    markLessonCompleted(module.id, lesson.id);
    setCompleted(true);
  };

  const handleExportPDF = () => {
    const res = generateLessonManual(lesson, module.title, student.name);
    setPdfResult(res);
    setShowPdfModal(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-slate-900/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-5xl h-[94vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#1677E8] font-bold text-sm">
              {lesson.order}
            </div>
            <div>
              <span className="text-xs font-bold text-[#1677E8] uppercase tracking-wider block">
                {module.title}
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-[#102B50] line-clamp-1">
                {lesson.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportPDF}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1677E8] text-xs font-bold transition-colors cursor-pointer"
              title="Gerar Manual de Aula em PDF"
            >
              <FileDown className="w-4 h-4" />
              <span className="hidden sm:inline">Manual da Aula (PDF)</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200/80 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Subnav Tabs */}
        <div className="px-6 border-b border-slate-200 bg-white flex items-center gap-2 overflow-x-auto text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTabSection('conteudo')}
            className={`py-3 px-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'conteudo'
                ? 'border-[#1677E8] text-[#1677E8]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            1. Teoria e Angola
          </button>
          <button
            onClick={() => setActiveTabSection('caso')}
            className={`py-3 px-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'caso'
                ? 'border-[#1677E8] text-[#1677E8]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            2. Estudo de Caso Prático
          </button>
          <button
            onClick={() => setActiveTabSection('exercicio')}
            className={`py-3 px-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'exercicio'
                ? 'border-[#1677E8] text-[#1677E8]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            3. Exercício & Ferramentas
          </button>
          <button
            onClick={() => setActiveTabSection('revisao')}
            className={`py-3 px-3.5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'revisao'
                ? 'border-[#1677E8] text-[#1677E8]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            4. Revisão & Resumo
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-white">
          {activeTab === 'conteudo' && (
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Learning Objectives Box */}
              <div className="p-5 rounded-2xl bg-[#F3F6FC] border border-blue-100/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1677E8]">
                  <BookmarkCheck className="w-4 h-4" />
                  <span>Objectivos de Aprendizagem</span>
                </div>
                <ul className="space-y-2">
                  {lesson.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#102B50]">
                      <span className="text-[#1677E8] font-bold">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Introduction */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#102B50] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#1677E8]" />
                  <span>Introdução ao Tema</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {lesson.introduction}
                </p>
              </div>

              {/* Deep Theoretical Explanation */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#102B50]">
                  Explicação Teórica Detalhada
                </h3>
                <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                  {lesson.theory}
                </div>
              </div>

              {/* Fundamental Concepts & Terms */}
              {lesson.fundamentalConcepts && lesson.fundamentalConcepts.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#102B50]">
                    Conceitos Fundamentais e Siglas Técnicas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {lesson.fundamentalConcepts.map((concept, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
                      >
                        <span className="font-bold text-xs text-[#1677E8] block">
                          {concept.term}
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {concept.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Application to Angolan Market */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200/60 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇦🇴</span>
                  <h3 className="text-base font-bold text-[#102B50]">
                    Aplicação ao Mercado Angolano
                  </h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {lesson.angolaContext}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'caso' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#102B50]">
                    Estudo de Caso Prático: {lesson.caseStudy.company}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sector: {lesson.caseStudy.sector} • Localização: {lesson.caseStudy.location}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                    1. Cenário e Situação Inicial
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {lesson.caseStudy.situation}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1677E8] block">
                    2. Estratégia e Solução Implementada
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {lesson.caseStudy.solution}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                    3. Resultados Mensuráveis e Impacto Financeiro
                  </span>
                  <p className="text-sm font-semibold text-emerald-950 leading-relaxed">
                    {lesson.caseStudy.results}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 text-[11px] text-slate-500 italic">
                *Nota Pedagógica: Os dados e cenários apresentados são hipotéticos e estruturados para refletir com rigor a realidade empresarial e de mercado em Angola.
              </div>
            </div>
          )}

          {activeTab === 'exercicio' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Practical Exercise Box */}
              <div className="p-6 rounded-2xl bg-white border-2 border-dashed border-[#1677E8]/40 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1677E8] bg-blue-50 px-3 py-1 rounded-full">
                    Actividade de Aplicação Prática
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      setActiveTab('tutor');
                    }}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#1677E8] hover:underline"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pedir ajuda ao Tutor IA</span>
                  </button>
                </div>

                <h3 className="text-lg font-bold text-[#102B50]">
                  {lesson.practicalExercise.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {lesson.practicalExercise.prompt}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-bold text-slate-600 block">
                    Entregáveis Esperados para esta Actividade:
                  </span>
                  <ul className="space-y-1">
                    {lesson.practicalExercise.expectedDeliverables.map((item, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#21C66B]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Tools */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#102B50] flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#1677E8]" />
                  <span>Ferramentas Recomendadas para esta Aula</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lesson.recommendedTools.map((tool, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#102B50]">{tool.name}</span>
                        <span className="text-[10px] text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'revisao' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Summary */}
              <div className="p-5 rounded-2xl bg-[#F3F6FC] border border-blue-100 space-y-2">
                <h3 className="text-base font-bold text-[#102B50]">Resumo da Aula</h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {lesson.summary}
                </p>
              </div>

              {/* Review Questions */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#102B50] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#1677E8]" />
                  <span>Perguntas de Fixação e Revisão</span>
                </h3>

                <div className="space-y-3">
                  {lesson.reviewQuestions.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
                    >
                      <p className="font-bold text-sm text-[#102B50]">
                        {i + 1}. {item.question}
                      </p>
                      <p className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-100">
                        <strong className="text-emerald-700">Explicação / Resposta Ideal: </strong>
                        {item.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complementary Resources */}
              {lesson.resources && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Recursos e Leituras Complementares
                  </h4>
                  <ul className="space-y-1">
                    {lesson.resources.map((res, i) => (
                      <li key={i} className="text-xs text-[#1677E8] font-semibold flex items-center gap-1.5">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <button
            onClick={() => {
              onClose();
              setActiveTab('tutor');
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-200/80 text-xs font-bold transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#1677E8]" />
            <span>Tirar Dúvida com Tutor IA</span>
          </button>

          <div className="flex items-center gap-3">
            {!completed ? (
              <button
                onClick={handleMarkDone}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#21C66B] hover:bg-emerald-600 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Marcar Aula como Concluída</span>
              </button>
            ) : (
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Aula Concluída com Sucesso</span>
              </span>
            )}

            {onNextLesson && (
              <button
                onClick={onNextLesson}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                <span>Próxima Aula</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lesson PDF Preview Modal */}
      {showPdfModal && (
        <PDFPreviewModal
          pdfResult={pdfResult}
          documentTitle={`Manual da Aula: ${lesson.title}`}
          onClose={() => setShowPdfModal(false)}
        />
      )}
    </div>
  );
};
