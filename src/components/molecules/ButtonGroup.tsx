import { GameAtom } from "@/atoms/GameAtom";
import { QuestionsAtom } from "@/atoms/QuestionsAtom";
import { useAtom, useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { Button } from "../atoms/Button";

type ButtonGroupProps = {
  answers: string[];
};

export function ButtonGroup(props: ButtonGroupProps) {
  const [game, setGame] = useAtom(GameAtom);
  const questions = useAtomValue(QuestionsAtom);

  function handleOnClick(answeredQuestion: string) {
    const correctAnswer = questions[game.turn].correctAnswer;

    setGame({
      turn: game.turn + 1,
      questions: [
        ...game.questions,
        {
          correctAnswer,
          answeredQuestion,
          correct: correctAnswer === answeredQuestion,
        },
      ],
    });
  }

  return (
    <div className="button__group">
      {props.answers.map((answer, index) => (
        <Button
          style={{ backgroundColor: `var(--button-color-${index})` }}
          key={answer}
          variant="answer"
          onClick={() => handleOnClick(answer)}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
}
