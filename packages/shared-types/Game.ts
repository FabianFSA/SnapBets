export interface Game {
  id: string;
  awayTeamId: string;
  homeTeamId: string;
  season: number;
  week: number;
  startingTime: string; // ISO 8601 date string
  homeScore?: number;
  awayScore?: number;
  status: Status;
}

export enum Status {
  SCHEDULED = "scheduled",
  IN_PROGRESS = "in_progress",
  FINISHED = "finished",
}
