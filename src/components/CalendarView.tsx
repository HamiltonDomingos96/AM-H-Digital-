import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CalendarEvent } from '../types';
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  CheckCircle2,
  Circle,
  Award,
  BookOpen,
  Target,
  Sparkles,
  MapPin,
  Flame,
  X
} from 'lucide-react';

export const CalendarView: React.FC = () => {
  const {
    calendarEvents,
    addCalendarEvent,
    toggleCalendarEvent,
    luandaTime,
    luandaDate,
    student
  } = useApp();

  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string>('todos');

  // Form states for new event
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('2026-11-12');
  const [newTime, setNewTime] = useState('18:30');
  const [newType, setNewType] = useState<'aula' | 'exercicio' | 'avaliacao' | 'mentoria'>('aula');
  const [newDesc, setNewDesc] = useState('');

  const filteredEvents = calendarEvents.filter((evt) => {
    if (filterType === 'todos') return true;
    return evt.type === filterType;
  });

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addCalendarEvent({
      title: newTitle,
      date: newDate,
      time: newTime,
      type: newType,
      description: newDesc
    });

    setNewTitle('');
    setNewDesc('');
    setShowAddModal(false);
  };

  const getEventBadge = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'aula':
        return { label: 'Aula Programada', color: 'bg-blue-50 text-[#1677E8] border-blue-200' };
      case 'exercicio':
        return { label: 'Exercício Prático', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
      case 'avaliacao':
        return { label: 'Exame Oficial', color: 'bg-purple-50 text-purple-700 border-purple-200' };
      case 'mentoria':
      default:
        return { label: 'Mentoria Executiva', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
    }
  };

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-300">
      {/* Top Banner with Luanda Time Focus */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#1677E8] uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#1677E8]" />
            <span>Fuso Horário Oficial: Africa/Luanda (WAT / GMT+1)</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight mt-1">
            Calendário e Organização dos Estudos
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Programe as suas sessões lectivas, acompanhe prazos de avaliações e sincronize as suas metas semanais com o horário de Angola.
          </p>
        </div>

        {/* Live Luanda Clock Widget */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#102B50] to-[#1677E8] text-white flex items-center gap-4 shadow-md shadow-blue-900/10 shrink-0">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
            <Clock className="w-6 h-6 text-blue-200" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-blue-200 block font-bold">
              Hora Atual em Luanda:
            </span>
            <span className="text-2xl font-black tracking-tight">{luandaTime || '18:34:00'}</span>
            <span className="text-[11px] text-blue-100 block">{luandaDate}</span>
          </div>
        </div>
      </div>

      {/* Action Bar & Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200/80">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs font-bold">
          <button
            onClick={() => setFilterType('todos')}
            className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
              filterType === 'todos'
                ? 'bg-[#102B50] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilterType('aula')}
            className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
              filterType === 'aula'
                ? 'bg-[#1677E8] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Aulas
          </button>
          <button
            onClick={() => setFilterType('exercicio')}
            className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
              filterType === 'exercicio'
                ? 'bg-[#1677E8] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Exercícios
          </button>
          <button
            onClick={() => setFilterType('avaliacao')}
            className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
              filterType === 'avaliacao'
                ? 'bg-[#1677E8] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Avaliações
          </button>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Agendar Nova Sessão de Estudo</span>
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {filteredEvents.map((evt) => {
          const badge = getEventBadge(evt.type);

          return (
            <div
              key={evt.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                evt.completed
                  ? 'bg-slate-50/60 border-slate-200 text-slate-400'
                  : 'bg-white border-slate-200/80 shadow-2xs hover:border-[#1677E8]/40'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <button
                  onClick={() => toggleCalendarEvent(evt.id)}
                  className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                  title="Alternar conclusão"
                >
                  {evt.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </button>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                    <h3
                      className={`font-bold text-sm sm:text-base ${
                        evt.completed ? 'line-through text-slate-500' : 'text-[#102B50]'
                      }`}
                    >
                      {evt.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-400 pt-0.5">
                    <span className="flex items-center gap-1 font-semibold text-slate-600">
                      <CalendarIcon className="w-3.5 h-3.5 text-[#1677E8]" />
                      {evt.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {evt.time} (Luanda)
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto flex justify-end">
                <button
                  onClick={() => toggleCalendarEvent(evt.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    evt.completed
                      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                  }`}
                >
                  {evt.completed ? 'Reabrir' : 'Marcar Concluído'}
                </button>
              </div>
            </div>
          );
        })}

        {filteredEvents.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-6">
            <CalendarIcon className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-[#102B50]">Nenhum compromisso encontrado</p>
            <p className="text-xs text-slate-500 mt-1">
              Adicione uma nova sessão de estudo clicando no botão acima.
            </p>
          </div>
        )}
      </div>

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-base text-[#102B50]">
                Agendar Nova Sessão de Estudo
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Título da Actividade:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Leitura da Aula de Meta Ads"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Data:</label>
                  <input
                    type="date"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Hora (Luanda WAT):</label>
                  <input
                    type="time"
                    required
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Tipo de Actividade:</label>
                <select
                  value={newType}
                  onChange={(e: any) => setNewType(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
                >
                  <option value="aula">Aula Programada</option>
                  <option value="exercicio">Exercício Prático</option>
                  <option value="avaliacao">Avaliação Oficial</option>
                  <option value="mentoria">Mentoria Executiva</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Notas / Objectivo da Sessão:
                </label>
                <textarea
                  rows={3}
                  placeholder="Detalhes ou metas específicas para esta sessão..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-[#102B50] focus:outline-hidden focus:border-[#1677E8]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#1677E8] hover:bg-blue-600 text-white font-bold shadow-xs cursor-pointer"
                >
                  Confirmar Agendamento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
