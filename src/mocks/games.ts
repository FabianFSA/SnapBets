import { Teams } from "./teams.ts";
import { Game } from "../../Entities/Game.ts";

export const mockGames: Game[] = [
  // --- EARLY GAMES (19:00 CET) ---
  new Game(
    Teams.steelers,
    Teams.falcons,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z"),
  ),
  new Game(
    Teams.cardinals,
    Teams.rams,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z"),
  ),
  new Game(
    Teams.titans,
    Teams.bears,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z"),
  ),
  new Game(
    Teams.jaguars,
    Teams.dolphins,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z"),
  ),

  // --- LATE GAMES (22:25 CET) ---
  new Game(
    Teams.seahawks,
    Teams.fourtyNiners,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z"),
  ),
  new Game(
    Teams.cowboys,
    Teams.browns,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z"),
  ),
  new Game(
    Teams.raiders,
    Teams.chargers,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z"),
  ),

  // --- PRIMETIME (02:20 CET / Sunday Night Football) ---
  new Game(Teams.rams, Teams.lions, 2024, 1, new Date("2024-09-09T02:20:00Z")),

  // --- MONDAY NIGHT FOOTBALL ---
  new Game(Teams.jets, Teams.giants, 2024, 1, new Date("2024-09-10T02:15:00Z")),
];
