import { CourseModule } from '../types';

export const INITIAL_MODULES: CourseModule[] = [
  {
    id: 1,
    title: 'Módulo 1 — Estratégia e Fundamentos Avançados',
    subtitle: 'Alinhamento corporativo, diagnóstico, personas e funil estratégico',
    description: 'Compreenda a visão macro do marketing moderno, aprenda a executar diagnósticos empresariais profundos, posicionamento competitivo e desenho de funis para negócios em Angola e no mercado internacional.',
    lessonsCount: 10,
    durationWeeks: 4,
    durationHours: 40,
    status: 'em_andamento',
    progressPercent: 0,
    assessmentScore: undefined,
    gradient: 'from-blue-900 to-indigo-900',
    iconName: 'Compass',
    lessons: [
      {
        id: 'm1-l1',
        moduleId: 1,
        order: 1,
        title: '1. O papel do gestor de Marketing Digital',
        durationMinutes: 45,
        objectives: [
          'Compreender a transição de operador táctico para líder estratégico de marketing.',
          'Identificar a matriz de responsabilidades perante a administração e a equipa de vendas.',
          'Mapear os canais prioritários e alocação de recursos em mercados emergentes.'
        ],
        introduction: 'O Gestor de Marketing Digital já não é apenas quem publica imagens nas redes sociais. Na economia contemporânea, este profissional responde directamente pelo custo de aquisição, posicionamento de valor e previsibilidade de receitas da organização.',
        theory: `O marketing digital contemporâneo opera no cruzamento entre criatividade, ciência de dados e psicologia do consumidor. O gestor tem como função primária alinhar os objectivos comerciais da empresa (aumento de margem, quota de mercado, retenção) aos canais digitais disponíveis.
Diferença crucial:
- Nível Operacional: Criação de posts, agendamento, resposta a mensagens.
- Nível Táctico: Configuração de anúncios no Meta Ads Manager, optimização de palavras-chave no Google.
- Nível Estratégico: Definição de CAC alvo, modelagem de LTV (Lifetime Value), arquitetura de funis multicanal e integração com a equipa comercial.`,
        fundamentalConcepts: [
          { term: 'CAC (Custo de Aquisição de Clientes)', definition: 'Soma de todos os custos de marketing e vendas a dividir pelo número de novos clientes convertidos.' },
          { term: 'LTV (Lifetime Value)', definition: 'Valor financeiro total líquido que um cliente gera para a empresa durante o período em que mantém relação comercial.' },
          { term: 'Estratégia Omnichannel', definition: 'Integração sem atrito de múltiplos canais físicos e digitais (WhatsApp, loja, site, redes sociais).' }
        ],
        practicalExamples: [
          'Como reestruturar um departamento de marketing que apenas gasta em posts impulsionados para um departamento orientado a metas de vendas mensais.',
          'Apresentação de relatório executivo ao Conselho de Administração focando em retorno financeiro e não apenas em gostos ou seguidores.'
        ],
        angolaContext: 'Em Angola, muitas empresas ainda confundem gestão de marketing com design gráfico. O gestor preparado deve educar o empresário angolano a valorizar a captação de leads qualificados que convertem via WhatsApp e balcão, suportados por pagamentos via Multicaixa Express.',
        caseStudy: {
          company: 'Rede FarmaLuanda (Fictício)',
          sector: 'Saúde e Retalho',
          location: 'Luanda, Angola',
          situation: 'A empresa investia 400.000 AOA mensais em redes sociais sem saber quantas receitas provinham desses investimentos.',
          solution: 'Implementou rastreamento de pedidos via WhatsApp Business com catálogo e link de atendimento segmentado por campanha.',
          results: 'Identificou que 68% das receitas geradas online vinham de campanhas de produtos de cuidados infantis, permitindo triplicar o investimento apenas nesse nicho lucrativo.'
        },
        recommendedTools: [
          { name: 'Notion / Trello', category: 'Gestão de Tarefas', description: 'Para gestão de backlog e sprints de marketing.' },
          { name: 'Google Sheets / Excel', category: 'Controlo Financeiro', description: 'Modelagem de CAC e previsão orçamental.' }
        ],
        practicalExercise: {
          title: 'Mapeamento de Responsabilidades do Gestor',
          prompt: 'Desenvolva uma tabela comparativa com 5 actividades operacionais que a sua empresa realiza actualmente e como as transformará em acções estratégicas com KPIs definidos.',
          expectedDeliverables: ['Tabela comparativa Operacional vs Estratégico', 'Identificação dos 3 KPIs prioritários do negócio']
        },
        reviewQuestions: [
          { question: 'Qual a principal diferença entre um gestor operacional e um gestor estratégico de marketing?', explanation: 'O gestor estratégico foca-se na geração de receita, otimização de margens, rentabilidade do CAC e liderança de equipas, em vez de métricas de vaidade.' }
        ],
        summary: 'O gestor de marketing é o arquitecto do crescimento da empresa. Deve dominar finanças básicas, dados de tráfego e psicologia de vendas.',
        resources: ['Livro: Traction de Gabriel Weinberg', 'Framework de Liderança de Marketing CIM (Chartered Institute of Marketing)'],
        isCompleted: false
      },
      {
        id: 'm1-l2',
        moduleId: 1,
        order: 2,
        title: '2. Diagnóstico de negócios',
        durationMinutes: 50,
        objectives: [
          'Aplicar metodologia estruturada para auditar a maturidade digital de uma organização.',
          'Identificar gargalos na captação, conversão e retenção.',
          'Calcular a capacidade de absorção de demanda da empresa.'
        ],
        introduction: 'Antes de gastar um único Kwanza em publicidade, é obrigatório entender onde a empresa está a perder clientes e se a sua operação tem capacidade de atender mais procura.',
        theory: `O diagnóstico de negócios digital é constituído por 4 pilares essenciais:
1. Maturidade de Presença Digital: O site carrega rapidamente? O Google Business Profile está atualizado?
2. Maturidade de Processo Comercial: Quanto tempo a equipa demora a responder a um contacto no WhatsApp?
3. Maturidade de Dados: O negócio regista de onde vêm os clientes?
4. Capacidade Operacional: Se as vendas dobrarem amanhã, o stock e a logística aguentam?`,
        fundamentalConcepts: [
          { term: 'Auditoria de Funil', definition: 'Análise minuciosa de cada etapa percorrida pelo cliente desde o primeiro contacto até o pós-venda.' },
          { term: 'Tempo de Resposta Comercial (SLA)', definition: 'Tempo médio decorrido entre a mensagem do lead e o primeiro contacto de um vendedor.' }
        ],
        practicalExamples: [
          'Identificação de que uma clínica dentária no Talatona perdia 40% dos agendamentos porque ninguém atendia o WhatsApp após as 18 horas.'
        ],
        angolaContext: 'Em Angola, o gargalo mais comum diagnosticado não é a falta de tráfego, mas o atendimento lento e desorganizado no WhatsApp Business e a falta de troco ou confirmação de pagamento por Multicaixa Express.',
        caseStudy: {
          company: 'Boutique Elegância Kilamba (Hipotético)',
          sector: 'Moda Feminina',
          location: 'Centralidade do Kilamba, Luanda',
          situation: 'Recebia mais de 80 mensagens por dia no Instagram, mas convertia apenas 2 vendas diárias.',
          solution: 'Diagnóstico revelou falta de tabela de preços clara, ausência de catálogo e tempo de resposta de 5 horas.',
          results: 'Com catálogo automatizado e atendimento estruturado em 15 minutos, a conversão subiu para 14 vendas/dia sem aumentar o gasto em anúncios.'
        },
        recommendedTools: [
          { name: 'Google PageSpeed Insights', category: 'Diagnóstico Técnico', description: 'Mede a velocidade de carregamento em redes móveis.' },
          { name: 'Checklist de Auditoria Digital', category: 'Framework', description: 'Matriz de 50 pontos para avaliação de maturidade.' }
        ],
        practicalExercise: {
          title: 'Auditoria Completa de um Negócio Local',
          prompt: 'Seleccione uma empresa da sua cidade (ou o seu próprio negócio) e preencha a matriz de maturidade digital dos 4 pilares.',
          expectedDeliverables: ['Relatório de diagnóstico de 1 página com 3 recomendações imediatas']
        },
        reviewQuestions: [
          { question: 'Por que motivo um diagnóstico deve anteceder o investimento em campanhas de tráfego pago?', explanation: 'Porque enviar tráfego para um processo de vendas defeituoso apenas acelera o desperdício financeiro da empresa.' }
        ],
        summary: 'Diagnosticar antes de prescrever é a marca de um consultor de marketing de elite.',
        resources: ['Guia de Diagnóstico Digital McKinsey', 'Matriz de Maturidade Digital da Academia'],
        isCompleted: false
      },
      {
        id: 'm1-l3',
        moduleId: 1,
        order: 3,
        title: '3. Análise SWOT (FOFA)',
        durationMinutes: 45,
        objectives: ['Construir uma matriz SWOT adaptada ao ambiente digital', 'Cruzar variáveis internas e externas para gerar planos de acção concretos'],
        introduction: 'A matriz SWOT permite transformar forças em oportunidades e blindar fraquezas contra ameaças do mercado.',
        theory: 'A análise SWOT digital divide-se em Forças (Strengths), Fraquezas (Weaknesses), Oportunidades (Opportunities) e Ameaças (Threats). Mais importante que listar itens é fazer o cruzamento SO, WO, ST e WT.',
        fundamentalConcepts: [
          { term: 'SWOT Cruzada', definition: 'Técnica de formulação de estratégias combinando factores internos com factores externos.' }
        ],
        practicalExamples: ['Utilizar a força do reconhecimento da marca física para impulsionar a loja virtual recém-lançada.'],
        angolaContext: 'Avaliação de ameaças cambiais no pagamento de faturas da Meta/Google e aproveitamento da oportunidade de grande crescimento de utilizadores de smartphones.',
        caseStudy: {
          company: 'Pizzaria Baía Gourmet (Hipotético)',
          sector: 'Restauração',
          location: 'Marginal de Luanda',
          situation: 'Concorrência intensa de novas franquias e perda de clientes ao almoço.',
          solution: 'SWOT cruzada que aproveitou a força da localização para lançar entregas expresso para escritórios da Baixa via WhatsApp.',
          results: 'Aumento de 42% no volume de encomendas corporativas diárias.'
        },
        recommendedTools: [{ name: 'Miro / Canva', category: 'Diagramação', description: 'Para construção visual colaborativa da Matriz SWOT.' }],
        practicalExercise: {
          title: 'Construção da Matriz SWOT Cruzada',
          prompt: 'Identifique 3 forças, 3 fraquezas, 3 oportunidades e 3 ameaças para uma marca em Angola e proponha 2 estratégias de ataque e 2 de defesa.',
          expectedDeliverables: ['Matriz SWOT preenchida e 4 directrizes estratégicas']
        },
        reviewQuestions: [{ question: 'Como se diferenciam factores internos e externos na SWOT?', explanation: 'Factores internos (forças e fraquezas) estão sob controlo da organização; externos (oportunidades e ameaças) pertencem ao mercado e macroambiente.' }],
        summary: 'A SWOT só tem valor se produzir decisões e acções estratégicas claras.',
        resources: ['Artigo Harvard Business Review sobre Strategic Alignment'],
        isCompleted: false
      },
      {
        id: 'm1-l4',
        moduleId: 1,
        order: 4,
        title: '4. Análise da concorrência',
        durationMinutes: 45,
        objectives: ['Identificar concorrentes directos, indirectos e substitutos', 'Auditar criativos e canais de tráfego dos concorrentes usando ferramentas abertas'],
        introduction: 'Espiar legalmente a concorrência é o atalho mais eficiente para poupar tempo e dinheiro em testes de marketing.',
        theory: 'A análise competitiva digital envolve investigar: biblioteca de anúncios dos concorrentes, estratégias de conteúdo, posicionamento de preço, tempo de resposta comercial e reclamações públicas dos clientes deles.',
        fundamentalConcepts: [
          { term: 'Meta Ad Library', definition: 'Base de dados pública e gratuita da Meta onde é possível ver todos os anúncios activos de qualquer página de Facebook ou Instagram.' },
          { term: 'Produto Substituto', definition: 'Alternativa que resolve a mesma dor do cliente de forma diferente (ex: táxis normais vs aplicativos de mobilidade tipo Yango).' }
        ],
        practicalExamples: ['Analisar quais ofertas e copies os três maiores concorrentes estão a veicular há mais de 30 dias (sinal forte de que são lucrativas).'],
        angolaContext: 'Em Angola, muitos concorrentes não actualizam sites, mas mantêm forte presença no Instagram e grupos de WhatsApp. O cliente oculto nesses canais é vital.',
        caseStudy: {
          company: 'Colégio Futuro Brilhante (Hipotético)',
          sector: 'Educação',
          location: 'Viana, Luanda',
          situation: 'Matrículas estagnadas enquanto colégios vizinhos estavam lotados.',
          solution: 'Análise de concorrentes revelou que os outros ofereciam transporte escolar integrado e divulgação maciça de depoimentos de mães no Facebook.',
          results: 'Adopção da mesma estratégia de prova social resultou em 100% de ocupação das vagas para o ano letivo seguinte.'
        },
        recommendedTools: [{ name: 'Meta Ad Library', category: 'Espionagem de Anúncios', description: 'Consulta pública de anúncios activos.' }],
        practicalExercise: {
          title: 'Auditoria de 3 Concorrentes Directos',
          prompt: 'Utilize a Biblioteca de Anúncios da Meta para auditar 3 marcas angolanas do mesmo sector e identifique os seus melhores criativos.',
          expectedDeliverables: ['Relatório de inteligência competitiva com 3 conclusões acionáveis']
        },
        reviewQuestions: [{ question: 'Por que um anúncio activo há mais de 60 dias é um sinal relevante na Ad Library?', explanation: 'Porque empresas não continuam a gastar dinheiro em anúncios que não dão lucro. Anúncios duradouros geralmente são vencedores comprovados.' }],
        summary: 'Aprenda com o investimento dos outros para construir campanhas vencedoras mais depressa.',
        resources: ['Guia de Engenharia Reversa de Campanhas'],
        isCompleted: false
      },
      {
        id: 'm1-l5',
        moduleId: 1,
        order: 5,
        title: '5. Identificação do público-alvo',
        durationMinutes: 40,
        objectives: ['Diferenciar dados demográficos de comportamentos psicográficos', 'Definir segmentos com poder de compra e intenção real de consumo'],
        introduction: 'Tentar vender para toda a gente é a receita perfeita para não vender para ninguém.',
        theory: 'A segmentação moderna divide o mercado em: demografia (idade, renda, localização), psicografia (valores, ambições, estilo de vida) e comportamento (hábitos de consumo online, frequência de compra).',
        fundamentalConcepts: [
          { term: 'TAM, SAM, SOM', definition: 'Mercado Total Endereçável, Mercado Endereçável Útil e Mercado Que Podemos Obter.' }
        ],
        practicalExamples: ['Segmentar profissionais liberais no centro de Luanda que utilizam serviços de almoço corporativo expresso.'],
        angolaContext: 'Em Angola, deve-se considerar a heterogeneidade do poder aquisitivo e a distribuição geográfica (Luanda concentra a maior fatia do poder de compra digital, mas províncias como Benguela e Huíla têm nichos muito fortes).',
        caseStudy: {
          company: 'Concessionária AutoBenguela (Hipotético)',
          sector: 'Automóvel',
          location: 'Benguela, Angola',
          situation: 'Anúncios genéricos atraíam muitos curiosos sem capacidade de crédito.',
          solution: 'Segmentação afinada para gestores de empresas agrícolas e frotistas da região Centro/Sul.',
          results: 'Redução de 70% nos contactos desqualificados e triplicação da taxa de fecho de contratos.'
        },
        recommendedTools: [{ name: 'Meta Audience Insights', category: 'Dados Demográficos', description: 'Para estimar tamanho de públicos por interesse.' }],
        practicalExercise: {
          title: 'Definição do Segmento Ideal de Clientes',
          prompt: 'Descreva detalhadamente o perfil demográfico e psicográfico do cliente ideal para uma agência de consultoria de marketing em Luanda.',
          expectedDeliverables: ['Ficha de segmentação com critérios de inclusão e exclusão']
        },
        reviewQuestions: [{ question: 'Qual a limitação de definir público-alvo apenas com dados demográficos?', explanation: 'Duas pessoas com a mesma idade e rendimento podem ter hábitos, desejos e prioridades de compra completamente opostos.' }],
        summary: 'Foco no cliente certo reduz custos e aumenta a taxa de conversão.',
        resources: ['Segmentação Avançada de Mercados Emergentes'],
        isCompleted: false
      },
      {
        id: 'm1-l6',
        moduleId: 1,
        order: 6,
        title: '6. Construção de personas',
        durationMinutes: 50,
        objectives: ['Criar personas baseadas em pesquisas reais e entrevistas com clientes', 'Identificar dores, desejos, objeções de compra e gatilhos de decisão'],
        introduction: 'Uma buyer persona é a representação semi-ficcional do seu cliente ideal baseada em dados reais.',
        theory: 'A anatomia de uma persona robusta inclui: Nome e perfil, objectivo principal, maior dor/frustração diária, principais objecções (ex: "é caro", "não confio no pagamento online", "demora a entregar"), canais onde consome informação e mensagem que ressoa.',
        fundamentalConcepts: [
          { term: 'Objecção de Compra', definition: 'O motivo consciente ou inconsciente pelo qual o cliente hesita ou recusa a compra.' },
          { term: 'Jobs to be Done (JTBD)', definition: 'Teoria que foca na "tarefa" que o cliente contrata o seu produto para realizar.' }
        ],
        practicalExamples: ['Persona "Dra. Teresa", médica de 38 anos em Talatona, com pouco tempo livre, que procura refeições saudáveis pré-cozinhadas para a família.'],
        angolaContext: 'Considerar objecções comuns em Angola como desconfiança sobre entrega de produtos comprados pela internet e necessidade de pagamento no acto da entrega.',
        caseStudy: {
          company: 'Loja Infantil Pezinhos de Ouro (Hipotético)',
          sector: 'Vestuário e Calçado',
          location: 'Luanda',
          situation: 'Mensagens promocionais genéricas causavam pouca empatia.',
          solution: 'Construção da persona "Mãe de Primeira Viagem Patrícia", focando em segurança, conforto do tecido e entrega no condomínio.',
          results: 'Campanha personalizada teve taxa de cliques 2,8x superior à média do sector.'
        },
        recommendedTools: [{ name: 'HubSpot Make My Persona', category: 'Gerador Visual', description: 'Template para documentar personas.' }],
        practicalExercise: {
          title: 'Criação de 2 Personas Detalhadas',
          prompt: 'Entreviste ou simule com base em dados 2 personas completas para uma marca de cursos online em Angola, incluindo 3 objecções prioritárias cada.',
          expectedDeliverables: ['Fichas de personas completas prontas para a equipa criativa']
        },
        reviewQuestions: [{ question: 'O que diferencia público-alvo de persona?', explanation: 'Público-alvo é uma definição ampla e estatística (ex: homens de 25-40 anos); Persona personifica um perfil humano específico com medos, rotina e linguagem viva.' }],
        summary: 'Escrever para uma pessoa concreta torna todo o copywriting irresistível.',
        resources: ['Framework Buyer Persona Institute'],
        isCompleted: false
      },
      {
        id: 'm1-l7',
        moduleId: 1,
        order: 7,
        title: '7. Posicionamento de marca',
        durationMinutes: 45,
        objectives: ['Construir uma Proposta Única de Valor (PUV)', 'Dominar um espaço claro na mente do consumidor face à concorrência'],
        introduction: 'Posicionamento não é o que você faz com o produto, mas o que você faz com a mente do cliente.',
        theory: 'Os 4 eixos clássicos de posicionamento: Liderança em Custo, Diferenciação por Qualidade/Exclusividade, Foco em Nicho Especializado, ou Inovação/Velocidade. A Proposta Única de Valor (PUV) deve responder em 1 frase: "Por que devo comprar de ti e não do teu concorrente?"',
        fundamentalConcepts: [
          { term: 'PUV (Proposta Única de Valor)', definition: 'Declaração concisa que explica o benefício único que a sua marca entrega de forma exclusiva.' },
          { term: 'Top of Mind', definition: 'A primeira marca que vem à mente do consumidor quando questionado sobre determinada categoria de produto.' }
        ],
        practicalExamples: ['"A única pastelaria em Luanda com pães artesanais de fermentação natural entregues quentes às 6h da manhã".'],
        angolaContext: 'Em Angola, marcas que assumem compromisso inegociável de pontualidade e qualidade do atendimento destacam-se rapidamente do padrão geral de mercado.',
        caseStudy: {
          company: 'Lavandaria Expresso Talatona (Hipotético)',
          sector: 'Serviços',
          location: 'Luanda Sul',
          situation: 'Competia por preço com lavandarias informais e tinha margens baixas.',
          solution: 'Reposicionou-se como especialista em fatos executivos e vestidos de cerimónia com recolha e entrega VIP em 24h garantidas.',
          results: 'Aumento de 60% no ticket médio e captação de clientes de alto padrão.'
        },
        recommendedTools: [{ name: 'Matriz de Percepção de Valor', category: 'Estratégia', description: 'Gráfico bidimensional de preço vs diferenciação.' }],
        practicalExercise: {
          title: 'Desenho da Proposta Única de Valor',
          prompt: 'Escreva a Proposta Única de Valor para a sua marca seguindo a fórmula: [Produto] ajuda [Persona] a atingir [Benefício Desejado] sem [Maior Dor/Obstáculo].',
          expectedDeliverables: ['Declaração de PUV validada com 3 argumentos de suporte']
        },
        reviewQuestions: [{ question: 'Por que competir apenas pelo menor preço é uma estratégia perigosa no digital?', explanation: 'Porque destrói as margens de lucro e atrai clientes infiéis que abandonam a marca assim que surgir uma opção ligeiramente mais barata.' }],
        summary: 'Posicionamento claro afasta clientes errados e atrai compradores ideais dispostos a pagar mais.',
        resources: ['Livro: Posicionamento de Al Ries e Jack Trout'],
        isCompleted: false
      },
      {
        id: 'm1-l8',
        moduleId: 1,
        order: 8,
        title: '8. Jornada do consumidor',
        durationMinutes: 45,
        objectives: ['Mapear os pontos de contacto do cliente em cada estágio', 'Desenhar intervenções de marketing que eliminam pontos de atrito'],
        introduction: 'O cliente não compra no primeiro contacto. Ele percorre uma jornada psicológica que vai da inconsciência da dor até a fidelização.',
        theory: 'As 5 fases da Jornada: 1. Descoberta (o cliente descobre que tem um problema); 2. Consideração (pesquisa soluções); 3. Decisão (compara opções específicas); 4. Compra (efectua a transação); 5. Pós-venda e Advocacia (recomenda a terceiros).',
        fundamentalConcepts: [
          { term: 'Touchpoint (Ponto de Contacto)', definition: 'Qualquer momento em que o cliente interage com a marca (anúncio, embalagem, mensagem, recibo).' },
          { term: 'Atrito (Friction)', definition: 'Qualquer dificuldade ou hesitação que atrasa ou impede o cliente de avançar no processo de compra.' }
        ],
        practicalExamples: ['Um cliente que vê um reels no Instagram, clica no link do perfil, aguarda 10 segundos pelo site, desiste e vai para o concorrente.'],
        angolaContext: 'Em Angola, o pós-venda é frequentemente negligenciado. As empresas que enviam uma mensagem amigável no WhatsApp 2 dias após a entrega geram fidelização imediata.',
        caseStudy: {
          company: 'Clínica de Estética Belleza Viva (Hipotético)',
          sector: 'Saúde e Beleza',
          location: 'Nova Vida, Luanda',
          situation: '70% dos clientes faziam apenas um procedimento e nunca mais regressavam.',
          solution: 'Mapeamento da jornada pós-consulta com envio de dicas de cuidados na pele e oferta de retorno programado aos 30 dias.',
          results: 'Taxa de recompra subiu de 30% para 64% em quatro meses.'
        },
        recommendedTools: [{ name: 'Lucidchart / Figma', category: 'Mapeamento Visual', description: 'Para desenhar a jornada do cliente.' }],
        practicalExercise: {
          title: 'Mapa da Jornada do Consumidor',
          prompt: 'Desenhe as 5 etapas da jornada de um comprador de imóveis ou de automóveis em Luanda, identificando o ponto de maior atrito em cada uma.',
          expectedDeliverables: ['Mapa com 5 estágios, sentimentos do cliente e canais adequados']
        },
        reviewQuestions: [{ question: 'Em que fase da jornada o cliente é mais sensível ao preço?', explanation: 'Geralmente na fase de decisão/comparação, a menos que a empresa tenha construído um valor percebido substancial nas etapas anteriores.' }],
        summary: 'Entender a jornada permite entregar a mensagem certa no momento psicológico perfeito.',
        resources: ['Guia de Customer Journey Mapping Google'],
        isCompleted: false
      },
      {
        id: 'm1-l9',
        moduleId: 1,
        order: 9,
        title: '9. Funil de vendas',
        durationMinutes: 50,
        objectives: ['Estruturar o funil ToFu, MoFu e BoFu para negócios B2B e B2C', 'Calcular as taxas de passagem entre cada etapa do funil'],
        introduction: 'O funil de vendas é o modelo visual e quantitativo que transforma desconhecidos em clientes recorrentes.',
        theory: 'ToFu (Top of Funnel): Atração e consciência (conteúdos educativos, vídeos de curiosidade). MoFu (Middle of Funnel): Consideração e captura de leads (e-books, catálogos, webinars, diagnósticos gratuitos). BoFu (Bottom of Funnel): Conversão e venda (oferta directa, demonstração, orçamento, contacto comercial via WhatsApp).',
        fundamentalConcepts: [
          { term: 'Taxa de Conversão do Funil', definition: 'Percentagem de pessoas que passam com sucesso de uma fase do funil para a seguinte.' },
          { term: 'Lead Qualificado (MQL/SQL)', definition: 'Contacto que demonstrou interesse real e possui perfil financeiro compatível com a oferta.' }
        ],
        practicalExamples: ['10.000 visualizações de anúncio -> 500 cliques -> 100 conversas no WhatsApp -> 15 vendas fechadas = 3% de conversão final.'],
        angolaContext: 'Em Angola, o WhatsApp é o verdadeiro "fundo de funil" da imensa maioria dos negócios. O funil deve ser projectado para encaminhar os leads para conversas humanizadas no WhatsApp.',
        caseStudy: {
          company: 'Academia Fitness PowerClub (Hipotético)',
          sector: 'Desporto e Bem-Estar',
          location: 'Maianga, Luanda',
          situation: 'Anúncios directos com "inscreva-se já" tinham custo elevado e baixa adesão.',
          solution: 'Criou um funil oferecendo um treino experimental gratuito de 1 dia mediante registo no WhatsApp.',
          results: 'Aumento de 140% no número de novos membros inscritos com redução de 50% no custo por aluno.'
        },
        recommendedTools: [{ name: 'Whimsical / Funnelytics', category: 'Planeamento de Funil', description: 'Para arquitetar fluxos visuais de conversão.' }],
        practicalExercise: {
          title: 'Arquitetura de Funil de Vendas de 3 Estágios',
          prompt: 'Projete um funil completo para vender serviços de consultoria contábil ou fiscal em Luanda, especificando o conteúdo de atração, o incentivo de captura e a abordagem comercial final.',
          expectedDeliverables: ['Esquema gráfico do funil com metas numéricas estimadas para cada fase']
        },
        reviewQuestions: [{ question: 'Por que não se deve tentar fechar a venda directamente no topo do funil para produtos de alto valor?', explanation: 'Porque o potencial cliente ainda não reconhece a gravidade do problema nem confia na autoridade da empresa para investir um valor elevado.' }],
        summary: 'Um funil bem alinhado é uma máquina previsível de geração de clientes.',
        resources: ['Manual de Funis Modernos da Academia'],
        isCompleted: false
      },
      {
        id: 'm1-l10',
        moduleId: 1,
        order: 10,
        title: '10. Indicadores-chave de desempenho (KPIs)',
        durationMinutes: 50,
        objectives: ['Definir métricas primárias, secundárias e métricas de vaidade', 'Elaborar um scorecard estratégico de marketing para a gerência'],
        introduction: 'O que não se pode medir, não se pode gerir. O gestor de marketing deve separar números cosméticos de indicadores vitais de rentabilidade.',
        theory: 'Hierarquia de Métricas: 1. Métricas de Vaidade (gostos, seguidores, impressões brutas); 2. Métricas de Desempenho Táctico (CTR, CPC, Taxa de rejeição); 3. KPIs de Negócio (CAC, CPL, ROAS, Taxa de Conversão em Vendas, Faturação atribuída, LTV).',
        fundamentalConcepts: [
          { term: 'Métrica de Vaidade', definition: 'Dado quantitativo que infla o ego mas não tem correlação direta com a saúde financeira ou vendas da empresa.' },
          { term: 'Scorecard Executivo', definition: 'Painel sintético contendo de 5 a 8 indicadores críticos para acompanhamento semanal da administração.' }
        ],
        practicalExamples: ['Trocar o relatório semanal de "ganhamos 500 seguidores" por "geramos 45 contactos qualificados no WhatsApp com um CPL de 1.800 AOA e 6 vendas fechadas totalizando 1.200.000 AOA".'],
        angolaContext: 'Administradores e donos de empresas em Angola exigem ver o retorno em Kwanzas. Relatórios focados em KPIs financeiros geram credibilidade imediata para o gestor.',
        caseStudy: {
          company: 'Empresa de Segurança ProtecLuanda (Hipotético)',
          sector: 'Segurança Privada',
          location: 'Viana e Luanda Sul',
          situation: 'A administração queria cancelar o orçamento de marketing digital por considerar que redes sociais não geravam contratos corporativos.',
          solution: 'Implementação de rastreamento de formulários corporativos e relatórios focados em Custo por Proposta Entregue.',
          results: 'Demonstrou que 4 contratos de 8.000.000 AOA anuais vieram do Google Ads, garantindo o aumento da verba de marketing em 150%.'
        },
        recommendedTools: [{ name: 'Google Sheets / Looker Studio', category: 'Dashboarding', description: 'Para construção do painel de controlo de KPIs.' }],
        practicalExercise: {
          title: 'Construção do Dashboard de KPIs de 1 Página',
          prompt: 'Desenhe um relatório executivo para o director geral de uma empresa com os 6 KPIs primários e suas fórmulas de cálculo.',
          expectedDeliverables: ['Modelo de relatório semanal em formato executivo']
        },
        reviewQuestions: [{ question: 'Por que o número de seguidores no Instagram não deve ser considerado um KPI primário de marketing?', explanation: 'Porque seguidores não pagam contas da empresa nem garantem compras recorrentes; apenas vendas e conversões geram fluxo de caixa sustentável.' }],
        summary: 'Fale a linguagem dos números e das finanças para conquistar respeito e autonomia na gestão de marketing.',
        resources: ['Guia de KPIs de Marketing do MIT Sloan'],
        isCompleted: false
      }
    ],
    assessment: {
      id: 'eval-m1',
      moduleId: 1,
      title: 'Exame de Avaliação do Módulo 1 — Estratégia e Fundamentos',
      timeLimitMinutes: 30,
      questions: [
        {
          id: 'q1-1',
          question: 'Uma empresa investiu 600.000 AOA em marketing digital no mês e conquistou 24 novos clientes. Qual foi o CAC (Custo de Aquisição de Clientes)?',
          options: ['15.000 AOA', '25.000 AOA', '30.000 AOA', '50.000 AOA'],
          correctAnswerIndex: 1,
          explanation: 'CAC = 600.000 AOA ÷ 24 clientes = 25.000 AOA por cliente conquistado.'
        },
        {
          id: 'q1-2',
          question: 'Qual das seguintes métricas deve ser categorizada primariamente como uma métrica de vaidade?',
          options: ['Custo por Lead (CPL)', 'Retorno sobre o Investimento em Anúncios (ROAS)', 'Total de Gostos numa publicação no Instagram', 'Taxa de Conversão do WhatsApp'],
          correctAnswerIndex: 2,
          explanation: 'Gostos em publicações são métricas de vaidade, pois não possuem correlação comprovada direta com faturação ou lucro.'
        },
        {
          id: 'q1-3',
          question: 'Na análise SWOT, onde deve ser classificada a entrada de um novo concorrente internacional agressivo no mercado angolano?',
          options: ['Força interna', 'Fraqueza interna', 'Oportunidade externa', 'Ameaça externa'],
          correctAnswerIndex: 3,
          explanation: 'A concorrência provém do ambiente macro externo sobre o qual a empresa não tem controlo directo, sendo portanto uma Ameaça.'
        },
        {
          id: 'q1-4',
          question: 'Ao desenhar um funil de marketing digital em Angola, qual canal actua com maior frequência e eficiência como a etapa de fecho e conversão final (fundo de funil)?',
          options: ['Email marketing tradicional', 'WhatsApp Business com atendimento humanizado', 'Twitter / X', 'LinkedIn InMail'],
          correctAnswerIndex: 1,
          explanation: 'O WhatsApp Business é o principal canal de fecho e conversão em Angola devido à adesão massiva da população e rapidez de comunicação.'
        },
        {
          id: 'q1-5',
          question: 'O que representa o conceito de LTV (Lifetime Value)?',
          options: [
            'O valor que a empresa gasta para exibir um anúncio durante a vida útil da campanha',
            'O total de lucro líquido gerado por um cliente ao longo de todo o seu relacionamento com a empresa',
            'O número de vezes que um seguidor visualiza uma publicação nos Stories',
            'A taxa de rejeição observada na página inicial do website corporativo'
          ],
          correctAnswerIndex: 1,
          explanation: 'LTV mede o valor financeiro total trazido pelo cliente durante todo o tempo em que continua a comprar da empresa.'
        }
      ],
      recoveryQuestions: [
        {
          id: 'rq1-1',
          question: 'Qual é a regra de ouro recomendada na relação saudável entre o LTV e o CAC?',
          options: ['LTV deve ser igual ao CAC (1:1)', 'LTV deve ser pelo menos 3 vezes superior ao CAC (LTV >= 3x CAC)', 'CAC deve ser 5 vezes superior ao LTV', 'Não existe correlação entre as duas métricas'],
          correctAnswerIndex: 1,
          explanation: 'Para cobrir custos de operação, entrega e deixar margem de lucro saudável, o valor vitalício do cliente (LTV) deve ser no mínimo 3 vezes o custo de aquisição.'
        },
        {
          id: 'rq1-2',
          question: 'Para que serve a Biblioteca de Anúncios da Meta (Meta Ad Library)?',
          options: [
            'Para pagar faturas de anúncios em atraso',
            'Para auditar publicamente os anúncios activos de qualquer concorrente no Facebook e Instagram',
            'Para agendar publicações orgânicas gratuitas',
            'Para medir a velocidade de websites'
          ],
          correctAnswerIndex: 1,
          explanation: 'A Biblioteca de Anúncios é a ferramenta oficial e pública da Meta para visualizar todos os anúncios veiculados por qualquer página.'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Módulo 2 — Planeamento e Gestão de Marketing',
    subtitle: 'Planos estruturados, metas SMART, copywriting e gestão de orçamentos',
    description: 'Aprenda o método prático para redigir planos de marketing profissionais, calcular orçamentos, estruturar calendários editoriais e aplicar técnicas avançadas de copywriting persuasivo.',
    lessonsCount: 10,
    durationWeeks: 4,
    durationHours: 42,
    status: 'em_andamento',
    progressPercent: 0,
    assessmentScore: undefined,
    gradient: 'from-blue-600 to-cyan-700',
    iconName: 'CalendarCheck',
    lessons: [
      {
        id: 'm2-l1',
        moduleId: 2,
        order: 1,
        title: '1. Como elaborar um plano de marketing profissional',
        durationMinutes: 50,
        objectives: [
          'Dominar as 7 secções obrigatórias de um plano de marketing institucional.',
          'Traduzir directrizes da administração em cronogramas operacionais executáveis.',
          'Apresentar o plano com segurança perante investidores ou clientes de consultoria.'
        ],
        introduction: 'Um plano de marketing não é um documento estático para ficar na gaveta; é o guia de navegação da empresa para os próximos 6 a 12 meses.',
        theory: `Estrutura de um Plano de Marketing de Nível Executivo:
1. Resumo Executivo: Visão sintética dos objectivos, investimentos e resultados esperados.
2. Análise de Situação e Mercado: Diagnóstico actual, análise SWOT e matriz de concorrentes.
3. Definição de Objectivos e Metas: Objectivos de negócio traduzidos em metas SMART.
4. Estratégia de Posicionamento e Mensagem: Persona, Proposta Única de Valor e tom de voz.
5. Plano de Acção por Canal: Tráfego pago, marketing de conteúdo, WhatsApp, SEO e eventos.
6. Orçamento e Projecções Financeiras: Alocação de verba mensal e simulações de retorno.
7. Sistema de Monitorização e KPIs: Frequência de reuniões de acompanhamento e painéis de dados.`,
        fundamentalConcepts: [
          { term: 'Resumo Executivo', definition: 'Primeira secção do documento lida pela gerência, resumindo números e impacto esperado.' },
          { term: 'Cronograma Gantt de Marketing', definition: 'Representação visual da linha do tempo de lançamento de campanhas ao longo do ano.' }
        ],
        practicalExamples: ['Elaboração de um plano semestral para lançamento de uma nova marca de cosméticos naturais em Luanda.'],
        angolaContext: 'Em Angola, os planos devem ter flexibilidade para contingências cambiais e sazonais (ex: período de regresso às aulas em Setembro, festas da cidade, Black Friday e época natalícia).',
        caseStudy: {
          company: 'Agência Criativa Maianga (Hipotético)',
          sector: 'Serviços de Comunicação',
          location: 'Maianga, Luanda',
          situation: 'A agência perdia propostas comerciais porque entregava orçamentos simples de 1 página sem estratégia fundamentada.',
          solution: 'Adoptou o modelo de Plano de Marketing Estratégico com metas SMART e projecção de ROI.',
          results: 'A taxa de aceitação de propostas corporativas subiu de 20% para 55%, duplicando a faturação média por contrato.'
        },
        recommendedTools: [{ name: 'Modelo de Plano de Marketing AMD (Word/PDF)', category: 'Templates', description: 'Template oficial da Academia.' }],
        practicalExercise: {
          title: 'Redacção do Resumo Executivo do Plano',
          prompt: 'Escreva um Resumo Executivo de 250 palavras para uma empresa de tecnologia ou retalho que pretende expandir as vendas em 30% em Luanda nos próximos 6 meses.',
          expectedDeliverables: ['Texto conciso com metas numéricas, investimento total e resultados previstos']
        },
        reviewQuestions: [{ question: 'Qual é o maior erro cometido na elaboração de planos de marketing tradicionais?', explanation: 'Focar excessivamente em ideias de comunicação sem ancorar os custos, canais de distribuição e metas financeiras de vendas.' }],
        summary: 'O plano de marketing é o compromisso formal entre as ambições da empresa e as acções práticas da equipa.',
        resources: ['Template de Plano de Marketing Profissional da Academia'],
        isCompleted: false
      },
      {
        id: 'm2-l2',
        moduleId: 2,
        order: 2,
        title: '2. Definição de objectivos SMART',
        durationMinutes: 40,
        objectives: ['Construir metas Específicas, Mensuráveis, Atingíveis, Relevantes e Temporais', 'Evitar metas vagas como "aumentar o engajamento"'],
        introduction: 'Metas sem números são apenas desejos. A metodologia SMART transforma intenções em compromissos mensuráveis.',
        theory: 'S (Specific - Específico): O que exatamente será feito? M (Measurable - Mensurável): Qual o indicador e valor numérico? A (Achievable - Atingível): É realista com os recursos actuais? R (Relevant - Relevante): Tem impacto directo no negócio? T (Time-bound - Com prazo): Qual a data limite?',
        fundamentalConcepts: [{ term: 'Metas SMART', definition: 'Metodologia de fixação de metas claras e monitorizáveis.' }],
        practicalExamples: ['Inadequado: "Queremos vender mais online." SMART: "Gerar 150 novos clientes de consultoria fiscal via WhatsApp até 30 de Junho com CAC máximo de 18.000 AOA".'],
        angolaContext: 'Estabelecer metas realistas considerando os prazos de entrega e modalidades de pagamento vigentes no mercado angolano.',
        caseStudy: {
          company: 'Gráfica Express Viana (Hipotético)',
          sector: 'Indústria Gráfica',
          location: 'Viana',
          situation: 'A equipa de marketing não sabia se estava a ter sucesso porque não havia metas claras.',
          solution: 'Definição da meta SMART: "Conquistar 40 novas contas corporativas de brindes de fim de ano até 15 de Novembro".',
          results: 'Atingiram 48 contas e ultrapassaram a meta em 20%.'
        },
        recommendedTools: [{ name: 'Calculadora SMART da Academia', category: 'Ferramenta de Planeamento', description: 'Validador de metas.' }],
        practicalExercise: {
          title: 'Conversão de 3 Metas Vagas em Metas SMART',
          prompt: 'Pegue em 3 objectivos genéricos de marketing e reescreva-os segundo os 5 critérios SMART.',
          expectedDeliverables: ['3 metas SMART completas com prazo e valor numérico']
        },
        reviewQuestions: [{ question: 'Por que o critério temporal (Time-bound) é indispensável?', explanation: 'Sem uma data final estabelecida, as tarefas são continuamente adiadas e não há como medir a taxa de progresso.' }],
        summary: 'Metas SMART orientam toda a equipa na mesma direção.',
        resources: ['Guia Prático de Gestão por Metas'],
        isCompleted: false
      },
      {
        id: 'm2-l3',
        moduleId: 2,
        order: 3,
        title: '3. Definição de estratégias e tácticas',
        durationMinutes: 45,
        objectives: ['Diferenciar claramente Estratégia de Táctica', 'Escolher os vectores de crescimento mais rápidos para cada tipo de negócio'],
        introduction: 'Estratégia é o caminho; tácticas são os passos individuais que damos ao longo desse caminho.',
        theory: 'Estratégia é a decisão estrutural de como a empresa vai vencer a concorrência. Tácticas são as acções específicas de execução (ex: fazer um vídeo no TikTok com influenciador local, criar um anúncio de carrossel no Facebook, enviar um cupão no WhatsApp).',
        fundamentalConcepts: [{ term: 'Alinhamento Estratégico-Táctico', definition: 'Garantia de que nenhuma acção táctica é executada sem servir um objectivo estratégico.' }],
        practicalExamples: ['Estratégia: Tornar-se a referência em formação de executivos em Luanda. Táctica: Publicar artigos de análise económica no LinkedIn e patrocinar workshops presenciais no Talatona.'],
        angolaContext: 'Evitar o erro comum de copiar tácticas de marcas estrangeiras que não funcionam no ecossistema de telecomunicações e consumo de Angola.',
        caseStudy: {
          company: 'Imobiliária Luanda Lar (Hipotético)',
          sector: 'Imobiliário',
          location: 'Miramar, Luanda',
          situation: 'Gastava muito tempo no Twitter/X onde o seu cliente de luxo não estava presente.',
          solution: 'Mudança táctica para eventos fechados de degustação de vinhos associados a anúncios directos no LinkedIn e Meta Ads segmentados para decisores.',
          results: 'Venda de 3 apartamentos de alto padrão em 60 dias.'
        },
        recommendedTools: [{ name: 'Matriz Ansoff', category: 'Planeamento Estratégico', description: 'Para identificar vias de crescimento.' }],
        practicalExercise: {
          title: 'Definição de 1 Estratégia Central e 4 Tácticas de Apoio',
          prompt: 'Escolha uma empresa e redija uma directriz estratégica de posicionamento acompanhada de 4 acções tácticas detalhadas.',
          expectedDeliverables: ['Documento com estratégia central e cronograma das 4 tácticas']
        },
        reviewQuestions: [{ question: 'O que acontece quando uma empresa executa excelentes tácticas sem uma estratégia definida?', explanation: 'A empresa gera picos pontuais de visibilidade, mas queima recursos sem construir vantagem competitiva duradoura nem rentabilidade consistente.' }],
        summary: 'Táctica sem estratégia é o ruído que antecede a derrota.',
        resources: ['Sun Tzu para Gestores de Marketing'],
        isCompleted: false
      },
      {
        id: 'm2-l4',
        moduleId: 2,
        order: 4,
        title: '4. Planeamento de campanhas',
        durationMinutes: 45,
        objectives: ['Estruturar o plano de lançamento de uma campanha integrada', 'Definir o conceito criativo, briefing e alinhamento de equipa'],
        introduction: 'Uma campanha de marketing bem planeada maximiza o impacto emocional e as vendas durante uma janela de tempo definida.',
        theory: 'Fases da Campanha: Pré-lançamento (geração de expectativa e lista de espera), Lançamento (pico de tráfego e abertura da oferta), Sustentação (prova social, quebra de objecções) e Fecho (escassez e urgência).',
        fundamentalConcepts: [{ term: 'Conceito Criativo', definition: 'A grande ideia central que unifica todas as peças visuais e mensagens da campanha.' }],
        practicalExamples: ['Campanha de Black Friday com contagem decrescente no WhatsApp e ofertas exclusivas por lotes.'],
        angolaContext: 'Aproveitar momentos culturais angolanos e garantir que a logística de entrega dê resposta aos picos de encomendas da campanha.',
        caseStudy: {
          company: 'Supermercado Fresco & Pronto (Hipotético)',
          sector: 'Retalho Alimentar',
          location: 'Morro Bento, Luanda',
          situation: 'Vendas baixas na última semana do mês.',
          solution: 'Lançou a campanha mensal "Semana do Salário Inteligente" com ofertas especiais de bens de primeira necessidade anunciadas via catálogo WhatsApp.',
          results: 'Aumento de 85% nas vendas nos últimos 5 dias de cada mês.'
        },
        recommendedTools: [{ name: 'Asana / ClickUp', category: 'Gestão de Projectos', description: 'Para controlo de prazos e entregáveis da campanha.' }],
        practicalExercise: {
          title: 'Briefing de Campanha de 30 Dias',
          prompt: 'Elabore o briefing completo de uma campanha de lançamento de um novo serviço, detalhando tema, canais, peças criativas e metas.',
          expectedDeliverables: ['Ficha de briefing de campanha pronta para produção criativa']
        },
        reviewQuestions: [{ question: 'Qual a finalidade da fase de pré-lançamento numa campanha?', explanation: 'Aquecer o público, construir antecipação e gerar leads qualificados antes de abrir oficialmente as vendas.' }],
        summary: 'Grandes campanhas nascem de planeamento rigoroso e conceitos criativos fortes.',
        resources: ['Guia de Campanhas Integradas da Ogilvy'],
        isCompleted: false
      },
      {
        id: 'm2-l5',
        moduleId: 2,
        order: 5,
        title: '5. Gestão de orçamento de marketing',
        durationMinutes: 50,
        objectives: ['Calcular o orçamento anual e mensal de marketing com base em receitas esperadas', 'Distribuir verbas entre tráfego pago, produção de conteúdo, ferramentas e pessoas'],
        introduction: 'Gerir orçamento não é gastar o que sobra, mas investir quantias precisas para comprar receitas futuras com lucro.',
        theory: 'Modelos de orçamentação: Percentagem da Receita Bruta (normalmente 5% a 15% conforme a fase da empresa), Base Zero (cada custo tem de ser justificado do zero), ou Orientado a Metas (quanto preciso investir para atingir X vendas sabendo o CAC histórico). Regra 70-20-10: 70% em canais comprovados, 20% em canais em crescimento, 10% em experimentação inovadora.',
        fundamentalConcepts: [
          { term: 'Alocação 70-20-10', definition: 'Metodologia de distribuição de risco em orçamentos de inovação e marketing.' },
          { term: 'Burn Rate de Tráfego', definition: 'Velocidade diária de consumo da verba de publicidade nos gestores de anúncios.' }
        ],
        practicalExamples: ['Distribuir um orçamento mensal de 2.000.000 AOA: 1.200.000 AOA em Meta Ads e Google Ads, 400.000 AOA em criativos/vídeos, 200.000 AOA em ferramentas de software e 200.000 AOA em testes experimentais no TikTok.'],
        angolaContext: 'Em Angola, deve prever-se a taxa cambial e eventuais taxas bancárias sobre pagamentos de cartões de crédito em moeda estrangeira (USD/EUR) ao pagar aos gigantes tecnológicos.',
        caseStudy: {
          company: 'Escola de Condução Rápida Luanda (Hipotético)',
          sector: 'Formação',
          location: 'Cazenga / Sambizanga',
          situation: 'Ficava sem verba de anúncios a meio do mês por falta de controlo diário.',
          solution: 'Implementou folha de controlo de orçamento diário e redistribuição por desempenho.',
          results: 'Custo por aluno inscrito caiu 35% e manteve presença contínua durante todos os 30 dias do mês.'
        },
        recommendedTools: [{ name: 'Planilha Orçamental de Marketing AMD', category: 'Finanças', description: 'Planilha automatizada com fórmulas em AOA.' }],
        practicalExercise: {
          title: 'Simulação de Orçamento Mensal de 1.500.000 AOA',
          prompt: 'Distribua 1.500.000 AOA entre os pilares de tráfego, produção, ferramentas e contingência, justificando cada percentagem.',
          expectedDeliverables: ['Tabela orçamental detalhada com justificações de alocação']
        },
        reviewQuestions: [{ question: 'Como a regra 70-20-10 protege o orçamento da empresa?', explanation: 'Garante que a maior fatia do investimento vai para o que comprovadamente traz retorno, ao mesmo tempo em que estimula a inovação sem pôr o negócio em risco.' }],
        summary: 'Gestão orçamental é a ponte que une marketing e directoria financeira.',
        resources: ['Guia de Planeamento Financeiro para CMOs'],
        isCompleted: false
      },
      {
        id: 'm2-l6',
        moduleId: 2,
        order: 6,
        title: '6. Planeamento editorial',
        durationMinutes: 45,
        objectives: ['Construir uma grelha de conteúdo mensal consistente', 'Equilibrar pilares de conteúdo: autoridade, conexão, educação e vendas'],
        introduction: 'Publicar sem planeamento editorial gera exaustão na equipa e confusão no público.',
        theory: 'Os 4 Pilares de Conteúdo Essenciais: 1. Educação (ensina algo útil e gera valor prévio); 2. Autoridade (mostra resultados, bastidores, prémios e certificados); 3. Conexão/Humanização (história dos fundadores, cultura da equipa); 4. Conversão/Venda Directa (oferta com CTA claro).',
        fundamentalConcepts: [{ term: 'Matriz Editorial', definition: 'Tabela de planeamento com data, canal, formato, pilar e chamada para acção de cada publicação.' }],
        practicalExamples: ['Programar 3 posts por semana: Segunda (Educação com carrossel), Quarta (Prova social em vídeo de cliente satisfeito), Sexta (Oferta de produto com link para WhatsApp).'],
        angolaContext: 'Em Angola, formatos em carrossel e vídeos curtos no formato Reels com áudios em alta têm excelente taxa de partilha orgânica.',
        caseStudy: {
          company: 'Clínica Veterinária Amigo Fiel (Hipotético)',
          sector: 'Serviços Veterinários',
          location: 'Camama, Luanda',
          situation: 'Publicava apenas "visite-nos" e tinha baixo alcance.',
          solution: 'Criou linha editorial com dicas de cuidados contra carrapatos na época das chuvas em Luanda e vídeos curtos de pacientes a receber alta.',
          results: 'Triplicou os seguidores locais e aumentou os agendamentos de vacinação em 80%.'
        },
        recommendedTools: [{ name: 'Notion Content Calendar', category: 'Produtividade', description: 'Para gestão visual de pautas.' }],
        practicalExercise: {
          title: 'Construção da Grelha Editorial de 1 Mês (12 Posts)',
          prompt: 'Desenhe um calendário com 12 publicações equilibrando os 4 pilares de conteúdo para uma empresa local.',
          expectedDeliverables: ['Grelha com títulos, formatos, datas e CTAs definidos']
        },
        reviewQuestions: [{ question: 'Qual o risco de uma marca publicar 100% do tempo posts com ofertas e preços?', explanation: 'O público perde o interesse, o engajamento desaba e a marca passa a ser percebida como spammer em vez de autoridade no assunto.' }],
        summary: 'Consistência e estratégia editorial constroem audiências fiéis e compradores recorrentes.',
        resources: ['Template de Calendário Editorial Profissional'],
        isCompleted: false
      },
      {
        id: 'm2-l7',
        moduleId: 2,
        order: 7,
        title: '7. Estratégia de conteúdos',
        durationMinutes: 45,
        objectives: ['Implementar a metodologia de Conteúdo Pilar e Microconteúdos', 'Reaproveitar materiais longos em dezenas de formatos nativos'],
        introduction: 'Não é preciso criar 20 conteúdos novos por dia; é preciso saber desdobrar 1 grande conteúdo em múltiplos formatos inteligentes.',
        theory: 'Modelo do GaryVee / Hub-and-Spoke: Produza 1 conteúdo pilar aprofundado (ex: um podcast de 30 minutos, uma palestra gravada ou um artigo extenso). Depois, extraia dele: 5 cortes em vídeo (Reels/TikTok), 3 carrosséis para o Instagram, 4 quotes para o LinkedIn e 1 resumo para o WhatsApp.',
        fundamentalConcepts: [{ term: 'Content Repurposing (Reaproveitamento de Conteúdo)', definition: 'Técnica de transformar um conteúdo original em múltiplos formatos para diferentes plataformas.' }],
        practicalExamples: ['Gravar uma aula ao vivo e transformá-la em 6 vídeos de 60 segundos com legendas dinâmicas para redes sociais.'],
        angolaContext: 'Vídeos curtos consomem menos dados e são amplamente consumidos no Facebook e TikTok por utilizadores angolanos.',
        caseStudy: {
          company: 'Consultor Jurídico Dr. Paulo (Hipotético)',
          sector: 'Direito Comercial',
          location: 'Luanda',
          situation: 'Não tinha tempo para produzir conteúdo diariamente.',
          solution: 'Gravava 1 sessão mensal de perguntas e respostas de 40 minutos e a agência extraía 16 vídeos curtos para o mês inteiro.',
          results: 'Ganhou notoriedade nacional e atraiu clientes corporativos para o seu escritório.'
        },
        recommendedTools: [{ name: 'CapCut / Opus Clip', category: 'Edição de Vídeo', description: 'Para cortes automáticos com legendas.' }],
        practicalExercise: {
          title: 'Plano de Desdobramento de 1 Conteúdo Pilar',
          prompt: 'Pegue num tema técnico da sua área e descreva como o desdobraria em 5 formatos diferentes para redes sociais.',
          expectedDeliverables: ['Matriz de desdobramento com títulos e canais específicos']
        },
        reviewQuestions: [{ question: 'Qual a principal vantagem da metodologia de conteúdo pilar?', explanation: 'Permite manter alta presença digital e consistência sem exigir que o especialista passe horas diárias a gravar ou redigir do zero.' }],
        summary: 'Trabalhe de forma inteligente: produza menos em quantidade e maximize a distribuição.',
        resources: ['Framework de Conteúdo Escalonável'],
        isCompleted: false
      },
      {
        id: 'm2-l8',
        moduleId: 2,
        order: 8,
        title: '8. Copywriting profissional',
        durationMinutes: 55,
        objectives: ['Dominar os modelos AIDA, PAS e BAB para redacção persuasiva', 'Escrever títulos magnéticos e chamadas para acção (CTAs) de alta conversão'],
        introduction: 'Copywriting é a arte e ciência de usar palavras escritas para levar uma pessoa a tomar uma acção comercial imediata.',
        theory: 'Frameworks Clássicos: 1. AIDA: Atenção (título chocante ou quebra de padrão), Interesse (factos relevantes), Desejo (benefícios e transformação), Acção (o que fazer agora); 2. PAS: Problema (dor real), Agitação (consequência de não resolver), Solução (o seu produto); 3. Gatilhos Mentais: Prova social, Escassez, Urgência, Autoridade e Reciprocidade.',
        fundamentalConcepts: [
          { term: 'AIDA', definition: 'Acrónimo para Atenção, Interesse, Desejo e Acção - a estrutura mais famosa de copywriting.' },
          { term: 'CTA (Call to Action)', definition: 'Instrução clara dada ao leitor sobre o próximo passo que deve tomar (ex: "Clique aqui para falar com um consultor").' }
        ],
        practicalExamples: ['Título Fraco: "Temos sapatos novos". Título Persuasivo: "O sapato executivo mais confortável de Luanda para quem passa 8 horas de pé no trabalho".'],
        angolaContext: 'Em Angola, o copywriting deve ser autêntico, cordial e directo. Termos excessivamente americanizados soam artificiais; uma linguagem calorosa e profissional converte melhor.',
        caseStudy: {
          company: 'Empresa de Limpezas BrilhoTotal (Hipotético)',
          sector: 'Serviços Domésticos e Empresariais',
          location: 'Talatona / Kilamba',
          situation: 'Anúncios diziam apenas "Fazemos limpezas de sofás a preços justos" com pouca resposta.',
          solution: 'Novo copy usando o framework PAS: destacou ácaros e alergias infantis provocadas por poeira acumulada na época de cacimbo em Luanda, apresentando a higienização profunda como protecção da saúde da família.',
          results: 'As marcações de higienização de sofás esgotaram a agenda da equipa para 3 semanas.'
        },
        recommendedTools: [{ name: 'Guia de Gatilhos Mentais AMD', category: 'E-book', description: 'Compilação de modelos de títulos e copys.' }],
        practicalExercise: {
          title: 'Redacção de 2 Anúncios Completos (AIDA e PAS)',
          prompt: 'Escreva dois anúncios de texto com no máximo 150 palavras cada para um produto angolano, aplicando AIDA num e PAS no outro.',
          expectedDeliverables: ['2 textos de copy estruturados com indicações de gatilhos utilizados']
        },
        reviewQuestions: [{ question: 'Qual o papel primordial do título numa peça de copywriting?', explanation: 'A única missão do título é fazer com que a pessoa leia a primeira frase do texto; se o título falha, todo o restante texto é ignorado.' }],
        summary: 'Bons copywriters não vendem produtos; vendem soluções para dores e aspirações humanas.',
        resources: ['Livro: The Boron Letters de Gary Halbert'],
        isCompleted: false
      },
      {
        id: 'm2-l9',
        moduleId: 2,
        order: 9,
        title: '9. Gestão de comunidades',
        durationMinutes: 45,
        objectives: ['Criar e nutrir comunidades de clientes no WhatsApp e Telegram', 'Gerir crises de atendimento e comentários negativos com profissionalismo'],
        introduction: 'Audiências apenas assistem; comunidades participam, defendem a marca e compram repetidamente.',
        theory: 'Princípios de gestão de comunidade: Regras claras de moderação, recompensas para membros mais activos, partilha de conteúdos antecipados e canal directo de escuta activa. Protocolo de crise: Nunca apagar comentários razoáveis, responder publicamente com empatia e mover o contacto de resolução para canal privado.',
        fundamentalConcepts: [{ term: 'NPS (Net Promoter Score)', definition: 'Métrica de -100 a +100 que afere a lealdade e probabilidade de recomendação da empresa pelos clientes.' }],
        practicalExamples: ['Grupo VIP de clientes de uma loja com aviso antecipado de novas colecções 24 horas antes do lançamento geral.'],
        angolaContext: 'Em Angola, grupos de WhatsApp e canais de transmissão têm taxas de abertura superiores a 85%, superando largamente qualquer taxa de email marketing.',
        caseStudy: {
          company: 'Restaurante Sabor da Terra (Hipotético)',
          sector: 'Gastronomia',
          location: 'Ilha de Luanda',
          situation: 'Forte concorrência aos fins de semana e mesas vazias às terças e quartas.',
          solution: 'Criou o "Clube Gastronómico no WhatsApp" com benefícios exclusivos e degustações a meio da semana para membros.',
          results: 'Ocupação média às terças e quartas subiu de 25% para 78%.'
        },
        recommendedTools: [{ name: 'WhatsApp Business Comunidades', category: 'Canais Directos', description: 'Para gestão de até 5.000 membros.' }],
        practicalExercise: {
          title: 'Manual de Moderação e Resposta a Crises',
          prompt: 'Crie um protocolo com 3 passos para responder a uma reclamação grave de um cliente insatisfeito publicada publicamente no Instagram.',
          expectedDeliverables: ['Guia de 3 passos com modelos de mensagens de resposta humanizada']
        },
        reviewQuestions: [{ question: 'Por que apagar reclamações legítimas de clientes nas redes sociais é prejudicial para a marca?', explanation: 'Porque destrói a transparência, enfurece ainda mais o cliente e muitas vezes provoca um boicote ampliado em outros canais.' }],
        summary: 'Comunidades engajadas são o maior escudo de protecção e motor de vendas de qualquer marca.',
        resources: ['Guia de Community Management'],
        isCompleted: false
      },
      {
        id: 'm2-l10',
        moduleId: 2,
        order: 10,
        title: '10. Gestão de clientes e apresentação de resultados',
        durationMinutes: 50,
        objectives: ['Conduzir reuniões mensais de prestação de contas com directores e clientes', 'Elaborar relatórios visuais que justificam a renovação de contratos'],
        introduction: 'O melhor trabalho de marketing do mundo perde o valor se você não souber comunicar os resultados de forma clara a quem decide os pagamentos.',
        theory: 'Regra de ouro das reuniões executivas: Comece pelo fim (quanto faturámos, quantos clientes gerámos, quanto gastámos). Deixe detalhes operacionais para os anexos. Apresente sempre 3 blocos: 1. Resultados Conquistados vs Metas; 2. Aprendizados e Testes Executados; 3. Plano de Acção para o Próximo Mês.',
        fundamentalConcepts: [{ term: 'Retenção de Contratos (Churn Rate)', definition: 'Percentagem de clientes que cancelam serviços num determinado período.' }],
        practicalExamples: ['Apresentar um slide comparativo: Investimento de 800.000 AOA -> Retorno em Vendas de 4.200.000 AOA -> ROAS de 5,2x.'],
        angolaContext: 'Em Angola, valorize a relação humana, pontualidade nas reuniões corporativas e transparência sobre facturas de anúncios emitidas pelas plataformas.',
        caseStudy: {
          company: 'Consultoria Digital Avançar (Hipotético)',
          sector: 'Consultoria',
          location: 'Luanda',
          situation: 'Perdia clientes após 3 meses por não demonstrar claramente o valor entregue.',
          solution: 'Instituiu reuniões mensais estruturadas com relatório em PDF de 4 páginas focado em vendas e pipeline comercial.',
          results: 'O tempo médio de retenção dos clientes aumentou de 3 para 14 meses.'
        },
        recommendedTools: [{ name: 'Looker Studio / PowerPoint Executivo', category: 'Apresentações', description: 'Para dashboards limpos e impactantes.' }],
        practicalExercise: {
          title: 'Estruturação de Slide Deck de Prestação de Contas',
          prompt: 'Desenhe o roteiro de 5 slides para uma reunião de apresentação de resultados trimestrais ao Conselho de Administração.',
          expectedDeliverables: ['Estrutura detalhada de 5 slides com títulos e dados-chave']
        },
        reviewQuestions: [{ question: 'Por que a primeira informação apresentada numa reunião com a directoria deve ser o retorno financeiro?', explanation: 'Porque é a preocupação prioritária dos decisores; começar por métricas de cliques ou impressões gera impaciência e desinteresse.' }],
        summary: 'Saber reportar com precisão é o que separa consultores amadores de gestores estratégicos bem remunerados.',
        resources: ['Template de Relatório Mensal de Resultados da Academia'],
        isCompleted: false
      }
    ],
    assessment: {
      id: 'eval-m2',
      moduleId: 2,
      title: 'Exame de Avaliação do Módulo 2 — Planeamento e Gestão',
      timeLimitMinutes: 30,
      questions: [
        {
          id: 'q2-1',
          question: 'Na definição de metas SMART, o que representa a letra "M"?',
          options: ['Motivacional', 'Mensurável', 'Monetária', 'Moderna'],
          correctAnswerIndex: 1,
          explanation: 'M significa Mensurável (Measurable), garantindo que a meta possui um indicador numérico verificável.'
        },
        {
          id: 'q2-2',
          question: 'De acordo com a regra orçamental 70-20-10, qual percentagem deve ser alocada a canais e campanhas que já provaram dar retorno consistente?',
          options: ['10%', '20%', '50%', '70%'],
          correctAnswerIndex: 3,
          explanation: '70% do orçamento deve ser protegido e alocado aos canais já comprovados e previsíveis do negócio.'
        },
        {
          id: 'q2-3',
          question: 'Qual é a sequência correcta das quatro etapas do framework clássico de copywriting AIDA?',
          options: ['Ambição, Inspiração, Decisão, Atitude', 'Atenção, Interesse, Desejo, Acção', 'Alcance, Interação, Dados, Análise', 'Autoridade, Imagem, Demanda, Avaliação'],
          correctAnswerIndex: 1,
          explanation: 'AIDA significa Atenção, Interesse, Desejo e Acção.'
        },
        {
          id: 'q2-4',
          question: 'Qual é a primeira recomendação ao lidar com uma reclamação pública séria de um cliente insatisfeito nas redes sociais?',
          options: [
            'Apagar o comentário de imediato para não queimar a imagem da empresa',
            'Bloquear o perfil do cliente',
            'Responder publicamente com cortesia e empatia e direcionar a resolução para um canal privado (ex: WhatsApp)',
            'Discutir publicamente nos comentários provando que a empresa está com a razão'
          ],
          correctAnswerIndex: 2,
          explanation: 'Demonstrar atenção pública com cortesia preserva a reputação da marca e resolver no privado protege a privacidade dos dados do cliente.'
        },
        {
          id: 'q2-5',
          question: 'O que caracteriza um "conteúdo pilar" na metodologia de reaproveitamento de conteúdos?',
          options: [
            'Uma imagem rápida criada num aplicativo de celular sem texto',
            'Um conteúdo denso e aprofundado do qual se podem extrair dezenas de microconteúdos para múltiplas redes',
            'Um anúncio pago de promoção com desconto de 50%',
            'Uma publicação temporária de 24 horas nos Stories'
          ],
          correctAnswerIndex: 1,
          explanation: 'Conteúdo pilar é um material rico e aprofundado (vídeo longo, podcast, guia) que serve de base para vários formatos menores.'
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Módulo 3 — Publicidade e Aquisição de Clientes',
    subtitle: 'Meta Ads, Google Ads, segmentação, escala, testes A/B e ROAS',
    description: 'Domine as maiores plataformas de publicidade paga do mundo. Aprenda a estruturar campanhas de alto retorno no Facebook, Instagram e Google, controlar CPL, CAC e escalar investimentos com segurança.',
    lessonsCount: 12,
    durationWeeks: 4,
    durationHours: 48,
    status: 'disponivel',
    progressPercent: 0,
    assessmentScore: undefined,
    gradient: 'from-amber-600 to-orange-700',
    iconName: 'Zap',
    lessons: [
      { id: 'm3-l1', moduleId: 3, order: 1, title: '1. Introdução ao tráfego pago', durationMinutes: 45, objectives: ['Entender o ecossistema de leilão de anúncios digitais'], introduction: 'Tráfego pago é a forma mais rápida e previsível de colocar a sua oferta à frente de pessoas com intenção de compra.', theory: 'Noções fundamentais de leilão de mídia, CPM (custo por mil impressões), CTR e taxa de lances.', fundamentalConcepts: [{ term: 'Leilão de Mídia', definition: 'Sistema algorítmico que decide em fracções de segundo qual anúncio será exibido.' }], practicalExamples: ['Como funciona a concorrência por atenção no feed.'], angolaContext: 'Diferenças de CPM em Angola face à Europa e América Latina (o CPM em Angola costuma ser mais baixo, permitindo grande alcance a menor custo).', caseStudy: { company: 'Sapataria LuandaModa (Hipotético)', sector: 'Retalho', location: 'Mutamba', situation: 'Dependia apenas de posts orgânicos.', solution: 'Investiu 50.000 AOA em testes de tráfego pago.', results: 'Alcançou 60.000 pessoas e gerou 80 conversas no WhatsApp.' }, recommendedTools: [{ name: 'Meta Business Suite', category: 'Gestor', description: 'Plataforma oficial.' }], practicalExercise: { title: 'Criação de Conta de Anúncios Profissional', prompt: 'Configure o Meta Business Manager com segurança de dois factores.', expectedDeliverables: ['Checklist de segurança e pixel instalado'] }, reviewQuestions: [{ question: 'Por que o tráfego orgânico não é suficiente para empresas que precisam de previsibilidade de vendas?', explanation: 'Porque o alcance orgânico varia com os algoritmos e não garante volume escalável de leads qualificados.' }], summary: 'Tráfego pago compra tempo e atenção imediata.', resources: ['Guia de Políticas de Publicidade Meta'], isCompleted: false },
      { id: 'm3-l2', moduleId: 3, order: 2, title: '2. Meta Ads (Fundamentos do Ecossistema)', durationMinutes: 50, objectives: ['Dominar o gestor de anúncios Meta Business Manager'], introduction: 'Nunca clique no botão "Impulsionar publicação" sem uma estratégia estruturada no Gestor de Anúncios.', theory: 'Hierarquia do Meta Ads: Campanha (Objectivo), Conjunto de Anúncios (Público, Posicionamentos, Orçamento) e Anúncios (Criativos, Copies, Destinos).', fundamentalConcepts: [{ term: 'Pixel da Meta / API de Conversões', definition: 'Código de rastreamento de comportamentos e eventos de compra dos utilizadores.' }], practicalExamples: ['Estrutura profissional de 1 campanha com 3 conjuntos e 6 anúncios.'], angolaContext: 'Configuração de campanhas optimizadas para conversas no WhatsApp.', caseStudy: { company: 'Auto Peças Viana (Hipotético)', sector: 'Automóvel', location: 'Viana', situation: 'Gastava em posts impulsionados sem saber quem comprava.', solution: 'Migrou para o Gestor de Anúncios com campanha de mensagens orientada para WhatsApp.', results: 'Redução de 45% no custo por contacto gerado.' }, recommendedTools: [{ name: 'Meta Ads Manager', category: 'Plataforma', description: 'Gestor profissional.' }], practicalExercise: { title: 'Mapeamento de Estrutura de Campanha', prompt: 'Desenhe a hierarquia completa de uma campanha no papel antes de subir na plataforma.', expectedDeliverables: ['Diagrama Campanha > Conjuntos > Anúncios'] }, reviewQuestions: [{ question: 'Qual a diferença entre o botão impulsionar e o gestor de anúncios?', explanation: 'O gestor de anúncios oferece dezenas de opções avançadas de segmentação, testes de criativos, pixel e lances que o botão impulsionar esconde.' }], summary: 'O Meta Ads Manager é a ferramenta mãe do tráfego em redes sociais.', resources: ['Meta Blueprint Certification'], isCompleted: false },
      { id: 'm3-l3', moduleId: 3, order: 3, title: '3. Facebook Ads e Instagram Ads', durationMinutes: 45, objectives: ['Adaptar criativos nativos para cada formato (Feed, Stories, Reels)'], introduction: 'Anúncios que parecem anúncios são ignorados; anúncios que parecem conteúdo orgânico convertem.', theory: 'Formatos verticais 9:16 para Reels e Stories, formatos 1:1 e 4:5 para o feed, técnicas de gancho nos primeiros 3 segundos.', fundamentalConcepts: [{ term: 'Hook Rate (Taxa de Retenção Inicial)', definition: 'Percentagem de pessoas que assistem aos primeiros 3 segundos do vídeo.' }], practicalExamples: ['Criar um vídeo de demonstração gravado com telemóvel num restaurante.'], angolaContext: 'Consumidores angolanos reagem com muito mais calor a criativos com sotaque e rostos locais do que a bancos de imagens internacionais.', caseStudy: { company: 'Pizzaria Kilamba Pizza (Hipotético)', sector: 'Restauração', location: 'Kilamba', situation: 'Usava fotos de banco de imagens da Europa.', solution: 'Gravou os queijos a derreter na cozinha local com a equipa angolana a falar alegremente.', results: 'Aumento de 300% nas partilhas e pedidos no fim de semana.' }, recommendedTools: [{ name: 'Canva Pro / CapCut', category: 'Criativos', description: 'Design rápido.' }], practicalExercise: { title: 'Roteiro de Anúncio de 30 Segundos', prompt: 'Escreva o roteiro de um vídeo de 30 segundos com gancho de 3 segundos, problema, solução e CTA.', expectedDeliverables: ['Guião técnico com indicações visuais e de áudio'] }, reviewQuestions: [{ question: 'Por que os primeiros 3 segundos de um vídeo são determinantes no tráfego pago?', explanation: 'Porque o utilizador médio faz scroll rapidamente; se o gancho inicial não prender a atenção, ele nunca verá a oferta.' }], summary: 'Criativo é o novo target: anúncios atraentes vencem qualquer leilão.', resources: ['Manual de Criativos de Alta Conversão'], isCompleted: false },
      { id: 'm3-l4', moduleId: 3, order: 4, title: '4. Segmentação de públicos', durationMinutes: 45, objectives: ['Combinar Públicos Frios, Públicos Personalizados e Públicos Semelhantes (Lookalike)'], introduction: 'Anunciar para as pessoas erradas queima orçamento em horas.', theory: 'Públicos Core (interesses e dados demográficos), Custom Audiences (quem já visitou o perfil, interagiu com o Instagram, lista de contactos do WhatsApp) e Lookalike (públicos com perfil comportamental idêntico aos melhores compradores).', fundamentalConcepts: [{ term: 'Lookalike (Público Semelhante)', definition: 'Algoritmo que encontra novas pessoas com perfil estatisticamente idêntico à sua lista de clientes.' }], practicalExamples: ['Criar um público semelhante de 1% a partir dos números de telefone de quem comprou nos últimos 6 meses.'], angolaContext: 'Em Angola, os públicos personalizados de interação com Instagram e visualização de vídeos funcionam com alta precisão.', caseStudy: { company: 'Boutique Talatona Glam (Hipotético)', sector: 'Moda', location: 'Talatona', situation: 'Custos subiam ao anunciar para interesses genéricos.', solution: 'Criou público Lookalike a partir de 500 clientes habituais da loja.', results: 'Taxa de conversão de compras subiu 2,4x.' }, recommendedTools: [{ name: 'Meta Audience Builder', category: 'Gestão de Públicos', description: 'Criação de segmentos.' }], practicalExercise: { title: 'Construção da Matriz de Públicos da Conta', prompt: 'Defina 3 públicos frios e 3 públicos quentes para o seu nicho.', expectedDeliverables: ['Documento com definições precisas de públicos'] }, reviewQuestions: [{ question: 'Por que o público Lookalike de compradores costuma superar o público de interesses genéricos?', explanation: 'Porque é baseado no comportamento real de quem já gastou dinheiro na empresa, e não em meras páginas que a pessoa curtiu casualmente.' }], summary: 'Fale com públicos qualificados e veja o custo por lead despencar.', resources: ['Guia Avançado de Segmentação Meta'], isCompleted: false },
      { id: 'm3-l5', moduleId: 3, order: 5, title: '5. Estrutura de campanhas', durationMinutes: 45, objectives: ['Arquitetar contas de anúncios organizadas e sustentáveis'], introduction: 'A organização da conta evita sobreposição de leilões e desperdício de dinheiro.', theory: 'Estrutura CBO (Advantage+ Budget) vs ABO (Orçamento ao nível do conjunto), nomenclatura padronizada de campanhas, distribuição entre topo, meio e fundo de funil.', fundamentalConcepts: [{ term: 'Sobreposição de Públicos (Auction Overlap)', definition: 'Quando os seus próprios conjuntos de anúncios competem entre si no leilão da Meta.' }], practicalExamples: ['Nomenclatura limpa: [AMD]_[CONV]_[WHATSAPP]_[PUBL-LOOKALIKE-1%]_[CRIATIVO-01].'], angolaContext: 'Gerir orçamentos mais reduzidos agrupando conjuntos para evitar dispersão de verba.', caseStudy: { company: 'Agência de Turismo Benguela Tours (Hipotético)', sector: 'Turismo', location: 'Benguela', situation: 'Tinha 15 campanhas ativas gastando 500 AOA cada sem gerar tração.', solution: 'Consolidou em 2 campanhas estruturadas com orçamento centralizado.', results: 'Conquistou estabilidade de leads diários e triplicou os pacotes de viagem vendidos.' }, recommendedTools: [{ name: 'Planilha de Nomenclatura', category: 'Organização', description: 'Padrão para agências.' }], practicalExercise: { title: 'Plano de Nomenclatura e Estrutura de Conta', prompt: 'Crie a tabela de nomenclatura para 10 campanhas de um e-commerce.', expectedDeliverables: ['Manual de nomenclatura e arquitetura de conta'] }, reviewQuestions: [{ question: 'O que é sobreposição de públicos e qual o seu prejuízo financeiro?', explanation: 'É quando você coloca dois conjuntos a disputar o mesmo público, fazendo a empresa competir contra si mesma e encarecendo o CPM.' }], summary: 'Organização e método são o alicerce da escala.', resources: ['Manual de Arquitetura de Contas'], isCompleted: false },
      { id: 'm3-l6', moduleId: 3, order: 6, title: '6. Captação de leads', durationMinutes: 50, objectives: ['Criar formulários instantâneos da Meta e páginas de captura de alta taxa de conversão'], introduction: 'Leads são o oxigénio de equipas de vendas ativas.', theory: 'Formulários Instantâneos (Instant Forms/Lead Ads) vs Páginas Externas (Landing Pages). Estratégias de qualificação: adicionar perguntas de filtro para afastar curiosos.', fundamentalConcepts: [{ term: 'Lead Scoring', definition: 'Pontuação atribuída a cada contacto para priorizar os clientes com maior urgência e capacidade financeira.' }], practicalExamples: ['Perguntar no formulário: "Qual o seu orçamento para esta reforma?" com opções claras.'], angolaContext: 'Em Angola, os Instant Forms do Facebook funcionam extremamente bem em redes móveis com sinal instável.', caseStudy: { company: 'Faculdade Futuro Luanda (Hipotético)', sector: 'Ensino Superior', location: 'Luanda', situation: 'Recebia muitos contactos sem ensino médio concluído.', solution: 'Adicionou pergunta eliminatória no formulário do Facebook.', results: 'Equipa de admissões poupou 50% do tempo e fechou 30% mais matrículas.' }, recommendedTools: [{ name: 'Meta Instant Forms', category: 'Geração de Leads', description: 'Captação nativa rápida.' }], practicalExercise: { title: 'Construção de Formulário com 2 Perguntas de Qualificação', prompt: 'Desenhe as perguntas de triagem para uma empresa de seguros ou imobiliária.', expectedDeliverables: ['Formulário com 2 perguntas de filtro e tela de agradecimento com botão de WhatsApp'] }, reviewQuestions: [{ question: 'Por que às vezes é vantajoso aumentar o número de campos num formulário de leads?', explanation: 'Para filtrar curiosos e entregar à equipa de vendas apenas leads altamente qualificados e com interesse genuíno.' }], summary: 'Mais vale 20 leads qualificados do que 200 contactos que não atendem o telefone.', resources: ['Best Practices Meta Lead Ads'], isCompleted: false },
      { id: 'm3-l7', moduleId: 3, order: 7, title: '7. Remarketing', durationMinutes: 45, objectives: ['Reimpactar utilizadores que demonstraram interesse prévio sem finalizar a compra'], introduction: 'Mais de 95% das pessoas não compram na primeira visita. O dinheiro está no remarketing.', theory: 'Janelas de conversão (3 dias, 7 dias, 14 dias, 30 dias), quebra de objecções no remarketing (depoimentos de clientes, garantia, demonstração de segurança), ofertas de última oportunidade.', fundamentalConcepts: [{ term: 'Remarketing / Retargeting', definition: 'Técnica de exibir anúncios específicos para quem já interagiu com a marca anteriormente.' }], practicalExamples: ['Exibir anúncio com vídeo de um cliente a receber a encomenda em Luanda para quem colocou produto no carrinho e não pagou.'], angolaContext: 'Remarketing para quem conversou no WhatsApp nos últimos 30 dias mas não concluiu o pagamento por Multicaixa Express.', caseStudy: { company: 'Loja de Informática ByteLuanda (Hipotético)', sector: 'Tecnologia', location: 'Talatona', situation: 'Muitos orçamentos de computadores ficavam parados.', solution: 'Campanha de remarketing de 7 dias com depoimentos de empresas atendidas e garantia de assistência técnica no local.', results: 'Recuperação de 28% dos orçamentos abandonados.' }, recommendedTools: [{ name: 'Meta Custom Audiences', category: 'Remarketing', description: 'Criação de listas quentes.' }], practicalExercise: { title: 'Estratégia de Remarketing em 3 Fases', prompt: 'Desenhe as mensagens de remarketing para os dias 1-3, 4-7 e 8-14 após o primeiro contacto do cliente.', expectedDeliverables: ['Plano de remarketing com criativos e ofertas específicas'] }, reviewQuestions: [{ question: 'Por que o anúncio de remarketing deve ser diferente do anúncio de primeiro contacto?', explanation: 'Porque a pessoa já conhece a oferta; ela precisa de ouvir respostas para as suas dúvidas, garantias ou uma oferta mais atraente para tomar a decisão.' }], summary: 'O remarketing tem o maior ROAS de qualquer conta de tráfego.', resources: ['Guia de Remarketing de Alto Impacto'], isCompleted: false },
      { id: 'm3-l8', moduleId: 3, order: 8, title: '8. Google Ads (Rede de Pesquisa)', durationMinutes: 50, objectives: ['Capturar clientes no exacto momento em que pesquisam com intenção de compra imediata'], introduction: 'No Meta Ads você encontra o cliente; no Google Ads é o cliente que encontra você.', theory: 'Rede de Pesquisa, correspondência de palavras-chave (Exata, Frase, Ampla), palavras-chave negativas (essencial para poupar verba), Índice de Qualidade (Quality Score) e Ad Rank.', fundamentalConcepts: [{ term: 'Quality Score (Índice de Qualidade)', definition: 'Nota de 1 a 10 atribuída pelo Google que avalia a relevância do anúncio e da página de destino.' }], practicalExamples: ['Anunciar para quem pesquisa em Luanda: "advogado divórcio luanda urgente" ou "comprar pneus aro 16 luanda".'], angolaContext: 'Em Angola, a concorrência na Rede de Pesquisa do Google ainda é baixa para muitos nichos de prestação de serviços, permitindo liderança a custos por clique acessíveis.', caseStudy: { company: 'Empresa de Desentupimentos Rápidos Luanda (Hipotético)', sector: 'Serviços Urgentes', location: 'Luanda', situation: 'Não tinha trabalho fora das indicações boca a boca.', solution: 'Campanha no Google Pesquisa para termos de urgência com botão de chamada telefónica directa.', results: 'Recebe entre 6 e 12 chamadas de emergência por dia com alta taxa de conversão.' }, recommendedTools: [{ name: 'Google Keyword Planner', category: 'Planeamento de Palavras', description: 'Volume de pesquisas no país.' }], practicalExercise: { title: 'Lista de Palavras-Chave e Negativas', prompt: 'Monte a lista de 15 palavras-chave de intenção de compra e 20 palavras negativas para um negócio angolano.', expectedDeliverables: ['Tabela com termos, correspondências e lista de negativas'] }, reviewQuestions: [{ question: 'Qual a importância de cadastrar palavras-chave negativas no Google Ads?', explanation: 'Impede que o anúncio apareça para pesquisas inúteis (como "grátis", "cursos", "livro", "fotos"), poupando centenas de cliques desperdiçados.' }], summary: 'A Rede de Pesquisa do Google é a melhor ferramenta para produtos de necessidade imediata.', resources: ['Google Ads Search Certification'], isCompleted: false },
      { id: 'm3-l9', moduleId: 3, order: 9, title: '9. Testes A/B científicos', durationMinutes: 45, objectives: ['Isolar variáveis para descobrir com precisão matemática o que vende mais'], introduction: 'Nunca suponha; teste. O teste A/B substitui opiniões subjetivas por factos comprovados.', theory: 'Regra de ouro: Mudar apenas 1 variável por teste (ex: o mesmo texto com 2 títulos diferentes, ou a mesma imagem com 2 CTAs diferentes). Significância estatística e volume mínimo de dados antes de declarar o vencedor.', fundamentalConcepts: [{ term: 'Significância Estatística', definition: 'Cálculo de probabilidade que confirma que a diferença de resultado não ocorreu por mero acaso.' }], practicalExamples: ['Testar imagem estática com preço visível versus vídeo curto com cliente satisfeito.'], angolaContext: 'Em orçamentos em Kwanzas, concentre o teste A/B no criativo visual e no gancho dos primeiros 3 segundos, que têm o maior impacto no custo final.', caseStudy: { company: 'Venda de Cursos de Inglês FluênciaLuanda (Hipotético)', sector: 'Educação', location: 'Luanda', situation: 'Custo por matrícula estava alto.', solution: 'Teste A/B de criativo: Foto do professor angolano sorridente vs Foto de bandeira do Reino Unido.', results: 'A foto do professor angolano reduziu o CPL em 62% e gerou o dobro das inscrições.' }, recommendedTools: [{ name: 'Ferramenta de Teste A/B da Meta', category: 'Testes', description: 'Divisão científica de públicos sem sobreposição.' }], practicalExercise: { title: 'Desenho de Experimento A/B', prompt: 'Formule uma hipótese clara, a variável de teste e o critério de vitória para um anúncio da sua escolha.', expectedDeliverables: ['Ficha de experimento de marketing pronta para execução'] }, reviewQuestions: [{ question: 'Por que não se deve alterar o texto e o vídeo ao mesmo tempo num teste A/B?', explanation: 'Porque se um anúncio vencer, você não terá como saber se a vitória foi provocada pelo novo texto ou pelo novo vídeo.' }], summary: 'Empresas orientadas a testes evoluem dez vezes mais depressa do que as presas a intuições.', resources: ['Metodologia de Testes de Tráfego'], isCompleted: false },
      { id: 'm3-l10', moduleId: 3, order: 10, title: '10. Optimização de campanhas', durationMinutes: 45, objectives: ['Cortar anúncios perdedores e realocar verba para os vencedores diariamente'], introduction: 'Lançar a campanha é apenas 20% do trabalho; os outros 80% residem na optimização contínua.', theory: 'Rotina de optimização: 1. Pausar criativos com CTR abaixo da média ou CPL alto; 2. Escalar conjuntos com ROAS elevado; 3. Ajustar lances e posicionamentos; 4. Combater a fadiga de criativos.', fundamentalConcepts: [{ term: 'Fadiga de Anúncios (Ad Fatigue)', definition: 'Queda de desempenho quando o mesmo público visualiza o mesmo anúncio repetidas vezes (frequência alta).' }], practicalExamples: ['Identificar que a frequência passou de 3,5 e o custo por lead duplicou; substituir os criativos imediatamente.'], angolaContext: 'Devido ao tamanho dos públicos digitais em certas províncias angolanas, a fadiga de anúncios ocorre com maior velocidade do que em países mais populosos.', caseStudy: { company: 'Loja de Calçado Benguela Shoes (Hipotético)', sector: 'Moda', location: 'Benguela', situation: 'Campanha começou bem mas após 2 semanas parou de gerar vendas.', solution: 'Identificou fadiga de criativo com frequência de 4,2; inseriu 3 novos criativos com visual renovado.', results: 'O custo por venda voltou aos níveis lucrativos originais.' }, recommendedTools: [{ name: 'Regras Automáticas da Meta', category: 'Automação', description: 'Pausa automática de anúncios caros.' }], practicalExercise: { title: 'Checklist Diário e Semanal de Optimização', prompt: 'Crie o guia de rotina de 15 minutos para optimização de uma conta de tráfego pago.', expectedDeliverables: ['Checklist operacional com métricas de gatilho para pausar ou escalar'] }, reviewQuestions: [{ question: 'O que indica uma frequência de anúncios superior a 4 num curto espaço de tempo?', explanation: 'Indica que as mesmas pessoas estão a ser bombardeadas repetidamente com o mesmo anúncio, gerando cansaço e encarecimento do custo por resultado.' }], summary: 'Optimização diária com disciplina transforma campanhas medianas em máquinas de lucro.', resources: ['Playbook de Optimização Contínua'], isCompleted: false },
      { id: 'm3-l11', moduleId: 3, order: 11, title: '11. CAC, CPL e ROAS (Cálculo Avançado)', durationMinutes: 50, objectives: ['Dominar os cálculos matemáticos que regem o tráfego pago'], introduction: 'Gestor de tráfego que não domina a matemática dos anúncios é apenas um pagador de cliques.', theory: `As Fórmulas Vitais:
1. CPL = Total Investido ÷ Número de Leads Conquistados
2. CAC = Custos Totais de Aquisição ÷ Número de Clientes Fechados
3. ROAS = Receita Total Gerada ÷ Investimento em Mídia
4. Ticket Médio = Faturação ÷ Número de Pedidos
5. Taxa de Conversão em Vendas = (Clientes ÷ Leads) × 100`, fundamentalConcepts: [{ term: 'ROAS (Return on Ad Spend)', definition: 'Rácio financeiro entre o dinheiro que entrou e o dinheiro gasto directamente em publicidade.' }], practicalExamples: ['Investimento: 500.000 AOA | Leads: 250 (CPL = 2.000 AOA) | Clientes: 25 (Taxa de fecho = 10%) | CAC = 20.000 AOA | Faturação = 2.500.000 AOA | ROAS = 5,0x.'], angolaContext: 'Explicar com rigor esses cálculos para empresários angolanos, convertendo métricas abstratas de cliques em faturamento líquido e reposição de estoque.', caseStudy: { company: 'Empresa de Formação Profissional Luanda Cursos (Hipotético)', sector: 'Educação', location: 'Luanda', situation: 'Gastava sem saber se o curso era rentável.', solution: 'Calculou o CAC máximo permitido de 15.000 AOA para um curso de 60.000 AOA.', results: 'Optimizou as campanhas para um CAC real de 11.200 AOA, garantindo margem líquida excelente.' }, recommendedTools: [{ name: 'Simulador Financeiro de Tráfego da Academia', category: 'Calculadora', description: 'Cálculo instantâneo de viabilidade.' }], practicalExercise: { title: 'Exercício de Modelagem Matemática de Campanha', prompt: 'Resolva o caso com investimento de 800.000 AOA, 320 leads e 16 vendas com ticket de 120.000 AOA, calculando CPL, taxa de conversão, CAC e ROAS.', expectedDeliverables: ['Demonstração passo a passo de todos os cálculos'] }, reviewQuestions: [{ question: 'Se um negócio tem um ROAS de 4,0x mas uma margem bruta de apenas 20%, ele está a lucrar?', explanation: 'Não! Se a margem é de 20%, o ROAS mínimo para empatar (breakeven) é 1 ÷ 0,20 = 5,0x. Um ROAS de 4,0x representaria prejuízo líquido.' }], summary: 'A matemática financeira não mente: domine as métricas antes de escalar.', resources: ['Fórmulas Essenciais de Tráfego da Academia'], isCompleted: false },
      { id: 'm3-l12', moduleId: 3, order: 12, title: '12. Estratégias de conversão', durationMinutes: 45, objectives: ['Aumentar o fecho comercial na ponta final do atendimento'], introduction: 'O melhor tráfego do mundo não salva um atendimento comercial fraco ou desorganizado.', theory: 'Scripts de fecho rápido para WhatsApp, tempo de resposta inferior a 5 minutos, envio de comprovativo Multicaixa Express com instruções passo a passo, recuperação de compradores indecisos.', fundamentalConcepts: [{ term: 'Velocidade de Primeiro Atendimento (Speed to Lead)', definition: 'Probabilidade de fechar a venda decai até 8 vezes se o contacto demorar mais de 30 minutos a ser atendido.' }], practicalExamples: ['Automatização de mensagem de boas-vindas humanizada com perguntas de triagem rápidas.'], angolaContext: 'Em Angola, facilitar o envio de coordenadas bancárias (IBAN) e confirmação imediata de pagamento gera segurança extrema no cliente.', caseStudy: { company: 'Distribuidora de Carnes Frescas Luanda (Hipotético)', sector: 'Alimentação', location: 'Cacuaco / Luanda', situation: 'Leads demoravam até 4 horas para serem atendidos e compravam na concorrência.', solution: 'Implementou escala de atendimento com resposta garantida em menos de 8 minutos no WhatsApp.', results: 'Taxa de conversão de orçamentos em compras subiu de 18% para 44%.' }, recommendedTools: [{ name: 'WhatsApp Business Etiquetas e Respostas Rápidas', category: 'Vendas', description: 'Organização do funil no telemóvel.' }], practicalExercise: { title: 'Script de Atendimento Comercial para WhatsApp em 4 Etapas', prompt: 'Escreva as mensagens padrão de Saudação, Qualificação, Apresentação da Oferta e Fecho para um vendedor de retalho.', expectedDeliverables: ['Script pronto para uso pela equipa de vendas'] }, reviewQuestions: [{ question: 'Por que o atendimento comercial nos primeiros 5 minutos é crítico para leads vindos de redes sociais?', explanation: 'Porque a pessoa está com o telemóvel na mão e com a atenção voltada para o assunto; com o passar das horas, a urgência esfria e ela dispersa a atenção.' }], summary: 'Tráfego atrai; atendimento converte. A união dos dois gera abundância de vendas.', resources: ['Manual de Vendas por WhatsApp'], isCompleted: false }
    ],
    assessment: {
      id: 'eval-m3',
      moduleId: 3,
      title: 'Exame de Avaliação do Módulo 3 — Publicidade e Aquisição',
      timeLimitMinutes: 30,
      questions: [
        {
          id: 'q3-1',
          question: 'Uma campanha de anúncios teve um custo total de 400.000 AOA e gerou diretamente 2.000.000 AOA em faturamento rastreado. Qual foi o ROAS?',
          options: ['2,0x', '3,5x', '5,0x', '8,0x'],
          correctAnswerIndex: 2,
          explanation: 'ROAS = 2.000.000 AOA ÷ 400.000 AOA = 5,0x (ou 500%).'
        },
        {
          id: 'q3-2',
          question: 'Qual a principal vantagem da Rede de Pesquisa do Google em relação aos anúncios de feed no Facebook ou Instagram?',
          options: [
            'É sempre muito mais barata',
            'Captura o consumidor no momento exato em que ele pesquisa ativamente pela solução com intenção de compra',
            'Não exige escrever anúncios de texto',
            'Só funciona para grandes multinacionais'
          ],
          correctAnswerIndex: 1,
          explanation: 'A Rede de Pesquisa captura a intenção activa do utilizador quando ele expressa a sua dor na barra de busca.'
        },
        {
          id: 'q3-3',
          question: 'O que representa o fenómeno de "Fadiga de Anúncios" (Ad Fatigue)?',
          options: [
            'O cansaço da equipa criativa ao redigir textos',
            'A saturação do público-alvo que vê repetidamente o mesmo criativo, resultando em queda de CTR e aumento de custos',
            'Um problema nos servidores da plataforma de anúncios',
            'O bloqueio definitivo da conta de anúncios pela Meta'
          ],
          correctAnswerIndex: 1,
          explanation: 'Acontece quando a frequência sobe muito e o público deixa de clicar por já ter visto o anúncio muitas vezes.'
        },
        {
          id: 'q3-4',
          question: 'Para que serve a lista de "palavras-chave negativas" numa campanha do Google Ads?',
          options: [
            'Para ofender concorrentes',
            'Para impedir que os anúncios sejam exibidos em pesquisas desqualificadas (ex: "grátis", "livro", "download")',
            'Para cancelar a campanha automaticamente',
            'Para aumentar o custo por clique'
          ],
          correctAnswerIndex: 1,
          explanation: 'As negativas bloqueiam termos irrelevantes, poupando investimento que seria desperdiçado em cliques sem intenção comercial.'
        },
        {
          id: 'q3-5',
          question: 'Se investiu 300.000 AOA e gerou 150 leads, dos quais 15 viraram clientes pagantes, qual foi o seu CPL e o seu CAC, respectivamente?',
          options: ['CPL: 2.000 AOA | CAC: 20.000 AOA', 'CPL: 1.000 AOA | CAC: 15.000 AOA', 'CPL: 3.000 AOA | CAC: 30.000 AOA', 'CPL: 500 AOA | CAC: 10.000 AOA'],
          correctAnswerIndex: 0,
          explanation: 'CPL = 300.000 ÷ 150 = 2.000 AOA por lead. CAC = 300.000 ÷ 15 = 20.000 AOA por cliente.'
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Módulo 4 — SEO, Websites e Automação',
    subtitle: 'Posicionamento orgânico, landing pages, WordPress e funis automatizados',
    description: 'Construa autoridade perene nos motores de busca e desenhe máquinas de conversão que funcionam 24 horas por dia através de automações inteligentes e landing pages persuasivas.',
    lessonsCount: 11,
    durationWeeks: 4,
    durationHours: 44,
    status: 'disponivel',
    progressPercent: 0,
    assessmentScore: undefined,
    gradient: 'from-emerald-700 to-teal-800',
    iconName: 'Globe',
    lessons: [
      { id: 'm4-l1', moduleId: 4, order: 1, title: '1. Fundamentos de SEO', durationMinutes: 45, objectives: ['Entender como o algoritmo de busca do Google indexa e classifica páginas'], introduction: 'SEO (Search Engine Optimization) é o canal com maior retorno sobre o investimento no longo prazo.', theory: 'Como funcionam os motores de busca (Rastreamento, Indexação e Ranqueamento), factores On-Page, Off-Page e Técnicos.', fundamentalConcepts: [{ term: 'Tráfego Orgânico', definition: 'Visitas gratuitas conquistadas através do posicionamento natural nas pesquisas do Google.' }], practicalExamples: ['Fazer uma página local de Luanda atingir o topo para termos de prestação de serviços.'], angolaContext: 'Em Angola, muitos nichos têm concorrência de SEO praticamente nula, permitindo alcançar o top 3 do Google em poucos meses de trabalho bem feito.', caseStudy: { company: 'Clínica Dentária Sorriso de Luanda (Hipotético)', sector: 'Saúde', location: 'Alvalade, Luanda', situation: 'Dependia apenas de anúncios pagos para receber novos pacientes.', solution: 'Optimizou o site para o termo "dentista em Luanda Alvalade".', results: 'Passou a receber mais de 40 pedidos orgânicos de consulta por mês sem gastar em publicidade.' }, recommendedTools: [{ name: 'Ubersuggest / Google Trends', category: 'SEO', description: 'Pesquisa de termos.' }], practicalExercise: { title: 'Auditoria Básica de SEO de 1 Website', prompt: 'Analise um website local avaliando velocidade móvel, títulos de páginas e presença de palavras-chave.', expectedDeliverables: ['Relatório de auditoria de SEO com 5 melhorias imediatas'] }, reviewQuestions: [{ question: 'Qual a diferença entre SEO e Google Ads?', explanation: 'O Google Ads cobra por cada clique em anúncios temporários; o SEO constrói autoridade orgânica permanente com cliques gratuitos continuados.' }], summary: 'Quem está no topo do Google tem autoridade inquestionável na mente do cliente.', resources: ['Guia Inicial de SEO do Google'], isCompleted: false },
      { id: 'm4-l2', moduleId: 4, order: 2, title: '2. Pesquisa de palavras-chave', durationMinutes: 45, objectives: ['Mapear termos de cauda longa (Long-Tail) com intenção de compra'], introduction: 'A pesquisa de palavras-chave revela os desejos e dúvidas secretas dos seus potenciais clientes.', theory: 'Palavras-chave Short-Tail (genéricas, alto volume, baixa conversão) vs Long-Tail (específicas, menor volume, altíssima taxa de conversão). Mapeamento de intenção informacional, navegacional e transacional.', fundamentalConcepts: [{ term: 'Palavras de Cauda Longa (Long-Tail Keywords)', definition: 'Frases de pesquisa com 3 ou mais palavras que expressam uma necessidade muito específica e próxima da compra.' }], practicalExamples: ['Short-Tail: "carro". Long-Tail Transacional: "comprar hyundai tucson usado em luanda barato".'], angolaContext: 'Identificar a grafia e expressões locais usadas pelos angolanos nas pesquisas no Google.', caseStudy: { company: 'Venda de Mobília Luanda Lar (Hipotético)', sector: 'Mobiliário', location: 'Viana', situation: 'Tentava ranquear para "móveis", sem sucesso.', solution: 'Focou nas cauda-longa "jogo de sofá de veludo em Luanda" e "mesa de jantar 6 cadeiras em Angola".', results: 'Alcançou a 1ª página e multiplicou por 4 os pedidos recebidos via formulário do site.' }, recommendedTools: [{ name: 'Answer The Public', category: 'Ideias de Conteúdo', description: 'Mapeia perguntas reais feitas pelos utilizadores.' }], practicalExercise: { title: 'Tabela de 20 Palavras-Chave de Cauda Longa', prompt: 'Pesquise 20 termos de cauda longa com forte intenção transacional para um sector da sua escolha em Angola.', expectedDeliverables: ['Tabela organizada por intenção e prioridade de negócio'] }, reviewQuestions: [{ question: 'Por que termos de cauda longa convertem mais do que termos genéricos curtos?', explanation: 'Porque quem pesquisa um termo de cauda longa já sabe exatamente o que quer e está muito mais perto do momento de fechar a compra.' }], summary: 'Fale exatamente as palavras que o cliente digita e o algoritmo recompensará o seu site.', resources: ['Guia de Keyword Research'], isCompleted: false },
      { id: 'm4-l3', moduleId: 4, order: 3, title: '3. Optimização de conteúdos (SEO On-Page)', durationMinutes: 45, objectives: ['Estruturar títulos H1, H2, meta tags, URLs amigáveis e texto âncora'], introduction: 'SEO On-Page é o processo de deixar o seu conteúdo perfeitamente compreensível para os robôs do Google.', theory: 'Tag Title e Meta Description, estrutura hierárquica de cabeçalhos (H1 único, H2 subtítulos, H3 subseções), texto alternativo em imagens (Alt Text) e linkagem interna inteligente.', fundamentalConcepts: [{ term: 'Meta Description', definition: 'O pequeno parágrafo de resumo que aparece logo abaixo do título azul nos resultados de busca do Google.' }], practicalExamples: ['Otimizar a página de um serviço jurídico para que a meta description convença o utilizador a clicar.'], angolaContext: 'Incluir referências geográficas locais nos títulos e textos (ex: "em Luanda", "no Talatona", "serviços em Angola").', caseStudy: { company: 'Escritório de Contabilidade Maianga Fiscal (Hipotético)', sector: 'Contabilidade', location: 'Maianga', situation: 'O site não recebia visitas orgânicas.', solution: 'Reestruturação completa de H1, H2 e alt texts com termos contábeis locais.', results: 'O tráfego orgânico cresceu 350% em 90 dias.' }, recommendedTools: [{ name: 'Yoast SEO / Rank Math', category: 'Plugins WordPress', description: 'Para auditoria On-Page em tempo real.' }], practicalExercise: { title: 'Optimização On-Page de 1 Artigo ou Página', prompt: 'Escreva a tag title, meta description, H1 e 3 subtítulos H2 optimizados para uma página de serviços.', expectedDeliverables: ['Estrutura textual completa pronta para publicação'] }, reviewQuestions: [{ question: 'Quantas tags H1 devem existir numa página da web segundo as boas práticas de SEO?', explanation: 'Apenas uma tag H1 principal por página, indicando claramente ao motor de busca o tema central do documento.' }], summary: 'Organização estrutural limpa agrada aos utilizadores e encanta os motores de busca.', resources: ['Checklist On-Page da Moz'], isCompleted: false },
      { id: 'm4-l4', moduleId: 4, order: 4, title: '4. Google Search Console', durationMinutes: 40, objectives: ['Monitorizar indexação de páginas, erros técnicos e termos reais de pesquisa'], introduction: 'O Search Console é a linha directa de comunicação entre o seu website e o Google.', theory: 'Envio de sitemap.xml, inspecção de URLs, relatório de desempenho (cliques, impressões, CTR orgânico, posição média), diagnóstico de erros 404 e problemas de usabilidade móvel.', fundamentalConcepts: [{ term: 'Sitemap.xml', definition: 'Ficheiro que lista todas as páginas relevantes do website para facilitar o trabalho dos rastreadores do Google.' }], practicalExamples: ['Identificar palavras-chave que aparecem na posição 11 (início da 2ª página) e optimizar a página para fazê-las subir para a 1ª página.'], angolaContext: 'Monitorizar a velocidade de indexação e garantir que as páginas estejam acessíveis mesmo em conexões lentas de redes móveis.', caseStudy: { company: 'Portal de Notícias Luanda Hoje (Hipotético)', sector: 'Mídia e Notícias', location: 'Luanda', situation: 'Muitos artigos novos demoravam dias para aparecer nas pesquisas.', solution: 'Configuração do sitemap automático e solicitação de indexação via API no Search Console.', results: 'Artigos passaram a ser indexados pelo Google em menos de 15 minutos após a publicação.' }, recommendedTools: [{ name: 'Google Search Console', category: 'Plataforma Oficial', description: 'Monitorização técnica gratuita.' }], practicalExercise: { title: 'Análise de Desempenho no Search Console', prompt: 'Simule a análise de um relatório identificando 3 termos com alto número de impressões mas baixo CTR e proponha novos títulos.', expectedDeliverables: ['Relatório de melhoria de CTR com novas propostas de títulos e descrições'] }, reviewQuestions: [{ question: 'Por que o Google Search Console é insubstituível para um gestor de SEO?', explanation: 'Porque é a única ferramenta que mostra dados reais e oficiais diretamente da base de dados do Google sobre cliques, impressões e erros do site.' }], summary: 'Monitore o Search Console regularmente para antecipar quedas de tráfego e capturar novas oportunidades.', resources: ['Guia Oficial do Google Search Console'], isCompleted: false },
      { id: 'm4-l5', moduleId: 4, order: 5, title: '5. Google Business Profile (Perfil de Empresa no Google)', durationMinutes: 45, objectives: ['Dominar o SEO Local e colocar o negócio no mapa do Google e Google Maps'], introduction: 'Para negócios físicos e prestadores de serviços locais, o Google Business Profile é a mina de ouro mais rápida.', theory: 'Configuração da ficha, escolha precisa de categorias primárias e secundárias, gestão de avaliações e comentários com respostas profissionais, fotos de alta qualidade do espaço e catálogo de produtos.', fundamentalConcepts: [{ term: 'SEO Local / Local Pack', definition: 'Os 3 resultados de empresas em destaque com mapa e estrelas de avaliação que aparecem no topo de pesquisas com intenção geográfica.' }], practicalExamples: ['Pesquisa por "restaurante aberto perto de mim" ou "farmácia Talatona".'], angolaContext: 'Em Angola, a maioria das empresas locais ainda não verificou a sua ficha no Google Maps ou tem dados desatualizados (sem telefone nem horário), representando uma oportunidade imediata de dominância.', caseStudy: { company: 'Oficina Mecânica Precision Viana (Hipotético)', sector: 'Serviços Automóveis', location: 'Viana, Luanda', situation: 'Não tinha website nem presença nas pesquisas locais.', solution: 'Criação e optimização completa do Perfil de Empresa com fotos da oficina, serviços e recolha ativa de avaliações de clientes fiéis.', results: 'Recebe mais de 120 ligações telefónicas directas por mês através do botão do Google Maps.' }, recommendedTools: [{ name: 'Google Business Profile Manager', category: 'SEO Local', description: 'Gestão da ficha de empresa.' }], practicalExercise: { title: 'Optimização de Ficha de Negócio Local', prompt: 'Desenhe a ficha completa de um restaurante ou clínica incluindo descrição optimizada, 5 fotos recomendadas e mensagem de solicitação de avaliação.', expectedDeliverables: ['Plano de lançamento e manutenção da ficha local'] }, reviewQuestions: [{ question: 'Qual o peso das avaliações e respostas na classificação de uma empresa no Google Maps?', explanation: 'Avaliações frequentes, positivas e com palavras-chave nas respostas aumentam substancialmente a relevância e o posicionamento no Local Pack.' }], summary: 'Estar no Google Maps com boas avaliações é ter clientes a bater à porta todos os dias.', resources: ['Guia de SEO Local da Academia'], isCompleted: false },
      { id: 'm4-l6', moduleId: 4, order: 6, title: '6. Landing pages de alta conversão', durationMinutes: 50, objectives: ['Estruturar páginas focadas numa única conversão sem distrações nem links de saída'], introduction: 'Uma página institucional informa; uma landing page converte visitantes em clientes pagantes.', theory: 'Anatomia da Landing Page Vencedora: 1. Acima da dobra (Dobra de Entrada): Título claro, subtítulo instigante, imagem/vídeo ilustrativo e botão de CTA visível; 2. Prova social (depoimentos, logos de clientes atendidos); 3. Quebra de objecções detalhada; 4. Garantia; 5. Perguntas frequentes (FAQ); 6. Rodapé simples sem menus dispersores.', fundamentalConcepts: [{ term: 'Taxa de Conversão da Landing Page', definition: 'Percentagem de visitantes que completam o formulário ou clicam no botão da página.' }], practicalExamples: ['Uma landing page dedicada exclusivamente ao serviço de assessoria de vistos com formulário direto.'], angolaContext: 'Garantir que a landing page carregue em menos de 2,5 segundos em redes móveis de Angola e tenha botão flutuante de WhatsApp.', caseStudy: { company: 'Seguradora Futuro Seguro (Hipotético)', sector: 'Seguros', location: 'Luanda', situation: 'Enviava anúncios para a página inicial cheia de links e tinha 1,2% de conversão.', solution: 'Criou landing page única e focada no seguro automóvel obrigatório.', results: 'A taxa de conversão saltou para 8,6%, gerando centenas de novas apólices mensais.' }, recommendedTools: [{ name: 'Elementor / Framer / Leadpages', category: 'Construtores Visuais', description: 'Para montagem rápida.' }], practicalExercise: { title: 'Wireframe de Landing Page de 1 Página', prompt: 'Desenhe a estrutura em blocos de uma landing page comercial com todos os 6 elementos essenciais.', expectedDeliverables: ['Esboço estrutural com textos de chamada de cada bloco'] }, reviewQuestions: [{ question: 'Por que uma landing page não deve ter o menu tradicional de navegação no topo?', explanation: 'Porque o menu distrai o visitante e oferece vias de escape, desviando a atenção do único objectivo que é a conversão.' }], summary: 'Simplicidade, velocidade e clareza de proposta geram taxas de conversão recordistas.', resources: ['Guia de CRO (Conversion Rate Optimization)'], isCompleted: false },
      { id: 'm4-l7', moduleId: 4, order: 7, title: '7. Estrutura de websites', durationMinutes: 45, objectives: ['Planear a arquitetura de informação e a experiência do utilizador (UX/UI)'], introduction: 'A estrutura de um website deve guiar o utilizador intuitivamente até à tomada de decisão.', theory: 'Arquitetura de Informação, mapa do site (Sitemap), hierarquia visual, design responsivo para smartphones e conformidade com privacidade de dados.', fundamentalConcepts: [{ term: 'Mobile-First Design', definition: 'Metodologia de concepção que desenha a interface prioritariamente para o ecrã do smartphone antes de adaptar para computadores.' }], practicalExamples: ['Simplificar menus complexos de 12 opções para 4 categorias claras.'], angolaContext: 'Mais de 80% do tráfego web em Angola provém de dispositivos móveis. Websites pesados pensados para computadores perdem quase todo o público.', caseStudy: { company: 'Portal de Empregos VagasAngola (Hipotético)', sector: 'Recrutamento', location: 'Luanda', situation: 'Taxa de rejeição móvel de 75% por causa de layout pesado.', solution: 'Redesenho mobile-first com carregamento prioritário de texto e botões tácteis fáceis de carregar com o polegar.', results: 'Taxa de rejeição caiu para 32% e candidaturas triplicaram.' }, recommendedTools: [{ name: 'Figma', category: 'Prototipagem', description: 'Para desenho prévio da interface.' }], practicalExercise: { title: 'Mapa de Arquitetura de Informação de 1 Site', prompt: 'Desenhe a árvore de páginas e menus de um website corporativo de serviços com no máximo 3 níveis de profundidade.', expectedDeliverables: ['Diagrama estrutural do mapa do site'] }, reviewQuestions: [{ question: 'O que significa o conceito Mobile-First e por que é mandatório na actualidade?', explanation: 'Significa projectar toda a experiência a pensar primeiro no smartphone, onde a esmagadora maioria dos utilizadores navega diariamente.' }], summary: 'Um website rápido e intuitivo no smartphone vende mais do que qualquer apresentação corporativa.', resources: ['Princípios de UX por Nielsen Norman Group'], isCompleted: false },
      { id: 'm4-l8', moduleId: 4, order: 8, title: '8. WordPress profissional', durationMinutes: 50, objectives: ['Gerir a plataforma que alimenta mais de 40% de todos os websites da internet'], introduction: 'O WordPress é a ferramenta mais flexível e poderosa para construir portais, blogs e sites corporativos sem depender de programação complexa.', theory: 'Diferença entre WordPress.com e WordPress.org (auto-hospedado), gestão de temas, plugins essenciais de segurança, cache e SEO, gestão de utilizadores e backups automáticos.', fundamentalConcepts: [{ term: 'CMS (Content Management System)', definition: 'Sistema de gestão de conteúdos que permite criar, editar e publicar conteúdos de forma simplificada.' }], practicalExamples: ['Configurar plugins de cache e compressão de imagens para fazer o site carregar em 1,8 segundos.'], angolaContext: 'Escolher provedores de alojamento com servidores velozes e boa latência para utilizadores em Angola.', caseStudy: { company: 'Revista Executiva de Angola (Hipotético)', sector: 'Editorial', location: 'Luanda', situation: 'O site antigo caía a cada lançamento de edição nova.', solution: 'Migração para WordPress moderno com plugin de cache Redis e CDN.', results: 'Suportou mais de 50.000 acessos simultâneos sem lentidão.' }, recommendedTools: [{ name: 'WordPress / WP Rocket / Wordfence', category: 'CMS e Segurança', description: 'Pilha recomendada.' }], practicalExercise: { title: 'Checklist de Configuração de Segurança no WordPress', prompt: 'Defina as 5 acções obrigatórias para proteger um website WordPress contra invasões e lentidão.', expectedDeliverables: ['Documento com as 5 medidas e plugins correspondentes'] }, reviewQuestions: [{ question: 'Qual o risco de instalar dezenas de plugins desnecessários num site WordPress?', explanation: 'Aumenta a lentidão do servidor, gera conflitos de código e abre potenciais brechas de segurança para ataques informáticos.' }], summary: 'WordPress bem configurado alia liberdade total a performance profissional.', resources: ['Manual de Boas Práticas WordPress'], isCompleted: false },
      { id: 'm4-l9', moduleId: 4, order: 9, title: '9. Email Marketing estratégico', durationMinutes: 45, objectives: ['Criar sequências de nutrição e newsletters que geram vendas recorrentes'], introduction: 'O email marketing continua a ter o maior ROI de qualquer canal digital em mercados corporativos B2B.', theory: 'Construção ética de listas (Double Opt-In), segmentação por interesse, linhas de assunto atraentes (evitando palavras de spam), taxas de abertura e de cliques (OR e CTR).', fundamentalConcepts: [{ term: 'Double Opt-In', definition: 'Processo em que o utilizador confirma a subscrição através de um link enviado para a sua caixa de entrada.' }], practicalExamples: ['Sequência de boas-vindas com 4 emails automáticos para quem descarregou um manual de gestão.'], angolaContext: 'Em Angola, o email marketing é extremamente eficaz para o público corporativo, gerentes e executivos que verificam a caixa de entrada diariamente no escritório.', caseStudy: { company: 'Empresa de Software PrimaveraAngola Parceiro (Hipotético)', sector: 'Software de Gestão', location: 'Talatona', situation: 'Vendedores passavam o dia a fazer chamadas frias com baixo sucesso.', solution: 'Criou uma newsletter semanal com dicas de conformidade fiscal da AGT enviada para 2.000 diretores financeiros.', results: 'Gerou uma média de 8 pedidos espontâneos de consultoria por mês.' }, recommendedTools: [{ name: 'Mailchimp / Brevo / ActiveCampaign', category: 'Email Marketing', description: 'Plataformas de envio.' }], practicalExercise: { title: 'Sequência de 3 Emails de Nutrição', prompt: 'Escreva as linhas de assunto e os textos de 3 emails de boas-vindas para novos contactos da sua empresa.', expectedDeliverables: ['3 modelos de emails com chamadas e links definidos'] }, reviewQuestions: [{ question: 'Por que nunca se deve comprar bases de dados prontas de emails de terceiros?', explanation: 'Porque as pessoas não autorizaram o contacto, a esmagadora maioria das mensagens vai para a pasta de spam e o domínio da empresa é queimado perante os servidores de email.' }], summary: 'Construa a sua própria lista de contactos fiéis e seja dono da sua audiência.', resources: ['Guia de Email Marketing B2B'], isCompleted: false },
      { id: 'm4-l10', moduleId: 4, order: 10, title: '10. Automação de marketing', durationMinutes: 50, objectives: ['Conectar formulários, CRM e WhatsApp para atendimento sem intervenção manual'], introduction: 'Automação liberta a sua equipa de tarefas repetitivas e garante que nenhum lead seja esquecido.', theory: 'Gatilhos (Triggers), Condições (If/Then) e Acções (Actions). Fluxos automáticos: Lead preenche formulário -> Recebe confirmação imediata no WhatsApp -> É adicionado ao CRM com tag específica -> Vendedor recebe alerta no telemóvel.', fundamentalConcepts: [{ term: 'Webhook / API', definition: 'Mecanismo que permite a comunicação instantânea de dados entre diferentes aplicativos na nuvem.' }], practicalExamples: ['Automação no Make/Zapier que envia dados de formulário do Facebook diretamente para uma folha de cálculo e notifica o gestor comercial.'], angolaContext: 'Integração de APIs de WhatsApp com operadoras e plataformas para atendimento automatizado em tempo real.', caseStudy: { company: 'Imobiliária Morada Feliz (Hipotético)', sector: 'Imobiliário', location: 'Luanda Sul', situation: 'Corretores demoravam até 24 horas para receber os contactos gerados pelos anúncios.', solution: 'Criou automação que notifica o corretor de plantão no WhatsApp em 10 segundos com os dados do cliente.', results: 'A taxa de agendamento de visitas aos imóveis cresceu 72%.' }, recommendedTools: [{ name: 'Make (Integromat) / Zapier', category: 'Automação de Fluxos', description: 'Conexão entre ferramentas sem código.' }], practicalExercise: { title: 'Desenho de Fluxo de Automação de Vendas', prompt: 'Desenhe o fluxograma de automação ligando anúncio, base de dados e aviso à equipa de vendas.', expectedDeliverables: ['Diagrama com gatilho, condições e acções de saída'] }, reviewQuestions: [{ question: 'O que é um Webhook e como ele acelera o tempo de resposta comercial?', explanation: 'É um gatilho automático que envia os dados no exacto momento do evento (ex: novo lead), permitindo acções imediatas sem depender de consultas periódicas lentas.' }], summary: 'Automatize processos para poder humanizar as relações comerciais.', resources: ['Manual de Automações No-Code'], isCompleted: false },
      { id: 'm4-l11', moduleId: 4, order: 11, title: '11. Integração de ferramentas digitais', durationMinutes: 45, objectives: ['Unificar o ecossistema tecnológico da empresa (MarTech Stack)'], introduction: 'Ferramentas isoladas criam ilhas de informação; ferramentas integradas geram visão 360 do cliente.', theory: 'Como construir uma pilha tecnológica (MarTech Stack) coesa: Gestor de Tráfego + CMS (WordPress) + Plataforma de Análise (GA4) + CRM de Vendas + WhatsApp Business API.', fundamentalConcepts: [{ term: 'MarTech Stack', definition: 'O conjunto integrado de softwares e ferramentas tecnológicas utilizadas pela equipa de marketing.' }], practicalExamples: ['Conectar os dados de compras da loja física com a lista de exclusão do gestor de tráfego.'], angolaContext: 'Escolher ferramentas compatíveis com a realidade operacional e de suporte ao cliente no espaço lusófono.', caseStudy: { company: 'Rede de Clínicas MedLuanda (Hipotético)', sector: 'Saúde', location: 'Luanda, Maianga e Talatona', situation: 'Cada clínica usava um sistema diferente e não sabiam o histórico do paciente.', solution: 'Unificação do CRM em nuvem integrado aos formulários do site e campanhas de anúncios.', results: 'Eliminação de agendamentos duplicados e aumento de 40% na retenção de pacientes.' }, recommendedTools: [{ name: 'HubSpot / RD Station / Bitrix24', category: 'CRMs Integrados', description: 'Plataformas de gestão.' }], practicalExercise: { title: 'Mapeamento da Pilha Tecnológica da Empresa', prompt: 'Faça o inventário das ferramentas actuais da sua empresa e identifique onde há quebras de integração.', expectedDeliverables: ['Mapa do ecossistema tecnológico com plano de integração'] }, reviewQuestions: [{ question: 'Qual o principal prejuízo de manter ferramentas de marketing desconectadas do sistema de vendas?', explanation: 'Gera perda de dados, impossibilita saber quais campanhas geraram vendas reais e causa atendimento desinformado ao cliente.' }], summary: 'A verdadeira eficiência nasce da sincronia entre todas as ferramentas da empresa.', resources: ['Guia de Arquitetura MarTech'], isCompleted: false }
    ],
    assessment: {
      id: 'eval-m4',
      moduleId: 4,
      title: 'Exame de Avaliação do Módulo 4 — SEO, Websites e Automação',
      timeLimitMinutes: 30,
      questions: [
        {
          id: 'q4-1',
          question: 'Em termos de SEO On-Page, quantas tags de cabeçalho principal <H1> devem ser utilizadas por página como boa prática?',
          options: ['Quantas forem necessárias para destacar o texto', 'Exactamente uma tag H1 principal por página', 'Nenhuma, o Google ignora cabeçalhos', 'Pelo menos cinco'],
          correctAnswerIndex: 1,
          explanation: 'Recomenda-se utilizar apenas uma tag H1 para identificar com clareza o tema primário da página.'
        },
        {
          id: 'q4-2',
          question: 'Qual ferramenta oficial e gratuita da Google permite acompanhar erros de indexação, sitemap e termos reais de busca que geraram cliques para o site?',
          options: ['Google Ads', 'Google Search Console', 'Google Docs', 'Google Meet'],
          correctAnswerIndex: 1,
          explanation: 'O Google Search Console é a plataforma oficial para monitorização técnica de presença e indexação nas buscas.'
        },
        {
          id: 'q4-3',
          question: 'Por que uma landing page focada em conversão directa deve omitir o menu de navegação tradicional presente no cabeçalho?',
          options: [
            'Porque o menu gasta muita internet do utilizador',
            'Para eliminar distrações e evitar que o visitante fuja da página antes de concluir a acção desejada',
            'Porque o Google proíbe menus em páginas da internet',
            'Para a página caber num único ecrã'
          ],
          correctAnswerIndex: 1,
          explanation: 'A ausência de menus retira rotas de fuga e foca 100% da atenção do visitante na proposta e no formulário de conversão.'
        },
        {
          id: 'q4-4',
          question: 'Para negócios locais físicos em cidades angolanas (ex: restaurantes, oficinas, consultórios), qual recurso gratuito oferece o retorno mais rápido em buscas geográficas no Google e no Google Maps?',
          options: ['Google Business Profile (Perfil de Empresa)', 'Anúncios na televisão', 'Email marketing frio', 'Criação de um grupo no LinkedIn'],
          correctAnswerIndex: 0,
          explanation: 'O Perfil de Empresa no Google coloca o negócio no Google Maps com avaliações, telefone, rotas e horário de funcionamento.'
        },
        {
          id: 'q4-5',
          question: 'O que caracteriza um fluxo de automação de marketing baseado em gatilho (trigger) e acção (action)?',
          options: [
            'Uma pessoa da equipa que envia mensagens manualmente uma a uma',
            'Um sistema que executa uma tarefa automática imediata (ex: enviar mensagem de WhatsApp) assim que um evento específico ocorre (ex: formulário preenchido)',
            'Um software que desliga o computador no final do dia',
            'Uma campanha de panfletagem nas ruas da cidade'
          ],
          correctAnswerIndex: 1,
          explanation: 'Automação baseada em gatilho/acção responde automaticamente a eventos predefinidos sem intervenção manual humana.'
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Módulo 5 — Métricas, Dados e Análise',
    subtitle: 'Google Analytics 4, Looker Studio, modelagem de atribuição e inteligência de dados',
    description: 'Transforme dados brutos em decisões corporativas de alto impacto. Domine o Google Analytics 4, construa dashboards interativos no Looker Studio e aprenda a interpretar métricas avançadas.',
    lessonsCount: 12,
    durationWeeks: 4,
    durationHours: 48,
    status: 'disponivel',
    progressPercent: 0,
    assessmentScore: undefined,
    gradient: 'from-purple-800 to-indigo-950',
    iconName: 'BarChart3',
    lessons: [
      { id: 'm5-l1', moduleId: 5, order: 1, title: '1. Introdução à análise de dados', durationMinutes: 45, objectives: ['Desenvolver cultura Data-Driven no departamento de marketing'], introduction: 'Sem dados, você é apenas mais uma pessoa com uma opinião.', theory: 'Diferença entre dados quantitativos e qualitativos, higiene de dados, pirâmide DIKW (Dados -> Informação -> Conhecimento -> Sabedoria/Decisão).', fundamentalConcepts: [{ term: 'Cultura Data-Driven', definition: 'Modelo de gestão onde decisões operacionais e estratégicas são fundamentadas em dados concretos.' }], practicalExamples: ['Trocar discussões sobre preferências de cor do botão por testes de dados reais de conversão.'], angolaContext: 'Combater o hábito generalizado de gerir negócios por intuição em Angola, demonstrando que dados economizam recursos financeiros preciosos.', caseStudy: { company: 'Supermercado Central Luanda (Hipotético)', sector: 'Retalho', location: 'Ingombota, Luanda', situation: 'Comprava stock de produtos com base no gosto pessoal dos gerentes.', solution: 'Cruzou dados de buscas online e vendas de ponto de venda.', results: 'Reduziu perdas por produtos fora de validade em 45%.' }, recommendedTools: [{ name: 'Excel / Google Sheets Avançado', category: 'Tratamento de Dados', description: 'Tabelas dinâmicas e fórmulas.' }], practicalExercise: { title: 'Construção de Folha de Limpeza de Dados', prompt: 'Elimine duplicados e padronize formatos de contactos de clientes angolanos.', expectedDeliverables: ['Base tratada e pronta para segmentação'] }, reviewQuestions: [{ question: 'Por que dados brutos não têm valor sem interpretação contextual?', explanation: 'Porque números soltos não indicam as causas nem as acções necessárias; a informação precisa ser contextualizada para apoiar a decisão.' }], summary: 'Aprenda a ouvir o que os números estão a dizer sobre o seu negócio.', resources: ['Fundamentos de Data Analytics Google'], isCompleted: false },
      { id: 'm5-l2', moduleId: 5, order: 2, title: '2. Google Analytics 4 (GA4)', durationMinutes: 50, objectives: ['Dominar o modelo de eventos e parâmetros da nova geração do GA4'], introduction: 'O GA4 revolucionou a medição da web, abandonando as sessões antigas para focar em jornadas do utilizador baseadas em eventos.', theory: 'Arquitetura baseada em eventos (Events & Parameters), métricas de engajamento (Taxa de Engajamento substituindo a antiga Taxa de Rejeição), relatórios de exploração personalizados e acompanhamento entre domínios.', fundamentalConcepts: [{ term: 'Evento no GA4', definition: 'Qualquer interação do utilizador no site ou app (clique, scroll, download, vídeo, compra).' }], practicalExamples: ['Criar evento personalizado que dispara quando o cliente clica no link de WhatsApp.'], angolaContext: 'Configurar o fuso horário da propriedade para Luanda (GMT+1) e a moeda em Kwanzas para relatórios financeiros precisos.', caseStudy: { company: 'Portal de Ensino Conhecimento Angola (Hipotético)', sector: 'E-learning', location: 'Luanda', situation: 'Não sabia em que momento os alunos abandonavam as aulas gravadas.', solution: 'Configurou eventos de vídeo no GA4 em 25%, 50%, 75% e 100%.', results: 'Descobriu que vídeos com mais de 15 minutos tinham queda drástica, reeditando as aulas para módulos curtos de 8 minutos.' }, recommendedTools: [{ name: 'Google Analytics 4', category: 'Web Analytics', description: 'Ferramenta oficial.' }], practicalExercise: { title: 'Criação de Evento Personalizado no GA4', prompt: 'Defina os parâmetros do evento para rastrear cliques no botão de Multicaixa Express.', expectedDeliverables: ['Ficha de configuração do evento com nome e parâmetros'] }, reviewQuestions: [{ question: 'Qual a principal diferença conceitual entre o antigo Universal Analytics e o GA4?', explanation: 'O Universal Analytics media sessões e visualizações de página, enquanto o GA4 mede todos os comportamentos como eventos flexíveis com parâmetros.' }], summary: 'Dominar o GA4 é obrigatório para qualquer analista digital moderno.', resources: ['Certificação Oficial Google Analytics 4'], isCompleted: false },
      { id: 'm5-l3', moduleId: 5, order: 3, title: '3. Indicadores de desempenho (Modelagem Completa)', durationMinutes: 45, objectives: ['Construir a árvore de indicadores de desempenho de uma organização'], introduction: 'Nem todos os indicadores têm o mesmo peso; é preciso compreender as relações de causa e efeito.', theory: 'Indicadores Leading (antecipadores, como tráfego e leads) vs Lagging (retrospectivos, como lucro e receita total). Como uma queda no CTR do anúncio hoje provocará uma queda nas receitas daqui a 3 semanas.', fundamentalConcepts: [{ term: 'Leading Indicator (Indicador Antecipador)', definition: 'Métrica observável que prevê o comportamento ou resultado futuro de um indicador final.' }], practicalExamples: ['O número de reuniões comerciais agendadas esta semana prevê o faturamento do próximo mês.'], angolaContext: 'Estruturar indicadores simples para que até directores não técnicos compreendam o ritmo de crescimento.', caseStudy: { company: 'Empresa de Telecomunicações NetLuanda (Hipotético)', sector: 'Internet e Telecom', location: 'Luanda', situation: 'Só descobria a perda de clientes após o cancelamento do contrato.', solution: 'Mapeou como leading indicator o número de chamadas ao suporte técnico com queixas de lentidão.', results: 'Equipa de retenção antecipou-se aos clientes em risco, reduzindo o cancelamento em 38%.' }, recommendedTools: [{ name: 'Árvore de KPIs Miro', category: 'Diagramação', description: 'Mapeamento de relações.' }], practicalExercise: { title: 'Construção da Árvore de Indicadores', prompt: 'Desenhe as relações entre CTR, CPC, CPL, Taxa de Fecho, CAC e Receita Final para o seu sector.', expectedDeliverables: ['Diagrama de causa e efeito entre os indicadores'] }, reviewQuestions: [{ question: 'Por que o gestor deve acompanhar leading indicators com mais frequência do que lagging indicators?', explanation: 'Porque lagging indicators (como o lucro final) já aconteceram e não podem ser alterados; os leading indicators permitem corrigir a rota a tempo.' }], summary: 'Antecipe os resultados compreendendo a correlação entre as métricas.', resources: ['Manual de Métricas Corporativas'], isCompleted: false },
      { id: 'm5-l4', moduleId: 5, order: 4, title: '4. Custo por lead (CPL)', durationMinutes: 45, objectives: ['Calcular o CPL real e definir o limite de rentabilidade para cada canal'], introduction: 'Saber quanto custa capturar um contacto interessado é a primeira linha de defesa financeira.', theory: 'CPL Bruto vs CPL Qualificado (CPLQ). Nem todo lead que entra no sistema tem o mesmo valor; calcular quanto custa o lead que realmente atende aos critérios do cliente ideal.', fundamentalConcepts: [{ term: 'CPL Qualificado (Cost per Qualified Lead)', definition: 'Custo total de marketing dividido apenas pelos contactos que possuem perfil e orçamento para comprar.' }], practicalExamples: ['Gerar 100 leads a 1.000 AOA (CPL 1.000 AOA), mas apenas 20 são qualificados -> CPL Qualificado real = 5.000 AOA.'], angolaContext: 'Em Angola, custos de leads muito baixos no Facebook muitas vezes escondem utilizadores curiosos sem acesso a meios de pagamento.', caseStudy: { company: 'Venda de Terrenos Urbanizados Luanda Imóveis (Hipotético)', sector: 'Imobiliário', location: 'Cacuaco / Barra do Dande', situation: 'Cemorava comemorando CPL de 300 AOA, mas ninguém comprava os terrenos.', solution: 'Filtrou por profissão e renda, subindo o CPL para 2.400 AOA mas garantindo compradores reais.', results: 'Vendeu 12 lotes de terreno no mês seguinte.' }, recommendedTools: [{ name: 'Calculadora de CPL AMD', category: 'Finanças', description: 'Simulação de custos.' }], practicalExercise: { title: 'Cálculo e Análise de CPL por Canal', prompt: 'Compare o CPL do Facebook, Google e LinkedIn com base em dados de investimento e volume de leads.', expectedDeliverables: ['Tabela comparativa com recomendação de canal mais eficiente'] }, reviewQuestions: [{ question: 'Por que um CPL mais alto pode ser financeiramente mais vantajoso do que um CPL mais baixo?', explanation: 'Se o lead mais caro tiver uma taxa de conversão em vendas significativamente maior, o CAC final será menor e o lucro líquido será superior.' }], summary: 'Foque na qualidade do lead, não apenas no custo unitário mais baixo.', resources: ['Guia de Otimização de CPL'], isCompleted: false },
      { id: 'm5-l5', moduleId: 5, order: 5, title: '5. Custo de aquisição de clientes (CAC)', durationMinutes: 50, objectives: ['Apurar todos os custos directos e indirectos envolvidos na conquista de clientes'], introduction: 'O CAC é o termómetro definitivo da saúde e viabilidade de qualquer modelo de negócio.', theory: 'Fórmula completa do CAC: Inclui não apenas o investimento em anúncios, mas também salários e comissões da equipa comercial, ferramentas de software, consultores e infraestrutura atribuída às vendas.', fundamentalConcepts: [{ term: 'CAC Total', definition: 'A soma integral de todos os custos de marketing e vendas dividido pelo número de clientes gerados.' }], practicalExamples: ['Anúncios: 1.000.000 AOA + Salários Vendas: 800.000 AOA + Software: 200.000 AOA = 2.000.000 AOA. Para 50 clientes -> CAC Total = 40.000 AOA.'], angolaContext: 'Muitos empresários angolanos esquecem-se de contabilizar o tempo e custo dos vendedores no cálculo do CAC, subestimando o custo real.', caseStudy: { company: 'Empresa de Software de Faturação FacturaFácil Angola (Hipotético)', sector: 'SaaS / Tecnologia', location: 'Luanda', situation: 'Achava que o CAC era de 10.000 AOA porque só contava os anúncios.', solution: 'Auditoria calculou o CAC total incluindo suporte comercial e comissões, descobrindo um CAC real de 32.000 AOA.', results: 'Ajustou os preços da assinatura anual para garantir lucratividade sustentável.' }, recommendedTools: [{ name: 'Modelo de Auditoria de CAC AMD', category: 'Contabilidade', description: 'Planilha financeira.' }], practicalExercise: { title: 'Auditoria do CAC Total de um Negócio', prompt: 'Some todos os custos de marketing, ferramentas e vendas de uma empresa e calcule o CAC real a partir do número de vendas.', expectedDeliverables: ['Relatório de auditoria de CAC com recomendações de corte de ineficiências'] }, reviewQuestions: [{ question: 'Quais despesas além da verba de publicidade devem ser incluídas no CAC Total?', explanation: 'Salários e comissões da equipa de vendas e marketing, assinaturas de softwares de CRM e automação, e agências ou consultorias contratadas.' }], summary: 'Conhecer o seu CAC verdadeiro impede a empresa de falir a vender muito.', resources: ['Masterclass de CAC e LTV da Academia'], isCompleted: false },
      { id: 'm5-l6', moduleId: 5, order: 6, title: '6. Retorno sobre investimento publicitário (ROAS)', durationMinutes: 50, objectives: ['Calcular o ROAS de equilíbrio (Breakeven ROAS) e margens de segurança'], introduction: 'Um ROAS alto não garante lucro se a margem do produto for pequena.', theory: 'Cálculo do Breakeven ROAS = 1 ÷ Margem de Lucro Bruta. Se a margem é de 25%, o ROAS para não ter prejuízo é 1 ÷ 0,25 = 4,0x. Qualquer resultado acima de 4,0x é lucro; abaixo de 4,0x é prejuízo.', fundamentalConcepts: [{ term: 'Breakeven ROAS (ROAS de Equilíbrio)', definition: 'O ROAS mínimo exato necessário para cobrir os custos do produto e dos anúncios sem lucro nem prejuízo.' }], practicalExamples: ['Para um produto com margem bruta de 50%, o Breakeven ROAS é 2,0x. Se a campanha faz 3,5x, a operação é altamente lucrativa.'], angolaContext: 'Ajustar as margens considerando o custo de frete e transporte entre Luanda e as restantes províncias.', caseStudy: { company: 'E-commerce de Cosméticos BelezaAngolana (Hipotético)', sector: 'Beleza', location: 'Luanda e Benguela', situation: 'Comemorava ROAS de 3,0x mas fechava o mês no vermelho.', solution: 'Calculou o breakeven ROAS considerando frete e embalagens, descobrindo que precisava de 3,8x para lucrar.', results: 'Aumentou o ticket médio através de kits de produtos, elevando o ROAS para 4,6x e revertendo o prejuízo.' }, recommendedTools: [{ name: 'Calculadora de Breakeven ROAS', category: 'Finanças de Anúncios', description: 'Calculadora de ponto de equilíbrio.' }], practicalExercise: { title: 'Determinação do Breakeven ROAS de 3 Produtos', prompt: 'Calcule o ROAS de equilíbrio para produtos com margens de 15%, 35% e 60%.', expectedDeliverables: ['Tabela com cálculos de ponto de equilíbrio e metas de campanha'] }, reviewQuestions: [{ question: 'Como se calcula o ROAS de equilíbrio (Breakeven)?', explanation: 'Divide-se 1 pela margem de lucro bruta percentual do produto (ex: 1 ÷ 0,40 = 2,5x).' }], summary: 'Nunca escale uma campanha sem saber o seu ROAS de equilíbrio exato.', resources: ['Planilha de Breakeven ROAS'], isCompleted: false },
      { id: 'm5-l7', moduleId: 5, order: 7, title: '7. Taxa de conversão (CRO)', durationMinutes: 45, objectives: ['Identificar e remover gargalos que impedem visitantes de se tornarem compradores'], introduction: 'Dobrar a taxa de conversão do seu site tem o mesmo efeito de dobrar o tráfego, mas sem gastar mais nada em anúncios.', theory: 'Fórmula da Taxa de Conversão = (Conversões ÷ Visitantes Totais) × 100. Princípios de CRO (Conversion Rate Optimization): Clareza da proposta, redução de campos no formulário, velocidade técnica e gatilhos de prova social.', fundamentalConcepts: [{ term: 'CRO (Conversion Rate Optimization)', definition: 'Conjunto de práticas e testes destinados a aumentar a percentagem de visitantes que realizam uma acção desejada.' }], practicalExamples: ['Um site que recebe 10.000 visitas e faz 100 vendas tem 1% de conversão. Ao otimizar o checkout para 2%, faz 200 vendas com o mesmo gasto de tráfego.'], angolaContext: 'Em Angola, colocar o logótipo oficial do Multicaixa Express e telefone de contacto visível no topo da página aumenta a taxa de conversão quase imediatamente.', caseStudy: { company: 'Venda de Ingressos Festivais Angola (Hipotético)', sector: 'Eventos', location: 'Luanda', situation: 'Tinha taxa de conversão de 1,1% na venda de bilhetes.', solution: 'Simplificou o checkout de 6 etapas para 2 e adicionou pagamento por referência Multicaixa.', results: 'A taxa de conversão subiu para 3,8%, esgotando os bilhetes em metade do tempo previsto.' }, recommendedTools: [{ name: 'Hotjar / Microsoft Clarity', category: 'Mapas de Calor', description: 'Gravações de tela anônimas de utilizadores.' }], practicalExercise: { title: 'Auditoria de Atrito de Conversão', prompt: 'Analise o fluxo de compra de um site e liste 5 pontos de fricção com sugestões práticas de melhoria.', expectedDeliverables: ['Relatório de optimização de conversão'] }, reviewQuestions: [{ question: 'Por que otimizar a conversão é mais rentável do que apenas comprar mais tráfego?', explanation: 'Porque comprar tráfego tem custo marginal contínuo; otimizar a taxa de conversão melhora permanentemente a eficiência de todo o investimento futuro.' }], summary: 'Ajuste os canais de venda antes de abrir as torneiras do tráfego.', resources: ['Guia Prático de CRO'], isCompleted: false },
      { id: 'm5-l8', moduleId: 5, order: 8, title: '8. Análise de campanhas', durationMinutes: 45, objectives: ['Diagnosticar a causa raiz de variações de desempenho em campanhas ativas'], introduction: 'Saber identificar rapidamente por que uma campanha subiu ou caiu de rendimento é a habilidade que salva contas de marketing.', theory: 'Metodologia de Diagnóstico em Cascata: O problema está no Anúncio (CTR baixo / Frequência alta), no Destino (Taxa de conversão da página baixa), na Oferta (Preço desalinhado) ou no Comercial (Demora no atendimento)?', fundamentalConcepts: [{ term: 'Diagnóstico em Cascata', definition: 'Técnica de avaliação sequencial das métricas para localizar o exacto ponto de falha no funil.' }], practicalExamples: ['CTR excelente de 3,2%, mas zero vendas -> o anúncio atrai, o problema está na página ou na oferta.'], angolaContext: 'Avaliar a estabilidade de operadoras móveis em dias de chuva ou grandes eventos em Luanda.', caseStudy: { company: 'Empresa de Limpeza a Seco AutoLavagem Express (Hipotético)', sector: 'Serviços', location: 'Talatona', situation: 'Campanha parou de gerar contactos de repente.', solution: 'Diagnóstico revelou que o link do WhatsApp na bio tinha quebrado por erro de digitação do novo número.', results: 'Corrigido o link em 5 minutos, a campanha voltou ao fluxo normal de mensagens.' }, recommendedTools: [{ name: 'Folha de Diagnóstico em Cascata AMD', category: 'Framework', description: 'Roteiro de diagnóstico de contas.' }], practicalExercise: { title: 'Resolução de Caso de Queda de Campanha', prompt: 'Dado um cenário onde o CPM dobrou e o CTR caiu pela metade, apresente o diagnóstico e o plano de correcção.', expectedDeliverables: ['Relatório técnico de correcção de campanha'] }, reviewQuestions: [{ question: 'Se uma campanha apresenta alto CTR mas zero conversões na página de destino, onde reside o problema?', explanation: 'O problema está na página de destino (lentidão, incoerência entre o anúncio e o texto, formulário com erro ou proposta de valor pouco convincente).' }], summary: 'Trabalhe com método científico para resolver crises de desempenho.', resources: ['Guia de Troubleshooting de Campanhas'], isCompleted: false },
      { id: 'm5-l9', moduleId: 5, order: 9, title: '9. Relatórios profissionais', durationMinutes: 45, objectives: ['Transformar planilhas complexas em relatórios claros e visualmente atraentes'], introduction: 'Um relatório incompreensível anula o brilho dos melhores resultados de marketing.', theory: 'Estrutura dos 3 níveis de relatório: Nível Operacional (para a equipa interna de tráfego e design), Nível Táctico (para a gerência de marketing) e Nível Executivo (para o CEO e directores financeiros com foco em ROI e crescimento).', fundamentalConcepts: [{ term: 'Relatório Executivo de 1 Página', definition: 'Síntese das métricas financeiras essenciais desenhada para leitura em menos de 2 minutos.' }], practicalExamples: ['Dashboard visual com gráficos de barras comparando mês anterior versus mês atual.'], angolaContext: 'Apresentar dados em moeda nacional (AOA) e evidenciar o impacto no posicionamento da marca no território angolano.', caseStudy: { company: 'Consultor Independente Mateus (Hipotético)', sector: 'Consultoria de Marketing', location: 'Luanda', situation: 'Clientes cancelavam porque recebiam relatórios de 40 páginas cheios de termos em inglês.', solution: 'Substituiu por um resumo executivo de 2 páginas em PDF focado em faturamento e novos clientes.', results: 'Nenhum cliente cancelou o contrato nos 12 meses seguintes.' }, recommendedTools: [{ name: 'Canva / Looker Studio', category: 'Design de Relatórios', description: 'Para apresentações visuais de impacto.' }], practicalExercise: { title: 'Criação de Relatório Executivo Mensal', prompt: 'Monte o relatório mensal sintético para a gerência de uma empresa de retalho em Luanda.', expectedDeliverables: ['Relatório executivo estruturado pronto para envio'] }, reviewQuestions: [{ question: 'Qual a principal diferença entre um relatório operacional e um relatório executivo?', explanation: 'O relatório operacional detalha métricas técnicas de cliques e lances; o executivo foca exclusivamente em resultados financeiros, CAC e retorno sobre investimento.' }], summary: 'Comunique resultados com elegância e clareza para conquistar a confiança da directoria.', resources: ['Templates de Relatórios Executivos da Academia'], isCompleted: false },
      { id: 'm5-l10', moduleId: 5, order: 10, title: '10. Looker Studio (Google Data Studio)', durationMinutes: 50, objectives: ['Criar painéis dinâmicos e automatizados em tempo real conectando GA4 e planilhas'], introduction: 'Looker Studio é a ferramenta padrão de visualização de dados corporativa do ecossistema Google.', theory: 'Conexão de fontes de dados (GA4, Google Search Console, Google Ads, Planilhas Google), criação de cartões de pontuação (Scorecards), gráficos temporais, filtros interativos de data e canal, fórmulas calculadas personalizadas.', fundamentalConcepts: [{ term: 'Conector de Dados', definition: 'Ponte de software que alimenta o painel do Looker Studio com informações atualizadas automaticamente.' }], practicalExamples: ['Criar um painel que atualiza sozinho todos os dias com as vendas e custos de marketing sem precisar de intervenção manual.'], angolaContext: 'Permitir aos gestores angolanos aceder ao painel através do telemóvel a qualquer hora do dia.', caseStudy: { company: 'Rede de Farmácias Drogaria Central (Hipotético)', sector: 'Farmácia', location: 'Luanda e Huambo', situation: 'Gastava 2 dias por semana a montar relatórios manuais no Excel.', solution: 'Construiu um painel no Looker Studio conectado diretamente ao GA4 e planilhas de vendas.', results: 'Poupou 16 horas semanais da equipa e ganhou acesso a dados em tempo real.' }, recommendedTools: [{ name: 'Looker Studio', category: 'BI e Visualização', description: 'Plataforma gratuita da Google.' }], practicalExercise: { title: 'Construção de Dashboard de Marketing no Looker Studio', prompt: 'Projete a disposição dos componentes visuais de um painel de tráfego pago e conversão.', expectedDeliverables: ['Layout do painel com filtros e scorecards definidos'] }, reviewQuestions: [{ question: 'Qual a maior vantagem de usar o Looker Studio em vez de planilhas estáticas?', explanation: 'A atualização automática dos dados em tempo real e a interatividade dos filtros para qualquer pessoa que visualize o link.' }], summary: 'Dashboards automatizados impressionam clientes e poupam dezenas de horas de trabalho.', resources: ['Tutorial Completo Looker Studio Google'], isCompleted: false },
      { id: 'm5-l11', moduleId: 5, order: 11, title: '11. Interpretação de resultados e anomalias', durationMinutes: 45, objectives: ['Identificar sazonalidades, erros de medição e tendências estatísticas'], introduction: 'Dados sem contexto enganam; um bom analista sabe separar uma tendência real de uma anomalia temporária.', theory: 'Análise de Séries Temporais: Sazonalidade semanal (dias úteis vs fins de semana), sazonalidade mensal (período de pagamento de salários em Angola do dia 25 ao dia 5), deteção de anomalias (picos de tráfego fantasma por bots ou falhas de tracking).', fundamentalConcepts: [{ term: 'Sazonalidade', definition: 'Padrão regular e previsível de variação de dados que se repete em intervalos específicos de tempo.' }], practicalExamples: ['Identificar que a queda de visitas no domingo não é um problema da campanha, mas o comportamento padrão do consumidor B2B.'], angolaContext: 'Compreender o impacto de feriados nacionais angolanos e pontes no comportamento de consumo online.', caseStudy: { company: 'Loja de Informática Luanda Tech (Hipotético)', sector: 'Tecnologia', location: 'Luanda', situation: 'O gestor entrou em pânico ao ver uma queda de 50% nas conversas num dia de feriado.', solution: 'O analista cruzou com o histórico do ano anterior, provando que era a sazonalidade típica do feriado e que o retorno normalizaria 48h depois.', results: 'Evitou a alteração desnecessária de campanhas lucrativas.' }, recommendedTools: [{ name: 'Gráficos de Linha com Médias Móveis', category: 'Estatística', description: 'Suavização de ruídos temporários.' }], practicalExercise: { title: 'Análise de Caso com Anomalia de Dados', prompt: 'Analise um gráfico com pico de 500% de visitas sem aumento de vendas e aponte a causa mais provável.', expectedDeliverables: ['Parecer técnico com investigação de causas prováveis'] }, reviewQuestions: [{ question: 'Por que não se deve tomar decisões drásticas de mudança de campanha com base em dados de um único dia isolado?', explanation: 'Porque factores externos pontuais (feriados, clima, falhas locais de rede) podem gerar flutuações temporárias que não refletem a tendência real.' }], summary: 'Mantenha a calma e analise as tendências consolidadas antes de mexer na operação.', resources: ['Manual de Análise Estatística para Marketing'], isCompleted: false },
      { id: 'm5-l12', moduleId: 5, order: 12, title: '12. Tomada de decisões baseada em dados (Framework Executivo)', durationMinutes: 50, objectives: ['Liderar comissões e reuniões de diretoria apresentando planos de crescimento comprovados'], introduction: 'O estágio final da maturidade em dados é a capacidade de dizer à administração onde investir o próximo milhão de Kwanzas com previsibilidade.', theory: 'Framework de Decisão em 4 Passos: 1. Pergunta Estratégica; 2. Coleta e Validação dos Dados; 3. Modelagem de Cenários (Conservador, Realista, Otimista); 4. Decisão de Alocação com Plano de Contingência.', fundamentalConcepts: [{ term: 'Modelagem de Cenários', definition: 'Projeção financeira que simula diferentes retornos possíveis com base em probabilidades estatísticas.' }], practicalExamples: ['Apresentar: "Se aumentarmos a verba em 500.000 AOA no canal Meta Ads, a previsão realista é gerar 85 novas vendas adicionais com lucro líquido de 1.200.000 AOA".'], angolaContext: 'Posicionar o departamento de marketing não como um centro de custos que pede dinheiro, mas como um centro de investimento gerador de receitas líquidas para a empresa em Angola.', caseStudy: { company: 'Grupo Empresarial Luanda Invest (Hipotético)', sector: 'Holding de Serviços', location: 'Luanda', situation: 'A administração considerava marketing como gasto dispensável.', solution: 'O director de marketing apresentou a modelagem comprovando que cada 1 Kwanza investido em marketing gerava 4,8 Kwanzas de margem bruta.', results: 'O orçamento anual de marketing foi triplicado pela administração executiva.' }, recommendedTools: [{ name: 'Simulador de Cenários Financeiros AMD', category: 'Estratégia Executiva', description: 'Template de projeção de receitas.' }], practicalExercise: { title: 'Proposta de Investimento com Modelagem de 3 Cenários', prompt: 'Monte a defesa de aumento de orçamento para o próximo trimestre com os cenários Conservador, Realista e Otimista.', expectedDeliverables: ['Documento executivo de recomendação de investimento'] }, reviewQuestions: [{ question: 'Como transformar a percepção do marketing de centro de custos para centro de lucro perante os accionistas?', explanation: 'Apresentando relatórios ancorados em métricas financeiras (CAC, LTV, ROAS, Faturação atribuída) e demonstrando o retorno líquido gerado por cada Kwanza investido.' }], summary: 'A liderança de marketing baseada em dados é o ápice da formação profissional de excelência.', resources: ['Framework Data-Driven Leadership Harvard'], isCompleted: false }
    ],
    assessment: {
      id: 'eval-m5',
      moduleId: 5,
      title: 'Exame de Avaliação do Módulo 5 — Métricas, Dados e Análise',
      timeLimitMinutes: 30,
      questions: [
        {
          id: 'q5-1',
          question: 'Se um produto possui uma margem de lucro bruta de 20%, qual é o Breakeven ROAS (ROAS de equilíbrio mínimo) necessário para não ter prejuízo?',
          options: ['2,0x', '3,5x', '5,0x', '10,0x'],
          correctAnswerIndex: 2,
          explanation: 'Breakeven ROAS = 1 ÷ 0,20 = 5,0x. Qualquer resultado abaixo de 5,0x gera prejuízo financeiro para esse produto.'
        },
        {
          id: 'q5-2',
          question: 'No Google Analytics 4 (GA4), como é modelada e registada a interação dos utilizadores?',
          options: [
            'Exclusivamente por visualizações de páginas estáticas',
            'Com base em eventos flexíveis acompanhados de parâmetros adicionais',
            'Por tempo total de login no computador',
            'Por número de emails trocados'
          ],
          correctAnswerIndex: 1,
          explanation: 'O GA4 tem como alicerce o modelo de dados baseado em eventos e parâmetros.'
        },
        {
          id: 'q5-3',
          question: 'Uma loja virtual teve 20.000 visitantes únicos no mês e registou 400 pedidos concluídos. Qual foi a taxa de conversão?',
          options: ['0,5%', '2,0%', '4,0%', '8,0%'],
          correctAnswerIndex: 1,
          explanation: 'Taxa de conversão = (400 ÷ 20.000) × 100 = 2,0%.'
        },
        {
          id: 'q5-4',
          question: 'Qual ferramenta gratuita do ecossistema Google é a mais indicada para criar relatórios e dashboards dinâmicos conectados ao GA4 e planilhas?',
          options: ['Google Meet', 'Looker Studio', 'Google Play Store', 'Google Fotos'],
          correctAnswerIndex: 1,
          explanation: 'O Looker Studio é a plataforma oficial da Google para Business Intelligence e visualização de dados.'
        },
        {
          id: 'q5-5',
          question: 'Qual a principal diferença entre um "Leading Indicator" (Indicador Antecipador) e um "Lagging Indicator" (Indicador Retrospectivo)?',
          options: [
            'Não existe diferença, são sinónimos',
            'O leading indicator permite prever resultados futuros e corrigir rotas antecipadamente, enquanto o lagging indicator mede um resultado que já ocorreu no passado',
            'O lagging indicator só serve para empresas públicas',
            'O leading indicator só mede despesas de combustível'
          ],
          correctAnswerIndex: 1,
          explanation: 'Leading indicators (ex: volume de leads qualificados) antecipam o resultado final futuro (ex: lucro final do mês).'
        }
      ]
    }
  },
  {
    id: 6,
    title: 'Módulo 6 — Direcção e Gestão Estratégica',
    subtitle: 'Liderança de equipas, negociação comercial, IA aplicada e carreira de executivo',
    description: 'Prepare-se para liderar no mais alto nível. Desenvolva habilidades de Diretor de Marketing (CMO), gestão de equipas multidisciplinares, elaboração de propostas milionárias e integração prática de Inteligência Artificial.',
    lessonsCount: 12,
    durationWeeks: 4,
    durationHours: 48,
    status: 'disponivel',
    progressPercent: 0,
    assessmentScore: undefined,
    gradient: 'from-slate-800 to-blue-950',
    iconName: 'Award',
    lessons: [
      { id: 'm6-l1', moduleId: 6, order: 1, title: '1. Papel do Director de Marketing (CMO)', durationMinutes: 50, objectives: ['Assumir a visão executiva e articulação com o Conselho de Administração'], introduction: 'O CMO moderno é o principal guardião do crescimento sustentável e da reputação da organização.', theory: 'Competências do CMO contemporâneo: Visão estratégica de mercado, interlocução com Finanças e Operações, liderança inspiradora e capacidade de tomar decisões de alto impacto sob incerteza.', fundamentalConcepts: [{ term: 'CMO (Chief Marketing Officer)', definition: 'O executivo de topo responsável pela estratégia e liderança de marketing corporativo.' }], practicalExamples: ['Definir a expansão da empresa para três novas províncias de Angola.'], angolaContext: 'Em Angola, os CMOs mais bem remunerados são os que demonstram capacidade de navegar desafios macroeconómicos e criar vantagens competitivas sólidas.', caseStudy: { company: 'Empresa de Bebidas Nacionais (Hipotético)', sector: 'Indústria e Bebidas', location: 'Luanda e Catumbela', situation: 'Perdia mercado para produtos importados caros.', solution: 'O novo CMO reposicionou a marca valorizando a produção nacional e orgulho angolano.', results: 'Aumento de 28% no market share nacional em 18 meses.' }, recommendedTools: [{ name: 'Framework de Liderança CMO MIT', category: 'Liderança', description: 'Competências executivas.' }], practicalExercise: { title: 'Elaboração da Carta Estratégica do CMO', prompt: 'Escreva as 3 prioridades estratégicas inegociáveis para o primeiro ano de gestão de um CMO.', expectedDeliverables: ['Documento com as 3 directrizes e metas de impacto corporativo'] }, reviewQuestions: [{ question: 'Como o papel do CMO difere do papel de um gestor de tráfego sénior?', explanation: 'O gestor foca-se na eficiência das campanhas de mídia; o CMO lidera pessoas, define posicionamento de longo prazo, orçamentos institucionais e alinhamento com a administração.' }], summary: 'Lidere com visão de longo prazo e construa valor sustentável para a marca.', resources: ['Livro: The Chief Marketing Officer Journal'], isCompleted: false },
      { id: 'm6-l2', moduleId: 6, order: 2, title: '2. Gestão de equipas de marketing', durationMinutes: 45, objectives: ['Recrutar, desenvolver e reter talentos criativos e analíticos'], introduction: 'Nenhum gestor constrói uma grande empresa sozinho; o seu maior activo é a equipa que você forma.', theory: 'Estruturação do time: Gestor de Tráfego, Copywriter, Designer/Editor de Vídeo, Especialista em Automação e Analista de Dados. Metodologias ágeis (Kanban/Scrum adaptadas ao marketing), rituais de alinhamento e cultura de feedback construtivo.', fundamentalConcepts: [{ term: 'Squad de Marketing', definition: 'Equipa multidisciplinar autónoma focada em atingir um objectivo específico de crescimento.' }], practicalExamples: ['Reunião diária (Daily) de 15 minutos para desbloquear gargalos de produção de criativos.'], angolaContext: 'Investir na formação interna contínua dos jovens profissionais angolanos para criar equipas de alta fidelidade e competência técnica.', caseStudy: { company: 'Agência Digital Luanda Criativa (Hipotético)', sector: 'Agência de Publicidade', location: 'Talatona', situation: 'Alta rotatividade de designers e prazos atrasados.', solution: 'Implementou sprints semanais no Trello e bónus financeiro por cumprimento de metas dos clientes.', results: 'Retenção da equipa subiu para 90% e entregas no prazo atingiram 98%.' }, recommendedTools: [{ name: 'Trello / Notion / Slack', category: 'Gestão de Equipas', description: 'Comunicação e fluxo de trabalho.' }], practicalExercise: { title: 'Estrutura Organizacional do Departamento de Marketing', prompt: 'Desenhe o organograma com as responsabilidades e indicadores de 5 cargos-chave do departamento.', expectedDeliverables: ['Organograma visual com atribuições e KPIs individuais'] }, reviewQuestions: [{ question: 'Qual o principal benefício de realizar reuniões diárias curtas (Daily) de 15 minutos?', explanation: 'Permite identificar rapidamente obstáculos que travam o trabalho de um membro da equipa antes que gerem atrasos no cronograma de lançamento.' }], summary: 'Crie um ambiente de confiança, autonomia e responsabilidade mútua.', resources: ['Manual de Liderança Ágil para Marketing'], isCompleted: false },
      { id: 'm6-l3', moduleId: 6, order: 3, title: '3. Gestão de clientes de alto valor (Key Accounts)', durationMinutes: 45, objectives: ['Conduzir negociações corporativas e reter contas estratégicas'], introduction: 'Grandes contas corporativas exigem sofisticação no atendimento e alinhamento institucional contínuo.', theory: 'Gestão de Stakeholders, alinhamento de expectativas antes do contrato, gestão preventiva de insatisfações e técnicas de Upsell e Cross-sell para aumentar o valor do contrato.', fundamentalConcepts: [{ term: 'Upsell e Cross-sell', definition: 'Venda de versões superiores do serviço ou produtos complementares para clientes actuais.' }], practicalExamples: ['Apresentar um plano de expansão de SEO para um cliente que já contratava apenas tráfego pago.'], angolaContext: 'Respeitar a cultura corporativa angolana de cordialidade, reuniões de cortesia e pontualidade institucional.', caseStudy: { company: 'Consultoria Estratégica Luanda Partners (Hipotético)', sector: 'Consultoria B2B', location: 'Miramar, Luanda', situation: 'Tinha contratos corporativos que não cresciam em valor há 2 anos.', solution: 'Criou revisões trimestrais de estratégia apresentando oportunidades de novas frentes de receita.', results: 'Aumento de 45% no valor médio anual dos contratos através de upsell de automação.' }, recommendedTools: [{ name: 'Pipeline de Contas Corporativas CRM', category: 'Vendas B2B', description: 'Gestão de contas-chave.' }], practicalExercise: { title: 'Proposta de Upsell para Conta Corporativa', prompt: 'Desenhe o roteiro de apresentação de um novo serviço complementar para um cliente satisfeito de longo prazo.', expectedDeliverables: ['Proposta comercial estruturada com cálculo de ROI adicional'] }, reviewQuestions: [{ question: 'Por que reter e expandir clientes actuais é muito mais lucrativo do que conquistar novos clientes?', explanation: 'Porque o CAC de expansão é quase zero e o cliente já confia na entrega e nos padrões de qualidade da empresa.' }], summary: 'Contas corporativas fidelizadas são o alicerce de estabilidade financeira da agência.', resources: ['Gestão Estratégica de Key Accounts'], isCompleted: false },
      { id: 'm6-l4', moduleId: 6, order: 4, title: '4. Gestão de projectos de marketing', durationMinutes: 45, objectives: ['Entregar campanhas complexas no prazo, no orçamento e com alto padrão de qualidade'], introduction: 'Ideias brilhantes falham miseravelmente se a execução do projecto for caótica e desorganizada.', theory: 'Fases da Gestão de Projectos: Iniciação (Termo de Abertura), Planeamento (WBS/EAP e cronograma), Execução, Monitorização e Encerramento. Gestão de riscos e caminhos críticos.', fundamentalConcepts: [{ term: 'Caminho Crítico (Critical Path)', definition: 'A sequência de tarefas interdependentes que determina a duração mínima total do projecto.' }], practicalExamples: ['O anúncio não pode ir ao ar sem o criativo aprovado e o link com pixel testado; essa cadeia é o caminho crítico.'], angolaContext: 'Adicionar margens de contingência para aprovações de orçamentos e prazos em feriados locais.', caseStudy: { company: 'Lançamento de Marca de Cosméticos Kwanzaa (Hipotético)', sector: 'Beleza e Moda', location: 'Luanda', situation: 'O evento presencial estava marcado, mas as peças digitais não estavam prontas.', solution: 'Aplicação de gestão de caminho crítico com priorização diária das peças essenciais.', results: 'Lançamento decorreu com sucesso e esgotou a primeira remessa de produtos em 48 horas.' }, recommendedTools: [{ name: 'Asana / Monday.com', category: 'Project Management', description: 'Controlo de prazos.' }], practicalExercise: { title: 'Estruturação da EAP (Estrutura Analítica de Projecto)', prompt: 'Divida o projecto de lançamento de um novo produto em 4 macro-entregas e 12 tarefas detalhadas.', expectedDeliverables: ['Diagrama de EAP com responsáveis e prazos'] }, reviewQuestions: [{ question: 'O que define o caminho crítico de um projecto de marketing?', explanation: 'É a cadeia de actividades que, se sofrer qualquer atraso de um dia, atrasará inevitavelmente a data de lançamento final de toda a campanha.' }], summary: 'Disciplina na gestão de projectos transforma criatividade em resultados tangíveis.', resources: ['Guia PMBOK para Marketing'], isCompleted: false },
      { id: 'm6-l5', moduleId: 6, order: 5, title: '5. Gestão de orçamento estratégico', durationMinutes: 45, objectives: ['Construir o P&L (Demonstração de Resultados) do departamento de marketing'], introduction: 'Falar a linguagem financeira do CFO é a chave para aprovar orçamentos maiores.', theory: 'Demonstração de Resultados do Marketing: Receita Bruta Gerada, Custos Variáveis de Mídia, Custos Fixos de Pessoal e Software, Margem de Contribuição e ROI Global. Métricas de eficiência de capital.', fundamentalConcepts: [{ term: 'Margem de Contribuição', definition: 'A receita restante após abater todos os custos variáveis directos de marketing e produto.' }], practicalExamples: ['Demonstrar que cada Kwanza adicional concedido ao marketing gerará 3,2 Kwanzas de margem de contribuição líquida.'], angolaContext: 'Planeamento financeiro contemplando a gestão cambial na compra de moedas estrangeiras para anúncios.', caseStudy: { company: 'Grupo de Retalho Moderna Luanda (Hipotético)', sector: 'Retalho', location: 'Luanda e Lobito', situation: 'O departamento financeiro cortava o orçamento de marketing todos os anos.', solution: 'O director de marketing apresentou o P&L detalhado provando a lucratividade líquida de cada campanha.', results: 'A administração aumentou o orçamento em 80% e incluiu o marketing no plano de bónus anual.' }, recommendedTools: [{ name: 'Planilha P&L de Marketing AMD', category: 'Finanças Corporativas', description: 'Demonstração de resultados em AOA.' }], practicalExercise: { title: 'Construção da DRE / P&L de Campanha Semestral', prompt: 'Preencha o P&L de um semestre com receitas estimadas de 15.000.000 AOA e detalhamento de todos os custos.', expectedDeliverables: ['Demonstrativo de lucros e perdas em formato executivo'] }, reviewQuestions: [{ question: 'Por que o P&L do departamento de marketing deve ser apresentado ao director financeiro?', explanation: 'Porque demonstra rigor contábil, alinhamento com as metas globais da empresa e prova a rentabilidade líquida do marketing.' }], summary: 'Trate o orçamento de marketing com o mesmo rigor de um fundo de investimento corporativo.', resources: ['Finanças para Executivos de Marketing'], isCompleted: false },
      { id: 'm6-l6', moduleId: 6, order: 6, title: '6. Elaboração de propostas comerciais de alto padrão', durationMinutes: 50, objectives: ['Redigir e precificar propostas comerciais irresistíveis para clientes corporativos'], introduction: 'Uma proposta comercial não é uma lista de preços; é um documento de diagnóstico e solução estratégica de negócios.', theory: 'Estrutura da Proposta Milionária: 1. Diagnóstico do Problema Actual do Cliente; 2. O Custo Oculto da Inacção (quanto ele perde a cada mês se não resolver o problema); 3. O Escopo da Solução Estratégica; 4. Projecções de Retorno Financeiro; 5. Investimento e Condições de Pagamento; 6. Garantias e Próximos Passos.', fundamentalConcepts: [{ term: 'Precificação por Valor (Value-Based Pricing)', definition: 'Cobrar com base no valor financeiro gerado para o cliente, em vez de cobrar por horas trabalhadas.' }], practicalExamples: ['Se o plano vai gerar 50.000.000 AOA de receitas novas para a empresa, cobrar 5.000.000 AOA de honorários é extremamente vantajoso para o cliente.'], angolaContext: 'Em Angola, propostas bem diagramadas em PDF com referências claras a prazos, coordenadas bancárias e NIF corporativo inspiram profissionalismo imediato.', caseStudy: { company: 'Consultor de Negócios Silva (Hipotético)', sector: 'Consultoria', location: 'Luanda', situation: 'Cobria 150.000 AOA por mês em propostas simples de email e recebia recusas.', solution: 'Passou a usar o modelo de Proposta de Alto Valor com diagnóstico em PDF profissional e precificação de 900.000 AOA.', results: 'Fechou 4 novos clientes de grande porte no primeiro trimestre.' }, recommendedTools: [{ name: 'Template de Proposta Comercial AMD (PDF/Word)', category: 'Vendas Corporativas', description: 'Template oficial da Academia.' }], practicalExercise: { title: 'Elaboração de Proposta Comercial Completa', prompt: 'Redija uma proposta comercial de 4 páginas para um cliente corporativo de médio porte em Luanda.', expectedDeliverables: ['Proposta comercial com diagnóstico, escopo, valor e cronograma'] }, reviewQuestions: [{ question: 'Qual a vantagem da precificação baseada em valor (Value-Based Pricing) sobre a cobrança por hora?', explanation: 'A cobrança por hora penaliza a rapidez e a experiência do profissional; a precificação por valor recompensa o impacto financeiro real gerado para o negócio.' }], summary: 'Propostas bem fundamentadas fecham negócios pelo valor e nunca pelo menor preço.', resources: ['Guia de Propostas Comerciais Vencedoras'], isCompleted: false },
      { id: 'm6-l7', moduleId: 6, order: 7, title: '7. Apresentação de estratégias (Pitching)', durationMinutes: 45, objectives: ['Dominar a arte da persuasão verbal e oratória perante conselhos de administração'], introduction: 'Ter a melhor estratégia do mundo é inútil se não souber defendê-la com magnetismo e segurança na mesa de reuniões.', theory: 'Técnicas de Storytelling Corporativo: Gancho inicial, confronto com o problema, clímax da solução e chamada irrecusável à acção. Comunicação não-verbal, postura executiva e gestão de perguntas difíceis.', fundamentalConcepts: [{ term: 'Executive Presence', definition: 'A combinação de autoconfiança, clareza verbal e autoridade que inspira credibilidade imediata em cargos de liderança.' }], practicalExamples: ['Apresentar uma defesa orçamental de 10 milhões de Kwanzas em 10 minutos sem gaguejar e respondendo a todas as objecções do conselho.'], angolaContext: 'Em Angola, a oratória firme, respeitosa e com dicção impecável gera respeito instantâneo perante ministérios, bancos e grandes corporações.', caseStudy: { company: 'Startup de Entregas Morro Bento (Hipotético)', sector: 'Logística', location: 'Morro Bento, Luanda', situation: 'Precisava de investimento para expandir a frota de entregas.', solution: 'O fundador treinou o pitch executivo de 7 minutos focando em densidade de rotas e CAC decrescente.', results: 'Conquistou um investidor anjo local com aporte de 25.000.000 AOA.' }, recommendedTools: [{ name: 'Estrutura Pitch Deck 10 Slides', category: 'Apresentações', description: 'Modelo para captação de investimento.' }], practicalExercise: { title: 'Gravação de Pitch Estratégico de 3 Minutos', prompt: 'Grave um áudio ou vídeo defendendo a contratação da sua consultoria de marketing perante a directoria.', expectedDeliverables: ['Roteiro e gravação do pitch de alto impacto'] }, reviewQuestions: [{ question: 'Qual a melhor postura ao receber uma pergunta difícil ou crítica agressiva de um director numa reunião?', explanation: 'Manter a calma, reconhecer a legitimidade da preocupação do director, responder com dados concretos e nunca levar a discussão para o lado pessoal.' }], summary: 'A oratória segura abre portas que nenhuma planilha consegue abrir sozinha.', resources: ['Manual de Comunicação Executiva'], isCompleted: false },
      { id: 'm6-l8', moduleId: 6, order: 8, title: '8. Inteligência Artificial aplicada ao Marketing', durationMinutes: 55, objectives: ['Integrar modelos avançados de IA (Gemini e LLMs) nos processos de pesquisa, copy e análise'], introduction: 'A Inteligência Artificial não vai substituir os profissionais de marketing; os profissionais que dominam a IA vão substituir os que não a utilizam.', theory: 'Engenharia de Prompts para Marketing: Prompts de Persona, Prompts de Pesquisa de Mercado, Prompts de Geração de Variações de Criativos e Análise de Sentimento. Automação de tarefas repetitivas, geração de insights e respeito à privacidade de dados dos clientes.', fundamentalConcepts: [{ term: 'Engenharia de Prompts (Prompt Engineering)', definition: 'A arte de formular instruções precisas e contextualizadas para obter respostas de altíssima qualidade de modelos de IA generativa.' }], practicalExamples: ['Usar o Gemini para analisar 100 comentários de clientes e extrair as 3 maiores dores ocultas do público em minutos.'], angolaContext: 'Utilizar a IA para adaptar campanhas globais à gíria, referências culturais e termos coloquiais respeitosos de Angola.', caseStudy: { company: 'Agência Criativa Talatona Tech (Hipotético)', sector: 'Comunicação', location: 'Talatona', situation: 'Demorava 3 dias para criar ideias de campanhas mensais.', solution: 'Implementou prompts estruturados no Gemini para gerar o primeiro rascunho de 20 ideias de pauta em 15 minutos.', results: 'Multiplicou a capacidade produtiva da equipa criativa por 4 sem contratar novos funcionários.' }, recommendedTools: [{ name: 'Google Gemini Pro / Workspace AI', category: 'Inteligência Artificial', description: 'Modelos de ponta.' }], practicalExercise: { title: 'Criação de Biblioteca de 5 Mega-Prompts de Marketing', prompt: 'Escreva 5 prompts detalhados com contexto, instruções e regras de saída para planeamento, copy e análise.', expectedDeliverables: ['Biblioteca de prompts documentada e pronta para uso da equipa'] }, reviewQuestions: [{ question: 'Por que o profissional de marketing nunca deve copiar e colar cegamente o texto gerado pela IA sem revisão humana?', explanation: 'Porque a IA pode cometer alucinações, soar genérica ou descontextualizada da realidade cultural e factual do mercado em que atua.' }], summary: 'Use a IA como um estagiário genial e incansável, mas mantenha o cérebro humano no controlo estratégico.', resources: ['Guia de Engenharia de Prompts da Academia'], isCompleted: false },
      { id: 'm6-l9', moduleId: 6, order: 9, title: '9. Planeamento estratégico empresarial integrado', durationMinutes: 50, objectives: ['Alinhar a estratégia de marketing com a visão global do negócio a 3 e 5 anos'], introduction: 'Marketing isolado é desperdício; marketing integrado com as metas plurianuais da empresa é liderança de mercado.', theory: 'Integração de OKRs (Objectives and Key Results), Balanced Scorecard (BSC) nas perspectivas Financeira, Clientes, Processos Internos e Aprendizagem/Crescimento. Alinhamento de fusões, aquisições e lançamentos de novas unidades de negócio.', fundamentalConcepts: [{ term: 'OKRs (Objectives and Key Results)', definition: 'Sistema de definição de metas ágeis utilizado por empresas líderes para alinhar prioridades estratégicas trimestrais.' }], practicalExamples: ['Objectivo Corporativo: Ser a marca de retalho preferida em 3 províncias. Key Result de Marketing: Alcançar 65% de Top of Mind e 500.000 clientes cadastrados no clube.'], angolaContext: 'Adaptar o planeamento plurianual à dinâmica da economia angolana e oportunidades de substituição de importações.', caseStudy: { company: 'Empresa Agropecuária Vale do Kwanza (Hipotético)', sector: 'Agronegócio', location: 'Malanje e Luanda', situation: 'Produzia excelentes alimentos mas não tinha marca nem canal digital estruturado.', solution: 'O plano estratégico criou a marca de distribuição directa ao consumidor com entregas programadas em Luanda.', results: 'Faturação direta subiu para 30% da receita total da fazenda com margens muito mais altas.' }, recommendedTools: [{ name: 'Plataforma de OKRs (Perdoo / Viva Goals)', category: 'Gestão Estratégica', description: 'Alinhamento corporativo.' }], practicalExercise: { title: 'Definição de OKRs Trimestrais de Marketing', prompt: 'Escreva 2 Objectivos estratégicos de marketing e 3 Resultados-Chave (KRs) mensuráveis para cada um.', expectedDeliverables: ['Quadro de OKRs do trimestre com métricas claras de sucesso'] }, reviewQuestions: [{ question: 'Como o framework de OKRs estimula o crescimento acelerado da organização?', explanation: 'Ao focar em metas desafiadoras e trimestrais mensuráveis, mantém toda a empresa alinhada nas prioridades que realmente movem a agulha dos resultados.' }], summary: 'Una o marketing ao plano diretor da empresa para construir um legado duradouro.', resources: ['Livro: Measure What Matters de John Doerr'], isCompleted: false },
      { id: 'm6-l10', moduleId: 6, order: 10, title: '10. Construção de portefólio profissional de impacto', durationMinutes: 45, objectives: ['Documentar estudos de caso reais com resultados comprovados para atrair cargos e contratos de elite'], introduction: 'O seu currículo diz o que você estudou; o seu portefólio prova o que você foi capaz de realizar.', theory: 'Metodologia STAR para Estudos de Caso de Portfólio: Situação (o cenário inicial da empresa), Tarefa (o desafio a ser superado), Acção (a estratégia e tácticas executadas) e Resultado (as métricas quantitativas de retorno financeiro e crescimento).', fundamentalConcepts: [{ term: 'Metodologia STAR', definition: 'Estrutura narrativa profissional: Situação, Tarefa, Acção e Resultado.' }], practicalExamples: ['Montar uma página online com 3 estudos de caso demonstrando redução de CAC em 40% e faturamento gerado de 18 milhões de Kwanzas.'], angolaContext: 'Um portefólio bem apresentado em Angola destaca-se instantaneamente, pois a maioria dos concorrentes não possui dados documentados.', caseStudy: { company: 'Gestor de Marketing Manuel António (Hipotético)', sector: 'Carreira Profissional', location: 'Luanda', situation: 'Trabalhava muito mas não era reconhecido nem recebia promoções.', solution: 'Documentou os resultados das campanhas dos últimos 2 anos no formato STAR num portefólio visual em PDF.', results: 'Foi contratado como Director de Marketing de uma multinacional com o dobro do salário anterior.' }, recommendedTools: [{ name: 'Notion / Behance / PDF Editorial AMD', category: 'Portefólio', description: 'Para apresentação de cases.' }], practicalExercise: { title: 'Redacção de 1 Estudo de Caso no Formato STAR', prompt: 'Descreva um projecto que você liderou ou participou seguindo rigorosamente a estrutura STAR.', expectedDeliverables: ['Estudo de caso de 1 página pronto para inclusão no portfólio executivo'] }, reviewQuestions: [{ question: 'Por que o elemento "Resultado" é a parte mais importante de um estudo de caso no formato STAR?', explanation: 'Porque é a prova concreta de que a acção implementada gerou impacto real e quantificável para o negócio, validando a competência do profissional.' }], summary: 'Documente vitórias e transforme experiência em autoridade inegável.', resources: ['Template de Portfólio Executivo da Academia'], isCompleted: false },
      { id: 'm6-l11', moduleId: 6, order: 11, title: '11. Preparação para entrevistas e posições executivas', durationMinutes: 45, objectives: ['Dominar entrevistas comportamentais e dinâmicas de seleção para cargos de gerência e direcção'], introduction: 'Nas posições executivas de topo, as decisões de contratação são tomadas com base em liderança, inteligência emocional e resolução de problemas sob pressão.', theory: 'Como responder a perguntas clássicas de directoria: "Conte-me sobre o seu maior fracasso e o que aprendeu", "Como você resolveria uma queda de 30% nas vendas da nossa empresa?", "Como você lida com conflitos entre equipa criativa e analítica?".', fundamentalConcepts: [{ term: 'Entrevista Comportamental Baseada em Competências', definition: 'Técnica de seleção onde o passado é o melhor preditor do comportamento futuro do líder.' }], practicalExamples: ['Responder com transparência a respeito de uma campanha que deu errado, mostrando como o erro foi corrigido e evitado no futuro.'], angolaContext: 'Demonstrar maturidade perante comités de recrutamento nacionais e internacionais sediados em Luanda.', caseStudy: { company: 'Candidata a Gerência Dra. Jandira (Hipotético)', sector: 'Transição de Carreira', location: 'Luanda', situation: 'Ficava nervosa em entrevistas de cargos de direcção.', solution: 'Treinou a simulação de respostas com o Tutor IA e estruturou as suas narrativas profissionais.', results: 'Foi aprovada em primeiro lugar para a posição de Gerente de Marketing e Comunicação de um banco de investimentos.' }, recommendedTools: [{ name: 'Simulador de Entrevistas Executivas Tutor IA', category: 'Preparação', description: 'Treino interativo com feedback.' }], practicalExercise: { title: 'Simulação de Respostas a 3 Perguntas Críticas de Directoria', prompt: 'Escreva a sua resposta executiva para a pergunta: "Por que devemos confiar a si o orçamento de marketing da nossa organização?".', expectedDeliverables: ['Resposta concisa e fundamentada de 2 minutos'] }, reviewQuestions: [{ question: 'Como responder sobre um fracasso profissional numa entrevista executiva sem se desqualificar?', explanation: 'Focar na lição aprendida, na maturidade desenvolvida e nas salvaguardas que você implementou para que aquele erro nunca mais acontecesse.' }], summary: 'Autoconhecimento, dados e segurança garantem a conquista dos melhores cargos.', resources: ['Guia de Entrevistas para Líderes de Marketing'], isCompleted: false },
      { id: 'm6-l12', moduleId: 6, order: 12, title: '12. Desenvolvimento de carreira nacional e internacional', durationMinutes: 50, objectives: ['Construir uma carreira de prestígio e valor inabalável no mercado angolano e global'], introduction: 'O mercado de marketing digital não tem fronteiras geográficas. Com o conhecimento certo, você pode liderar em Luanda, Lisboa, Londres ou trabalhar remotamente para qualquer parte do mundo.', theory: 'Personal Branding para Executivos: Posicionamento no LinkedIn com publicações de autoridade, participação em palestras e eventos do sector, consultoria independente de alto valor e educação contínua. Gestão de finanças pessoais do executivo.', fundamentalConcepts: [{ term: 'Personal Branding Executivo', definition: 'A gestão estratégica da sua própria reputação profissional no mercado de trabalho e negócios.' }], practicalExamples: ['Publicar mensalmente análises profundas sobre o mercado digital de Angola no LinkedIn e conectar-se com CEOs e fundadores.'], angolaContext: 'Aproveitar a enorme carência de gestores verdadeiramente estratégicos em Angola para se posicionar no top 1% dos profissionais mais bem remunerados do país.', caseStudy: { company: 'Director de Marketing Carlos M. (Hipotético)', sector: 'Carreira Global', location: 'Luanda / Internacional', situation: 'Ganhava como operador local sem perspetiva de crescimento.', solution: 'Concluiu a formação avançada, reformulou o seu LinkedIn com foco em estratégia e começou a prestar consultoria para empresas do espaço lusófono.', results: 'Triplicou a sua remuneração e lidera projectos em Angola e Portugal.' }, recommendedTools: [{ name: 'LinkedIn Executivo / Rede de Alumni AMD', category: 'Networking', description: 'Rede de contactos de alto nível.' }], practicalExercise: { title: 'Plano de Carreira de 3 Anos (Roadmap Profissional)', prompt: 'Desenhe o seu mapa de desenvolvimento profissional com metas para os próximos 12, 24 e 36 meses.', expectedDeliverables: ['Roadmap individual de carreira com metas de remuneração e cargos almejados'] }, reviewQuestions: [{ question: 'Qual o maior diferencial de um profissional de marketing que alcança o nível de Direcção Estratégica?', explanation: 'A capacidade de traduzir o marketing em resultados financeiros mensuráveis e de liderar pessoas com integridade, visão e resultados consistentes.' }], summary: 'Parabéns pela jornada de excelência na Academia de Marketing Digital. O futuro da liderança de marketing pertence a quem combina paixão com dados e rigor.', resources: ['Manual de Carreira Executiva da Academia'], isCompleted: false }
    ],
    assessment: {
      id: 'eval-m6',
      moduleId: 6,
      title: 'Exame de Avaliação do Módulo 6 — Direcção e Gestão Estratégica',
      timeLimitMinutes: 30,
      questions: [
        {
          id: 'q6-1',
          question: 'Qual a principal diferença entre precificação baseada em custos/horas e a precificação baseada em valor (Value-Based Pricing)?',
          options: [
            'A precificação baseada em valor cobra de acordo com a riqueza da família do cliente',
            'A precificação baseada em valor cobra em função do benefício e retorno financeiro que o projecto gera para o cliente, independentemente do tempo gasto',
            'A precificação por hora é sempre muito mais vantajosa para o consultor experiente',
            'Não existe diferença entre as modalidades'
          ],
          correctAnswerIndex: 1,
          explanation: 'A precificação por valor alinha os honorários ao impacto económico real gerado para o cliente.'
        },
        {
          id: 'q6-2',
          question: 'Na metodologia de portfólio e narrativa executiva STAR, o que significa o acrónimo?',
          options: [
            'Segurança, Trabalho, Análise, Relatório',
            'Situação, Tarefa, Acção, Resultado',
            'Segmentação, Tráfego, Automação, Retorno',
            'Sucesso, Talento, Ambição, Recompensa'
          ],
          correctAnswerIndex: 1,
          explanation: 'STAR significa Situação, Tarefa, Acção e Resultado.'
        },
        {
          id: 'q6-3',
          question: 'Em gestão de projectos de marketing, o que define o "Caminho Crítico"?',
          options: [
            'O trajecto mais rápido para o escritório em Luanda',
            'A sequência mais curta de ideias de conteúdo',
            'A sequência de tarefas interdependentes que determina o prazo mínimo inadiável para a conclusão de todo o projecto',
            'A lista de funcionários que recebem os maiores salários'
          ],
          correctAnswerIndex: 2,
          explanation: 'O caminho crítico é a espinha dorsal de prazos do projecto; qualquer atraso nele atrasa todo o lançamento final.'
        },
        {
          id: 'q6-4',
          question: 'Como a Inteligência Artificial (ex: Google Gemini) deve ser integrada no trabalho de marketing de excelência?',
          options: [
            'Para substituir 100% dos funcionários humanos sem qualquer supervisão',
            'Como assistente estratégico e acelerador de pesquisa, criatividade e análise, mantendo o discernimento e julgamento crítico humano no controlo',
            'Apenas para jogar xadrez nas horas vagas',
            'Como ferramenta exclusiva da equipa de manutenção de computadores'
          ],
          correctAnswerIndex: 1,
          explanation: 'A IA potencializa a velocidade e inteligência humana, mas requer validação estratégica e contextual humana.'
        },
        {
          id: 'q6-5',
          question: 'O que define a competência de "Executive Presence" (Presença Executiva) num Director de Marketing (CMO)?',
          options: [
            'Usar roupas caras sem entender nada de métricas',
            'Falar apenas em termos técnicos em inglês que ninguém compreende',
            'A capacidade de comunicar com clareza, inspirar confiança, alinhar o marketing às finanças da empresa e defender estratégias com dados perante o Conselho de Administração',
            'Trabalhar 20 horas por dia sem delegar nada à equipa'
          ],
          correctAnswerIndex: 2,
          explanation: 'Presença executiva é a síntese de autoconfiança, articulação de negócios e liderança orientada a resultados.'
        }
      ]
    }
  }
];
