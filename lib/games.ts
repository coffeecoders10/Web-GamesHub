export type Game = {
  slug: string;
  title: string;
  tagline: string;
  genre: "Arcade" | "Puzzle" | "Platformer" | "Strategy";
  players: string;
  minutes: string;
  /** Cover colors, back layer to front layer. */
  palette: [string, string, string, string, string];
  seed: number;
  /** Set this to the game's URL when it goes live. Cards without one show "Coming soon". */
  href?: string;
};

export const games: Game[] = [
  {
    slug: "brew-rush",
    title: "Brew Rush",
    tagline: "Pull shots and fill orders before the queue spills out the door.",
    genre: "Arcade",
    players: "1 player",
    minutes: "5 min",
    palette: ["#f0d9cf", "#dcae93", "#c98f72", "#b57a60", "#8f5f4d"],
    seed: 1,
  },
  {
    slug: "bug-hunt",
    title: "Bug Hunt",
    tagline: "Read the snippet, spot the bug, and ship the fix against the clock.",
    genre: "Puzzle",
    players: "1 player",
    minutes: "10 min",
    palette: ["#d8e2da", "#a9c0b0", "#86a592", "#6a8977", "#4b6657"],
    seed: 2,
  },
  {
    slug: "latte-layers",
    title: "Latte Layers",
    tagline: "Sort milk, espresso, and foam into perfect layers, one pour at a time.",
    genre: "Puzzle",
    players: "1 player",
    minutes: "15 min",
    palette: ["#efe0cf", "#e0c29f", "#cfa578", "#b88a5c", "#8a6643"],
    seed: 3,
  },
  {
    slug: "semicolon-run",
    title: "Semicolon Run",
    tagline: "Leap across broken code to catch the one semicolon that fixes the build.",
    genre: "Platformer",
    players: "1 player",
    minutes: "8 min",
    palette: ["#dcdbea", "#b3b1d3", "#9390bb", "#7773a0", "#5a567c"],
    seed: 4,
  },
  {
    slug: "commit-and-conquer",
    title: "Commit & Conquer",
    tagline: "Merge branches and claim the repo in a two-player turn-based duel.",
    genre: "Strategy",
    players: "2 players",
    minutes: "20 min",
    palette: ["#ecd5d8", "#d4a5ac", "#bf8790", "#a46b76", "#7c4e58"],
    seed: 5,
  },
];

