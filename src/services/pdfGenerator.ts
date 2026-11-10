import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CourseModule, Lesson } from '../types';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { CASE_STUDIES } from '../data/caseStudiesData';

export interface PDFExportResult {
  doc: jsPDF;
  blobUrl: string;
  filename: string;
  download: () => void;
  print: () => void;
}

// Helpers for editorial styling
const PRIMARY_COLOR: [number, number, number] = [22, 119, 232]; // #1677E8
const NAVY_COLOR: [number, number, number] = [16, 43, 80];     // #102B50
const BG_LIGHT: [number, number, number] = [243, 246, 252];    // #F3F6FC
const TEXT_MUTED: [number, number, number] = [100, 116, 139];  // #64748B

function addRunningHeadersAndFooters(doc: jsPDF, title: string, skipFirstPage = true) {
  const totalPages = doc.getNumberOfPages();
  for (let i = skipFirstPage ? 2 : 1; i <= totalPages; i++) {
    doc.setPage(i);
    
    // Running Header
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    doc.text('ACADEMIA DE MARKETING H-DIGITAL • PROGRAMA EXECUTIVO', 20, 12);
    doc.text(title.toUpperCase().slice(0, 45), 190, 12, { align: 'right' });
    
    doc.setDrawColor(220, 230, 242);
    doc.setLineWidth(0.3);
    doc.line(20, 14, 190, 14);

    // Running Footer
    doc.line(20, 283, 190, 283);
    doc.setFontSize(8);
    doc.text('Documento Oficial Pedagógico • Uso Exclusivo do Estudante', 20, 288);
    doc.text(`Página ${i} de ${totalPages}`, 190, 288, { align: 'right' });
  }
}

function createCoverPage(
  doc: jsPDF,
  docCategory: string,
  docTitle: string,
  docSubtitle: string,
  studentName: string
) {
  // Editorial background top band
  doc.setFillColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.rect(0, 0, 210, 135, 'F');

  // Accent Blue stripe
  doc.setFillColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.rect(0, 135, 210, 4, 'F');

  // Institution Badge
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(20, 25, 60, 14, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text('ACADEMIA DE MARKETING H-DIGITAL', 23, 34);

  // Category Tag
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(220, 235, 255);
  doc.text(docCategory.toUpperCase(), 20, 58);

  // Main Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  const titleLines = doc.splitTextToSize(docTitle, 170);
  doc.text(titleLines, 20, 72);

  // Subtitle
  const currentY = 72 + titleLines.length * 9;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(190, 210, 240);
  const subLines = doc.splitTextToSize(docSubtitle, 170);
  doc.text(subLines, 20, currentY);

  // Lower Section Details
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text('DADOS DA EMISSÃO PEDAGÓGICA', 20, 160);

  doc.setDrawColor(220, 230, 242);
  doc.line(20, 164, 190, 164);

  autoTable(doc, {
    startY: 168,
    margin: { left: 20, right: 20 },
    theme: 'plain',
    styles: { font: 'helvetica', fontSize: 9.5, cellPadding: 2.5, textColor: [30, 41, 59] },
    body: [
      ['Estudante Inscrito:', studentName || 'Hamilton Domingos'],
      ['Nível da Formação:', 'Executivo Intermédio a Avançado'],
      ['Carga Horária Total:', '240 Horas lectivas (24 Semanas)'],
      ['Âmbito Geográfico:', 'Angola e Espaço Lusófono'],
      ['Fuso Horário de Referência:', 'Africa/Luanda (WAT / GMT+1)'],
      ['Data de Geração:', new Date().toLocaleDateString('pt-AO', { day: '2-digit', month: 'long', year: 'numeric' })],
      ['Autenticação do Documento:', `AMD-DOC-${Math.floor(100000 + Math.random() * 900000)}`]
    ]
  });

  // Footer note
  doc.setFontSize(8);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('© Academia de Marketing H-Digital • Todos os direitos pedagógicos reservados.', 20, 275);
}

function finalizeDoc(doc: jsPDF, filename: string, title: string): PDFExportResult {
  addRunningHeadersAndFooters(doc, title, true);
  const blob = doc.output('blob');
  const blobUrl = URL.createObjectURL(blob);

  return {
    doc,
    blobUrl,
    filename: filename.endsWith('.pdf') ? filename : `${filename}.pdf`,
    download: () => {
      doc.save(filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
    },
    print: () => {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = blobUrl;
      document.body.appendChild(iframe);
      iframe.onload = () => {
        iframe.contentWindow?.print();
      };
    }
  };
}

// 1. Manual Completo da Formação
export function generateCompleteCourseManual(modules: CourseModule[], studentName: string): PDFExportResult {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  const title = 'Manual Completo da Formação Executiva';

  createCoverPage(
    doc,
    'Manual Geral de Referência Profissional',
    'Academia de Marketing H-Digital: Manual Completo da Formação',
    'Guia curricular integral com 6 módulos, 67 tópicos práticos, fórmulas de rentabilidade e aplicação ao mercado de Angola.',
    studentName
  );

  // Table of Contents page
  doc.addPage();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text('Índice Geral do Programa Curricular', 20, 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('Estrutura oficial de 6 meses dividida em 24 semanas lectivas.', 20, 32);

  const tocRows = modules.map((m) => [
    `Módulo ${m.id}`,
    m.title.replace(`Módulo ${m.id} — `, ''),
    `${m.lessonsCount} Aulas`,
    `${m.durationHours}h (${m.durationWeeks} semanas)`
  ]);

  autoTable(doc, {
    startY: 40,
    head: [['Módulo', 'Denominação Curricular', 'Carga de Conteúdo', 'Duração Estimada']],
    body: tocRows,
    theme: 'striped',
    headStyles: { fillColor: NAVY_COLOR, textColor: [255, 255, 255], fontStyle: 'bold' },
    styles: { font: 'helvetica', fontSize: 9, cellPadding: 3.5 }
  });

  // Render each module summary
  modules.forEach((mod) => {
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
    doc.text(mod.title, 20, 25);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
    doc.text(mod.subtitle, 20, 32);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59);
    const descLines = doc.splitTextToSize(mod.description, 170);
    doc.text(descLines, 20, 40);

    let nextY = 40 + descLines.length * 5 + 6;

    // Table of lessons in this module
    const lessonRows = mod.lessons.map((l) => [
      l.title,
      `${l.durationMinutes} min`,
      l.objectives[0] || 'Domínio prático'
    ]);

    autoTable(doc, {
      startY: nextY,
      head: [['Aula / Tópico Curricular', 'Duração', 'Objectivo Central']],
      body: lessonRows,
      theme: 'grid',
      headStyles: { fillColor: PRIMARY_COLOR, textColor: [255, 255, 255], fontStyle: 'bold' },
      styles: { font: 'helvetica', fontSize: 8.5, cellPadding: 2.8 }
    });
  });

  return finalizeDoc(doc, 'AMD_Manual_Completo_Formacao.pdf', title);
}

// 2. Manual Individual de Cada Módulo
export function generateModuleManual(module: CourseModule, studentName: string): PDFExportResult {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  const title = `Manual do ${module.title}`;

  createCoverPage(
    doc,
    'Manual Temático de Módulo',
    module.title,
    module.subtitle,
    studentName
  );

  // Content pages for each lesson
  module.lessons.forEach((lesson, idx) => {
    doc.addPage();

    // Lesson Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
    doc.text(lesson.title, 20, 25);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    doc.text(`Capítulo ${idx + 1} de ${module.lessons.length} • Carga Estimada: ${lesson.durationMinutes} Minutos`, 20, 31);

    // Objectives Box
    doc.setFillColor(BG_LIGHT[0], BG_LIGHT[1], BG_LIGHT[2]);
    doc.roundedRect(20, 36, 170, 24, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
    doc.text('OBJECTIVOS DE APRENDIZAGEM:', 24, 42);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    let objY = 48;
    lesson.objectives.slice(0, 3).forEach((obj) => {
      doc.text(`• ${obj.slice(0, 100)}`, 24, objY);
      objY += 5;
    });

    // Theory
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
    doc.text('1. INTRODUÇÃO E FUNDAMENTAÇÃO TEÓRICA', 20, 68);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    const theoryLines = doc.splitTextToSize(`${lesson.introduction}\n\n${lesson.theory}`, 170);
    doc.text(theoryLines.slice(0, 20), 20, 75);

    // Angola Context
    let currentY = 75 + Math.min(theoryLines.length, 20) * 4.2 + 8;
    if (currentY < 180) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
      doc.text('2. APLICAÇÃO AO MERCADO DE ANGOLA', 20, currentY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(30, 41, 59);
      const angolaLines = doc.splitTextToSize(lesson.angolaContext, 170);
      doc.text(angolaLines.slice(0, 10), 20, currentY + 6);
      currentY += 6 + Math.min(angolaLines.length, 10) * 4.2 + 8;
    }

    // Case Study Box
    if (lesson.caseStudy && currentY < 230) {
      doc.setDrawColor(200, 220, 245);
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(20, currentY, 170, 40, 2, 2, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
      doc.text(`ESTUDO DE CASO PRÁTICO: ${lesson.caseStudy.company.toUpperCase()}`, 24, currentY + 7);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(70, 80, 95);
      doc.text(`Sector: ${lesson.caseStudy.sector} | Localização: ${lesson.caseStudy.location}`, 24, currentY + 12);
      
      const sitLines = doc.splitTextToSize(`Situação: ${lesson.caseStudy.situation}`, 162);
      doc.text(sitLines.slice(0, 2), 24, currentY + 18);

      const solLines = doc.splitTextToSize(`Solução: ${lesson.caseStudy.solution}`, 162);
      doc.text(solLines.slice(0, 2), 24, currentY + 27);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(16, 120, 60);
      doc.text(`Resultados: ${lesson.caseStudy.results}`, 24, currentY + 36);
    }
  });

  return finalizeDoc(doc, `AMD_Manual_Modulo_${module.id}.pdf`, title);
}

// 3. Manual Individual de Cada Aula
export function generateLessonManual(lesson: Lesson, moduleTitle: string, studentName: string): PDFExportResult {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  const title = lesson.title;

  createCoverPage(
    doc,
    'Manual Monográfico de Aula',
    lesson.title,
    `Pertencente ao ${moduleTitle}`,
    studentName
  );

  doc.addPage();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text(lesson.title, 20, 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text(`Duração Lectiva Recomendada: ${lesson.durationMinutes} minutos`, 20, 31);

  // Objectives
  autoTable(doc, {
    startY: 36,
    head: [['Objectivos de Aprendizagem Desta Aula']],
    body: lesson.objectives.map((o) => [`✓ ${o}`]),
    theme: 'plain',
    headStyles: { fillColor: PRIMARY_COLOR, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 9 },
    styles: { font: 'helvetica', fontSize: 8.5, cellPadding: 2.5 }
  });

  let currentY = (doc as any).lastAutoTable.finalY + 8;

  // Theory
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text('Desenvolvimento Teórico e Conceitos Fundamentais', 20, currentY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  const theoryLines = doc.splitTextToSize(`${lesson.introduction}\n\n${lesson.theory}`, 170);
  doc.text(theoryLines, 20, currentY + 6);

  currentY += 6 + theoryLines.length * 4.5 + 8;

  // Angola Market Application
  if (currentY > 240) {
    doc.addPage();
    currentY = 25;
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text('Aplicação Prática no Mercado de Angola', 20, currentY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  const angolaLines = doc.splitTextToSize(lesson.angolaContext, 170);
  doc.text(angolaLines, 20, currentY + 6);

  currentY += 6 + angolaLines.length * 4.5 + 8;

  // Practical Exercise
  if (currentY > 230) {
    doc.addPage();
    currentY = 25;
  }

  doc.setFillColor(BG_LIGHT[0], BG_LIGHT[1], BG_LIGHT[2]);
  doc.roundedRect(20, currentY, 170, 35, 2, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text(`EXERCÍCIO PRÁTICO: ${lesson.practicalExercise.title}`, 24, currentY + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 41, 59);
  const exLines = doc.splitTextToSize(lesson.practicalExercise.prompt, 162);
  doc.text(exLines.slice(0, 3), 24, currentY + 15);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text(`Entregáveis Esperados: ${lesson.practicalExercise.expectedDeliverables.join(' • ')}`, 24, currentY + 29);

  return finalizeDoc(doc, `AMD_Aula_${lesson.id}.pdf`, title);
}

// 4. Guia de Fórmulas e Indicadores de Marketing
export function generateFormulasGuide(studentName: string): PDFExportResult {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  const title = 'Guia Executivo de Fórmulas e Indicadores';

  createCoverPage(
    doc,
    'Manual de Métricas e Fórmulas Financeiras',
    'Guia de Fórmulas e Indicadores de Marketing Digital',
    'Fórmulas matemáticas completas, significado de variáveis e exemplos numéricos em Kwanzas (AOA).',
    studentName
  );

  doc.addPage();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text('Quadro Mestre de Fórmulas de Marketing', 20, 25);

  const formulasData = [
    [
      'CAC (Custo de Aquisição de Clientes)',
      'CAC = Custos Totais de MKT e Vendas ÷ Novos Clientes',
      'Investiu 600.000 AOA e conquistou 20 clientes = 30.000 AOA por cliente.'
    ],
    [
      'ROAS (Return on Ad Spend)',
      'ROAS = Receita Gerada em Mídia ÷ Investimento em Anúncios',
      'Faturou 2.000.000 AOA gastando 400.000 AOA em anúncios = ROAS de 5,0x.'
    ],
    [
      'CPL (Custo por Lead)',
      'CPL = Investimento na Campanha ÷ Total de Contactos Capturados',
      'Gastou 150.000 AOA e gerou 75 conversas no WhatsApp = 2.000 AOA por lead.'
    ],
    [
      'LTV (Lifetime Value)',
      'LTV = Ticket Médio × Compras Anuais × Anos de Retenção',
      'Cliente gasta 40.000 AOA, 3x por ano durante 2 anos = 240.000 AOA.'
    ],
    [
      'CTR (Click-Through Rate)',
      'CTR = (Total de Cliques ÷ Impressões do Anúncio) × 100',
      '800 cliques em 20.000 visualizações no feed = CTR de 4,0%.'
    ],
    [
      'Taxa de Conversão em Vendas',
      'Conversão = (Número de Vendas ÷ Total de Visitantes/Leads) × 100',
      '30 vendas a partir de 600 visitantes no catálogo = 5,0% de conversão.'
    ],
    [
      'Breakeven ROAS (ROAS Mínimo)',
      'Breakeven ROAS = 1 ÷ Margem de Lucro Bruta do Produto',
      'Se a margem bruta é 25% (0,25), o breakeven é 1 ÷ 0,25 = 4,0x.'
    ],
    [
      'ROI (Retorno do Investimento)',
      'ROI = [(Receita Líquida - Custo Total) ÷ Custo Total] × 100',
      'Lucro de 2.000.000 AOA sobre custo de 500.000 AOA = ROI de 300%.'
    ]
  ];

  autoTable(doc, {
    startY: 35,
    head: [['Indicador / Métrica', 'Fórmula Matemática Exata', 'Exemplo Prático no Mercado Angolano']],
    body: formulasData,
    theme: 'grid',
    headStyles: { fillColor: NAVY_COLOR, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 9 },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 45 },
      1: { cellWidth: 55 },
      2: { cellWidth: 70 }
    },
    styles: { font: 'helvetica', fontSize: 8.5, cellPadding: 3.5 }
  });

  return finalizeDoc(doc, 'AMD_Guia_Formulas_Indicadores.pdf', title);
}

// 5. Caderno de Exercícios Práticos
export function generateExercisesBook(modules: CourseModule[], studentName: string): PDFExportResult {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  const title = 'Caderno de Exercícios e Casos Práticos';

  createCoverPage(
    doc,
    'Caderno Prático de Aplicação',
    'Caderno de Exercícios e Casos Práticos de Marketing',
    'Actividades de campo, formulação de estratégias, redação de copy e resolução de desafios empresariais.',
    studentName
  );

  modules.forEach((mod) => {
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
    doc.text(`Caderno Prático: ${mod.title}`, 20, 25);

    const exerciseRows = mod.lessons.map((l) => [
      l.title,
      l.practicalExercise.title,
      l.practicalExercise.prompt,
      l.practicalExercise.expectedDeliverables.join('; ')
    ]);

    autoTable(doc, {
      startY: 35,
      head: [['Aula', 'Exercício Prático', 'Desafio Pedagógico', 'Entregáveis']],
      body: exerciseRows,
      theme: 'grid',
      headStyles: { fillColor: PRIMARY_COLOR, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 8.5 },
      columnStyles: {
        0: { cellWidth: 35, fontStyle: 'bold' },
        1: { cellWidth: 40 },
        2: { cellWidth: 60 },
        3: { cellWidth: 35 }
      },
      styles: { font: 'helvetica', fontSize: 7.5, cellPadding: 2.5 }
    });
  });

  return finalizeDoc(doc, 'AMD_Caderno_Exercicios_Praticos.pdf', title);
}

// 6. Glossário Profissional em PDF
export function generateGlossaryPDF(studentName: string): PDFExportResult {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  const title = 'Glossário Profissional de Marketing Digital';

  createCoverPage(
    doc,
    'Dicionário Terminológico Oficial',
    'Glossário Profissional de Marketing Digital',
    'Siglas, terminologia técnica, definições simplificadas e aplicações no contexto empresarial angolano.',
    studentName
  );

  doc.addPage();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text('Dicionário de Termos e Siglas de Marketing', 20, 25);

  const glossaryRows = GLOSSARY_TERMS.map((term) => [
    `${term.term}\n(${term.fullName})`,
    term.category,
    term.simpleExplanation,
    term.practicalExample
  ]);

  autoTable(doc, {
    startY: 33,
    head: [['Termo / Sigla', 'Categoria', 'Significado Simplificado', 'Exemplo Prático em Angola']],
    body: glossaryRows,
    theme: 'grid',
    headStyles: { fillColor: NAVY_COLOR, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 8.5 },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 35 },
      1: { cellWidth: 25 },
      2: { cellWidth: 55 },
      3: { cellWidth: 55 }
    },
    styles: { font: 'helvetica', fontSize: 8, cellPadding: 3 }
  });

  return finalizeDoc(doc, 'AMD_Glossario_Profissional.pdf', title);
}

// 7. Guia Prático de Ferramentas Digitais
export function generateToolsGuide(studentName: string): PDFExportResult {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  const title = 'Guia Prático de Ferramentas Digitais';

  createCoverPage(
    doc,
    'Manual de Ferramentas e Tecnologias',
    'Guia Prático de Ferramentas Digitais (MarTech)',
    'Inventário dos softwares recomendados para tráfego, análise, design, automação e gestão em Angola.',
    studentName
  );

  doc.addPage();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text('Pilha Tecnológica Recomendada (MarTech Stack)', 20, 25);

  const toolsRows = [
    ['Meta Ads Manager', 'Publicidade Paga', 'Gestão avançada de campanhas no Facebook, Instagram e WhatsApp.'],
    ['Google Ads & Keyword Planner', 'Tráfego de Pesquisa', 'Captura de procura activa e pesquisa de palavras-chave locais.'],
    ['Google Search Console', 'SEO Técnico', 'Monitorização de indexação e cliques orgânicos.'],
    ['Google Analytics 4 (GA4)', 'Web Analytics', 'Medição de eventos, origens de tráfego e conversões de páginas.'],
    ['Looker Studio', 'Business Intelligence', 'Criação de dashboards dinâmicos e relatórios visuais executivos.'],
    ['WhatsApp Business & APIs', 'Vendas e Atendimento', 'Canal de fecho mais potente e comunicação directa no mercado angolano.'],
    ['WordPress & Elementor', 'CMS e Landing Pages', 'Desenvolvimento ágil de páginas sem necessidade de código complexo.'],
    ['Make (Integromat) / Zapier', 'Automação de Processos', 'Conexão entre formulários de redes sociais, CRM e mensagens.'],
    ['CapCut & Canva Pro', 'Design e Criativos', 'Produção rápida de vídeos verticais e criativos de alto impacto.']
  ];

  autoTable(doc, {
    startY: 35,
    head: [['Ferramenta Recomendada', 'Categoria de Aplicação', 'Função Estratégica no Negócio']],
    body: toolsRows,
    theme: 'grid',
    headStyles: { fillColor: PRIMARY_COLOR, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 9 },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 50 },
      1: { cellWidth: 45 },
      2: { cellWidth: 75 }
    },
    styles: { font: 'helvetica', fontSize: 8.5, cellPadding: 3.5 }
  });

  return finalizeDoc(doc, 'AMD_Guia_Ferramentas_Digitais.pdf', title);
}

// 8. Resumos de Estudo Rápidos
export function generateStudySummaries(modules: CourseModule[], studentName: string): PDFExportResult {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  const title = 'Resumos de Estudo Executivos';

  createCoverPage(
    doc,
    'Síntese Pedagógica para Revisão',
    'Resumos de Estudo da Academia de Marketing H-Digital',
    'Principais conceitos, regras práticas e orientações de revisão para avaliações e concursos.',
    studentName
  );

  modules.forEach((mod) => {
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
    doc.text(`Síntese: ${mod.title}`, 20, 25);

    const summariesRows = mod.lessons.map((l) => [
      l.title,
      l.summary,
      l.reviewQuestions[0]?.question || 'Conceito chave'
    ]);

    autoTable(doc, {
      startY: 35,
      head: [['Aula', 'Resumo Essencial', 'Pergunta de Revisão Principal']],
      body: summariesRows,
      theme: 'striped',
      headStyles: { fillColor: NAVY_COLOR, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 8.5 },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 45 },
        1: { cellWidth: 65 },
        2: { cellWidth: 60 }
      },
      styles: { font: 'helvetica', fontSize: 8, cellPadding: 3 }
    });
  });

  return finalizeDoc(doc, 'AMD_Resumos_Estudo_Rapidos.pdf', title);
}

// 9. Certificado de Conclusão Oficial
export function generateCertificatePDF(
  studentName: string,
  completionDate: string,
  certificateId: string
): PDFExportResult {
  // A4 Landscape for certificate
  const doc = new jsPDF({ format: 'a4', orientation: 'landscape', unit: 'mm' });
  const title = `Certificado de Conclusão - ${studentName}`;

  // Decorative Border
  doc.setDrawColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.setLineWidth(3);
  doc.rect(10, 10, 277, 190);

  doc.setDrawColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.setLineWidth(0.8);
  doc.rect(13, 13, 271, 184);

  // Institution Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text('ACADEMIA DE MARKETING H-DIGITAL', 148.5, 32, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('PROGRAMA DE FORMAÇÃO PROFISSIONAL EXECUTIVA EM ANGOLA', 148.5, 38, { align: 'center' });

  // Certificate Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text('CERTIFICADO DE CONCLUSÃO', 148.5, 58, { align: 'center' });

  // Subtext
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(70, 80, 95);
  doc.text('Certifica-se formalmente para os devidos efeitos que', 148.5, 70, { align: 'center' });

  // Student Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(PRIMARY_COLOR[0], PRIMARY_COLOR[1], PRIMARY_COLOR[2]);
  doc.text(studentName.toUpperCase(), 148.5, 84, { align: 'center' });

  // Divider under name
  doc.setDrawColor(22, 119, 232);
  doc.setLineWidth(0.5);
  doc.line(70, 88, 227, 88);

  // Achievement Description
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(30, 41, 59);
  const textContent =
    'concluiu com êxito todas as exigências curriculares, avaliações práticas e estudos de caso da Formação Profissional Avançada em Gestão de Marketing Digital e Estratégia de Crescimento, abrangendo Estratégia Corporativa, Planeamento, Publicidade Paga (Meta/Google Ads), SEO, Análise de Dados e Direcção de Marketing.';
  const wrapped = doc.splitTextToSize(textContent, 210);
  doc.text(wrapped, 148.5, 98, { align: 'center' });

  // Details
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text('CARGA HORÁRIA: 240 HORAS (24 SEMANAS)  •  AVALIAÇÃO MÉDIA APROVADA: ESCALA 0-20 VALORES', 148.5, 126, { align: 'center' });

  // Signatures
  doc.setDrawColor(160, 175, 195);
  doc.setLineWidth(0.4);
  doc.line(45, 162, 115, 162);
  doc.line(182, 162, 252, 162);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(NAVY_COLOR[0], NAVY_COLOR[1], NAVY_COLOR[2]);
  doc.text('Director Académico', 80, 168, { align: 'center' });
  doc.text('Coordenador Pedagógico', 217, 168, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('Academia de Marketing H-Digital', 80, 172, { align: 'center' });
  doc.text('Comissão de Avaliação Docente', 217, 172, { align: 'center' });

  // Bottom Metadata
  doc.setFontSize(8);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text(`Identificador de Autenticidade: ${certificateId}`, 20, 188);
  doc.text(`Data de Emissão: ${completionDate} • Luanda, Angola`, 148.5, 188, { align: 'center' });
  doc.text('Certificado emitido pela plataforma oficial AMD', 277, 188, { align: 'right' });

  return finalizeDoc(doc, `Certificado_${certificateId}.pdf`, title);
}
