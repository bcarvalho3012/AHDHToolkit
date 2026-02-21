// ============================================================
// Locale Português Brasileiro — ADHD Toolkit v3
// Tradução completa de en.js para PT-BR
// ============================================================

const langPT = {

  // ========================================
  // UI Chrome — chaves planas para strings simples
  // ========================================
  ui: {
    // Hero
    heroTitle: "Dê Nome à Sua Fera",
    heroSubtitle: "Um mapa completo dos traços do TDAH, como eles se manifestam e as ferramentas exatas para lidar com cada um — extraído de dois livros referência sobre TDAH adulto.",
    heroSource: 'Fontes: <em>Your Brain\'s Not Broken</em> (Tamara Rosier, PhD) &amp; <em>The Adult ADHD Tool Kit</em> (Ramsay &amp; Rostain)',

    // Nav buttons (9 total)
    navTraits: "🧠 Traços &amp; Ferramentas",
    navGrid: "🟥🟨🟦🟩 Grade Resolve-Aí",
    navLadder: "🪜 Escada Emocional",
    navPatterns: "🔁 Padrões",
    navCbt: "⚖️ Kit TCC",
    navNaming: "💡 Nomeie Seu TDAH",
    navQuiz: "🔍 Qual Padrão?",
    navMyday: "📋 Meu Dia",
    navFavs: "⭐ Minhas Ferramentas",

    // SOS FAB
    sosFabAriaLabel: "Preciso de ajuda agora",
    sosFabLabel: "Tô precisando de ajuda agora",

    // SOS Modal
    sosCloseLabel: "✕",
    sosTitle: "O que tá acontecendo agora?",
    sosSubtitle: "Sem julgamento. Escolha o que mais se encaixa e eu vou te dar uma coisa pra fazer — só uma.",
    sosBackBtn: "← Voltar às opções",

    // SOS Options (6)
    sosOptSpiralingEmoji: "🌀",
    sosOptSpiralingLabel: "Espirando",
    sosOptParalyzedEmoji: "🧊",
    sosOptParalyzedLabel: "Paralisado",
    sosOptAvoidingEmoji: "🛋️",
    sosOptAvoidingLabel: "Evitando",
    sosOptOverwhelmedEmoji: "🔥",
    sosOptOverwhelmedLabel: "Sobrecarregado",
    sosOptEmotionalEmoji: "🌊",
    sosOptEmotionalLabel: "Emoções intensas",
    sosOptShameEmoji: "😔",
    sosOptShameLabel: "Espiral de vergonha",

    // SOS Action Panels — nested
    sos: {
      spiraling: {
        title: "🌀 Você tá espirando. Vamos desacelerar.",
        titleColor: "#E8443A",
        hasBreathe: true,
        breatheCircleText: "Respire",
        breatheSubtext: "Olhe pro círculo. Inspire quando ele crescer. Expire quando ele encolher. Só isso.",
        steps: [
          "<strong>Agora:</strong> Coloque os pés firmes no chão. Sinta eles. Nomeie 3 coisas que você consegue ver neste momento.",
          "<strong>Depois:</strong> Seus pensamentos são o caso do Promotor — barulhentos, dramáticos, unilaterais. Você não precisa acreditar neles agora. Apenas arquive como \"não verificado.\"",
          "<strong>Quando estiver pronto:</strong> Escreva o pensamento que tá gritando mais alto. Só tirar da sua cabeça já tira parte do poder dele."
        ]
      },
      paralyzed: {
        title: "🧊 Você tá congelado. Vamos descongelar um pouquinho.",
        titleColor: "#4D96FF",
        hasBreathe: false,
        steps: [
          "<strong>Corpo primeiro.</strong> Levanta. Agora. Só fica de pé. Você não precisa fazer mais nada ainda.",
          "<strong>Agora:</strong> Bebe um copo d'água. Joga um pouco no rosto se quiser. Você tá acordando seu sistema nervoso.",
          "<strong>O passo absurdamente pequeno:</strong> Não pense na tarefa inteira. Qual é a menor ação física? Não \"fazer o projeto\" mas \"abrir o arquivo.\" Não \"limpar a casa\" mas \"pegar uma coisa do chão.\" Faça só isso.",
          "<strong>Lembre-se:</strong> Você não precisa se sentir motivado. Você precisa de 51% — votos suficientes pra passar. A ação cria motivação, não o contrário."
        ]
      },
      avoiding: {
        title: "🛋️ Você tá se escondendo no Azul. Sem julgamento — vamos dar um empurrãozinho.",
        titleColor: "#F5A623",
        hasBreathe: false,
        steps: [
          "<strong>Faz um check-in:</strong> Esse Azul tá te recarregando ou te anestesiando? Seja honesto. Se tivesse recarregando, você não ia se sentir culpado.",
          "<strong>O combinado:</strong> Coloque um timer de 15 minutos. Faça uma tarefa Amarela — a mais chata, irritante, aquela que você tá evitando. 15 minutos. São 900 segundos. Você já assistiu vídeos mais longos no YouTube.",
          "<strong>Depois:</strong> Após 15 minutos, você ganhou seu tempo Azul sem culpa. Ou — talvez descubra que quer continuar. Qualquer resultado é uma vitória.",
          "<strong>Desafie a mentira:</strong> \"Eu faço depois\" significa \"Eu vou me sentir pior com isso depois.\" Você sabe disso. 15 minutos. Vai."
        ]
      },
      overwhelmed: {
        title: "🔥 Demais. Coisa demais. Vamos apagar um incêndio de cada vez.",
        titleColor: "#E8443A",
        hasBreathe: false,
        steps: [
          "<strong>Despejo cerebral:</strong> Pega um papel ou abre uma nota. Escreve tudo que tá na sua cabeça. Não organiza. Não prioriza. Só despeja. Coloca um timer de 3 minutos e escreve até tocar.",
          "<strong>Agora circule TRÊS.</strong> Só três coisas que realmente importam hoje. Todo o resto é problema de amanhã. Vai continuar lá — não vai fugir.",
          "<strong>Escolha UMA das três.</strong> Defina o primeiro passo físico. Faça ele absurdamente pequeno.",
          "<strong>Pegue o pensamento:</strong> \"Se eu não consigo fazer tudo, pra que fazer alguma coisa?\" — isso é pensamento tudo-ou-nada. Fazer uma coisa é infinitamente mais que zero coisas."
        ]
      },
      emotional: {
        title: "🌊 Emoções grandes tão chegando com tudo. Vamos surfar a onda.",
        titleColor: "#FF6B6B",
        hasBreathe: true,
        breatheCircleText: "Respire",
        breatheSubtext: "4 segundos inspirando... 7 segundos segurando... 8 segundos soltando. Isso ativa o freio de mão do seu corpo.",
        steps: [
          "<strong>Nomeie e dê uma nota:</strong> \"Isso é ___ e tá num __/10 agora.\" Nomear cria distância. Você tá observando a onda, não se afogando nela.",
          "<strong>Lembre-se:</strong> O sentimento é real. A história que seu cérebro tá contando sobre ele pode não ser. Emoções são ondas — elas atingem o pico e passam. Essa também vai passar.",
          "<strong>Não aja com base nisso ainda.</strong> Se dê 24 horas antes de tomar qualquer decisão baseada nesse sentimento. Seu Advogado de Defesa precisa de tempo pra preparar o caso."
        ]
      },
      shame: {
        title: "😔 A vergonha tá gritando agora. Ela tá mentindo pra você.",
        titleColor: "#8E6FBF",
        hasBreathe: false,
        steps: [
          "<strong>Escuta isso:</strong> Você não é seu TDAH. Você não é seu pior momento. Você é uma pessoa lidando com um cérebro que funciona diferente — e você tá aqui, tentando. Isso conta.",
          "<strong>Os fantasmas tão falando.</strong> O que eles tão dizendo? Escreve. \"Você sempre...\" \"Você nunca...\" \"Todo mundo consegue...\" — tira da sua cabeça e coloca no papel, onde fica menos convincente.",
          "<strong>Agora pergunte:</strong> Se seu melhor amigo te dissesse que tá se sentindo assim, você concordaria com os fantasmas? Ou diria algo mais gentil? Diga essa coisa mais gentil pra você mesmo. Em voz alta, se conseguir.",
          "<strong>Um ato de cuidado:</strong> Não produtividade. Cuidado. Faz um chá. Sai um minuto pra tomar ar fresco. Manda mensagem pra alguém de confiança. Você não precisa merecer gentileza consigo mesmo."
        ]
      }
    },

    // Section Headers
    traitsTitle: "Traços do TDAH → Mapa de Ferramentas",
    traitsDesc: "Clique em qualquer traço pra ver o que é, como se sente e ferramentas passo a passo pra lidar com ele. Toque na ⭐ de qualquer ferramenta pra salvar no seu kit pessoal.",

    gridTitle: "A Grade Resolve-Aí",
    gridDesc: 'Framework da Dra. Rosier pra entender como você categoriza tarefas com base em dois eixos: <strong>Divertido vs. Não Divertido</strong> e <strong>Emocionalmente Estimulante vs. Não Estimulante</strong>. Entender onde uma tarefa se encaixa nessa grade ajuda a escolher a estratégia certa.',

    ladderTitle: "A Escada de Saúde Emocional",
    ladderDesc: "Criada por Rosier &amp; Gott, esse framework de 5 níveis ajuda você a ver onde está emocionalmente pra poder escolher o que fazer a seguir. Você sobe e desce naturalmente ao longo do dia. O objetivo não é perfeição — é consciência.",

    patternsTitle: "Padrões Previsíveis",
    patternsDesc: 'A Dra. Rosier identificou esses padrões comuns de energia que nos mantêm presos. Reconhecer seu padrão é o primeiro passo pra quebrá-lo. (Não sabe qual é o seu? Tente o quiz <a href="#" onclick="switchToPage(\'quiz\');return false" style="color:var(--accent)">Qual Padrão?</a>)',

    cbtTitle: "O Kit TCC",
    cbtDesc: "Da abordagem cognitivo-comportamental baseada em evidências de Ramsay &amp; Rostain. Essas são as técnicas específicas e ensináveis pra lidar com o TDAH no dia a dia.",

    namingTitle: "Nomeie Seu TDAH",
    namingDesc: "Conceito poderoso da Dra. Rosier: criar uma metáfora pro seu TDAH ajuda a externalizá-lo, entendê-lo e desenvolver estratégias. A metáfora que você escolhe muda literalmente a forma como você pensa sobre soluções.",

    quizTitle: "Qual Padrão Sou Eu?",
    quizDesc: "Responda 6 perguntas rápidas pra descobrir seu padrão dominante de energia no TDAH e receber estratégias direcionadas. Não tem resposta errada — escolha o que mais ressoa com você.",

    mydayTitle: "Meu Dia",
    mydayDesc: 'A Grade Resolve-Aí em ação. Despeje suas tarefas, dê cores a elas e veja seu balanço de energia. Reseta todo dia — sem culpa de ontem. <span style="color:#6BCB77">Suas tarefas são salvas neste navegador.</span>',

    favsTitle: "⭐ Minhas Ferramentas",
    favsDesc: "Seu kit pessoal — as estratégias que você salvou de todas as seções. Essas são as que funcionam pra <em>você</em>.",

    // Search
    searchPlaceholder: "Buscar traços, sentimentos ou ferramentas…",

    // Filter chips (7)
    filterAll: "Todos",
    filterAttention: "Atenção",
    filterEmotion: "Emoção",
    filterExecutive: "Função Executiva",
    filterMotivation: "Motivação",
    filterThinking: "Pensamento",
    filterSocial: "Social",

    // Trait card render labels
    labelWhatItIs: "O Que É",
    labelHowItFeels: "Como Se Sente",
    labelTools: "Ferramentas pra Lidar",
    labelThePattern: "O Padrão",
    labelStrategies: "Estratégias pra Quebrar",
    labelWhatItIsCbt: "O Que É",
    labelHowToUse: "Como Usar",

    // Timer
    timerTapToStart: "— toque pra iniciar",
    timerDone: "Pronto!",

    // My Day — Stats
    statTasks: "Tarefas",
    statDone: "Feitas",
    statDayStreak: "Dias seguidos",

    // My Day — Energy Meter
    energyTitle: "🔋 Balanço de Energia",
    energyRedLabel: "Vermelho (drena rápido)",
    energyYellowLabel: "Amarelo (drena devagar)",
    energyBlueLabel: "Azul (recarrega devagar)",
    energyGreenLabel: "Verde (recarrega rápido)",
    energyColorPrompt: "Dê cores às suas tarefas pra ver o balanço de energia",

    // My Day — Energy Nudge messages
    nudgeAllDrain: '⚠️ <strong>Só desgaste, zero recarga.</strong> Sua bateria vai zerar. Adicione pelo menos uma atividade Verde ou Azul — você precisa de combustível, não só de tarefas.',
    nudgeHeavyRed: '🔴 <strong>Dia pesado de Vermelho.</strong> Muita adrenalina. Alguma dessas pode virar Amarela se você quebrar em passos menores? Seu corpo não aguenta isso.',
    nudgeYellowMarathon: '🟡 <strong>Maratona de Amarelo.</strong> Tarefas chatas são um desgaste lento — agende uma recompensa Verde entre elas ou combine com algo agradável (música, uma bebida, um podcast).',
    nudgeLotsBlue: '🔵 <strong>Muito Azul.</strong> Se pergunte: isso tá me recarregando ou me anestesiando? Tente trocar um Azul por um Verde — recarrega mais rápido e você vai se sentir melhor depois.',
    nudgeNiceBalance: '✅ <strong>Bom equilíbrio.</strong> Você tem desgaste e recarga misturados. Isso é sustentável. Lembre-se de fazer o Verde — não pule porque acha que não mereceu.',
    nudgeGreenOnBoard: '🟢 <strong>Verde no jogo.</strong> Boa. Garanta que ele realmente aconteça — é a primeira coisa sacrificada quando o dia aperta, e não deveria ser.',

    // My Day — Brain Dump
    brainDumpTitle: "🧠 Despejo Cerebral",
    brainDumpSubtitle: "Coloca tudo pra fora. Não organiza — só digita e adiciona. Depois dê uma cor pra cada tarefa pelo quadrante.",
    brainDumpPlaceholder: "O que tá na sua cabeça? Adicione uma tarefa…",
    brainDumpAddBtn: "+ Adicionar",

    // My Day — Task empty state
    taskEmptyEmoji: "🧠",
    taskEmptyText: "Seu despejo cerebral tá vazio. Adicione tarefas acima — não pensa, só digita.",

    // My Day — Task color tooltips
    taskColorRedTitle: "Vermelho — urgente/estressante",
    taskColorYellowTitle: "Amarelo — chato mas necessário",
    taskColorBlueTitle: "Azul — tranquilo/recarrega",
    taskColorGreenTitle: "Verde — divertido & significativo",

    // My Day — Actions
    carryForwardBtn: "📦 Levar tarefas inacabadas",
    freshStartBtn: "🗑️ Começar do zero",
    storageNote: "Suas tarefas são salvas neste navegador neste dispositivo.",
    clearDayConfirm: "Começar do zero? Isso vai limpar todas as tarefas de hoje.",
    noUnfinishedAlert: "Nenhuma tarefa inacabada de ontem!",

    // Favorites — empty state
    favEmptyEmoji: "⭐",
    favEmptyText: "Nenhuma ferramenta salva ainda. Navegue pelas abas Traços &amp; Ferramentas ou Kit TCC e toque na ✩ estrela de qualquer ferramenta pra salvar aqui.",

    // Favorites render
    favFromLabel: "de",

    // Footer
    footer: 'Conteúdo sintetizado de <em>Your Brain\'s Not Broken</em> por Tamara Rosier, PhD (2021) e <em>The Adult ADHD Tool Kit</em> por J. Russell Ramsay &amp; Anthony L. Rostain (2015). Isto é uma referência educacional, não aconselhamento médico.',

    // Ladder check-in
    ladderCheckinTitle: "📍 Onde você tá agora?",
    ladderCheckinSubtitle: "Toque num nível pra registrar o check-in de hoje. Acompanhar ajuda a identificar padrões ao longo do tempo.",
    ladderCheckinBtn1: "☀️ 1 — Presente",
    ladderCheckinBtn2: "🌤️ 2 — Atento",
    ladderCheckinBtn3: "⛅ 3 — Piloto Automático",
    ladderCheckinBtn4: "🌧️ 4 — Sobrevivência",
    ladderCheckinBtn5: "🌩️ 5 — Delirante",
    ladderHistoryTitle: "Últimos 14 dias",

    // Quiz UI
    quizSeeAllPatterns: "Ver todos os padrões →",
    quizRetake: "Refazer quiz",
    quizTargetedStrategies: "Suas estratégias direcionadas:",

    // Language picker
    langPickerAriaLabel: "Selecionar Idioma",
    langEnglish: "English",
    langPortuguese: "Português",
    langSpanish: "Español"
  },


  // ========================================
  // PAGES — conteúdo estruturado para seções complexas
  // ========================================
  pages: {

    // ---- Grade Resolve-Aí ----
    grid: {
      quadrants: [
        {
          cssClass: "q-red",
          title: "🔴 Quadrante Vermelho",
          subtitle: "<strong>Não Divertido + Alta Intensidade Emocional</strong>",
          body: "Tarefas que você teme mas enfrenta na base de adrenalina, raiva ou pânico. Procrastinar até a pressão do prazo bater mora aqui. Parece energizante no começo, mas é exaustivo e viciante.",
          examples: "<strong>Exemplos:</strong> Projetos de última hora, prazos de impostos, confrontos, gerenciamento de crise",
          battery: "<strong>Impacto na bateria:</strong> Drena rapidamente. Parece produtivo mas te esgota.",
          strategies: [
            "Quebre tarefas em pedaços do tamanho do Amarelo antes que virem emergências Vermelhas",
            "Coloque alarmes no meio do dia pra checagem do sistema (postura, hidratação, tensão)",
            "Desafie a crença falsa: \"Eu trabalho melhor sob pressão\""
          ]
        },
        {
          cssClass: "q-green",
          title: "🟢 Quadrante Verde",
          subtitle: "<strong>Divertido + Alta Intensidade Emocional</strong>",
          body: "Seu lugar feliz. Atividades prazerosas E emocionalmente significativas. O Verde recarrega sua bateria mais rápido. Muitas pessoas com TDAH se negam o tempo Verde porque sentem que não \"mereceram.\"",
          examples: "<strong>Exemplos:</strong> Jantares em família, projetos criativos, caminhadas na natureza, hobbies profundos, conversas significativas",
          battery: "<strong>Impacto na bateria:</strong> Recarrega mais rápido. Reconecta você com seus valores.",
          strategies: [
            "Agende tempo Verde intencionalmente — você merece",
            "Use o Verde como recompensa após tarefas Amarelas/Vermelhas",
            "Perceba quando você se nega o Verde e desafie esse impulso"
          ]
        },
        {
          cssClass: "q-yellow",
          title: "🟡 Quadrante Amarelo",
          subtitle: "<strong>Não Divertido + Baixa Intensidade Emocional</strong>",
          body: "Tarefas chatas e repetitivas que drenam sua vontade de viver. Parecem que vão durar pra sempre mas na verdade consomem menos energia que o Vermelho. O cérebro com TDAH evita essas como se fossem praga.",
          examples: "<strong>Exemplos:</strong> Lição de casa, contas, papelada, limpeza, entrada de dados, e-mails",
          battery: "<strong>Impacto na bateria:</strong> Desgaste lento. Parece desgaste total, mas não é.",
          strategies: [
            "Coloque um timer de 15-20 minutos — o Amarelo não dura pra sempre",
            "Quebre em uma lista específica de \"como fazer\" (mesmo passos absurdamente pequenos)",
            "Tente o jogo Amarelo-Azul: 30 min de trabalho, 10 min de pausa Azul",
            "Combine o Amarelo com uma atividade agradável (música, podcast, bebida favorita)"
          ]
        },
        {
          cssClass: "q-blue",
          title: "🔵 Quadrante Azul",
          subtitle: "<strong>Divertido + Baixa Intensidade Emocional</strong>",
          body: 'Relaxamento leve. Jogos no celular, Netflix, rolagem infinita. Recarrega devagar, mas Azul demais vira armadilha — o efeito \"pântano de melaço\". Azul saudável é restaurador. Azul em excesso é anestesiante.',
          examples: "<strong>Exemplos:</strong> Redes sociais, TV, jogos, deitar na rede, navegação leve",
          battery: "<strong>Impacto na bateria:</strong> Recarga lenta se saudável. Drena bateria se em excesso.",
          strategies: [
            "Coloque limites no tempo Azul com um timer",
            "Pergunte: \"Esse Azul tá me recarregando ou me anestesiando?\"",
            "Troque por Verde quando possível — recarrega mais rápido",
            "Use o Azul como recompensa programada, não como fuga"
          ]
        }
      ],
      quickPractice: {
        title: "🔑 Usando a Grade — Prática Rápida",
        steps: [
          "Escolha uma tarefa que você tá evitando agora",
          "Pergunte: É divertida ou não? Quão emocionalmente estimulante é?",
          "Coloque na grade — Vermelho, Amarelo, Azul ou Verde?",
          "Pergunte: Por que essa tarefa tá nesse quadrante? O que faz ela parecer assim?",
          "Escolha a estratégia correspondente acima",
          "Coloque um timer, defina um primeiro passo e comece. Reavalie quando o timer tocar."
        ]
      }
    },

    // ---- Escada Emocional ----
    ladder: {
      rungs: [
        {
          cssClass: "l1",
          title: "☀️ Nível 1: Presente &amp; Calmo",
          detail: '<p><strong>Consciência:</strong> Totalmente presente, respondendo à vida conforme ela acontece. Sem fixação em ameaças.<br><strong>Atenção:</strong> Focada no que realmente tá acontecendo. Sem defensividade.<br><strong>Voz Emocional:</strong> Um guia silencioso, não um ditador. Você está sintonizado com ela.<br><strong>Corpo:</strong> Presente, desperto, relaxado na mente, no coração e no corpo.<br><strong>Sintomas de TDAH:</strong> Ainda presentes mas gerenciados com mindfulness, planejamento e resolução de problemas.<br><strong>Relacionamentos:</strong> Você respeita e valoriza as pessoas, e demonstra isso com palavras e ações.</p><p style="margin-top:0.5rem"><strong>O que ajuda você a ficar aqui:</strong> Tempo Verde regular, boa noite de sono, práticas de consciência, conhecer seus padrões, autocompaixão.</p>'
        },
        {
          cssClass: "l2",
          title: "🌤️ Nível 2: Atento",
          detail: '<p><strong>Consciência:</strong> Se sentindo bem, gerenciando a vida, mas sem a consciência plena do Nível 1.<br><strong>Atenção:</strong> Mais aberta e sintonizada consigo mesmo e com o ambiente.<br><strong>Voz Emocional:</strong> Informativa, sem gritar. Guia sem dominar.<br><strong>Corpo:</strong> Respiração relaxada. Sem modo luta-ou-fuga.<br><strong>Sintomas de TDAH:</strong> Identificados e gerenciados com estratégias. Usados com cuidado e consistência.<br><strong>Relacionamentos:</strong> Buscando soluções ganha-ganha.</p><p style="margin-top:0.5rem"><strong>O que ajuda a subir até aqui:</strong> Usar a Grade Resolve-Aí, exercícios de respiração, capturar pensamentos automáticos, planejamento de tarefas, automonitoramento.</p>'
        },
        {
          cssClass: "l3",
          title: "⛅ Nível 3: Piloto Automático",
          detail: '<p><strong>Consciência:</strong> Impulsionado por impulsos compulsivos e inconscientes. Radar de autoconsciência baixo.<br><strong>Atenção:</strong> Decisões impulsivas. Foco em ação e produtividade, não em estratégia.<br><strong>Voz Emocional:</strong> Guardada num \"agora não\". Vai explodir se obstáculos aparecerem.<br><strong>Corpo:</strong> Resposta de luta-ou-fuga ativada. Frequência cardíaca alta, cortisol fluindo, energia vindo da adrenalina.<br><strong>Sintomas de TDAH:</strong> Usando luta-ou-fuga como mecanismo de enfrentamento. Preso em padrões reativos. Memória de curto prazo ainda menos confiável.<br><strong>Relacionamentos:</strong> \"Faz a sua parte que eu faço a minha.\" Fazer do seu jeito parece muito importante.</p><p style="margin-top:0.5rem"><strong>A maioria das pessoas vive aqui na maior parte dos dias.</strong> O perigo é que qualquer solavanco inesperado te derruba pro Nível 4.</p>'
        },
        {
          cssClass: "l4",
          title: "🌧️ Nível 4: Sobrevivência",
          detail: '<p><strong>Consciência:</strong> Reduzida a escanear ameaças. Sem autoconsciência. Totalmente instintivo.<br><strong>Atenção:</strong> Focada em sobreviver e atender necessidades básicas. Autoindulgente — fazendo o que parecer necessário, saudável ou não.<br><strong>Voz Emocional:</strong> Tomando o controle. Exige que necessidades emocionais sejam atendidas AGORA. Medo e ansiedade dominam.<br><strong>Corpo:</strong> Em alerta máximo. Adaptado ao estresse crônico. Sono ruim, mudanças de peso.<br><strong>Sintomas de TDAH:</strong> Constantemente apagando incêndios. Irritável, frustrado, concentração ruim. Pensamento preto-e-branco.<br><strong>Relacionamentos:</strong> Autocentrado. Muito crítico dos outros.</p><p style="margin-top:0.5rem"><strong>Como subir de volta:</strong> Respiração profunda. Manda mensagem pra alguém de confiança. Uma respiração lenta. Nomeie o que você tá sentindo. Não tente consertar tudo — só volte pro Nível 3 primeiro.</p>'
        },
        {
          cssClass: "l5",
          title: "🌩️ Nível 5: Delirante",
          detail: '<p><strong>Consciência:</strong> Falta total de consciência. Potencial pra decisões autodestrutivas.<br><strong>Atenção:</strong> Em alerta constante pra ameaças à segurança emocional.<br><strong>Voz Emocional:</strong> Fatigada mas ainda gritando. Emoções intensas prevalecem em todo lugar. Medo, depressão, exaustão.<br><strong>Corpo:</strong> Recursos esgotados. O corpo não tem mais força pra combater o estresse. Sentimento de desesperança.<br><strong>Sintomas de TDAH:</strong> Emocionalmente volátil, hipersensível, opositor.<br><strong>Relacionamentos:</strong> Ou muito grudento ou muito distante e crítico. Projetando frustração nos outros.</p><p style="margin-top:0.5rem"><strong>Isso não é permanente.</strong> Você pode subir de volta. Apoio profissional (terapeuta, coach) é recomendado aqui. Comece com um pequeno ato de autocuidado. Uma respiração de cada vez.</p>'
        }
      ]
    },

    // ---- Nomeie Seu TDAH ----
    naming: {
      scienceCard: {
        title: "🔬 Por Que Nomear Funciona (A Ciência)",
        content: 'Pesquisas mostram que metáforas mudam o pensamento em nível inconsciente. Em um estudo, pessoas que leram sobre crime descrito como uma <em>"fera"</em> sugeriram estratégias de controle (mais polícia, penas mais severas). Aquelas que leram sobre crime como uma <em>"doença"</em> sugeriram estratégias de tratamento (tratar as causas raiz). A metáfora que você usa pro seu TDAH molda as soluções pras quais você vai gravitar.'
      },
      metaphors: [
        {
          title: "🧝 O Elfo Travesso (Claire)",
          content: 'Se esgueira e move as coisas. Brinca com o tempo usando um controle remoto — avanço rápido ou câmera lenta. <strong>Estratégia:</strong> Ser mais esperto que o elfo. Antecipar onde ele vai atacar. Criar sistemas externos com os quais ele não consiga mexer.'
        },
        {
          title: "👶 O Bebê Sujo (Melanie)",
          content: '"Não importa quantas vezes eu dou banho, ele tá sempre sujo." A parte de si mesmo em que você não confia totalmente. <strong>Estratégia:</strong> Cuide com paciência. Aceite que precisa de atenção constante. Não odeie — cuide.'
        },
        {
          title: "🍫 Lucille Ball na Esteira (Kelly)",
          content: '"Ou eu tô jogando chocolate em alguém, ou a esteira tá vindo tão rápido que eu tô enfiando chocolate dentro da camisa." <strong>Estratégia:</strong> Gerenciar a velocidade da esteira (carga de tarefas). Aprender a não jogar chocolate (regulação emocional).'
        },
        {
          title: "📝 A Prova Que Você Não Estudou (Rick)",
          content: '"Eu odeio que eu não me sinto preparado pra nada, mesmo quando tento planejar." Vive atrás de uma máscara pra esconder a vergonha. <strong>Estratégia:</strong> Desacelere. Tire a máscara. Faça um check-in com seus pensamentos e sentimentos reais antes de fazer planos.'
        },
        {
          title: "🏃 A Corrida de Três Pernas (Dra. Rosier)",
          content: 'Amarrada à versão TDAH de si mesma que para no meio da corrida pra examinar um dente-de-leão. "Se eu pudesse correr sem ela, eu me sairia bem." <strong>Estratégia:</strong> Aceitar a parceira. Dar incentivos a ela. Trabalhar <em>com</em> ela, não contra ela.'
        }
      ],
      createOwn: {
        title: "✏️ Crie Sua Própria Metáfora",
        content: 'Como <em>você</em> vivencia seu TDAH? Que imagem captura como ele se sente? Não tem resposta errada. Sua metáfora ajuda a externalizar o TDAH — pra que você possa lidar com as partes que mais te frustram, sem fazer disso \"tudo o que você é.\"'
      }
    }
  },


  // ========================================
  // ARRAYS DE DADOS — movidos do JS inline
  // ========================================

  traits: [
    {
      id: "emotional-dysregulation",
      icon: "🌊", color: "#FF6B6B", cat: "emotion",
      title: "Desregulação Emocional",
      aka: "O Vizinho Raivoso / Emoções Gigantes / Inundação",
      what: "Em vez de um 'mordomo' calmo (córtex pré-frontal) gerenciando suas respostas, pessoas com TDAH têm um 'vizinho raivoso' nos centros emocionais do cérebro que reage primeiro. Emoções batem mais forte, mais rápido e duram mais do que o esperado. O comentário de um atendente pode arruinar seu dia inteiro.",
      feel: "Tristeza avassaladora por contratempos menores. Frustração explosiva com pequenos obstáculos. Chorar sem se sentir triste. Emoções que parecem desproporcionais à situação. Vergonha pela intensidade das suas próprias reações.",
      tools: [
        { name: "Respiração 4-7-8", steps: ["Inspire lentamente pelo nariz por 4 segundos", "Segure a respiração por 7 segundos", "Expire lentamente pela boca por 8 segundos", "Repita 3-4 vezes. Isso ativa seu sistema nervoso parassimpático e interrompe a cascata de luta-ou-fuga"], hasTimer: true, timerSec: 19 },
        { name: "Nomeie a Intensidade (Escala 1-10)", steps: ["Quando a emoção inundar, pause e dê uma nota: 'Isso tá num 7 agora'", "Nomear cria distância — você tá observando a emoção em vez de ser engolido por ela", "Observe diminuir. Emoções são ondas, não estados permanentes", "Lembre-se: a emoção é real, mas não é o quadro completo"] },
        { name: "Check-In da Escada Emocional", steps: ["Pergunte: Em que nível eu tô agora? (1=Calmo, 3=Piloto Automático, 5=Delirante)", "Se você tá no Nível 4-5, não tente resolver nada — só estabilize", "Uma respiração lenta. Nomeie o que sente. Não aja ainda", "Objetivo: voltar pro Nível 3 primeiro, depois pro Nível 2"] },
        { name: "Method Acting (Aja 'Como Se')", steps: ["Do Kit TCC: aja de forma oposta à sua emoção atual", "Sorria se sentir raiva. Bata palmas e diga 'OK, vamos lá' se estiver travado", "Isso não é fingimento — é preparar seu cérebro pra uma resposta diferente", "Combinado com um primeiro passo definido, isso quebra o ciclo de paralisia emocional"] }
      ]
    },
    {
      id: "time-blindness",
      icon: "⏰", color: "#F5A623", cat: "executive",
      title: "Cegueira Temporal",
      aka: "O Relógio Quebrado / Agora vs. Não Agora",
      what: "Pessoas com TDAH não vivenciam o tempo como neurotípicos. Existem basicamente dois fusos horários: AGORA e NÃO AGORA. O tempo se distorce — às vezes voa, às vezes se arrasta. Estimar quanto tempo as coisas levam é quase impossível. Você tá perpetuamente atrasado ou adiantado demais.",
      feel: "Choque ao perceber que 3 horas passaram. Atrasos crônicos apesar de tentar. Pânico quando prazos aparecem 'de repente.' Sensação de que o tempo é escorregadio e incontrolável. Culpa por estar sempre atrasado.",
      tools: [
        { name: "Âncoras Externas de Tempo", steps: ["Use relógios analógicos (o movimento visual dos ponteiros mostra o tempo passando espacialmente)", "Coloque múltiplos alarmes: alarme de aviso, alarme de transição, alarme de 'sai AGORA'", "Use timers visuais (Time Timer, ampulheta ou um timer de cozinha)", "Coloque relógios em cada cômodo — torne o tempo visível"] },
        { name: "Treinamento de Estimativa de Tempo", steps: ["Antes de começar uma tarefa, anote quanto tempo você acha que vai levar", "Coloque um timer e faça a tarefa", "Compare sua estimativa com a realidade", "Regra da Dra. Rosier: multiplique sua estimativa por 3 — isso é mais próximo da realidade", "Com o tempo, isso constrói um relógio interno mais preciso"], hasTimer: true, timerSec: 600 },
        { name: "Ressignifique o Tempo (Abordagem TCC)", steps: ["Em vez de '10 minutos' pense '600 segundos' — soa diferente e parece mais manejável", "Compare: 'Eu já aguentei 15 minutos de comerciais chatos. Consigo trabalhar nisso por 15 minutos.'", "Defina hora de INÍCIO e de TÉRMINO pra cada tarefa — torna finito", "Use o truque da bateria do notebook: desplugue e use a bateria acabando como seu timer de contagem regressiva"], hasTimer: true, timerSec: 600 },
        { name: "Planejamento com Tempo Extra", steps: ["Adicione 50% mais tempo do que acha necessário entre atividades", "Inclua tempo de deslocamento, tempo de transição e tempo de 'achar minhas chaves'", "Agende menos tarefas do que acha que consegue — sub-agende", "Uma regra útil: 'Se eu chegasse 15 minutos mais cedo pro trem, não acharia muito tempo. Consigo trabalhar nisso por esse tempo.'"] }
      ]
    },
    {
      id: "working-memory",
      icon: "🧩", color: "#4D96FF", cat: "executive",
      title: "Déficits de Memória de Trabalho",
      aka: "O Mordomo Desaparecido / O Balde Furado",
      what: "Seu córtex pré-frontal (CPF) deveria agir como um mordomo calmo e organizado — segurando informações, fazendo planos, gerenciando impulsos. No TDAH, esse mordomo é pouco confiável. Informações caem da memória de curto prazo. Você entra num cômodo e esquece por quê. Perde o fio da meada no meio da frase.",
      feel: "Esquecer o que você ia fazer. Perder objetos constantemente. Entrar em cômodos sem lembrar por quê. Dificuldade em reter múltiplas instruções. Sensação de estar 'espalhado' ou de que os pensamentos evaporam.",
      tools: [
        { name: "Externalize Tudo", steps: ["Se não tá escrito, não existe. Anote imediatamente.", "Use UM sistema de captura (caderno, app no celular ou memo de voz)", "A agenda diária é sua memória de trabalho externa — consulte constantemente", "Post-its, quadros brancos e lembretes visíveis compensam o mordomo desaparecido"] },
        { name: "Lista Geral → Lista Diária", steps: ["Mantenha uma lista mestra com tudo (Lista Geral de 'despejo cerebral')", "Cada manhã, puxe 3-5 itens específicos pra Lista Diária de hoje", "Defina tarefas em termos comportamentais: não 'trabalhar no projeto' mas 'abrir o documento e escrever 3 parágrafos'", "Revise a Lista Diária cedo e frequentemente ao longo do dia"] },
        { name: "Deixando Migalhas pro Seu Eu Futuro", steps: ["Ao parar uma tarefa, anote o próximo passo que você faria", "Exemplo: 'Próximo: escrever o parágrafo sobre os achados da metodologia'", "Isso elimina o custo de recomeço do 'onde eu parei?' na próxima vez", "Pense nisso como um presente pro seu eu futuro — ele vai agradecer"] },
        { name: "'Entre no Cômodo com um Plano'", steps: ["Antes de abrir o e-mail, saiba o que você tá procurando", "Antes de ir à loja, tenha a lista na mão", "Antes de começar uma reunião, saiba seus 1-2 objetivos", "Esse pré-carregamento compensa a memória de trabalho que perde coisas no meio da tarefa"] }
      ]
    },
    {
      id: "hyperfocus",
      icon: "🎯", color: "#4ECDC4", cat: "attention",
      title: "Hiperfoco",
      aka: "O Túnel / A Armadilha do Flow",
      what: "O outro lado da distração — quando algo captura seu interesse, você trava com tanta intensidade que horas desaparecem. Você não come, não percebe pessoas falando com você e perde noção de todo o resto. É frequentemente confundido com egoísmo ou grosseria. Na verdade, é o sistema de recompensa do seu cérebro encontrando uma mina de ouro de dopamina.",
      feel: "Concentração intensa e travada que parece incrível. Perder toda noção de tempo e do ambiente. Irritação quando interrompido. Pular refeições e idas ao banheiro. Culpa depois ao perceber o que negligenciou.",
      tools: [
        { name: "Sessões Estruturadas de Hiperfoco", steps: ["Coloque um timer ANTES de começar — se dê permissão pra mergulhar fundo, mas com um limite", "Avise as pessoas ao redor: 'Vou mergulhar fundo nas próximas 2 horas'", "Coloque alarmes em intervalos (a cada 45 min) pra hidratação, postura, banheiro", "Quando o timer final tocar, pare. Salve suas migalhas (notas do próximo passo) e faça a transição"], hasTimer: true, timerSec: 2700 },
        { name: "Interrupções Ambientais", steps: ["Use múltiplos alarmes com sons diferentes", "Peça pra um parceiro/colega te checar fisicamente em horários definidos", "Cole um post-it no monitor: 'Confira a hora'", "Use apps que forçam pausas na tela (como apps da regra 20-20-20)"] }
      ]
    },
    {
      id: "distractibility",
      icon: "🦋", color: "#A78BFA", cat: "attention",
      title: "Distraibilidade",
      aka: "E Aí PING! Meu Cérebro Dispara / A Caça à Borboleta",
      what: "O sistema de filtragem do seu cérebro não bloqueia estímulos bem. Tudo chega no mesmo volume — a reunião importante E a mosca zumbindo E o pensamento sobre o jantar E a música presa na cabeça. A Dra. Rosier chama isso de 'PING!' — seu cérebro constantemente disparando pra novos estímulos.",
      feel: "Incapacidade de bloquear barulho ou movimento de fundo. Pensamentos pulando de assunto em assunto. Começar tarefas e ser imediatamente puxado pra outro lugar. Sensação de que seu cérebro tem 30 abas abertas. Exaustão pelo barulho mental constante.",
      tools: [
        { name: "Controle de Estímulos (Engenharia Ambiental)", steps: ["Remova ou minimize distrações conhecidas ANTES de começar a trabalhar", "Celular no silencioso, em outro cômodo (não só virado pra baixo)", "Feche todas as abas e apps desnecessários do navegador", "Use fones com cancelamento de ruído ou ruído branco", "Fique de costas pra janelas e áreas de grande circulação", "Crie uma 'estação de trabalho' dedicada que seu cérebro associe com foco"] },
        { name: "Planos de Implementação (Se-Então)", steps: ["Antes de começar: preveja suas distrações mais prováveis", "Crie planos Se-Então: 'Se eu receber uma mensagem, vou checar depois do meu timer de 30 min'", "'Se eu pensar em outra coisa que preciso fazer, vou anotar rapidinho e continuar trabalhando'", "'Se alguém passar por perto, vou dizer que tô ocupado e converso depois'", "Essas decisões pré-prontas reduzem a carga cognitiva de resistir à tentação no momento"] },
        { name: "Consciência de Comportamento de Fuga", steps: ["Anote seus 'suspeitos de sempre' — as coisas que você faz NO LUGAR da tarefa prioritária", "Comuns: e-mail, redes sociais, beliscar, limpeza, 'recadinhos rápidos'", "Quando se pegar fazendo um, não se culpe — use como uma DICA", "O impulso de fugir É seu sinal pra usar suas ferramentas de enfrentamento", "Transforme fugas em recompensas: 'Vou olhar o Instagram DEPOIS dos meus 10 minutos nessa tarefa'"] }
      ]
    },
    {
      id: "impulsivity",
      icon: "⚡", color: "#FFD93D", cat: "executive",
      title: "Impulsividade",
      aka: "O Falador Compulsivo / Atira-Primeiro-Pergunta-Depois",
      what: "O trabalho do CPF inclui gerenciamento de impulsos — colocar uma pausa entre estímulo e resposta. No TDAH, essa pausa é encurtada ou inexistente. Você fala sem pensar, faz compras por impulso, interrompe conversas ou toma decisões que se arrepende. Não é defeito de caráter — é um déficit de função executiva.",
      feel: "Dizer coisas das quais se arrepende instantaneamente. Compras por impulso. Interromper outros no meio da frase. Tomar decisões precipitadas sem pensar nas consequências. Sensação de não conseguir se controlar mesmo vendo acontecer.",
      tools: [
        { name: "A Prática da Pausa", steps: ["Treine inserir uma micro-pausa antes de responder", "Em conversas: respire uma vez antes de falar", "Pra compras: implemente a regra das 24 horas (espere um dia antes de comprar não-essenciais)", "Pra decisões: pergunte 'O que meu Advogado de Defesa diria?' (técnica TCC)", "Âncoras físicas ajudam: pressione os pés no chão, aperte as mãos, depois responda"] },
        { name: "Treinamento de Inibição Comportamental", steps: ["Perceba o impulso sem agir (consciência plena)", "Avalie a urgência: 'Quão importante é que eu faça/diga isso AGORA MESMO?'", "A maioria dos impulsos perde intensidade em 90 segundos", "Pratique: quando sentir vontade de interromper, anote o que queria dizer"], hasTimer: true, timerSec: 90 }
      ]
    },
    {
      id: "procrastination",
      icon: "🐌", color: "#E8443A", cat: "motivation",
      title: "Procrastinação",
      aka: "Brincando com Fogo / A Fogueira que Vira Incêndio Florestal",
      what: "Não é preguiça. Procrastinação no TDAH é motivada por evitação emocional — a tarefa dispara sentimentos desconfortáveis (tédio, ansiedade, sobrecarga, medo de fracasso) e seu cérebro busca escapar. Algumas pessoas até usam a procrastinação como estratégia de motivação, esperando a descarga de adrenalina do prazo.",
      feel: "Saber exatamente o que precisa fazer e não conseguir começar. 'Perseguir a tarefa' o dia todo. Vergonha profunda depois. Um ciclo de evitação → pânico → correria de última hora → auto-ódio. Usar outras tarefas como 'barganha' pra evitar a verdadeira.",
      tools: [
        { name: "A Regra dos 10 Minutos", steps: ["Defina o menor primeiro passo possível (absurdamente simples)", "Se comprometa com apenas 10 minutos honestos (600 segundos)", "O cronômetro começa quando você tá de fato em posição pra fazer o trabalho", "Após 10 minutos, reavalie: continue ou pare sem culpa", "Você não procrastinou. Você tomou uma decisão informada.", "Na maioria das vezes, uma vez que começa, vai querer continuar"], hasTimer: true, timerSec: 600 },
        { name: "Capture Seus Pensamentos de Procrastinação", steps: ["Perceba o que você tá dizendo pra si mesmo: 'Eu faço amanhã' / 'Preciso estar no clima' / 'Vou fazer essa outra coisa primeiro'", "Esses pensamentos automáticos parecem razoáveis mas são autossabotadores", "Pergunte: Eu tô aumentando o negativo e diminuindo minha capacidade?", "Reformule: 'Eu não preciso estar no clima. Só preciso fazer o primeiro passo.'", "Mentiras comuns da procrastinação: 'Eu trabalho melhor sob pressão' (não trabalha — você só depende do pânico)"] },
        { name: "Aceitação do Desconforto + Escala", steps: ["Avalie seu desconforto de 0-100. A maioria da evitação de tarefas fica entre 20-40, não 90", "Lembrete: você PODE se sentir desconfortável e ainda fazer a coisa", "Você não precisa estar 100% energizado. Precisa de 51% — votos suficientes pra passar", "Aceite que a tarefa envolve um pouco de 'Ugh' — isso é normal, até pra neurotípicos", "Foque no sentimento DEPOIS de concluir, não no sentimento de começar"] }
      ]
    },
    {
      id: "shame",
      icon: "😔", color: "#8E6FBF", cat: "emotion",
      title: "Vergonha & Auto-Ódio",
      aka: "Os Fantasmas da Casa / O Acumulador de Vergonha",
      what: "Anos de fracassos relacionados ao TDAH, mal-entendidos e mensagens de 'você não tá se esforçando o suficiente' criam vergonha profunda. A Dra. Rosier descreve a vergonha como 'fantasmas assombrando sua casa' sussurrando mentiras como 'Por que você estragou tudo?' O Kit TCC chama isso de 'cercas invisíveis' que te chocam pra evitação.",
      feel: "Sentimento persistente de não ser bom o suficiente. Usar uma 'máscara' pra esconder o verdadeiro eu. Acreditar que seus erros te definem. Usar vergonha como motivação (o que não funciona). Se comparar com uma versão idealizada das melhores qualidades de todo mundo.",
      tools: [
        { name: "Casa-Quintal-Cerca (Limites Consigo Mesmo)", steps: ["Seu eu interior é uma casa — só você mora lá", "Identifique os 'fantasmas' (mensagens de vergonha) que assombram ela", "Peça respeitosamente pra eles saírem. Eles vão voltar. Peça de novo.", "Substitua itens de vergonha pelo que você realmente valoriza", "Comece pequeno: um limite, uma limpeza emocional de cada vez"] },
        { name: "O Advogado de Defesa (TCC)", steps: ["Seus pensamentos de vergonha são o caso do Promotor contra você", "Seu Advogado de Defesa também tem direito de responder com evidências", "Pergunte: 'Se meu amigo com TDAH me dissesse que isso aconteceu com ele, eu chamaria de fracassado?'", "'Existe outra forma de ver isso que não termina comigo sendo uma pessoa terrível?'", "Escreva o argumento do Promotor e a resposta do Advogado de Defesa lado a lado — ver os dois torna a distorção óbvia"] },
        { name: "Rótulos vs. Explicações Comportamentais", steps: ["Em vez de 'Eu procrastinei porque sou preguiçoso' (rótulo)", "Tente 'Eu procrastinei porque a tarefa parecia avassaladora e eu fugi pro computador' (comportamental)", "Rótulos parecem permanentes. Comportamentos podem ser mudados.", "Isso não é se livrar da responsabilidade — é ser preciso pra que você possa de fato resolver"] }
      ]
    },
    {
      id: "rejection-sensitivity",
      icon: "💔", color: "#C06080", cat: "social",
      title: "Disforia Sensível à Rejeição (DSR)",
      aka: "A Cerca Invisível / A Pele de Papel",
      what: "Uma resposta emocional intensa à rejeição, crítica ou fracasso percebidos. Um comentário de um atendente pode arruinar seu dia. Não é sensibilidade excessiva — é seu sistema de regulação emocional falhando em amortecer fricção social normal. A DSR torna estabelecer limites aterrorrizante porque você teme rejeição.",
      feel: "Devastação por críticas leves. Ler rejeição em interações neutras. Evitar situações onde possa falhar ou ser julgado. Agradar pessoas pra prevenir rejeição. Dor física por desfeitas sociais.",
      tools: [
        { name: "Reconheça a Resposta da DSR", steps: ["Quando sentir dor emocional súbita e intensa de uma interação social, pause", "Pergunte: 'Essa é uma resposta emocional de Nível 4/5 pra uma situação de Nível 1/2?'", "Nomeie: 'Minha DSR ativou, não a realidade'", "O sentimento é real. A interpretação pode não ser.", "Se dê 24 horas antes de agir com base no sentimento"] },
        { name: "Tomada de Perspectiva (Advogado de Defesa)", steps: ["Que evidência eu realmente tenho de que essa pessoa tá me rejeitando?", "Existe outra explicação pro comportamento dela?", "O que eu diria pra um amigo nessa situação?", "No grande esquema, quão significativo é isso? Vai importar semana que vem?", "Considere: a maioria das pessoas tá pensando nelas mesmas, não te julgando"] }
      ]
    },
    {
      id: "task-initiation",
      icon: "🚀", color: "#4D96FF", cat: "motivation",
      title: "Falha na Iniciação de Tarefas",
      aka: "O Muro Invisível / Preso na Plataforma de Lançamento",
      what: "Saber o que fazer mas não conseguir começar. A função executiva de iniciação de tarefa requer gerar emoção/motivação suficiente pra superar a inércia — e cérebros com TDAH têm menos dopamina disponível nas redes de recompensa. A distância entre 'não fazer' e 'fazer' é pequena mas parece enorme.",
      feel: "Ficar olhando pra tarefa, congelado. Saber exatamente o que precisa acontecer mas se sentir paralisado. Fazer a sequência de início na cabeça mas não na realidade. A sensação de 'Ugh' ao encarar uma tarefa.",
      tools: [
        { name: "O Menor Passo de Engajamento Comportamental", steps: ["Faça o primeiro passo TÃO absurdamente pequeno que seria ridículo não fazer", "Não 'escrever o relatório' mas 'abrir o documento'", "Não 'ir à academia' mas 'colocar o tênis de treino'", "Não 'fazer a ligação' mas 'encontrar a pessoa nos contatos'", "Você já não tá mais procrastinando quando dá esse passo", "Se ainda tiver travado, quebre ESSE passo em passos ainda menores"] },
        { name: "Novos Scripts Comportamentais", steps: ["Identifique seu script antigo (ex: chegar em casa → sofá → TV → culpa)", "Escreva um novo script passo a passo (ex: chegar em casa → passar pelo sofá → ir ao computador → abrir site de vagas → pesquisar por 15 min)", "Ensaie mentalmente o novo script antes do momento chegar", "Use planos Se-Então nos pontos de escolha onde hábitos antigos te puxam", "O script antigo não é 'ruim' — só não tá servindo seus objetivos"] },
        { name: "Fabricando Motivação 'Suficiente'", steps: ["Você não precisa sentir empolgação pela tarefa — precisa de 51%", "Reduza as demandas da tarefa pra combinar com sua energia atual (limbo: 'quão baixo dá pra ir?')", "Diga o primeiro passo EM VOZ ALTA — isso te tira da sua cabeça", "Faça um compromisso verbal com outra pessoa pra ter responsabilização", "Lembre-se: a ação frequentemente precede a motivação, não o contrário"] }
      ]
    },
    {
      id: "overwhelm",
      icon: "🌀", color: "#E8443A", cat: "emotion",
      title: "Sobrecarga & Paralisia",
      aka: "A Mangueira de Incêndio / Abas Demais Abertas",
      what: "Quando demandas demais colidem com funções executivas fracas, o sistema sobrecarrega. O cérebro com TDAH não consegue priorizar, sequenciar ou filtrar efetivamente quando inundado. O resultado é desligamento — não fazer nada apesar de ter tudo pra fazer.",
      feel: "Paralisia. Saber que tem coisa demais e não fazer nenhuma. Chorar pelo volume de coisas. Desligar e se refugiar em atividades do Quadrante Azul. Peso físico.",
      tools: [
        { name: "Despejo Cerebral → Triagem", steps: ["Escreva TUDO que tá na sua cabeça. Não organize, só despeje.", "Agora circule apenas 3 coisas que mais importam HOJE", "Guarde todo o resto — vai continuar lá amanhã", "Defina o primeiro passo comportamental pra apenas UMA das três", "Você não precisa resolver tudo. Precisa fazer uma coisa."] },
        { name: "O Antídoto do Tudo-ou-Nada", steps: ["Pegue o pensamento: 'Se eu não consigo fazer tudo, pra quê fazer alguma coisa?'", "Isso é pensamento tudo-ou-nada — uma distorção comum", "Reformule: 'Fazer uma coisa é infinitamente melhor que fazer zero coisas'", "Qualquer progresso conta. Conclusão parcial não é fracasso.", "Lembre-se: você tá se comparando com um padrão imaginário"] },
        { name: "Reset Corpo-Primeiro", steps: ["Quando sua mente tá paralisada, comece pelo corpo", "Levante. Beba água. Jogue água fria no rosto.", "Faça 5 respirações lentas, focando na expiração", "Mexa-se: dê uma volta no quarteirão, alongue, faça 10 polichinelos", "Depois volte e escolha UMA tarefa. Só uma."] }
      ]
    },
    {
      id: "cognitive-distortions",
      icon: "👹", color: "#E8443A", cat: "thinking",
      title: "Distorções Cognitivas",
      aka: "Os Monstros Que Criamos / Erros de Pensamento",
      what: "Ambos os livros descrevem como a desregulação emocional e a disfunção executiva do TDAH se combinam pra criar 'monstros' — padrões de pensamento distorcidos que parecem absolutamente reais e convincentes. Não são delírios; são conclusões precipitadas tiradas sem evidência completa que seu cérebro trata como fatos.",
      feel: "Catastrofizar pequenos problemas. Declarações de 'deveria' que estabelecem padrões impossíveis. Pensamento tudo-ou-nada. Ler a mente dos outros sobre o que pensam de você. Amplificar negativos, minimizar positivos.",
      tools: [
        { name: "Identifique Seus Erros de Pensamento", steps: ["Ampliação/Minimização — tornar coisas ruins maiores, coisas boas menores", "Tudo-ou-Nada — 'Se não for perfeito, é um fracasso total'", "Pensamento Comparativo — se medir contra as melhores qualidades dos outros", "Raciocínio Emocional — 'Eu me sinto um idiota, então eu sou'", "Declarações de 'Deveria' — 'Eu deveria conseguir fazer isso sem ajuda'", "Previsão do Futuro — 'Eu sei que isso vai acabar mal'", "Rotulação — 'Sou preguiçoso' em vez de 'Evitei uma tarefa porque parecia avassaladora'"] },
        { name: "Consulte Seu Advogado de Defesa", steps: ["Escreva o caso do Promotor (seu pensamento negativo)", "Agora escreva a resposta do Advogado de Defesa com evidências reais", "Perguntas a fazer: Eu cobraria isso de um amigo?", "Existe outra forma de ver isso? Que evidência eu tô ignorando?", "Quão significativo é isso realmente? Vai importar em uma semana?", "Qual é o pior cenário? Eu consigo lidar com isso? (Geralmente sim.)"] },
        { name: "Spray de Monstros (Dra. Rosier)", steps: ["Pra monstros de ansiedade: identifique-os, nomeie-os e crie um 'spray' (ritual calmante)", "O ritual pode ser exercícios de respiração, técnicas de aterramento ou uma âncora física", "O insight principal: você não pode matar os monstros, mas pode mantê-los longe", "Quando voltarem (vão voltar), spray de novo. Consistência é a ferramenta."] }
      ]
    },
    {
      id: "energy-depletion",
      icon: "🔋", color: "#F5A623", cat: "executive",
      title: "Esgotamento de Energia",
      aka: "A Bateria Morrendo / Funcionando no Fio",
      what: "Todo mundo tem energia limitada, mas baterias de TDAH drenam mais rápido com atividades que outros acham fáceis. E-mails, recados e tarefas básicas da vida adulta podem consumir 50% da sua bateria diária enquanto custam só 5% pros neurotípicos. Se você não gerencia sua energia, a bateria morre e você apaga.",
      feel: "Exaustão por tarefas 'fáceis'. Apagar depois de eventos sociais ou trabalho. Precisar de muito mais tempo de recuperação que outros. Sentir-se esgotado por tarefas que 'não deveriam' ser cansativas.",
      tools: [
        { name: "Prática de Consciência de Bateria", steps: ["Ao longo do dia, faça check-in: 'Qual minha porcentagem de bateria agora?'", "Rastreie o que te carrega (atividades Verdes) e o que te drena", "Antes de adicionar uma tarefa ao dia, pergunte: 'Minha bateria aguenta isso?'", "Agende atividades de recarga ENTRE as que drenam — não só no fim do dia"] },
        { name: "Coreografia de Energia (Abordagem TCC)", steps: ["Sequencie tarefas intencionalmente: tarefa difícil → tarefa fácil → pausa → tarefa moderada", "Após uma tarefa mentalmente desgastante, faça tarefas administrativas ou físicas", "Proteja tempo pra refeições, sono e movimento — não são luxo, são manutenção da bateria", "Combine tarefas chatas com atividades agradáveis: dobre roupas assistindo TV, se exercite com música", "Lembre-se: gerenciar TDAH é um esporte de resistência. Encontre seu descanso em campo."] }
      ]
    },
    {
      id: "poor-boundaries",
      icon: "🏠", color: "#6BCB77", cat: "social",
      title: "Limites Frágeis",
      aka: "O Capacho / Agradar Todo Mundo",
      what: "Sintomas do TDAH (impulsividade, DSR, autorregulação fraca) dificultam estabelecer e manter limites. Muitas pessoas com TDAH não aprenderam limites crescendo. Agradar pessoas se torna estratégia de enfrentamento pra evitar rejeição. Combinado com DSR, dizer 'não' parece aterrorrizante.",
      feel: "Dizer sim quando quer dizer não. Deixar outros passarem por cima dos seus limites. Se comprometer demais e depois se afogar. Dificuldade em saber onde você termina e o outro começa. Ressentimento crescendo debaixo de um exterior 'legal'.",
      tools: [
        { name: "Framework Casa-Quintal-Cerca", steps: ["Casa = seu eu interior (psiquê, valores, identidade). Só você mora aqui.", "Quintal = seu espaço pessoal (tempo, energia, interações sociais). Apenas convidados.", "Cerca = o limite entre você e o mundo. Você controla o portão.", "Comece com UM limite físico (hora de dormir, regra de orçamento, zona sem telas)", "Quando virar hábito, adicione o próximo. Não refaça tudo de uma vez."] },
        { name: "Limpeza de Limites Emocionais", steps: ["Identifique os 'fantasmas' na sua casa — vergonha, inveja, ansiedade que não pertencem a você", "Nomeie-os, depois peça respeitosamente que saiam", "Quando voltarem (vão voltar), peça de novo. Isso é persistência, não fracasso.", "Pare de colecionar lixo emocional dos outros — você já tem o suficiente do seu", "Estabeleça limites com fofoca, culpa alheia e cuidado emocional excessivo dos outros"] }
      ]
    },
    {
      id: "transition-difficulty",
      icon: "🔀", color: "#A78BFA", cat: "executive",
      title: "Dificuldade de Transição",
      aka: "O Interruptor Travado / Não Consegue Trocar de Marcha",
      what: "Mudar de uma tarefa, atividade ou mentalidade pra outra requer funções executivas que o TDAH prejudica. Sair da cama, sair de casa, mudar do modo trabalho pro modo casa, transitar entre tarefas — cada uma custa esforço extra. Isso não é preguiça; é um déficit genuíno de alternância cognitiva.",
      feel: "Ficar preso numa atividade por tempo demais. Dificuldade em mudar do modo lazer pro modo trabalho. Estresse durante transições diárias (rotina matinal, deslocamento). Sensação de estar 'travado' no que quer que esteja fazendo.",
      tools: [
        { name: "Rituais de Transição", steps: ["Crie um pequeno ritual consistente pra transições comuns", "Manhã: mesma sequência todo dia (alarme → pés no chão → banheiro → café)", "Trabalho pra casa: troque de roupa, dê uma caminhada de 5 minutos ou ouça uma playlist específica", "Entre tarefas: levante, alongue, faça 3 respirações, olhe sua lista e comece a próxima"], hasTimer: true, timerSec: 300 },
        { name: "Deixando Migalhas + Pré-Carregamento", steps: ["Antes de parar uma tarefa, anote seu próximo passo pra quando voltar", "Antes de uma transição, ensaie mentalmente a próxima atividade: 'Quando eu chegar em casa, vou direto pro computador'", "Use timers com avisos de 5 minutos antes das transições", "Dicas externas (alarmes, cronogramas visuais, post-its nas portas) reduzem o custo cognitivo da alternância"] }
      ]
    }
  ],

  patterns: [
    {
      icon: "🏎️", color: "#E8443A", title: "O Padrão Preciso-de-Velocidade",
      aka: "Vício no Quadrante Vermelho",
      what: "Você cria tensão e crise pra se sentir vivo e produtivo. Agenda lotada, sempre correndo, movido a adrenalina. Você acredita que mais-é-melhor e amarra autoestima a conquistas. Seu corpo vive em resposta de estresse constante.",
      strategies: [
        "Desafie a crença falsa: 'Eu só tenho valor quando realizo coisas'",
        "Manhã: 15 minutos de respiração e planejamento intencional (inclua tarefas Amarelas E Azuis)",
        "Alarme no meio do dia pra checagem do sistema: postura, hidratação, tensão mandibular, necessidades básicas",
        "Noite: 10 minutos apreciando o que você REALIZOU — sem vergonha pelo que não fez",
        "Pergunte: 'Eu tô fazendo coisas importantes, ou só muitas coisas?'"
      ]
    },
    {
      icon: "🔥", color: "#F5A623", title: "O Padrão Brincando-com-Fogo",
      aka: "Escalação Amarelo → Vermelho",
      what: "Você deixa tarefas Amarelas chatas ficarem paradas até virarem emergências Vermelhas. A fogueirinha vira um incêndio florestal. Diferente do Preciso-de-Velocidade, você não curte o Vermelho — sente vergonha e tristeza depois da correria. Você também se nega tempo Verde porque sente que não mereceu.",
      strategies: [
        "Desafie: 'Eu trabalho bem sob pressão' — você tá usando ansiedade como combustível, e é exaustivo",
        "Manhã: Liste 3-5 tarefas Amarelas. Quebre a mais feia em passos pequenos",
        "Se comprometa com 20 minutos numa tarefa Amarela. Se não fluir depois de 20 min, troque",
        "Meio do dia: cheque quais tarefas Amarelas tão se aproximando do Vermelho. Resolva AGORA",
        "Noite: Aprecie o progresso. Se permita tempo Verde — você mereceu"
      ]
    },
    {
      icon: "🔁", color: "#4D96FF", title: "Vermelho, Azul e De Volta",
      aka: "Energia Tudo-ou-Nada",
      what: "Produtividade frenética no Vermelho por dias/semanas, depois colapso no Azul por dias/semanas. Duas velocidades: ligado e desligado. Sem meio-termo. Você perde os momentos doces da vida porque tá ou correndo ou em coma. Seus entes queridos acham a oscilação confusa e desgastante.",
      strategies: [
        "Desafie: 'Não consigo desacelerar, tem coisa demais' — equilíbrio não é opcional, é sobrevivência",
        "Manhã: inclua itens de TODOS os quatro quadrantes no seu plano diário",
        "Meio do dia: Você fez algo além de Vermelho e Amarelo? Adicione Verde ou Azul AGORA",
        "Noite: Encerre o trabalho num horário definido. Agende atividades Verdes com pessoas importantes",
        "Lembre-se: seu padrão tudo-ou-nada afeta seus relacionamentos também"
      ]
    },
    {
      icon: "🛋️", color: "#4ECDC4", title: "O Padrão Só-Azul",
      aka: "O Casulo da Evitação",
      what: "Você evita qualquer coisa desconfortável e se abriga em atividades Azuis. Não é procrastinação (você nem tem intenção de fazer a coisa difícil). A vida parece complicada demais, então você fica no seu casulo confortável de entretenimento e tarefas burocráticas. Frequentemente enraizado no perfeccionismo: 'Se eu não consigo fazer perfeito, não vou arriscar.'",
      strategies: [
        "Desafie três crenças falsas: (1) qualquer tarefa vai drenar toda minha energia, (2) se não for perfeito, nem tente, (3) se eu falhar, as pessoas não vão me amar",
        "Encare o Azul: identifique qual atividade Azul é sua armadilha. Tente 24 horas sem ela",
        "Defina o objetivo de completar apenas 3 tarefas Amarelas hoje",
        "Jogo Amarelo-Azul: 30 min de trabalho, 10 min de pausa Azul (com timer!)",
        "Recompense 3 tarefas Amarelas completadas com uma sessão Azul mais longa ou, melhor ainda, uma atividade Verde"
      ]
    }
  ],

  cbtTools: [
    {
      icon: "📋", color: "#4D96FF", title: "O Sistema de Planejamento Diário",
      aka: "Lista Geral → Lista Diária → Agenda Diária",
      what: "A base da abordagem TCC. Três ferramentas interconectadas que externalizam sua função executiva: (1) Uma lista mestra de 'despejo cerebral' com tudo, (2) Uma lista diária de 3-5 tarefas específicas puxadas da mestra, e (3) Uma agenda com blocos de tempo mostrando quando cada tarefa acontece.",
      tools: [
        { name: "Como Configurar", steps: ["Mantenha UMA lista geral (papel ou digital) — despeje tudo aqui", "Cada manhã, passe 10 minutos (600 segundos!) escolhendo as 3-5 prioridades de hoje", "Defina cada tarefa em termos comportamentais: o que exatamente você vai FAZER?", "Bloqueie tempo na sua agenda: hora de início, hora de término, tarefa específica", "Inclua tarefas de autocuidado (refeições, exercício, pausas) como compromissos reais", "Revise a agenda cedo e frequentemente — ela é seu cérebro externo"], hasTimer: true, timerSec: 600 }
      ]
    },
    {
      icon: "🧱", color: "#6BCB77", title: "Quebrando Tarefas",
      aka: "A Receita Comportamental",
      what: "Tarefas grandes e vagas paralisam o cérebro com TDAH. A solução: quebre cada tarefa numa 'receita comportamental' — passos tão específicos que outra pessoa poderia seguir. Trabalhe de trás pra frente a partir do prazo. O objetivo é transformar 'escrever o relatório' numa série de ações absurdamente simples.",
      tools: [
        { name: "Processo Passo a Passo", steps: ["Identifique a tarefa e seu prazo", "Escreva o ponto final: como 'pronto' se parece?", "Trabalhe de trás pra frente: qual é o passo antes do último passo? E antes desse?", "Faça cada passo específico e comportamental (não 'pesquisar' mas 'buscar no Google por X e ler 3 artigos')", "Distribua os passos nos dias na sua agenda", "Defina o menor primeiro passo de hoje — faça absurdamente simples", "Se ainda estiver travado, quebre ESSE passo em passos menores"] }
      ]
    },
    {
      icon: "⚖️", color: "#8E6FBF", title: "O Advogado de Defesa",
      aka: "Reestruturação Cognitiva para TDAH",
      what: "Seus pensamentos negativos são o Promotor fazendo um caso unilateral contra você. Um julgamento justo significa que seu Advogado de Defesa também pode responder. Isso não é pensamento positivo — é pensamento equilibrado. Você não tá descartando seus sentimentos; tá fazendo uma inquirição cruzada neles.",
      tools: [
        { name: "Como Usar", steps: ["Capture o pensamento automático: 'O que eu tô pensando agora?'", "Escreva o caso do Promotor (sua interpretação negativa)", "Identifique o(s) erro(s) de pensamento: ampliação? tudo-ou-nada? rotulação?", "Agora: o que seu Advogado de Defesa diria?", "Perguntas-chave: Eu diria isso pra um amigo? Que evidência eu tô ignorando? Isso vai importar em uma semana?", "Escreva os dois lados — pensamentos perdem poder quando saem da sua cabeça", "Escolha uma ação baseada na visão equilibrada"] }
      ]
    },
    {
      icon: "🎭", color: "#F5A623", title: "A Abordagem Method Acting",
      aka: "Aja 'Como Se' / Ação Oposta",
      what: "Quando você tá preso numa emoção que bloqueia ação, aja de forma oposta à emoção. Sorria quando com raiva. Diga 'Vamos NESSA!' quando se sentir paralisado. Não é sobre ser falso — é sobre quebrar o ciclo emoção-comportamento que te mantém preso. Combinado com um primeiro passo definido, é surpreendentemente eficaz.",
      tools: [
        { name: "Como Praticar", steps: ["Identifique a emoção bloqueadora (pavor, tédio, ansiedade, fadiga)", "Escolha uma ação oposta: bata palmas, levante, diga algo encorajador em voz alta", "Defina seu menor passo comportamental", "Combine: ação oposta + primeiro passo = impulso", "Fica mais fácil com a prática — você tá retreinando as associações do seu cérebro"] }
      ]
    },
    {
      icon: "🏆", color: "#FFD93D", title: "Sistemas de Recompensa",
      aka: "O Princípio de Premack / Ganhando Sua Diversão",
      what: "Use o princípio psicológico de que você aumenta a probabilidade de fazer uma tarefa menos desejada seguindo-a com uma atividade altamente desejada. Transforme seus comportamentos de fuga de facilitadores de procrastinação em recompensas positivas por conclusão de tarefas.",
      tools: [
        { name: "Como Configurar", steps: ["Identifique recompensas que genuinamente te motivam", "Vincule-as a conclusões específicas de tarefas: 'Depois de 30 min estudando → 1 música baixada'", "Faça a recompensa algo que você SÓ ganha por completar aquela tarefa", "Transforme comportamentos de fuga: em vez de checar Instagram pra evitar trabalho, ganhe tempo de Instagram completando o trabalho primeiro", "Perceba o sentimento positivo de fazer as coisas — isso é construção de recompensa intrínseca"], hasTimer: true, timerSec: 1800 }
      ]
    },
    {
      icon: "🤖", color: "#4ECDC4", title: "Terceirizando Habilidades de Enfrentamento",
      aka: "Deixe a Tecnologia e as Pessoas Ajudarem",
      what: "Você não precisa fazer tudo com força de vontade. Automatize o que puder, contrate ajuda quando possível e use tecnologia como seu sistema externo de função executiva. Isso não é trapacear — é estratégico.",
      tools: [
        { name: "Ideias de Terceirização", steps: ["Configure pagamento automático de contas — elimine a tarefa completamente", "Use lembretes automáticos pra tudo: compromissos, medicação, prazos", "Contrate ou troque favores pra tarefas que você consistentemente tem dificuldade (limpeza, impostos, organização)", "Use boas ferramentas: uma agenda que funcione PRA VOCÊ, apps que sirvam seu cérebro", "Cuidado com 'ouro de tolo' — comprar ferramentas de produtividade sem usá-las", "A melhor ferramenta é aquela que você realmente vai usar consistentemente"] }
      ]
    }
  ],

  quizQuestions: [
    {
      q: "Quando você tem uma tarefa chata pra fazer, o que geralmente acontece?",
      answers: [
        { text: "Eu espero até virar crise, depois resolvo na adrenalina", scores: { speed: 2, fire: 1 } },
        { text: "Eu fico enrolando até virar uma emergência que eu temo", scores: { fire: 2, blue: 1 } },
        { text: "Eu ignoro completamente e faço algo divertido no lugar", scores: { blue: 2 } },
        { text: "Eu alterno entre produtividade frenética e desligamento total", scores: { redblue: 2, speed: 1 } }
      ]
    },
    {
      q: "Como a pessoa mais próxima de você descreveria sua energia?",
      answers: [
        { text: "Sempre ligado, sempre ocupado, nunca para", scores: { speed: 2 } },
        { text: "Calmo por fora mas em pânico silencioso sobre prazos", scores: { fire: 2 } },
        { text: "Difícil de engatar, prefere conforto e rotina", scores: { blue: 2 } },
        { text: "Imprevisível — ou tá correndo ou largado no sofá", scores: { redblue: 2 } }
      ]
    },
    {
      q: "Quando você se sente mais produtivo?",
      answers: [
        { text: "Quando tenho uma agenda lotada e tudo é urgente", scores: { speed: 2, redblue: 1 } },
        { text: "Logo antes de um prazo, em modo pânico total", scores: { fire: 2 } },
        { text: "Sinceramente? Raramente me sinto produtivo e isso me incomoda", scores: { blue: 2 } },
        { text: "Em rajadas intensas, mas depois apago por dias", scores: { redblue: 2 } }
      ]
    },
    {
      q: "Como você se sente em relação ao tempo Verde (atividades divertidas e significativas)?",
      answers: [
        { text: "Não tenho tempo pra isso — muita coisa pra fazer", scores: { speed: 2 } },
        { text: "Sinto que não mereci, então pulo", scores: { fire: 2, blue: 1 } },
        { text: "Eu faço bastante Azul (Netflix, rolagem) mas pouco Verde", scores: { blue: 2 } },
        { text: "Às vezes me entrego na diversão, depois me sinto culpado e trabalho demais", scores: { redblue: 2 } }
      ]
    },
    {
      q: "Qual é sua relação com descanso?",
      answers: [
        { text: "Descanso parece fracasso. Eu deveria estar sempre fazendo algo", scores: { speed: 2 } },
        { text: "Eu descanso tarde demais — só depois de ter esgotado na crise", scores: { fire: 2 } },
        { text: "Eu descanso bastante mas não me recarrega de verdade", scores: { blue: 2, fire: 1 } },
        { text: "Eu oscilo entre zero descanso e colapso total", scores: { redblue: 2 } }
      ]
    },
    {
      q: "Quando você olha pra sua semana, o que parece mais verdadeiro?",
      answers: [
        { text: "Todo dia é lotado. Eu me alimento da correria.", scores: { speed: 2 } },
        { text: "Passei a maior parte da semana evitando uma coisa grande", scores: { fire: 2 } },
        { text: "Não fiz muito e me sinto mal por isso", scores: { blue: 2 } },
        { text: "Alguns dias eu era super-herói, outros não saí do sofá", scores: { redblue: 2 } }
      ]
    }
  ],

  patternResults: {
    speed: { icon: "🏎️", color: "#E8443A", title: "O Padrão Preciso-de-Velocidade", desc: "Você funciona na adrenalina e equipara estar ocupado a ter valor. Seu motor tá sempre acelerado, mas você tá queimando o câmbio.", page: "patterns" },
    fire: { icon: "🔥", color: "#F5A623", title: "O Padrão Brincando-com-Fogo", desc: "Você deixa pequenas tarefas queimarem lentamente até pegarem fogo. O pânico te coloca pra andar, mas a vergonha depois é esmagadora — e você nunca se permite descansar.", page: "patterns" },
    blue: { icon: "🛋️", color: "#4ECDC4", title: "O Padrão Só-Azul", desc: "Você se refugiou no seu casulo de conforto. Não é preguiça — geralmente é perfeccionismo ou medo por baixo. O Azul parece seguro mas tá te anestesiando aos poucos.", page: "patterns" },
    redblue: { icon: "🔁", color: "#4D96FF", title: "Vermelho, Azul e De Volta", desc: "Você só tem duas velocidades: tudo e nada. A chicotada é exaustiva — pra você e pra todo mundo ao redor. As marchas do meio existem; você só não encontrou elas ainda.", page: "patterns" }
  }

};
