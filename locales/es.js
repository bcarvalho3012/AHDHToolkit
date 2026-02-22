// ============================================================
// Español (Latinoamérica) — ADHD Toolkit v3
// Traducción completa de en.js a ES
// ============================================================

const langES = {

  // ========================================
  // UI Chrome — claves planas para strings simples
  // ========================================
  ui: {
    // Hero
    heroTitle: "Ponle Nombre a Tu Bestia",
    heroSubtitle: "Un mapa completo de los rasgos del TDAH, cómo se sienten y las herramientas exactas para manejarlos — extraído de dos libros referencia sobre TDAH en adultos.",
    heroSource: 'Fuentes: <em>Your Brain\'s Not Broken</em> (Tamara Rosier, PhD) &amp; <em>The Adult ADHD Tool Kit</em> (Ramsay &amp; Rostain)',

    // Nav buttons (9 total)
    navTraits: "🧠 Rasgos &amp; Herramientas",
    navGrid: "🟥🟨🟦🟩 Cuadrícula Resuélvelo",
    navLadder: "🪜 Escalera Emocional",
    navPatterns: "🔁 Patrones",
    navCbt: "⚖️ Kit TCC",
    navNaming: "💡 Nombra Tu TDAH",
    navQuiz: "🔍 ¿Cuál Patrón?",
    navMyday: "📋 Mi Día",
    navFavs: "⭐ Mis Herramientas",

    // SOS FAB
    sosFabAriaLabel: "Necesito ayuda ahora mismo",
    sosFabLabel: "Estoy pasándola mal ahora mismo",

    // SOS Modal
    sosCloseLabel: "✕",
    sosTitle: "¿Qué está pasando ahora mismo?",
    sosSubtitle: "Sin juicios. Elige lo que más se parezca y te voy a dar una cosa que hacer — solo una.",
    sosBackBtn: "← Volver a opciones",

    // SOS Options (6)
    sosOptSpiralingEmoji: "🌀",
    sosOptSpiralingLabel: "En espiral",
    sosOptParalyzedEmoji: "🧊",
    sosOptParalyzedLabel: "Paralizado",
    sosOptAvoidingEmoji: "🛋️",
    sosOptAvoidingLabel: "Evitando",
    sosOptOverwhelmedEmoji: "🔥",
    sosOptOverwhelmedLabel: "Sobrepasado",
    sosOptEmotionalEmoji: "🌊",
    sosOptEmotionalLabel: "Emociones fuertes",
    sosOptShameEmoji: "😔",
    sosOptShameLabel: "Espiral de vergüenza",

    // SOS Action Panels — nested
    sos: {
      spiraling: {
        title: "🌀 Estás en espiral. Vamos a frenar el giro.",
        titleColor: "#E8443A",
        hasBreathe: true,
        breatheCircleText: "Respira",
        breatheSubtext: "Mira el círculo. Inhala cuando crezca. Exhala cuando se encoja. Eso es todo.",
        steps: [
          "<strong>Ahora:</strong> Pon los pies planos en el piso. Siéntelos. Nombra 3 cosas que puedas ver en este momento.",
          "<strong>Después:</strong> Tus pensamientos son el caso del Fiscal — ruidosos, dramáticos, parciales. No tienes que creerles ahora mismo. Solo archívalos como \"no verificados.\"",
          "<strong>Cuando estés listo:</strong> Escribe el pensamiento que más fuerte suena. Solo sacarlo de tu cabeza le quita parte de su poder."
        ]
      },
      paralyzed: {
        title: "🧊 Estás congelado. Vamos a descongelar un centímetro.",
        titleColor: "#4D96FF",
        hasBreathe: false,
        steps: [
          "<strong>El cuerpo primero.</strong> Levántate. Ahora mismo. Solo párate. No tienes que hacer nada más todavía.",
          "<strong>Ahora:</strong> Toma un vaso de agua. Échate un poco en la cara si quieres. Estás despertando tu sistema nervioso.",
          "<strong>El paso absurdamente pequeño:</strong> No pienses en toda la tarea. ¿Cuál es la acción física más pequeña? No \"hacer el proyecto\" sino \"abrir el archivo.\" No \"limpiar la casa\" sino \"recoger una cosa.\" Haz solo eso.",
          "<strong>Recuerda:</strong> No necesitas sentirte motivado. Necesitas el 51% — suficientes votos a favor. La acción crea motivación, no al revés."
        ]
      },
      avoiding: {
        title: "🛋️ Te estás escondiendo en el Azul. Sin juicios — vamos a darte un empujoncito.",
        titleColor: "#F5A623",
        hasBreathe: false,
        steps: [
          "<strong>Haz un chequeo:</strong> ¿Este Azul te está recargando o adormeciendo? Sé honesto. Si te estuviera recargando, no te sentirías culpable.",
          "<strong>El trato:</strong> Pon un temporizador de 15 minutos. Haz una tarea Amarilla — la más aburrida, molesta, esa que estás evitando. 15 minutos. Son 900 segundos. Has aguantado videos más largos en YouTube.",
          "<strong>Después:</strong> Tras 15 minutos, te ganaste tu tiempo Azul sin culpa. O — quizás descubras que quieres seguir. Cualquier resultado es una victoria.",
          "<strong>Desafía la mentira:</strong> \"Lo hago después\" significa \"Me voy a sentir peor con esto después.\" Ya lo sabes. 15 minutos. Ándale."
        ]
      },
      overwhelmed: {
        title: "🔥 Demasiado. Muchísimo. Vamos a apagar un incendio a la vez.",
        titleColor: "#E8443A",
        hasBreathe: false,
        steps: [
          "<strong>Volcado cerebral:</strong> Agarra papel o abre una nota. Escribe todo lo que tienes en la cabeza. No organices. No priorices. Solo vacía. Pon un temporizador de 3 minutos y escribe hasta que suene.",
          "<strong>Ahora encierra TRES.</strong> Solo tres cosas que realmente importan hoy. Todo lo demás es problema de mañana. Seguirá ahí — no se va a ir a ningún lado.",
          "<strong>Elige UNA de las tres.</strong> Define el primer paso físico. Hazlo absurdamente pequeño.",
          "<strong>Atrapa el pensamiento:</strong> \"Si no puedo hacerlo todo, ¿para qué hacer algo?\" — eso es pensamiento todo-o-nada. Hacer una cosa es infinitamente más que cero cosas."
        ]
      },
      emotional: {
        title: "🌊 Las emociones fuertes están llegando con todo. Vamos a surfear la ola.",
        titleColor: "#FF6B6B",
        hasBreathe: true,
        breatheCircleText: "Respira",
        breatheSubtext: "4 segundos inhalando... 7 segundos sosteniendo... 8 segundos soltando. Esto activa el freno de mano de tu cuerpo.",
        steps: [
          "<strong>Nómbralo y califícalo:</strong> \"Esto es un ___ y está en __/10 ahora mismo.\" Nombrar crea distancia. Estás observando la ola, no ahogándote en ella.",
          "<strong>Recuérdate:</strong> El sentimiento es real. La historia que tu cerebro cuenta sobre él puede que no lo sea. Las emociones son olas — llegan al pico y pasan. Esta también pasará.",
          "<strong>No actúes todavía.</strong> Date 24 horas antes de tomar cualquier decisión basada en este sentimiento. Tu Abogado Defensor necesita tiempo para preparar su caso."
        ]
      },
      shame: {
        title: "😔 La vergüenza está gritando fuerte ahora. Te está mintiendo.",
        titleColor: "#8E6FBF",
        hasBreathe: false,
        steps: [
          "<strong>Escucha esto:</strong> Tú no eres tu TDAH. No eres tu peor momento. Eres una persona lidiando con un cerebro que funciona diferente — y estás aquí, intentándolo. Eso cuenta.",
          "<strong>Los fantasmas están hablando.</strong> ¿Qué están diciendo? Escríbelo. \"Siempre...\" \"Nunca...\" \"Todos los demás pueden...\" — sácalo de tu cabeza y ponlo en papel donde se ve menos convincente.",
          "<strong>Ahora pregúntate:</strong> Si tu mejor amigo te dijera que se siente así, ¿estarías de acuerdo con los fantasmas? ¿O dirías algo más amable? Dite eso más amable a ti mismo. En voz alta si puedes.",
          "<strong>Un acto de cuidado:</strong> No productividad. Cuidado. Prepara un té. Sal un minuto a tomar aire fresco. Mándale un mensaje a alguien de confianza. No tienes que ganarte la amabilidad hacia ti mismo."
        ]
      }
    },

    // Section Headers
    traitsTitle: "Rasgos del TDAH → Mapa de Herramientas",
    traitsDesc: "Haz clic en cualquier rasgo para ver qué es, cómo se siente y herramientas paso a paso para manejarlo. Toca la ⭐ en cualquier herramienta para guardarla en tu kit personal.",

    gridTitle: "La Cuadrícula Resuélvelo",
    gridDesc: 'El marco de la Dra. Rosier para entender cómo categorizas tareas con base en dos ejes: <strong>Divertido vs. No Divertido</strong> y <strong>Emocionalmente Estimulante vs. No Estimulante</strong>. Entender dónde cae una tarea en esta cuadrícula te ayuda a elegir la estrategia correcta.',

    ladderTitle: "La Escalera de Salud Emocional",
    ladderDesc: "Creada por Rosier &amp; Gott, este marco de 5 niveles te ayuda a ver dónde estás emocionalmente para que puedas elegir qué hacer después. Subes y bajas naturalmente durante el día. La meta no es perfección — es conciencia.",

    patternsTitle: "Patrones Predecibles",
    patternsDesc: 'La Dra. Rosier identificó estos patrones comunes de energía que nos mantienen atrapados. Reconocer tu patrón es el primer paso para romperlo. (¿No sabes cuál eres? Intenta el quiz <a href="#" onclick="switchToPage(\'quiz\');return false" style="color:var(--accent)">¿Cuál Patrón?</a>)',

    cbtTitle: "El Kit TCC",
    cbtDesc: "De la aproximación cognitivo-conductual respaldada por investigación de Ramsay &amp; Rostain. Estas son las técnicas específicas y enseñables para manejar el TDAH día a día.",

    namingTitle: "Nombra Tu TDAH",
    namingDesc: "El concepto poderoso de la Dra. Rosier: crear una metáfora para tu TDAH te ayuda a externalizarlo, entenderlo y desarrollar estrategias. La metáfora que eliges cambia literalmente la forma en que piensas sobre las soluciones.",

    quizTitle: "¿Cuál Patrón Soy?",
    quizDesc: "Responde 6 preguntas rápidas para descubrir tu patrón dominante de energía del TDAH y obtener estrategias enfocadas. No hay respuesta incorrecta — elige lo que más resuene contigo.",

    mydayTitle: "Mi Día",
    mydayDesc: 'La Cuadrícula Resuélvelo en acción. Vacía tus tareas, dales color y observa tu balance de energía. Se reinicia diario — sin culpa de ayer. <span style="color:#6BCB77">Tus tareas se guardan en este navegador.</span>',

    favsTitle: "⭐ Mis Herramientas",
    favsDesc: "Tu kit personal — las estrategias que has guardado de todas las secciones. Estas son las que funcionan para <em>ti</em>.",

    // Search
    searchPlaceholder: "Buscar rasgos, sentimientos o herramientas…",

    // Filter chips (7)
    filterAll: "Todos",
    filterAttention: "Atención",
    filterEmotion: "Emoción",
    filterExecutive: "Función Ejecutiva",
    filterMotivation: "Motivación",
    filterThinking: "Pensamiento",
    filterSocial: "Social",

    // Trait card render labels
    labelWhatItIs: "Qué Es",
    labelHowItFeels: "Cómo Se Siente",
    labelTools: "Herramientas para Manejarlo",
    labelThePattern: "El Patrón",
    labelStrategies: "Estrategias para Romperlo",
    labelWhatItIsCbt: "Qué Es",
    labelHowToUse: "Cómo Usarlo",

    // Timer
    timerTapToStart: "— toca para iniciar",
    timerDone: "¡Listo!",

    // My Day — Stats
    statTasks: "Tareas",
    statDone: "Hechas",
    statDayStreak: "Días seguidos",

    // My Day — Energy Meter
    energyTitle: "🔋 Balance de Energía",
    energyRedLabel: "Rojo (drena rápido)",
    energyYellowLabel: "Amarillo (drena lento)",
    energyBlueLabel: "Azul (recarga lento)",
    energyGreenLabel: "Verde (recarga rápido)",
    energyColorPrompt: "Dale color a tus tareas para ver el balance de energía",

    // My Day — Energy Nudge messages
    nudgeAllDrain: '⚠️ <strong>Solo desgaste, cero recarga.</strong> Tu batería va a llegar a cero. Agrega al menos una actividad Verde o Azul — necesitas combustible, no solo tareas.',
    nudgeHeavyRed: '🔴 <strong>Día pesado de Rojo.</strong> Eso es mucha adrenalina. ¿Alguna de estas puede volverse Amarilla si la divides en pasos más pequeños? Tu cuerpo no puede aguantar esto.',
    nudgeYellowMarathon: '🟡 <strong>Maratón de Amarillo.</strong> Las tareas aburridas son un desgaste lento — programa una recompensa Verde entre ellas o combínalas con algo agradable (música, una bebida, un podcast).',
    nudgeLotsBlue: '🔵 <strong>Mucho Azul.</strong> Pregúntate: ¿esto me está recargando o adormeciendo? Intenta cambiar un Azul por un Verde — recarga más rápido y te sentirás mejor después.',
    nudgeNiceBalance: '✅ <strong>Buen balance.</strong> Tienes desgaste y recarga mezclados. Esto es sostenible. Recuerda hacer lo Verde — no lo saltes porque sientas que no te lo has ganado.',
    nudgeGreenOnBoard: '🟢 <strong>Verde en el tablero.</strong> Bien. Asegúrate de que realmente pase — es lo primero que se sacrifica cuando el día se pone pesado, y no debería ser así.',

    // My Day — Brain Dump
    brainDumpTitle: "🧠 Volcado Cerebral",
    brainDumpSubtitle: "Saca todo. No organices — solo escribe y agrega. Luego dale un color a cada tarea por cuadrante.",
    brainDumpPlaceholder: "¿Qué tienes en la cabeza? Agrega una tarea…",
    brainDumpAddBtn: "+ Agregar",

    // My Day — Task empty state
    taskEmptyEmoji: "🧠",
    taskEmptyText: "Tu volcado cerebral está vacío. Agrega tareas arriba — no pienses, solo escribe.",

    // My Day — Task color tooltips
    taskColorRedTitle: "Rojo — urgente/estresante",
    taskColorYellowTitle: "Amarillo — aburrido pero necesario",
    taskColorBlueTitle: "Azul — tranquilo/recarga",
    taskColorGreenTitle: "Verde — divertido y significativo",

    // My Day — Actions
    carryForwardBtn: "📦 Llevar tareas pendientes",
    freshStartBtn: "🗑️ Empezar de cero",
    storageNote: "Tus tareas se guardan en este navegador en este dispositivo.",
    clearDayConfirm: "¿Empezar de cero? Esto borrará todas las tareas de hoy.",
    noUnfinishedAlert: "¡No hay tareas pendientes de ayer!",

    // Favorites — empty state
    favEmptyEmoji: "⭐",
    favEmptyText: "Aún no has guardado herramientas. Navega por las pestañas de Rasgos &amp; Herramientas o Kit TCC y toca la ✩ estrella en cualquier herramienta para guardarla aquí.",

    // Favorites render
    favFromLabel: "de",

    // Footer
    footer: 'Contenido sintetizado de <em>Your Brain\'s Not Broken</em> por Tamara Rosier, PhD (2021) y <em>The Adult ADHD Tool Kit</em> por J. Russell Ramsay &amp; Anthony L. Rostain (2015). Esto es una referencia educativa, no consejo médico.',

    // Ladder check-in
    ladderCheckinTitle: "📍 ¿Dónde estás ahora mismo?",
    ladderCheckinSubtitle: "Toca un nivel para registrar tu chequeo de hoy. Hacer seguimiento te ayuda a detectar patrones con el tiempo.",
    ladderCheckinBtn1: "☀️ 1 — Presente",
    ladderCheckinBtn2: "🌤️ 2 — Atento",
    ladderCheckinBtn3: "⛅ 3 — Piloto Automático",
    ladderCheckinBtn4: "🌧️ 4 — Supervivencia",
    ladderCheckinBtn5: "🌩️ 5 — Delirante",
    ladderHistoryTitle: "Últimos 14 días",

    // Quiz UI
    quizSeeAllPatterns: "Ver todos los patrones →",
    quizRetake: "Repetir quiz",
    quizTargetedStrategies: "Tus estrategias enfocadas:",

    // Language picker
    langPickerAriaLabel: "Seleccionar Idioma",
    langEnglish: "English",
    langPortuguese: "Português",
    langSpanish: "Español"
  },


  // ========================================
  // PAGES — contenido estructurado para secciones complejas
  // ========================================
  pages: {

    // ---- Cuadrícula Resuélvelo ----
    grid: {
      quadrants: [
        {
          cssClass: "q-red",
          title: "🔴 Cuadrante Rojo",
          subtitle: "<strong>No Divertido + Alta Intensidad Emocional</strong>",
          body: "Tareas que temes pero enfrentas a base de adrenalina, enojo o pánico. Procrastinar hasta que la presión del plazo te empuje vive aquí. Se siente energizante al principio pero es agotador y adictivo.",
          examples: "<strong>Ejemplos:</strong> Proyectos de último momento, plazos de impuestos, confrontaciones, manejo de crisis",
          battery: "<strong>Impacto en la batería:</strong> Drena rápidamente. Se siente productivo pero te quema.",
          strategies: [
            "Divide las tareas en pedazos tamaño Amarillo antes de que se vuelvan emergencias Rojas",
            "Pon alarmas a medio día para chequeos del sistema (postura, hidratación, tensión)",
            "Desafía la creencia falsa: \"Trabajo mejor bajo presión\""
          ]
        },
        {
          cssClass: "q-green",
          title: "🟢 Cuadrante Verde",
          subtitle: "<strong>Divertido + Alta Intensidad Emocional</strong>",
          body: "Tu lugar feliz. Actividades que son placenteras Y emocionalmente significativas. El Verde recarga tu batería más rápido. Muchas personas con TDAH se niegan el tiempo Verde porque sienten que no se lo han \"ganado.\"",
          examples: "<strong>Ejemplos:</strong> Cenas familiares, proyectos creativos, caminatas en la naturaleza, pasatiempos profundos, conversaciones significativas",
          battery: "<strong>Impacto en la batería:</strong> Recarga más rápido. Te reconecta con tus valores.",
          strategies: [
            "Programa tiempo Verde intencionalmente — te lo mereces",
            "Usa el Verde como recompensa después de tareas Amarillas/Rojas",
            "Nota cuando te niegas el Verde y desafía ese impulso"
          ]
        },
        {
          cssClass: "q-yellow",
          title: "🟡 Cuadrante Amarillo",
          subtitle: "<strong>No Divertido + Baja Intensidad Emocional</strong>",
          body: "Tareas aburridas y repetitivas que drenan tus ganas de vivir. Se sienten como que van a durar eternamente pero en realidad consumen menos energía que el Rojo. El cerebro con TDAH las evita como la plaga.",
          examples: "<strong>Ejemplos:</strong> Tareas, facturas, papeleo, limpieza, captura de datos, correos",
          battery: "<strong>Impacto en la batería:</strong> Desgaste lento. Se siente como desgaste total, pero no lo es.",
          strategies: [
            "Pon un temporizador de 15-20 minutos — el Amarillo no dura para siempre",
            "Divídelo en una lista específica de \"cómo hacerlo\" (hasta pasos absurdamente pequeños)",
            "Prueba el juego Amarillo-Azul: 30 min de trabajo, 10 min de descanso Azul",
            "Combina el Amarillo con una actividad agradable (música, podcast, bebida favorita)"
          ]
        },
        {
          cssClass: "q-blue",
          title: "🔵 Cuadrante Azul",
          subtitle: "<strong>Divertido + Baja Intensidad Emocional</strong>",
          body: 'Relajación suave. Juegos en el celular, Netflix, scrollear. Recarga lento, pero demasiado Azul se vuelve una trampa — el efecto \"pantano de melaza\". Azul saludable es restaurador. Azul en exceso es adormecedor.',
          examples: "<strong>Ejemplos:</strong> Redes sociales, TV, videojuegos, acostarse en la hamaca, navegar sin rumbo",
          battery: "<strong>Impacto en la batería:</strong> Recarga lenta si es saludable. Drena batería si es en exceso.",
          strategies: [
            "Pon límites al tiempo Azul con un temporizador",
            "Pregunta: \"¿Este Azul me está recargando o adormeciendo?\"",
            "Cambia a Verde cuando sea posible — recarga más rápido",
            "Usa el Azul como recompensa programada, no como escape"
          ]
        }
      ],
      quickPractice: {
        title: "🔑 Usando la Cuadrícula — Práctica Rápida",
        steps: [
          "Elige una tarea que estés evitando ahora mismo",
          "Pregunta: ¿Es divertida o no? ¿Qué tan emocionalmente estimulante es?",
          "Colócala en la cuadrícula — ¿Rojo, Amarillo, Azul o Verde?",
          "Pregunta: ¿Por qué esta tarea está en este cuadrante? ¿Qué hace que se sienta así?",
          "Elige la estrategia correspondiente de arriba",
          "Pon un temporizador, define un primer paso y comienza. Revisa cuando suene el temporizador."
        ]
      }
    },

    // ---- Escalera Emocional ----
    ladder: {
      rungs: [
        {
          cssClass: "l1",
          title: "☀️ Nivel 1: Presente &amp; Tranquilo",
          detail: '<p><strong>Conciencia:</strong> Totalmente presente, respondiendo a la vida conforme pasa. Sin fijación en amenazas.<br><strong>Atención:</strong> Enfocada en lo que realmente está pasando. Sin estar a la defensiva.<br><strong>Voz Emocional:</strong> Una guía silenciosa, no un dictador. Estás sintonizado con ella.<br><strong>Cuerpo:</strong> Presente, despierto, relajado en mente, corazón y cuerpo.<br><strong>Síntomas de TDAH:</strong> Aún presentes pero manejados con mindfulness, planificación y resolución de problemas.<br><strong>Relaciones:</strong> Respetas y valoras a las personas, y lo demuestras con palabras y acciones.</p><p style="margin-top:0.5rem"><strong>Lo que te ayuda a permanecer aquí:</strong> Tiempo Verde regular, buen sueño, prácticas de conciencia, conocer tus patrones, autocompasión.</p>'
        },
        {
          cssClass: "l2",
          title: "🌤️ Nivel 2: Atento",
          detail: '<p><strong>Conciencia:</strong> Sintiéndote bien, manejando la vida, pero sin la conciencia plena del Nivel 1.<br><strong>Atención:</strong> Más abierta y sintonizada contigo mismo y con tu entorno.<br><strong>Voz Emocional:</strong> Informativa, sin gritar. Guía sin dominar.<br><strong>Cuerpo:</strong> Respiración relajada. Sin modo de lucha-o-huida.<br><strong>Síntomas de TDAH:</strong> Identificados y manejados con estrategias. Usados con cuidado y consistencia.<br><strong>Relaciones:</strong> Buscando soluciones ganar-ganar.</p><p style="margin-top:0.5rem"><strong>Lo que te ayuda a subir aquí:</strong> Usar la Cuadrícula Resuélvelo, ejercicios de respiración, atrapar pensamientos automáticos, planificación de tareas, automonitoreo.</p>'
        },
        {
          cssClass: "l3",
          title: "⛅ Nivel 3: Piloto Automático",
          detail: '<p><strong>Conciencia:</strong> Impulsado por impulsos compulsivos e inconscientes. Radar de autoconciencia bajo.<br><strong>Atención:</strong> Decisiones impulsivas. Enfoque en acción y productividad, no en estrategia.<br><strong>Voz Emocional:</strong> Guardada en un \"ahora no\". Va a estallar si aparecen obstáculos.<br><strong>Cuerpo:</strong> Respuesta de lucha-o-huida activada. Ritmo cardíaco elevado, cortisol fluyendo, energía a punta de adrenalina.<br><strong>Síntomas de TDAH:</strong> Usando lucha-o-huida como mecanismo de afrontamiento. Atrapado en patrones reactivos. Memoria de corto plazo aún menos confiable.<br><strong>Relaciones:</strong> \"Tú haz lo tuyo para que yo haga lo mío.\" Salirte con la tuya se siente muy importante.</p><p style="margin-top:0.5rem"><strong>La mayoría de las personas vive aquí la mayor parte de los días.</strong> El peligro es que cualquier golpe inesperado te baja al Nivel 4.</p>'
        },
        {
          cssClass: "l4",
          title: "🌧️ Nivel 4: Supervivencia",
          detail: '<p><strong>Conciencia:</strong> Reducida a escanear amenazas. Sin autoconciencia. Totalmente instintivo.<br><strong>Atención:</strong> Enfocada en sobrevivir y cubrir necesidades básicas. Autocomplaciente — haciendo lo que sea necesario, saludable o no.<br><strong>Voz Emocional:</strong> Tomando el control. Exige que las necesidades emocionales se cubran AHORA. Miedo y ansiedad dominan.<br><strong>Cuerpo:</strong> En alerta máxima. Adaptado al estrés crónico. Mal sueño, cambios de peso.<br><strong>Síntomas de TDAH:</strong> Constantemente apagando incendios. Irritable, frustrado, concentración pobre. Pensamiento blanco-y-negro.<br><strong>Relaciones:</strong> Egocéntrico. Muy crítico de los demás.</p><p style="margin-top:0.5rem"><strong>Cómo subir de vuelta:</strong> Respiración profunda. Mándale un mensaje a alguien de confianza. Toma una respiración lenta. Nombra lo que sientes. No intentes arreglar todo — solo regresa al Nivel 3 primero.</p>'
        },
        {
          cssClass: "l5",
          title: "🌩️ Nivel 5: Delirante",
          detail: '<p><strong>Conciencia:</strong> Falta total de conciencia. Potencial para decisiones autodestructivas.<br><strong>Atención:</strong> En alerta constante ante amenazas a la seguridad emocional.<br><strong>Voz Emocional:</strong> Fatigada pero aún gritando. Emociones intensas prevalecen por todos lados. Miedo, depresión, agotamiento.<br><strong>Cuerpo:</strong> Recursos agotados. El cuerpo ya no tiene fuerza para combatir el estrés. Sensación de desesperanza.<br><strong>Síntomas de TDAH:</strong> Emocionalmente volátil, hipersensible, oposicionista.<br><strong>Relaciones:</strong> O muy pegajoso o muy distante y crítico. Proyectando frustración en los demás.</p><p style="margin-top:0.5rem"><strong>Esto no es permanente.</strong> Puedes subir de vuelta. Apoyo profesional (terapeuta, coach) se recomienda aquí. Empieza con un pequeño acto de autocuidado. Una respiración a la vez.</p>'
        }
      ]
    },

    // ---- Nombra Tu TDAH ----
    naming: {
      scienceCard: {
        title: "🔬 Por Qué Nombrar Funciona (La Ciencia)",
        content: 'Las investigaciones muestran que las metáforas cambian el pensamiento a nivel inconsciente. En un estudio, las personas que leyeron sobre el crimen descrito como una <em>\"bestia\"</em> sugirieron estrategias de control (más policía, penas más severas). Quienes leyeron sobre el crimen como una <em>\"enfermedad\"</em> sugirieron estrategias de tratamiento (atacar las causas raíz). La metáfora que usas para tu TDAH moldea las soluciones hacia las que gravitarás.'
      },
      metaphors: [
        {
          title: "🧝 El Elfo Travieso (Claire)",
          content: 'Se mete sigilosamente y mueve las cosas. Juega con el tiempo usando un control remoto — avance rápido o cámara lenta. <strong>Estrategia:</strong> Ser más listo que el elfo. Anticipar dónde va a atacar. Crear sistemas externos con los que no pueda meterse.'
        },
        {
          title: "👶 El Bebé Sucio (Melanie)",
          content: '"No importa cuántas veces lo bañe, siempre está sucio." La parte de ti mismo en la que no confías del todo. <strong>Estrategia:</strong> Cuídalo con paciencia. Acepta que necesita atención constante. No lo odies — cuídalo.'
        },
        {
          title: "🍫 Lucille Ball en la Banda Transportadora (Kelly)",
          content: '"O estoy lanzándole chocolate a alguien, o la banda viene tan rápido que me estoy metiendo chocolates por la camisa." <strong>Estrategia:</strong> Manejar la velocidad de la banda (carga de tareas). Aprender a no lanzar chocolate (regulación emocional).'
        },
        {
          title: "📝 El Examen Para el Que No Estudiaste (Rick)",
          content: '"Odio que no me siento preparado para nada, incluso cuando intento planificar." Vive detrás de una máscara para esconder la vergüenza. <strong>Estrategia:</strong> Baja la velocidad. Quítate la máscara. Chequea tus pensamientos y sentimientos reales antes de hacer planes.'
        },
        {
          title: "🏃 La Carrera de Tres Piernas (Dra. Rosier)",
          content: 'Atada a la versión TDAH de sí misma que se detiene a mitad de la carrera para examinar un diente de león. "Si pudiera correr sin ella, me iría bien." <strong>Estrategia:</strong> Aceptar a la compañera. Darle ánimos. Trabajar <em>con</em> ella, no contra ella.'
        }
      ],
      createOwn: {
        title: "✏️ Crea Tu Propia Metáfora",
        content: '¿Cómo experimentas <em>tú</em> tu TDAH? ¿Qué imagen captura cómo se siente? No hay respuesta incorrecta. Tu metáfora te ayuda a externalizar el TDAH — para que puedas abordar las partes que más te frustran, sin convertirlo en \"todo lo que eres.\"'
      }
    }
  },


  // ========================================
  // ARRAYS DE DATOS — movidos del JS inline
  // ========================================

  traits: [
    {
      id: "emotional-dysregulation",
      icon: "🌊", color: "#FF6B6B", cat: "emotion",
      title: "Desregulación Emocional",
      aka: "El Vecino Enojado / Emociones Enormes / Inundación",
      what: "En lugar de un 'mayordomo' tranquilo (corteza prefrontal) manejando tus respuestas, las personas con TDAH tienen un 'vecino enojado' en los centros emocionales del cerebro que reacciona primero. Las emociones golpean más fuerte, más rápido y duran más de lo esperado. El comentario de un cajero puede arruinarte todo el día.",
      feel: "Tristeza abrumadora por contratiempos menores. Frustración explosiva ante pequeños obstáculos. Llorar cuando no te sientes triste. Emociones que se sienten desproporcionadas a la situación. Vergüenza por la intensidad de tus propias reacciones.",
      tools: [
        { name: "Respiración 4-7-8", steps: ["Inhala lentamente por la nariz durante 4 segundos", "Sostén la respiración por 7 segundos", "Exhala lentamente por la boca durante 8 segundos", "Repite 3-4 veces. Esto activa tu sistema nervioso parasimpático e interrumpe la cascada de lucha-o-huida"], hasTimer: true, timerSec: 19 },
        { name: "Nombra la Intensidad (Escala 1-10)", steps: ["Cuando la emoción te inunde, haz una pausa y califícala: 'Esto está en un 7 ahora'", "Nombrarla crea distancia — estás observando la emoción en vez de ser tragado por ella", "Mírala bajar. Las emociones son olas, no estados permanentes", "Recuerda: la emoción es real, pero no es el panorama completo"] },
        { name: "Chequeo de la Escalera Emocional", steps: ["Pregunta: ¿En qué nivel estoy ahora? (1=Tranquilo, 3=Piloto Automático, 5=Delirante)", "Si estás en Nivel 4-5, no intentes resolver nada — solo estabilízate", "Una respiración lenta. Nombra lo que sientes. No actúes todavía", "Meta: regresa al Nivel 3 primero, luego al Nivel 2"] },
        { name: "Method Acting (Actúa 'Como Si')", steps: ["Del Kit TCC: actúa de forma opuesta a tu emoción actual", "Sonríe si sientes enojo. Aplaude y di 'OK, ¡vamos!' si te sientes atascado", "Esto no es fingir — es preparar tu cerebro para una respuesta diferente", "Combinado con un primer paso definido, rompe el ciclo de parálisis emocional"] }
      ]
    },
    {
      id: "time-blindness",
      icon: "⏰", color: "#F5A623", cat: "executive",
      title: "Ceguera Temporal",
      aka: "El Reloj Roto / Ahora vs. No Ahora",
      what: "Las personas con TDAH no experimentan el tiempo como los neurotípicos. Básicamente solo hay dos zonas horarias: AHORA y NO AHORA. El tiempo se distorsiona — a veces vuela, a veces se arrastra. Estimar cuánto tardan las cosas es casi imposible. Estás perpetuamente tarde o demasiado temprano.",
      feel: "Shock al darte cuenta de que pasaron 3 horas. Tardanza crónica a pesar de intentar. Pánico cuando los plazos aparecen 'de repente.' Sensación de que el tiempo es resbaloso e incontrolable. Culpa por siempre ir retrasado.",
      tools: [
        { name: "Anclas Externas de Tiempo", steps: ["Usa relojes analógicos (el barrido visual de las manecillas muestra el tiempo pasando espacialmente)", "Pon múltiples alarmas: alarma de aviso, alarma de transición, alarma de 'sal AHORA'", "Usa temporizadores visuales (Time Timer, reloj de arena o un temporizador de cocina)", "Pon relojes en cada cuarto — haz el tiempo visible"] },
        { name: "Entrenamiento de Estimación de Tiempo", steps: ["Antes de empezar una tarea, anota cuánto crees que te va a tomar", "Pon un temporizador y haz la tarea", "Compara tu estimación con la realidad", "Regla de la Dra. Rosier: multiplica tu estimación por 3 — eso es más cercano a la realidad", "Con el tiempo, esto construye un reloj interno más preciso"], hasTimer: true, timerSec: 600 },
        { name: "Reformula el Tiempo (Enfoque TCC)", steps: ["En lugar de '10 minutos' piensa '600 segundos' — suena diferente y se siente manejable", "Compara: 'He aguantado 15 minutos de comerciales aburridos. Puedo trabajar en esto por 15 minutos.'", "Fija hora de INICIO y de FIN para cada tarea — lo hace finito", "Usa el truco de la batería del laptop: desconéctala y usa la batería que se muere como tu temporizador de cuenta regresiva"], hasTimer: true, timerSec: 600 },
        { name: "Planificación con Tiempo Extra", steps: ["Agrega 50% más tiempo del que crees necesario entre actividades", "Incluye tiempo de traslado, tiempo de transición y tiempo de 'encontrar mis llaves'", "Agenda menos tareas de las que crees que puedes manejar — sub-agenda", "Una regla útil: 'Si llegara 15 minutos temprano a mi tren, no pensaría que es mucho tiempo. Puedo trabajar en esto por ese rato.'"] }
      ]
    },
    {
      id: "working-memory",
      icon: "🧩", color: "#4D96FF", cat: "executive",
      title: "Déficits de Memoria de Trabajo",
      aka: "El Mayordomo Perdido / La Cubeta con Fugas",
      what: "Tu corteza prefrontal (CPF) debería actuar como un mayordomo tranquilo y organizado — sosteniendo información, haciendo planes, manejando impulsos. En el TDAH, este mayordomo es poco confiable. La información se cae de la memoria de corto plazo. Entras a un cuarto y olvidas por qué. Pierdes el hilo a mitad de frase.",
      feel: "Olvidar lo que estabas a punto de hacer. Perder cosas constantemente. Entrar a cuartos sin recordar por qué. Dificultad para retener múltiples instrucciones. Sentirte 'disperso' o como si los pensamientos se evaporaran.",
      tools: [
        { name: "Externaliza Todo", steps: ["Si no está escrito, no existe. Anótalo inmediatamente.", "Usa UN sistema de captura (libreta, app del celular o nota de voz)", "La agenda diaria es tu memoria de trabajo externa — consúltala constantemente", "Post-its, pizarras y recordatorios visibles compensan al mayordomo perdido"] },
        { name: "Lista General → Lista Diaria", steps: ["Mantén una lista maestra con todo (Lista General de 'volcado cerebral')", "Cada mañana, selecciona 3-5 elementos específicos para la Lista Diaria de hoy", "Define tareas en términos de comportamiento: no 'trabajar en el proyecto' sino 'abrir el documento y escribir 3 párrafos'", "Revisa la Lista Diaria temprano y frecuentemente durante el día"] },
        { name: "Dejando Migajas para Tu Yo Futuro", steps: ["Al dejar una tarea, anota el siguiente paso que darías", "Ejemplo: 'Siguiente: escribir el párrafo sobre los hallazgos de la metodología'", "Esto elimina el costo de reinicio del '¿dónde me quedé?' la próxima vez", "Piénsalo como un regalo para tu yo futuro — te lo va a agradecer"] },
        { name: "'Entra al Cuarto con un Plan'", steps: ["Antes de abrir el correo, sabe qué estás buscando", "Antes de ir a la tienda, ten la lista en la mano", "Antes de empezar una reunión, sabe tus 1-2 objetivos", "Este pre-cargado compensa la memoria de trabajo que pierde cosas a mitad de tarea"] }
      ]
    },
    {
      id: "hyperfocus",
      icon: "🎯", color: "#4ECDC4", cat: "attention",
      title: "Hiperfoco",
      aka: "El Túnel / La Trampa del Flow",
      what: "El otro lado de la distracción — cuando algo captura tu interés, puedes engancharte con tanta intensidad que las horas desaparecen. No comes, no notas a las personas hablándote y pierdes la noción de todo lo demás. Frecuentemente se confunde con egoísmo o grosería. En realidad es el sistema de recompensa de tu cerebro encontrando una mina de oro de dopamina.",
      feel: "Concentración intensa y fija que se siente increíble. Perder toda noción del tiempo y el entorno. Irritación al ser interrumpido. Saltarse comidas e ir al baño. Culpa después al darte cuenta de lo que descuidaste.",
      tools: [
        { name: "Sesiones Estructuradas de Hiperfoco", steps: ["Pon un temporizador ANTES de empezar — date permiso de sumergirte profundo, pero con un límite", "Avísale a la gente a tu alrededor: 'Voy a sumergirme las próximas 2 horas'", "Pon alarmas a intervalos (cada 45 min) para hidratación, postura, baño", "Cuando suene el temporizador final, para. Guarda tus migajas (notas del siguiente paso) y haz la transición"], hasTimer: true, timerSec: 2700 },
        { name: "Interrupciones Ambientales", steps: ["Usa múltiples alarmas con sonidos diferentes", "Pídele a un compañero/roommate que te cheque físicamente a horas definidas", "Pega un post-it en tu monitor: 'Revisa la hora'", "Usa apps que fuerzan descansos de pantalla (como apps de la regla 20-20-20)"] }
      ]
    },
    {
      id: "distractibility",
      icon: "🦋", color: "#A78BFA", cat: "attention",
      title: "Distractibilidad",
      aka: "Y Luego ¡PING! Va Mi Cerebro / La Cacería de Mariposas",
      what: "El sistema de filtrado de tu cerebro no bloquea bien los estímulos. Todo entra al mismo volumen — la reunión importante Y la mosca zumbando Y el pensamiento sobre la cena Y la canción pegada en la cabeza. La Dra. Rosier lo llama el '¡PING!' — tu cerebro constantemente disparando hacia nuevos estímulos.",
      feel: "Incapacidad de bloquear ruido o movimiento de fondo. Pensamientos saltando de tema en tema. Empezar tareas y ser jalado inmediatamente a otro lado. Sentir como que tu cerebro tiene 30 pestañas abiertas. Agotamiento por el ruido mental constante.",
      tools: [
        { name: "Control de Estímulos (Ingeniería Ambiental)", steps: ["Elimina o minimiza distracciones conocidas ANTES de empezar a trabajar", "Celular en silencio, en otro cuarto (no solo boca abajo)", "Cierra todas las pestañas y apps innecesarias del navegador", "Usa audífonos con cancelación de ruido o ruido blanco", "Da la espalda a ventanas y áreas de mucho tráfico", "Crea una 'estación de trabajo' dedicada que tu cerebro asocie con enfoque"] },
        { name: "Planes de Implementación (Si-Entonces)", steps: ["Antes de empezar: predice tus distracciones más probables", "Crea planes Si-Entonces: 'Si recibo un mensaje, lo reviso después de mi temporizador de 30 min'", "'Si pienso en otra cosa que necesito hacer, anoto una nota rápida y sigo trabajando'", "'Si pasa alguien conocido, le digo que estoy ocupado y lo busco después'", "Estas decisiones pre-hechas reducen la carga cognitiva de resistir la tentación en el momento"] },
        { name: "Conciencia de Comportamiento de Escape", steps: ["Anota tus 'sospechosos habituales' — las cosas que haces EN LUGAR de la tarea prioritaria", "Comunes: correo, redes sociales, picar, limpiar, 'recaditos rápidos'", "Cuando te caches haciendo uno, no te castigues — úsalo como una SEÑAL", "El impulso de escapar ES tu señal para usar tus herramientas de afrontamiento", "Transforma escapes en recompensas: 'Voy a revisar Instagram DESPUÉS de mis 10 minutos en esta tarea'"] }
      ]
    },
    {
      id: "impulsivity",
      icon: "⚡", color: "#FFD93D", cat: "executive",
      title: "Impulsividad",
      aka: "El Boca Floja / Dispara-Primero-Pregunta-Después",
      what: "El trabajo de la CPF incluye manejo de impulsos — poner una pausa entre estímulo y respuesta. En el TDAH, esa pausa se acorta o desaparece. Sueltas las cosas sin pensar, haces compras impulsivas, interrumpes conversaciones o tomas decisiones de las que te arrepientes. No es un defecto de carácter — es un déficit de función ejecutiva.",
      feel: "Decir cosas de las que te arrepientes al instante. Compras impulsivas. Interrumpir a otros a mitad de frase. Tomar decisiones precipitadas sin pensar en las consecuencias. Sentir que no puedes detenerte ni cuando te ves haciéndolo.",
      tools: [
        { name: "La Práctica de la Pausa", steps: ["Entrénate para insertar una micro-pausa antes de responder", "En conversaciones: toma una respiración antes de hablar", "Para compras: implementa la regla de las 24 horas (espera un día antes de comprar cosas no esenciales)", "Para decisiones: pregunta '¿Qué diría mi Abogado Defensor?' (técnica TCC)", "Anclas físicas ayudan: presiona los pies contra el piso, aprieta las manos, luego responde"] },
        { name: "Entrenamiento de Inhibición Conductual", steps: ["Nota el impulso sin actuar en él (conciencia plena)", "Evalúa la urgencia: '¿Qué tan importante es que haga/diga esto AHORA MISMO?'", "La mayoría de los impulsos pierden su intensidad en 90 segundos", "Practica: cuando sientas el impulso de interrumpir, anota lo que querías decir"], hasTimer: true, timerSec: 90 }
      ]
    },
    {
      id: "procrastination",
      icon: "🐌", color: "#E8443A", cat: "motivation",
      title: "Procrastinación",
      aka: "Jugando con Fuego / La Fogata Que Se Vuelve Incendio Forestal",
      what: "No es flojera. La procrastinación en el TDAH es impulsada por evitación emocional — la tarea dispara sentimientos incómodos (aburrimiento, ansiedad, agobio, miedo al fracaso) y tu cerebro busca escapar. Algunas personas incluso usan la procrastinación como estrategia de motivación, esperando la descarga de adrenalina del plazo.",
      feel: "Saber exactamente lo que necesitas hacer y no poder empezar. 'Perseguir la tarea' todo el día. Vergüenza profunda después. Un ciclo de evitación → pánico → frenesí de último minuto → autodesprecio. Usar otras tareas como 'negociación' para evitar la verdadera.",
      tools: [
        { name: "La Regla de los 10 Minutos", steps: ["Define el primer paso más pequeño posible (absurdamente simple)", "Comprométete con solo 10 minutos honestos (600 segundos)", "El reloj empieza cuando realmente estás en posición de hacer el trabajo", "Después de 10 minutos, reevalúa: sigue o detente sin culpa", "No procrastinaste. Tomaste una decisión informada.", "La mayoría de las veces, una vez que empiezas, vas a querer seguir"], hasTimer: true, timerSec: 600 },
        { name: "Atrapa Tus Pensamientos de Procrastinación", steps: ["Nota lo que te estás diciendo: 'Lo hago mañana' / 'Necesito estar de humor' / 'Primero hago esta otra cosa'", "Estos pensamientos automáticos parecen razonables pero son autosaboteadores", "Pregunta: ¿Estoy magnificando lo negativo y minimizando mi capacidad?", "Reformula: 'No tengo que estar de humor. Solo necesito dar el primer paso.'", "Mentiras comunes de la procrastinación: 'Trabajo mejor bajo presión' (no es cierto — solo dependes del pánico)"] },
        { name: "Aceptación de la Incomodidad + Escala", steps: ["Califica tu incomodidad de 0-100. La mayoría de la evitación de tareas está entre 20-40, no 90", "Recordatorio: PUEDES sentirte incómodo y aún así hacer la cosa", "No necesitas estar al 100% de energía. Necesitas el 51% — suficientes 'votos a favor'", "Acepta que la tarea implica algo de 'Ugh' — eso es normal, incluso para neurotípicos", "Enfócate en el sentimiento DESPUÉS de completar, no en el sentimiento de empezar"] }
      ]
    },
    {
      id: "shame",
      icon: "😔", color: "#8E6FBF", cat: "emotion",
      title: "Vergüenza y Autodesprecio",
      aka: "Los Fantasmas de la Casa / El Acumulador de Vergüenza",
      what: "Años de fracasos relacionados con el TDAH, malentendidos y mensajes de 'no te estás esforzando lo suficiente' crean vergüenza profunda. La Dra. Rosier describe la vergüenza como 'fantasmas que rondan tu casa' susurrando mentiras como '¿Por qué arruinaste todo?' El Kit TCC los llama 'cercas invisibles' que te electrocutan hacia la evitación.",
      feel: "Sentimiento persistente de no ser suficiente. Usar una 'máscara' para esconder al verdadero tú. Creer que tus errores te definen. Usar la vergüenza como motivación (lo cual no funciona). Compararte con una versión idealizada de las mejores cualidades de todos los demás.",
      tools: [
        { name: "Casa-Patio-Cerca (Límites Contigo Mismo)", steps: ["Tu yo interior es una casa — solo tú vives ahí", "Identifica los 'fantasmas' (mensajes de vergüenza) que la rondan", "Pídeles respetuosamente que se vayan. Van a volver. Pídelo de nuevo.", "Reemplaza los objetos de vergüenza con lo que realmente valoras", "Empieza de a poco: un límite, una limpieza emocional a la vez"] },
        { name: "El Abogado Defensor (TCC)", steps: ["Tus pensamientos de vergüenza son el caso del Fiscal en tu contra", "Tu Abogado Defensor también tiene derecho de responder con evidencia", "Pregunta: 'Si mi amigo con TDAH me dijera que esto le pasó, ¿lo llamaría fracasado?'", "'¿Hay otra forma de ver esto que no termine conmigo siendo una persona terrible?'", "Escribe el argumento del Fiscal y la respuesta del Abogado Defensor lado a lado — ver ambos hace la distorsión obvia"] },
        { name: "Etiquetas vs. Explicaciones Conductuales", steps: ["En vez de 'Procrastiné porque soy flojo' (etiqueta)", "Intenta 'Procrastiné porque la tarea se sentía abrumadora y escapé a la computadora' (conductual)", "Las etiquetas se sienten permanentes. Los comportamientos se pueden cambiar.", "Esto no es quitarte la responsabilidad — es ser preciso para que puedas realmente solucionarlo"] }
      ]
    },
    {
      id: "rejection-sensitivity",
      icon: "💔", color: "#C06080", cat: "social",
      title: "Disforia Sensible al Rechazo (DSR)",
      aka: "La Cerca Invisible / La Piel de Papel",
      what: "Una respuesta emocional intensa al rechazo, crítica o fracaso percibidos. Un comentario descuidado de un cajero puede arruinarte el día. No es hipersensibilidad — es tu sistema de regulación emocional fallando en amortiguar la fricción social normal. La DSR hace que poner límites sea aterrador porque temes el rechazo.",
      feel: "Devastación por críticas leves. Leer rechazo en interacciones neutrales. Evitar situaciones donde puedas fallar o ser juzgado. Complacer a la gente para prevenir el rechazo. Dolor físico por desaires sociales.",
      tools: [
        { name: "Reconoce la Respuesta de la DSR", steps: ["Cuando sientas dolor emocional súbito e intenso por una interacción social, haz una pausa", "Pregunta: '¿Esta es una respuesta emocional de Nivel 4/5 para una situación de Nivel 1/2?'", "Nómbralo: 'Mi DSR se activó, no la realidad'", "El sentimiento es real. La interpretación puede que no lo sea.", "Date 24 horas antes de actuar basándote en el sentimiento"] },
        { name: "Toma de Perspectiva (Abogado Defensor)", steps: ["¿Qué evidencia real tengo de que esta persona me está rechazando?", "¿Hay otra explicación para su comportamiento?", "¿Qué le diría a un amigo en esta situación?", "En el gran esquema, ¿qué tan significativo es esto? ¿Va a importar la próxima semana?", "Considera: la mayoría de la gente está pensando en sí misma, no juzgándote"] }
      ]
    },
    {
      id: "task-initiation",
      icon: "🚀", color: "#4D96FF", cat: "motivation",
      title: "Fallo en la Iniciación de Tareas",
      aka: "El Muro Invisible / Atascado en la Plataforma de Lanzamiento",
      what: "Saber qué hacer pero no poder empezar. La función ejecutiva de iniciación de tareas requiere generar suficiente emoción/motivación para superar la inercia — y los cerebros con TDAH tienen menos dopamina disponible en las redes de recompensa. La distancia entre 'no hacer' y 'hacer' es pequeña pero se siente enorme.",
      feel: "Quedarte mirando la tarea, congelado. Saber exactamente lo que tiene que pasar pero sentirte paralizado. Hacer la secuencia de inicio en tu cabeza pero no en la realidad. La sensación de 'Ugh' al enfrentar una tarea.",
      tools: [
        { name: "El Paso Más Pequeño de Enganche Conductual", steps: ["Haz que el primer paso sea TAN absurdamente pequeño que sea ridículo no hacerlo", "No 'escribir el reporte' sino 'abrir el documento'", "No 'ir al gimnasio' sino 'ponerme los tenis de ejercicio'", "No 'hacer la llamada' sino 'encontrar a la persona en mis contactos'", "Ya no estás procrastinando una vez que das este paso", "Si sigues atascado, divide ESE paso en pasos aún más pequeños"] },
        { name: "Nuevos Guiones de Comportamiento", steps: ["Identifica tu guión viejo (ej: llegar a casa → sillón → TV → culpa)", "Escribe un nuevo guión paso a paso (ej: llegar a casa → pasar el sillón → ir a la computadora → abrir sitio de empleos → buscar por 15 min)", "Ensaya mentalmente el nuevo guión antes de que llegue el momento", "Usa planes Si-Entonces para los puntos de decisión donde los hábitos viejos te jalan", "El guión viejo no es 'malo' — solo no está sirviendo a tus metas"] },
        { name: "Fabricando Motivación 'Suficiente'", steps: ["No necesitas sentir emoción por la tarea — necesitas el 51%", "Baja las demandas de la tarea para que empaten con tu energía actual (limbo: '¿qué tan bajo puedes ir?')", "Di el primer paso EN VOZ ALTA — esto te saca de tu cabeza", "Haz un compromiso verbal con otra persona para tener responsabilidad", "Recuerda: la acción frecuentemente precede a la motivación, no al revés"] }
      ]
    },
    {
      id: "overwhelm",
      icon: "🌀", color: "#E8443A", cat: "emotion",
      title: "Agobio y Parálisis",
      aka: "La Manguera de Incendio / Demasiadas Pestañas Abiertas",
      what: "Cuando demasiadas demandas chocan con funciones ejecutivas débiles, el sistema se sobrecarga. El cerebro con TDAH no puede priorizar, secuenciar o filtrar efectivamente cuando está inundado. El resultado es apagón — no hacer nada a pesar de tener todo por hacer.",
      feel: "Parálisis. Saber que hay demasiado que hacer y no hacer nada. Llorar por el puro volumen. Apagarse y refugiarse en actividades del Cuadrante Azul. Pesadez física.",
      tools: [
        { name: "Volcado Cerebral → Triaje", steps: ["Escribe TODO lo que tienes en la cabeza. No organices, solo vacía.", "Ahora encierra solo 3 cosas que más importan HOY", "Guarda todo lo demás — seguirá ahí mañana", "Define el primer paso conductual para solo UNA de las tres", "No necesitas resolver todo. Necesitas hacer una cosa."] },
        { name: "El Antídoto del Todo-o-Nada", steps: ["Atrapa el pensamiento: 'Si no puedo hacerlo todo, ¿para qué hacer algo?'", "Esto es pensamiento todo-o-nada — una distorsión común", "Reformula: 'Hacer una cosa es infinitamente mejor que hacer cero cosas'", "Cualquier progreso cuenta. Completar parcialmente no es fracaso.", "Recuerda: te estás comparando con un estándar imaginario"] },
        { name: "Reset Cuerpo-Primero", steps: ["Cuando tu mente está paralizada, empieza por el cuerpo", "Levántate. Toma agua. Échate agua fría en la cara.", "Toma 5 respiraciones lentas, enfocándote en la exhalación", "Muévete: camina alrededor de la cuadra, estírate, haz 10 saltos de tijera", "Luego regresa y elige UNA tarea. Solo una."] }
      ]
    },
    {
      id: "cognitive-distortions",
      icon: "👹", color: "#E8443A", cat: "thinking",
      title: "Distorsiones Cognitivas",
      aka: "Los Monstruos Que Creamos / Errores de Pensamiento",
      what: "Ambos libros describen cómo la desregulación emocional y la disfunción ejecutiva del TDAH se combinan para crear 'monstruos' — patrones de pensamiento distorsionados que se sienten absolutamente reales y convincentes. No son delirios; son conclusiones precipitadas sacadas sin evidencia completa que tu cerebro trata como hechos.",
      feel: "Catastrofizar problemas pequeños. Declaraciones de 'debería' que ponen estándares imposibles. Pensamiento todo-o-nada. Leer la mente de otros sobre lo que piensan de ti. Magnificar lo negativo, minimizar lo positivo.",
      tools: [
        { name: "Identifica Tus Errores de Pensamiento", steps: ["Magnificación/Minimización — hacer lo malo más grande, lo bueno más pequeño", "Todo-o-Nada — 'Si no es perfecto, es un fracaso total'", "Pensamiento Comparativo — medirte contra las mejores cualidades de los demás", "Razonamiento Emocional — 'Me siento idiota, por lo tanto lo soy'", "Declaraciones de 'Debería' — 'Debería poder hacer esto sin ayuda'", "Adivinación del Futuro — 'Sé que esto va a terminar mal'", "Etiquetado — 'Soy flojo' en vez de 'Evité una tarea porque se sentía abrumadora'"] },
        { name: "Consulta a Tu Abogado Defensor", steps: ["Escribe el caso del Fiscal (tu pensamiento negativo)", "Ahora escribe la respuesta del Abogado Defensor con evidencia real", "Preguntas para hacer: ¿Le exigiría esto a un amigo?", "¿Hay otra forma de ver esto? ¿Qué evidencia estoy ignorando?", "¿Qué tan significativo es esto realmente? ¿Va a importar en una semana?", "¿Cuál es el peor caso? ¿Puedo manejarlo? (Generalmente sí.)"] },
        { name: "Spray de Monstruos (Dra. Rosier)", steps: ["Para monstruos de ansiedad: identifícalos, nómbralos y crea un 'spray' (ritual calmante)", "El ritual puede ser ejercicios de respiración, técnicas de anclaje o una ancla física", "El insight clave: no puedes matar a los monstruos, pero puedes mantenerlos lejos", "Cuando regresen (lo harán), vuelve a rociar. La consistencia es la herramienta."] }
      ]
    },
    {
      id: "energy-depletion",
      icon: "🔋", color: "#F5A623", cat: "executive",
      title: "Agotamiento de Energía",
      aka: "La Batería Muriéndose / Funcionando en Reserva",
      what: "Todos tienen energía limitada, pero las baterías del TDAH se drenan más rápido con actividades que otros encuentran fáciles. Correos, recados y las tareas básicas de adulto pueden consumir el 50% de tu batería diaria mientras les cuestan solo el 5% a los neurotípicos. Si no manejas tu energía, la batería muere y te desplomas.",
      feel: "Agotamiento por tareas 'fáciles'. Desplomarse fuerte después de eventos sociales o trabajo. Necesitar mucho más tiempo de recuperación que otros. Sentirse drenado por tareas que 'no deberían' ser cansadas.",
      tools: [
        { name: "Práctica de Conciencia de Batería", steps: ["A lo largo del día, haz un chequeo: '¿Cuál es mi porcentaje de batería ahora mismo?'", "Rastrea lo que te carga (actividades Verdes) y lo que te drena", "Antes de agregar una tarea a tu día, pregunta: '¿Mi batería puede con esto?'", "Agenda actividades de recarga ENTRE las que drenan — no solo al final del día"] },
        { name: "Coreografía de Energía (Enfoque TCC)", steps: ["Secuencia tareas intencionalmente: tarea difícil → tarea fácil → descanso → tarea moderada", "Después de una tarea mentalmente desgastante, haz tareas administrativas o físicas", "Protege tiempo para comidas, sueño y movimiento — no son un lujo, son mantenimiento de la batería", "Combina tareas desagradables con actividades agradables: dobla ropa viendo TV, haz ejercicio con música", "Recuerda: manejar el TDAH es un deporte de resistencia. Encuentra tu descanso en la cancha."] }
      ]
    },
    {
      id: "poor-boundaries",
      icon: "🏠", color: "#6BCB77", cat: "social",
      title: "Límites Débiles",
      aka: "El Tapete / Complacer a Todos",
      what: "Los síntomas del TDAH (impulsividad, DSR, pobre autorregulación) dificultan poner y mantener límites. Muchas personas con TDAH no aprendieron límites al crecer. Complacer a la gente se vuelve una estrategia de afrontamiento para evitar el rechazo. Combinado con la DSR, decir 'no' se siente aterrador.",
      feel: "Decir sí cuando quieres decir no. Dejar que otros pasen por encima de tus límites. Comprometerte de más y luego ahogarte. Dificultad para saber dónde terminas tú y empiezan los demás. Resentimiento creciendo bajo un exterior 'agradable'.",
      tools: [
        { name: "Marco Casa-Patio-Cerca", steps: ["Casa = tu yo interior (psique, valores, identidad). Solo tú vives aquí.", "Patio = tu espacio personal (tiempo, energía, interacciones sociales). Solo invitados.", "Cerca = el límite entre tú y el mundo. Tú controlas la puerta.", "Empieza con UN límite físico (hora de dormir, regla de presupuesto, zona sin pantallas)", "Cuando se vuelva hábito, agrega el siguiente. No reformes todo de un golpe."] },
        { name: "Limpieza de Límites Emocionales", steps: ["Identifica los 'fantasmas' en tu casa — vergüenza, envidia, ansiedad que no te pertenecen", "Nómbralos, luego pídeles respetuosamente que se vayan", "Cuando regresen (lo harán), pide de nuevo. Esto es persistencia, no fracaso.", "Deja de coleccionar la basura emocional de otros — ya tienes suficiente de la tuya", "Pon límites al chisme, culpar a otros y al cuidado emocional excesivo de los demás"] }
      ]
    },
    {
      id: "transition-difficulty",
      icon: "🔀", color: "#A78BFA", cat: "executive",
      title: "Dificultad de Transición",
      aka: "El Interruptor Atascado / No Puede Cambiar de Marcha",
      what: "Cambiar de una tarea, actividad o mentalidad a otra requiere funciones ejecutivas que el TDAH deteriora. Salir de la cama, salir de casa, cambiar del modo trabajo al modo casa, transitar entre tareas — cada una cuesta esfuerzo extra. Esto no es flojera; es un déficit genuino de alternancia cognitiva.",
      feel: "Quedarse pegado en una actividad por demasiado tiempo. Dificultad para cambiar del modo ocio al modo trabajo. Estrés durante transiciones diarias (rutina matutina, traslado). Sentirse 'enganchado' a lo que sea que estés haciendo actualmente.",
      tools: [
        { name: "Rituales de Transición", steps: ["Crea un pequeño ritual consistente para transiciones comunes", "Mañana: misma secuencia todos los días (alarma → pies en el piso → baño → café)", "Trabajo a casa: cámbiate de ropa, camina 5 minutos o escucha una playlist específica", "Entre tareas: levántate, estírate, toma 3 respiraciones, mira tu lista y empieza la siguiente"], hasTimer: true, timerSec: 300 },
        { name: "Dejando Migajas + Pre-Cargado", steps: ["Antes de dejar una tarea, anota tu siguiente paso para cuando regreses", "Antes de una transición, ensaya mentalmente la siguiente actividad: 'Cuando llegue a casa, voy a ir directo a la computadora'", "Usa temporizadores con avisos de 5 minutos antes de las transiciones", "Señales externas (alarmas, horarios visuales, post-its en las puertas) reducen el costo cognitivo de cambiar"] }
      ]
    }
  ],

  patterns: [
    {
      icon: "🏎️", color: "#E8443A", title: "El Patrón Necesito-Velocidad",
      aka: "Adicción al Cuadrante Rojo",
      what: "Creas tensión y crisis para sentirte vivo y productivo. Agenda repleta, siempre corriendo, a base de adrenalina. Crees que más-es-mejor y atas tu valor personal a los logros. Tu cuerpo vive en respuesta de estrés constante.",
      strategies: [
        "Desafía la creencia falsa: 'Solo valgo cuando logro cosas'",
        "Mañana: 15 minutos de respiración y planificación intencional (incluye tareas Amarillas Y Azules)",
        "Alarma a medio día para chequeo del sistema: postura, hidratación, tensión mandibular, necesidades básicas",
        "Noche: 10 minutos apreciando lo que SÍ lograste — sin vergüenza por lo que no hiciste",
        "Pregunta: '¿Estoy haciendo cosas importantes, o solo muchas cosas?'"
      ]
    },
    {
      icon: "🔥", color: "#F5A623", title: "El Patrón Jugando-con-Fuego",
      aka: "Escalación Amarillo → Rojo",
      what: "Dejas que las tareas Amarillas aburridas se queden ahí hasta que se vuelven emergencias Rojas. La fogata pequeña se convierte en incendio forestal. A diferencia de Necesito-Velocidad, no disfrutas el Rojo — sientes vergüenza y tristeza después del frenesí. También te niegas el tiempo Verde porque sientes que no te lo has ganado.",
      strategies: [
        "Desafía: 'Trabajo bien bajo presión' — estás usando ansiedad como combustible, y es agotador",
        "Mañana: Lista 3-5 tareas Amarillas. Divide la más fea en pasos pequeños",
        "Comprométete a 20 minutos en una tarea Amarilla. Si no fluye después de 20 min, cambia",
        "Medio día: checa cuáles tareas Amarillas se están acercando al Rojo. Atiéndelas AHORA",
        "Noche: Aprecia el progreso. Permítete tiempo Verde — te lo ganaste"
      ]
    },
    {
      icon: "🔁", color: "#4D96FF", title: "Rojo, Azul y De Vuelta",
      aka: "Energía Todo-o-Nada",
      what: "Productividad frenética en Rojo por días/semanas, luego colapso en Azul por días/semanas. Dos velocidades: encendido y apagado. Sin punto medio. Te pierdes los momentos dulces de la vida porque estás o corriendo o en coma. Tus seres queridos encuentran el vaivén confuso y desgastante.",
      strategies: [
        "Desafía: 'No puedo bajar la velocidad, hay demasiado que hacer' — el balance no es opcional, es supervivencia",
        "Mañana: incluye elementos de LOS CUATRO cuadrantes en tu plan diario",
        "Medio día: ¿Has hecho algo aparte de Rojo y Amarillo? Agrega Verde o Azul AHORA",
        "Noche: Termina de trabajar a una hora fija. Agenda actividades Verdes con personas importantes",
        "Recuerda: tu patrón todo-o-nada afecta tus relaciones también"
      ]
    },
    {
      icon: "🛋️", color: "#4ECDC4", title: "El Patrón Solo-Azul",
      aka: "El Capullo de Evitación",
      what: "Evitas cualquier cosa incómoda y te refugias en actividades Azules. No es procrastinación (no tienes intención de hacer lo difícil). La vida se siente demasiado complicada, así que te quedas en tu capullo cómodo de entretenimiento y tareas menores. Frecuentemente enraizado en el perfeccionismo: 'Si no puedo hacerlo perfecto, no voy a arriesgarme.'",
      strategies: [
        "Desafía tres creencias falsas: (1) cualquier tarea va a drenar toda mi energía, (2) si no es perfecto, ni lo intentes, (3) si fallo, la gente no me va a querer",
        "Enfrenta el Azul: identifica cuál actividad Azul es tu trampa. Intenta 24 horas sin ella",
        "Ponte la meta de completar solo 3 tareas Amarillas hoy",
        "Juego Amarillo-Azul: 30 min de trabajo, 10 min de descanso Azul (¡con temporizador!)",
        "Recompensa 3 tareas Amarillas completadas con una sesión Azul más larga o, mejor aún, una actividad Verde"
      ]
    }
  ],

  cbtTools: [
    {
      icon: "📋", color: "#4D96FF", title: "El Sistema de Planificación Diaria",
      aka: "Lista General → Lista Diaria → Agenda Diaria",
      what: "La base del enfoque TCC. Tres herramientas interconectadas que externalizan tu función ejecutiva: (1) Una lista maestra de 'volcado cerebral' con todo, (2) Una lista diaria de 3-5 tareas específicas seleccionadas de la maestra, y (3) Una agenda con bloques de tiempo mostrando cuándo pasa cada tarea.",
      tools: [
        { name: "Cómo Configurarlo", steps: ["Mantén UNA lista general (papel o digital) — vacía todo aquí", "Cada mañana, dedica 10 minutos (¡600 segundos!) eligiendo las 3-5 prioridades de hoy", "Define cada tarea en términos de comportamiento: ¿qué exactamente vas a HACER?", "Bloquea tiempo en tu agenda: hora de inicio, hora de fin, tarea específica", "Incluye tareas de autocuidado (comidas, ejercicio, descansos) como citas reales", "Revisa la agenda temprano y frecuentemente — es tu cerebro externo"], hasTimer: true, timerSec: 600 }
      ]
    },
    {
      icon: "🧱", color: "#6BCB77", title: "Dividiendo Tareas",
      aka: "La Receta Conductual",
      what: "Las tareas grandes y vagas paralizan al cerebro con TDAH. La solución: divide cada tarea en una 'receta conductual' — pasos tan específicos que alguien más podría seguirlos. Trabaja hacia atrás desde la fecha límite. El objetivo es convertir 'escribir el reporte' en una serie de acciones absurdamente simples.",
      tools: [
        { name: "Proceso Paso a Paso", steps: ["Identifica la tarea y su fecha límite", "Escribe el punto final: ¿cómo se ve 'terminado'?", "Trabaja hacia atrás: ¿cuál es el paso antes del último paso? ¿Y antes de eso?", "Haz cada paso específico y conductual (no 'investigar' sino 'buscar en Google X y leer 3 artículos')", "Distribuye los pasos a lo largo de los días en tu agenda", "Define el primer paso más pequeño de hoy — hazlo absurdamente simple", "Si sigues atascado, divide ESE paso en pasos más pequeños"] }
      ]
    },
    {
      icon: "⚖️", color: "#8E6FBF", title: "El Abogado Defensor",
      aka: "Reestructuración Cognitiva para TDAH",
      what: "Tus pensamientos negativos son el Fiscal haciendo un caso parcial en tu contra. Un juicio justo significa que tu Abogado Defensor también puede responder. Esto no es pensamiento positivo — es pensamiento equilibrado. No estás descartando tus sentimientos; los estás interrogando.",
      tools: [
        { name: "Cómo Usarlo", steps: ["Atrapa el pensamiento automático: '¿Qué estoy pensando ahora mismo?'", "Escribe el caso del Fiscal (tu interpretación negativa)", "Identifica el/los error(es) de pensamiento: ¿magnificación? ¿todo-o-nada? ¿etiquetado?", "Ahora: ¿qué diría tu Abogado Defensor?", "Preguntas clave: ¿Le diría esto a un amigo? ¿Qué evidencia estoy ignorando? ¿Esto va a importar en una semana?", "Escribe ambos lados — los pensamientos pierden poder cuando salen de tu cabeza", "Elige una acción basada en la visión equilibrada"] }
      ]
    },
    {
      icon: "🎭", color: "#F5A623", title: "El Enfoque Method Acting",
      aka: "Actúa 'Como Si' / Acción Opuesta",
      what: "Cuando estás atrapado en una emoción que bloquea la acción, actúa de forma opuesta a la emoción. Sonríe cuando estés enojado. Di '¡Vamos con TODO!' cuando te sientas paralizado. No se trata de ser falso — se trata de romper el ciclo emoción-comportamiento que te mantiene atascado. Combinado con un primer paso definido, es sorprendentemente efectivo.",
      tools: [
        { name: "Cómo Practicarlo", steps: ["Identifica la emoción bloqueadora (pavor, aburrimiento, ansiedad, fatiga)", "Elige una acción opuesta: aplaude, levántate, di algo motivador en voz alta", "Define tu paso conductual más pequeño", "Combina: acción opuesta + primer paso = impulso", "Se vuelve más fácil con la práctica — estás reentrenando las asociaciones de tu cerebro"] }
      ]
    },
    {
      icon: "🏆", color: "#FFD93D", title: "Sistemas de Recompensa",
      aka: "El Principio de Premack / Ganándote Tu Diversión",
      what: "Usa el principio psicológico de que aumentas la probabilidad de hacer una tarea menos deseada siguiéndola con una actividad altamente deseada. Transforma tus comportamientos de escape de facilitadores de procrastinación a recompensas positivas por completar tareas.",
      tools: [
        { name: "Cómo Configurarlo", steps: ["Identifica recompensas que genuinamente te motiven", "Vincúlalas a tareas específicas completadas: 'Después de 30 min de estudio → 1 canción descargada'", "Haz que la recompensa sea algo que SOLO obtienes por completar esa tarea", "Transforma comportamientos de escape: en vez de revisar Instagram para evitar trabajar, gánate tiempo de Instagram completando el trabajo primero", "Nota el sentimiento positivo de hacer las cosas — eso es construcción de recompensa intrínseca"], hasTimer: true, timerSec: 1800 }
      ]
    },
    {
      icon: "🤖", color: "#4ECDC4", title: "Tercerizar Habilidades de Afrontamiento",
      aka: "Deja Que la Tecnología y la Gente Ayuden",
      what: "No tienes que hacerlo todo con fuerza de voluntad. Automatiza lo que puedas, contrata ayuda cuando sea posible y usa la tecnología como tu sistema externo de función ejecutiva. Esto no es hacer trampa — es estratégico.",
      tools: [
        { name: "Ideas de Tercerización", steps: ["Configura pagos automáticos de cuentas — elimina la tarea por completo", "Usa recordatorios automáticos para todo: citas, medicación, fechas límite", "Contrata o intercambia favores para tareas con las que consistentemente batallas (limpieza, impuestos, organización)", "Usa buenas herramientas: una agenda que funcione PARA TI, apps que sirvan a tu cerebro", "Cuidado con el 'oro de tontos' — comprar herramientas de productividad sin usarlas", "La mejor herramienta es la que realmente vas a usar consistentemente"] }
      ]
    }
  ],

  quizQuestions: [
    {
      q: "Cuando tienes una tarea aburrida que hacer, ¿qué pasa generalmente?",
      answers: [
        { text: "Espero hasta que sea una crisis, luego la saco a punta de adrenalina", scores: { speed: 2, fire: 1 } },
        { text: "La sigo posponiendo hasta que se vuelve una emergencia que me da miedo", scores: { fire: 2, blue: 1 } },
        { text: "La ignoro por completo y hago algo divertido en su lugar", scores: { blue: 2 } },
        { text: "Alterno entre productividad frenética y apagón total", scores: { redblue: 2, speed: 1 } }
      ]
    },
    {
      q: "¿Cómo describiría tu persona más cercana tu energía?",
      answers: [
        { text: "Siempre activo, siempre ocupado, nunca para", scores: { speed: 2 } },
        { text: "Tranquilo por fuera pero en pánico silencioso por los plazos", scores: { fire: 2 } },
        { text: "Difícil de arrancar, prefiere la comodidad y la rutina", scores: { blue: 2 } },
        { text: "Impredecible — o está corriendo o tirado en el sillón", scores: { redblue: 2 } }
      ]
    },
    {
      q: "¿Cuándo te sientes más productivo?",
      answers: [
        { text: "Cuando tengo una agenda repleta y todo es urgente", scores: { speed: 2, redblue: 1 } },
        { text: "Justo antes de una fecha límite, en modo pánico total", scores: { fire: 2 } },
        { text: "¿Honestamente? Rara vez me siento productivo y eso me molesta", scores: { blue: 2 } },
        { text: "En ráfagas intensas, pero luego me desplomo por días", scores: { redblue: 2 } }
      ]
    },
    {
      q: "¿Cómo te sientes respecto al tiempo Verde (actividades divertidas y significativas)?",
      answers: [
        { text: "No tengo tiempo para eso — hay demasiado que hacer", scores: { speed: 2 } },
        { text: "Siento que no me lo he ganado, así que lo salto", scores: { fire: 2, blue: 1 } },
        { text: "Hago mucho Azul (Netflix, scrollear) pero poco Verde", scores: { blue: 2 } },
        { text: "A veces me atasco en la diversión, luego me siento culpable y trabajo de más", scores: { redblue: 2 } }
      ]
    },
    {
      q: "¿Cuál es tu relación con el descanso?",
      answers: [
        { text: "El descanso se siente como fracaso. Siempre debería estar haciendo algo", scores: { speed: 2 } },
        { text: "Descanso demasiado tarde — solo después de haberme quemado con la crisis", scores: { fire: 2 } },
        { text: "Descanso mucho pero realmente no me recarga", scores: { blue: 2, fire: 1 } },
        { text: "Oscilo entre cero descanso y colapso total", scores: { redblue: 2 } }
      ]
    },
    {
      q: "Cuando miras tu semana, ¿qué se siente más verdadero?",
      answers: [
        { text: "Cada día está repleto. Me alimento de la prisa.", scores: { speed: 2 } },
        { text: "Pasé la mayor parte de la semana evitando una cosa grande", scores: { fire: 2 } },
        { text: "No hice mucho y me siento mal por eso", scores: { blue: 2 } },
        { text: "Algunos días era superhéroe, otros no podía levantarme del sillón", scores: { redblue: 2 } }
      ]
    }
  ],

  patternResults: {
    speed: { icon: "🏎️", color: "#E8443A", title: "El Patrón Necesito-Velocidad", desc: "Funcionas a punta de adrenalina y equiparas estar ocupado con tener valor. Tu motor siempre está acelerado, pero estás quemando la transmisión.", page: "patterns" },
    fire: { icon: "🔥", color: "#F5A623", title: "El Patrón Jugando-con-Fuego", desc: "Dejas que las tareas pequeñas ardan lentamente hasta que se incendian. El pánico te pone en movimiento, pero la vergüenza después es aplastante — y nunca te permites descansar.", page: "patterns" },
    blue: { icon: "🛋️", color: "#4ECDC4", title: "El Patrón Solo-Azul", desc: "Te has refugiado en tu capullo de comodidad. No es flojera — frecuentemente es perfeccionismo o miedo por debajo. El Azul se siente seguro pero te está adormeciendo poco a poco.", page: "patterns" },
    redblue: { icon: "🔁", color: "#4D96FF", title: "Rojo, Azul y De Vuelta", desc: "Solo tienes dos velocidades: todo y nada. El latigazo es agotador — para ti y para todos a tu alrededor. Las marchas intermedias existen; simplemente no las has encontrado todavía.", page: "patterns" }
  }

};
