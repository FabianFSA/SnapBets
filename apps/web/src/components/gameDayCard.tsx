import { useState } from "react";
import type { Game } from "@snapbets/shared-types/Game.ts";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Label } from "./ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group.tsx";

export function GameCard({ game }: { game: Game }) {
  const [selectedTeam, setSelectedTeam] = useState<string>("");

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

          <RadioGroup value={selectedTeam} onValueChange={setSelectedTeam}>
            <div className="flex items-center">
              <div className="flex  items-center p-3">
                <RadioGroupItem value={game.homeTeam.shortName} />
              </div>
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

              <RadioGroupItem value={game.awayTeam.shortName} />
            </div>
          </RadioGroup>

          <div className="basis-1/6">
            <img
              src={game.awayTeam.logo}
              alt={game.awayTeam.name}
              className="w-20 h-20 object-contain basis-l"
            />
          </div>
          <div className="basis-1/6"> {game.awayTeam.name}</div>
        </div>
        <Label> Teamgewählt {selectedTeam}</Label>
      </CardContent>
    </Card>
  );
}
