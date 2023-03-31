import { atom } from "jotai";
import { Question } from "@/types/Question";

export const QuestionsAtom = atom<Question[]>([]);
