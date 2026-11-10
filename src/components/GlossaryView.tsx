import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { GlossaryItem } from '../types';
import { generateGlossaryPDF, PDFExportResult } from '../services/pdfGenerator';
import { PDFPreviewModal } from './PDFPreviewModal';
import { useApp } from '../context/AppContext';
import {
  Search,
  BookOpen,
  FileDown,
  Sparkles,
  Layers,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const { student } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [pdfResult, setPdfResult] = useState<PDFExportResult | null>(null);
  const [showPdfModal, setShowPdfModal] = useState(false);

  const categories = ['Todas', 'Metricas', 'Estrategia', 'Trafego', 'SEO', 'Design'];

  const filteredTerms = GLOSSARY_TERMS.filter((term) => {
    const matchesCategory =
      selectedCategory === 'Todas' || term.category === selectedCategory;
    const matchesSearch =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.simpleExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.practicalExample.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCopy = (term: GlossaryItem) => {
    navigator.clipboard.writeText(
      `${term.term} (${term.fullName}): ${term.simpleExplanation}\nExemplo Prático: ${term.practicalExample}`
    );
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportPDF = () => {
    const res = generateGlossaryPDF(student.name);
    setPdfResult(res);
    setShowPdfModal(true);
  };

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-[#1677E8] uppercase tracking-wider block">
            Dicionário Terminológico Oficial
          </span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight mt-1">
            Glossário Profissional de Marketing Digital
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Consulte as principais siglas, métricas e termos estratégicos com explicações desmistificadas e exemplos aplicados a negócios em Angola.
          </p>
        </div>

        <button
          onClick={handleExportPDF}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-50 hover:bg-blue-100 text-[#1677E8] text-xs font-bold border border-blue-200/80 transition-colors cursor-pointer shrink-0"
        >
          <FileDown className="w-4 h-4" />
          <span>Exportar Glossário em PDF</span>
        </button>
      </div>

      {/* Search and Category Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar por sigla (ex: CAC, ROAS), nome ou exemplo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#102B50] font-medium focus:outline-hidden focus:border-[#1677E8] focus:bg-white transition-colors"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#1677E8] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'Todas' ? `Todas (${GLOSSARY_TERMS.length})` : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Terms Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTerms.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-[#1677E8]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-black text-[#102B50] tracking-tight">
                    {item.term}
                  </h3>
                  <p className="text-xs font-semibold text-[#1677E8]">
                    {item.fullName}
                  </p>
                  {item.translation && (
                    <p className="text-[11px] text-slate-400 italic">
                      ({item.translation})
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <button
                    onClick={() => handleCopy(item)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                    title="Copiar definição"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Simple Explanation */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Explicação Simples:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {item.simpleExplanation}
                </p>
              </div>

              {/* Professional Application */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Aplicação Profissional:
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.professionalApplication}
                </p>
              </div>

              {/* Angolan Practical Example */}
              <div className="mt-3 p-3.5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-indigo-50/50 border border-blue-100/70 space-y-1">
                <span className="text-[11px] font-bold text-[#1677E8] block flex items-center gap-1">
                  <span>🇦🇴</span> Exemplo Prático em Angola:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {item.practicalExample}
                </p>
              </div>
            </div>
          </div>
        ))}

        {filteredTerms.length === 0 && (
          <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-6">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-[#102B50]">Nenhum termo encontrado</p>
            <p className="text-xs text-slate-500 mt-1">
              Verifique a grafia ou tente outro filtro de categoria.
            </p>
          </div>
        )}
      </div>

      {/* PDF Modal */}
      {showPdfModal && (
        <PDFPreviewModal
          pdfResult={pdfResult}
          documentTitle="Glossário Profissional de Marketing Digital"
          onClose={() => setShowPdfModal(false)}
        />
      )}
    </div>
  );
};
