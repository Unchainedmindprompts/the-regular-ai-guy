export const site = {
  name: "The Regular AI Guy",
  url: "https://theregularaiguy.com",
  description:
    "AI for work, home, and everything in between. A practical podcast in the making with Mark Abplanalp, plus plain-language guides you can use today.",
  host: "Mark Abplanalp",
};
export const topicGroups = [
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
    id: "life",
    name: "Everyday life",
    icon: "home",
    description:
      "A little help with the things that happen outside the workday.",
    guide: "first-useful-prompt",
    ideas: [
      {
        title: "What should I actually ask this thing?",
        detail:
          "A useful first conversation, starting with something already on your to-do list.",
        tag: "Getting started",
      },
      {
        title: "Could a personal AI agent help at home?",
        detail:
          "What you might hand off, what needs your say-so, and how to stay in control.",
        tag: "Personal agents",
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
