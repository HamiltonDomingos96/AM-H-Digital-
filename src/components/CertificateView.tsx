import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { generateCertificatePDF, PDFExportResult } from '../services/pdfGenerator';
import { PDFPreviewModal } from './PDFPreviewModal';
import {
  Award,
  CheckCircle2,
  FileDown,
  Printer,
  ShieldCheck,
  Lock,
  Sparkles,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export const CertificateView: React.FC = () => {
  const { student, modules, canGetCertificate, unlockAllForDemo } = useApp();
  const [pdfResult, setPdfResult] = useState<PDFExportResult | null>(null);
  const [showPdfModal, setShowPdfModal] = useState(false);

  const certificateId = 'AMD-AO-2026-8891';
  const completionDate = new Date().toLocaleDateString('pt-AO', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const handleGenerateCertificate = (action: 'preview' | 'download' | 'print' = 'preview') => {
    const res = generateCertificatePDF(student.name, completionDate, certificateId);
    setPdfResult(res);

    if (action === 'download') {
      res.download();
    } else if (action === 'print') {
      res.print();
    } else {
      setShowPdfModal(true);
    }
  };

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-[#1677E8] uppercase tracking-wider block">
            Emissão Oficial da Academia
          </span>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight mt-1">
            Certificado de Conclusão Profissional
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Documento de conclusão emitido pela plataforma Academia de Marketing H-Digital para estudantes que cumpriram integralmente as 240 horas curriculares e aprovação nos 6 módulos.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleGenerateCertificate('download')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-102 cursor-pointer shrink-0"
          >
            <FileDown className="w-4 h-4" />
            <span>Descarregar Certificado (PDF)</span>
          </button>
        </div>
      </div>

      {/* Certificate Status Alert */}
      {!canGetCertificate ? (
        <div className="p-5 rounded-3xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-amber-900">
                Certificação em Curso ({modules.filter((m) => m.status === 'concluido').length} de 6 Módulos Concluídos)
              </h3>
              <p className="text-xs text-amber-800/90 mt-0.5">
                Para emissão regular definitiva, conclua todos os 6 módulos. Pode pré-visualizar ou testar o certificado clicando no botão ao lado.
              </p>
            </div>
          </div>

          <button
            onClick={unlockAllForDemo}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
          >
            Simular Conclusão de Todos os Módulos
          </button>
        </div>
      ) : (
        <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-center gap-3.5 text-xs text-emerald-900">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <h3 className="font-extrabold text-sm text-emerald-950">
              Parabéns! Requisitos 100% Cumpridos
            </h3>
            <p className="text-emerald-800 mt-0.5">
              Todos os 6 módulos e avaliações curriculares foram concluídos com aproveitamento aprovado. O seu certificado oficial está disponível para download.
            </p>
          </div>
        </div>
      )}

      {/* Visual Certificate Preview Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-4 border-slate-200 shadow-xl relative overflow-hidden text-center space-y-6">
        {/* Elegant Guilloche-like border frame */}
        <div className="absolute inset-3 border-2 border-[#1677E8]/30 rounded-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#1677E8]">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIA DE MARKETING H-DIGITAL • PROGRAMA EXECUTIVO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#102B50] tracking-tight">
            CERTIFICADO DE CONCLUSÃO
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Certifica-se formalmente para os devidos efeitos que
          </p>

          <div className="py-2">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#1677E8] tracking-wide uppercase border-b-2 border-[#1677E8]/40 pb-1 inline-block">
              {student.name}
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
            concluiu com êxito todas as exigências curriculares, avaliações práticas e estudos de caso da Formação Profissional Avançada em Gestão de Marketing Digital e Estratégia de Crescimento, abrangendo Estratégia Corporativa, Planeamento, Publicidade Paga (Meta/Google Ads), SEO, Análise de Dados e Direcção de Marketing.
          </p>

          <div className="pt-2 text-xs font-bold text-[#102B50]">
            CARGA HORÁRIA: 240 HORAS (24 SEMANAS) • AVALIAÇÃO MÉDIA APROVADA: ESCALA 0-20 VALORES
          </div>

          {/* Institutional Signatures */}
          <div className="pt-8 grid grid-cols-2 max-w-lg mx-auto gap-8 text-center text-xs">
            <div className="space-y-1">
              <div className="h-0.5 bg-slate-300 w-36 mx-auto mb-1" />
              <span className="font-bold text-[#102B50] block">Director Académico</span>
              <span className="text-[11px] text-slate-400 block">Academia de Marketing Digital</span>
            </div>
            <div className="space-y-1">
              <div className="h-0.5 bg-slate-300 w-36 mx-auto mb-1" />
              <span className="font-bold text-[#102B50] block">Coordenador Pedagógico</span>
              <span className="text-[11px] text-slate-400 block">Comissão de Avaliação Docente</span>
            </div>
          </div>

          {/* Security Identifier Footer */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <span>Identificador de Autenticidade: <strong>{certificateId}</strong></span>
            <span>Data de Emissão: {completionDate} • Luanda, Angola</span>
            <span className="italic">Certificado emitido pela plataforma oficial AMD</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 relative z-10 flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => handleGenerateCertificate('preview')}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
          >
            <span>Pré-visualizar em Ecrã Cheio</span>
          </button>
          <button
            onClick={() => handleGenerateCertificate('download')}
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>Descarregar em PDF Oficial</span>
          </button>
          <button
            onClick={() => handleGenerateCertificate('print')}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir</span>
          </button>
        </div>
      </div>

      {/* PDF Modal */}
      {showPdfModal && (
        <PDFPreviewModal
          pdfResult={pdfResult}
          documentTitle={`Certificado de Conclusão Oficial - ${student.name}`}
          onClose={() => setShowPdfModal(false)}
        />
      )}
    </div>
  );
};
