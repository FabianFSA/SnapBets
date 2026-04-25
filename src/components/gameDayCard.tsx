import { Game } from "../../Entities/Game.ts";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox.tsx";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card>
      <CardTitle>
        {game.homeTeam.name} @ {game.awayTeam.name}
      </CardTitle>
      <CardContent className="p-3">
        <div className="flex flex-row items-center p-3 font-bold">
          {/* // Home Team */}
          <div className="basis-1/6"> {game.homeTeam.name}</div>

          <img
            src={game.homeTeam.logo}
            alt={game.homeTeam.name}
            className="w-20 h-20 object-contain basis-l"
          />
          <Checkbox id="homeTeam" name="homeTeamCheckBox"></Checkbox>

          {/***
           * Score
           * TODO
           * Sollte erst eingeblendet werden wenn der Spieltag schon vorbei ist
           */}
          {/* <div className="font-extrabold">
            <span>{game.homeScore || 0}</span>
            <span> : </span>
            <span>{game.awayScore || 0}</span>
          </div> */}
          {/* Away Team */}
          <Checkbox></Checkbox>
          <div className="basis-1/6">
            <img
              src={game.awayTeam.logo}
              alt={game.awayTeam.name}
              className="w-20 h-20 object-contain basis-l"
            />
          </div>
          <div className="basis-1/6"> {game.awayTeam.name}</div>
        </div>
      </CardContent>
    </Card>
  );
}
