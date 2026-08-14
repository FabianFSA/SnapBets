import type { Game } from "../entities/Game";
import { GameCard } from "./gameDayCard";

type Props = {
  Games: Game[];
};

function TeamGameDayCards({ Games }: Props) {
  return (
    <div className=" grid grid-cols-1 p-3 bg-blue-400">
      {Games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default TeamGameDayCards;
