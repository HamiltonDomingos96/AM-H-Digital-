import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Send,
  Loader2,
  HelpCircle,
  Calculator,
  Briefcase,
  BookOpen,
  RotateCcw,
  Bot,
  User,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  timestamp: string;
  source?: string;
}

export const TutorView: React.FC = () => {
  const { student, modules } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'tutor',
      text: `Olá, ${student.name.split(' ')[0]}! Sou o teu **Tutor de Inteligência Artificial** na Academia de Marketing H-Digital em Angola.

Estou aqui para te orientar no teu desenvolvimento profissional do nível intermédio ao estratégico:
• **Descomplicar cálculos:** CAC, LTV, ROAS, Breakeven com números reais em Kwanzas (AOA).
• **Simular situações de liderança:** Reuniões com o conselho de administração, negociação de orçamentos e defesas de estratégia.
• **Corrigir exercícios:** Avaliação pedagógica com notas e rubricas na escala oficial de 0 a 20 valores.
• **Esclarecer dúvidas:** Sobre qualquer uma das 67 aulas da nossa formação.

Como posso ajudar-te no estudo hoje?`,
      timestamp: 'Agora',
      source: 'gemini-3.8-flash'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMode, setSelectedMode] = useState<string>('geral');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const quickPrompts = [
    {
      label: 'Explicar CAC e LTV em Kwanzas',
      mode: 'calculo',
      text: 'Podes explicar passo a passo a fórmula do CAC e do LTV utilizando um exemplo prático de uma empresa no mercado de Luanda em Kwanzas (AOA)?'
    },
    {
      label: 'Simulação: Apresentar resultados ao CEO',
      mode: 'simulacao',
      text: 'Gostaria de simular uma reunião executiva. Age como um CEO exigente em Luanda e pede-me contas sobre a faturação gerada pelos 1.500.000 AOA que investimos em Meta Ads no último trimestre.'
    },
    {
      label: 'Funil de Vendas pelo WhatsApp',
      mode: 'estrategia',
      text: 'Qual a melhor estrutura de funil para captar clientes em Angola usando anúncios no Instagram integrados com fecho no WhatsApp Business e pagamentos via Multicaixa Express?'
    },
    {
      label: 'Como calcular o Breakeven ROAS',
      mode: 'calculo',
      text: 'Como calculo o Breakeven ROAS para uma loja de retalho de calçado com margem bruta de 30%? Mostra a fórmula e a interpretação de lucro.'
    }
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString('pt-AO', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          history: messages.slice(-6).map((m) => ({ role: m.sender, content: m.text })),
          moduleContext: 'Módulo 2: Planeamento e Gestão de Marketing',
          mode: selectedMode
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const data = await response.json();
      const replyText = data.reply || 'Peço desculpa, ocorreu um erro ao gerar a resposta pedagógica. Por favor tente novamente.';

      const tutorMessage: ChatMessage = {
        id: `tut-${Date.now()}`,
        sender: 'tutor',
        text: replyText,
        timestamp: new Date().toLocaleTimeString('pt-AO', { hour: '2-digit', minute: '2-digit' }),
        source: data.source
      };

      setMessages((prev) => [...prev, tutorMessage]);
    } catch (err) {
      console.error('Erro na chamada ao Tutor IA:', err);
      const fallbackMsg: ChatMessage = {
        id: `tut-${Date.now()}`,
        sender: 'tutor',
        text: `### Resposta Estratégica do Tutor
Para resolver esta questão com rigor de mercado:
1. **Defina primeiro o objectivo:** Em marketing contemporâneo, toda acção táctica deve estar ancorada numa métrica de negócio mensurável (Objectivo SMART).
2. **Contexto de Angola:** Em Luanda e províncias, o canal mais veloz de conversão directa é a integração de **Meta Ads com atendimento humanizado no WhatsApp Business**, facilitando comprovativos de pagamento via Multicaixa Express.
3. **Cálculo de Viabilidade:** Relembra sempre que o teu LTV (Lifetime Value) deve ser no mínimo 3 vezes superior ao CAC (Custo de Aquisição) para garantir saúde financeira sustentável.`,
        timestamp: new Date().toLocaleTimeString('pt-AO', { hour: '2-digit', minute: '2-digit' }),
        source: 'local_mentor'
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#1677E8] uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#1677E8]" />
            <span>Inteligência Artificial Pedagógica • Google GenAI</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#102B50] tracking-tight mt-1">
            Tutor Inteligente de Marketing
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Tire dúvidas conceituais, domine cálculos de CAC/ROAS, simule reuniões corporativas e receba orientações pedagógicas em português adaptado à realidade de Angola.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-blue-50 border border-blue-100 text-xs font-bold text-[#1677E8] shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#21C66B]" />
          <span>Servidor Seguro • Gemini 3.8 Flash</span>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col h-[70vh] min-h-[520px]">
        {/* Chat Sub-Header */}
        <div className="px-6 py-3.5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between gap-4 flex-wrap text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#21C66B] animate-pulse" />
            <span className="font-bold text-[#102B50]">Tutor IA Activo</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">Módulo 2: Planeamento e Gestão</span>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-1.5 font-bold text-[11px]">
            <button
              onClick={() => setSelectedMode('geral')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                selectedMode === 'geral'
                  ? 'bg-[#1677E8] text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200'
              }`}
            >
              Dúvidas
            </button>
            <button
              onClick={() => setSelectedMode('calculo')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                selectedMode === 'calculo'
                  ? 'bg-[#1677E8] text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200'
              }`}
            >
              Cálculos
            </button>
            <button
              onClick={() => setSelectedMode('simulacao')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                selectedMode === 'simulacao'
                  ? 'bg-[#1677E8] text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200'
              }`}
            >
              Simulação Executiva
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/30">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';

            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto justify-end' : 'mr-auto justify-start'}`}
              >
                {!isUser && (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#102B50] to-[#1677E8] text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                    <Bot className="w-5 h-5" />
                  </div>
                )}

                <div
                  className={`p-5 rounded-3xl space-y-2 relative group text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-[#1677E8] text-white rounded-tr-xs shadow-xs'
                      : 'bg-white text-slate-800 rounded-tl-xs border border-slate-200/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 text-[10px] pb-1 border-b border-black/5 opacity-75">
                    <span className="font-bold">{isUser ? student.name : 'Tutor AMD'}</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  <div className="whitespace-pre-line prose prose-slate max-w-none">
                    {msg.text}
                  </div>

                  {!isUser && (
                    <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400">
                      <span>{msg.source ? `Motor: ${msg.source}` : 'Orientador Pedagógico'}</span>
                      <button
                        onClick={() => handleCopyMessage(msg.id, msg.text)}
                        className="hover:text-[#1677E8] flex items-center gap-1 transition-colors"
                        title="Copiar resposta"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {isUser && (
                  <img
                    src={student.avatarUrl}
                    alt={student.name}
                    className="w-9 h-9 rounded-xl object-cover ring-2 ring-[#1677E8]/20 shrink-0 mt-1"
                  />
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 max-w-xl mr-auto">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#102B50] to-[#1677E8] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div className="p-4 rounded-3xl bg-white border border-slate-200 text-xs text-slate-500 flex items-center gap-2 shadow-xs">
                <Loader2 className="w-4 h-4 animate-spin text-[#1677E8]" />
                <span>O Tutor IA está a formular a resposta pedagógica...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts Carousel */}
        <div className="px-4 py-2 border-t border-slate-100 bg-white flex items-center gap-2 overflow-x-auto text-xs shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
            Perguntas Sugeridas:
          </span>
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedMode(qp.mode);
                handleSendMessage(qp.text);
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-[#1677E8] border border-slate-200/80 text-slate-600 text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              {qp.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200/80 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Faça uma pergunta sobre a formação, peça a explicação de um cálculo ou solicite uma simulação..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#102B50] font-medium focus:outline-hidden focus:border-[#1677E8] focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-3.5 rounded-2xl bg-[#1677E8] hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Enviar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
