export const site = {
  name: "The Regular AI Guy",
  url: "https://theregularaiguy.com",
  description:
    "An upcoming podcast with Mark Abplanalp about using AI in everyday life. Meals, busy weeks, paperwork, trips, and work.",
  host: "Mark Abplanalp",
};
export const topicGroups = [
  {
    id: "life",
    name: "Everyday life",
    icon: "home",
    description:
      "Dinner, a packed week, or something you just want sorted out.",
    guide: "first-useful-prompt",
    ideas: [
      {
        title: "What could AI take off your plate?",
        detail:
          "Everyday requests, from dinner plans to making sense of a confusing letter.",
        tag: "Everyday help",
      },
      {
        title: "Can AI help with a busy week?",
        detail:
          "Family plans, appointments, and figuring out what needs to happen next.",
        tag: "Getting organized",
      },
    ],
  },
  {
    id: "work",
    name: "Work & business",
    icon: "tool",
    description: "Less time on the busywork. More time doing what you do best.",
    guide: "ai-at-work",
    ideas: [
      {
        title: "Can AI take something off your plate?",
        detail:
          "Customer replies, job notes, and the small tasks that fill a big part of your day.",
        tag: "Practical tools",
      },
      {
        title: "From a rough idea to a working website",
        detail:
          "What it takes to build with AI, where it helps, and where your judgment matters.",
        tag: "Building with AI",
      },
    ],
  },
  {
    id: "explained",
    name: "AI explained",
    icon: "bulb",
    description:
      "The big changes, in words you can bring to an everyday conversation.",
    guide: "personal-agents",
    ideas: [
      {
        title: "What is an AI agent, anyway?",
        detail:
          "Getting from an answer on a screen to a tool that can take a next step.",
        tag: "Under the hood",
      },
      {
        title: "Why all the talk about data centers?",
        detail:
          "The buildings, computers, power, and people behind the tools on our phones.",
        tag: "The bigger picture",
      },
    ],
  },
  {
    id: "reality",
    name: "Risks & reality",
    icon: "shield",
    description: "Stay curious. Ask good questions. Keep your eyes open.",
    guide: "risks-and-reality",
    ideas: [
      {
        title: "When a confident answer is wrong",
        detail:
          "Why a polished response still needs checking, and what to check first.",
        tag: "Trust & accuracy",
      },
      {
        title: "Useful caution or a scary headline?",
        detail:
          "Real concerns, exaggerated claims, and the questions worth asking about both.",
        tag: "Keeping perspective",
      },
    ],
  },
] as const;
