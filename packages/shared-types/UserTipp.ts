import type { GameWithTeams, Team } from "./src";

export interface UserTipp {
  id: string;
  userId: string;
  gameId: string;
  predictedWinnerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserTippWithRelations extends UserTipp {
  game: GameWithTeams;
  predictedWinner: Team;
}
