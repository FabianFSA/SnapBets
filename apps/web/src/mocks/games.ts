import { Teams } from "./teams.ts";
import type { Game } from "@snapbets/shared-types/Game.ts";
import type { Team } from "@snapbets/shared-types/Team.ts";
import { Status as GameStatus } from "@snapbets/shared-types/Game.ts";

function createMockGame(
  awayTeam: Team,
  homeTeam: Team,
  season: number,
  week: number,
  startingTime: Date,
): Game {
  return {
    id: crypto.randomUUID(),
    awayTeam,
    homeTeam,
    season,
    week,
    startingTime,
    homeScore: 0,
    awayScore: 0,
    status: GameStatus.SCHEDULED,
  };
}

export const mockGames: Game[] = [
  // --- WEEK 1 ---
  createMockGame(
    Teams.chiefs,
    Teams.ravens,
    2024,
    1,
    new Date("2024-09-05T20:20:00Z"),
  ),
  createMockGame(
    Teams.packers,
    Teams.eagles,
    2024,
    1,
    new Date("2024-09-06T19:15:00Z"),
  ),
  createMockGame(
    Teams.steelers,
    Teams.falcons,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z"),
  ),
  createMockGame(
    Teams.cardinals,
    Teams.rams,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z"),
  ),
  createMockGame(
    Teams.titans,
    Teams.bears,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z"),
  ),
  createMockGame(
    Teams.jaguars,
    Teams.dolphins,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z"),
  ),

  // --- LATE GAMES (22:25 CET) ---
  createMockGame(
    Teams.seahawks,
    Teams.fourtyNiners,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z"),
  ),
  createMockGame(
    Teams.cowboys,
    Teams.browns,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z"),
  ),
  createMockGame(
    Teams.raiders,
    Teams.chargers,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z"),
  ),

  // --- SUNDAY NIGHT FOOTBALL ---
  createMockGame(
    Teams.bills,
    Teams.jets,
    2024,
    1,
    new Date("2024-09-09T02:20:00Z"),
  ),

  // --- MONDAY NIGHT FOOTBALL ---
  createMockGame(
    Teams.vikings,
    Teams.giants,
    2024,
    1,
    new Date("2024-09-10T02:15:00Z"),
  ),
];
