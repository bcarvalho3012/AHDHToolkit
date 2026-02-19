const langEN = {
  heroTitle: "Name Your Beast",
  heroSubtitle: "A complete map of ADHD traits, what they feel like, and the exact tools to manage them.",
  heroSource: "Sources: Your Brain's Not Broken (Rosier) & The Adult ADHD Tool Kit (Ramsay/Rostain)",
  nav: {
    traits: "🧠 Traits & Tools",
    grid: "🟥 Solve-It Grid",
    patterns: "🔁 Patterns",
    cbt: "⚖️ CBT Toolkit",
    naming: "💡 Name Your ADHD",
    favs: "⭐ My Tools"
  },
  footer: "Content synthesized from clinical sources. This is an educational reference, not medical advice.",

  // --- TRAITS (The big list) ---
  traits: [
    {
      id: "emotional-dysregulation",
      icon: "🌊", color: "#FF6B6B", cat: "emotion",
      title: "Emotional Dysregulation",
      aka: "The Angry Neighbor / Flooding",
      what: "Instead of a calm 'butler' (prefrontal cortex) managing your responses, an 'angry neighbor' in the emotional brain reacts first. Emotions hit harder, faster, and last longer.",
      feel: "Overwhelming sadness from minor setbacks. Explosive frustration. Crying when not sad. Embarrassment at your own reaction intensity.",
      tools: [
        { name: "4-7-8 Breathing", steps: ["Inhale 4s, Hold 7s, Exhale 8s", "Repeat 3x to force nervous system reset"] },
        { name: "Name the Intensity", steps: ["Rate emotion 1-10", "Naming creates distance from the feeling"] },
        { name: "Act Opposite", steps: ["If you feel stuck, clap hands", "If angry, force a smile"] }
      ]
    },
    {
      id: "time-blindness",
      icon: "⏰", color: "#F5A623", cat: "executive",
      title: "Time Blindness",
      aka: "Now vs Not Now",
      what: "You only perceive two times: NOW and NOT NOW. Estimating how long things take is nearly impossible.",
      feel: "Shock that 3 hours passed. Chronic lateness. Panic at deadlines.",
      tools: [
        { name: "Time Multiplication", steps: ["Estimate time needed", "Multiply by 3", "That is the real time"] },
        { name: "Analog Clocks", steps: ["Use clocks with hands to see time passing spatially"] },
        { name: "The 10-Minute Rule", steps: ["Commit to just 10 minutes (600 seconds)", "Start timer"] }
      ]
    },
    {
      id: "working-memory",
      icon: "🧩", color: "#4D96FF", cat: "executive",
      title: "Working Memory Leaks",
      aka: "The Leaky Bucket",
      what: "The 'butler' in your brain drops information constantly. You walk into rooms and forget why.",
      feel: "Scattered thoughts. Losing items. Forgetting what you were saying mid-sentence.",
      tools: [
        { name: "Externalize Everything", steps: ["If it's not written down, it doesn't exist", "Use one capture notebook"] },
        { name: "Breadcrumbs", steps: ["When stopping work, write down the exact next step for future you"] }
      ]
    },
    {
        id: "paralysis",
        icon: "❄️", color: "#A78BFA", cat: "executive",
        title: "Task Paralysis",
        aka: "The Frozen State",
        what: "Knowing exactly what to do but being physically unable to start. It's not laziness, it's an executive malfunction.",
        feel: "Screaming internally 'JUST DO IT' while sitting still. Shame. Heavy limbs.",
        tools: [
          { name: "The Absurdly Small Step", steps: ["Don't 'clean kitchen'. Just 'pick up fork'", "Micro-steps break the freeze"] },
          { name: "Body First", steps: ["Stand up. Drink water. Move body to unlock brain."] }
        ]
    }
    // Add other traits here if needed...
  ],

  // --- PATTERNS (These were missing!) ---
  patterns: [
    {
      icon: "🏎️", color: "#E8443A", title: "Need-for-Speed",
      aka: "Red Quadrant Addiction",
      what: "You create tension and crisis to feel alive. You believe more-is-better and tie self-worth to busyness.",
      strategies: ["Challenge belief: 'I am only worthy when productive'", "Set midday system check alarms"]
    },
    {
      icon: "🔥", color: "#F5A623", title: "Playing with Fire",
      aka: "The Procrastination Cycle",
      what: "You let boring tasks sit until they become emergencies. You use panic as fuel.",
      strategies: ["Break tasks into tiny steps before they turn Red", "Forgive yourself for the delay"]
    },
    {
      icon: "🛋️", color: "#4ECDC4", title: "Nothin' but Blue",
      aka: "The Avoidance Cocoon",
      what: "You retreat into comfort (screens, snacks) to avoid the discomfort of tasks.",
      strategies: ["Set a timer for 10 mins of work, then 10 mins of Blue", "Is this recharging or numbing?"]
    },
    {
      icon: "🔁", color: "#4D96FF", title: "All or Nothing",
      aka: "Burnout Cycle",
      what: "Two speeds: 100mph or Coma. You sprint until you crash.",
      strategies: ["Schedule rest BEFORE you crash", "Good enough is good enough"]
    }
  ],

  // --- CBT TOOLS ---
  cbtTools: [
    {
      icon: "⚖️", color: "#8E6FBF", title: "The Defense Attorney",
      what: "Your negative thoughts are a Prosecutor. You need a Defense Attorney to argue back.",
      tools: [
        { name: "Cross Examination", steps: ["Write down the negative thought", "What is the evidence AGAINST this?", "Would I say this to a friend?"] }
      ]
    },
    {
      icon: "🧱", color: "#6BCB77", title: "Behavioral Recipe",
      what: "Breaking vague tasks into physical actions.",
      tools: [
        { name: "Recipe Card", steps: ["Write the task like a cooking recipe", "Step 1 must be physical action"] }
      ]
    }
  ],

  // --- GRID TEXT (Missing!) ---
  grid: {
    red: { title: "🔴 Red: Crisis", desc: "Urgent + Not Fun. High stress, high drain. Avoid living here." },
    yellow: { title: "🟡 Yellow: Grind", desc: "Not Urgent + Not Fun. Boring tasks. The hardest for ADHD." },
    blue: { title: "🔵 Blue: Recharge", desc: "Not Urgent + Fun. Rest, or avoidance? Be careful." },
    green: { title: "🟢 Green: Flow", desc: "Urgent + Fun. Passion projects. Recharges you." }
  },

  // --- NAMING (Missing!) ---
  naming: [
    { icon: "🧝", title: "The Elf", desc: "Mischievous energy that hides keys and distorts time." },
    { icon: "👶", title: "The Toddler", desc: "The part of you that throws tantrums when bored." },
    { icon: "🍫", title: "The Factory", desc: "Like Lucy formatting chocolates—too fast to process." }
  ]
};
