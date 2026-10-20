import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { GameLibrary } from "@/components/GameLibrary";
import { games } from "@/lib/games";

export default function Home() {
  return (
    <div className="shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="CoffeeCoders Games Hub, home">
          <BrandMark size={34} />
          <span className="brand-name">Games Hub</span>
        </Link>
      </header>

      <main id="main">
        <section className="hero">
          <h1 className="hero-title">Pick a game, press play.</h1>
          <p className="hero-copy">
            Small games built by CoffeeCoders, one cup at a time. Search the library or browse by type.
          </p>
        </section>

        <GameLibrary games={games} />
      </main>

      <footer className="footer">
        <a className="builtby" href="https://coffeecoders.cc" target="_blank" rel="noopener noreferrer">
          <Image src="/coffeecoders_logo.png" alt="" width={44} height={44} />
          <span>
            Built by <strong>CoffeeCoders</strong>
          </span>
        </a>
      </footer>
    </div>
  );
}
