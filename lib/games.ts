import data from "@/data/games.json";

/** One entry in data/games.json. Add a game there and it appears on the hub. */
type GameEntry = {
  title: string;
  tagline: string;
  /** Badge on the cover; also drives the filter bar. */
  tag: string;
  players?: string;
  /** How many players (or teams) are needed, e.g. "2-5 players". */
  playerCount?: string;
  minutes?: string;
  /** Where Play goes. Leave out to show "Coming soon" on the card. */
  href?: string;
  /** Main card color (hex). The cover and hover accent are derived from it. */
  color: string;
};

export type Game = Omit<GameEntry, "color"> & {
  slug: string;
  /** Cover colors, back layer to front layer. */
  palette: string[];
  seed: number;
  color: string;
};

export const comingSoon: { title: string; message: string } = data.comingSoon;

function mix(hex: string, target: [number, number, number], amount: number) {
  const n = parseInt(hex.replace("#", ""), 16);
  const from = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const out = from.map((c, i) => Math.round(c + (target[i] - c) * amount));
  return `#${out.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

/** Light-to-dark ramp around the main color. */
function paletteFor(color: string) {
  return [
    mix(color, [255, 255, 255], 0.7),
    mix(color, [255, 255, 255], 0.4),
    mix(color, [255, 255, 255], 0.15),
    color,
    mix(color, [0, 0, 0], 0.3),
  ];
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const games: Game[] = (data.games as GameEntry[]).map((g, i) => ({
  ...g,
  slug: slugify(g.title),
  palette: paletteFor(g.color),
  seed: i + 1,
}));
