import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  generateCompleteCourseManual,
  generateModuleManual,
  generateLessonManual,
  generateFormulasGuide,
  generateExercisesBook,
  generateGlossaryPDF,
  generateToolsGuide,
  generateStudySummaries,
  generateCertificatePDF,
  PDFExportResult
} from '../services/pdfGenerator';
import { PDFPreviewModal } from './PDFPreviewModal';
import {
  FileText,
  FileDown,
  Printer,
  Eye,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Calculator,
  Target,
  Wrench,
  Award,
  Layers
} from 'lucide-react';

export const ManualsView: React.FC = () => {
  const { modules, student } = useApp();
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [selectedLessonId, setSelectedLessonId] = useState<string>('m1-l1');
  const [pdfResult, setPdfResult] = useState<PDFExportResult | null>(null);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const currentModule = modules.find((m) => m.id === selectedModuleId) || modules[0];
  const currentLesson = currentModule.lessons.find((l) => l.id === selectedLessonId) || currentModule.lessons[0];

  const handleGenerate = (type: string, action: 'preview' | 'download' | 'print' = 'preview') => {
    setIsGenerating(true);
    let result: PDFExportResult;
    let title = '';

    setTimeout(() => {
      try {
        switch (type) {
          case 'completo':
            result = generateCompleteCourseManual(modules, student.name);
            title = 'Manual Completo da Formação Executiva';
            break;
          case 'modulo':
            result = generateModuleManual(currentModule, student.name);
            title = `Manual Oficial: ${currentModule.title}`;
            break;
          case 'aula':
            result = generateLessonManual(currentLesson, currentModule.title, student.name);
            title = `Manual da Aula: ${currentLesson.title}`;
            break;
          case 'resumos':
            result = generateStudySummaries(modules, student.name);
            title = 'Resumos de Estudo e Sínteses Pedagógicas';
            break;
          case 'exercicios':
            result = generateExercisesBook(modules, student.name);
            title = 'Caderno de Exercícios e Casos Práticos';
            break;
          case 'formulas':
            result = generateFormulasGuide(student.name);
            title = 'Guia Executivo de Fórmulas e Indicadores de Marketing';
            break;
          case 'glossario':
            result = generateGlossaryPDF(student.name);
            title = 'Glossário Profissional de Marketing Digital';
            break;
          case 'ferramentas':
            result = generateToolsGuide(student.name);
            title = 'Guia Prático de Ferramentas Digitais (MarTech)';
            break;
          case 'certificado':
            result = generateCertificatePDF(
              student.name,
              new Date().toLocaleDateString('pt-AO', { day: '2-digit', month: 'long', year: 'numeric' }),
              'AMD-AO-2026-8891'
            );
            title = `Certificado de Conclusão - ${student.name}`;
            break;
          default:
            result = generateCompleteCourseManual(modules, student.name);
            title = 'Manual da Academia';
        }

        setPdfResult(result);
        setModalTitle(title);

        if (action === 'download') {
          result.download();
        } else if (action === 'print') {
          result.print();
        } else {
          setShowModal(true);
        }
      } catch (err) {
        console.error('Erro na geração do PDF:', err);
      } finally {
        setIsGenerating(false);
      }
    }, 150);
  };

  const documentTypes = [
    {
      id: 'completo',
      title: '1. Manual Completo da Formação',
      category: 'Compêndio Integral',
      description: 'Documento completo com os 6 módulos, 67 aulas, índice geral, tabelas comparativas e glossário unificado.',
      icon: BookOpen,
      pages: '~140 páginas',
      color: 'from-blue-900 to-indigo-900',
      hasControls: false
    },
    {
      id: 'modulo',
      title: '2. Manual Individual de Cada Módulo',
      category: 'Módulo Temático',
      description: 'Manual monográfico com todas as aulas do módulo selecionado, estudos de caso e roteiro de avaliação.',
      icon: Layers,
      pages: '~25 páginas',
      color: 'from-blue-600 to-cyan-700',
      hasControls: 'module'
    },
    {
      id: 'aula',
      title: '3. Manual Individual de Cada Aula',
      category: 'Monografia de Aula',
      description: 'Conteúdo vertical de uma aula específica com introdução, teoria profunda, exemplo angolano, ferramentas e exercícios.',
      icon: FileText,
      pages: '~4 a 6 páginas',
      color: 'from-sky-600 to-blue-700',
      hasControls: 'lesson'
    },
    {
      id: 'resumos',
      title: '4. Resumos de Estudo e Sínteses',
      category: 'Revisão Rápida',
      description: 'Guias sintéticos estruturados para revisão rápida antes de exames oficiais ou entrevistas executivas.',
      icon: Sparkles,
      pages: '~18 páginas',
      color: 'from-teal-600 to-emerald-700',
      hasControls: false
    },
    {
      id: 'exercicios',
      title: '5. Caderno de Exercícios Práticos',
      category: 'Caderno Prático',
      description: 'Compilação de todas as actividades de aplicação com tabelas para preenchimento manual ou digital.',
      icon: Target,
      pages: '~30 páginas',
      color: 'from-amber-600 to-orange-700',
      hasControls: false
    },
    {
      id: 'formulas',
      title: '6. Guia de Fórmulas e Indicadores',
      category: 'Métricas Financeiras',
      description: 'Quadro mestre de cálculos: CAC, CPL, ROAS, LTV, CTR, ROI, Breakeven com dados explicados em Kwanzas (AOA).',
      icon: Calculator,
      pages: '~8 páginas',
      color: 'from-purple-600 to-indigo-800',
      hasControls: false
    },
    {
      id: 'glossario',
      title: '7. Glossário Profissional em PDF',
      category: 'Dicionário Técnico',
      description: 'Dicionário oficial com os 20+ termos mais importantes explicados de forma simples e contextualizados ao mercado.',
      icon: BookOpen,
      pages: '~12 páginas',
      color: 'from-cyan-600 to-blue-800',
      hasControls: false
    },
    {
      id: 'ferramentas',
      title: '8. Guia Prático de Ferramentas (MarTech)',
      category: 'Pilha Tecnológica',
      description: 'Manual de ferramentas digitais recomendadas: Meta Ads, GA4, Looker Studio, WordPress e automações.',
      icon: Wrench,
      pages: '~10 páginas',
      color: 'from-emerald-700 to-teal-800',
      hasControls: false
    }
  ];

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-[#1677E8] uppercase tracking-wider block">
            Biblioteca Oficial & Editora Pedagógica
          </span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight mt-1">
            Manuais de Apoio em Formato PDF
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Gere, pré-visualize e descarregue documentos pedagógicos completos em formato A4, com capas profissionais, índices automáticos, cabeçalhos institucionais e numeração de páginas.
          </p>
        </div>

        <button
          onClick={() => handleGenerate('completo', 'download')}
          disabled={isGenerating}
          className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-102 cursor-pointer shrink-0"
        >
          <FileDown className="w-4 h-4" />
          <span>{isGenerating ? 'A processar...' : 'Descarregar Manual Completo (PDF)'}</span>
        </button>
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#21C66B] shrink-0" />
          <span className="text-slate-700 font-semibold">Formato A4 Vertical & Capa Editorial</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#21C66B] shrink-0" />
          <span className="text-slate-700 font-semibold">Índice & Numeração de Páginas</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#21C66B] shrink-0" />
          <span className="text-slate-700 font-semibold">Fórmulas em Kwanzas (AOA)</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#21C66B] shrink-0" />
          <span className="text-slate-700 font-semibold">Cabeçalhos & Rodapés Oficiais</span>
        </div>
      </div>

      {/* Document Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentTypes.map((doc) => {
          const Icon = doc.icon;

          return (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${doc.color} text-white flex items-center justify-center shadow-xs`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {doc.pages}
                    </span>
                    <span className="text-[10px] font-bold text-[#1677E8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {doc.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-[#102B50]">
                  {doc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                  {doc.description}
                </p>

                {/* Sub-selectors for module or lesson */}
                {doc.hasControls === 'module' && (
                  <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                    <label className="text-[11px] font-bold text-[#102B50] block">
                      Seleccione o Módulo a exportar:
                    </label>
                    <select
                      value={selectedModuleId}
                      onChange={(e) => setSelectedModuleId(parseInt(e.target.value, 10))}
                      className="w-full text-xs p-2 rounded-xl bg-white border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
                    >
                      {modules.map((m) => (
                        <option key={m.id} value={m.id}>
                          Módulo {m.id}: {m.title.replace(`Módulo ${m.id} — `, '')}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {doc.hasControls === 'lesson' && (
                  <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
                    <div>
                      <label className="text-[11px] font-bold text-[#102B50] block mb-1">
                        1. Módulo:
                      </label>
                      <select
                        value={selectedModuleId}
                        onChange={(e) => {
                          const mId = parseInt(e.target.value, 10);
                          setSelectedModuleId(mId);
                          const newMod = modules.find((m) => m.id === mId);
                          if (newMod && newMod.lessons[0]) {
                            setSelectedLessonId(newMod.lessons[0].id);
                          }
                        }}
                        className="w-full text-xs p-2 rounded-xl bg-white border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
                      >
                        {modules.map((m) => (
                          <option key={m.id} value={m.id}>
                            Módulo {m.id}: {m.title.replace(`Módulo ${m.id} — `, '')}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#102B50] block mb-1">
                        2. Aula Específica:
                      </label>
                      <select
                        value={selectedLessonId}
                        onChange={(e) => setSelectedLessonId(e.target.value)}
                        className="w-full text-xs p-2 rounded-xl bg-white border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
                      >
                        {currentModule.lessons.map((l) => (
                          <option key={l.id} value={l.id}>
                            Aula {l.order}: {l.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons: Gerar, Pré-visualizar, Descarregar, Imprimir */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                <button
                  onClick={() => handleGenerate(doc.id, 'preview')}
                  disabled={isGenerating}
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Pré-visualizar</span>
                </button>

                <button
                  onClick={() => handleGenerate(doc.id, 'download')}
                  disabled={isGenerating}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  title="Descarregar PDF"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Descarregar</span>
                </button>

                <button
                  onClick={() => handleGenerate(doc.id, 'print')}
                  disabled={isGenerating}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  title="Imprimir Directamente"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Imprimir</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* PDF Modal */}
      {showModal && (
        <PDFPreviewModal
          pdfResult={pdfResult}
          documentTitle={modalTitle}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};
