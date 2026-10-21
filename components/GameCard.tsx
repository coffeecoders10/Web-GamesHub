import type { CSSProperties } from "react";
import { Badge, Button, Heading, Text, Tooltip } from "@radix-ui/themes";
import { PlayIcon } from "@radix-ui/react-icons";
import { CoverArt } from "@/components/CoverArt";
import type { Game } from "@/lib/games";

export function GameCard({ game }: { game: Game }) {
  const live = Boolean(game.href);

  return (
    <article className={`card${live ? " card-live" : ""}`} style={{ "--accent": game.color } as CSSProperties}>
      <div className="cover">
        <CoverArt palette={game.palette} seed={game.seed} />
        <Badge className="cover-badge" color="gray" variant="solid" highContrast radius="full">
          {game.tag}
        </Badge>
      </div>

      <div className="card-body">
        <Heading as="h2" size="5" className="card-title">
          {game.title}
        </Heading>
        <Text as="p" size="2" color="gray" className="card-tagline">
          {game.tagline}
        </Text>

        <div className="card-foot">
          <Text size="1" color="gray">
            {[game.players, game.minutes].filter(Boolean).join(" \u00b7 ")}
          </Text>
          {live ? (
            <Button asChild size="2" className="play">
              <a href={game.href} aria-label={`Play ${game.title}`}>
                <PlayIcon /> Play
              </a>
            </Button>
          ) : (
            <Tooltip content="The link for this game is not available yet.">
              <span tabIndex={0} className="play-wrap">
                <Button size="2" variant="soft" color="gray" disabled aria-label={`${game.title} is coming soon`}>
                  Coming soon
                </Button>
              </span>
            </Tooltip>
          )}
        </div>
      </div>
    </article>
  );
}
