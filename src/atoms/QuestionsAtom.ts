import { atom } from "jotai";
import { Question } from "@/types/Question";

export const QuestionsAtom = atom<Question[]>([
  {
    category: "Entertainment: Books",
    difficulty: "easy",
    question: "Who wrote the novel &#039;Fear And Loathing In Las Vegas&#039;?",
    incorrectAnswers: [
      "F. Scott Fitzgerald",
      "Henry Miller",
      "William S. Burroughs",
    ],
    correctAnswer: "Hunter S. Thompson",
    allAnswers: [
      "Hunter S. Thompson",
      "William S. Burroughs",
      "Henry Miller",
      "F. Scott Fitzgerald",
    ],
  },
  {
    category: "History",
    difficulty: "medium",
    question:
      "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
    incorrectAnswers: [
      "USS North Carolina",
      "USS Constitution",
      "USS Indianapolis",
    ],
    correctAnswer: "USS Pueblo",
    allAnswers: [
      "USS Pueblo",
      "USS Indianapolis",
      "USS Constitution",
      "USS North Carolina",
    ],
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "medium",
    question:
      "This weapon in Counter-Strike: Global Offensive does not exist in real life.",
    incorrectAnswers: ["AWP", "M4A1", "MP9"],
    correctAnswer: "M4A4",
    allAnswers: ["AWP", "M4A1", "MP9", "M4A4"],
  },
  {
    category: "History",
    difficulty: "medium",
    question:
      "What was the name of one of the surviving palaces of Henry VIII located near Richmond, London?",
    incorrectAnswers: [
      "St James&#039;s Palace",
      "Buckingham Palace",
      "Coughton Court",
    ],
    correctAnswer: "Hampton Court",
    allAnswers: [
      "Hampton Court",
      "Coughton Court",
      "Buckingham Palace",
      "St James&#039;s Palace",
    ],
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "hard",
    question:
      "In the Team Fortress 2 canon, what did Shakespearicles NOT invent?",
    incorrectAnswers: ["Two-Story Building", "Rocket Launcher", "Stage Play"],
    correctAnswer: "Stairs",
    allAnswers: [
      "Stairs",
      "Stage Play",
      "Rocket Launcher",
      "Two-Story Building",
    ],
  },
]);
