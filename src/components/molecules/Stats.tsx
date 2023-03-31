import { GameAtom } from "@/atoms/GameAtom";
import { Stat } from "@/components/atoms/Stat";
import { useAtomValue } from "jotai";

export function Stats() {
  const game = useAtomValue(GameAtom);

  const total = game.questions.length;
  const right = game.questions.filter((question) => question.correct).length;
  const wrong = game.questions.filter((question) => !question.correct).length;

  return (
    <div className="stats">
      <Stat variant="total" title="Number of questions" number={total} />
      <Stat variant="right" title="Number of right questions" number={right} />
      <Stat variant="wrong" title="Number of wrong questions" number={wrong} />
    </div>
  );
}
