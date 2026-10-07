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
    title: "Your first useful prompt",
    eyebrow: "START HERE",
    summary:
      "Pick one small task, explain what you need, and learn how to check the result. No special vocabulary required.",
    readTime: "3 min read",
    sections: [
      {
        title: "Choose something you can judge",
        body: [
          "Start with a task you already understand: shorten a message, organize a few notes, or turn a rough list into questions for a customer. Keep the first attempt small enough that you can check every line. A useful starting point is something that takes you five or ten minutes and has an obvious finish.",
          "If you install shades, that might be a friendly appointment reminder based on details you provide. Your experience tells you whether it sounds right and whether it promises anything you cannot deliver. You bring the knowledge of the job; the tool helps arrange the words.",
        ],
      },
      {
        title: "Give it a clear brief",
        body: [
          "A prompt is simply your request. Write it as if you were handing a small job to someone who has not heard the earlier conversation. OpenAI's prompting guidance recommends clear instructions, relevant context, and refining the request after reviewing the answer. Here is a practical way to do that:",
        ],
        bullets: [
          "Task: Say exactly what you want it to do",
          "Context: Explain who the result is for and the facts it needs",
          "Constraints: Set limits, including what it must not invent",
          "Format: Ask for a text message, short list, or another useful shape",
          "Verify: Decide what you will check before using the result",
        ],
      },
      {
        title: "Try this fictional example",
        body: [
          "“Draft a text to [customer first name] about a shade measurement visit. The confirmed date is [date] and the arrival window is [time window]. Ask them to confirm someone will be available. Keep it friendly and under 60 words. Use only these details. Do not add prices, preparation instructions, or promises. Keep missing details in square brackets. Show me a draft only.”",
          "A possible draft: “Hi [customer first name], a quick reminder about your shade measurement visit on [date], with arrival between [time window]. Can you confirm someone will be available? Thanks!”",
          "These placeholders are intentional. Practice with fictional information first. For a real customer message, replace them yourself after reviewing the wording, and double-check the appointment against your actual calendar.",
        ],
      },
      {
        title: "Improve one thing at a time",
        body: [
          "If the draft is too formal, say, “Make it sound more conversational.” If it adds an unsupported detail, point to the detail and ask for a version using only your supplied facts. You can keep working in the same conversation rather than rebuilding the whole request.",
          "Read the final result with three questions in mind: Is every fact correct? Is anything important missing? Would I actually say this? AI can sound certain while making mistakes, so a polished sentence still needs a check. For this example, verify the name, date, arrival window, and recipient before sending.",
          "When a prompt works, save a clean version with placeholders. That gives you a repeatable starting point for the next similar task without keeping customer information in the template.",
        ],
      },
    ],
    takeaway:
      "Try one small task today. Give it the facts, set the limits, and check the finished work yourself.",
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
      "Find a repeatable task worth trying, protect customer information, and measure whether AI actually helps.",
    readTime: "3 min read",
    sections: [
      {
        title: "Look for the small repeat jobs",
        body: [
          "Think about the work between the work: turning rough notes into a tidy list, explaining the same process again, preparing questions for a supplier, or writing a clear customer update. Those jobs are often a good place to experiment because you already know what a useful result looks like.",
          "Pick one job that comes up regularly. Write down what you start with, what you need at the end, and who checks it. For a small installation business, a simple trial could be turning fictional appointment notes into a next-step checklist. Keep technical specifications and installation decisions with the people qualified to verify them.",
        ],
      },
      {
        title: "Try a contained handoff",
        body: [
          "Here is a fictional example: “Organize these notes into three sections: confirmed details, questions still open, and next actions. Notes: customer wants light control in a west-facing office; fabric choice is undecided; measurements still need checking; customer asked whether a motor option is available. Do not choose a product, invent measurements, or mark anything as approved.”",
          "A useful response would preserve the uncertainty. Fabric choice stays open. Measurements stay unverified. The motor question remains a question for the appropriate product source. If the answer silently turns a possibility into a decision, correct it before the checklist goes anywhere.",
        ],
        bullets: [
          "Use one clear input and ask for one reviewable output",
          "Keep confirmed facts separate from assumptions and open questions",
          "Name the person responsible for checking the final result",
        ],
      },
      {
        title: "Decide what information belongs in the tool",
        body: [
          "Before using real work, check your company's rules and the privacy settings for the specific account. Different products, plans, and connected apps have different data controls. OpenAI's documentation, for example, distinguishes model-training settings from chat history and organizational controls. A privacy toggle is not permission to upload someone else's confidential information.",
          "For an early test, replace names and addresses with placeholders. Leave out payment details, passwords, private employee information, and customer documents you are not authorized to share. Removing a name may still leave a person identifiable through an address, photo, or detailed description. Share only what the task genuinely needs.",
        ],
      },
      {
        title: "Count the checking time too",
        body: [
          "Try the same narrow task on a handful of examples. Record the time spent preparing the request, reviewing the output, and fixing it. Compare that total with doing the task yourself. A fast first draft is only useful if it leads to a dependable finished result.",
          "Keep a short record of mistakes: missing items, invented details, awkward wording, or confusion about who does what. Adjust the prompt and test again. If the same important error keeps returning, narrow the job or stop using AI for that step.",
          "When the trial helps, save the prompt, a clean example, and a simple review checklist together. Someone else should be able to repeat the process and understand its limits. Start with one dependable use before adding more.",
        ],
      },
    ],
    takeaway:
      "Choose one repeat task, test it with safe sample information, and judge the time and quality of the finished result.",
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
    title: "What a personal AI agent can do",
    eyebrow: "THE NEXT STEP",
    summary:
      "Understand tools, access, and approvals before letting an assistant take action on your behalf.",
    readTime: "3 min read",
    sections: [
      {
        title: "An assistant with tools",
        body: [
          "The word agent gets used loosely. In practical terms, an AI agent can use tools to work through a task: search for information, read a connected file, prepare a document, or interact with an app. Exactly what it can do depends on the product, its available tools, and the access you have granted.",
          "Anthropic describes agents as systems that can decide how to use tools as a task develops. That ability can be useful when several steps depend on what the assistant finds. It also means there are more places for a mistake to happen. Start with a task whose progress and outcome you can inspect.",
        ],
      },
      {
        title: "Write down the boundaries",
        body: [
          "A good first task has a clear finish and limited access. You might ask an agent to compare three public product pages and make a list of questions to ask a supplier. It can collect information while you remain responsible for deciding whether the products fit the job.",
          "Try: “Compare these three product pages using only the specifications they publish. Show source links and flag missing information. Prepare a short comparison for my review. Do not contact suppliers, create accounts, place orders, or change any files.”",
          "For tasks that do involve changes, specify exactly what may change and what needs your approval. Check the tool's permission settings as well as writing instructions. A sentence in a prompt does not replace an actual access control.",
        ],
        bullets: [
          "Goal: What finished result do you want to inspect?",
          "Access: Which files, apps, or websites does this task need?",
          "Approval: Which actions must wait for your review?",
          "Stop point: When should it pause or hand the task back?",
        ],
      },
      {
        title: "Give access gradually",
        body: [
          "Begin with public information or a few safe sample files. If an app connection is needed, read what the permission screen allows. Access to view information and access to send messages or change records carry different consequences. Prefer the narrowest access that supports your task, and remove connections you no longer use.",
          "Keep passwords and recovery codes out of ordinary chat messages. Use the product's supported sign-in process yourself. Pause if a workflow asks for unexpected access or takes you somewhere unrelated to the job.",
        ],
      },
      {
        title: "Supervise the work and verify the finish",
        body: [
          "Agents can misunderstand instructions, follow misleading material, or fail partway through. A page or email can even contain instructions intended to steer an agent away from your request, a risk called prompt injection. Product safeguards help, but they do not make every workflow safe to leave unattended.",
          "For anything consequential, review the proposed action and its destination before approving it. Afterward, check the real result: open the document, inspect the changed record, or verify the confirmation in the relevant service. An assistant saying it is finished is a useful update, not independent proof.",
          "If something looks wrong, stop the task before allowing more actions. Keep the original files, review what changed, and use the service's normal recovery options where available. Increase responsibility only after the smaller workflow proves dependable.",
        ],
      },
    ],
    takeaway:
      "Give an agent a specific job, limited access, clear approval points, and a finish you can verify.",
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
    title: "Useful tools. Real limits.",
    eyebrow: "KEEP YOUR FEET ON THE GROUND",
    summary:
      "Build a few practical habits around wrong answers, private information, and convincing scams.",
    readTime: "3 min read",
    sections: [
      {
        title: "A confident answer still needs evidence",
        body: [
          "AI can produce an answer that reads smoothly and contains a wrong date, an invented reference, or a detail that was never in your notes. NIST's generative AI risk profile describes this problem as confabulation. You may also hear it called hallucination. The important part is knowing that a convincing answer can still be incorrect.",
          "Make the check fit the consequence. For a casual brainstorming list, a quick review may be enough. For a product specification, customer commitment, or published claim, check the original source. Open the linked page and look for the exact detail. Confirm the model number, units, date, and context rather than assuming a related-looking link proves the claim.",
        ],
      },
      {
        title: "Watch what goes into the conversation",
        body: [
          "Before pasting a document or uploading a screenshot, ask what information it contains and whether you have permission to share it with that service. A screenshot can expose customer names, account details, or something private in another part of the screen. Crop and remove unnecessary information before uploading.",
          "Read the privacy guidance for your actual account and plan. Settings for model training, saved history, memory, and connected services can cover different things. For example, OpenAI says turning off model training does not remove saved chats. Avoid treating any single setting as a blanket guarantee of privacy.",
          "Practice with made-up examples when possible. If the task needs confidential material, use an approved workplace process and the minimum information required. Keep passwords, recovery codes, and payment credentials out of chat prompts.",
        ],
      },
      {
        title: "Verify unexpected requests independently",
        body: [
          "A polished message, familiar logo, or convincing recording is not enough to establish who is contacting you. Be especially cautious when a request creates urgency, demands secrecy, asks for a login code, or changes where a payment should go. You do not need to prove that AI created something before deciding to verify it.",
          "The FTC recommends contacting a company through a phone number or website you already know is genuine. Use a saved contact, an existing account app, or a previously verified website. Do not use the callback number or login link supplied inside the suspicious message. For an unexpected request from someone you know, reach them through a separate, established channel.",
          "An AI assistant may help explain a suspicious message, but its opinion cannot authenticate the sender. If you have already shared information or clicked something concerning, consult the FTC's official recovery guidance and the affected service's verified support channel promptly.",
        ],
      },
      {
        title: "Keep a simple preflight check",
        body: [
          "Before using an AI result, pause for a short check. The goal is to catch the mistakes that would matter before they reach a customer, colleague, or public page. Build the habit while the tasks are small.",
        ],
        bullets: [
          "Facts: Which claims did I verify against an original source?",
          "Privacy: Did I share more information than this task needed?",
          "Permissions: Am I authorized to use or send this material?",
          "Consequence: What happens if this answer is wrong?",
          "Recovery: Can I review or undo the next action?",
        ],
      },
    ],
    takeaway:
      "Check important claims, share less private information, and verify unexpected requests through a channel you already trust.",
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
