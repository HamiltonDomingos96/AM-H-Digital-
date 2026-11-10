import React from 'react';
import { useApp, NavTab } from '../context/AppContext';
import { Home, BookOpen, Library, TrendingUp, User } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const items: { id: NavTab; label: string; icon: any }[] = [
    { id: 'dashboard', label: 'Início', icon: Home },
    { id: 'formacao', label: 'Formação', icon: BookOpen },
    { id: 'materiais', label: 'Biblioteca', icon: Library },
    { id: 'progresso', label: 'Progresso', icon: TrendingUp },
    { id: 'perfil', label: 'Perfil', icon: User }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-2 py-1 shadow-lg shadow-slate-900/10">
      <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            activeTab === item.id ||
            (item.id === 'materiais' && activeTab === 'glossario') ||
            (item.id === 'progresso' && activeTab === 'avaliacoes');

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                isActive
                  ? 'text-[#1677E8] font-bold'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-transform ${
                  isActive ? 'bg-blue-50 scale-105' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#1677E8]' : 'text-slate-500'}`} />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
