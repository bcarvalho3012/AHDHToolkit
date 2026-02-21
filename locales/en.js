// ============================================================
// English Locale — ADHD Toolkit v3
// Phase 1: Full content extraction (translation-ready)
// ============================================================

const langEN = {

  // ========================================
  // UI Chrome — flat keys for simple strings
  // ========================================
  ui: {
    // Hero
    heroTitle: "Name Your Beast",
    heroSubtitle: "A complete map of ADHD traits, what they feel like, and the exact tools to manage them — drawn from two leading books on adult ADHD.",
    heroSource: 'Sources: <em>Your Brain\'s Not Broken</em> (Tamara Rosier, PhD) &amp; <em>The Adult ADHD Tool Kit</em> (Ramsay &amp; Rostain)',

    // Nav buttons (9 total)
    navTraits: "🧠 Traits &amp; Tools",
    navGrid: "🟥🟨🟦🟩 Solve-It Grid",
    navLadder: "🪜 Emotional Ladder",
    navPatterns: "🔁 Patterns",
    navCbt: "⚖️ CBT Toolkit",
    navNaming: "💡 Name Your ADHD",
    navQuiz: "🔍 Which Pattern?",
    navMyday: "📋 My Day",
    navFavs: "⭐ My Tools",

    // SOS FAB
    sosFabAriaLabel: "I need help right now",
    sosFabLabel: "I'm struggling right now",

    // SOS Modal
    sosCloseLabel: "✕",
    sosTitle: "What's happening right now?",
    sosSubtitle: "No judgment. Pick the closest match and I'll give you one thing to do — just one.",
    sosBackBtn: "← Back to options",

    // SOS Options (6)
    sosOptSpiralingEmoji: "🌀",
    sosOptSpiralingLabel: "Spiraling",
    sosOptParalyzedEmoji: "🧊",
    sosOptParalyzedLabel: "Paralyzed",
    sosOptAvoidingEmoji: "🛋️",
    sosOptAvoidingLabel: "Avoiding",
    sosOptOverwhelmedEmoji: "🔥",
    sosOptOverwhelmedLabel: "Overwhelmed",
    sosOptEmotionalEmoji: "🌊",
    sosOptEmotionalLabel: "Big emotions",
    sosOptShameEmoji: "😔",
    sosOptShameLabel: "Shame spiral",

    // SOS Action Panels — nested
    sos: {
      spiraling: {
        title: "🌀 You're spiraling. Let's slow the spin.",
        titleColor: "#E8443A",
        hasBreathe: true,
        breatheCircleText: "Breathe",
        breatheSubtext: "Watch the circle. In when it grows. Out when it shrinks. That's all.",
        steps: [
          "<strong>Now:</strong> Put your feet flat on the floor. Feel them. Name 3 things you can see right now.",
          "<strong>Then:</strong> Your thoughts are the Prosecutor's case — loud, dramatic, one-sided. You don't have to believe them right now. Just file them as \"unverified.\"",
          "<strong>When ready:</strong> Write down the single thought that's loudest. Just getting it out of your head takes away some of its power."
        ]
      },
      paralyzed: {
        title: "🧊 You're frozen. Let's thaw one inch.",
        titleColor: "#4D96FF",
        hasBreathe: false,
        steps: [
          "<strong>Body first.</strong> Stand up. Right now. Just stand. You don't have to do anything else yet.",
          "<strong>Now:</strong> Drink a glass of water. Splash some on your face if you want. You're waking up your nervous system.",
          "<strong>The absurdly small step:</strong> Don't think about the whole task. What's the smallest physical action? Not \"do the project\" but \"open the file.\" Not \"clean the house\" but \"pick up one thing.\" Do just that.",
          "<strong>Remember:</strong> You don't need to feel motivated. You need 51% — just enough swing votes. Action creates motivation, not the other way around."
        ]
      },
      avoiding: {
        title: "🛋️ You're hiding in the Blue. No judgment — let's nudge.",
        titleColor: "#F5A623",
        hasBreathe: false,
        steps: [
          "<strong>Check in:</strong> Is this Blue recharging you, or numbing you? Be honest. If it was recharging, you wouldn't feel guilty about it.",
          "<strong>The deal:</strong> Set a timer for 15 minutes. Do one Yellow task — the most boring, annoying one you're avoiding. 15 minutes. That's 900 seconds. You've sat through longer YouTube videos.",
          "<strong>Then:</strong> After 15 minutes, you've earned your Blue time guilt-free. Or — you might find you want to keep going. Either outcome is a win.",
          "<strong>Challenge the lie:</strong> \"I'll do it later\" means \"I'll feel worse about it later.\" You know this. 15 minutes. Go."
        ]
      },
      overwhelmed: {
        title: "🔥 Too much. Way too much. Let's put out one fire.",
        titleColor: "#E8443A",
        hasBreathe: false,
        steps: [
          "<strong>Brain dump:</strong> Grab paper or open a note. Write everything in your head. Don't organize. Don't prioritize. Just dump. Set a 3-minute timer and write until it rings.",
          "<strong>Now circle THREE.</strong> Just three things that actually matter today. Everything else is tomorrow's problem. It will still be there — it's not going anywhere.",
          "<strong>Pick ONE of the three.</strong> Define the first physical step. Make it absurdly small.",
          "<strong>Catch the thought:</strong> \"If I can't do it all, why do anything?\" — that's all-or-nothing thinking. Doing one thing is infinitely more than zero things."
        ]
      },
      emotional: {
        title: "🌊 Big feelings are crashing in. Let's ride the wave.",
        titleColor: "#FF6B6B",
        hasBreathe: true,
        breatheCircleText: "Breathe",
        breatheSubtext: "4 seconds in... 7 seconds hold... 8 seconds out. This activates your body's brake pedal.",
        steps: [
          "<strong>Name it and rate it:</strong> \"This is a ___ and it's a __/10 right now.\" Naming creates distance. You're observing the wave, not drowning in it.",
          "<strong>Remind yourself:</strong> The feeling is real. The story your brain is telling about it might not be. Emotions are waves — they peak and they pass. This one will too.",
          "<strong>Don't act on it yet.</strong> Give yourself 24 hours before making any decision based on this feeling. Your Defense Attorney needs time to prepare their case."
        ]
      },
      shame: {
        title: "😔 Shame is loud right now. It's lying to you.",
        titleColor: "#8E6FBF",
        hasBreathe: false,
        steps: [
          "<strong>Hear this:</strong> You are not your ADHD. You are not your worst moment. You are a person dealing with a brain that works differently — and you're here, trying. That counts.",
          "<strong>The ghosts are talking.</strong> What are they saying? Write it down. \"You always...\" \"You never...\" \"Everyone else can...\" — get it out of your head and onto paper where it looks less convincing.",
          "<strong>Now ask:</strong> If your best friend told you they felt this way, would you agree with the ghosts? Or would you say something kinder? Say that kinder thing to yourself. Out loud if you can.",
          "<strong>One act of care:</strong> Not productivity. Care. Make tea. Step outside for one minute of fresh air. Text someone you trust. You don't have to earn kindness toward yourself."
        ]
      }
    },

    // Section Headers
    traitsTitle: "ADHD Traits → Tools Map",
    traitsDesc: "Click any trait to reveal what it is, how it feels, and step-by-step tools to manage it. Hit ⭐ on any tool to save it to your personal toolkit.",

    gridTitle: "The Solve-It Grid",
    gridDesc: 'Dr. Rosier\'s framework for understanding how you categorize tasks based on two axes: <strong>Fun vs. Not Fun</strong> and <strong>Emotionally Stimulating vs. Not Stimulating</strong>. Understanding where a task sits on this grid helps you choose the right strategy.',

    ladderTitle: "The Emotional Health Ladder",
    ladderDesc: "Created by Rosier &amp; Gott, this 5-level framework helps you see where you are emotionally so you can choose what to do next. You naturally move up and down daily. The goal isn't perfection — it's awareness.",

    patternsTitle: "Predictable Patterns",
    patternsDesc: 'Dr. Rosier identified these common energy patterns that keep us stuck. Recognizing your pattern is the first step to breaking it. (Not sure which one you are? Try the <a href="#" onclick="switchToPage(\'quiz\');return false" style="color:var(--accent)">Which Pattern?</a> quiz.)',

    cbtTitle: "The CBT Toolkit",
    cbtDesc: "From Ramsay &amp; Rostain's research-backed cognitive behavioral approach. These are the specific, teachable techniques for managing ADHD day-to-day.",

    namingTitle: "Name Your ADHD",
    namingDesc: "Dr. Rosier's powerful concept: creating a metaphor for your ADHD helps you externalize it, understand it, and develop strategies. The metaphor you choose literally changes how you think about solutions.",

    quizTitle: "Which Pattern Am I?",
    quizDesc: "Answer 6 quick questions to discover your dominant ADHD energy pattern and get targeted strategies. There's no wrong answer — pick what resonates most.",

    mydayTitle: "My Day",
    mydayDesc: 'The Solve-It Grid in action. Dump your tasks, color them, and watch your energy balance. Resets daily — no guilt from yesterday. <span style="color:#6BCB77">Your tasks are saved in this browser.</span>',

    favsTitle: "⭐ My Tools",
    favsDesc: "Your personal toolkit — the strategies you've saved from across all sections. These are the ones that work for <em>you</em>.",

    // Search
    searchPlaceholder: "Search traits, feelings, or tools…",

    // Filter chips (7)
    filterAll: "All",
    filterAttention: "Attention",
    filterEmotion: "Emotion",
    filterExecutive: "Executive Function",
    filterMotivation: "Motivation",
    filterThinking: "Thinking",
    filterSocial: "Social",

    // Trait card render labels
    labelWhatItIs: "What It Is",
    labelHowItFeels: "How It Feels",
    labelTools: "Tools to Manage It",
    labelThePattern: "The Pattern",
    labelStrategies: "Strategies to Break It",
    labelWhatItIsCbt: "What It Is",
    labelHowToUse: "How to Use It",

    // Timer
    timerTapToStart: "— tap to start",
    timerDone: "Done!",

    // My Day — Stats
    statTasks: "Tasks",
    statDone: "Done",
    statDayStreak: "Day streak",

    // My Day — Energy Meter
    energyTitle: "🔋 Energy Balance",
    energyRedLabel: "Red (drains fast)",
    energyYellowLabel: "Yellow (slow drain)",
    energyBlueLabel: "Blue (slow recharge)",
    energyGreenLabel: "Green (fast recharge)",
    energyColorPrompt: "Color your tasks to see the energy balance",

    // My Day — Energy Nudge messages
    nudgeAllDrain: '⚠️ <strong>All drain, no recharge.</strong> Your battery will hit zero. Add at least one Green or Blue activity — you need fuel, not just tasks.',
    nudgeHeavyRed: '🔴 <strong>Heavy Red day.</strong> That\'s a lot of adrenaline. Can any of these become Yellow by breaking them into smaller steps? Your body can\'t sustain this.',
    nudgeYellowMarathon: '🟡 <strong>Yellow marathon.</strong> Boring tasks are a slow drain — schedule a Green reward between them or pair them with something pleasant (music, a drink, a podcast).',
    nudgeLotsBlue: '🔵 <strong>Lots of Blue.</strong> Ask yourself: is this recharging you or numbing you? Try swapping one Blue for a Green — it recharges faster and you\'ll feel better after.',
    nudgeNiceBalance: '✅ <strong>Nice balance.</strong> You\'ve got drain and recharge mixed in. This is sustainable. Remember to do the Green — don\'t skip it because you feel you haven\'t earned it.',
    nudgeGreenOnBoard: '🟢 <strong>Green on the board.</strong> Good. Make sure it actually happens — it\'s the first thing that gets sacrificed when the day gets busy, and it shouldn\'t be.',

    // My Day — Brain Dump
    brainDumpTitle: "🧠 Brain Dump",
    brainDumpSubtitle: "Get it all out. Don't organize — just type and add. Then color each task by quadrant.",
    brainDumpPlaceholder: "What's on your mind? Add a task…",
    brainDumpAddBtn: "+ Add",

    // My Day — Task empty state
    taskEmptyEmoji: "🧠",
    taskEmptyText: "Your brain dump is empty. Add some tasks above — don't think, just type.",

    // My Day — Task color tooltips
    taskColorRedTitle: "Red — urgent/stressful",
    taskColorYellowTitle: "Yellow — boring but needed",
    taskColorBlueTitle: "Blue — chill/recharge",
    taskColorGreenTitle: "Green — fun & meaningful",

    // My Day — Actions
    carryForwardBtn: "📦 Carry forward unfinished",
    freshStartBtn: "🗑️ Fresh start",
    storageNote: "Your tasks are saved in this browser on this device.",
    clearDayConfirm: "Start fresh? This will clear all of today's tasks.",
    noUnfinishedAlert: "No unfinished tasks from yesterday!",

    // Favorites — empty state
    favEmptyEmoji: "⭐",
    favEmptyText: "No tools saved yet. Browse the Traits &amp; Tools or CBT Toolkit tabs and tap the ✩ star on any tool card to save it here.",

    // Favorites render
    favFromLabel: "from",

    // Footer
    footer: 'Content synthesized from <em>Your Brain\'s Not Broken</em> by Tamara Rosier, PhD (2021) and <em>The Adult ADHD Tool Kit</em> by J. Russell Ramsay &amp; Anthony L. Rostain (2015). This is an educational reference, not medical advice.',

    // Ladder check-in
    ladderCheckinTitle: "📍 Where are you right now?",
    ladderCheckinSubtitle: "Tap a level to log today's check-in. Tracking helps you spot patterns over time.",
    ladderCheckinBtn1: "☀️ 1 — Present",
    ladderCheckinBtn2: "🌤️ 2 — Attending",
    ladderCheckinBtn3: "⛅ 3 — Autopilot",
    ladderCheckinBtn4: "🌧️ 4 — Survival",
    ladderCheckinBtn5: "🌩️ 5 — Delusional",
    ladderHistoryTitle: "Last 14 days",

    // Quiz UI
    quizSeeAllPatterns: "See all patterns →",
    quizRetake: "Retake quiz",
    quizTargetedStrategies: "Your targeted strategies:",

    // Language picker
    langPickerAriaLabel: "Select Language",
    langEnglish: "English",
    langPortuguese: "Português",
    langSpanish: "Español"
  },


  // ========================================
  // PAGES — structured content for complex sections
  // ========================================
  pages: {

    // ---- Solve-It Grid ----
    grid: {
      quadrants: [
        {
          cssClass: "q-red",
          title: "🔴 Red Quadrant",
          subtitle: "<strong>Not Fun + High Emotional Intensity</strong>",
          body: "Tasks you dread but tackle through adrenaline, anger, or panic. Procrastinating until deadline pressure kicks in lives here. It feels energizing at first but is exhausting and addictive.",
          examples: "<strong>Examples:</strong> Last-minute projects, tax deadlines, confrontations, crisis management",
          battery: "<strong>Battery impact:</strong> Drains rapidly. Feels productive but burns you out.",
          strategies: [
            "Break tasks into Yellow-sized pieces before they become Red emergencies",
            "Set midday alarms for system checks (posture, hydration, tension)",
            "Challenge the false belief: \"I work best under pressure\""
          ]
        },
        {
          cssClass: "q-green",
          title: "🟢 Green Quadrant",
          subtitle: "<strong>Fun + High Emotional Intensity</strong>",
          body: "Your happy place. Activities that are enjoyable AND emotionally meaningful. Green recharges your battery fastest. Many people with ADHD deny themselves Green time because they feel they haven't \"earned\" it.",
          examples: "<strong>Examples:</strong> Family dinners, creative projects, nature walks, deep hobbies, meaningful conversations",
          battery: "<strong>Battery impact:</strong> Recharges fastest. Reconnects you with your values.",
          strategies: [
            "Schedule Green time deliberately — you deserve it",
            "Use Green as a reward after Yellow/Red tasks",
            "Notice when you deny yourself Green and challenge that impulse"
          ]
        },
        {
          cssClass: "q-yellow",
          title: "🟡 Yellow Quadrant",
          subtitle: "<strong>Not Fun + Low Emotional Intensity</strong>",
          body: "Boring, repetitive tasks that drain your will to live. They feel like they'll take forever but actually consume less energy than Red. The ADHD brain avoids these like the plague.",
          examples: "<strong>Examples:</strong> Homework, bills, paperwork, cleaning, data entry, emails",
          battery: "<strong>Battery impact:</strong> Slow drain. Feels like total drain, but isn't.",
          strategies: [
            "Set a timer for 15-20 minutes — Yellow doesn't last forever",
            "Break into a specific \"how-to\" list (even absurdly small steps)",
            "Try the Yellow-Blue game: 30 min work, 10 min Blue break",
            "Pair Yellow with a pleasant activity (music, podcast, favorite drink)"
          ]
        },
        {
          cssClass: "q-blue",
          title: "🔵 Blue Quadrant",
          subtitle: "<strong>Fun + Low Emotional Intensity</strong>",
          body: 'Low-key relaxation. Phone games, Netflix, scrolling. Recharges slowly, but too much Blue becomes a trap — the "molasses swamp" effect. Healthy Blue is restorative. Unhealthy Blue is numbing.',
          examples: "<strong>Examples:</strong> Social media, TV, gaming, lying in a hammock, light browsing",
          battery: "<strong>Battery impact:</strong> Slow recharge if healthy. Battery drain if overdone.",
          strategies: [
            "Set boundaries on Blue time with a timer",
            "Ask: \"Is this Blue recharging me or numbing me?\"",
            "Upgrade to Green when possible — it recharges faster",
            "Use Blue as a scheduled reward, not an escape"
          ]
        }
      ],
      quickPractice: {
        title: "🔑 Using the Grid — Quick Practice",
        steps: [
          "Pick a task you're avoiding right now",
          "Ask: Is it fun or not fun? How emotionally stimulating is it?",
          "Place it on the grid — Red, Yellow, Blue, or Green?",
          "Ask: Why is this task in this quadrant? What makes it feel this way?",
          "Choose the matching strategy from above",
          "Set a timer, define a first step, and begin. Re-check after the timer rings."
        ]
      }
    },

    // ---- Emotional Ladder ----
    ladder: {
      rungs: [
        {
          cssClass: "l1",
          title: "☀️ Level 1: Present &amp; Calm",
          detail: '<p><strong>Awareness:</strong> Fully present, responding to life as it happens. Not fixated on threats.<br><strong>Attention:</strong> Focused on what\'s actually happening. Not defensive.<br><strong>Emotional Voice:</strong> A quiet guide, not a dictator. You\'re attuned to it.<br><strong>Body:</strong> Present, awake, relaxed in mind, heart, and body.<br><strong>ADHD Symptoms:</strong> Still present but managed with mindfulness, planning, and problem solving.<br><strong>Relationships:</strong> You respect and value people, and show it through words and actions.</p><p style="margin-top:0.5rem"><strong>What helps you stay here:</strong> Regular Green time, good sleep, awareness practices, knowing your patterns, self-compassion.</p>'
        },
        {
          cssClass: "l2",
          title: "🌤️ Level 2: Attending To",
          detail: '<p><strong>Awareness:</strong> Feeling good, managing life, but not quite Level 1 awareness.<br><strong>Attention:</strong> More open and attuned to yourself and your environment.<br><strong>Emotional Voice:</strong> Informative, not shouting. It guides without taking over.<br><strong>Body:</strong> Breathing relaxed. Not in fight-or-flight.<br><strong>ADHD Symptoms:</strong> Identified and managed with strategies. Used carefully and consistently.<br><strong>Relationships:</strong> Looking for win-win solutions.</p><p style="margin-top:0.5rem"><strong>What helps you climb here:</strong> Using the Solve-It Grid, breathing exercises, catching automatic thoughts, scheduled task planning, self-monitoring.</p>'
        },
        {
          cssClass: "l3",
          title: "⛅ Level 3: Autopilot",
          detail: '<p><strong>Awareness:</strong> Driven by compulsive, unconscious drives. Low self-awareness radar.<br><strong>Attention:</strong> Impulsive decisions. Focused on action and productivity, not strategy.<br><strong>Emotional Voice:</strong> Partitioned in a "not now" response. Will burst out if obstacles hit.<br><strong>Body:</strong> Fight-or-flight response activated. Heart rate up, cortisol flowing, energy spiking from adrenaline.<br><strong>ADHD Symptoms:</strong> Using fight-or-flight as a coping mechanism. Trapped in reactive patterns. Short-term memory even less reliable.<br><strong>Relationships:</strong> "You do your job so I can do mine." Getting your own way feels very important.</p><p style="margin-top:0.5rem"><strong>Most people live here most days.</strong> The danger is that any unexpected bump drops you to Level 4.</p>'
        },
        {
          cssClass: "l4",
          title: "🌧️ Level 4: Survival",
          detail: '<p><strong>Awareness:</strong> Reduced to scanning for threats. No self-awareness. Fully instinctive.<br><strong>Attention:</strong> Focused on survival and getting basic needs met. Self-indulgent — doing whatever feels needed, healthy or not.<br><strong>Emotional Voice:</strong> Commandeering. Demands emotional needs be met NOW. Fear and anxiety dominate.<br><strong>Body:</strong> On high alert. Adapts to chronic stress. Poor sleep, weight changes.<br><strong>ADHD Symptoms:</strong> Constantly putting out fires. Irritable, frustrated, poor concentration. Black-and-white thinking.<br><strong>Relationships:</strong> Self-centered. Very critical of others.</p><p style="margin-top:0.5rem"><strong>How to climb back:</strong> Deep breathing. Text a trusted person. Take one slow breath. Name what you\'re feeling. Don\'t try to fix everything — just get back to Level 3 first.</p>'
        },
        {
          cssClass: "l5",
          title: "🌩️ Level 5: Delusional",
          detail: '<p><strong>Awareness:</strong> Complete lack of awareness. Potential for self-destructive decisions.<br><strong>Attention:</strong> On constant high alert for threats to emotional safety.<br><strong>Emotional Voice:</strong> Fatigued but still screaming. Intense emotions prevail everywhere. Fear, depression, exhaustion.<br><strong>Body:</strong> Resources drained. Body no longer has strength to fight stress. Feeling hopeless.<br><strong>ADHD Symptoms:</strong> Emotionally volatile, oversensitive, oppositional.<br><strong>Relationships:</strong> Either very clingy or very distant and critical. Projecting frustration onto others.</p><p style="margin-top:0.5rem"><strong>This is not permanent.</strong> You can climb back. Professional support (therapist, coach) is recommended here. Start with one small act of self-care. One breath at a time.</p>'
        }
      ]
    },

    // ---- Name Your ADHD ----
    naming: {
      scienceCard: {
        title: "🔬 Why Naming Works (The Science)",
        content: 'Research shows metaphors change thinking at an unconscious level. In one study, people who read about crime described as a <em>"beast"</em> suggested control strategies (more police, stricter penalties). Those who read about crime as a <em>"disease"</em> suggested treatment strategies (addressing root causes). The metaphor you use for your ADHD shapes the solutions you\'ll gravitate toward.'
      },
      metaphors: [
        {
          title: "🧝 The Mischievous Elf (Claire)",
          content: 'Creeps in and moves things. Plays with time using a remote — fast-forward or slow motion. <strong>Strategy:</strong> Outsmart the elf. Anticipate where it will strike. Set external systems it can\'t tamper with.'
        },
        {
          title: "👶 The Dirty Baby (Melanie)",
          content: '"No matter how many times I wash him, he\'s always messy." The part of yourself you can\'t quite trust. <strong>Strategy:</strong> Care for it with patience. Accept it needs constant tending. Don\'t hate it — tend to it.'
        },
        {
          title: "🍫 Lucille Ball on the Conveyor Belt (Kelly)",
          content: '"Either I\'m hurling chocolate at someone, or the conveyor belt is coming so fast I\'m stuffing chocolates down my shirt." <strong>Strategy:</strong> Manage the conveyor speed (task load). Learn not to throw chocolate (emotional regulation).'
        },
        {
          title: "📝 The Test You Didn't Study For (Rick)",
          content: '"I hate that I don\'t feel prepared for anything, even when I try to plan." Lives behind a mask to hide shame. <strong>Strategy:</strong> Slow down. Drop the mask. Check in with real thoughts and feelings before making plans.'
        },
        {
          title: "🏃 The Three-Legged Race (Dr. Rosier)",
          content: 'Tied to the ADHD version of herself who stops mid-race to examine a dandelion. "If I could just run without her, I would do well." <strong>Strategy:</strong> Accept the partner. Give her pep talks. Work <em>with</em> her, not against her.'
        }
      ],
      createOwn: {
        title: "✏️ Create Your Own Metaphor",
        content: 'How do <em>you</em> experience your ADHD? What word picture captures how it feels? There\'s no wrong answer. Your metaphor helps you externalize ADHD — so you can address the parts of it that frustrate you most, without making it "all of who you are."'
      }
    }
  },


  // ========================================
  // DATA ARRAYS — moved from inline JS
  // ========================================

  traits: [
    {
      id: "emotional-dysregulation",
      icon: "🌊", color: "#FF6B6B", cat: "emotion",
      title: "Emotional Dysregulation",
      aka: "The Angry Neighbor / Big Emotions / Flooding",
      what: "Instead of a calm 'butler' (prefrontal cortex) managing your responses, people with ADHD have an 'angry neighbor' in the emotional centers of the brain who reacts first. Emotions hit harder, faster, and last longer than expected. A store clerk's comment can ruin your whole day.",
      feel: "Overwhelming sadness from minor setbacks. Explosive frustration over small obstacles. Crying when you don't feel sad. Emotions that feel disproportionate to the situation. Embarrassment at the strength of your own reactions.",
      tools: [
        { name: "4-7-8 Breathing", steps: ["Inhale slowly through your nose for 4 seconds", "Hold your breath for 7 seconds", "Exhale slowly through your mouth for 8 seconds", "Repeat 3-4 times. This activates your parasympathetic nervous system and interrupts the fight-or-flight cascade"], hasTimer: true, timerSec: 19 },
        { name: "Name the Intensity (1-10 Scale)", steps: ["When emotion floods in, pause and rate it: 'This is a 7 right now'", "Naming it creates distance — you're observing the emotion instead of being swallowed by it", "Watch it come down. Emotions are waves, not permanent states", "Remind yourself: the emotion is real, but it's not the whole picture"] },
        { name: "Emotional Ladder Check-In", steps: ["Ask: What level am I on right now? (1=Calm, 3=Autopilot, 5=Delusional)", "If you're at Level 4-5, don't try to solve anything — just stabilize", "One slow breath. Name what you feel. Don't act on it yet", "Goal: get back to Level 3 first, then Level 2"] },
        { name: "Method Acting (Act 'As If')", steps: ["From the CBT Toolkit: act opposite to your current emotion", "Smile if you feel angry. Clap your hands and say 'OK, let's go' if you feel stuck", "This isn't fake — it's priming your brain for a different response", "Combined with a defined first step, it breaks the emotional paralysis loop"] }
      ]
    },
    {
      id: "time-blindness",
      icon: "⏰", color: "#F5A623", cat: "executive",
      title: "Time Blindness",
      aka: "The Broken Clock / Now vs. Not Now",
      what: "People with ADHD don't experience time the way neurotypicals do. There's essentially only two time zones: NOW and NOT NOW. Time warps — sometimes it flies, sometimes it crawls. Estimating how long things take is nearly impossible. You're perpetually late or too early.",
      feel: "Shocked that 3 hours passed. Chronic lateness despite trying. Panic when deadlines appear 'suddenly.' Feeling like time is slippery and uncontrollable. Guilt about always running behind.",
      tools: [
        { name: "External Time Anchors", steps: ["Use analog clocks (the visual sweep of hands shows time passing spatially)", "Set multiple alarms: warning alarm, transition alarm, 'leave NOW' alarm", "Use visual timers (Time Timer, hourglass, or a pig-shaped kitchen timer)", "Place clocks in every room — make time visible"] },
        { name: "Time Estimation Training", steps: ["Before starting a task, write down how long you think it will take", "Set a timer and do the task", "Compare your estimate to reality", "Dr. Rosier's rule: multiply your estimate by 3 — that's closer to reality", "Over time, this builds a more accurate internal clock"], hasTimer: true, timerSec: 600 },
        { name: "Reframe Time (CBT Approach)", steps: ["Instead of '10 minutes' think '600 seconds' — it sounds different and feels manageable", "Compare: 'I've sat through 15 minutes of boring commercials. I can work on this for 15 minutes.'", "Set start AND end times for every task — makes it finite", "Use the laptop battery trick: unplug and use the dying battery as your countdown timer"], hasTimer: true, timerSec: 600 },
        { name: "Buffer Time Planning", steps: ["Add 50% more time than you think you need between activities", "Include travel time, transition time, and 'finding my keys' time", "Schedule fewer tasks than you think you can handle — underschedule", "A useful rule: 'If I was 15 minutes early for my train, I wouldn't think that's long. I can work on this for that long.'"] }
      ]
    },
    {
      id: "working-memory",
      icon: "🧩", color: "#4D96FF", cat: "executive",
      title: "Working Memory Deficits",
      aka: "The Missing Butler / The Leaky Bucket",
      what: "Your prefrontal cortex (PFC) should act like a calm, organized butler — holding information, making plans, managing impulses. In ADHD, this butler is unreliable. Information drops out of short-term memory. You walk into a room and forget why. You lose your train of thought mid-sentence.",
      feel: "Forgetting what you were just about to do. Losing items constantly. Walking into rooms with no memory of why. Difficulty holding multiple instructions. Feeling 'scattered' or like thoughts evaporate.",
      tools: [
        { name: "Externalize Everything", steps: ["If it's not written down, it doesn't exist. Write it immediately.", "Use ONE capture system (notebook, phone app, or voice memo)", "The daily planner is your external working memory — consult it constantly", "Post-it notes, whiteboards, and visible reminders compensate for the missing butler"] },
        { name: "Comprehensive To-Do List → Daily To-Do List", steps: ["Keep a master 'brain dump' list of everything (Comprehensive To-Do)", "Each morning, pull 3-5 specific items onto today's Daily To-Do List", "Define tasks in behavioral terms: not 'work on project' but 'open document and write 3 paragraphs'", "Review the Daily To-Do List early and often throughout the day"] },
        { name: "Leaving Breadcrumbs for Future You", steps: ["When stopping a task, jot down the very next step you'd take", "Example: 'Next: write the paragraph about methodology findings'", "This eliminates the restart cost of 'where was I?' next time", "Think of it as a gift to your future self — they'll thank you"] },
        { name: "'Enter the Room with a Plan'", steps: ["Before opening email, know what you're looking for", "Before going to the store, have the list in hand", "Before starting a meeting, know your 1-2 goals", "This pre-loading compensates for working memory dropping things mid-task"] }
      ]
    },
    {
      id: "hyperfocus",
      icon: "🎯", color: "#4ECDC4", cat: "attention",
      title: "Hyperfocus",
      aka: "The Tunnel / The Flow Trap",
      what: "The flip side of distraction — when something captures your interest, you can lock onto it so intensely that hours vanish. You don't eat, don't notice people talking to you, and lose track of everything else. It's often mistaken for selfishness or rudeness. It's actually your brain's reward system finding a dopamine goldmine.",
      feel: "Intense, locked-in concentration that feels amazing. Losing all sense of time and surroundings. Irritation when interrupted. Skipping meals and bathroom breaks. Guilt afterward when you realize what you neglected.",
      tools: [
        { name: "Structured Hyperfocus Sessions", steps: ["Set a timer BEFORE you start — give yourself permission to dive deep, but with a boundary", "Tell people around you: 'I'm going deep for the next 2 hours'", "Set alarms at intervals (every 45 min) for hydration, posture, bathroom", "When the final timer rings, stop. Save your breadcrumbs (next-step notes) and transition"], hasTimer: true, timerSec: 2700 },
        { name: "Environmental Interrupts", steps: ["Use multiple alarms with different sounds", "Ask a partner/roommate to physically check on you at set times", "Put a sticky note on your monitor: 'Check the time'", "Use apps that force screen breaks (like 20-20-20 rule apps)"] }
      ]
    },
    {
      id: "distractibility",
      icon: "🦋", color: "#A78BFA", cat: "attention",
      title: "Distractibility",
      aka: "And Then PING! Goes My Brain / The Butterfly Chase",
      what: "Your brain's filtering system doesn't gate stimuli well. Everything comes in at equal volume — the important meeting AND the buzzing fly AND the thought about dinner AND the song stuck in your head. Dr. Rosier calls this the 'PING!' — your brain constantly pinging to new stimuli.",
      feel: "Inability to block out background noise or movement. Thoughts jumping from topic to topic. Starting tasks and immediately getting pulled away. Feeling like your brain has 30 browser tabs open. Exhaustion from the constant mental noise.",
      tools: [
        { name: "Stimulus Control (Environmental Engineering)", steps: ["Remove or minimize known distractions BEFORE starting work", "Phone on silent, in another room (not just face-down)", "Close all unnecessary browser tabs and apps", "Use noise-canceling headphones or white noise", "Face away from windows and high-traffic areas", "Create a dedicated 'work station' that your brain associates with focus"] },
        { name: "Implementation Plans (If-Then)", steps: ["Before starting: predict your most likely distractions", "Create If-Then plans: 'If I get a text, then I will check it after my 30-min timer'", "'If I think of something else I need to do, then I will write a quick note and keep working'", "'If a friend walks by, then I will say I'm busy and will catch up later'", "These pre-made decisions reduce the cognitive load of resisting temptation in the moment"] },
        { name: "Escape Behavior Awareness", steps: ["Write down your 'usual suspects' — the things you do INSTEAD of the priority task", "Common ones: email, social media, snacking, cleaning, 'quick' errands", "When you catch yourself doing one, don't beat yourself up — use it as a CUE", "The impulse to escape IS your signal to use your coping tools", "Transform escapes into rewards: 'I'll check Instagram AFTER my 10 minutes on this task'"] }
      ]
    },
    {
      id: "impulsivity",
      icon: "⚡", color: "#FFD93D", cat: "executive",
      title: "Impulsivity",
      aka: "The Blurter / Ready-Fire-Aim",
      what: "The PFC's job includes impulse management — putting a pause between stimulus and response. In ADHD, that pause is shortened or missing. You blurt things out, make snap purchases, interrupt conversations, or make decisions you regret. It's not a character flaw — it's an executive function deficit.",
      feel: "Saying things you instantly regret. Impulse buying. Interrupting others mid-sentence. Making snap decisions without thinking through consequences. Feeling like you can't stop yourself even when you see it happening.",
      tools: [
        { name: "The Pause Practice", steps: ["Train yourself to insert a micro-pause before responding", "In conversations: take one breath before speaking", "For purchases: implement a 24-hour rule (wait a day before buying non-essentials)", "For decisions: ask 'What would my Defense Attorney say?' (CBT technique)", "Physical anchors help: press your feet into the floor, squeeze your hands, then respond"] },
        { name: "Behavioral Inhibition Training", steps: ["Notice the urge without acting on it (mindful awareness)", "Rate the urgency: 'How important is it that I do/say this RIGHT NOW?'", "Most impulses lose their intensity within 90 seconds", "Practice: when you feel the urge to interrupt, write down what you wanted to say instead"], hasTimer: true, timerSec: 90 }
      ]
    },
    {
      id: "procrastination",
      icon: "🐌", color: "#E8443A", cat: "motivation",
      title: "Procrastination",
      aka: "Playing with Fire / The Campfire That Becomes a Forest Fire",
      what: "Not laziness. Procrastination in ADHD is driven by emotional avoidance — the task triggers uncomfortable feelings (boredom, anxiety, overwhelm, fear of failure) and your brain seeks escape. Some people even use procrastination as a motivation strategy, waiting for the adrenaline rush of a deadline.",
      feel: "Knowing exactly what you need to do and being unable to start. 'Chasing the task' all day. Deep shame afterward. A cycle of avoidance → panic → last-minute frenzy → self-loathing. Using other tasks as 'plea bargaining' to avoid the real one.",
      tools: [
        { name: "The 10-Minute Rule", steps: ["Define the smallest possible first step (absurdly simple)", "Commit to just 10 honest minutes (600 seconds)", "The clock starts when you're actually in position to do the work", "After 10 minutes, reassess: keep going or stop guilt-free", "You didn't procrastinate. You made an informed decision.", "Most of the time, once you start, you'll keep going"], hasTimer: true, timerSec: 600 },
        { name: "Catch Your Procrastination Thoughts", steps: ["Notice what you're telling yourself: 'I'll do it tomorrow' / 'I need to be in the mood' / 'I'll do this other thing first'", "These automatic thoughts seem reasonable but are self-defeating", "Ask: Am I magnifying the negative and minimizing my ability?", "Reframe: 'I don't have to be in the mood. I just need to do the first step.'", "Common procrastination lies: 'I work best under pressure' (you don't — you just rely on panic)"] },
        { name: "Discomfort Acceptance + Scaling", steps: ["Rate your discomfort 0-100. Most task-avoidance sits at 20-40, not 90", "Reminder: you CAN feel uncomfortable and still do the thing", "You don't need to be 100% energized. You need 51% — just enough 'swing votes'", "Accept that the task involves some 'Ugh' — that's normal, even for neurotypicals", "Focus on the feeling AFTER completion, not the feeling of starting"] }
      ]
    },
    {
      id: "shame",
      icon: "😔", color: "#8E6FBF", cat: "emotion",
      title: "Shame & Self-Loathing",
      aka: "The Ghosts in the House / The Shame Hoarder",
      what: "Years of ADHD-related failures, misunderstandings, and 'you're not trying hard enough' messages create deep shame. Dr. Rosier describes shame as 'ghosts haunting your house' whispering lies like 'Why did you ruin everything?' The CBT Toolkit calls these 'invisible fences' that shock you into avoidance.",
      feel: "Persistent feeling of not being good enough. Wearing a 'mask' to hide the real you. Believing your mistakes define you. Using shame as motivation (which doesn't work). Comparing yourself to an idealized version of everyone else's best qualities.",
      tools: [
        { name: "The House-Yard-Fence (Boundaries with Yourself)", steps: ["Your internal self is a house — only you live there", "Identify the 'ghosts' (shame messages) haunting it", "Respectfully ask them to leave. They'll come back. Ask again.", "Replace shame items with what you actually value", "Start small: one boundary, one emotional cleanup at a time"] },
        { name: "The Defense Attorney (CBT)", steps: ["Your shame thoughts are the Prosecutor's case against you", "Your Defense Attorney gets to respond with evidence too", "Ask: 'If my friend with ADHD told me this happened to them, would I call them a failure?'", "'Is there another way to see this that doesn't end with me being a terrible person?'", "Write the Prosecutor's argument and the Defense Attorney's response side by side — seeing both makes the distortion obvious"] },
        { name: "Labeling vs. Behavioral Explanations", steps: ["Instead of 'I procrastinated because I'm lazy' (label)", "Try 'I procrastinated because the task felt overwhelming and I escaped to the computer' (behavioral)", "Labels feel permanent. Behaviors can be changed.", "This isn't letting yourself off the hook — it's being accurate so you can actually fix it"] }
      ]
    },
    {
      id: "rejection-sensitivity",
      icon: "💔", color: "#C06080", cat: "social",
      title: "Rejection Sensitive Dysphoria (RSD)",
      aka: "The Invisible Fence / The Paper-Thin Skin",
      what: "An intense emotional response to perceived rejection, criticism, or failure. A store clerk's flippant comment can ruin your day. It's not oversensitivity — it's your emotional regulation system failing to buffer normal social friction. RSD makes boundary-setting terrifying because you fear rejection.",
      feel: "Devastation from mild criticism. Reading rejection into neutral interactions. Avoiding situations where you might fail or be judged. People-pleasing to prevent rejection. Physical pain from social slights.",
      tools: [
        { name: "Recognize the RSD Response", steps: ["When you feel sudden, intense emotional pain from a social interaction, pause", "Ask: 'Is this a Level 4/5 emotional response to a Level 1/2 situation?'", "Name it: 'This is my RSD activating, not reality'", "The feeling is real. The interpretation may not be.", "Give yourself 24 hours before taking action on the feeling"] },
        { name: "Perspective Taking (Defense Attorney)", steps: ["What evidence do I actually have that this person is rejecting me?", "Is there another explanation for their behavior?", "What would I tell a friend in this situation?", "In the grand scheme, how significant is this? Will it matter next week?", "Consider: most people are thinking about themselves, not judging you"] }
      ]
    },
    {
      id: "task-initiation",
      icon: "🚀", color: "#4D96FF", cat: "motivation",
      title: "Task Initiation Failure",
      aka: "The Invisible Wall / Stuck on the Launchpad",
      what: "Knowing what to do but being unable to start. The executive function of task initiation requires generating enough emotion/motivation to overcome inertia — and ADHD brains have less dopamine available in the reward networks. The gap between 'not doing' and 'doing' is small but feels enormous.",
      feel: "Staring at the task, frozen. Knowing exactly what needs to happen but feeling paralyzed. Performing the start-sequence in your head but not in reality. The 'Ugh' feeling when facing a task.",
      tools: [
        { name: "Smallest Step of Behavioral Engagement", steps: ["Make the first step SO absurdly small it's ridiculous not to do it", "Not 'write the report' but 'open the document'", "Not 'go to the gym' but 'put on workout shoes'", "Not 'make the phone call' but 'find the person in my contacts'", "You're no longer procrastinating once you take this step", "If you're still stuck, break THAT step into even smaller steps"] },
        { name: "New Behavioral Scripts", steps: ["Identify your old script (e.g., come home → couch → TV → guilt)", "Write a new script step by step (e.g., come home → walk past couch → go to computer → open job site → search for 15 min)", "Rehearse the new script mentally before the moment arrives", "Use If-Then plans for the choice points where old habits pull you away", "The old script isn't 'bad' — it's just not serving your goals"] },
        { name: "Manufacturing 'Enough' Motivation", steps: ["You don't need to feel excited about the task — you need 51%", "Lower the task's demands to match your current energy (limbo: 'how low can you go?')", "Say the first step OUT LOUD — this gets you out of your head", "Make a verbal commitment to someone else for accountability", "Remember: action often precedes motivation, not the other way around"] }
      ]
    },
    {
      id: "overwhelm",
      icon: "🌀", color: "#E8443A", cat: "emotion",
      title: "Overwhelm & Paralysis",
      aka: "The Fire Hose / Too Many Tabs Open",
      what: "When too many demands collide with poor executive functioning, the system overloads. The ADHD brain can't prioritize, sequence, or filter effectively when flooded. The result is shutdown — doing nothing at all despite having everything to do.",
      feel: "Paralysis. Knowing there's too much to do and doing none of it. Crying from the sheer volume. Shutting down and retreating to Blue Quadrant activities. Physical heaviness.",
      tools: [
        { name: "Brain Dump → Triage", steps: ["Write down EVERYTHING in your head. Don't organize, just dump.", "Now circle only 3 things that matter most TODAY", "Put everything else away — it will still be there tomorrow", "Define the first behavioral step for just ONE of the three", "You don't need to solve everything. You need to do one thing."] },
        { name: "The All-or-Nothing Antidote", steps: ["Catch the thought: 'If I can't do it all, why do anything?'", "This is all-or-nothing thinking — a common distortion", "Reframe: 'Doing one thing is infinitely better than doing zero things'", "Any progress counts. Partial completion is not failure.", "Remember: you're comparing yourself to an imaginary standard"] },
        { name: "Body-First Reset", steps: ["When your mind is paralyzed, start with the body", "Stand up. Drink water. Splash cold water on your face.", "Take 5 slow breaths, focusing on the exhale", "Move: walk around the block, stretch, do 10 jumping jacks", "Then come back and pick ONE task. Just one."] }
      ]
    },
    {
      id: "cognitive-distortions",
      icon: "👹", color: "#E8443A", cat: "thinking",
      title: "Cognitive Distortions",
      aka: "The Monsters We Create / Thinking Errors",
      what: "Both books describe how ADHD's emotional dysregulation and executive dysfunction combine to create 'monsters' — distorted thought patterns that feel absolutely real and convincing. These aren't delusions; they're rash conclusions drawn without full evidence that your brain treats as facts.",
      feel: "Catastrophizing small problems. 'Should' statements that set impossible standards. All-or-nothing thinking. Mind-reading what others think of you. Magnifying negatives, minimizing positives.",
      tools: [
        { name: "Identify Your Thinking Errors", steps: ["Magnification/Minimization — making bad things bigger, good things smaller", "All-or-Nothing — 'If it's not perfect, it's a total failure'", "Comparative Thinking — measuring yourself against others' best qualities", "Emotional Reasoning — 'I feel like an idiot, therefore I am one'", "Should Statements — 'I should be able to do this without help'", "Fortune Telling — 'I know this will end badly'", "Labeling — 'I'm lazy' instead of 'I avoided a task because it felt overwhelming'"] },
        { name: "Consult Your Defense Attorney", steps: ["Write down the Prosecutor's case (your negative thought)", "Now write the Defense Attorney's response with actual evidence", "Questions to ask: Would I hold a friend to this standard?", "Is there another way to see this? What evidence am I ignoring?", "How significant is this really? Will it matter in a week?", "What's the worst case? Can I handle that? (Usually yes.)"] },
        { name: "Monster Spray (Dr. Rosier)", steps: ["For anxiety monsters: identify them, name them, and create a 'spray' (calming ritual)", "The ritual can be breathing exercises, grounding techniques, or a physical anchor", "The key insight: you can't kill the monsters, but you can keep them away", "When they come back (they will), spray again. Consistency is the tool."] }
      ]
    },
    {
      id: "energy-depletion",
      icon: "🔋", color: "#F5A623", cat: "executive",
      title: "Energy Depletion",
      aka: "The Dying Battery / Running on Fumes",
      what: "Everyone has limited energy, but ADHD batteries drain faster from activities others find easy. Emails, errands, and basic adulting can consume 50% of your daily battery while costing neurotypicals only 5%. If you don't manage your energy, the battery dies and you crash.",
      feel: "Exhaustion from 'easy' tasks. Crashing hard after social events or work. Needing far more recovery time than others. Feeling depleted by tasks that 'shouldn't' be tiring.",
      tools: [
        { name: "Battery Awareness Practice", steps: ["Throughout the day, check in: 'What's my battery percentage right now?'", "Track what charges you (Green activities) and what drains you", "Before adding a task to your day, ask: 'Can my battery handle this?'", "Schedule recharging activities BETWEEN draining ones — not just at the end of the day"] },
        { name: "Energy Choreography (CBT Approach)", steps: ["Sequence tasks intentionally: hard task → easy task → break → moderate task", "Follow a mentally draining task with administrative or physical tasks", "Protect time for meals, sleep, and movement — these aren't luxury, they're battery maintenance", "Pair unpleasant tasks with pleasant activities: fold laundry while watching TV, exercise with music", "Remember: managing ADHD is an endurance sport. Find your rest on the field."] }
      ]
    },
    {
      id: "poor-boundaries",
      icon: "🏠", color: "#6BCB77", cat: "social",
      title: "Poor Boundaries",
      aka: "The Doormat / People Pleasing",
      what: "ADHD symptoms (impulsivity, RSD, poor self-regulation) make it hard to set and enforce limits. Many people with ADHD didn't learn boundaries growing up. People-pleasing becomes a coping strategy to avoid rejection. Combined with RSD, saying 'no' feels terrifying.",
      feel: "Saying yes when you mean no. Letting others walk over your limits. Overcommitting and then drowning. Difficulty knowing where you end and others begin. Resentment building beneath a 'nice' exterior.",
      tools: [
        { name: "House-Yard-Fence Framework", steps: ["House = your internal self (psyche, values, identity). Only you live here.", "Yard = your personal space (time, energy, social interactions). Invited guests only.", "Fence = the boundary between you and the world. You control the gate.", "Start with ONE physical boundary (bedtime, budget rule, screen-free zone)", "When it becomes habit, add the next one. Don't overhaul everything at once."] },
        { name: "Emotional Boundary Cleanup", steps: ["Identify the 'ghosts' in your house — shame, envy, anxiety that don't belong to you", "Name them, then respectfully ask them to leave", "When they come back (they will), ask again. This is persistence, not failure.", "Stop collecting other people's emotional garbage — you have enough of your own", "Set limits on gossip, blame-shifting, and emotional caretaking of others"] }
      ]
    },
    {
      id: "transition-difficulty",
      icon: "🔀", color: "#A78BFA", cat: "executive",
      title: "Transition Difficulty",
      aka: "The Stuck Switch / Can't Shift Gears",
      what: "Switching from one task, activity, or mindset to another requires executive functions that ADHD impairs. Getting out of bed, leaving the house, switching from work mode to home mode, transitioning between tasks — each one costs extra effort. This isn't laziness; it's a genuine cognitive shifting deficit.",
      feel: "Getting stuck on one activity for too long. Difficulty shifting from leisure to work mode. Stress during daily transitions (morning routine, commute). Feeling 'locked in' to whatever you're currently doing.",
      tools: [
        { name: "Transition Rituals", steps: ["Create a consistent small ritual for common transitions", "Morning: same sequence every day (alarm → feet on floor → bathroom → coffee)", "Work to home: change clothes, take a 5-minute walk, or listen to a specific playlist", "Between tasks: stand up, stretch, take 3 breaths, look at your to-do list, then start the next thing"], hasTimer: true, timerSec: 300 },
        { name: "Leaving Breadcrumbs + Pre-Loading", steps: ["Before stopping a task, write down your next step for when you return", "Before a transition, mentally rehearse the next activity: 'When I get home, I will walk to the computer first'", "Use timers with 5-minute warnings before transitions", "External cues (alarms, visual schedules, sticky notes on doors) reduce the cognitive cost of switching"] }
      ]
    }
  ],

  patterns: [
    {
      icon: "🏎️", color: "#E8443A", title: "The Need-for-Speed Pattern",
      aka: "Red Quadrant Addiction",
      what: "You create tension and crisis to feel alive and productive. Packed schedule, always rushing, adrenaline-fueled. You believe more-is-better and tie self-worth to accomplishments. Your body lives in constant stress response.",
      strategies: [
        "Challenge the false belief: 'I'm only worthy when I accomplish things'",
        "Morning: 15 minutes of breathing and intentional planning (include Yellow AND Blue tasks)",
        "Midday alarm for system check: posture, hydration, jaw tension, basic needs",
        "Evening: 10 minutes appreciating what you DID accomplish — no shaming for what you didn't",
        "Ask: 'Am I doing important things, or just lots of things?'"
      ]
    },
    {
      icon: "🔥", color: "#F5A623", title: "The Playing-with-Fire Pattern",
      aka: "Yellow → Red Escalation",
      what: "You let boring Yellow tasks sit until they become Red emergencies. The small campfire becomes a forest fire. Unlike Need-for-Speed, you don't enjoy the Red — you feel shame and sadness after the scramble. You also deny yourself Green time because you feel you haven't earned it.",
      strategies: [
        "Challenge: 'I work well under pressure' — you're using anxiety as fuel, and it's exhausting",
        "Morning: List 3-5 Yellow tasks. Break the ugliest one into small how-to steps",
        "Commit to 20 minutes on a Yellow task. If no flow after 20 min, switch",
        "Midday: check which Yellow tasks are creeping toward Red. Address them NOW",
        "Evening: Appreciate progress. Allow yourself Green time — you've earned it"
      ]
    },
    {
      icon: "🔁", color: "#4D96FF", title: "Red, Blue, and Back Again",
      aka: "All-or-Nothing Energy",
      what: "Frantic Red productivity for days/weeks, then collapse into Blue for days/weeks. Two speeds: on and off. No middle ground. You miss the sweet moments of life because you're either sprinting or comatose. Your loved ones find the flip-flopping confusing and draining.",
      strategies: [
        "Challenge: 'I can't slow down, there's too much to do' — balance is not optional, it's survival",
        "Morning: include items from ALL four quadrants in your daily plan",
        "Midday: Have you done anything besides Red and Yellow? Add Green or Blue NOW",
        "Evening: End work at a set time. Schedule Green activities with important people",
        "Remember: your all-or-nothing pattern affects your relationships too"
      ]
    },
    {
      icon: "🛋️", color: "#4ECDC4", title: "The Nothin'-but-Blue Pattern",
      aka: "The Avoidance Cocoon",
      what: "You steer clear of anything uncomfortable and shelter in Blue activities. Not procrastination (you have no intention of doing the hard thing). Life feels too complicated, so you stay in your comfortable cocoon of entertainment and busywork. Often rooted in perfectionism: 'If I can't do it perfectly, I won't risk it.'",
      strategies: [
        "Challenge three false beliefs: (1) any task will drain all my energy, (2) if it's not perfect, don't try, (3) if I fail, people won't love me",
        "Face the Blue: identify which Blue activity is your trap. Try 24 hours without it",
        "Set a goal of completing just 3 Yellow tasks today",
        "Yellow-Blue game: 30 min work, 10 min Blue break (with a timer!)",
        "Reward 3 completed Yellow tasks with a longer Blue session or, better yet, a Green activity"
      ]
    }
  ],

  cbtTools: [
    {
      icon: "📋", color: "#4D96FF", title: "The Daily Planning System",
      aka: "Comprehensive To-Do → Daily To-Do → Daily Planner",
      what: "The foundation of the CBT approach. Three interconnected tools that externalize your executive functioning: (1) A master 'brain dump' list of everything, (2) A daily list of 3-5 specific tasks pulled from the master, and (3) A time-blocked planner showing when each task happens.",
      tools: [
        { name: "How to Set Up", steps: ["Keep ONE comprehensive to-do list (paper or digital) — dump everything here", "Each morning, spend 10 minutes (600 seconds!) choosing today's 3-5 priorities", "Define each task in behavioral terms: what exactly will you DO?", "Block time in your planner: start time, end time, specific task", "Include self-care tasks (meals, exercise, breaks) as real appointments", "Review the planner early and often — it's your external brain"], hasTimer: true, timerSec: 600 }
      ]
    },
    {
      icon: "🧱", color: "#6BCB77", title: "Breaking Down Tasks",
      aka: "The Behavioral Recipe",
      what: "Large, vague tasks paralyze the ADHD brain. The solution: break every task into a 'behavioral recipe' — steps so specific that someone else could follow them. Work backwards from the deadline. The goal is to turn 'write the report' into a series of absurdly simple actions.",
      tools: [
        { name: "Step-by-Step Process", steps: ["Identify the task and its deadline", "Write the end point: what does 'done' look like?", "Work backwards: what's the step before the last step? And before that?", "Make each step specific and behavioral (not 'research' but 'search Google for X and read 3 articles')", "Budget the steps across days in your planner", "Define today's smallest first step — make it absurdly simple", "If you're still stuck, break THAT step into smaller steps"] }
      ]
    },
    {
      icon: "⚖️", color: "#8E6FBF", title: "The Defense Attorney",
      aka: "Cognitive Restructuring for ADHD",
      what: "Your negative thoughts are the Prosecutor making a one-sided case against you. A fair trial means your Defense Attorney gets to respond. This isn't positive thinking — it's balanced thinking. You're not dismissing your feelings; you're cross-examining them.",
      tools: [
        { name: "How to Use", steps: ["Catch the automatic thought: 'What am I thinking right now?'", "Write down the Prosecutor's case (your negative interpretation)", "Identify the thinking error(s): magnification? all-or-nothing? labeling?", "Now: what would your Defense Attorney say?", "Key questions: Would I say this to a friend? What evidence am I ignoring? Will this matter in a week?", "Write both sides down — thoughts lose power when they leave your head", "Choose an action based on the balanced view"] }
      ]
    },
    {
      icon: "🎭", color: "#F5A623", title: "The Method Acting Approach",
      aka: "Act 'As If' / Opposite Action",
      what: "When you're stuck in an emotion that's blocking action, act opposite to the emotion. Smile when angry. Say 'Let's DO this!' when you feel paralyzed. It's not about being fake — it's about breaking the emotional-behavioral loop that keeps you stuck. Combined with a defined first step, it's surprisingly effective.",
      tools: [
        { name: "How to Practice", steps: ["Identify the blocking emotion (dread, boredom, anxiety, fatigue)", "Choose an opposite action: clap hands, stand up, say something encouraging aloud", "Define your smallest behavioral step", "Combine: opposite action + first step = momentum", "This gets easier with practice — you're retraining your brain's associations"] }
      ]
    },
    {
      icon: "🏆", color: "#FFD93D", title: "Reward Systems",
      aka: "The Premack Principle / Earning Your Fun",
      what: "Use the psychological principle that you increase the likelihood of doing a less-desired task by following it with a highly desired activity. Transform your escape behaviors from procrastination enablers into positive rewards for task completion.",
      tools: [
        { name: "How to Set Up", steps: ["Identify rewards that genuinely motivate you", "Link them to specific task completions: 'After 30 min of studying → 1 song download'", "Make the reward something you ONLY get for completing that task", "Transform escape behaviors: instead of checking Instagram to avoid work, earn Instagram time by completing work first", "Notice the positive feeling of getting things done — that's intrinsic reward building"], hasTimer: true, timerSec: 1800 }
      ]
    },
    {
      icon: "🤖", color: "#4ECDC4", title: "Outsourcing Coping Skills",
      aka: "Let Technology and People Help",
      what: "You don't have to do everything with willpower. Automate what you can, hire help where possible, and use technology as your external executive function system. This isn't cheating — it's strategic.",
      tools: [
        { name: "Outsourcing Ideas", steps: ["Set up automatic bill payments — remove the task entirely", "Use automatic reminders for everything: appointments, medication, deadlines", "Hire or barter for tasks you consistently struggle with (cleaning, taxes, organizing)", "Use good tools: a planner that works for YOU, apps that serve your brain", "Beware 'fool's gold' — buying productivity tools without using them", "The best tool is the one you'll actually use consistently"] }
      ]
    }
  ],

  quizQuestions: [
    {
      q: "When you have a boring task to do, what usually happens?",
      answers: [
        { text: "I wait until it's a crisis, then power through on adrenaline", scores: { speed: 2, fire: 1 } },
        { text: "I keep putting it off until it becomes an emergency I dread", scores: { fire: 2, blue: 1 } },
        { text: "I ignore it completely and do something fun instead", scores: { blue: 2 } },
        { text: "I alternate between frantic productivity and total shutdown", scores: { redblue: 2, speed: 1 } }
      ]
    },
    {
      q: "How would your closest person describe your energy?",
      answers: [
        { text: "Always on, always busy, never stops", scores: { speed: 2 } },
        { text: "Calm on the surface but quietly panicking about deadlines", scores: { fire: 2 } },
        { text: "Hard to get going, prefers comfort and routine", scores: { blue: 2 } },
        { text: "Unpredictable — either sprinting or crashed on the couch", scores: { redblue: 2 } }
      ]
    },
    {
      q: "When do you feel most productive?",
      answers: [
        { text: "When I have a packed schedule and everything is urgent", scores: { speed: 2, redblue: 1 } },
        { text: "Right before a deadline, in full panic mode", scores: { fire: 2 } },
        { text: "Honestly? I rarely feel productive and that bothers me", scores: { blue: 2 } },
        { text: "In intense bursts, but then I crash hard for days", scores: { redblue: 2 } }
      ]
    },
    {
      q: "How do you feel about Green time (fun, meaningful activities)?",
      answers: [
        { text: "I don't have time for that — too much to do", scores: { speed: 2 } },
        { text: "I feel like I haven't earned it, so I skip it", scores: { fire: 2, blue: 1 } },
        { text: "I do lots of Blue (Netflix, scrolling) but not much Green", scores: { blue: 2 } },
        { text: "Sometimes I binge on fun, then feel guilty and overwork", scores: { redblue: 2 } }
      ]
    },
    {
      q: "What's your relationship with rest?",
      answers: [
        { text: "Rest feels like failure. I should always be doing something", scores: { speed: 2 } },
        { text: "I rest too late — only after I've burned out from the crisis", scores: { fire: 2 } },
        { text: "I rest a lot but it doesn't actually recharge me", scores: { blue: 2, fire: 1 } },
        { text: "I swing between zero rest and total collapse", scores: { redblue: 2 } }
      ]
    },
    {
      q: "When you look at your week, which feels most true?",
      answers: [
        { text: "Every day is packed. I thrive on the rush.", scores: { speed: 2 } },
        { text: "I spent most of the week avoiding one big thing", scores: { fire: 2 } },
        { text: "I didn't do much and I feel bad about it", scores: { blue: 2 } },
        { text: "Some days I was Superman, other days I couldn't get off the couch", scores: { redblue: 2 } }
      ]
    }
  ],

  patternResults: {
    speed: { icon: "🏎️", color: "#E8443A", title: "The Need-for-Speed Pattern", desc: "You run on adrenaline and equate busyness with worth. Your engine is always revving, but you're burning out the transmission.", page: "patterns" },
    fire: { icon: "🔥", color: "#F5A623", title: "The Playing-with-Fire Pattern", desc: "You let small tasks smolder until they're on fire. The panic gets you moving, but the shame afterward is crushing — and you never let yourself rest.", page: "patterns" },
    blue: { icon: "🛋️", color: "#4ECDC4", title: "The Nothin'-but-Blue Pattern", desc: "You've retreated into your comfort cocoon. It's not laziness — it's often perfectionism or fear underneath. The Blue feels safe but it's slowly numbing you.", page: "patterns" },
    redblue: { icon: "🔁", color: "#4D96FF", title: "Red, Blue, and Back Again", desc: "You only have two speeds: everything and nothing. The whiplash is exhausting — for you and everyone around you. The middle gears exist; you just haven't found them yet.", page: "patterns" }
  }

};
