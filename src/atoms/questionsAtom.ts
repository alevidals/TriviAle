import { Question } from "@/types/Question";
import { atom } from "jotai";

export const questionsAtom = atom<Question[]>([]);
