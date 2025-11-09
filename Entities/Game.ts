import { Team } from "./Team";

export class Game {
  id: string;
  guestTeam: Team;
  homeTeam: Team;
  season: number;
  week: number;
  startingTime: Date;
  homeScore?: number;
  guestScore?: number;
  status: Status;

  constructor(
    guestTeam: Team,
    homeTeam: Team,
    season: number,
    week: number,
    startingTime: Date
  ) {
    this.id = crypto.randomUUID();
    this.guestTeam = guestTeam;
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
