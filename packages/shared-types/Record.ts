import { Team } from "./Team";

export interface Record {
  id: string;
  team_fk: Team;
  season: number;
  wins: number;
  loses: number;
  ties: number;
  updatedAt: Date;
}
