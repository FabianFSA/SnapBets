import { User } from "./User";
import { Game } from "./Game";
import type { Team } from "./Team";

export interface UserTipp {
  id: string;
  user_fk: User;
  game_fk: Game;
  predictedWinner_fk: Team;
  createdAt: Date;
  updatedAt: Date;
}
