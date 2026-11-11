import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { testFirestoreConnection, type FirestoreTestResult } from '../services/firestoreService';
import {
  Database,
  Activity,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  LogIn,
  RotateCw,
  Terminal,
  ShieldCheck,
  Zap
} from 'lucide-react';

/**
 * COMPONENTE TEMPORÁRIO DE DIAGNÓSTICO — SUBETAPA 3.1
 * Finalidade: Executar e apresentar em tempo real o teste de comunicação bidireccional com o Cloud Firestore.
 * Como remover após o teste:
 * 1. Apagar o ficheiro src/components/FirestoreTestCard.tsx
 * 2. Remover a linha de importação e renderização em src/components/ProfileView.tsx
 */
export const FirestoreTestCard: React.FC = () => {
  const { isAuthenticated, currentUser, isFirebaseReady, openAuthModal } = useApp();
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<FirestoreTestResult | null>(null);

  const handleRunTest = async () => {
    setIsRunning(true);
    setResult(null);

    try {
      const res = await testFirestoreConnection();
      setResult(res);
    } catch (err: any) {
      setResult({
        success: false,
        message: err?.message || 'Falha inesperada ao executar teste.',
        errorCode: 'client/unexpected-exception'
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-md space-y-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-50 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#102B50] to-[#1677E8] text-white flex items-center justify-center shadow-xs">
            <Database className="w-5 h-5 text-blue-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#1677E8] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                Teste de Conectividade
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                Subetapa 3.1 (Temporário)
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#102B50] mt-0.5">
              Diagnóstico de Comunicação Real — Cloud Firestore
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
          <Activity className="w-4 h-4 text-[#1677E8]" />
          <span>Colecção: <code>_connection_test</code></span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
        Este teste executa um ciclo completo em tempo real contra o projecto Firebase: 
        <strong className="text-[#102B50]"> 1. Escrita (setDoc)</strong> de um documento temporário com ID exclusivo, 
        <strong className="text-[#102B50]"> 2. Leitura (getDoc)</strong> com validação de integridade e 
        <strong className="text-[#102B50]"> 3. Eliminação (deleteDoc)</strong> para manter a base limpa.
      </p>

      {/* Authentication Check */}
      {!isAuthenticated || !currentUser ? (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-2.5">
            <Lock className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
            <div>
              <p className="font-bold">Autenticação Obrigatória para o Teste</p>
              <p className="text-[11px] text-amber-800 mt-0.5">
                As regras de segurança do Firestore exigem que o estudante esteja autenticado (<code>isSignedIn()</code>) para aceder à colecção de teste.
              </p>
            </div>
          </div>

          <button
            onClick={openAuthModal}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer shrink-0"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Iniciar Sessão / Criar Conta</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Sessão Autenticada
              </span>
              <p className="font-bold text-[#102B50] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#21C66B]" />
                <span>{currentUser.name} ({currentUser.email})</span>
              </p>
              <p className="text-[11px] text-slate-500">
                UID: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-[10px]">{currentUser.id}</code>
              </p>
            </div>

            <button
              onClick={handleRunTest}
              disabled={isRunning || !isFirebaseReady}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1677E8] hover:bg-blue-600 disabled:opacity-50 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer shrink-0"
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>A Testar Escrita, Leitura e Limpeza...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Executar Teste Real de Comunicação</span>
                </>
              )}
            </button>
          </div>

          {/* Test Results Display */}
          {result && (
            <div
              className={`p-5 rounded-2xl border text-xs space-y-3 animate-in fade-in duration-300 ${
                result.success
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50/80 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-black/5">
                <div className="flex items-center gap-2 font-bold text-sm">
                  {result.success ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span className="text-emerald-800">{result.message}</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span className="text-rose-800">Falha na Comunicação com o Firestore</span>
                    </>
                  )}
                </div>

                {result.latencyMs !== undefined && (
                  <span className="px-2.5 py-1 rounded-full bg-white font-mono text-[11px] font-bold text-slate-700 shadow-2xs border border-slate-200">
                    Latência: {result.latencyMs} ms
                  </span>
                )}
              </div>

              {result.success ? (
                <div className="space-y-2 text-[11px]">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                      <span className="text-slate-400 block text-[10px] font-bold">1. ESCRITA</span>
                      <span className="font-bold text-emerald-700">✓ setDoc Concluído</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                      <span className="text-slate-400 block text-[10px] font-bold">2. LEITURA</span>
                      <span className="font-bold text-emerald-700">✓ getDoc Validado</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                      <span className="text-slate-400 block text-[10px] font-bold">3. LIMPEZA</span>
                      <span className="font-bold text-emerald-700">✓ deleteDoc Executado</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-[10px] pt-1">
                    Documento temporário criado na colecção <code>_connection_test</code> e removido com sucesso. Nenhuma alteração permanente nos dados dos estudantes.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 text-[11px]">
                  <div className="p-3 bg-white rounded-xl border border-rose-100 font-mono text-rose-700">
                    <p className="font-bold text-[11px]">Código: {result.errorCode}</p>
                    <p className="text-[10px] mt-0.5">{result.message}</p>
                  </div>
                  {result.possibleCause && (
                    <p>
                      <strong>Possível Causa:</strong> {result.possibleCause}
                    </p>
                  )}
                  {result.recommendedSolution && (
                    <p className="bg-white p-3 rounded-xl border border-rose-100 text-slate-700">
                      <strong>Solução Recomendada:</strong> {result.recommendedSolution}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
