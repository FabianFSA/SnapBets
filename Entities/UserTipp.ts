import { User } from "./User";
import { Game } from "./Game";
import type { Team } from "./Team";

export class UserTipp {
  id: string;
  user_fk: User;
  game_fk: Game;
  predictedWinner_fk: Team;
  createdAt: Date;
  updatedAt: Date;

  constructor(user_fk: User, game_fk: Game, predictedWinner_fk: Team) {
    this.id = crypto.randomUUID();
    this.user_fk = user_fk;
    this.game_fk = game_fk;
    this.predictedWinner_fk = predictedWinner_fk;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
