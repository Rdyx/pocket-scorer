export type Combinaison = {
  name: string;
  pointsText: string;
  playerPoints: number;
};

export type Player = {
  name: string;
  score: number;
  combinaisons: Combinaison[];
};
