import { CaseStudyItem } from '../types';

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-pizzaria',
    title: 'Pizzaria Baía Gourmet: Da Estagnação ao Recorde de Entregas por WhatsApp',
    sector: 'Restauração e Alimentação',
    location: 'Marginal de Luanda, Angola',
    scenario: 'Restaurante tradicional com salão amplo, enfrentando quebra de 40% no movimento de almoço devido a novas opções de refeição rápida nas redondezas.',
    challenge: 'Orçamento publicitário limitado a 250.000 AOA mensais e pouca visibilidade fora dos clientes habituais que passavam pela calçada.',
    strategy: '1. Criação do menu executivo de almoço em formato de catálogo digital no WhatsApp Business. 2. Campanhas de raio geográfico curto (3 km ao redor da Marginal) no Instagram e Facebook com foco exclusivo em executivos das torres de escritórios próximas. 3. Mensagem directa no WhatsApp com promoção de 10% na primeira encomenda paga por Multicaixa Express.',
    metrics: [
      { label: 'Investimento Mensal', value: '250.000 AOA' },
      { label: 'Novos Contactos WhatsApp', value: '412 leads' },
      { label: 'Custo por Pedido (CAC)', value: '1.200 AOA' },
      { label: 'Aumento na Faturação', value: '+74% em 60 dias' }
    ],
    keyTakeaway: 'Em negócios de alimentação em Luanda, a hiper-localização combinada com facilidade de pedido por WhatsApp e entrega pontual supera campanhas genéricas em toda a cidade.',
    hypotheticalDisclaimer: true
  },
  {
    id: 'case-boutique',
    title: 'Boutique Kilamba Moda: Vencendo a Desconfiança nas Compras Online',
    sector: 'Comércio e Vestuário Feminino',
    location: 'Centralidade do Kilamba, Luanda',
    scenario: 'Loja de roupas com catálogo no Instagram, com muitos comentários a perguntar "preço?", mas com taxa de conversão inferior a 1,5%.',
    challenge: 'Grande desconfiança das clientes em relação ao tecido, tamanho real e receio de não receber as peças encomendadas após transferência bancária.',
    strategy: '1. Substituição de fotos estáticas por vídeos de clientes reais a experimentar os vestidos com iluminação natural. 2. Publicação transparente de tabela de preços e tamanhos nas legendas. 3. Opção de pagamento no acto da entrega via TPA móvel para condomínios seleccionados de Luanda. 4. Campanha de remarketing de 5 dias mostrando depoimentos em vídeo de clientes satisfeitas.',
    metrics: [
      { label: 'Taxa de Conversão', value: 'Subiu de 1,4% para 5,8%' },
      { label: 'Tempo Médio de Atendimento', value: 'Caiu de 4h para 12 min' },
      { label: 'ROAS Médio de Anúncios', value: '6,4x' },
      { label: 'Vendas Mensais', value: '180 vestidos/mês' }
    ],
    keyTakeaway: 'A prova social autêntica em vídeo e a redução do risco no momento do pagamento são os maiores catalisadores de conversão de vestuário em Angola.',
    hypotheticalDisclaimer: true
  },
  {
    id: 'case-supermercado',
    title: 'Supermercado Fresco & Poupança: Fidelização e Cesta Básica Digital',
    sector: 'Supermercados e Retalho Alimentar',
    location: 'Viana e Morro Bento, Luanda',
    scenario: 'Supermercado de médio porte a competir com grandes redes hipermercados que praticavam descontos agressivos na televisão.',
    challenge: 'Margens estreitas em bens de primeira necessidade e concorrência feroz pelo bolso das famílias no final do mês.',
    strategy: '1. Lançamento do "Clube de Poupança Semanal" no WhatsApp com encarte digital antecipado às quintas-feiras. 2. Campanhas de Meta Ads direcionadas para mães e chefes de família no raio de 5 km com kits promocionais de cesta básica. 3. Sistema de reservas antecipadas com recolha rápida sem filas no balcão de atendimento.',
    metrics: [
      { label: 'Membros no Clube WhatsApp', value: '3.400 famílias' },
      { label: 'Taxa de Abertura de Encartes', value: '88%' },
      { label: 'Ticket Médio', value: '+35% de compras adicionais' },
      { label: 'Crescimento de Receita', value: '+28% global' }
    ],
    keyTakeaway: 'A proximidade e a conveniência de receber as melhores ofertas directas no WhatsApp garantem a preferência semanal do consumidor angolano.',
    hypotheticalDisclaimer: true
  },
  {
    id: 'case-agencia',
    title: 'Agência Criativa Maianga: De Prestadora Barata a Consultora Estratégica',
    sector: 'Serviços de Marketing e Publicidade',
    location: 'Maianga, Luanda',
    scenario: 'Pequena agência de marketing que cobrava 150.000 AOA por mês para fazer posts no Instagram, sofrendo com cancelamentos constantes de clientes insatisfeitos.',
    challenge: 'Clientes viam a agência como custo dispensável e não viam retorno palpável nas vendas da empresa.',
    strategy: '1. Transição radical de "gestão de redes sociais" para "Gestão de Aquisição e Vendas Digitais". 2. Implementação de relatórios focados em CAC, CPL e Faturação em Kwanzas. 3. Nova proposta comercial com diagnóstico prévio e precificação de 750.000 AOA mensais com metas de conversão acordadas.',
    metrics: [
      { label: 'Ticket Médio de Contrato', value: 'Subiu 5x (750.000 AOA)' },
      { label: 'Tempo de Retenção (LTV)', value: 'Aumentou de 3 para 16 meses' },
      { label: 'Taxa de Fecho de Propostas', value: '52% de aprovação' },
      { label: 'Novos Contratos Anuais', value: '8 grandes empresas' }
    ],
    keyTakeaway: 'Quando a agência assume o compromisso com a receita do cliente e fala a linguagem dos números, o preço deixa de ser o factor de decisão.',
    hypotheticalDisclaimer: true
  },
  {
    id: 'case-servicos',
    title: 'Clínica Talatona Saúde: Captação de Pacientes Particulares via Google Ads',
    sector: 'Saúde e Serviços Médicos',
    location: 'Talatona, Luanda',
    scenario: 'Clínica privada moderna com especialistas de renome internacional, mas com taxa de ocupação de consultórios abaixo de 45% nos dias úteis.',
    challenge: 'Proibições deontológicas de publicidade apelativa e necessidade de atrair pacientes com planos de saúde ou pagamento direto.',
    strategy: '1. Campanhas no Google Ads na Rede de Pesquisa focadas em termos de intenção como "pediatra particular Luanda", "cardiologista Talatona" e "exames laboratoriais rápidos". 2. Páginas de especialidades com apresentação detalhada do currículo médico e fotos das instalações. 3. Atendimento humanizado com marcação imediata pelo WhatsApp.',
    metrics: [
      { label: 'Custo por Consulta Agendada', value: '4.800 AOA' },
      { label: 'Taxa de Ocupação da Agenda', value: 'Subiu de 45% para 89%' },
      { label: 'ROAS Estimado (LTV)', value: '8,2x' },
      { label: 'Novos Pacientes Mensais', value: '140 pacientes' }
    ],
    keyTakeaway: 'Para serviços de saúde de padrão elevado, o Google Ads na Rede de Pesquisa é o canal mais ético, preciso e com maior poder de conversão imediata.',
    hypotheticalDisclaimer: true
  },
  {
    id: 'case-ecommerce-lisboa',
    title: 'E-commerce Luso-Angolano de Produtos Tradicionais: Escala Transfronteiriça',
    sector: 'Comércio Eletrónico Internacional',
    location: 'Lisboa, Portugal e Luanda, Angola',
    scenario: 'Negócio de exportação de produtos e ingredientes tradicionais para a diáspora angolana na Europa e envio de tecnologia da Europa para Luanda.',
    challenge: 'Logística complexa, taxas de entrega e necessidade de construir confiança mútua em duas moedas distintas (Euros e Kwanzas).',
    strategy: '1. Plataforma de e-commerce com suporte a pagamentos duplos (Multicaixa Express para Angola e MBWay/Cartão para Europa). 2. Estratégia de SEO focada em termos de busca de expatriados e campanhas de Meta Ads emotivas com o conceito "Um pedaço de casa onde quer que estejas". 3. Parceria logística com rastreamento por SMS em tempo real.',
    metrics: [
      { label: 'Faturação Mensal', value: '45.000 € / ~42M AOA' },
      { label: 'Custo Médio de Envio', value: 'Reduzido em 25%' },
      { label: 'Taxa de Recompra a 90 dias', value: '48%' },
      { label: 'NPS de Clientes', value: '+78 (Excelente)' }
    ],
    keyTakeaway: 'O comércio eletrónico transfronteiriço no espaço lusófono floresce quando resolve simultaneamente a forma de pagamento local e a previsibilidade da entrega.',
    hypotheticalDisclaimer: true
  }
];
