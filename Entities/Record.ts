import { Team } from "./Team";

export class Record {
  id: string;
  team_fk: Team;
  season: number;
  wins: number;
  loses: number;
  ties: number;

  constructor(team_fk: Team, season: number) {
    this.id = crypto.randomUUID();
    this.team_fk = team_fk;
    this.season = season;
    this.wins = 0;
    this.loses = 0;
    this.ties = 0;
  }
}
