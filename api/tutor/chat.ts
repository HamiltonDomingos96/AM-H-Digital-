import { GoogleGenAI } from '@google/genai';

function getAiClient(): GoogleGenAI | null {
  const geminiApiKey = process.env.GEMINI_API_KEY;
  if (!geminiApiKey) return null;
  try {
    return new GoogleGenAI({
      apiKey: geminiApiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Erro ao inicializar GoogleGenAI em serverless:', err);
    return null;
  }
}

const TUTOR_SYSTEM_INSTRUCTION = `És o Tutor Inteligente da "Academia de Marketing H-Digital", uma instituição de formação profissional de excelência focada em Angola e no espaço lusófono.
O teu público-alvo são gestores de marketing, empreendedores e profissionais que pretendem atingir cargos de Direcção e Estratégia de Marketing.

Directrizes Pedagógicas Fundamentais:
1. Idioma: Português formal e moderno, adaptado ao contexto de negócios em Angola (utiliza referências a Kwanzas - AOA, províncias como Luanda, Benguela, Huambo, Huíla, hábitos de consumo locais, prevalência de WhatsApp, redes sociais, Multicaixa Express, operadoras de telecomunicações Unitel/Africell).
2. Metodologia: Não dês apenas respostas mastigadas. Provoca o raciocínio crítico, pede justificações estratégicas e apresenta contra-argumentos.
3. Cálculos e Métricas: Ao explicar fórmulas (CAC, CPL, ROAS, LTV, Churn, CTR, CPM, ROI), divide sempre a fórmula passo a passo: significado de cada sigla, variáveis necessárias, exemplo numérico em AOA e interpretação prática para a tomada de decisão.
4. Simulações: Se o aluno pedir para simular uma apresentação de resultados ao CEO ou negociação com um cliente reticente, assume o papel com autoridade e exige dados concretos.
5. Correcção de Exercícios: Avalia segundo a escala pedagógica angolana (0 a 20 valores), destacando Pontos Fortes, Áreas de Melhoria e Recomendação de Leitura.`;

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

  return `### Resposta do Tutor de Marketing H-Digital

Obrigado pela tua questão sobre **${moduleContext || 'Marketing Estratégico'}**.

Para desenvolveres esta competência com rigor profissional:
1. **Fundamentação:** Em marketing digital moderno, nenhuma decisão deve ser tomada com base em "achismos". Todas as acções devem ter uma meta clara (Objectivo SMART) e um indicador associado (KPI).
2. **Contexto de Execução:** Em Angola, os canais de tração com maior taxa de conversão direta actualmente continuam a ser a combinação de **Meta Ads (Facebook/Instagram) integrados com funis de fecho no WhatsApp**, complementados por SEO local no Google Search e campanhas de notoriedade.
3. **Próximo Passo:** Recomendo que consultes o **Módulo 1 e 2** e experimentes preencher a matriz de funil de vendas na secção de Exercícios.

Desejas que elabore um exemplo específico para o teu segmento de negócio (ex: restauração, retalho, serviços ou formação)?`;
}

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método não permitido.' });
    return;
  }
  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    } else if (Buffer.isBuffer(body)) {
      try {
        body = JSON.parse(body.toString('utf-8'));
      } catch {
        body = {};
      }
    }
    const { message, moduleContext, mode } = body || {};

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Mensagem inválida ou ausente.' });
      return;
    }

    const aiClient = getAiClient();
    if (!aiClient) {
      const fallbackReply = getFallbackTutorResponse(message, mode, moduleContext);
      res.status(200).json({
        reply: fallbackReply,
        source: 'local_mentor',
      });
      return;
    }

    try {
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
      res.status(200).json({
        reply: replyText,
        source: 'gemini-3.8-flash',
      });
    } catch (aiError) {
      console.warn('Erro na chamada Gemini API em serverless:', aiError);
      const fallbackReply = getFallbackTutorResponse(message, mode, moduleContext);
      res.status(200).json({
        reply: fallbackReply,
        source: 'local_mentor_fallback',
      });
    }
  } catch (err: any) {
    console.error('Erro no handler Vercel serverless:', err);
    res.status(500).json({ error: 'Erro ao processar resposta do Tutor.' });
  }
}
