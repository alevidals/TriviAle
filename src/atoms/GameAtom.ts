import { atom } from "jotai";
import { Game } from "@/types/Game";

export const GameAtom = atom<Game>({
  turn: 0,
  questions: [
    {
      correctAnswer: "string",
      answeredQuestion: "string",
      correct: true,
    },
    {
      correctAnswer: "string",
      answeredQuestion: "string",
      correct: false,
    },
    {
      correctAnswer: "string",
      answeredQuestion: "string",
      correct: true,
    },
    {
      correctAnswer: "string",
      answeredQuestion: "string",
      correct: false,
    },
  ],
});
