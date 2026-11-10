import { GlossaryItem } from '../types';

export const GLOSSARY_TERMS: GlossaryItem[] = [
  {
    id: 'kpi',
    term: 'KPI',
    fullName: 'Key Performance Indicator',
    translation: 'Indicador-Chave de Desempenho',
    category: 'Metricas',
    simpleExplanation: 'É uma métrica quantitativa prioritária escolhida para avaliar se um objectivo estratégico de marketing está a ser alcançado.',
    professionalApplication: 'Permite à gestão executiva e à equipa de marketing acompanhar o progresso em tempo real e tomar decisões corretivas antes do fim do mês.',
    practicalExample: 'Numa clínica médica em Luanda, o KPI principal é o "Número de Consultas Privadas Agendadas por Semana via WhatsApp" (meta: 45 agendamentos).'
  },
  {
    id: 'roi',
    term: 'ROI',
    fullName: 'Return on Investment',
    translation: 'Retorno sobre o Investimento',
    category: 'Metricas',
    simpleExplanation: 'Mede a rentabilidade financeira global de um investimento considerando todos os custos incorridos.',
    professionalApplication: 'Calcula-se como: [(Lucro Líquido - Custo do Investimento) ÷ Custo do Investimento] × 100. Demonstra se a operação de marketing dá lucro real.',
    practicalExample: 'Se investiu 1.000.000 AOA numa campanha e obteve 3.500.000 AOA de lucro bruto com custos de 1.500.000 AOA, o ROI mostra a viabilidade do canal.'
  },
  {
    id: 'roas',
    term: 'ROAS',
    fullName: 'Return on Ad Spend',
    translation: 'Retorno sobre o Gasto com Anúncios',
    category: 'Metricas',
    simpleExplanation: 'Rácio directo entre a faturação bruta gerada pelas campanhas de tráfego pago e o valor investido directamente em mídia.',
    professionalApplication: 'Fórmula: Faturação Gerada ÷ Gasto em Anúncios. É utilizado para calibrar orçamentos diários no Meta Ads e Google Ads.',
    practicalExample: 'Gastou 300.000 AOA em anúncios no Facebook e gerou 1.500.000 AOA em vendas rastreadas. O ROAS é de 5,0x (ou 500%).'
  },
  {
    id: 'cac',
    term: 'CAC',
    fullName: 'Customer Acquisition Cost',
    translation: 'Custo de Aquisição de Clientes',
    category: 'Metricas',
    simpleExplanation: 'O valor médio gasto em marketing e vendas para conquistar cada novo cliente pagante.',
    professionalApplication: 'Fórmula: (Custos Totais de Marketing + Custos de Vendas) ÷ Novos Clientes. Essencial para comparar com o LTV.',
    practicalExample: 'Uma escola de condução em Luanda gastou 400.000 AOA num mês e matriculou 20 novos alunos. O CAC foi de 20.000 AOA por aluno.'
  },
  {
    id: 'cpl',
    term: 'CPL',
    fullName: 'Cost per Lead',
    translation: 'Custo por Lead (Contacto Interessado)',
    category: 'Metricas',
    simpleExplanation: 'Quanto custa, em média, fazer uma pessoa fornecer o seu contacto (telefone, email, mensagem de WhatsApp).',
    professionalApplication: 'Fórmula: Investimento em Anúncios ÷ Total de Contactos Coletados. Usado para testar criativos e páginas de captura.',
    practicalExample: 'Com 100.000 AOA investidos, uma imobiliária obteve 50 números de WhatsApp qualificados para visitar apartamentos no Kilamba (CPL = 2.000 AOA).'
  },
  {
    id: 'seo',
    term: 'SEO',
    fullName: 'Search Engine Optimization',
    translation: 'Optimização para Motores de Busca',
    category: 'SEO',
    simpleExplanation: 'Conjunto de técnicas para posicionar páginas de um website nos primeiros lugares orgânicos do Google sem pagar por clique.',
    professionalApplication: 'Envolve optimização técnica do site, produção de conteúdo relevante com palavras-chave e conquista de links externos de autoridade.',
    practicalExample: 'Um escritório de advogados em Luanda surge na 1ª posição do Google quando alguém pesquisa "advogado laboral Luanda".'
  },
  {
    id: 'sem',
    term: 'SEM',
    fullName: 'Search Engine Marketing',
    translation: 'Marketing nos Motores de Busca',
    category: 'Trafego',
    simpleExplanation: 'Estratégia ampla que engloba tanto o tráfego pago (Google Ads) quanto o tráfego orgânico (SEO) nos motores de pesquisa.',
    professionalApplication: 'Equilibra o ganho imediato de visitas através de anúncios patrocinados com a construção de autoridade orgânica a longo prazo.',
    practicalExample: 'Comprar a palavra-chave patrocinada no Google enquanto desenvolve artigos de blog para ranqueamento orgânico futuro.'
  },
  {
    id: 'ctr',
    term: 'CTR',
    fullName: 'Click-Through Rate',
    translation: 'Taxa de Cliques',
    category: 'Metricas',
    simpleExplanation: 'A percentagem de pessoas que clicaram no seu anúncio ou link após o terem visualizado no ecrã.',
    professionalApplication: 'Fórmula: (Cliques ÷ Impressões) × 100. Mede a atratividade e o poder de persuasão do criativo e do título.',
    practicalExample: 'Um anúncio foi exibido 10.000 vezes no feed e recebeu 350 cliques. O CTR foi de 3,5% (excelente desempenho para redes sociais).'
  },
  {
    id: 'cpc',
    term: 'CPC',
    fullName: 'Cost per Click',
    translation: 'Custo por Clique',
    category: 'Metricas',
    simpleExplanation: 'O valor cobrado pelas plataformas de anúncios cada vez que um utilizador clica efectivamente no seu link ou anúncio.',
    professionalApplication: 'Fórmula: Custo Total ÷ Número de Cliques. Permite controlar o leilão e a eficiência da segmentação de público.',
    practicalExample: 'Numa campanha de Google Ads em Angola para venda de peças de automóveis, o CPC médio situou-se em 45 AOA por clique.'
  },
  {
    id: 'cpm',
    term: 'CPM',
    fullName: 'Cost per Mille',
    translation: 'Custo por Mil Impressões',
    category: 'Metricas',
    simpleExplanation: 'Quanto custa exibir o seu anúncio mil vezes no feed ou stories dos utilizadores.',
    professionalApplication: 'Fórmula: (Investimento Total ÷ Impressões) × 1.000. Mede o nível de concorrência e o preço de mercado da atenção de determinado público.',
    practicalExample: 'Para atingir 50.000 impressões de executivos em Luanda a um CPM de 1.200 AOA, o investimento necessário é de 60.000 AOA.'
  },
  {
    id: 'cta',
    term: 'CTA',
    fullName: 'Call to Action',
    translation: 'Chamada para Acção',
    category: 'Design',
    simpleExplanation: 'Instrução textual ou botão claro que diz ao visitante o que ele deve fazer a seguir sem hesitação.',
    professionalApplication: 'Colocada estrategicamente em anúncios, landing pages e mensagens. Deve ser imperativa e focar no benefício.',
    practicalExample: 'Botões como "Descarregar Manual em PDF Grátis", "Pedir Orçamento no WhatsApp Agora" ou "Reservar Mesa".'
  },
  {
    id: 'lead',
    term: 'Lead',
    fullName: 'Sales Lead / Prospect',
    translation: 'Potencial Cliente / Contacto Qualificado',
    category: 'Estrategia',
    simpleExplanation: 'Uma pessoa que demonstrou interesse activo pelo produto ou serviço e forneceu os seus dados de contacto para atendimento.',
    professionalApplication: 'Activos fundamentais do funil comercial que serão nutridos pela equipa de vendas até à concretização da transação.',
    practicalExample: 'Um empresário de Benguela que preencheu o formulário de cotação para instalação de painéis solares.'
  },
  {
    id: 'conversao',
    term: 'Conversão',
    fullName: 'Conversion',
    translation: 'Conversão Comercial ou Objectivo Concluído',
    category: 'Estrategia',
    simpleExplanation: 'O momento em que o visitante realiza a acção principal desejada pela empresa (compra, preenchimento, agendamento).',
    professionalApplication: 'Acompanhada através da Taxa de Conversão = (Ações Concluídas ÷ Visitantes Totais) × 100 para aferir a eficácia de páginas e canais.',
    practicalExample: 'De 1.000 visitantes na página de venda de sapatos, 32 efetuaram o pagamento por Multicaixa Express (Taxa de conversão = 3,2%).'
  },
  {
    id: 'remarketing',
    term: 'Remarketing',
    fullName: 'Remarketing / Retargeting',
    translation: 'Reimpacto de Públicos Anteriores',
    category: 'Trafego',
    simpleExplanation: 'Exibir anúncios direccionados especificamente para quem já visitou o seu site, conversou no WhatsApp ou interagiu com o seu perfil.',
    professionalApplication: 'Aumenta exponencialmente as vendas ao lembrar o comprador indeciso, quebrar as suas objecções e oferecer garantias.',
    practicalExample: 'Exibir no Instagram o vídeo de um cliente satisfeito para todos os utilizadores que colocaram um produto no carrinho nos últimos 7 dias.'
  },
  {
    id: 'funil',
    term: 'Funil de Vendas',
    fullName: 'Sales Funnel / Pipeline',
    translation: 'Funil de Vendas e Conversão',
    category: 'Estrategia',
    simpleExplanation: 'Modelo visual que representa as etapas que o cliente percorre desde o primeiro contacto (desconhecido) até à compra final.',
    professionalApplication: 'Divide-se em Topo (Atração/ToFu), Meio (Consideração/MoFu) e Fundo (Decisão e Fecho/BoFu).',
    practicalExample: '10.000 viram o post -> 500 baixaram o guia -> 80 falaram com o consultor -> 12 assinaram contrato de consultoria anual.'
  },
  {
    id: 'persona',
    term: 'Persona',
    fullName: 'Buyer Persona',
    translation: 'Perfil Semificcional do Cliente Ideal',
    category: 'Estrategia',
    simpleExplanation: 'A representação humanizada do seu cliente ideal, com nome, hábitos, dores, desejos, medos e critérios de compra.',
    professionalApplication: 'Orienta a linguagem do copywriting, os canais onde anunciar e os formatos de conteúdo com maior empatia.',
    practicalExample: '"Dr. Mateus, 42 anos, gestor em Luanda Sul, preocupa-se com a pontualidade na entrega de mercadorias e prefere ser contactado por WhatsApp".'
  },
  {
    id: 'engagement',
    term: 'Engagement',
    fullName: 'Engagement Rate',
    translation: 'Taxa de Engajamento / Envolvimento',
    category: 'Metricas',
    simpleExplanation: 'O nível de interação activa do público com o seu conteúdo (partilhas, comentários, salvamentos e cliques).',
    professionalApplication: 'Indica a relevância cultural e o valor percebido da mensagem junto da comunidade antes da venda directa.',
    practicalExample: 'Um vídeo com 5.000 visualizações e 400 comentários e partilhas tem uma taxa de engajamento alta (8%), sinalizando viralidade orgânica.'
  },
  {
    id: 'branding',
    term: 'Branding',
    fullName: 'Brand Management',
    translation: 'Gestão Estratégica da Marca',
    category: 'Estrategia',
    simpleExplanation: 'A construção do significado, valores, reputação e sensações que a marca desperta na mente do consumidor.',
    professionalApplication: 'Permite cobrar preços superiores e criar fidelidade inabalável contra concorrentes que disputam apenas por preço baixo.',
    practicalExample: 'Construir a reputação da Academia de Marketing Digital como a referência máxima em formação corporativa de Angola.'
  },
  {
    id: 'ltv',
    term: 'LTV',
    fullName: 'Lifetime Value',
    translation: 'Valor Vitalício do Cliente',
    category: 'Metricas',
    simpleExplanation: 'O lucro financeiro total que um cliente gera para a empresa durante todo o tempo em que mantém a relação comercial.',
    professionalApplication: 'Fórmula: Ticket Médio × Frequência de Compras por Ano × Tempo de Retenção em Anos. Permite saber o limite máximo de CAC rentável.',
    practicalExample: 'Um cliente gasta 50.000 AOA a cada 3 meses numa barbearia executiva durante 3 anos. O seu LTV é de 600.000 AOA.'
  },
  {
    id: 'pixel',
    term: 'Pixel de Rastreamento',
    fullName: 'Meta Pixel / Conversion API',
    translation: 'Código de Rastreamento de Conversões',
    category: 'Trafego',
    simpleExplanation: 'Pedaço de código instalado no website que comunica com a Meta informando quando alguém visualizou, clicou ou comprou.',
    professionalApplication: 'Alimenta o algoritmo de inteligência artificial das campanhas para encontrar utilizadores cada vez mais parecidos com quem já compra.',
    practicalExample: 'O Pixel da Meta avisa a conta de anúncios sempre que um cliente angolano clica no botão "Pagar com Multicaixa".'
  }
];
