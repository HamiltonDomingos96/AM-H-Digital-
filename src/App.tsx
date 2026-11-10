import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Dashboard } from './components/Dashboard';
import { FormationView } from './components/FormationView';
import { ManualsView } from './components/ManualsView';
import { ExercisesView } from './components/ExercisesView';
import { AssessmentsView } from './components/AssessmentsView';
import { ProgressView } from './components/ProgressView';
import { CalendarView } from './components/CalendarView';
import { GlossaryView } from './components/GlossaryView';
import { TutorView } from './components/TutorView';
import { ProfileView } from './components/ProfileView';
import { CertificateView } from './components/CertificateView';
import { AuthModal } from './components/AuthModal';
import { GraduationCap, ShieldCheck, Heart } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'formacao':
        return <FormationView />;
      case 'materiais':
        return <ManualsView />;
      case 'exercicios':
        return <ExercisesView />;
      case 'avaliacoes':
        return <AssessmentsView />;
      case 'progresso':
        return <ProgressView />;
      case 'calendario':
        return <CalendarView />;
      case 'glossario':
        return <GlossaryView />;
      case 'tutor':
        return <TutorView />;
      case 'perfil':
        return <ProfileView />;
      case 'certificado':
        return <CertificateView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F6FC] text-[#102B50] flex flex-col font-sans pb-16 lg:pb-0">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200/80 bg-white py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1677E8] text-white flex items-center justify-center font-bold">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <p className="font-extrabold text-[#102B50]">
                Academia de Marketing H-Digital
              </p>
              <p className="text-[11px] text-slate-400">
                Formação Profissional Avançada • Luanda, Angola
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-semibold text-slate-500">
            <button onClick={() => setActiveTab('materiais')} className="hover:text-[#1677E8] cursor-pointer">
              Manuais de Apoio
            </button>
            <button onClick={() => setActiveTab('glossario')} className="hover:text-[#1677E8] cursor-pointer">
              Glossário Profissional
            </button>
            <button onClick={() => setActiveTab('tutor')} className="hover:text-[#1677E8] cursor-pointer">
              Tutor IA
            </button>
            <button onClick={() => setActiveTab('certificado')} className="hover:text-[#1677E8] cursor-pointer">
              Certificação
            </button>
          </div>

          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Academia de Marketing H-Digital. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Fixed Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Authentication & Login Modal */}
      <AuthModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
