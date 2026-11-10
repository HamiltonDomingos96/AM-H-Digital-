import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Clock,
  Edit2,
  Save,
  RotateCcw,
  Unlock,
  CheckCircle2,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const {
    student,
    updateStudent,
    modules,
    assessmentResults,
    resetProgress,
    unlockAllForDemo,
    setActiveTab,
    overallProgressPercent
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: student.name,
    email: student.email,
    title: student.title,
    location: student.location,
    weeklyGoalHours: student.weeklyGoalHours
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudent({
      name: formData.name,
      email: formData.email,
      title: formData.title,
      location: formData.location,
      weeklyGoalHours: Number(formData.weeklyGoalHours)
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-300">
      {/* Top Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <img
              src={student.avatarUrl}
              alt={student.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover ring-4 ring-[#1677E8]/20 shadow-md"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black text-[#102B50]">
                  {student.name}
                </h1>
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Aluno Inscrito
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#1677E8] font-bold">
                {student.title}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 pt-1 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {student.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Início: {student.startDate}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                <Edit2 className="w-4 h-4" />
                <span>Editar Perfil</span>
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2.5 rounded-xl text-slate-500 hover:bg-slate-100 text-xs font-bold"
              >
                Cancelar
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Edit Form */}
      {isEditing && (
        <form
          onSubmit={handleSave}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4 text-xs animate-in fade-in"
        >
          <h3 className="font-extrabold text-base text-[#102B50] pb-2 border-b border-slate-100">
            Editar Informações do Estudante
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Nome Completo:</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Email Institucional:</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Cargo / Título:</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Localização (Cidade, Província):</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Meta Semanal (Horas):</label>
              <input
                type="number"
                min={5}
                max={40}
                value={formData.weeklyGoalHours}
                onChange={(e) => setFormData({ ...formData, weeklyGoalHours: Number(e.target.value) })}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
              />
            </div>
          </div>

          <div className="pt-3 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white font-bold shadow-xs cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Alterações</span>
            </button>
          </div>
        </form>
      )}

      {/* Academic Track Record & Initial State Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-extrabold text-base text-[#102B50]">
                Histórico Académico e Estado Curricular
              </h3>
              <p className="text-xs text-slate-500">
                Resumo oficial de aproveitamento nas 6 unidades curriculares
              </p>
            </div>
            <span className="text-xs font-bold text-[#1677E8] bg-blue-50 px-2.5 py-1 rounded-full">
              Escala 0-20
            </span>
          </div>

          <div className="space-y-4">
            {modules.map((m) => {
              const res = assessmentResults[m.id];
              const isDone = m.status === 'concluido';
              const isInProgress = m.status === 'em_andamento';

              return (
                <div
                  key={m.id}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#102B50]">{m.title}</span>
                      {isDone && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                          Concluído & Aprovado
                        </span>
                      )}
                      {isInProgress && (
                        <span className="text-[10px] font-bold text-[#1677E8] bg-blue-100 px-2 py-0.5 rounded-md">
                          Em Andamento
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">
                      {m.lessons.filter((l) => l.isCompleted).length} de {m.lessons.length} aulas concluídas
                      {res?.score !== undefined ? ` • Avaliação: ${res.score}/20 Valores` : ''}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    {res ? (
                      <span className="text-sm font-extrabold text-[#102B50]">
                        {res.score} / 20
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 font-semibold">Pendente</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Demo Simulation Controls */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
          <div>
            <h3 className="font-extrabold text-base text-[#102B50]">
              Gestão de Conta & Progresso
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Zere todos os dados para recomeçar os estudos do zero ou simule a conclusão dos 6 módulos para testar a emissão do certificado executivo.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={unlockAllForDemo}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Unlock className="w-4 h-4" />
              <span>Desbloquear 100% dos Módulos (Demo)</span>
            </button>

            <button
              onClick={resetProgress}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Zerar Todos os Dados do Usuário</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-[#F3F6FC] border border-blue-100/60 text-xs text-slate-600 space-y-1">
            <span className="font-bold text-[#102B50] block">Estado Atual:</span>
            <p className="text-[11px] leading-relaxed">
              • Todos os dados do usuário foram reinicializados.<br />
              • Progresso curricular: {overallProgressPercent}%.<br />
              • Módulo 1 pronto para início na Aula 1.<br />
              • Sistema de login disponível para troca de contas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
