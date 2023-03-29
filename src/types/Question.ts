export type Question = {
  category: string;
  difficulty: "easy" | "hard" | "medium";
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  allAnswers: string[];
};
