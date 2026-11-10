import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Lesson, CourseModule } from '../types';
import { LessonModal } from './LessonModal';
import { generateModuleManual, generateLessonManual, PDFExportResult } from '../services/pdfGenerator';
import { PDFPreviewModal } from './PDFPreviewModal';
import {
  Compass,
  CalendarCheck,
  Zap,
  Globe,
  BarChart3,
  Award,
  CheckCircle2,
  Clock,
  PlayCircle,
  FileDown,
  ChevronRight,
  BookOpen,
  Filter,
  Search
} from 'lucide-react';

export const FormationView: React.FC = () => {
  const {
    modules,
    selectedModuleId,
    setSelectedModuleId,
    selectedLesson,
    setSelectedLesson,
    student,
    setActiveTab
  } = useApp();

  const [activeModuleId, setActiveModuleId] = useState<number>(selectedModuleId || 1);
  const [filterMode, setFilterMode] = useState<'todas' | 'pendentes' | 'concluidas'>('todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [pdfResult, setPdfResult] = useState<PDFExportResult | null>(null);
  const [showPdfModal, setShowPdfModal] = useState(false);

  const currentModule = modules.find((m) => m.id === activeModuleId) || modules[0];

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

  const filteredLessons = currentModule.lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.objectives.some((o) => o.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (filterMode === 'pendentes') return !lesson.isCompleted;
    if (filterMode === 'concluidas') return !!lesson.isCompleted;
    return true;
  });

  const handleExportModulePDF = (mod: CourseModule) => {
    const res = generateModuleManual(mod, student.name);
    setPdfResult(res);
    setShowPdfModal(true);
  };

  const handleNextLesson = () => {
    if (!selectedLesson) return;
    const currentIndex = currentModule.lessons.findIndex((l) => l.id === selectedLesson.id);
    if (currentIndex >= 0 && currentIndex < currentModule.lessons.length - 1) {
      setSelectedLesson(currentModule.lessons[currentIndex + 1]);
    } else {
      setSelectedLesson(null);
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#1677E8] uppercase tracking-wider block">
            Programa Curricular Completo • 6 Meses
          </span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight mt-1">
            Formação em Marketing Digital e Estratégia
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            6 módulos profissionais, 67 aulas detalhadas e resolução de casos angolanos e globais.
          </p>
        </div>

        <button
          onClick={() => handleExportModulePDF(currentModule)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1677E8] text-xs font-bold transition-colors cursor-pointer border border-blue-200/60"
        >
          <FileDown className="w-4 h-4" />
          <span>Manual deste Módulo (PDF)</span>
        </button>
      </div>

      {/* Module Selector Horizontal Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {modules.map((mod) => {
          const Icon = getModuleIcon(mod.iconName);
          const isSelected = mod.id === activeModuleId;
          const isDone = mod.status === 'concluido';

          return (
            <button
              key={mod.id}
              onClick={() => {
                setActiveModuleId(mod.id);
                setSelectedModuleId(mod.id);
              }}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-[#102B50] to-[#1677E8] text-white border-transparent shadow-md shadow-blue-900/10'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : isDone
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Módulo {mod.id}
                </span>

                {isDone && (
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${isSelected ? 'text-[#21C66B]' : 'text-emerald-600'}`}
                  />
                )}
              </div>

              <div>
                <h3
                  className={`text-xs font-bold line-clamp-1 ${
                    isSelected ? 'text-white' : 'text-[#102B50]'
                  }`}
                >
                  {mod.title.replace(`Módulo ${mod.id} — `, '')}
                </h3>
                <span
                  className={`text-[11px] mt-0.5 block ${
                    isSelected ? 'text-blue-100' : 'text-slate-400'
                  }`}
                >
                  {mod.lessonsCount} Aulas • {isDone ? '100%' : `${mod.progressPercent}%`}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Module Header Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#1677E8] bg-blue-50 px-2.5 py-0.5 rounded-full">
                Módulo {currentModule.id} de 6
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-500">
                {currentModule.durationWeeks} Semanas ({currentModule.durationHours} horas)
              </span>
              {currentModule.assessmentScore !== undefined && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Nota Exame: {currentModule.assessmentScore}/20
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B50]">
              {currentModule.title}
            </h2>
            <p className="text-sm font-semibold text-[#1677E8]">
              {currentModule.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed pt-1">
              {currentModule.description}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('avaliacoes')}
              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>Avaliação do Módulo</span>
            </button>
          </div>
        </div>

        {/* Progress Bar in Module */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-500">
              Aulas Concluídas: {currentModule.lessons.filter((l) => l.isCompleted).length} de{' '}
              {currentModule.lessons.length}
            </span>
            <span className="font-bold text-[#102B50]">
              {currentModule.status === 'concluido' ? '100%' : `${currentModule.progressPercent}%`}
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                currentModule.status === 'concluido' ? 'bg-[#21C66B]' : 'bg-[#1677E8]'
              }`}
              style={{
                width: `${
                  currentModule.status === 'concluido' ? 100 : currentModule.progressPercent
                }%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar for Lessons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200/80">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar por aula ou tema..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => setFilterMode('todas')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filterMode === 'todas'
                ? 'bg-[#1677E8] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todas ({currentModule.lessons.length})
          </button>
          <button
            onClick={() => setFilterMode('pendentes')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filterMode === 'pendentes'
                ? 'bg-[#1677E8] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            A Estudar ({currentModule.lessons.filter((l) => !l.isCompleted).length})
          </button>
          <button
            onClick={() => setFilterMode('concluidas')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filterMode === 'concluidas'
                ? 'bg-[#1677E8] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Concluídas ({currentModule.lessons.filter((l) => l.isCompleted).length})
          </button>
        </div>
      </div>

      {/* List of Lessons */}
      <div className="space-y-3">
        {filteredLessons.map((lesson) => {
          const isDone = !!lesson.isCompleted;

          return (
            <div
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isDone
                  ? 'bg-white hover:bg-emerald-50/20 border-slate-200/80'
                  : 'bg-white hover:border-[#1677E8]/50 border-slate-200 shadow-2xs hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0 ${
                    isDone
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-blue-50 text-[#1677E8]'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : lesson.order}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-sm sm:text-base text-[#102B50]">
                      {lesson.title}
                    </h3>
                    {isDone ? (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        Concluída
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-[#1677E8] bg-blue-50 px-2 py-0.5 rounded-md">
                        Disponível
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-1 max-w-2xl">
                    {lesson.objectives[0]}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-0.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {lesson.durationMinutes} minutos recomendados
                    </span>
                    <span>•</span>
                    <span>Estudo de Caso: {lesson.caseStudy.company}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const res = generateLessonManual(lesson, currentModule.title, student.name);
                    setPdfResult(res);
                    setShowPdfModal(true);
                  }}
                  className="p-2 rounded-xl text-slate-400 hover:text-[#1677E8] hover:bg-blue-50 transition-colors"
                  title="Descarregar Manual desta Aula em PDF"
                >
                  <FileDown className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedLesson(lesson)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isDone
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      : 'bg-[#1677E8] hover:bg-blue-600 text-white shadow-xs'
                  }`}
                >
                  <span>{isDone ? 'Revisar Aula' : 'Estudar Agora'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}

        {filteredLessons.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-6">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-[#102B50]">Nenhuma aula encontrada</p>
            <p className="text-xs text-slate-500 mt-1">
              Tente alterar os termos da pesquisa ou o filtro seleccionado.
            </p>
          </div>
        )}
      </div>

      {/* Lesson View Modal */}
      {selectedLesson && (
        <LessonModal
          lesson={selectedLesson}
          module={currentModule}
          onClose={() => setSelectedLesson(null)}
          onNextLesson={handleNextLesson}
        />
      )}

      {/* PDF Modal */}
      {showPdfModal && (
        <PDFPreviewModal
          pdfResult={pdfResult}
          documentTitle={`Manual Pedagógico: ${currentModule.title}`}
          onClose={() => setShowPdfModal(false)}
        />
      )}
    </div>
  );
};
