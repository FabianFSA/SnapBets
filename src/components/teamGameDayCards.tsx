import type { Game } from "Entities/Game";
import { GameCard } from "./gameDayCard";

type Props = {
  Games: Game[];
};

function TeamGameDayCards({ Games }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default TeamGameDayCards;
