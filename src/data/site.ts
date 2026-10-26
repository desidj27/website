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
    title: "CodeClash",
    eyebrow: "HackGB 2026 · Competitive coding",
    description:
      "Practice solo in the dojo, with Python running in your browser, and get hints from an AI coach. Built with Robert, Bryce, and Sam at HackGB, where it won Best Use of Gemini API.",
    tags: ["Next.js", "React", "TigerData", "Pyodide", "Google Gemini API"],
    liveUrl: "http://codeclash.study/",
    repoUrl: "https://github.com/HackGB2026/CodeClash",
    year: "2026",
  },
  {
    title: "MTG Pack Opener",
    eyebrow: "Booster simulator",
    description:
      "Open virtual Magic: The Gathering packs, flip through the reveal, and save what you pull. Card data comes from Scryfall, with pack art from the MTG Wiki.",
    tags: ["JavaScript", "Vite", "Scryfall"],
    liveUrl: "https://mtg.daviddesing.website/",
    repoUrl: "https://github.com/desidj27/MTG-Web-Port",
    year: "2025",
  },
  {
    title: "What Is Above Me",
    eyebrow: "Live satellite map",
    description:
      "Point it at your location and it shows the satellites currently overhead. Search by name or NORAD ID, draw ground tracks, find upcoming visual passes, and explore them on a 3D globe using N2YO and CelesTrak.",
    tags: ["JavaScript", "Node", "Express", "N2YO API"],
    liveUrl: "https://what-is-above-me.daviddesing.website/",
    repoUrl: "https://github.com/desidj27/WhatIsAboveMe",
    year: "2025",
  },
  {
    title: "StatX",
    eyebrow: "Discord server analytics",
    description:
      "Tracks messages, voice time, and game activity, then puts it in a dashboard admins can actually use. Each server gets its own rankings, feature toggles, and settings.",
    tags: ["Next.js", "JavaScript", "MongoDB"],
    liveUrl: "https://statx.website/",
    repoUrl: "https://github.com/desidj27/StatX",
    year: "2026",
  },
  {
    title: "Ranked Minesweeper",
    eyebrow: "1v1 duels",
    description:
      "Race on the same mine layout. Clear the board first, or survive after your opponent hits a mine. Wins and losses move your ELO.",
    tags: ["Next.js", "TypeScript"],
    liveUrl: "https://minesweeper.daviddesing.website/",
    repoUrl: "https://github.com/desidj27/Minesweeper",
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
