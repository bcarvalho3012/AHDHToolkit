const langES = {
  // ============ UI STRINGS ============
  ui: {
    heroTitle: "Nombra Tu Bestia",
    heroSubtitle: "Un mapa completo de los rasgos del TDAH, cómo se sienten, y las herramientas exactas para manejarlos — tomado de dos libros líderes sobre TDAH en adultos.",
    heroSourceNote: 'Fuentes: <em>Your Brain\'s Not Broken</em> (Tamara Rosier, PhD) &amp; <em>The Adult ADHD Tool Kit</em> (Ramsay &amp; Rostain)',
    footerText: 'Contenido sintetizado de <em>Your Brain\'s Not Broken</em> por Tamara Rosier, PhD (2021) y <em>The Adult ADHD Tool Kit</em> por J. Russell Ramsay &amp; Anthony L. Rostain (2015). Esta es una referencia educativa, no asesoramiento médico.',
  },

  // ============ NAVIGATION ============
  nav: {
    traits: "🧠 Rasgos & Herramientas",
    grid: "🟥🟨🟦🟩 Cuadrícula Resolvedor",
    ladder: "🪜 Escalera Emocional",
    patterns: "🔁 Patrones",
    cbt: "⚖️ Kit de TCC",
    naming: "💡 Nombra Tu TDAH",
    quiz: "🔍 ¿Qué Patrón Soy?",
    myday: "📋 Mi Día",
    favs: "⭐ Mis Herramientas",
  },

  // ============ SOS MODAL ============
  sos: {
    fabLabel: "Estoy teniendo dificultades ahora",
    fabAriaLabel: "Necesito ayuda ahora",
    title: "¿Qué está pasando ahora?",
    subtitle: "Sin juzgar. Elige lo que más se parezca y te daré una cosa para hacer — solo una.",
    backButton: "← Volver a opciones",
    breatheWord: "Respira",
    options: [
      { id: "spiraling", emoji: "🌀", label: "En espiral" },
      { id: "paralyzed", emoji: "🧊", label: "Congelado / No puedo empezar" },
      { id: "avoiding", emoji: "🛋️", label: "Evitando todo" },
      { id: "overwhelmed", emoji: "🔥", label: "Abrumado" },
      { id: "emotional", emoji: "🌊", label: "Emociones fuertes" },
      { id: "shame", emoji: "😔", label: "Espiral de vergüenza" },
    ],
    states: {
      spiraling: {
        title: "🌀 Estás en espiral. Ralenticemos el giro.",
        color: "#E8443A",
        breathText: "Mira el círculo. Dentro cuando crece. Afuera cuando se encoge. Eso es todo.",
        steps: [
          "<strong>Suelta todo.</strong> Pon tu teléfono boca abajo. Cierra las pestañas. Solo por 2 minutos.",
          "<strong>Anclaje 5-4-3-2-1:</strong> Nombra 5 cosas que ves, 4 que oyes, 3 que puedes tocar, 2 que hueles, 1 que saboreas.",
          "<strong>Elige UNA cosa</strong> — la más pequeña y fácil que puedas ver. Haz solo eso. Nada más existe en este momento.",
        ],
      },
      paralyzed: {
        title: "🧊 Estás congelado. Descongelemos una pulgada.",
        color: "#4D96FF",
        steps: [
          "<strong>Mueve los dedos de los pies.</strong> En serio. Mueve una parte del cuerpo. Rompe el congelamiento físicamente.",
          "<strong>Pon un temporizador de 2 minutos.</strong> Solo tienes que hacer CUALQUIER COSA durante 2 minutos. Eso es todo.",
          "<strong>El Borrador Feo:</strong> Haz la tarea mal a propósito. Deletrea mal. Hazla fea. El perfeccionismo es el congelamiento — arruínalo para liberarte.",
          "<strong>Di en voz alta:</strong> 'Estoy congelado y eso está bien. Solo haré una cosita.'",
        ],
      },
      avoiding: {
        title: "🛋️ Te estás escondiendo en el Azul. Sin juzgar — empujemos un poco.",
        color: "#F5A623",
        steps: [
          "<strong>Nómbralo:</strong> Di 'Estoy evitando porque...' — solo nombrar el sentimiento reduce su poder.",
          "<strong>Emparéjalo:</strong> Haz la tarea evitada CON algo agradable — música, una bebida bonita, un lugar acogedor.",
          "<strong>Empequeñécelo:</strong> ¿Cuál es la versión más pequeña posible de esta tarea? Haz solo eso. 'Responder un email' se convierte en 'Abre el email.'",
          "<strong>Sobórnate:</strong> 'Después de 10 minutos de esto, me doy [recompensa].' Pon un temporizador y en serio.",
        ],
      },
      overwhelmed: {
        title: "🔥 Demasiado. Muchísimo demasiado. Apaguemos un fuego.",
        color: "#E8443A",
        steps: [
          "<strong>Descarga de cerebro AHORA:</strong> Agarra papel o abre notas. Escribe cada cosa en tu cabeza. No organices — solo descarga.",
          "<strong>Rodea UNA cosa.</strong> La que haría el mañana un poco menos terrible. Solo una.",
          "<strong>¿Cuál es la primera acción física?</strong> No 'hacer impuestos' — 'abre la carpeta.' No 'limpiar la casa' — 'recoge esa taza.'",
          "<strong>Todo lo demás puede esperar.</strong> Ya estaba esperando antes también. Dáte permiso para ignorarlo por ahora.",
        ],
      },
      emotional: {
        title: "🌊 Emociones fuertes están chocando. Surfeemos la onda.",
        color: "#FF6B6B",
        breathText: "4 segundos dentro... 7 segundos aguanta... 8 segundos afuera. Esto activa el pedal de freno de tu cuerpo.",
        steps: [
          "<strong>Califica 1-10.</strong> 'En este momento estoy en [número].' Solo nombrar la intensidad crea distancia.",
          "<strong>Esto pasará.</strong> Las emociones son olas — pico y se retiran. Has sobrevivido cada onda hasta ahora.",
          "<strong>No tomes decisiones ahora.</strong> Tu cerebro emocional está conduciendo. Deja que pase antes de responder, enviar o decidir nada.",
          "<strong>Mueve tu cuerpo:</strong> Camina, estira, salpica agua fría. La emoción es física — muévela a través de tu cuerpo.",
        ],
      },
      shame: {
        title: "😔 La vergüenza está fuerte ahora. Te está mintiendo.",
        color: "#8E6FBF",
        steps: [
          "<strong>La vergüenza dice que ERES roto.</strong> La verdad: TIENES un cerebro que funciona diferente. No es lo mismo.",
          "<strong>¿Dirías esto a un amigo?</strong> Lo que sea que te estés diciendo — ¿se lo dirías a alguien que amas? Entonces no te lo digas a ti.",
          "<strong>Nombra una cosa que hiciste hoy.</strong> Cualquier cosa. ¿Saliste de la cama? Eso cuenta. ¿Abriste esta app? Eso cuenta. Lo intentas, y eso importa.",
          "<strong>Este es un momento malo, no una vida mala.</strong> Aleja la vista. Ayer fue diferente. Mañana también lo será.",
        ],
      },
    },
  },

  // ============ SECTION PAGES ============
  pages: {
    traits: {
      title: "Mapa de Rasgos del TDAH → Herramientas",
      desc: "Haz clic en cualquier rasgo para revelar qué es, cómo se siente, y herramientas paso a paso para manejarlo. Toca ⭐ en cualquier herramienta para guardarla en tu kit personal.",
      searchPlaceholder: "Busca rasgos, sentimientos o herramientas…",
    },
    grid: {
      title: "La Cuadrícula Resolvedor",
      desc: 'El marco de la Dra. Rosier para entender cómo categorizas tareas basado en dos ejes: <strong>Divertido vs. No Divertido</strong> y <strong>Emocionalmente Estimulante vs. No Estimulante</strong>. Entender dónde se sitúa una tarea en esta cuadrícula te ayuda a elegir la estrategia correcta.',
    },
    ladder: {
      title: "La Escalera de Salud Emocional",
      desc: 'Creado por Rosier &amp; Gott, este marco de 5 niveles te ayuda a ver dónde estás emocionalmente para que puedas elegir qué hacer después. Naturalmente subes y bajas diariamente. El objetivo no es perfección — es conciencia.',
      checkinTitle: "📍 ¿Dónde estás ahora?",
      checkinSubtitle: "Toca un nivel para registrar el check-in de hoy. Rastrear te ayuda a ver patrones con el tiempo.",
      historyTitle: "Últimos 14 días",
      levels: [
        "☀️ 1 — Presente",
        "🌤️ 2 — Atendiendo",
        "⛅ 3 — Piloto Automático",
        "🌧️ 4 — Modo Supervivencia",
        "🌩️ 5 — Delirante",
      ],
    },
    patterns: {
      title: "Patrones Predecibles",
      desc: 'La Dra. Rosier identificó estos patrones de energía comunes que nos mantienen atrapados. Reconocer tu patrón es el primer paso para romperlo.',
      quizLink: "¿Qué Patrón Soy?",
      quizPrompt: "(¿No estás seguro de cuál eres? Intenta el ",
      quizPromptEnd: " quiz.)",
    },
    cbt: {
      title: "El Kit de TCC",
      desc: "Del enfoque de terapia cognitivo-conductual respaldado por investigación de Ramsay &amp; Rostain. Estas son las técnicas específicas y enseñables para manejar el TDAH día a día.",
    },
    naming: {
      title: "Nombra Tu TDAH",
      desc: "El concepto poderoso de la Dra. Rosier: crear una metáfora para tu TDAH te ayuda a externalizarlo, entenderlo, y desarrollar estrategias. La metáfora que elijas literalmente cambia cómo piensas las soluciones.",
      whyTitle: "🔬 Por Qué Funciona Nombrar (La Ciencia)",
      whyText: 'La investigación muestra que las metáforas cambian el pensamiento a nivel inconsciente. En un estudio, personas que leyeron sobre crimen descrito como una <em>"bestia"</em> sugirieron estrategias de control (más policía, penas más estrictas). Quienes leyeron sobre crimen como una <em>"enfermedad"</em> sugirieron estrategias de tratamiento (abordar causas raíz). La metáfora que uses para tu TDAH forma las soluciones hacia las que gravitarás.',
    },
    quiz: {
      title: "¿Qué Patrón Soy?",
      desc: "Responde 6 preguntas rápidas para descubrir tu patrón de energía dominante del TDAH y obtén estrategias dirigidas. No hay respuesta incorrecta — elige lo que resuene más.",
    },
    myday: {
      title: "Mi Día",
      desc: 'La Cuadrícula Resolvedor en acción. Descarga tu cerebro de tareas, coloréalas, y mira tu balance de energía. Se reinicia diariamente — sin culpa del ayer. <span style="color:#6BCB77">Tus tareas se guardan en este navegador.</span>',
      brainDumpTitle: "🧠 Descarga de Cerebro",
      brainDumpSubtitle: "Sácalo todo. No organices — solo escribe y añade. Luego colorea cada tarea por cuadrante.",
      inputPlaceholder: "¿Qué está en tu mente? Añade una tarea…",
      addBtn: "+ Añadir",
      carryForwardBtn: "📦 Llevar adelante sin terminar",
      clearDayBtn: "🗑️ Nuevo comienzo",
      storageNote: "Tus tareas se guardan en este navegador en este dispositivo.",
      confirmClear: "¿Nuevo comienzo? Esto borrará todas las tareas de hoy.",
      alertNoUnfinished: "¡Sin tareas sin terminar del ayer!",
      emptyState: "Tu descarga de cerebro está vacía. Añade algunas tareas arriba — no pienses, solo escribe.",
    },
    favs: {
      title: "⭐ Mis Herramientas",
      desc: 'Tu kit personal — las estrategias que has guardado de todas las secciones. Estas son las que funcionan para <em>ti</em>.',
      emptyState: "Sin herramientas guardadas aún. Navega las pestañas de Rasgos & Herramientas o Kit de TCC y toca la estrella ✩ en cualquier tarjeta de herramienta para guardarla aquí.",
    },
  },

  // ============ LABELS & MISC ============
  labels: {
    what: "Qué Es",
    feel: "Cómo Se Siente",
    tool: "Herramientas para Manejarlo",
    how: "Cómo Usarla",
    tapToStart: "— toca para empezar",
    doneButton: "¡Listo!",
    seeAllPatterns: "Ver todos los patrones →",
    retakeQuiz: "Retomar quiz",
    filterAll: "Todos",
    filterAttention: "Atención",
    filterEmotion: "Emoción",
    filterExecutive: "Función Ejecutiva",
    filterMotivation: "Motivación",
    filterThinking: "Pensamiento",
    filterSocial: "Social",
  },

  // ============ ENERGY / MY DAY ============
  energy: {
    meterTitle: "⚡ Balance de Energía",
    red: "Rojo — urgente/estresante",
    yellow: "Amarillo — aburrido pero necesario",
    blue: "Azul — relajante/recargarse",
    green: "Verde — divertido & significativo",
    legendRed: "Rojo (drena rápido)",
    legendYellow: "Amarillo (drenaje lento)",
    legendBlue: "Azul (recarga lenta)",
    legendGreen: "Verde (recarga rápida)",
    statTasks: "Tareas",
    statDone: "Hechas",
    statStreak: "Racha de días",
    colorPrompt: "Colorea tus tareas para ver el balance de energía",
    allDrain: '⚠️ <strong>Solo drenaje, sin recarga.</strong> Tu batería llegará a cero. Añade al menos una actividad Verde o Azul — necesitas combustible, no solo tareas.',
    heavyRed: '🔴 <strong>Día muy Rojo.</strong> Eso es mucha adrenalina. ¿Alguno de estos puede ser Amarillo dividiéndolos en pasos pequeños? Tu cuerpo no puede sostener esto.',
    yellowMarathon: '🟡 <strong>Maratón Amarillo.</strong> Las tareas aburridas drenan lentamente — programa una recompensa Verde entre ellas o emparejalas con algo agradable (música, una bebida, un podcast).',
    lotsBlue: '🔵 <strong>Mucho Azul.</strong> Pregúntate: ¿esto me está recargando o adormeciendo? Intenta cambiar un Azul por un Verde — recarga más rápido y te sentirás mejor después.',
    niceBalance: '✅ <strong>Balance bonito.</strong> Tienes drenaje y recarga mezclados. Esto es sostenible. Recuerda hacer el Verde — no lo saltes porque sientas que no lo has ganado.',
    greenOnBoard: '🟢 <strong>Verde en el tablero.</strong> Bien. Asegúrate de que realmente suceda — es lo primero que se sacrifica cuando el día se pone ocupado, y no debería.',
  },

  // ============ TRAITS DATA ============
  traits: [
    {
      id: "emotional-dysregulation",
      icon: "🌊", color: "#FF6B6B", cat: "emotion",
      title: "Disregulación Emocional",
      aka: "El Vecino Enojado / Emociones Fuertes / Inundación",
      what: "En lugar de un 'mayordomo' tranquilo (corteza prefrontal) manejando tus respuestas, las personas con TDAH tienen un 'vecino enojado' en los centros emocionales del cerebro que reacciona primero. Las emociones golpean más fuerte, más rápido, y duran más de lo esperado. Un comentario de un dependiente puede arruinar tu día completo.",
      feel: "Tristeza abrumadora por pequeños reveses. Frustración explosiva por pequeños obstáculos. Llorar cuando no te sientes triste. Emociones que sienten desproporcionadas a la situación. Vergüenza por la intensidad de tus propias reacciones.",
      tools: [
        {
          name: "Respiración 4-7-8",
          steps: ["Inhala lentamente por tu nariz durante 4 segundos", "Aguanta la respiración por 7 segundos", "Exhala lentamente por tu boca durante 8 segundos", "Repite 3-4 veces. Esto activa tu sistema nervioso parasimpático e interrumpe la cascada de lucha o huida"],
          hasTimer: true, timerSec: 19,
        },
        {
          name: "Nombra la Intensidad (Escala 1-10)",
          steps: ["Cuando la emoción te inunde, pausa y califica: 'Esto es un 7 en este momento'", "Nombrarlo crea distancia — estás observando la emoción en lugar de ser tragado por ella", "Míralo bajar. Las emociones son olas, no estados permanentes", "Recuerda: la emoción es real, pero no es el panorama completo"],
        },
        {
          name: "Check-In en la Escalera Emocional",
          steps: ["Pregunta: ¿En qué nivel estoy ahora? (1=Tranquilo, 3=Piloto Automático, 5=Delirante)", "Si estás en Nivel 4-5, no intentes resolver nada — solo estabiliza", "Una respiración lenta. Nombra lo que sientes. No actúes sobre ello aún", "Objetivo: vuelve al Nivel 3 primero, luego Nivel 2"],
        },
        {
          name: "Actuación de Método (Actúa 'Como Si')",
          steps: ["Del Kit de TCC: actúa opuesto a tu emoción actual", "Sonríe si te sientes enojado. Aplaude y di 'OK, vamos' si te sientes atrapado", "Esto no es falso — es preparar tu cerebro para una respuesta diferente", "Combinado con un primer paso definido, rompe el ciclo de parálisis emocional"],
        },
      ],
    },
    {
      id: "time-blindness",
      icon: "⏰", color: "#F5A623", cat: "executive",
      title: "Ceguera del Tiempo",
      aka: "El Reloj Roto / Ahora vs. No Ahora",
      what: "Las personas con TDAH no experimentan el tiempo como lo hacen los neurotípicos. Esencialmente hay solo dos zonas horarias: AHORA y NO AHORA. El tiempo se distorsiona — a veces vuela, a veces se arrastra. Estimar cuánto toman las cosas es casi imposible. Perpetuamente llegas tarde o muy temprano.",
      feel: "Sorprendido de que pasaron 3 horas. Retraso crónico a pesar de intentarlo. Pánico cuando los plazos aparecen 'de repente.' Sentir que el tiempo es resbaladizo e incontrolable. Culpa por siempre estar retrasado.",
      tools: [
        {
          name: "Anclajes de Tiempo Externos",
          steps: ["Usa relojes analógicos (el barrido visual de las manecillas muestra el tiempo pasando espacialmente)", "Pon múltiples alarmas: alarma de advertencia, alarma de transición, alarma 'sal AHORA'", "Usa temporizadores visuales (Time Timer, reloj de arena, o un temporizador de cocina con forma de cerdo)", "Coloca relojes en cada cuarto — haz el tiempo visible"],
        },
        {
          name: "Entrenamiento de Estimación de Tiempo",
          steps: ["Antes de empezar una tarea, escribe cuánto tiempo crees que tomará", "Pon un temporizador y haz la tarea", "Compara tu estimación con la realidad", "Regla de la Dra. Rosier: multiplica tu estimación por 3 — eso está más cerca de la realidad", "Con el tiempo, esto construye un reloj interno más preciso"],
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
      title: "El Patrón Descanso → Colapso",
      aka: "El Vórtice del Sofá",
      what: "Te dices a ti mismo que 'descansarás primero, luego harás cosas,' pero el descanso nunca termina. Desplazarse, dormir una siesta, o desconectarse se convierte en todo el día. No eres perezoso — tu cerebro está atrapado en modo de baja estimulación y no puede generar la energía de activación para cambiar de marcha.",
      feel: "Culpa por 'desperdiciar el día.' Sentir que el descanso debería ser suficiente para recargarse pero nunca lo es. Ver el tiempo desaparecer mientras haces nada productivo. Prometerte a ti mismo 'solo 5 minutos más' durante horas.",
      tools: [
        { name: "La Plataforma de Lanzamiento de 2 Minutos", steps: ["Pon un temporizador por solo 2 minutos", "Haz CUALQUIER tarea pequeña: dobla una camiseta, envía un texto, lava un plato", "El objetivo no es completar — es activarse. El movimiento crea impulso", "Después de 2 minutos, puedes parar sin culpa. La mayoría de las personas continúan."] },
        { name: "Empareja Descanso con Movimiento", steps: ["El descanso real no siempre es quietud — a veces es movimiento suave", "Camina alrededor de la cuadra mientras escuchas un podcast", "Estira en el piso mientras ves tu show", "Esto mantiene la dopamina fluyendo sin requerir 'trabajo'"] },
      ],
    },
    {
      id: "hyperfocus-burnout",
      icon: "🔥", color: "#E8443A",
      title: "El Patrón Hiperfoco → Agotamiento",
      aka: "El Sprint & Colapso",
      what: "Descubres algo interesante y te sumerges completamente — 8 horas seguidas sin comida, agua, o descansos. Eres increíblemente productivo... hasta que colapsas completamente. Al día siguiente apenas puedes funcionar. Este ciclo se repite sin cesar.",
      feel: "Euforia durante el hiperfoco. Agotamiento físico después. Saltando comidas, ignorando mensajes, perdiendo la noción del tiempo. Sentir que solo puedes trabajar al 100% o al 0% sin nada en medio.",
      tools: [
        { name: "El Guardrail Pomodoro", steps: ["Pon un temporizador por 25 minutos de trabajo enfocado", "Cuando suene, PARA — incluso si estás en flujo", "Toma un descanso de 5 minutos: párate, estira, bebe agua", "Después de 4 rondas, toma un descanso real de 15-30 minutos", "Este es un guardrail, no un hack de productividad — previene el colapso"] },
        { name: "La Alarma de Verificación Corporal", steps: ["Pon una alarma recurrente cada 90 minutos", "Cuando suene, verifica: ¿Tengo hambre? ¿Sed? ¿Necesito el baño?", "El hiperfoco del TDAH suprime señales corporales — literalmente no puedes sentirlas", "Come, bebe, y muévete antes de volver a entrar"] },
      ],
    },
    {
      id: "anxiety-avoidance",
      icon: "😰", color: "#F5A623",
      title: "El Patrón Ansiedad → Evitación",
      aka: "El Muro de Preocupación",
      what: "Una tarea se siente aterradora o incierta, así que la evitas. La evitación crea más ansiedad porque ahora está vencida Y es aterradora. Así que evitas aún más. La tarea crece en un monstruo en tu mente, mucho más grande de lo que realmente es.",
      feel: "Temor cuando pienso en la tarea. Tensión física en tu pecho o estómago. Justificaciones elaboradas de por qué 'mañana' es mejor. La tarea ocupando espacio mental 24/7 mientras haces todo excepto eso.",
      tools: [
        { name: "El Cheque de Realidad del 'Peor Caso'", steps: ["Escribe la cosa absolutamente peor que podría pasar si haces la tarea", "Ahora escribe qué sucederá REALMENTE (casi siempre es menos dramático)", "Pregunta: ¿cuál es el costo de NO hacerlo por otra semana?", "A menudo el costo de la evitación es más que la tarea misma"] },
        { name: "Empequeñece la Tarea", steps: ["¿Cuál es la versión más pequeña posible de esta tarea?", "'Hacer impuestos' → 'Encontrar la carpeta de impuestos del año pasado'", "'Limpiar la casa' → 'Limpiar el mostrador de la cocina'", "'Responder ese email' → 'Abre el email'", "Haz el primer paso tan pequeño que se sienta casi tonto — ese es el punto"] },
      ],
    },
    {
      id: "people-pleasing-resentment",
      icon: "🎭", color: "#8E6FBF",
      title: "El Patrón Complacer a la Gente → Resentimiento",
      aka: "La Trampa del Sí",
      what: "Dices sí a todo porque la impulsividad del TDAH hace difícil pausar y pensar sobre tu capacidad. También anhelas el golpe de dopamina de alguien siendo complacido contigo. Luego estás sobrecomprometido, exhausto, y resentido — pero te sientes demasiado culpable para retractarte.",
      feel: "Decir sí antes de pensar. Arrepentimiento inmediato después de acordar. Resentimiento acumulándose hacia personas que 'siguen pidiendo.' Sentir que las necesidades de todos importan más que las tuyas. Agotamiento por sobrecomprometerse.",
      tools: [
        { name: "La Regla de 24 Horas", steps: ["Nunca digas sí inmediatamente a ninguna solicitud nueva", "Di: 'Déjame revisar mi calendario y te vuelvo a contactar'", "Esto crea un espacio para que tu 'sí' impulsivo se enfríe", "Después de 24 horas, verifica tu capacidad real antes de responder"] },
        { name: "El Radar de Resentimiento", steps: ["Antes de decir sí, pregunta: '¿Le tendré resentimiento a esto en una semana?'", "Si la respuesta es sí o tal vez — es un no", "Practica: 'Me encantaría ayudar pero no puedo esta vez'", "Recuerda: cada sí a alguien más es un no a algo en tu vida"] },
      ],
    },
  ],

  // ============ CBT TOOLS DATA ============
  cbtTools: [
    {
      id: "cbt-thought-record",
      icon: "📝", color: "#4ECDC4",
      title: "El Registro de Pensamiento",
      aka: "Atrápalo, Verifica, Cámbialo",
      what: "Una forma estructurada de desafiar los pensamientos negativos automáticos que los cerebros con TDAH generan constantemente. En lugar de creer cada pensamiento, aprendes a atrapar distorsiones y reformularlas con evidencia.",
      feel: "El crítico interno dice 'Siempre fracasas' — esta herramienta te ayuda a hablar de vuelta con hechos.",
      tools: [
        { name: "Registro de Pensamiento de 3 Columnas", steps: ["Escribe el pensamiento automático: 'Voy a fallar esto'", "Lista la evidencia EN FAVOR (usualmente sentimientos, no hechos)", "Lista la evidencia EN CONTRA (veces que tuviste éxito, habilidades que tienes)", "Escribe un pensamiento balanceado: 'Esto es difícil, pero he hecho cosas difíciles antes'"] },
      ],
    },
    {
      id: "cbt-implementation-intentions",
      icon: "🎯", color: "#6BCB77",
      title: "Intenciones de Implementación",
      aka: "Planes Si-Entonces / Planes Cuando-Entonces",
      what: "En lugar de confiar en motivación o memoria, creas planes específicos si-entonces que automatizan el comportamiento. La investigación muestra que estos duplican la probabilidad de seguir adelante — esencialmente pre-programan tu respuesta.",
      feel: "Como tener un GPS para tu comportamiento en lugar de intentar navegar por intuición.",
      tools: [
        { name: "Planificación Si-Entonces", steps: ["Escribe: 'CUANDO [situación], ENTONCES haré [acción específica]'", "Ejemplo: 'CUANDO me siento en mi escritorio, ENTONCES abro mi lista de tareas primero'", "Ejemplo: 'CUANDO siento las ganas de desplazarme, ENTONCES pongo un temporizador de 5 minutos'", "Se específico sobre el disparador Y la acción — planes vagos no funcionan", "Publica estos donde los veas. Repítelos en voz alta."] },
      ],
    },
    {
      id: "cbt-behavioral-experiments",
      icon: "🧪", color: "#F5A623",
      title: "Experimentos de Comportamiento",
      aka: "Pruébalo, No lo Creas",
      what: "En lugar de discutir con predicciones ansiosas, las pruebas. Tu cerebro con TDAH hace predicciones catastróficas ('Si hablo, todos me juzgarán'). Un experimento de comportamiento dice 'Descubrámoslo.'",
      feel: "Aterrador al principio, pero liberador cuando descubres que tus predicciones eran incorrectas.",
      tools: [
        { name: "La Prueba de Predicción", steps: ["Escribe tu predicción: 'Si hago X, entonces Y sucederá'", "Califica tu confianza (0-100%)", "Haz la cosa. Observa qué sucede realmente", "Compara: ¿fue precisa tu predicción?", "Los cerebros con TDAH sobrestiman el peligro y subestiman la capacidad de afrontamiento — esto lo prueba"] },
      ],
    },
    {
      id: "cbt-scaffolding",
      icon: "🏗️", color: "#4D96FF",
      title: "Andamiaje Ambiental",
      aka: "Construye la Rampa, No Te Obligues a Subir las Escaleras",
      what: "En lugar de intentar cambiar tu comportamiento a través de la fuerza de voluntad (que es limitada e insegura con TDAH), cambias tu entorno para hacer más fácil el comportamiento deseado y más difícil el no deseado.",
      feel: "Como configurar tu vida para caer en buenos hábitos en lugar de luchar por ellos.",
      tools: [
        { name: "Diseño de Fricción", steps: ["Haz los buenos comportamientos FÁCILES: pon vitaminas junto al café, bolsa de gimnasio por la puerta", "Haz los malos comportamientos DIFÍCILES: elimina apps de redes sociales, pon el teléfono en otra cuarto", "Usa señales visuales: notas pegajosas, libros abiertos, listas de tareas visibles", "Diseña tu espacio para la persona que REALMENTE ERES, no para quien deseas ser"] },
      ],
    },
  ],

  // ============ QUIZ DATA ============
  quizQuestions: [
    {
      question: "Cuando tienes un sábado libre sin nada planeado, típicamente…",
      answers: [
        { text: "Termino en el sofá desplazándome durante horas, pensando que me levantaré 'pronto'", pattern: "rest-crash" },
        { text: "Me sumerjo en un proyecto y pierdo todo el día sin comer", pattern: "hyperfocus-burnout" },
        { text: "Me siento ansioso sobre todas las cosas que DEBERÍA estar haciendo", pattern: "anxiety-avoidance" },
        { text: "Digo sí a cada invitación social y termino exhausto", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Mi mayor problema de energía es…",
      answers: [
        { text: "Nunca puedo empezar — la inercia es mi enemigo", pattern: "rest-crash" },
        { text: "Trabajo demasiado duro y luego colapso completamente", pattern: "hyperfocus-burnout" },
        { text: "La preocupación agota toda mi energía antes de que incluso empiece", pattern: "anxiety-avoidance" },
        { text: "Las necesidades de otras personas me drenan antes de llegar a las mías", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Cuando alguien pregunta cómo estás, a menudo pienso…",
      answers: [
        { text: "'Cansado, pero no sé por qué ya que no HICE nada'", pattern: "rest-crash" },
        { text: "'Agotado — trabajé 12 horas seguidas ayer'", pattern: "hyperfocus-burnout" },
        { text: "'Estresado por todo en lo que estoy atrasado'", pattern: "anxiety-avoidance" },
        { text: "'Bien' (mientras internamente resentido por todas tus obligaciones)", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Mi informe de tiempo de pantalla probablemente mostraría…",
      answers: [
        { text: "Horas desplazándose en redes sociales o viendo videos", pattern: "rest-crash" },
        { text: "Ráfagas intensas en una app/tema, luego nada por días", pattern: "hyperfocus-burnout" },
        { text: "Muchas aperturas y cierres de las mismas apps ansiosamente", pattern: "anxiety-avoidance" },
        { text: "Mensajería constante y respondiendo a otra gente", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "La emoción que siento MÁS a menudo es…",
      answers: [
        { text: "Culpa por ser 'perezoso' incluso aunque estoy exhausto", pattern: "rest-crash" },
        { text: "Frustración de que no puedo sostener mis ráfagas productivas", pattern: "hyperfocus-burnout" },
        { text: "Temor a tareas que crecen en mi mente", pattern: "anxiety-avoidance" },
        { text: "Resentimiento hacia personas que 'siguen pidiendo' cosas", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Si pudiera arreglar UNA cosa sobre tu vida diaria, sería…",
      answers: [
        { text: "Poder realmente EMPEZAR cosas cuando quiero", pattern: "rest-crash" },
        { text: "Encontrar un ritmo sostenible en lugar de todo-o-nada", pattern: "hyperfocus-burnout" },
        { text: "Detener la espiral de preocupación que previene la acción", pattern: "anxiety-avoidance" },
        { text: "Aprender a decir no sin sentirme terrible al respecto", pattern: "people-pleasing-resentment" },
      ],
    },
  ],

  // ============ QUIZ RESULTS ============
  patternResults: {
    "rest-crash": {
      icon: "💤",
      title: "El Patrón Descanso → Colapso",
      description: "Tu cerebro se queda atrapado en modo de baja estimulación. El descanso no te recarga realmente — se convierte en un vórtice. La clave no es más descanso, es el tipo CORRECTO de activación.",
      strategies: [
        "Empieza con la acción más pequeña — dobla una camiseta, lava un plato",
        "Usa un temporizador de 2 minutos: solo te comprometes a 2 minutos de cualquier cosa",
        "Empareja descanso con movimiento suave (caminar + podcast, estirarse + show)",
        "Programa UN evento de activación cada día — algo que realmente disfrutes",
        "Recuerda: el movimiento crea motivación, no al revés",
      ],
    },
    "hyperfocus-burnout": {
      icon: "🔥",
      title: "El Patrón Hiperfoco → Agotamiento",
      description: "Eres increíblemente productivo en ráfagas pero colapsas duramente después. Tu cerebro ama la intensidad pero no puede sustentarla. El objetivo no es dejar de hiperfocarte — es añadir guardrails.",
      strategies: [
        "Usa temporizadores Pomodoro (25 min encendido, 5 apagado) como guardrails, no hacks de productividad",
        "Pon alarmas de verificación corporal cada 90 minutos: ¿Tengo hambre? ¿Sed?",
        "Planifica tu colapso: programa tiempo de recuperación DESPUÉS de sesiones de hiperfoco conocidas",
        "Mantén una lista de 'puntos de parada' — pre-decide dónde pausarás",
        "Recuerda: el sostenible 60% vence al brillante-luego-roto 100%",
      ],
    },
    "anxiety-avoidance": {
      icon: "😰",
      title: "El Patrón Ansiedad → Evitación",
      description: "Las tareas se sienten más aterradoras cuanto más las evitas, creando un ciclo de perdición. Tu cerebro sobreestima la dificultad y subestima tu capacidad de afrontamiento. La tarea casi nunca es tan mala como la ansiedad al respecto.",
      strategies: [
        "Haz el cheque de realidad del 'peor caso' — escríbelo, luego escribe qué sucederá REALMENTE",
        "Empequeñece la tarea: 'Hacer impuestos' → 'Encontrar la carpeta del año pasado'",
        "Pon un temporizador por 10 minutos — puedes sobrevivir cualquier cosa 10 minutos",
        "El costo de la evitación es SIEMPRE más alto que el costo de hacer la tarea",
        "Después de empezar, observa: ¿es esto realmente tan malo como imaginaste?",
      ],
    },
    "people-pleasing-resentment": {
      icon: "🎭",
      title: "El Patrón Complacer a la Gente → Resentimiento",
      description: "Tu 'sí' impulsivo y necesidad de aprobación te mantienen sobrecomprometido. Das hasta estar vacío, luego te sientes resentido — aprender a decir no no es egoísta — es supervivencia.",
      strategies: [
        "Usa la regla de 24 horas: nunca digas sí inmediatamente a ninguna solicitud",
        "Usa script: 'Déjame revisar mi calendario y te vuelvo a contactar'",
        "El Radar de Resentimiento: '¿Le tendré resentimiento en una semana? Entonces es un no.'",
        "Cada sí a alguien más es un no a algo en tu vida",
        "Practica: 'Me encantaría ayudar pero no puedo esta vez' — sin explicación necesaria",
      ],
    },
  },

  // ============ SOLVE-IT GRID DATA ============
  solveItGrid: {
    quadrants: [
      {
        class: "q-red",
        title: "🔴 Zona Roja — No Divertido + Estimulante",
        subtitle: "Tareas urgentes y estresantes que disparan lucha-o-huida",
        examples: ["Facturas vencidas", "Conversaciones de conflicto", "Plazos de último minuto", "Presentación de impuestos"],
        strategy: "Estas tareas activan adrenalina. Divídelas en pasos minúsculos para reducir la abrumación. Pon un temporizador y haz solo 10 minutos.",
      },
      {
        class: "q-yellow",
        title: "🟡 Zona Amarilla — No Divertido + No Estimulante",
        subtitle: "Tareas aburridas, necesarias que drenan lentamente",
        examples: ["Entrada de datos", "Limpieza", "Emails rutinarios", "Papeleo"],
        strategy: "Empareja con algo agradable: música, un podcast, una bebida bonita. O usa body-doubling — hazlo junto a alguien más.",
      },
      {
        class: "q-blue",
        title: "🔵 Zona Azul — Divertido + No Estimulante",
        subtitle: "Actividades cómodas y fáciles — la 'zona del sofá'",
        examples: ["Desplazarse en redes sociales", "Ver TV", "Búsqueda casual", "Dormir una siesta"],
        strategy: "No todo Azul es malo — necesitas recuperación. Pero pregunta: ¿esto me está recargando o adormeciendo? Cambia algo de Azul por Verde.",
      },
      {
        class: "q-green",
        title: "🟢 Zona Verde — Divertido + Estimulante",
        subtitle: "Actividades energizantes que genuinamente te recargan",
        examples: ["Proyectos creativos", "Ejercicio", "Aprender algo nuevo", "Socializar con gente que amas"],
        strategy: "Este es tu combustible. Programalo PRIMERO, no como una recompensa. Necesitas Verde para tener energía para Rojo y Amarillo.",
      },
    ],
    toolTitle: "🎯 Cómo Usar la Cuadrícula",
    toolSteps: [
      "Mira tu lista de tareas y colorea mentalmente cada tarea por cuadrante",
      "Si es todo Rojo y Amarillo, te quemarás — añade Verde",
      "Si es todo Azul, estás evitando — cambia un Azul por un Verde",
      "Apunta a una mezcla: aborda Rojo/Amarillo CON recompensas Verde incorporadas",
      "Usa la pestaña 'Mi Día' para realmente colorear y rastrear tu balance diario",
    ],
  },

  // ============ NAMING METAPHORS ============
  namingMetaphors: [
    {
      emoji: "🐉",
      title: "El Dragón",
      desc: "Poderoso, impredecible, escupe fuego. No puedes matarlo — pero puedes aprender a montarlo.",
      strategy: "Si tu TDAH es un dragón, las soluciones involucran: aprovechar su poder, construir estructuras a prueba de fuego, y aprender cuándo está a punto de escupir fuego.",
    },
    {
      emoji: "🌊",
      title: "El Océano",
      desc: "A veces tranquilo, a veces tormentoso. Tiene corrientes poderosas. Hermoso pero peligroso si no lo respetas.",
      strategy: "Si tu TDAH es un océano, las soluciones involucran: aprender a nadar, leer las mareas, construir un buen barco, y saber cuándo quedarse en tierra.",
    },
    {
      emoji: "🐒",
      title: "La Mente Mono",
      desc: "Saltando de rama en rama. Curioso, energético, fácilmente distraído por cosas brillantes.",
      strategy: "Si tu TDAH es un mono, las soluciones involucran: crear caminos interesantes para seguir, usar plátanos (recompensas) estratégicamente, y construir un parque que vaya adonde necesitas.",
    },
    {
      emoji: "⚡",
      title: "La Tormenta de Rayo",
      desc: "Ráfagas de energía brillante seguidas de oscuridad. Impredecible pero increíblemente poderoso.",
      strategy: "Si tu TDAH es una tormenta, las soluciones involucran: construir pararrayos (sistemas de captura), preparar a prueba de tormentas tu vida, y aprender a usar la electricidad.",
    },
    {
      emoji: "🏎️",
      title: "El Auto de Carreras",
      desc: "Motor increíblemente rápido, pero los frenos no siempre funcionan. Construido para la velocidad, no para estacionamientos.",
      strategy: "Si tu TDAH es un auto de carreras, las soluciones involucran: encontrar la pista correcta, mejorar los frenos, y aceptar que no fuiste construido para caminos lentos.",
    },
    {
      emoji: "🌋",
      title: "El Volcán",
      desc: "La presión se acumula silenciosamente, luego explota. Increíblemente creativo y destructivo en igual medida.",
      strategy: "Si tu TDAH es un volcán, las soluciones involucran: válvulas de liberación de presión, monitorear las señales de advertencia, y canalizar la lava productivamente.",
    },
  ],

  // ============ LADDER DATA ============
  ladderLevels: [
    {
      level: 1,
      title: "Nivel 1 — Presente & Floreciendo",
      color: "#6BCB77",
      emoji: "☀️",
      description: "Estás enraizado, consciente, y haciendo elecciones conscientes. Puedes observar tus emociones sin ser arrastrado. Esto no significa que todo sea perfecto — significa que lo estás manejando.",
      signs: ["Tomando decisiones conscientes", "Capaz de pausar antes de reaccionar", "Consciente de tus emociones sin ahogarte en ellas", "Puedes priorizar y seguir adelante"],
    },
    {
      level: 2,
      title: "Nivel 2 — Atendiendo & Manejando",
      color: "#4ECDC4",
      emoji: "🌤️",
      description: "Estás principalmente funcional pero esforzándote más. Las cosas toman más energía de lo usual. Aún puedes tomar buenas decisiones pero notas que estás trabajando más duro para mantenerte en camino.",
      signs: ["Funcionando pero cansado", "Necesitas más recordatorios y sistemas", "Las emociones son manejables pero presentes", "Puedes completar tareas con esfuerzo extra"],
    },
    {
      level: 3,
      title: "Nivel 3 — Piloto Automático",
      color: "#F5A623",
      emoji: "⛅",
      description: "Siguiendo la rutina. No es terrible, pero tampoco realmente presente. Estás sobreviviendo pero no participando. Aquí es donde la mayoría de las personas con TDAH pasan mucho de su tiempo.",
      signs: ["Siguiendo la rutina", "Desplazándote más de lo usual", "Comiendo por comodidad, no por hambre", "Evitando conversaciones difíciles", "Baja motivación, alta inercia"],
    },
    {
      level: 4,
      title: "Nivel 4 — Modo Supervivencia",
      color: "#E8443A",
      emoji: "🌧️",
      description: "Todo se siente difícil. Las tareas básicas se sienten monumentales. Eres reactivo, no proactivo. Las emociones están conduciendo el show y tu corteza prefrontal esencialmente se fue del turno.",
      signs: ["Todo se siente abrumador", "Crispándose con la gente", "No puedes empezar o terminar nada", "Síntomas físicos: dolores de cabeza, tensión, agotamiento", "Tomando decisiones impulsivas"],
    },
    {
      level: 5,
      title: "Nivel 5 — Crisis / Delirante",
      color: "#C06080",
      emoji: "🌩️",
      description: "Tu percepción está distorsionada. Crees las historias de vergüenza ('Estoy roto,' 'Nunca cambiaré'). No puedes ver soluciones y todo se siente permanente. Esto es temporal, aunque no se sienta así.",
      signs: ["Creyendo que estás fundamentalmente roto", "No puedes ver ninguna solución", "Todo se siente permanente y sin esperanza", "Aislándote de todos", "Puede que necesites apoyo profesional en este nivel"],
    },
  ],
};
