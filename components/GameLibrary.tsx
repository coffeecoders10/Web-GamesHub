"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button, SegmentedControl, Text, TextField } from "@radix-ui/themes";
import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { GameCard } from "@/components/GameCard";
import { comingSoon, type Game } from "@/lib/games";

export function GameLibrary({ games }: { games: Game[] }) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const inputRef = useRef<HTMLInputElement>(null);

  const genres = useMemo(() => ["All", ...Array.from(new Set(games.map((g) => g.tag)))], [games]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return games.filter(
      (g) =>
        (genre === "All" || g.tag === genre) &&
        (!q || `${g.title} ${g.tagline} ${g.tag}`.toLowerCase().includes(q)),
    );
  }, [games, query, genre]);

  // Press "/" anywhere to jump to search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (e.key === "/" && !/^(INPUT|TEXTAREA)$/.test(target.tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const reset = () => {
    setQuery("");
    setGenre("All");
    inputRef.current?.focus();
  };

  return (
    <section aria-label="Game library">
      <div className="controls">
        <TextField.Root
          ref={inputRef}
          size="3"
          className="search"
          placeholder="Search games"
          aria-label="Search games"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="18" width="18" />
          </TextField.Slot>
          <TextField.Slot>
            {query ? (
              <Button variant="ghost" color="gray" size="1" aria-label="Clear search" onClick={() => setQuery("")}>
                <Cross2Icon />
              </Button>
            ) : (
              <kbd className="kbd" aria-hidden="true">
                /
              </kbd>
            )}
          </TextField.Slot>
        </TextField.Root>

        <SegmentedControl.Root
          size="2"
          value={genre}
          onValueChange={setGenre}
          aria-label="Filter by type"
          className="genres"
        >
          {genres.map((g) => (
            <SegmentedControl.Item key={g} value={g}>
              {g}
            </SegmentedControl.Item>
          ))}
        </SegmentedControl.Root>
      </div>

      <Text as="p" size="2" color="gray" className="count" aria-live="polite">
        {results.length} {results.length === 1 ? "game" : "games"}
      </Text>

      {results.length > 0 ? (
        <ul className="grid">
          {results.map((game) => (
            <li key={game.slug}>
              <GameCard game={game} />
            </li>
          ))}
        </ul>
      ) : null}

      {results.length > 0 && genre === "All" && !query.trim() ? (
        <div className="soon">
          <Text as="p" size="4" weight="medium">
            {comingSoon.title}
          </Text>
          <Text as="p" size="2" color="gray">
            {comingSoon.message}
          </Text>
        </div>
      ) : null}

      {results.length === 0 ? (
        <div className="empty">
          <Text as="p" size="4" weight="medium">
            No games match &ldquo;{query.trim() || genre}&rdquo;
          </Text>
          <Text as="p" size="2" color="gray">
            Try a different word, or show the whole library.
          </Text>
          <Button variant="soft" onClick={reset}>
            Show all games
          </Button>
        </div>
      ) : null}
    </section>
  );
}
