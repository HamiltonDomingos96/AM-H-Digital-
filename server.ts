import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Setup Gemini AI client if API key is present
const geminiApiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (geminiApiKey) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: geminiApiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Erro ao inicializar GoogleGenAI:', err);
  }
}

// System prompt for Tutor IA
const TUTOR_SYSTEM_INSTRUCTION = `És o Tutor Inteligente da "Academia de Marketing H-Digital", uma instituição de formação profissional de excelência focada em Angola e no espaço lusófono.
O teu público-alvo são gestores de marketing, empreendedores e profissionais que pretendem atingir cargos de Direcção e Estratégia de Marketing.

Directrizes Pedagógicas Fundamentais:
1. Idioma: Português formal e moderno, adaptado ao contexto de negócios em Angola (utiliza referências a Kwanzas - AOA, províncias como Luanda, Benguela, Huambo, Huíla, hábitos de consumo locais, prevalência de WhatsApp, redes sociais, Multicaixa Express, operadoras de telecomunicações Unitel/Africell).
2. Metodologia: Não dês apenas respostas mastigadas. Provoca o raciocínio crítico, pede justificações estratégicas e apresenta contra-argumentos.
3. Cálculos e Métricas: Ao explicar fórmulas (CAC, CPL, ROAS, LTV, Churn, CTR, CPM, ROI), divide sempre a fórmula passo a passo: significado de cada sigla, variáveis necessárias, exemplo numérico em AOA e interpretação prática para a tomada de decisão.
4. Simulações: Se o aluno pedir para simular uma apresentação de resultados ao CEO ou negociação com um cliente reticente, assume o papel com autoridade e exige dados concretos.
5. Correcção de Exercícios: Avalia segundo a escala pedagógica angolana (0 a 20 valores), destacando Pontos Fortes, Áreas de Melhoria e Recomendação de Leitura.`;

// Local fallback tutor responses when AI key isn't provided or network is offline
function getFallbackTutorResponse(message: string, mode?: string, moduleContext?: string): string {
  const msgLower = message.toLowerCase();
  
  if (msgLower.includes('cac') || msgLower.includes('custo de aquisi')) {
    return `### Análise do CAC (Custo de Aquisição de Clientes)

**Fórmula:**
$$\\text{CAC} = \\frac{\\text{Total de Custos de Marketing e Vendas num período}}{\\text{Número de Novos Clientes Conquistados}}$$

**Exemplo Prático no Mercado de Luanda:**
- Investimento em Meta Ads: 350.000 AOA
- Remuneração da equipa de vendas/atendimento: 250.000 AOA
- Ferramentas de automação e CRM: 50.000 AOA
- **Custo Total = 650.000 AOA**
- Novos clientes conquistados no mês: 26 clientes
- **CAC = 650.000 ÷ 26 = 25.000 AOA por cliente.**

**Interpretação Estratégica:**
Para saberes se 25.000 AOA é saudável, tens de comparar com o **LTV (Lifetime Value)**. A regra de ouro é:
$$\\text{LTV} \\ge 3 \\times \\text{CAC}$$
Se o teu cliente gasta em média 100.000 AOA ao longo do relacionamento comercial, o teu rácio é 4:1 (excelente!). Se gasta apenas 20.000 AOA, estás a perder dinheiro a cada nova venda!`;
  }

  if (msgLower.includes('roas') || msgLower.includes('retorno')) {
    return `### Cálculo e Otimização do ROAS (Return On Ad Spend)

**Fórmula:**
$$\\text{ROAS} = \\frac{\\text{Receita Gerada pelas Campanhas}}{\\text{Custo Directo do Investimento em Anúncios}}$$

**Cenário Hipotético de E-commerce / Vendas por WhatsApp em Angola:**
- Investimento em anúncios (Meta & Google): 500.000 AOA
- Faturação direta rastreada: 2.500.000 AOA
- **ROAS = 2.500.000 ÷ 500.000 = 5,0x (ou 500%)**

A cada 1 Kwanza investido em tráfego pago, o negócio gerou 5 Kwanzas em faturação bruta.
*Nota do Tutor:* Lembra-te de deduzir o CMV (Custo das Mercadorias Vendidas) e custos operacionais para apurares a margem líquida real!`;
  }

  if (msgLower.includes('swot') || msgLower.includes('fofa')) {
    return `### Estruturação de Análise SWOT para o Mercado Angolano

A Matriz SWOT (Forças, Fraquezas, Oportunidades, Ameaças) deve reflectir tanto factores internos como o ecossistema externo:

1. **Forças (Internas):** Reputação local da marca, equipa de atendimento ágil por WhatsApp, parcerias com fornecedores de confiança.
2. **Fraquezas (Internas):** Dependência de pagamentos manuais (comprovativos bancários por validar), website lento em redes 3G/4G, ausência de catálogo digital atualizado.
3. **Oportunidades (Externas):** Crescimento acelerado do uso do Multicaixa Express e carteiras digitais, novos hábitos de compra online em Luanda e capitais provinciais, expansão de publicidade segmentada no TikTok e Instagram.
4. **Ameaças (Externas):** Flutuação cambial no pagamento de ferramentas e anúncios internacionais (Meta/Google), instabilidade pontual de redes de dados móveis, entrada de novos concorrentes com preços agressivos.`;
  }

  return `### Resposta do Tutor de Marketing Digital

Obrigado pela tua questão sobre **${moduleContext || 'Marketing Estratégico'}**.

Para desenvolveres esta competência com rigor profissional:
1. **Fundamentação:** Em marketing digital moderno, nenhuma decisão deve ser tomada com base em "achismos". Todas as acções devem ter uma meta clara (Objectivo SMART) e um indicador associado (KPI).
2. **Contexto de Execução:** Em Angola, os canais de tração com maior taxa de conversão direta actualmente continuam a ser a combinação de **Meta Ads (Facebook/Instagram) integrados com funis de fecho no WhatsApp**, complementados por SEO local no Google Search e campanhas de notoriedade.
3. **Próximo Passo:** Recomendo que consultes o **Módulo 2 (Planeamento e Gestão)** e experimentes preencher a matriz de funil de vendas na aba de Exercícios.

Desejas que elabore um exemplo específico para o teu segmento de negócio (ex: restauração, retalho, serviços ou formação)?`;
}

// API endpoint for Tutor IA
app.post('/api/tutor/chat', async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, history = [], moduleContext, mode } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Mensagem inválida ou ausente.' });
      return;
    }

    if (!aiClient) {
      // Graceful fallback when GEMINI_API_KEY is not defined yet
      const fallbackReply = getFallbackTutorResponse(message, mode, moduleContext);
      res.json({
        reply: fallbackReply,
        source: 'local_mentor',
      });
      return;
    }

    try {
      // Build conversation contents
      let promptText = `Contexto actual da formação: ${moduleContext || 'Formação Geral'}\n`;
      if (mode) {
        promptText += `Modo de interacção: ${mode}\n`;
      }
      promptText += `Pergunta/Dúvida do estudante: ${message}`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: promptText,
        config: {
          systemInstruction: TUTOR_SYSTEM_INSTRUCTION,
        },
      });

      const replyText = response.text || getFallbackTutorResponse(message, mode, moduleContext);
      res.json({
        reply: replyText,
        source: 'gemini-3.8-flash',
      });
    } catch (aiError) {
      console.warn('Erro na chamada Gemini API, a utilizar tutor local estruturado:', aiError);
      const fallbackReply = getFallbackTutorResponse(message, mode, moduleContext);
      res.json({
        reply: fallbackReply,
        source: 'local_mentor_fallback',
      });
    }
  } catch (err: any) {
    console.error('Erro geral no endpoint /api/tutor/chat:', err);
    res.status(500).json({ error: 'Ocorreu um erro no servidor ao processar a resposta do Tutor.' });
  }
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    institution: 'Academia de Marketing H-Digital',
    version: '1.0.0',
    geminiConfigured: !!aiClient,
  });
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Academia de Marketing Digital dev/server a correr na porta ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Falha ao iniciar o servidor:', err);
  process.exit(1);
});
