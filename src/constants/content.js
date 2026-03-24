/**
 * Conteúdo centralizado do site IBR
 * Altere textos aqui para atualizar em todo o site
 */

export const content = {
  // ============================================
  // NAVBAR
  // ============================================
  navbar: {
    logo: 'IBR',
    logoIcon: '✝️',
    prayerButton: 'Pedido de Oração',
    themeToggle: {
      dark: '☀️',  // Ícone quando está em dark mode (muda para claro)
      light: '🌙', // Ícone quando está em light mode (muda para escuro)
    },
    themeToggleLabel: {
      dark: 'Mudar para tema claro',
      light: 'Mudar para tema escuro',
    },
    links: [
      { path: '/', label: 'Início' },
      { path: '/sobre', label: 'Sobre Nós' },
      { path: '/ministerios', label: 'Ministérios' },
      { path: '/escala', label: 'Escala' },
      { path: '/transparencia', label: 'Transparência' },
    ],
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    logo: 'Igreja Batista Reformada',
    tagline: 'Soli Deo Gloria',
    address: 'Rua Exemplo, 123 - Centro\nCidade - Estado, CEP 00000-000',
    contact: {
      email: 'contato@ibr.com.br',
      phone: '(00) 00000-0000',
    },
    hours: [
      { day: 'Domingo:', time: '9h e 18h' },
      { day: 'Quarta:', time: '19h30' },
      { day: 'Sábado:', time: '18h (EBD)' },
    ],
    links: [
      { path: '/', label: 'Início' },
      { path: '/sobre', label: 'Sobre Nós' },
      { path: '/ministerios', label: 'Ministérios' },
      { path: '/escala', label: 'Escala' },
      { path: '/transparencia', label: 'Transparência' },
    ],
    social: {
      youtube: '#',
      instagram: '#',
      whatsapp: '#',
    },
    doctrine: 'Crenças fundamentadas na Confissão de Fé de Londres de 1689',
    copyright: `© ${new Date().getFullYear()} Igreja Batista Reformada. Todos os direitos reservados.`,
  },

  // ============================================
  // HOME
  // ============================================
  home: {
    hero: {
      motto: 'Soli Deo Gloria',
      title: 'Igreja Batista Reformada',
      verse: '"Porque dele, e por ele, e para ele são todas as coisas; glória, pois, a ele eternamente."',
      reference: 'Romanos 11:36',
      primaryButton: '▶️ Assista ao Vivo',
      secondaryButton: '🙏 Pedido de Oração',
      scrollText: 'role para baixo',
    },
    times: {
      title: 'Horários dos Cultos',
      cards: [
        {
          icon: '📖',
          title: 'Escola Bíblica Dominical',
          day: 'Sábado',
          hour: '18h00',
          featured: false,
        },
        {
          icon: '🕊️',
          title: 'Culto de Adoração',
          day: 'Domingo',
          hour: '9h00',
          featured: false,
        },
        {
          icon: '✨',
          title: 'Culto de Celebração',
          day: 'Domingo',
          hour: '18h00',
          featured: true,
        },
        {
          icon: '📿',
          title: 'Culto de Oração',
          day: 'Quarta-feira',
          hour: '19h30',
          featured: false,
        },
      ],
    },
    welcome: {
      title: 'Seja Bem-Vindo',
      paragraphs: [
        'Somos uma igreja que glorifica a Deus através da pregação fiel da Sua Palavra, da adoração sincera e do amor genuíno ao próximo.',
        'Cremos na soberania de Deus em todas as coisas e na autoridade das Escrituras como nossa única regra de fé e prática.',
      ],
      link: 'Conheça nossa história →',
    },
  },

  // ============================================
  // ABOUT
  // ============================================
  about: {
    hero: {
      title: 'Sobre Nós',
      subtitle: 'Conhecendo a Igreja Batista Reformada',
    },
    history: {
      title: 'Nossa História',
      paragraphs: [
        'A Igreja Batista Reformada nasceu do movimento reformado que teve início no século XVI com figuras como Martinho Lutero, João Calvino e Ulrich Zwingli. Os batistas reformados preservam as doutrinas da Reforma Protestante, combinando-as com a prática do batismo por imersão de crentes professos.',
        'Nossa igreja é parte da tradição batista reformada que valoriza a soberania de Deus, a autoridade das Escrituras e a glória de Deus em todas as coisas. Cremos que a teologia reformada é simplesmente o ensino bíblico aplicado de forma sistemática e consistente.',
      ],
    },
    cincoSolas: {
      title: 'As Cinco Solas',
      intro: 'As cinco solas são cinco frases latinas que resumem os pilares da Reforma Protestante e continuam sendo fundamentais para nossa fé e prática.',
      solas: [
        {
          latin: 'Sola Fide',
          title: 'Fé Somente',
          description: 'A justificação é pela fé somente, sem as obras da lei.',
        },
        {
          latin: 'Sola Scriptura',
          title: 'Escritura Somente',
          description: 'A Bíblia é a única regra de fé e prática.',
        },
        {
          latin: 'Solus Christus',
          title: 'Cristo Somente',
          description: 'A salvação é somente através de Jesus Cristo.',
        },
        {
          latin: 'Sola Gratia',
          title: 'Graça Somente',
          description: 'A salvação é pela graça de Deus, não por nossos méritos.',
        },
        {
          latin: 'Soli Deo Gloria',
          title: 'Para a Glória de Deus Somente',
          description: 'A finalidade última de todas as coisas é a glória de Deus.',
        },
      ],
    },
    confession: {
      title: 'Confessionalidade',
      subtitle: 'Confissão de Fé de Londres de 1689',
      icon: '📜',
      paragraphs: [
        'A Igreja Batista Reformada subscreve e se identifica com a Confissão de Fé de Londres de 1689, um documento histórico que articula a teologia reformada em linguagem clara e bíblica.',
        'Esta confissão aborda doutrinas fundamentais como a Trindade, a soberania de Deus na salvação, a depravação total do homem, a expiação limitada, a graça irresistível, a perseverança dos santos e a ordenança do batismo e ceia do Senhor.',
      ],
      quote: '"Aglória seja dada a Deus. Todas as coisas são dele, e por ele, e para ele."',
    },
    beliefs: {
      title: 'Nossas Crenças',
      items: [
        { icon: '✝️', title: 'A Trindade', description: 'Um só Deus em três pessoas: Pai, Filho e Espírito Santo' },
        { icon: '📖', title: 'A Bíblia', description: 'A Palavra de Deus, inspirada, infalível e suficiente' },
        { icon: '👼', title: 'A Salvação', description: 'Pela graça, pela fé, em Cristo sozinho' },
        { icon: '✝️', title: 'O Batismo', description: 'Por imersão, após profissão de fé' },
      ],
    },
  },

  // ============================================
  // MINISTERIOS
  // ============================================
  ministerios: {
    hero: {
      title: 'Ministérios e Projetos',
      subtitle: 'Servindo a Deus e ao próximo com dedicação',
    },
    title: 'Nossos Ministérios',
    ministries: [
      {
        id: 1,
        icon: '📚',
        title: 'Escola Bíblica Dominical',
        description: 'Ensino sistemático das Escrituras para todas as idades. Classes para crianças, jovens e adultos, com materiais atualizados e professores dedicados.',
        activities: ['Aulas para crianças', 'Estudo para jovens', 'Discipulado para adultos', 'Grupos de discussão'],
        schedule: 'Sábado - 18h00',
      },
      {
        id: 2,
        icon: '❤️',
        title: 'Ação Social',
        description: 'Expressando o amor de Cristo através de obras práticas na comunidade. Visamos atender necessidades físicas e espirituais dos menos favorecidos.',
        activities: ['Distribuição de alimentos', 'Visitas a asilos', 'Acompanhamento familiar', 'Assistência material'],
        schedule: 'Variável',
      },
      {
        id: 3,
        icon: '🌍',
        title: 'Missões',
        description: 'Comprometidos com a Grande Comissão de pregar o Evangelho a todas as nações. Apoiamos missionários no Brasil e no exterior.',
        activities: ['Apoio a missionários', 'Evangelismo local', 'Projetos internacionais', 'Oração missionária'],
        schedule: 'Reuniões mensais',
      },
      {
        id: 4,
        icon: '🎵',
        title: 'Louvor e Adoração',
        description: 'Guia nossa congregação em momentos de adoração fiel e reverente, utilizando músicas teologicamente ricas e adequadas ao culto.',
        activities: ['Grupo de louvor', 'Orquestra', 'Coral', 'Preparação musical'],
        schedule: 'Ensaio: Quinta - 19h',
      },
      {
        id: 5,
        icon: '👨‍👩‍👧‍👦',
        title: 'Ministério de Família',
        description: 'Cuidando das famílias da igreja através de aconselhamento, casais Bible study, e eventos que fortalecem os laços familiares.',
        activities: ['Encontro de casais', 'Estudo para pais', 'Retiros familiares', 'Aconselhamento'],
        schedule: 'Sábados alternados',
      },
      {
        id: 6,
        icon: '🎒',
        title: 'Ministério de Jovens',
        description: 'Discipulando jovens para uma vida de fé autêntica, com atividades que combinam ensino bíblico profundo e comunhão genuína.',
        activities: ['Estudos bíblicos', 'Eventos sociais', 'Acampamentos', 'Viagens missionárias'],
        schedule: 'Sexta - 19h30',
      },
    ],
    projectsTitle: 'Projetos Especiais',
    projects: [
      {
        title: 'Banco de Alimentos',
        description: 'Coleta e distribuição de alimentos para famílias necessitadas da comunidade.',
        impact: '50+ famílias atendidas mensalmente',
      },
      {
        title: 'Escola Dominical Online',
        description: 'Aulas e materiais disponíveis digitalmente paraSupplement o ensino presencial.',
        impact: '200+ alunos cadastrados',
      },
      {
        title: 'Grupo de Oração',
        description: 'Intercessão constante pelas necessidades da igreja e do mundo.',
        impact: 'Encontros diários',
      },
    ],
    participate: {
      title: 'Quer Participar?',
      description: 'Entre em contato conosco para saber como você pode contribuir com nossos ministérios e projetos. Há lugar para todos!',
      button: 'Fale Conosco',
    },
  },

  // ============================================
  // ESCALA
  // ============================================
  escala: {
    hero: {
      title: 'Escala de Serviço',
      subtitle: 'Organização dos irmão(a)s para os cultos',
    },
    info: {
      title: 'Como funciona?',
      description: 'A escala é organizada mensalmente pelos diáconos. Cada irmão(a) é lembrado(a) com antecedência sobre seu dia de serviço. Em caso de impossibilidade, por favor comunique com antecedência para que possamos remanejar.',
    },
    months: [
      'Janeiro 2026',
      'Fevereiro 2026',
      'Marção 2026',
      'Abril 2026',
      'Maio 2026',
      'Junho 2026',
    ],
    tableHeaders: ['Data / Culto', 'Diácono', 'Recepção', 'Som', 'Louvor'],
    diaconos: ['João Silva', 'Roberto Alves', 'Paulo Ferreira', 'Tiago Barbosa'],
    diaconoTitle: 'Nossos Diáconos',
    legendTitle: 'Legenda de Funções',
    legend: [
      { icon: '👤', title: 'Diácono', description: 'Coordena o culto e auxilia na ministração' },
      { icon: '🤝', title: 'Recepção', description: 'Acolhe os membros e visitantes' },
      { icon: '🎛️', title: 'Som', description: 'Opera o sistema de áudio do templo' },
      { icon: '🎵', title: 'Louvor', description: 'Dirige os cânticos da congregação' },
    ],
  },

  // ============================================
  // TRANSPARENCIA
  // ============================================
  transparencia: {
    hero: {
      title: 'Transparência Financeira',
      subtitle: 'Compromisso com a transparência e o bom uso dos recursos',
    },
    summary: {
      title: 'Resumo Financeiro',
      entradas: { label: 'Total de Entradas', value: 'R$ 300.000,00', period: 'Últimos 6 meses' },
      saidas: { label: 'Total de Saídas', value: 'R$ 212.000,00', period: 'Últimos 6 meses' },
      saldo: { label: 'Saldo Atual', value: 'R$ 88.000,00', period: 'Disponível em caixa' },
    },
    chart: {
      title: 'Entradas vs Saídas',
      entradas: 'Entradas',
      saidas: 'Saídas',
    },
    despesasTitle: 'Detalhamento de Despesas',
    despesas: [
      { icon: '🏛️', name: 'Templo e Manutenção', value: 'R$ 84.800,00', percent: 40 },
      { icon: '🎓', name: 'Ministério e EBD', value: 'R$ 53.000,00', percent: 25 },
      { icon: '🌍', name: 'Missões e Oferta', value: 'R$ 42.400,00', percent: 20 },
      { icon: '💡', name: 'Utilidades e Admin', value: 'R$ 31.800,00', percent: 15 },
    ],
    donations: {
      title: 'Como Contribuir',
      dizimos: {
        icon: '💳',
        title: 'Dízimos e Ofertas',
        quote: '"Trazei todos os dízimos à casa do depósito, para que haja mantimento na minha casa, e provai-me nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu e não derramar sobre vós bênção sem medida."',
        reference: 'Malaquias 3:10',
      },
      pix: {
        icon: '📱',
        title: 'Chave Pix',
        chave: 'ibr@igreja.com.br',
        copyButton: 'Copiar Chave',
      },
      banco: {
        icon: '🏦',
        title: 'Transferência Bancária',
        banco: '000 - Banco Exemplo',
        agencia: '1234-5',
        conta: '67890-1',
        cnpj: '00.000.000/0001-00',
      },
    },
    relatorio: {
      title: 'Prestação de Contas',
      description: 'A prestação de contas completa está disponível para todos os membros da igreja. Solicite junto à tesouraria ou aguarde a divulgação no final de cada trimestre.',
      icon: '📊',
    },
  },

  // ============================================
  // MODAL ORAÇÃO
  // ============================================
  modalOracao: {
    title: 'Pedido de Oração',
    subtitle: 'Deixe seu pedido nos braços de Deus',
    icon: '✝️',
    nameLabel: 'Seu nome (opcional)',
    namePlaceholder: 'Digite seu nome',
    anonymousLabel: 'Desejo permanecer anônimo',
    oracaoLabel: 'Seu pedido de oração *',
    oracaoPlaceholder: 'Escreva seu pedido de oração...',
    submitButton: 'Enviar Pedido',
    success: {
      icon: '🙏',
      title: 'Seu pedido foi enviado!',
      message: 'Deus ouça nossas orações. Amém.',
    },
  },
};

export default content;
