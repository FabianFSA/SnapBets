import { Team } from "./Team";

export class Game {
  id: string;
  awayTeam: Team;
  homeTeam: Team;
  season: number;
  week: number;
  startingTime: Date;
  homeScore?: number;
  awayScore?: number;
  status: Status;

  constructor(
    awayTeam: Team,
    homeTeam: Team,
    season: number,
    week: number,
    startingTime: Date,
  ) {
    this.id = crypto.randomUUID();
    this.awayTeam = awayTeam;
    this.homeTeam = homeTeam;
    this.season = season;
    this.week = week;
    this.startingTime = new Date(startingTime);
    this.status = Status.SCHEDULED;
  }
}

export enum Status {
  SCHEDULED = "scheduled",
  IN_PROGRESS = "in_progress",
  FINISHED = "finished",
}
