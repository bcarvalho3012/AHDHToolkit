const langPT = {
  // ============ UI STRINGS ============
  ui: {
    heroTitle: "Nomeie Sua Fera",
    heroSubtitle: "Um mapa completo dos traços do TDAH, como se sentem e as ferramentas exatas para lidar com eles — compilado a partir de dois livros líderes sobre TDAH em adultos.",
    heroSourceNote: 'Fontes: <em>Your Brain\'s Not Broken</em> (Tamara Rosier, PhD) &amp; <em>The Adult ADHD Tool Kit</em> (Ramsay &amp; Rostain)',
    footerText: 'Conteúdo sintetizado de <em>Your Brain\'s Not Broken</em> por Tamara Rosier, PhD (2021) e <em>The Adult ADHD Tool Kit</em> por J. Russell Ramsay &amp; Anthony L. Rostain (2015). Este é um material educacional de referência, não aconselhamento médico.',
  },

  // ============ NAVIGATION ============
  nav: {
    traits: "🧠 Traços & Ferramentas",
    grid: "🟥🟨🟦🟩 Grade Resolutiva",
    ladder: "🪜 Escada Emocional",
    patterns: "🔁 Padrões",
    cbt: "⚖️ Kit CBT",
    naming: "💡 Nomeie Seu TDAH",
    quiz: "🔍 Qual Padrão?",
    myday: "📋 Meu Dia",
    favs: "⭐ Minhas Ferramentas",
  },

  // ============ SOS MODAL ============
  sos: {
    fabLabel: "Estou tendo dificuldade agora",
    fabAriaLabel: "Preciso de ajuda agora",
    title: "O que está acontecendo agora?",
    subtitle: "Sem julgamentos. Escolha o mais próximo e vou te dar uma coisa para fazer — só uma.",
    backButton: "← Voltar às opções",
    breatheWord: "Respire",
    options: [
      { id: "spiraling", emoji: "🌀", label: "Espiral de ansiedade" },
      { id: "paralyzed", emoji: "🧊", label: "Congelado / Não consigo começar" },
      { id: "avoiding", emoji: "🛋️", label: "Evitando tudo" },
      { id: "overwhelmed", emoji: "🔥", label: "Sobrecarregado" },
      { id: "emotional", emoji: "🌊", label: "Emoções intensas" },
      { id: "shame", emoji: "😔", label: "Espiral de vergonha" },
    ],
    states: {
      spiraling: {
        title: "🌀 Você está em espiral. Vamos desacelerar.",
        color: "#E8443A",
        breathText: "Olhe o círculo. Inspire quando cresce. Expire quando encolhe. É só isso.",
        steps: [
          "<strong>Abandone tudo.</strong> Deixe seu celular de cabeça para baixo. Feche as abas. Só por 2 minutos.",
          "<strong>Ancoragem 5-4-3-2-1:</strong> Nome 5 coisas que você vê, 4 que ouve, 3 que você pode tocar, 2 que sente cheiro, 1 que prova.",
          "<strong>Escolha UMA coisa</strong> — a menor, mais fácil tarefa que você consegue ver. Faça só isso. Nada mais existe agora.",
        ],
      },
      paralyzed: {
        title: "🧊 Você está congelado. Vamos descongelar uma polegada.",
        color: "#4D96FF",
        steps: [
          "<strong>Mexa seus dedos dos pés.</strong> De verdade. Mova uma parte do corpo. Quebre o congelamento fisicamente.",
          "<strong>Coloque um timer de 2 minutos.</strong> Você só precisa fazer QUALQUER COISA por 2 minutos. É só isso.",
          "<strong>Primeiro Rascunho Feio:</strong> Faça a tarefa mal de propósito. Escreva errado. Deixe feio. O perfeccionismo é o congelamento — estrague para se libertar.",
          "<strong>Diga em voz alta:</strong> 'Estou congelado e tudo bem. Vou fazer algo bem pequeno.'",
        ],
      },
      avoiding: {
        title: "🛋️ Você está se escondendo no Azul. Sem julgamentos — vamos dar um empurrãozinho.",
        color: "#F5A623",
        steps: [
          "<strong>Nomeie:</strong> Diga 'Estou evitando porque...' — só nomear o sentimento reduz seu poder.",
          "<strong>Combine:</strong> Faça a tarefa evitada COM algo agradável — música, uma bebida legal, um lugar aconchegante.",
          "<strong>Diminua:</strong> Qual é a versão mais minúscula possível dessa tarefa? Faça só isso. 'Responder email' vira 'Abrir o email.'",
          "<strong>Suborna você:</strong> 'Depois de 10 minutos disso, eu ganho [recompensa].' Coloque timer e fale sério.",
        ],
      },
      overwhelmed: {
        title: "🔥 Demais. Muito demais. Vamos apagar um incêndio.",
        color: "#E8443A",
        steps: [
          "<strong>Despeje seu cérebro AGORA:</strong> Pegue papel ou abra anotações. Escreva tudo que está em sua cabeça. Não organize — só despeje.",
          "<strong>Circule UMA coisa.</strong> A que tornaria amanhã um pouco menos horrível. Só uma.",
          "<strong>Qual é a primeira ação física?</strong> Não 'fazer imposto' — 'abrir a pasta.' Não 'limpar a casa' — 'pegar aquele copo.'",
          "<strong>Tudo mais pode esperar.</strong> Estava esperando antes também. Dê permissão a si mesmo para ignorar por agora.",
        ],
      },
      emotional: {
        title: "🌊 Sentimentos intensos estão invadindo. Vamos surfar essa onda.",
        color: "#FF6B6B",
        breathText: "4 segundos dentro... 7 segundos segurando... 8 segundos para fora. Isso ativa o freio do seu corpo.",
        steps: [
          "<strong>Avalie de 1-10.</strong> 'Agora estou em um [número].' Só nomear a intensidade cria distância.",
          "<strong>Isso vai passar.</strong> Emoções são ondas — atingem o pico e recuam. Você sobreviveu a toda onda até agora.",
          "<strong>Não tome decisões agora.</strong> Seu cérebro emocional está dirigindo. Deixe passar antes de responder, enviar ou decidir qualquer coisa.",
          "<strong>Mova seu corpo:</strong> Caminhe, alongue, jogue água fria. Emoção é física — mova pelo seu corpo.",
        ],
      },
      shame: {
        title: "😔 Vergonha está gritando agora. Ela está mentindo para você.",
        color: "#8E6FBF",
        steps: [
          "<strong>Vergonha diz que VOCÊ é quebrado.</strong> A verdade: você TEM um cérebro que funciona diferente. Não é a mesma coisa.",
          "<strong>Você diria isso a um amigo?</strong> Tudo que está se dizendo — diria para alguém que ama? Então não diga para você.",
          "<strong>Nomeie uma coisa que você fez hoje.</strong> Qualquer coisa. Saiu da cama? Conta. Abriu esse app? Conta. Você está tentando, e isso importa.",
          "<strong>Este é um momento ruim, não uma vida ruim.</strong> Afaste o zoom. Ontem foi diferente. Amanhã também será.",
        ],
      },
    },
  },

  // ============ SECTION PAGES ============
  pages: {
    traits: {
      title: "Mapa de Traços TDAH → Ferramentas",
      desc: "Clique em qualquer traço para revelar o que é, como se sente e ferramentas passo a passo para lidar. Clique em ⭐ em qualquer ferramenta para salvá-la em seu kit pessoal.",
      searchPlaceholder: "Procure traços, sentimentos ou ferramentas…",
    },
    grid: {
      title: "A Grade Resolutiva",
      desc: 'Estrutura da Dra. Rosier para entender como você categoriza tarefas com base em dois eixos: <strong>Divertido vs. Não Divertido</strong> e <strong>Estimulante Emocionalmente vs. Não Estimulante</strong>. Entender onde uma tarefa fica nessa grade ajuda você a escolher a estratégia certa.',
    },
    ladder: {
      title: "A Escada da Saúde Emocional",
      desc: 'Criada por Rosier &amp; Gott, essa estrutura de 5 níveis ajuda você a ver onde está emocionalmente para escolher o que fazer em seguida. Você naturalmente sobe e desce diariamente. O objetivo não é perfeição — é consciência.',
      checkinTitle: "📍 Onde você está agora?",
      checkinSubtitle: "Toque um nível para registrar o check-in de hoje. Acompanhar ajuda você a ver padrões com o tempo.",
      historyTitle: "Últimos 14 dias",
      levels: [
        "☀️ 1 — Presente",
        "🌤️ 2 — Atento",
        "⛅ 3 — Piloto Automático",
        "🌧️ 4 — Modo Sobrevivência",
        "🌩️ 5 — Delirante",
      ],
    },
    patterns: {
      title: "Padrões Previsíveis",
      desc: 'A Dra. Rosier identificou esses padrões comuns de energia que nos mantêm presos. Reconhecer seu padrão é o primeiro passo para quebrá-lo.',
      quizLink: "Qual Padrão?",
      quizPrompt: "(Não tem certeza de qual é você? Tente o ",
      quizPromptEnd: " quiz.)",
    },
    cbt: {
      title: "O Kit CBT",
      desc: "Da abordagem cognitivo-comportamental baseada em evidências de Ramsay &amp; Rostain. Estas são as técnicas específicas e ensinávéis para gerenciar o TDAH dia a dia.",
    },
    naming: {
      title: "Nomeie Seu TDAH",
      desc: "Conceito poderoso da Dra. Rosier: criar uma metáfora para seu TDAH ajuda você a externalizar, entender e desenvolver estratégias. A metáfora que você escolhe literalmente muda como você pensa sobre soluções.",
      whyTitle: "🔬 Por Que Nomear Funciona (A Ciência)",
      whyText: 'Pesquisa mostra que metáforas mudam o pensamento em nível inconsciente. Em um estudo, pessoas que leram sobre crime descrito como uma <em>"fera"</em> sugeriram estratégias de controle (mais polícia, punições mais severas). Aqueles que leram sobre crime como uma <em>"doença"</em> sugeriram estratégias de tratamento (abordar causas raiz). A metáfora que você usa para seu TDAH molda as soluções para as quais você vai gravitar.',
    },
    quiz: {
      title: "Qual Padrão Sou?",
      desc: "Responda 6 perguntas rápidas para descobrir seu padrão dominante de energia do TDAH e obter estratégias direcionadas. Não há resposta errada — escolha o que ressoa.",
    },
    myday: {
      title: "Meu Dia",
      desc: 'A Grade Resolutiva em ação. Despeje suas tarefas, colora-as e veja seu equilíbrio energético. Reseta diariamente — sem culpa do dia anterior. <span style="color:#6BCB77">Suas tarefas são salvas neste navegador.</span>',
      brainDumpTitle: "🧠 Despejo Cerebral",
      brainDumpSubtitle: "Tire tudo de fora. Não organize — só digite e adicione. Depois colora cada tarefa por quadrante.",
      inputPlaceholder: "O que está em sua mente? Adicione uma tarefa…",
      addBtn: "+ Adicionar",
      carryForwardBtn: "📦 Carregar para frente inacabadas",
      clearDayBtn: "🗑️ Começar de novo",
      storageNote: "Suas tarefas são salvas neste navegador neste dispositivo.",
      confirmClear: "Começar do zero? Isso vai limpar todas as tarefas de hoje.",
      alertNoUnfinished: "Nenhuma tarefa inacabada de ontem!",
      emptyState: "Seu despejo cerebral está vazio. Adicione algumas tarefas acima — não pense, só digite.",
    },
    favs: {
      title: "⭐ Minhas Ferramentas",
      desc: 'Seu kit pessoal — as estratégias que você salvou de todas as seções. Estas são as que funcionam para <em>você</em>.',
      emptyState: "Nenhuma ferramenta salva ainda. Navegue pelas abas Traços & Ferramentas ou Kit CBT e toque a estrela ✩ em qualquer card de ferramenta para salvá-lo aqui.",
    },
  },

  // ============ LABELS & MISC ============
  labels: {
    what: "O Que É",
    feel: "Como Se Sente",
    tool: "Ferramentas para Lidar",
    how: "Como Usar",
    tapToStart: "— toque para começar",
    doneButton: "Pronto!",
    seeAllPatterns: "Ver todos padrões →",
    retakeQuiz: "Repetir quiz",
    filterAll: "Todos",
    filterAttention: "Atenção",
    filterEmotion: "Emoção",
    filterExecutive: "Função Executiva",
    filterMotivation: "Motivação",
    filterThinking: "Pensamento",
    filterSocial: "Social",
  },

  // ============ ENERGY / MY DAY ============
  energy: {
    meterTitle: "⚡ Equilíbrio Energético",
    red: "Vermelho — urgente/estressante",
    yellow: "Amarelo — chato mas necessário",
    blue: "Azul — relaxo/recarga",
    green: "Verde — divertido & significativo",
    legendRed: "Vermelho (esgota rápido)",
    legendYellow: "Amarelo (esgota lentamente)",
    legendBlue: "Azul (recarga lentamente)",
    legendGreen: "Verde (recarga rápido)",
    statTasks: "Tarefas",
    statDone: "Feitas",
    statStreak: "Sequência de dias",
    colorPrompt: "Colora suas tarefas para ver o equilíbrio energético",
    allDrain: '⚠️ <strong>Só drenagem, sem recarga.</strong> Sua bateria vai para zero. Adicione pelo menos uma atividade Verde ou Azul — você precisa de combustível, não só tarefas.',
    heavyRed: '🔴 <strong>Dia muito Vermelho.</strong> Isso é muito adrenalina. Algum desses pode virar Amarelo dividindo em passos menores? Seu corpo não consegue sustentar isso.',
    yellowMarathon: '🟡 <strong>Maratona Amarela.</strong> Tarefas chatas são drenagem lenta — agende uma recompensa Verde entre elas ou combine com algo agradável (música, bebida, podcast).',
    lotsBlue: '🔵 <strong>Muito Azul.</strong> Pergunte a si: isso está me recarregando ou adormecendo? Tente trocar um Azul por um Verde — recarga mais rápido e você se sentirá melhor depois.',
    niceBalance: '✅ <strong>Equilíbrio legal.</strong> Você tem drenagem e recarga misturadas. Isso é sustentável. Lembre de fazer o Verde — não pule porque acha que não mereceu.',
    greenOnBoard: '🟢 <strong>Verde no quadro.</strong> Bom. Garanta que realmente aconteça — é a primeira coisa que é sacrificada quando o dia fica ocupado, e não deveria.',
  },

  // ============ TRAITS DATA ============
  traits: [
    {
      id: "emotional-dysregulation",
      icon: "🌊", color: "#FF6B6B", cat: "emotion",
      title: "Desregulação Emocional",
      aka: "O Vizinho Raivoso / Emoções Intensas / Transbordamento",
      what: "Em vez de um 'mordomo' calmo (córtex pré-frontal) gerenciando suas respostas, pessoas com TDAH têm um 'vizinho raivoso' nos centros emocionais do cérebro que reage primeiro. Emoções batem mais forte, mais rápido e duram mais do que esperado. Um comentário de um vendedor pode arruinar seu dia inteiro.",
      feel: "Tristeza esmagadora por pequenos reveses. Frustração explosiva com pequenos obstáculos. Chorar quando você não se sente triste. Emoções que parecem desproporcionais à situação. Constrangimento com a intensidade de suas próprias reações.",
      tools: [
        {
          name: "Respiração 4-7-8",
          steps: ["Inspire lentamente pelo nariz por 4 segundos", "Segure a respiração por 7 segundos", "Expire lentamente pela boca por 8 segundos", "Repita 3-4 vezes. Isso ativa seu sistema nervoso parassimpático e interrompe a cascata de luta-ou-fuga"],
          hasTimer: true, timerSec: 19,
        },
        {
          name: "Nomeie a Intensidade (Escala 1-10)",
          steps: ["Quando a emoção invade, pause e classifique: 'Isso é um 7 agora'", "Nomear cria distância — você está observando a emoção em vez de ser engolido por ela", "Observe descer. Emoções são ondas, não estados permanentes", "Lembre-se: a emoção é real, mas não é o quadro inteiro"],
        },
        {
          name: "Check-in Escada Emocional",
          steps: ["Pergunte: Que nível estou agora? (1=Calmo, 3=Piloto Automático, 5=Delirante)", "Se você está no Nível 4-5, não tente resolver nada — só estabilize", "Uma respiração lenta. Nomeie o que sente. Não aja ainda", "Objetivo: voltar ao Nível 3 primeiro, depois Nível 2"],
        },
        {
          name: "Atuação de Método (Aja 'Como Se')",
          steps: ["Do Kit CBT: aja oposto à sua emoção atual", "Sorria se estiver furioso. Bata palmas e diga 'OK, vamos' se estiver preso", "Não é fingir — é preparar seu cérebro para uma resposta diferente", "Combinado com um primeiro passo definido, quebra o loop de paralisia emocional"],
        },
      ],
    },
    {
      id: "time-blindness",
      icon: "⏰", color: "#F5A623", cat: "executive",
      title: "Cegueira de Tempo",
      aka: "Relógio Quebrado / Agora vs. Não Agora",
      what: "Pessoas com TDAH não experimentam tempo como os neurotípicos. Essencialmente há apenas dois fusos horários: AGORA e NÃO AGORA. O tempo distorce — às vezes voa, às vezes rasteja. Estimar quanto tempo as coisas levam é quase impossível. Você está perpetuamente atrasado ou muito cedo.",
      feel: "Choque de que 3 horas passaram. Atraso crônico apesar de tentar. Pânico quando prazos aparecem 'de repente.' Sentimento de que o tempo é escorregadio e incontrolável. Culpa por estar sempre atrasado.",
      tools: [
        {
          name: "Âncoras de Tempo Externas",
          steps: ["Use relógios analógicos (o movimento visual dos ponteiros mostra o tempo passando espacialmente)", "Coloque vários alarmes: alarme de aviso, alarme de transição, alarme 'SAI AGORA'", "Use timers visuais (Time Timer, ampulheta ou um timer de cozinha em forma de porco)", "Coloque relógios em todo lado — torne o tempo visível"],
        },
        {
          name: "Treinamento de Estimativa de Tempo",
          steps: ["Antes de começar uma tarefa, escreva quanto tempo acha que levará", "Coloque um timer e faça a tarefa",
          "Compare sua estimativa com a realidade", "Regra da Dra. Rosier: multiplique sua estimativa por 3 — isso é mais perto da realidade", "Com o tempo, isso constrói um relógio interno mais preciso"],
          hasTimer: true, timerSec: 600,
        },
      ],
    },
  ],

  // ============ PATTERNS DATA ============
  patterns: [
    {
      id: "rest-crash",
      icon: "💤", color: "#4D96FF",
      title: "O Padrão Descanso → Queda",
      aka: "O Vórtice do Sofá",
      what: "Você diz que vai 'descansar primeiro, depois fazer coisas,' mas o descanso nunca termina. Rolar pela tela, cochilar ou desligar vira o dia inteiro. Você não é preguiçoso — seu cérebro está preso em modo de baixa estimulação e não consegue gerar a energia de ativação para mudar.",
      feel: "Culpa por 'desperdiçar o dia.' Sentimento de que descanso deveria ser suficiente para recarregar mas nunca é. Vendo o tempo desaparecer enquanto não faz nada produtivo. Prometendo a si mesmo 'só mais 5 minutos' por horas.",
      tools: [
        { name: "A Plataforma de Lançamento de 2 Minutos", steps: ["Coloque um timer por só 2 minutos", "Faça QUALQUER tarefa minúscula: dobre uma camisa, envie um texto, lave um prato", "O objetivo não é conclusão — é ativação. Movimento cria momentum", "Depois de 2 minutos, você pode parar sem culpa. A maioria das pessoas continua."] },
        { name: "Combine Descanso com Movimento", steps: ["Descanso real nem sempre é quietude — às vezes é movimento gentil", "Caminhe pelo quarteirão ouvindo um podcast", "Alongue no chão enquanto assiste seu show", "Isso mantém dopamina fluindo sem exigir 'trabalho'"] },
      ],
    },
    {
      id: "hyperfocus-burnout",
      icon: "🔥", color: "#E8443A",
      title: "O Padrão Hiperfoco → Esgotamento",
      aka: "O Sprint & Queda",
      what: "Você descobre algo interessante e mergulha completamente — 8 horas seguidas sem comida, água ou pausas. Você é incrivelmente produtivo... até desabar completamente. No dia seguinte você mal consegue funcionar. Este ciclo se repete infinitamente.",
      feel: "Euforia durante o hiperfoco. Exaustão física depois. Pulando refeições, ignorando mensagens, perdendo a noção de tempo. Sentimento de que você só consegue trabalhar a 100% ou 0% com nada entre.",
      tools: [
        { name: "A Guardrail Pomodoro", steps: ["Coloque um timer para 25 minutos de trabalho focado", "Quando toca, PARE — mesmo que esteja em fluxo", "Faça uma pausa de 5 minutos: levante, alongue, beba água", "Depois de 4 rodadas, faça uma pausa real de 15-30 minutos", "Essa é uma guardrail, não um hack de produtividade — previne a queda"] },
        { name: "O Alarme de Verificação Corporal", steps: ["Coloque um alarme recorrente a cada 90 minutos", "Quando toca, verifique: Estou com fome? Com sede? Preciso ir ao banheiro?", "O hiperfoco do TDAH suprime sinais corporais — você literalmente não consegue sentir", "Coma, beba e se mova antes de voltar"] },
      ],
    },
    {
      id: "anxiety-avoidance",
      icon: "😰", color: "#F5A623",
      title: "O Padrão Ansiedade → Evasão",
      aka: "O Muro de Preocupação",
      what: "Uma tarefa parece assustadora ou incerta, então você a evita. A evasão cria mais ansiedade porque agora está atrasada E assustadora. Então você evita mais. A tarefa cresce em um monstro em sua mente, muito maior do que realmente é.",
      feel: "Pavor ao pensar na tarefa. Tensão física no peito ou estômago. Justificativas elaboradas de por que 'amanhã' é melhor. A tarefa ocupando espaço mental 24/7 enquanto você faz tudo excepto isso.",
      tools: [
        { name: "A Verificação de Realidade 'Pior Caso'", steps: ["Escreva a coisa absolutamente pior que poderia acontecer se fizer a tarefa", "Agora escreva o que REALMENTE vai acontecer (quase sempre é menos dramático)", "Pergunte: qual é o custo de NÃO fazê-lo por outra semana?", "Frequentemente o custo da evasão é maior que o da tarefa em si"] },
        { name: "Reduza a Tarefa", steps: ["Qual é a versão mais minúscula possível dessa tarefa?", "'Fazer imposto' → 'Encontrar pasta do ano passado'", "'Limpar a casa' → 'Limpar o balcão da cozinha'", "'Responder aquele email' → 'Abrir o email'", "Faça o primeiro passo tão pequeno que pareça quase boba — é o ponto"] },
      ],
    },
    {
      id: "people-pleasing-resentment",
      icon: "🎭", color: "#8E6FBF",
      title: "O Padrão Agradar Pessoas → Ressentimento",
      aka: "A Armadilha do Sim",
      what: "Você diz sim para tudo porque a impulsividade do TDAH dificulta pausar e pensar sobre sua capacidade. Você também ama a dopamina de alguém ficar feliz com você. Então você está super comprometido, exausto e ressentido — mas sente culpa demais para desistir.",
      feel: "Dizer sim antes de pensar. Arrependimento imediato depois de concordar. Ressentimento construindo para pessoas que 'continuam pedindo.' Sentimento de que as necessidades de todos importam mais que as suas. Esgotamento por supercomprometimento.",
      tools: [
        { name: "A Regra de 24 Horas", steps: ["Nunca diga sim imediatamente a nenhum pedido novo", "Diga: 'Deixe-me verificar minha agenda e volto'", "Isso cria um buffer para seu 'sim' impulsivo esfriar", "Depois de 24 horas, verifique sua capacidade real antes de responder"] },
        { name: "O Radar de Ressentimento", steps: ["Antes de dizer sim, pergunte: 'Vou ressentir isso em uma semana?'", "Se a resposta for sim ou talvez — é um não", "Pratique: 'Eu adoraria ajudar mas não consigo desta vez'", "Lembre-se: todo sim para alguém é um não para algo em sua vida"] },
      ],
    },
  ],

  // ============ CBT TOOLS DATA ============
  cbtTools: [
    {
      id: "cbt-thought-record",
      icon: "📝", color: "#4ECDC4",
      title: "O Registro de Pensamento",
      aka: "Pegue, Verifique, Mude",
      what: "Um jeito estruturado de desafiar os pensamentos automáticos negativos que cérebros com TDAH geram constantemente. Em vez de acreditar em todo pensamento, você aprende a pegar distorções e reformular com evidências.",
      feel: "O crítico interior diz 'Você sempre falha' — essa ferramenta ajuda você a rebater com fatos.",
      tools: [
        { name: "Registro de Pensamento em 3 Colunas", steps: ["Escreva o pensamento automático: 'Vou falhar nisso'", "Liste as evidências A FAVOR (geralmente sentimentos, não fatos)", "Liste as evidências CONTRA (vezes que você sucedeu, habilidades que tem)", "Escreva um pensamento equilibrado: 'Isso é difícil, mas já fiz coisas difíceis antes'"] },
      ],
    },
    {
      id: "cbt-implementation-intentions",
      icon: "🎯", color: "#6BCB77",
      title: "Intenções de Implementação",
      aka: "Planos Se-Então / Planos Quando-Então",
      what: "Em vez de confiar em motivação ou memória, você cria planos se-então específicos que automatizam comportamento. Pesquisa mostra que esses duplicam a probabilidade de fazer — eles essencialmente pré-programam sua resposta.",
      feel: "Como ter um GPS para seu comportamento em vez de tentar navegar por sensação.",
      tools: [
        { name: "Planejamento Se-Então", steps: ["Escreva: 'QUANDO [situação], ENTÃO vou [ação específica]'", "Exemplo: 'QUANDO me sento na minha mesa, ENTÃO abro minha lista de tarefas'", "Exemplo: 'QUANDO sinto vontade de rolar, ENTÃO coloco timer de 5 min'", "Seja específico sobre o gatilho E a ação — planos vagos não funcionam", "Poste onde você vai ver. Repita em voz alta."] },
      ],
    },
    {
      id: "cbt-behavioral-experiments",
      icon: "🧪", color: "#F5A623",
      title: "Experimentos Comportamentais",
      aka: "Teste, Não Acredite",
      what: "Em vez de discutir com previsões ansiosas, você as testa. Seu cérebro com TDAH faz previsões catastróficas ('Se eu falar, todos vão me julgar'). Um experimento comportamental diz 'Vamos descobrir.'",
      feel: "Assustador no começo, mas libertador quando você descobre que suas previsões estavam erradas.",
      tools: [
        { name: "O Teste de Previsão", steps: ["Escreva sua previsão: 'Se eu fizer X, então Y vai acontecer'", "Classifique sua confiança (0-100%)", "Faça a coisa. Observe o que realmente acontece", "Compare: sua previsão foi precisa?", "Cérebros com TDAH superestimam perigo e subestimam capacidade de lidar — isso prova"] },
      ],
    },
    {
      id: "cbt-scaffolding",
      icon: "🏗️", color: "#4D96FF",
      title: "Estruturação Ambiental",
      aka: "Construa a Rampa, Não Se Force Pelas Escadas",
      what: "Em vez de tentar mudar seu comportamento através de força de vontade (que é limitada e pouco confiável com TDAH), você muda seu ambiente para tornar o comportamento desejado mais fácil e o indesejado mais difícil.",
      feel: "Como configurar sua vida para cair em bons hábitos em vez de lutar por eles.",
      tools: [
        { name: "Design de Fricção", steps: ["Torne bons comportamentos FÁCEIS: coloque vitaminas perto de café, mochila de academia perto da porta", "Torne comportamentos ruins DIFÍCEIS: delete aplicativos de redes sociais, coloque telefone em outro cômodo", "Use dicas visuais: post-its, livros abertos, listas de tarefas visíveis", "Projete seu espaço para a pessoa que VOCÊ REALMENTE É, não quem deseja ser"] },
      ],
    },
  ],

  // ============ QUIZ DATA ============
  quizQuestions: [
    {
      question: "Quando você tem um sábado livre sem nada planejado, você normalmente...",
      answers: [
        { text: "Acaba no sofá rolando por horas, planejando sair 'em breve'", pattern: "rest-crash" },
        { text: "Mergulha em um projeto e perde o dia inteiro sem comer", pattern: "hyperfocus-burnout" },
        { text: "Sente ansiedade sobre todas as coisas que DEVERIA estar fazendo", pattern: "anxiety-avoidance" },
        { text: "Diz sim para todo convite social e acaba exausto", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Seu maior problema de energia é...",
      answers: [
        { text: "Nunca consigo começar — inércia é meu inimigo", pattern: "rest-crash" },
        { text: "Vou muito duro e depois desabo completamente", pattern: "hyperfocus-burnout" },
        { text: "Preocupação usa toda minha energia antes de começar", pattern: "anxiety-avoidance" },
        { text: "As necessidades de outras pessoas me drenam antes de chegar às minhas", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Quando alguém pergunta como você está, você frequentemente pensa...",
      answers: [
        { text: "'Cansado, mas não sei por quê já que não FIZ nada'", pattern: "rest-crash" },
        { text: "'Exausto — trabalhei 12 horas diretas ontem'", pattern: "hyperfocus-burnout" },
        { text: "'Estressado com tudo que estou atrasado'", pattern: "anxiety-avoidance" },
        { text: "'Bem' (enquanto internamente ressentido de todas suas obrigações)", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Seu relatório de tempo de tela do telefone provavelmente mostraria...",
      answers: [
        { text: "Horas rolando redes sociais ou assistindo vídeos", pattern: "rest-crash" },
        { text: "Explosões intensas em um app/tópico, depois nada por dias", pattern: "hyperfocus-burnout" },
        { text: "Muito abrindo e fechando os mesmos apps ansiosamente", pattern: "anxiety-avoidance" },
        { text: "Mensagens constantes e respondendo a outras pessoas", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "A emoção que você sente MAIS frequentemente é...",
      answers: [
        { text: "Culpa por ser 'preguiçoso' mesmo estando exausto", pattern: "rest-crash" },
        { text: "Frustração de não conseguir sustentar minhas explosões produtivas", pattern: "hyperfocus-burnout" },
        { text: "Pavor de tarefas que continuam crescendo em minha mente", pattern: "anxiety-avoidance" },
        { text: "Ressentimento para com pessoas que 'continuam pedindo' coisas", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Se você pudesse corrigir UMA coisa sobre sua vida diária, seria...",
      answers: [
        { text: "Conseguir realmente COMEÇAR coisas quando quero", pattern: "rest-crash" },
        { text: "Encontrar um ritmo sustentável em vez de tudo-ou-nada", pattern: "hyperfocus-burnout" },
        { text: "Parar a espiral de preocupação que impede ação", pattern: "anxiety-avoidance" },
        { text: "Aprender a dizer não sem me sentir horrível", pattern: "people-pleasing-resentment" },
      ],
    },
  ],

  // ============ QUIZ RESULTS ============
  patternResults: {
    "rest-crash": {
      icon: "💤",
      title: "O Padrão Descanso → Queda",
      description: "Seu cérebro fica preso em modo de baixa estimulação. Descanso na verdade não o recarrega — vira um vórtice. A chave não é mais descanso, é o tipo CERTO de ativação.",
      strategies: [
        "Comece com a ação mais minúscula — dobre uma camisa, lave um prato",
        "Use um timer de 2 minutos: você só se compromete com 2 minutos de qualquer coisa",
        "Combine descanso com movimento gentil (caminha + podcast, alongamento + show)",
        "Agende UM evento de ativação cada dia — algo que você realmente goste",
        "Lembre-se: movimento cria motivação, não o oposto",
      ],
    },
    "hyperfocus-burnout": {
      icon: "🔥",
      title: "O Padrão Hiperfoco → Esgotamento",
      description: "Você é incrivelmente produtivo em explosões mas desaba depois. Seu cérebro ama intensidade mas não consegue sustentar. O objetivo não é parar hiperfocusar — é adicionar guardrails.",
      strategies: [
        "Use timers Pomodoro (25 min ligado, 5 min desligado) como guardrails, não hacks",
        "Coloque alarmes de verificação corporal a cada 90 minutos: Estou com fome? Com sede?",
        "Planeje sua queda: agende tempo de recuperação DEPOIS de sessões conhecidas de hiperfoco",
        "Mantenha uma lista de 'ponto de parada' — pré-decida onde vai pausar",
        "Lembre-se: 60% sustentável bate 100% brilhante-mas-quebrado",
      ],
    },
    "anxiety-avoidance": {
      icon: "😰",
      title: "O Padrão Ansiedade → Evasão",
      description: "Tarefas parecem mais assustadoras quanto mais você as evita, criando um loop de perdição. Seu cérebro superestima a dificuldade e subestima sua capacidade de lidar. A tarefa quase nunca é tão ruim quanto a ansiedade sobre ela.",
      strategies: [
        "Faça a verificação de realidade 'pior caso' — escreva, depois escreva o que REALMENTE vai acontecer",
        "Reduza a tarefa: 'Fazer imposto' → 'Encontrar pasta do ano passado'",
        "Coloque timer para 10 minutos — você consegue sobreviver a qualquer coisa por 10 minutos",
        "O custo da evasão é SEMPRE maior que o custo de fazer a tarefa",
        "Depois de começar, note: isso é tão ruim quanto imaginei?",
      ],
    },
    "people-pleasing-resentment": {
      icon: "🎭",
      title: "O Padrão Agradar Pessoas → Ressentimento",
      description: "Seu 'sim' impulsivo e necessidade de aprovação o mantêm super comprometido. Você dá até esvaziar, depois sente ressentimento — mas se sente culpado demais para recuar. Aprender a dizer não não é egoísta — é sobrevivência.",
      strategies: [
        "Use a regra de 24 horas: nunca diga sim imediatamente a nenhum pedido",
        "Coloque no script: 'Deixe-me verificar minha agenda e volto'",
        "O Radar de Ressentimento: 'Vou ressentir isso em uma semana? Então é não.'",
        "Todo sim para alguém é um não para algo em sua vida",
        "Pratique: 'Eu adoraria ajudar mas não consigo desta vez' — sem explicação",
      ],
    },
  },

  // ============ SOLVE-IT GRID DATA ============
  solveItGrid: {
    quadrants: [
      {
        class: "q-red",
        title: "🔴 Zona Vermelha — Não Divertido + Estimulante",
        subtitle: "Tarefas urgentes e estressantes que acionam luta-ou-fuga",
        examples: ["Contas atrasadas", "Conversas de conflito", "Prazos de última hora", "Declaração de imposto"],
        strategy: "Essas tarefas acionam adrenalina. Divida em passos minúsculos para reduzir sobrecarga. Coloque timer e faça só 10 minutos.",
      },
      {
        class: "q-yellow",
        title: "🟡 Zona Amarela — Não Divertido + Não Estimulante",
        subtitle: "Tarefas chatas e necessárias que drenam lentamente",
        examples: ["Entrada de dados", "Limpeza", "Emails rotineiros", "Papelada"],
        strategy: "Combine com algo agradável: música, podcast, bebida legal. Ou use trabalho em dupla — faça ao lado de alguém.",
      },
      {
        class: "q-blue",
        title: "🔵 Zona Azul — Divertido + Não Estimulante",
        subtitle: "Atividades confortáveis e fáceis — a 'zona do sofá'",
        examples: ["Rolar redes sociais", "Assistir TV", "Navegação casual", "Cochilar"],
        strategy: "Nem todo Azul é ruim — você precisa de recuperação. Mas pergunte: isso me recarga ou adormece? Troque um Azul por Verde.",
      },
      {
        class: "q-green",
        title: "🟢 Zona Verde — Divertido + Estimulante",
        subtitle: "Atividades energizantes que realmente o recarregam",
        examples: ["Projetos criativos", "Exercício", "Aprender algo novo", "Socializar com pessoas que ama"],
        strategy: "Esse é seu combustível. Agende PRIMEIRO, não como recompensa. Você precisa de Verde para ter energia para Vermelho e Amarelo.",
      },
    ],
    toolTitle: "🎯 Como Usar a Grade",
    toolSteps: [
      "Olhe sua lista de tarefas e mentalmente colora cada tarefa por quadrante",
      "Se é tudo Vermelho e Amarelo, você vai esgotar — adicione Verde",
      "Se é tudo Azul, está evitando — troque um Azul por um Verde",
      "Apunte para uma mistura: enfrentar Vermelho/Amarelo COM recompensas Verdes incluídas",
      "Use a aba 'Meu Dia' para realmente colorir e acompanhar seu equilíbrio diário",
    ],
  },

  // ============ NAMING METAPHORS ============
  namingMetaphors: [
    {
      emoji: "🐉",
      title: "O Dragão",
      desc: "Poderoso, imprevisível, respira fogo. Você não consegue matá-lo — mas consegue aprender a cavalgar.",
      strategy: "Se seu TDAH é um dragão, as soluções envolvem: aproveitar seu poder, construir estruturas à prova de fogo e aprender quando vai respira fogo.",
    },
    {
      emoji: "🌊",
      title: "O Oceano",
      desc: "Às vezes calmo, às vezes tempestuoso. Tem correntes poderosas. Bonito mas perigoso se você não respeita.",
      strategy: "Se seu TDAH é um oceano, as soluções envolvem: aprender a nadar, ler as marés, construir um bom barco e saber quando ficar em terra.",
    },
    {
      emoji: "🐒",
      title: "A Mente Macaco",
      desc: "Saltando de galho em galho. Curiosa, energética, facilmente distraída por coisas brilhantes.",
      strategy: "Se seu TDAH é um macaco, as soluções envolvem: criar caminhos interessantes para seguir, usar bananas (recompensas) estrategicamente e construir um parque que vai aonde você precisa.",
    },
    {
      emoji: "⚡",
      title: "A Tempestade Elétrica",
      desc: "Explosões de energia brilhante seguidas por escuridão. Imprevisível mas incrivelmente poderosa.",
      strategy: "Se seu TDAH é uma tempestade, as soluções envolvem: construir pára-raios (sistemas de captura), à prova de tempo sua vida e aprender a usar a eletricidade.",
    },
    {
      emoji: "🏎️",
      title: "O Carro de Corrida",
      desc: "Motor incrivelmente rápido, mas os freios nem sempre funcionam. Construído para velocidade, não para estacionamentos.",
      strategy: "Se seu TDAH é um carro de corrida, as soluções envolvem: encontrar a pista certa, melhorar os freios e aceitar que não foi construído para estradas lentas.",
    },
    {
      emoji: "🌋",
      title: "O Vulcão",
      desc: "Pressão se acumula silenciosamente, depois explode. Incrivelmente criativo e destrutivo em igual medida.",
      strategy: "Se seu TDAH é um vulcão, as soluções envolvem: válvulas de alívio de pressão, monitorar os sinais de aviso e canalizar a lava produtivamente.",
    },
  ],

  // ============ LADDER DATA ============
  ladderLevels: [
    {
      level: 1,
      title: "Nível 1 — Presente & Florescendo",
      color: "#6BCB77",
      emoji: "☀️",
      description: "Você está ancorado, consciente e fazendo escolhas conscientes. Consegue observar suas emoções sem ser arrastado. Isso não significa tudo perfeito — significa que você está lidando.",
      signs: ["Tomando decisões conscientes", "Consegue pausar antes de reagir", "Consciente de suas emoções sem se afogar nelas", "Consegue priorizar e seguir em frente"],
    },
    {
      level: 2,
      title: "Nível 2 — Atento & Gerenciando",
      color: "#4ECDC4",
      emoji: "🌤️",
      description: "Você está funcionando, mas esforçando mais. As coisas exigem mais energia que o normal. Você ainda consegue tomar boas decisões mas avisa que está trabalhando mais duro para se manter no caminho.",
      signs: ["Funcionando mas cansado", "Preciso de mais lembretes e sistemas", "Emoções são gerenciáveis mas presentes", "Consigo completar tarefas com esforço extra"],
    },
    {
      level: 3,
      title: "Nível 3 — Piloto Automático",
      color: "#F5A623",
      emoji: "⛅",
      description: "Passando pelas moções. Não é terrível, mas não é realmente presente. Você está sobrevivendo mas não se engajando. Aqui é onde a maioria das pessoas com TDAH passa muito tempo.",
      signs: ["Passando pelas moções", "Rolando mais que o normal", "Comendo para conforto, não fome", "Evitando conversas difíceis", "Motivação baixa, inércia alta"],
    },
    {
      level: 4,
      title: "Nível 4 — Modo Sobrevivência",
      color: "#E8443A",
      emoji: "🌧️",
      description: "Tudo parece difícil. Tarefas básicas parecem monumentais. Você está reagindo, não sendo proativo. Emoções estão no comando e seu córtex pré-frontal basicamente saiu do expediente.",
      signs: ["Tudo parece esmagador", "Gritando com as pessoas", "Não conseguo começar ou terminar nada", "Sintomas físicos: dores de cabeça, tensão, exaustão", "Tomando decisões impulsivas"],
    },
    {
      level: 5,
      title: "Nível 5 — Crise / Delirante",
      color: "#C06080",
      emoji: "🌩️",
      description: "Sua percepção está distorcida. Acredita nas histórias de vergonha ('Sou quebrado,' 'Nunca vou mudar'). Não consegue ver soluções e tudo parece permanente. Isso é temporário, mesmo que não pareça.",
      signs: ["Acreditando que sou fundamentalmente quebrado", "Não consigo ver nenhuma solução", "Tudo parece permanente e sem esperança", "Isolando de todo mundo", "Pode precisar de suporte profissional neste nível"],
    },
  ],
};
