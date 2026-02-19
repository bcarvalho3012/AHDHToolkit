const langEN = {
  // ============ UI STRINGS ============
  ui: {
    heroTitle: "Name Your Beast",
    heroSubtitle: "A complete map of ADHD traits, what they feel like, and the exact tools to manage them — drawn from two leading books on adult ADHD.",
    heroSourceNote: 'Sources: <em>Your Brain\'s Not Broken</em> (Tamara Rosier, PhD) &amp; <em>The Adult ADHD Tool Kit</em> (Ramsay &amp; Rostain)',
    footerText: 'Content synthesized from <em>Your Brain\'s Not Broken</em> by Tamara Rosier, PhD (2021) and <em>The Adult ADHD Tool Kit</em> by J. Russell Ramsay &amp; Anthony L. Rostain (2015). This is an educational reference, not medical advice.',
  },

  // ============ NAVIGATION ============
  nav: {
    traits: "🧠 Traits & Tools",
    grid: "🟥🟨🟦🟩 Solve-It Grid",
    ladder: "🪜 Emotional Ladder",
    patterns: "🔁 Patterns",
    cbt: "⚖️ CBT Toolkit",
    naming: "💡 Name Your ADHD",
    quiz: "🔍 Which Pattern?",
    myday: "📋 My Day",
    favs: "⭐ My Tools",
  },

  // ============ SOS MODAL ============
  sos: {
    fabLabel: "I'm struggling right now",
    fabAriaLabel: "I need help right now",
    title: "What's happening right now?",
    subtitle: "No judgment. Pick the closest match and I'll give you one thing to do — just one.",
    backButton: "← Back to options",
    breatheWord: "Breathe",
    options: [
      { id: "spiraling", emoji: "🌀", label: "Spiraling" },
      { id: "paralyzed", emoji: "🧊", label: "Frozen / Can't start" },
      { id: "avoiding", emoji: "🛋️", label: "Avoiding everything" },
      { id: "overwhelmed", emoji: "🔥", label: "Overwhelmed" },
      { id: "emotional", emoji: "🌊", label: "Big emotions" },
      { id: "shame", emoji: "😔", label: "Shame spiral" },
    ],
    states: {
      spiraling: {
        title: "🌀 You're spiraling. Let's slow the spin.",
        color: "#E8443A",
        breathText: "Watch the circle. In when it grows. Out when it shrinks. That's all.",
        steps: [
          "<strong>Drop everything.</strong> Put your phone face-down. Close the tabs. Just for 2 minutes.",
          "<strong>5-4-3-2-1 grounding:</strong> Name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste.",
          "<strong>Pick ONE thing</strong> — the smallest, easiest task you can see. Do only that. Nothing else exists right now.",
        ],
      },
      paralyzed: {
        title: "🧊 You're frozen. Let's thaw one inch.",
        color: "#4D96FF",
        steps: [
          "<strong>Wiggle your toes.</strong> Seriously. Move one body part. Break the freeze physically.",
          "<strong>Set a 2-minute timer.</strong> You only have to do ANYTHING for 2 minutes. That's it.",
          "<strong>The Ugly First Draft:</strong> Do the task badly on purpose. Spell things wrong. Make it ugly. Perfectionism is the freeze — mess it up to break free.",
          "<strong>Say out loud:</strong> 'I'm frozen and that's okay. I'll just do one tiny thing.'",
        ],
      },
      avoiding: {
        title: "🛋️ You're hiding in the Blue. No judgment — let's nudge.",
        color: "#F5A623",
        steps: [
          "<strong>Name it:</strong> Say 'I'm avoiding because...' — just naming the feeling reduces its power.",
          "<strong>Pair it:</strong> Do the avoided task WITH something pleasant — music, a nice drink, a cozy spot.",
          "<strong>Shrink it:</strong> What's the tiniest possible version of this task? Do only that. 'Reply to email' becomes 'Open the email.'",
          "<strong>Bribe yourself:</strong> 'After 10 minutes of this, I get [reward].' Set a timer and mean it.",
        ],
      },
      overwhelmed: {
        title: "🔥 Too much. Way too much. Let's put out one fire.",
        color: "#E8443A",
        steps: [
          "<strong>Brain dump NOW:</strong> Grab paper or open notes. Write every single thing in your head. Don't organize — just dump.",
          "<strong>Circle ONE thing.</strong> The one that would make tomorrow slightly less terrible. Just one.",
          "<strong>What's the first physical action?</strong> Not 'do taxes' — 'open the folder.' Not 'clean house' — 'pick up that cup.'",
          "<strong>Everything else can wait.</strong> It was waiting before too. Give yourself permission to ignore it for now.",
        ],
      },
      emotional: {
        title: "🌊 Big feelings are crashing in. Let's ride the wave.",
        color: "#FF6B6B",
        breathText: "4 seconds in... 7 seconds hold... 8 seconds out. This activates your body's brake pedal.",
        steps: [
          "<strong>Rate it 1-10.</strong> 'Right now I'm at a [number].' Just naming the intensity creates distance.",
          "<strong>This will pass.</strong> Emotions are waves — they peak and they recede. You've survived every wave so far.",
          "<strong>Don't make decisions right now.</strong> Your emotional brain is driving. Let it pass before you respond, send, or decide anything.",
          "<strong>Move your body:</strong> Walk, stretch, splash cold water. Emotion is physical — move it through your body.",
        ],
      },
      shame: {
        title: "😔 Shame is loud right now. It's lying to you.",
        color: "#8E6FBF",
        steps: [
          "<strong>Shame says you ARE broken.</strong> The truth: you HAVE a brain that works differently. That's not the same thing.",
          "<strong>Would you say this to a friend?</strong> Whatever you're telling yourself — would you say it to someone you love? Then don't say it to yourself.",
          "<strong>Name one thing you did today.</strong> Anything. Got out of bed? That counts. Opened this app? That counts. You're trying, and that matters.",
          "<strong>This is a bad moment, not a bad life.</strong> Zoom out. Yesterday was different. Tomorrow will be too.",
        ],
      },
    },
  },

  // ============ SECTION PAGES ============
  pages: {
    traits: {
      title: "ADHD Traits → Tools Map",
      desc: "Click any trait to reveal what it is, how it feels, and step-by-step tools to manage it. Hit ⭐ on any tool to save it to your personal toolkit.",
      searchPlaceholder: "Search traits, feelings, or tools…",
    },
    grid: {
      title: "The Solve-It Grid",
      desc: 'Dr. Rosier\'s framework for understanding how you categorize tasks based on two axes: <strong>Fun vs. Not Fun</strong> and <strong>Emotionally Stimulating vs. Not Stimulating</strong>. Understanding where a task sits on this grid helps you choose the right strategy.',
    },
    ladder: {
      title: "The Emotional Health Ladder",
      desc: 'Created by Rosier &amp; Gott, this 5-level framework helps you see where you are emotionally so you can choose what to do next. You naturally move up and down daily. The goal isn\'t perfection — it\'s awareness.',
      checkinTitle: "📍 Where are you right now?",
      checkinSubtitle: "Tap a level to log today's check-in. Tracking helps you spot patterns over time.",
      historyTitle: "Last 14 days",
      levels: [
        "☀️ 1 — Present",
        "🌤️ 2 — Attending",
        "⛅ 3 — Autopilot",
        "🌧️ 4 — Survival",
        "🌩️ 5 — Delusional",
      ],
    },
    patterns: {
      title: "Predictable Patterns",
      desc: 'Dr. Rosier identified these common energy patterns that keep us stuck. Recognizing your pattern is the first step to breaking it.',
      quizLink: "Which Pattern?",
      quizPrompt: "(Not sure which one you are? Try the ",
      quizPromptEnd: " quiz.)",
    },
    cbt: {
      title: "The CBT Toolkit",
      desc: "From Ramsay &amp; Rostain's research-backed cognitive behavioral approach. These are the specific, teachable techniques for managing ADHD day-to-day.",
    },
    naming: {
      title: "Name Your ADHD",
      desc: "Dr. Rosier's powerful concept: creating a metaphor for your ADHD helps you externalize it, understand it, and develop strategies. The metaphor you choose literally changes how you think about solutions.",
      whyTitle: "🔬 Why Naming Works (The Science)",
      whyText: 'Research shows metaphors change thinking at an unconscious level. In one study, people who read about crime described as a <em>"beast"</em> suggested control strategies (more police, stricter penalties). Those who read about crime as a <em>"disease"</em> suggested treatment strategies (addressing root causes). The metaphor you use for your ADHD shapes the solutions you\'ll gravitate toward.',
    },
    quiz: {
      title: "Which Pattern Am I?",
      desc: "Answer 6 quick questions to discover your dominant ADHD energy pattern and get targeted strategies. There's no wrong answer — pick what resonates most.",
    },
    myday: {
      title: "My Day",
      desc: 'The Solve-It Grid in action. Dump your tasks, color them, and watch your energy balance. Resets daily — no guilt from yesterday. <span style="color:#6BCB77">Your tasks are saved in this browser.</span>',
      brainDumpTitle: "🧠 Brain Dump",
      brainDumpSubtitle: "Get it all out. Don't organize — just type and add. Then color each task by quadrant.",
      inputPlaceholder: "What's on your mind? Add a task…",
      addBtn: "+ Add",
      carryForwardBtn: "📦 Carry forward unfinished",
      clearDayBtn: "🗑️ Fresh start",
      storageNote: "Your tasks are saved in this browser on this device.",
      confirmClear: "Start fresh? This will clear all of today's tasks.",
      alertNoUnfinished: "No unfinished tasks from yesterday!",
      emptyState: "Your brain dump is empty. Add some tasks above — don't think, just type.",
    },
    favs: {
      title: "⭐ My Tools",
      desc: 'Your personal toolkit — the strategies you\'ve saved from across all sections. These are the ones that work for <em>you</em>.',
      emptyState: "No tools saved yet. Browse the Traits & Tools or CBT Toolkit tabs and tap the ✩ star on any tool card to save it here.",
    },
  },

  // ============ LABELS & MISC ============
  labels: {
    what: "What It Is",
    feel: "How It Feels",
    tool: "Tools to Manage It",
    how: "How to Use It",
    tapToStart: "— tap to start",
    doneButton: "Done!",
    seeAllPatterns: "See all patterns →",
    retakeQuiz: "Retake quiz",
    filterAll: "All",
    filterAttention: "Attention",
    filterEmotion: "Emotion",
    filterExecutive: "Executive Function",
    filterMotivation: "Motivation",
    filterThinking: "Thinking",
    filterSocial: "Social",
  },

  // ============ ENERGY / MY DAY ============
  energy: {
    meterTitle: "⚡ Energy Balance",
    red: "Red — urgent/stressful",
    yellow: "Yellow — boring but needed",
    blue: "Blue — chill/recharge",
    green: "Green — fun & meaningful",
    legendRed: "Red (drains fast)",
    legendYellow: "Yellow (slow drain)",
    legendBlue: "Blue (slow recharge)",
    legendGreen: "Green (fast recharge)",
    statTasks: "Tasks",
    statDone: "Done",
    statStreak: "Day streak",
    colorPrompt: "Color your tasks to see the energy balance",
    allDrain: '⚠️ <strong>All drain, no recharge.</strong> Your battery will hit zero. Add at least one Green or Blue activity — you need fuel, not just tasks.',
    heavyRed: '🔴 <strong>Heavy Red day.</strong> That\'s a lot of adrenaline. Can any of these become Yellow by breaking them into smaller steps? Your body can\'t sustain this.',
    yellowMarathon: '🟡 <strong>Yellow marathon.</strong> Boring tasks are a slow drain — schedule a Green reward between them or pair them with something pleasant (music, a drink, a podcast).',
    lotsBlue: '🔵 <strong>Lots of Blue.</strong> Ask yourself: is this recharging you or numbing you? Try swapping one Blue for a Green — it recharges faster and you\'ll feel better after.',
    niceBalance: '✅ <strong>Nice balance.</strong> You\'ve got drain and recharge mixed in. This is sustainable. Remember to do the Green — don\'t skip it because you feel you haven\'t earned it.',
    greenOnBoard: '🟢 <strong>Green on the board.</strong> Good. Make sure it actually happens — it\'s the first thing that gets sacrificed when the day gets busy, and it shouldn\'t be.',
  },

  // ============ TRAITS DATA ============
  traits: [
    {
      id: "emotional-dysregulation",
      icon: "🌊", color: "#FF6B6B", cat: "emotion",
      title: "Emotional Dysregulation",
      aka: "The Angry Neighbor / Big Emotions / Flooding",
      what: "Instead of a calm 'butler' (prefrontal cortex) managing your responses, people with ADHD have an 'angry neighbor' in the emotional centers of the brain who reacts first. Emotions hit harder, faster, and last longer than expected. A store clerk's comment can ruin your whole day.",
      feel: "Overwhelming sadness from minor setbacks. Explosive frustration over small obstacles. Crying when you don't feel sad. Emotions that feel disproportionate to the situation. Embarrassment at the strength of your own reactions.",
      tools: [
        {
          name: "4-7-8 Breathing",
          steps: ["Inhale slowly through your nose for 4 seconds", "Hold your breath for 7 seconds", "Exhale slowly through your mouth for 8 seconds", "Repeat 3-4 times. This activates your parasympathetic nervous system and interrupts the fight-or-flight cascade"],
          hasTimer: true, timerSec: 19,
        },
        {
          name: "Name the Intensity (1-10 Scale)",
          steps: ["When emotion floods in, pause and rate it: 'This is a 7 right now'", "Naming it creates distance — you're observing the emotion instead of being swallowed by it", "Watch it come down. Emotions are waves, not permanent states", "Remind yourself: the emotion is real, but it's not the whole picture"],
        },
        {
          name: "Emotional Ladder Check-In",
          steps: ["Ask: What level am I on right now? (1=Calm, 3=Autopilot, 5=Delusional)", "If you're at Level 4-5, don't try to solve anything — just stabilize", "One slow breath. Name what you feel. Don't act on it yet", "Goal: get back to Level 3 first, then Level 2"],
        },
        {
          name: "Method Acting (Act 'As If')",
          steps: ["From the CBT Toolkit: act opposite to your current emotion", "Smile if you feel angry. Clap your hands and say 'OK, let's go' if you feel stuck", "This isn't fake — it's priming your brain for a different response", "Combined with a defined first step, it breaks the emotional paralysis loop"],
        },
      ],
    },
    {
      id: "time-blindness",
      icon: "⏰", color: "#F5A623", cat: "executive",
      title: "Time Blindness",
      aka: "The Broken Clock / Now vs. Not Now",
      what: "People with ADHD don't experience time the way neurotypicals do. There's essentially only two time zones: NOW and NOT NOW. Time warps — sometimes it flies, sometimes it crawls. Estimating how long things take is nearly impossible. You're perpetually late or too early.",
      feel: "Shocked that 3 hours passed. Chronic lateness despite trying. Panic when deadlines appear 'suddenly.' Feeling like time is slippery and uncontrollable. Guilt about always running behind.",
      tools: [
        {
          name: "External Time Anchors",
          steps: ["Use analog clocks (the visual sweep of hands shows time passing spatially)", "Set multiple alarms: warning alarm, transition alarm, 'leave NOW' alarm", "Use visual timers (Time Timer, hourglass, or a pig-shaped kitchen timer)", "Place clocks in every room — make time visible"],
        },
        {
          name: "Time Estimation Training",
          steps: ["Before starting a task, write down how long you think it will take", "Set a timer and do the task", "Compare your estimate to reality", "Dr. Rosier's rule: multiply your estimate by 3 — that's closer to reality", "Over time, this builds a more accurate internal clock"],
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
      title: "The Rest → Crash Pattern",
      aka: "The Couch Vortex",
      what: "You tell yourself you'll 'rest first, then do things,' but the rest never ends. Scrolling, napping, or zoning out becomes the whole day. You're not lazy — your brain is stuck in low-stimulation mode and can't generate the activation energy to switch gears.",
      feel: "Guilt about 'wasting the day.' Feeling like rest should be enough to recharge but it never is. Watching time disappear while doing nothing productive. Promising yourself 'just 5 more minutes' for hours.",
      tools: [
        { name: "The 2-Minute Launchpad", steps: ["Set a timer for just 2 minutes", "Do ANY tiny task: fold one shirt, send one text, wash one dish", "The goal isn't completion — it's activation. Motion creates momentum", "After 2 minutes, you can stop guilt-free. Most people keep going."] },
        { name: "Pair Rest with Movement", steps: ["Real rest isn't always stillness — sometimes it's gentle movement", "Walk around the block while listening to a podcast", "Stretch on the floor while watching your show", "This keeps dopamine flowing without requiring 'work'"] },
      ],
    },
    {
      id: "hyperfocus-burnout",
      icon: "🔥", color: "#E8443A",
      title: "The Hyperfocus → Burnout Pattern",
      aka: "The Sprint & Crash",
      what: "You discover something interesting and dive in completely — 8 hours straight without food, water, or breaks. You're incredibly productive... until you crash completely. The next day you can barely function. This cycle repeats endlessly.",
      feel: "Euphoria during the hyperfocus. Physical exhaustion after. Skipping meals, ignoring messages, losing track of time. Feeling like you can only work at 100% or 0% with nothing in between.",
      tools: [
        { name: "The Pomodoro Guardrail", steps: ["Set a timer for 25 minutes of focused work", "When it rings, STOP — even if you're in flow", "Take a 5-minute break: stand, stretch, drink water", "After 4 rounds, take a 15-30 minute real break", "This is a guardrail, not a productivity hack — it prevents the crash"] },
        { name: "The Body Check Alarm", steps: ["Set a recurring alarm every 90 minutes", "When it goes off, check: Am I hungry? Thirsty? Need the bathroom?", "ADHD hyperfocus suppresses body signals — you literally can't feel them", "Eat, drink, and move before going back in"] },
      ],
    },
    {
      id: "anxiety-avoidance",
      icon: "😰", color: "#F5A623",
      title: "The Anxiety → Avoidance Pattern",
      aka: "The Worry Wall",
      what: "A task feels scary or uncertain, so you avoid it. The avoidance creates more anxiety because now it's overdue AND scary. So you avoid harder. The task grows into a monster in your mind, far bigger than it actually is.",
      feel: "Dread when thinking about the task. Physical tension in your chest or stomach. Elaborate justifications for why 'tomorrow' is better. The task occupying mental space 24/7 while you do everything except it.",
      tools: [
        { name: "The 'Worst Case' Reality Check", steps: ["Write down the absolute worst thing that could happen if you do the task", "Now write what will ACTUALLY happen (it's almost always less dramatic)", "Ask: what's the cost of NOT doing it for another week?", "Often the avoidance costs more than the task itself"] },
        { name: "Shrink the Task", steps: ["What's the tiniest possible version of this task?", "'Do taxes' → 'Find last year's tax folder'", "'Clean the house' → 'Clear the kitchen counter'", "'Reply to that email' → 'Open the email'", "Make the first step so small it feels almost silly — that's the point"] },
      ],
    },
    {
      id: "people-pleasing-resentment",
      icon: "🎭", color: "#8E6FBF",
      title: "The People-Pleasing → Resentment Pattern",
      aka: "The Yes Trap",
      what: "You say yes to everything because ADHD impulsivity makes it hard to pause and think about your capacity. You also crave the dopamine hit of someone being pleased with you. Then you're overcommitted, exhausted, and resentful — but you feel too guilty to back out.",
      feel: "Saying yes before thinking. Immediate regret after agreeing. Resentment building toward people who 'keep asking.' Feeling like everyone else's needs matter more than yours. Burnout from overcommitting.",
      tools: [
        { name: "The 24-Hour Rule", steps: ["Never say yes immediately to any new request", "Say: 'Let me check my schedule and get back to you'", "This creates a buffer for your impulsive 'yes' to cool down", "After 24 hours, check your actual capacity before responding"] },
        { name: "The Resentment Radar", steps: ["Before saying yes, ask: 'Will I resent this in a week?'", "If the answer is yes or maybe — it's a no", "Practice: 'I'd love to help but I can't this time'", "Remember: every yes to someone else is a no to something in your life"] },
      ],
    },
  ],

  // ============ CBT TOOLS DATA ============
  cbtTools: [
    {
      id: "cbt-thought-record",
      icon: "📝", color: "#4ECDC4",
      title: "The Thought Record",
      aka: "Catch It, Check It, Change It",
      what: "A structured way to challenge the automatic negative thoughts that ADHD brains generate constantly. Instead of believing every thought, you learn to catch distortions and reframe them with evidence.",
      feel: "The inner critic says 'You always fail' — this tool helps you talk back with facts.",
      tools: [
        { name: "3-Column Thought Record", steps: ["Write the automatic thought: 'I'm going to fail this'", "List the evidence FOR it (usually feelings, not facts)", "List the evidence AGAINST it (times you succeeded, skills you have)", "Write a balanced thought: 'This is hard, but I've done hard things before'"] },
      ],
    },
    {
      id: "cbt-implementation-intentions",
      icon: "🎯", color: "#6BCB77",
      title: "Implementation Intentions",
      aka: "If-Then Plans / When-Then Plans",
      what: "Instead of relying on motivation or memory, you create specific if-then plans that automate behavior. Research shows these double the likelihood of following through — they essentially pre-program your response.",
      feel: "Like having a GPS for your behavior instead of trying to navigate by feel.",
      tools: [
        { name: "If-Then Planning", steps: ["Write: 'WHEN [situation], THEN I will [specific action]'", "Example: 'WHEN I sit at my desk, THEN I will open my task list first'", "Example: 'WHEN I feel the urge to scroll, THEN I will set a 5-min timer'", "Be specific about the trigger AND the action — vague plans don't work", "Post these where you'll see them. Repeat them out loud."] },
      ],
    },
    {
      id: "cbt-behavioral-experiments",
      icon: "🧪", color: "#F5A623",
      title: "Behavioral Experiments",
      aka: "Test It, Don't Believe It",
      what: "Instead of arguing with anxious predictions, you test them. Your ADHD brain makes catastrophic predictions ('If I speak up, everyone will judge me'). A behavioral experiment says 'Let's find out.'",
      feel: "Scary at first, but liberating when you discover your predictions were wrong.",
      tools: [
        { name: "The Prediction Test", steps: ["Write your prediction: 'If I do X, then Y will happen'", "Rate your confidence (0-100%)", "Do the thing. Observe what actually happens", "Compare: was your prediction accurate?", "ADHD brains overestimate danger and underestimate coping ability — this proves it"] },
      ],
    },
    {
      id: "cbt-scaffolding",
      icon: "🏗️", color: "#4D96FF",
      title: "Environmental Scaffolding",
      aka: "Build the Ramp, Don't Will Yourself Up the Stairs",
      what: "Instead of trying to change your behavior through willpower (which is limited and unreliable with ADHD), you change your environment to make the desired behavior easier and the undesired behavior harder.",
      feel: "Like setting up your life so you fall into good habits instead of fighting for them.",
      tools: [
        { name: "Friction Design", steps: ["Make good behaviors EASY: put vitamins next to coffee, gym bag by the door", "Make bad behaviors HARD: delete social media apps, put phone in another room", "Use visual cues: sticky notes, open textbooks, visible to-do lists", "Design your space for the person you ACTUALLY are, not who you wish you were"] },
      ],
    },
  ],

  // ============ QUIZ DATA ============
  quizQuestions: [
    {
      question: "When you have a free Saturday with nothing planned, you typically...",
      answers: [
        { text: "End up on the couch scrolling for hours, meaning to get up 'soon'", pattern: "rest-crash" },
        { text: "Dive into a project and lose the entire day without eating", pattern: "hyperfocus-burnout" },
        { text: "Feel anxious about all the things you SHOULD be doing", pattern: "anxiety-avoidance" },
        { text: "Say yes to every social invite and end up exhausted", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Your biggest energy problem is...",
      answers: [
        { text: "I can never get started — inertia is my enemy", pattern: "rest-crash" },
        { text: "I go too hard and then crash completely", pattern: "hyperfocus-burnout" },
        { text: "Worry uses up all my energy before I even begin", pattern: "anxiety-avoidance" },
        { text: "Other people's needs drain me before I get to mine", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "When someone asks how you're doing, you often think...",
      answers: [
        { text: "'Tired, but I don't know why since I didn't DO anything'", pattern: "rest-crash" },
        { text: "'Exhausted — I worked 12 hours straight yesterday'", pattern: "hyperfocus-burnout" },
        { text: "'Stressed about everything I'm behind on'", pattern: "anxiety-avoidance" },
        { text: "'Fine' (while internally resentful about all your obligations)", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "Your phone screen time report would probably show...",
      answers: [
        { text: "Hours of scrolling social media or watching videos", pattern: "rest-crash" },
        { text: "Intense bursts on one app/topic, then nothing for days", pattern: "hyperfocus-burnout" },
        { text: "Lots of opening and closing the same apps anxiously", pattern: "anxiety-avoidance" },
        { text: "Constant messaging and responding to other people", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "The emotion you feel MOST often is...",
      answers: [
        { text: "Guilt about being 'lazy' even though you're exhausted", pattern: "rest-crash" },
        { text: "Frustration that you can't sustain your productive bursts", pattern: "hyperfocus-burnout" },
        { text: "Dread about tasks that keep growing in your mind", pattern: "anxiety-avoidance" },
        { text: "Resentment toward people who 'keep asking' for things", pattern: "people-pleasing-resentment" },
      ],
    },
    {
      question: "If you could fix ONE thing about your daily life, it would be...",
      answers: [
        { text: "Being able to actually START things when I want to", pattern: "rest-crash" },
        { text: "Finding a sustainable pace instead of all-or-nothing", pattern: "hyperfocus-burnout" },
        { text: "Stopping the worry spiral that prevents action", pattern: "anxiety-avoidance" },
        { text: "Learning to say no without feeling terrible about it", pattern: "people-pleasing-resentment" },
      ],
    },
  ],

  // ============ QUIZ RESULTS ============
  patternResults: {
    "rest-crash": {
      icon: "💤",
      title: "The Rest → Crash Pattern",
      description: "Your brain gets stuck in low-stimulation mode. Rest doesn't actually recharge you — it becomes a vortex. The key isn't more rest, it's the RIGHT kind of activation.",
      strategies: [
        "Start with the tiniest action — fold one shirt, wash one dish",
        "Use a 2-minute timer: you only commit to 2 minutes of anything",
        "Pair rest with gentle movement (walk + podcast, stretch + show)",
        "Schedule ONE activation event each day — something you actually enjoy",
        "Remember: motion creates motivation, not the other way around",
      ],
    },
    "hyperfocus-burnout": {
      icon: "🔥",
      title: "The Hyperfocus → Burnout Pattern",
      description: "You're incredibly productive in bursts but crash hard afterward. Your brain loves intensity but can't sustain it. The goal isn't to stop hyperfocusing — it's to add guardrails.",
      strategies: [
        "Use Pomodoro timers (25 min on, 5 min off) as guardrails, not productivity hacks",
        "Set body-check alarms every 90 minutes: Am I hungry? Thirsty?",
        "Plan your crash: schedule recovery time AFTER known hyperfocus sessions",
        "Keep a 'stopping point' list — pre-decide where you'll pause",
        "Remember: sustainable 60% beats brilliant-then-broken 100%",
      ],
    },
    "anxiety-avoidance": {
      icon: "😰",
      title: "The Anxiety → Avoidance Pattern",
      description: "Tasks feel scarier the longer you avoid them, creating a doom loop. Your brain overestimates the difficulty and underestimates your ability to cope. The task is almost never as bad as the anxiety about it.",
      strategies: [
        "Do the 'worst case' reality check — write it down, then write what will ACTUALLY happen",
        "Shrink the task: 'Do taxes' → 'Find last year's folder'",
        "Set a timer for 10 minutes — you can survive anything for 10 minutes",
        "The cost of avoidance is ALWAYS higher than the cost of doing the task",
        "After you start, notice: is this actually as bad as you imagined?",
      ],
    },
    "people-pleasing-resentment": {
      icon: "🎭",
      title: "The People-Pleasing → Resentment Pattern",
      description: "Your impulsive 'yes' and need for approval keep you overcommitted. You give until you're empty, then feel resentful. Learning to say no isn't selfish — it's survival.",
      strategies: [
        "Use the 24-hour rule: never say yes immediately to any request",
        "Script it: 'Let me check my schedule and get back to you'",
        "The Resentment Radar: 'Will I resent this in a week? Then it's a no.'",
        "Every yes to someone else is a no to something in your life",
        "Practice: 'I'd love to help but I can't this time' — no explanation needed",
      ],
    },
  },

  // ============ SOLVE-IT GRID DATA ============
  solveItGrid: {
    quadrants: [
      {
        class: "q-red",
        title: "🔴 Red Zone — Not Fun + Stimulating",
        subtitle: "Urgent, stressful tasks that trigger fight-or-flight",
        examples: ["Overdue bills", "Conflict conversations", "Last-minute deadlines", "Tax filing"],
        strategy: "These tasks activate adrenaline. Break them into tiny steps to reduce the overwhelm. Set a timer and do just 10 minutes.",
      },
      {
        class: "q-yellow",
        title: "🟡 Yellow Zone — Not Fun + Not Stimulating",
        subtitle: "Boring, necessary tasks that drain slowly",
        examples: ["Data entry", "Cleaning", "Routine emails", "Paperwork"],
        strategy: "Pair with something pleasant: music, a podcast, a nice drink. Or use body-doubling — do it alongside someone else.",
      },
      {
        class: "q-blue",
        title: "🔵 Blue Zone — Fun + Not Stimulating",
        subtitle: "Comfortable, easy activities — the 'couch zone'",
        examples: ["Scrolling social media", "Watching TV", "Casual browsing", "Napping"],
        strategy: "Not all Blue is bad — you need recovery. But ask: is this recharging me or numbing me? Swap some Blue for Green.",
      },
      {
        class: "q-green",
        title: "🟢 Green Zone — Fun + Stimulating",
        subtitle: "Energizing activities that genuinely recharge you",
        examples: ["Creative projects", "Exercise", "Learning something new", "Socializing with people you love"],
        strategy: "This is your fuel. Schedule it FIRST, not as a reward. You need Green to have energy for Red and Yellow.",
      },
    ],
    toolTitle: "🎯 How to Use the Grid",
    toolSteps: [
      "Look at your task list and mentally color each task by quadrant",
      "If it's all Red and Yellow, you'll burn out — add Green",
      "If it's all Blue, you're avoiding — swap one Blue for one Green",
      "Aim for a mix: tackle Red/Yellow WITH Green rewards built in",
      "Use the 'My Day' tab to actually color and track your daily balance",
    ],
  },

  // ============ NAMING METAPHORS ============
  namingMetaphors: [
    {
      emoji: "🐉",
      title: "The Dragon",
      desc: "Powerful, unpredictable, breathes fire. You can't kill it — but you can learn to ride it.",
      strategy: "If your ADHD is a dragon, solutions involve: harnessing its power, building fireproof structures, and learning when it's about to breathe fire.",
    },
    {
      emoji: "🌊",
      title: "The Ocean",
      desc: "Sometimes calm, sometimes stormy. Has powerful currents. Beautiful but dangerous if you don't respect it.",
      strategy: "If your ADHD is an ocean, solutions involve: learning to swim, reading the tides, building a good boat, and knowing when to stay on shore.",
    },
    {
      emoji: "🐒",
      title: "The Monkey Mind",
      desc: "Swinging from branch to branch. Curious, energetic, easily distracted by shiny things.",
      strategy: "If your ADHD is a monkey, solutions involve: creating interesting paths to follow, using bananas (rewards) strategically, and building a playground that goes where you need.",
    },
    {
      emoji: "⚡",
      title: "The Lightning Storm",
      desc: "Bursts of brilliant energy followed by darkness. Unpredictable but incredibly powerful.",
      strategy: "If your ADHD is a storm, solutions involve: building lightning rods (capture systems), weatherproofing your life, and learning to use the electricity.",
    },
    {
      emoji: "🏎️",
      title: "The Race Car",
      desc: "Incredibly fast engine, but the brakes don't always work. Built for speed, not for parking lots.",
      strategy: "If your ADHD is a race car, solutions involve: finding the right track, upgrading the brakes, and accepting you weren't built for slow roads.",
    },
    {
      emoji: "🌋",
      title: "The Volcano",
      desc: "Pressure builds silently, then erupts. Incredibly creative and destructive in equal measure.",
      strategy: "If your ADHD is a volcano, solutions involve: pressure release valves, monitoring the warning signs, and channeling the lava productively.",
    },
  ],

  // ============ LADDER DATA ============
  ladderLevels: [
    {
      level: 1,
      title: "Level 1 — Present & Thriving",
      color: "#6BCB77",
      emoji: "☀️",
      description: "You're grounded, aware, and making conscious choices. You can observe your emotions without being swept away. This doesn't mean everything is perfect — it means you're handling it.",
      signs: ["Making conscious decisions", "Able to pause before reacting", "Aware of your emotions without drowning in them", "Can prioritize and follow through"],
    },
    {
      level: 2,
      title: "Level 2 — Attending & Managing",
      color: "#4ECDC4",
      emoji: "🌤️",
      description: "You're mostly functional but efforting more. Things take more energy than usual. You can still make good decisions but you notice you're working harder to stay on track.",
      signs: ["Functioning but tired", "Need more reminders and systems", "Emotions are manageable but present", "Can complete tasks with extra effort"],
    },
    {
      level: 3,
      title: "Level 3 — Autopilot",
      color: "#F5A623",
      emoji: "⛅",
      description: "Going through the motions. Not terrible, but not really present either. You're surviving but not engaging. This is where most people with ADHD spend much of their time.",
      signs: ["Going through motions", "Scrolling more than usual", "Eating for comfort, not hunger", "Avoiding hard conversations", "Low motivation, high inertia"],
    },
    {
      level: 4,
      title: "Level 4 — Survival Mode",
      color: "#E8443A",
      emoji: "🌧️",
      description: "Everything feels hard. Basic tasks feel monumental. You're reactive, not proactive. Emotions are running the show and your prefrontal cortex has basically clocked out.",
      signs: ["Everything feels overwhelming", "Snapping at people", "Can't start or finish anything", "Physical symptoms: headaches, tension, exhaustion", "Making impulsive decisions"],
    },
    {
      level: 5,
      title: "Level 5 — Crisis / Delusional",
      color: "#C06080",
      emoji: "🌩️",
      description: "Your perception is distorted. You believe the shame stories ('I'm broken,' 'I'll never change'). You can't see solutions and everything feels permanent. This is temporary, even though it doesn't feel like it.",
      signs: ["Believing you're fundamentally broken", "Can't see any solutions", "Everything feels permanent and hopeless", "Isolating from everyone", "May need professional support at this level"],
    },
  ],
};
