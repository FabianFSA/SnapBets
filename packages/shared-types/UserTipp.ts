export interface UserTipp {
  id: string;
  userId: string;
  gameId: string;
  predictedWinner: string;
  createdAt: Date;
  updatedAt: Date;
}
