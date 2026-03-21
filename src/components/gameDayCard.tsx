import { Game } from "../../Entities/Game.ts";
import { Card, CardContent } from "./ui/card";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div>
          {/* Game Week */}
          <div>
            <span> Week {game.week}</span>
          </div>
          {/* // Home Team */}
          <div>
            <img
              src={game.homeTeam.logo}
              alt={game.homeTeam.name}
              className="w-20 h-20 object-contain"
            />
            <span> {game.homeTeam.name}</span>
          </div>
          {/* Score */}
          <div>
            <span>{game.homeScore || 0}</span>
            <span> : </span>
            <span>{game.awayScore || 0}</span>
          </div>
          {/* Away Team */}
          <div>
            <img
              src={game.awayTeam.logo}
              alt={game.awayTeam.name}
              className="w-20 h-20 mb-2 object-contain"
            />
            <span> {game.awayTeam.name}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
