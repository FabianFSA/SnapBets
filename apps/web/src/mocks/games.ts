import { Teams } from "./teams.ts";
import type { Game } from "@snapbets/shared-types/Game.ts";
import { Status as GameStatus } from "@snapbets/shared-types/Game.ts";

function createMockGame(
  awayTeamId: string,
  homeTeamId: string,
  season: number,
  week: number,
  startingTime: string,
): Game {
  return {
    id: crypto.randomUUID(),
    awayTeamId,
    homeTeamId,
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
    Teams.chiefs.id,
    Teams.ravens.id,
    2024,
    1,
    new Date("2024-09-05T20:20:00Z").toISOString(),
  ),
  createMockGame(
    Teams.packers.id,
    Teams.eagles.id,
    2024,
    1,
    new Date("2024-09-06T19:15:00Z").toISOString(),
  ),
  createMockGame(
    Teams.steelers.id,
    Teams.falcons.id,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z").toISOString(),
  ),
  createMockGame(
    Teams.cardinals.id,
    Teams.rams.id,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z").toISOString(),
  ),
  createMockGame(
    Teams.titans.id,
    Teams.bears.id,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z").toISOString(),
  ),
  createMockGame(
    Teams.jaguars.id,
    Teams.dolphins.id,
    2024,
    1,
    new Date("2024-09-08T19:00:00Z").toISOString(),
  ),

  // --- LATE GAMES (22:25 CET) ---
  createMockGame(
    Teams.seahawks.id,
    Teams.fourtyNiners.id,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z").toISOString(),
  ),
  createMockGame(
    Teams.cowboys.id,
    Teams.browns.id,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z").toISOString(),
  ),
  createMockGame(
    Teams.raiders.id,
    Teams.chargers.id,
    2024,
    1,
    new Date("2024-09-08T22:25:00Z").toISOString(),
  ),

  // --- SUNDAY NIGHT FOOTBALL ---
  createMockGame(
    Teams.bills.id,
    Teams.jets.id,
    2024,
    1,
    new Date("2024-09-09T02:20:00Z").toISOString(),
  ),

  // --- MONDAY NIGHT FOOTBALL ---
  createMockGame(
    Teams.vikings.id,
    Teams.giants.id,
    2024,
    1,
    new Date("2024-09-10T02:15:00Z").toISOString(),
  ),
];
