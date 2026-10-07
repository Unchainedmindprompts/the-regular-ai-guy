export type Guide = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  readTime: string;
  sections: {
    title: string;
    body: string[];
    bullets?: string[];
  }[];
  takeaway: string;
  sourceLinks: { label: string; url: string }[];
};

export const guides: Guide[] = [
  {
    slug: "first-useful-prompt",
    title: "Just tell AI what you need",
    eyebrow: "START HERE",
    summary:
      "Start with a real-life goal. You can figure out the details together.",
    readTime: "2 min read",
    sections: [
      {
        title: "Start with what you want done",
        body: [
          "Maybe you want five family dinners and a grocery list within $100. Or help fitting the kids’ activities and appointments into next week. Or an affordable weekend plan. Start with the thing you want help with.",
          "You can ask in the same words you’d use with a person: “Help me plan five dinners for my family and make the grocery list. I have $100 to spend.”",
        ],
      },
      {
        title: "Let it ask the next question",
        body: [
          "You don’t need a perfect request or a plan for how to build the answer. If you’re not sure which details matter, add: “Ask me what you need to know.”",
          "For dinner plans, that might mean how many people you’re feeding, what they like, and what’s already in the fridge. Answer a few questions and let it help put the plan together.",
        ],
      },
      {
        title: "Make it work for you",
        body: [
          "When you see the result, say what you’d like changed: “Make the dinners quicker.” “We already have pasta.” “Leave Friday open.” Keep talking until it fits your life.",
          "The same idea works for a confusing letter: “Explain this in everyday language and help me work out what to do next.” Or a packed week: “Help me organize this so I know what needs to happen each day.”",
          "Before acting, check the details that matter, like appointment times, deadlines, or prices. Leave private information out of the conversation.",
        ],
      },
    ],
    takeaway: "Say what you want done. Let AI help with the details.",
    sourceLinks: [
      {
        label: "OpenAI: Prompting best practices",
        url: "https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt",
      },
      {
        label: "OpenAI: Understanding inaccurate answers",
        url: "https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth",
      },
    ],
  },
  {
    slug: "ai-at-work",
    title: "Make one part of work easier",
    eyebrow: "EVERYDAY WORK",
    summary:
      "Describe a job you want off your plate and ask an AI agent to help you get it done.",
    readTime: "3 min read",
    sections: [
      {
        title: "What would make your day easier?",
        body: [
          "You might want customer updates written, job notes organized, or a simple way to track follow-ups. Choose the thing you keep putting off and tell AI what you want handled.",
          "Describe what you already use and what you want at the end. Let the agent ask for anything else it needs.",
        ],
      },
      {
        title: "Ask for the result",
        body: [
          "For example: “Turn these rough job notes into a clear customer update. Ask me if anything important is missing. Keep it friendly and short.”",
          "For a real job, confirm details such as measurements, product specifications, and appointment times before sending them to a customer.",
        ],
      },
      {
        title: "Keep customer information private",
        body: [
          "Use information you’re allowed to share, check the app’s data settings, and leave out passwords, payment details, or private customer information the task doesn’t need.",
        ],
      },
      {
        title: "Start with something you want off your plate",
        body: [
          "Maybe customer details are scattered across texts, emails, and scraps of paper. You want one place to see who needs a quote, which jobs are booked, and who needs a follow-up. Start there: tell an AI agent what you want to accomplish.",
          "You could say: “Help me build a simple customer and job tracker. My customer information is scattered across texts, email, and paper. I want to see each customer, what they need, the job status, and the next follow-up in one place. Ask me what you need to know and help me get it working.”",
          "You don’t need to pick a database or map every step before asking. Explain what you want the finished tracker to do, what you already use, and any limits that matter. The agent can ask follow-up questions and help build a solution using the tools it supports. If it needs an app connection or a decision from you, ask it to explain what’s needed in everyday language.",
          "As it takes shape, keep the conversation going: “Put the customers waiting for a quote at the top.” “Add a place for job photos.” “Make this easier to use on my phone.” You can ask for adjustments as you see what’s useful. The point is to get something working that takes a job off your plate.",
          "Before adding real customers, check what information the tool stores and who can see it. Confirm the job dates before relying on any reminders.",
        ],
      },
    ],
    takeaway:
      "Start with what you want accomplished. Explain the result, let the agent ask questions, and work with it to make the result useful to you.",
    sourceLinks: [
      {
        label: "OpenAI: Data controls in ChatGPT",
        url: "https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt",
      },
      {
        label: "NIST: AI risk management overview",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
    ],
  },
  {
    slug: "personal-agents",
    title: "What can an AI agent do?",
    eyebrow: "THE NEXT STEP",
    summary: "Some AI tools can help carry out a task. Here’s what to expect.",
    readTime: "2 min read",
    sections: [
      {
        title: "Ask for something you want done",
        body: [
          "You might want a weekend plan, a document put together, or help organizing next week’s appointments. Some AI assistants can use connected apps and tools to help do the work. People often call these assistants “agents.”",
          "What an agent can do depends on the product and the tools it has. You can start by asking: “Can you help me get this done? What do you need from me?”",
        ],
      },
      {
        title: "Find out how far it can take you",
        body: [
          "For example: “Help me organize next week’s family schedule. Ask me for the details, then put together a plan I can use.” Once you have a plan, you could ask whether it can add the appointments to your calendar.",
          "Some tools can make those changes after you connect an account and approve them. Others can give you a finished schedule to copy. If it can’t do a step directly, ask what useful part it can handle.",
        ],
      },
      {
        title: "You still choose what happens",
        body: [
          "For things like sending a message, buying something, or changing an appointment, make clear that you want to approve it first. Read what an app connection allows before connecting it, and keep passwords out of ordinary chat.",
          "When it says it’s finished, open the result. Does the schedule have the right dates? Did the document save where you expected? If something is off, say so and ask it to fix it. For important changes, check the confirmation in the actual app.",
        ],
      },
    ],
    takeaway:
      "Ask for the finished thing you want. Find out what the tool can do, and keep the say-so on important actions.",
    sourceLinks: [
      {
        label: "Anthropic: How agents use tools and feedback",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
      },
      {
        label: "OpenAI: Understanding prompt injection risks",
        url: "https://openai.com/safety/prompt-injections/",
      },
    ],
  },
  {
    slug: "risks-and-reality",
    title: "A few things worth watching",
    eyebrow: "KEEP YOUR FEET ON THE GROUND",
    summary:
      "A few everyday ways to avoid mistakes and protect private information.",
    readTime: "2 min read",
    sections: [
      {
        title: "If the detail matters, check it",
        body: [
          "An AI answer can sound confident and still be wrong. Before you head out, check the opening hours. Before you rely on a deadline, look at the original letter. Before you send a customer a date or a price, make sure it’s right.",
          "You don’t need to investigate every dinner suggestion. Put your attention on the details that would cause trouble if they were wrong.",
        ],
      },
      {
        title: "Keep private details private",
        body: [
          "Leave passwords, account recovery codes, and payment details out of chat. Before pasting a letter or uploading a photo, remove private information the task doesn’t need.",
          "Check the privacy settings for the tool you actually use. Products and account types handle information differently. If you’re using it at work, follow your workplace’s rules for customer and company information.",
        ],
      },
      {
        title: "Be careful with surprise messages",
        body: [
          "AI can help make fake messages and recordings convincing. If someone unexpectedly asks for money, a login code, or urgent action, check with them another way.",
          "Use a phone number or website you already trust, rather than a link or callback number in the message. That’s the FTC’s advice, and it works whether AI was involved or not.",
        ],
      },
      {
        title: "If something looks wrong, say so",
        body: [
          "Tell the AI what it missed and ask for a correction. For a meal plan or a rough draft, that may be all you need. If it is about to send, buy, or change something important, pause and check before going ahead.",
          "Keep original files when you’re asking a tool to change them. If a change goes wrong, use the app’s normal undo or recovery options.",
        ],
      },
    ],
    takeaway:
      "Use AI to help you. Keep private details out, check important facts, and stay in charge of consequential actions.",
    sourceLinks: [
      {
        label: "NIST: Generative AI risk profile (PDF)",
        url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
      },
      {
        label: "OpenAI: Data controls in ChatGPT",
        url: "https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt",
      },
      {
        label: "FTC: Recognize and avoid phishing scams",
        url: "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
