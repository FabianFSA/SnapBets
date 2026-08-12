import { Team } from "./Team";

export interface Game {
  id: string;
  awayTeam: Team;
  homeTeam: Team;
  season: number;
  week: number;
  startingTime: Date;
  homeScore?: number;
  awayScore?: number;
  status: Status;
}

export enum Status {
  SCHEDULED = "scheduled",
  IN_PROGRESS = "in_progress",
  FINISHED = "finished",
}
