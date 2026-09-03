import { useState } from "react";
import type { Game } from "@snapbets/shared-types/Game.ts";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Label } from "./ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group.tsx";
import { Teams } from "../mocks/teams.ts";

function findTeamById(teamId: string) {
  return Object.values(Teams).find((team) => team.id === teamId);
}

export function GameCard({ game }: { game: Game }) {
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const awayTeam = findTeamById(game.awayTeamId);
  const homeTeam = findTeamById(game.homeTeamId);

  return (
    <Card>
      <CardTitle>
        {homeTeam?.name} @ {awayTeam?.name}
      </CardTitle>
      <CardContent className="p-3">
        <div className="flex flex-row items-center p-3 font-bold">
          {/* // Home Team */}
          <div className="basis-1/6"> {homeTeam?.name}</div>

          <img
            src={homeTeam?.logo}
            alt={homeTeam?.name}
            className="w-20 h-20 object-contain basis-l"
          />

          <RadioGroup value={selectedTeam} onValueChange={setSelectedTeam}>
            <div className="flex items-center">
              <div className="flex  items-center p-3">
                <RadioGroupItem value={homeTeam?.shortName || "NA"} />
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

              <RadioGroupItem value={awayTeam?.shortName || "NA"} />
            </div>
          </RadioGroup>

          <div className="basis-1/6">
            <img
              src={awayTeam?.logo}
              alt={awayTeam?.name}
              className="w-20 h-20 object-contain basis-l"
            />
          </div>
          <div className="basis-1/6"> {awayTeam?.name}</div>
        </div>
        <Label> Teamgewählt {selectedTeam}</Label>
      </CardContent>
    </Card>
  );
}
