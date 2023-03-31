type Question = {
  correctQuestion: string;
  answeredQuestion: string;
  correct: boolean;
};

export type Game = {
  turn: number;
  questions: Question[];
};
