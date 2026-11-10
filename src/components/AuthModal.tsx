import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Lock,
  Mail,
  User,
  GraduationCap,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  LogIn,
  UserPlus,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, login, register, isAuthenticated, currentUser, logout } = useApp();
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsLoading(true);

    try {
      if (tab === 'login') {
        const res = await login(email, password);
        if (!res.success) {
          setErrorMsg(res.error || 'Credenciais inválidas.');
        } else {
          setSuccessMsg('Sessão iniciada com sucesso!');
          setTimeout(() => {
            closeAuthModal();
          }, 800);
        }
      } else {
        const res = await register(email, password, name);
        if (!res.success) {
          setErrorMsg(res.error || 'Erro ao criar conta.');
        } else {
          setSuccessMsg('Conta criada com sucesso! Sessão iniciada.');
          setTimeout(() => {
            closeAuthModal();
          }, 800);
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Ocorreu um erro no sistema de autenticação.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemoFill = (demoEmail: string, demoName: string) => {
    setEmail(demoEmail);
    setPassword('senha1234');
    setName(demoName);
    setErrorMsg(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-br from-[#102B50] to-[#1677E8] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5 text-blue-200" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200 block">
                Plataforma de Acesso
              </span>
              <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                Academia de Marketing H-Digital
              </h2>
            </div>
          </div>

          <button
            onClick={closeAuthModal}
            className="p-1.5 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* If already authenticated, show logged in status & logout */}
        {isAuthenticated && currentUser ? (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#21C66B] flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-1">
              <h3 className="font-extrabold text-lg text-[#102B50]">
                Sessão Activa
              </h3>
              <p className="text-xs text-slate-500">
                Está autenticado como:
              </p>
              <p className="text-sm font-bold text-[#1677E8]">
                {currentUser.name} ({currentUser.email})
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={closeAuthModal}
                className="w-full py-3 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold shadow-xs cursor-pointer"
              >
                Continuar para a Plataforma
              </button>
              <button
                onClick={() => {
                  logout();
                  setErrorMsg(null);
                  setSuccessMsg('Sessão terminada.');
                }}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Terminar Sessão / Mudar de Conta
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Tabs: Entrar vs Registar */}
            <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-100 text-xs font-bold">
              <button
                onClick={() => {
                  setTab('login');
                  setErrorMsg(null);
                }}
                className={`py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  tab === 'login'
                    ? 'bg-white text-[#102B50] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Entrar (Login)</span>
              </button>
              <button
                onClick={() => {
                  setTab('register');
                  setErrorMsg(null);
                }}
                className={`py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  tab === 'register'
                    ? 'bg-white text-[#102B50] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Criar Conta</span>
              </button>
            </div>

            {/* Error or Success Alerts */}
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {tab === 'register' && (
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Nome Completo:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Hamilton Domingos"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8] focus:bg-white"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Email Institucional ou Pessoal:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="exemplo@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Palavra-passe (Senha):
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8] focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-[#1677E8] hover:bg-blue-600 disabled:opacity-50 text-white font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {isLoading ? (
                  <span>A processar...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>{tab === 'login' ? 'Entrar na Academia' : 'Criar Conta e Começar'}</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Accounts */}
            <div className="pt-3 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Preenchimento Rápido (Contas de Teste):
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickDemoFill('hamiltondomingos703@gmail.com', 'Hamilton Domingos')}
                  className="flex-1 py-1.5 px-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1677E8] text-[11px] font-semibold transition-colors cursor-pointer text-left truncate"
                >
                  Hamilton Domingos
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemoFill('aluno.teste@hdigital.ao', 'Novo Aluno H-Digital')}
                  className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold transition-colors cursor-pointer text-left truncate"
                >
                  Novo Aluno H-Digital
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
