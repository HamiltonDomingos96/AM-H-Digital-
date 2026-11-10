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
  ShieldCheck,
  KeyRound,
  ArrowLeft,
  AlertTriangle,
  Loader2
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    login,
    register,
    resetPassword,
    isAuthenticated,
    isAuthLoading,
    isFirebaseReady,
    currentUser,
    logout
  } = useApp();

  const [tab, setTab] = useState<'login' | 'register' | 'forgot_password'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAuthModalOpen) return null;

  const resetFormState = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setPassword('');
    setConfirmPassword('');
  };

  const handleTabChange = (newTab: 'login' | 'register' | 'forgot_password') => {
    setTab(newTab);
    resetFormState();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!isFirebaseReady) {
      setErrorMsg(
        'O Firebase Authentication ainda não está configurado. Configure as variáveis VITE_FIREBASE_* na Vercel para activar o serviço de autenticação real.'
      );
      return;
    }

    if (tab === 'register') {
      if (password !== confirmPassword) {
        setErrorMsg('As palavras-passe introduzidas não coincidem.');
        return;
      }
      if (password.length < 6) {
        setErrorMsg('A palavra-passe deve conter pelo menos 6 caracteres.');
        return;
      }
    }

    setIsSubmitting(true);

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
      } else if (tab === 'register') {
        const res = await register(email, password, name);
        if (!res.success) {
          setErrorMsg(res.error || 'Erro ao criar conta.');
        } else {
          setSuccessMsg('Conta criada com sucesso! O seu perfil foi registado.');
          setTimeout(() => {
            closeAuthModal();
          }, 800);
        }
      } else if (tab === 'forgot_password') {
        const res = await resetPassword(email);
        if (!res.success) {
          setErrorMsg(res.error || 'Erro ao solicitar recuperação de palavra-passe.');
        } else {
          setSuccessMsg(res.message || 'Instruções enviadas para o seu e-mail.');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Ocorreu um erro no sistema de autenticação.');
    } finally {
      setIsSubmitting(false);
    }
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
                Portal de Acesso
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

        {/* If already authenticated, show logged-in status & logout */}
        {isAuthenticated && currentUser ? (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#21C66B] flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block">
                Sessão Activa
              </span>
              <h3 className="font-extrabold text-lg text-[#102B50] mt-1">
                {currentUser.name}
              </h3>
              <p className="text-xs text-slate-500">
                {currentUser.email}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Identificador Oficial: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">{currentUser.id}</code>
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
                onClick={async () => {
                  await logout();
                  setErrorMsg(null);
                  setSuccessMsg('Sessão terminada.');
                }}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Terminar Sessão
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-5">
            {/* Aviso quando Firebase ainda não possui credenciais */}
            {!isFirebaseReady && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <div className="space-y-1 text-[11px] leading-relaxed">
                  <p className="font-bold text-amber-900">Configuração Firebase Pendente</p>
                  <p className="text-amber-800">
                    Para activar a autenticação real de estudantes, adicione as variáveis de ambiente <code>VITE_FIREBASE_*</code> no painel da Vercel.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Tabs (Login / Register / Forgot Password) */}
            {tab !== 'forgot_password' ? (
              <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-100 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => handleTabChange('login')}
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
                  type="button"
                  onClick={() => handleTabChange('register')}
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
            ) : (
              <div className="flex items-center justify-between pb-1">
                <button
                  type="button"
                  onClick={() => handleTabChange('login')}
                  className="flex items-center gap-1 text-xs font-bold text-[#1677E8] hover:underline cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar para o Login</span>
                </button>
                <span className="text-xs font-bold text-slate-500">Recuperação</span>
              </div>
            )}

            {/* Alerts */}
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                <span className="leading-relaxed">{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                <span className="leading-relaxed">{successMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {tab === 'register' && (
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Nome Completo do Estudante:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Hamilton Domingos"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting || !isFirebaseReady}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8] focus:bg-white disabled:opacity-60"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  E-mail Institucional ou Pessoal:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="estudante@hdigital.ao"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting || !isFirebaseReady}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8] focus:bg-white disabled:opacity-60"
                  />
                </div>
              </div>

              {tab !== 'forgot_password' && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-slate-700 block">
                      Palavra-passe:
                    </label>
                    {tab === 'login' && (
                      <button
                        type="button"
                        onClick={() => handleTabChange('forgot_password')}
                        className="text-[11px] font-semibold text-[#1677E8] hover:underline cursor-pointer"
                      >
                        Esqueceu a palavra-passe?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Mínimo 6 caracteres"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isSubmitting || !isFirebaseReady}
                      className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8] focus:bg-white disabled:opacity-60"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {tab === 'register' && (
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Confirmar Palavra-passe:
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      placeholder="Repita a palavra-passe"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={isSubmitting || !isFirebaseReady}
                      className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8] focus:bg-white disabled:opacity-60"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isAuthLoading || !isFirebaseReady}
                className="w-full py-3 rounded-xl bg-[#1677E8] hover:bg-blue-600 disabled:opacity-50 text-white font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>A processar...</span>
                  </>
                ) : (
                  <>
                    {tab === 'login' && (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Entrar na Academia</span>
                      </>
                    )}
                    {tab === 'register' && (
                      <>
                        <UserPlus className="w-4 h-4" />
                        <span>Criar Conta Oficial</span>
                      </>
                    )}
                    {tab === 'forgot_password' && (
                      <>
                        <KeyRound className="w-4 h-4" />
                        <span>Enviar Link de Recuperação</span>
                      </>
                    )}
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

