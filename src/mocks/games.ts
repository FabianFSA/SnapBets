import { Teams } from "./teams.ts";
import { Game } from "../../Entities/Game.ts";

export const mockGames: Game[] = [
  // Game 1
  new Game(
    Teams.seahawks,
    Teams.fourtyNiners,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z"),
  ),

  // Game 2
  new Game(
    Teams.cardinals,
    Teams.rams,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z"),
  ),
];
