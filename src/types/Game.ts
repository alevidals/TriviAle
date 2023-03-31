type Question = {
  correctAnswer: string;
  answeredQuestion: string;
  correct: boolean;
};

export type Game = {
  turn: number;
  questions: Question[];
};
