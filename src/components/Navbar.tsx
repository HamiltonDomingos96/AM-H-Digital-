import React, { useState } from 'react';
import { useApp, NavTab } from '../context/AppContext';
import {
  GraduationCap,
  Bell,
  Clock,
  Sparkles,
  BookOpen,
  Award,
  Calendar,
  FileText,
  User,
  RotateCcw,
  Unlock,
  LogIn,
  LogOut,
  ShieldCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    student,
    luandaTime,
    resetProgress,
    unlockAllForDemo,
    isAuthenticated,
    currentUser,
    openAuthModal,
    logout
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navItems: { id: NavTab; label: string; icon: any }[] = [
    { id: 'dashboard', label: 'Início', icon: GraduationCap },
    { id: 'formacao', label: 'Formação', icon: BookOpen },
    { id: 'materiais', label: 'Manuais PDF', icon: FileText },
    { id: 'avaliacoes', label: 'Avaliações', icon: Award },
    { id: 'tutor', label: 'Tutor IA', icon: Sparkles },
    { id: 'calendario', label: 'Calendário', icon: Calendar }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="flex items-center gap-3 text-left group focus:outline-hidden"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#102B50] to-[#1677E8] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#1677E8]">
                  Programa Executivo
                </span>
                <span className="block text-base sm:text-lg font-extrabold text-[#102B50] tracking-tight">
                  Academia de Marketing H-Digital
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1677E8] text-white shadow-sm shadow-blue-500/30'
                      : 'text-slate-600 hover:text-[#102B50] hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Luanda Clock Indicator */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100/80 text-xs text-[#102B50]">
              <Clock className="w-3.5 h-3.5 text-[#1677E8]" />
              <div className="leading-tight">
                <span className="font-bold">{luandaTime || 'Luanda'}</span>
                <span className="text-[10px] text-slate-500 block">WAT (GMT+1)</span>
              </div>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 flex items-center justify-center transition-colors relative cursor-pointer"
                aria-label="Notificações"
              >
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#1677E8] ring-2 ring-white"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-88 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in zoom-in-95">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-bold text-sm text-[#102B50]">Notificações Académicas</h3>
                    <span className="text-[11px] font-medium text-[#1677E8] bg-blue-50 px-2 py-0.5 rounded-full">
                      Nova
                    </span>
                  </div>
                  <div className="space-y-3 pt-3">
                    <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100/60 text-xs">
                      <p className="font-bold text-[#102B50]">Boas-vindas à Academia H-Digital</p>
                      <p className="text-slate-600 mt-0.5">
                        A primeira aula do Módulo 1 está pronta: "O papel do gestor de Marketing Digital".
                      </p>
                      <span className="text-[10px] text-slate-400 mt-1 block">Início dos estudos</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Login / Auth Button or User Avatar */}
            {isAuthenticated && currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2.5 p-1 sm:px-2 sm:py-1 rounded-xl hover:bg-slate-100/80 transition-colors focus:outline-hidden cursor-pointer"
                >
                  <img
                    src={student.avatarUrl}
                    alt={student.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover ring-2 ring-[#1677E8]/20"
                  />
                  <div className="hidden sm:block text-left">
                    <span className="block text-xs font-bold text-[#102B50] leading-tight">
                      {currentUser.name.split(' ')[0]}
                    </span>
                    <span className="block text-[10px] text-[#1677E8] font-semibold leading-tight">
                      {student.completedModulesCount > 0 ? `${student.completedModulesCount}/6 Módulos` : 'Novo Aluno'}
                    </span>
                  </div>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-68 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50">
                    <div className="p-2 border-b border-slate-100 mb-2">
                      <p className="font-bold text-sm text-[#102B50]">{currentUser.name}</p>
                      <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
                      <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Sessão Activa • Aluno H-Digital
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      <button
                        onClick={() => {
                          setActiveTab('perfil');
                          setShowProfileMenu(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 font-medium cursor-pointer"
                      >
                        <User className="w-4 h-4 text-slate-500" />
                        <span>Ver Perfil Completo</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveTab('progresso');
                          setShowProfileMenu(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 font-medium cursor-pointer"
                      >
                        <Award className="w-4 h-4 text-slate-500" />
                        <span>Painel de Progresso</span>
                      </button>

                      <button
                        onClick={() => {
                          openAuthModal();
                          setShowProfileMenu(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 font-medium cursor-pointer"
                      >
                        <LogIn className="w-4 h-4 text-[#1677E8]" />
                        <span>Gerir Conta / Login</span>
                      </button>

                      <div className="border-t border-slate-100 pt-2 mt-2">
                        <p className="text-[10px] font-bold text-slate-400 px-3 uppercase tracking-wider mb-1">
                          Ambiente de Testes
                        </p>
                        <button
                          onClick={() => {
                            unlockAllForDemo();
                            setShowProfileMenu(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-emerald-700 hover:bg-emerald-50 text-[11px] font-semibold cursor-pointer"
                        >
                          <Unlock className="w-3.5 h-3.5" />
                          <span>Desbloquear Tudo (Demo)</span>
                        </button>
                        <button
                          onClick={() => {
                            resetProgress();
                            setShowProfileMenu(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-100 text-[11px] cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Zerar Dados do Usuário</span>
                        </button>
                        <button
                          onClick={() => {
                            logout();
                            setShowProfileMenu(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 text-[11px] font-semibold mt-1 cursor-pointer"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Terminar Sessão</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Entrar / Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
