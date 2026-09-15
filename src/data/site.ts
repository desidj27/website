export const profile = {
  name: "David Desing",
  shortName: "David",
  role: "Computer science student",
  school: "University of Wisconsin–Green Bay",
  location: "Green Bay, Wisconsin",
  email: null as string | null,
  github: "https://github.com/desidj27",
  linkedin: "https://www.linkedin.com/in/david-desing-606748233",
  summary:
    "I build web apps I’d actually use — live data tools, game utilities, and experiments that talk to public APIs.",
};

export const about = {
  intro:
    "I’m a computer science student at UW–Green Bay with an emphasis in software engineering. Most of my recent work is TypeScript and Next.js: dashboards, market tools, and small products that sit on top of real data.",
  more:
    "I like shipping things end to end. That usually means a clean interface, an API in the middle, and something useful on the other side — Discord activity, satellite positions, or in-game prices.",
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "What Is Above Me",
    eyebrow: "Live satellite map",
    description:
      "Point it at your location and it shows the satellites currently overhead. Search by name or NORAD ID, draw ground tracks, find upcoming visual passes, and explore them on a 3D globe using N2YO and CelesTrak.",
    tags: ["JavaScript", "Node", "Express", "N2YO API"],
    liveUrl: "https://what-is-above-me.daviddesing.website/",
    repoUrl: "https://github.com/desidj27/WhatIsAboveMe",
    year: "2026",
  },
  {
    title: "DegenerateBot",
    eyebrow: "Discord activity tracker",
    description:
      "A dashboard for a Discord bot that tracks messages, voice time, games played, and more. Leaderboards sit on MongoDB so the server can see who is actually around.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    liveUrl: "https://degen.daviddesing.website/",
    repoUrl: "https://github.com/desidj27/DegenerateBotWebsite",
    year: "2026",
  },
  {
    title: "BIS Loot",
    eyebrow: "Market tracker",
    description:
      "Live marketplace listings, historical price charts, underpriced-deal alerts, and a crafting calculator that prices recipes against current market data from DarkerDB.",
    tags: ["Next.js", "TypeScript", "DarkerDB"],
    liveUrl: "https://www.bisloot.website/",
    repoUrl: "https://github.com/desidj27/BIS-Loot",
    year: "2026",
  },
];
