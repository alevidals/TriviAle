import { atom } from "jotai";
import { Game } from "@/types/Game";

export const GameAtom = atom<Game>({
  turn: 0,
  questions: [],
});
