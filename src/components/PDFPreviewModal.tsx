import React from 'react';
import { PDFExportResult } from '../services/pdfGenerator';
import { X, Download, Printer, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

interface PDFPreviewModalProps {
  pdfResult: PDFExportResult | null;
  onClose: () => void;
  documentTitle: string;
}

export const PDFPreviewModal: React.FC<PDFPreviewModalProps> = ({
  pdfResult,
  onClose,
  documentTitle
}) => {
  if (!pdfResult) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-4xl h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#1677E8]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#102B50] line-clamp-1">
                {documentTitle}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> PDF A4 Gerado
                </span>
                <span>•</span>
                <span>{pdfResult.filename}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={pdfResult.download}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Descarregar</span>
            </button>
            <button
              onClick={pdfResult.print}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors"
              title="Imprimir"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200/80 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF iframe */}
        <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-hidden relative">
          <iframe
            src={pdfResult.blobUrl}
            title={documentTitle}
            className="w-full h-full rounded-xl border border-slate-200 shadow-inner bg-white"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            Documento com qualidade editorial emitido pela Academia de Marketing Digital (A4 vertical).
          </p>
          <div className="flex items-center gap-3">
            <a
              href={pdfResult.blobUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1677E8] font-bold hover:underline flex items-center gap-1"
            >
              Abrir em nova aba <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
