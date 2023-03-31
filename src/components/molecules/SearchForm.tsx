import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Field, Form } from "houseform";
import { useState } from "react";
import { Input } from "../atoms/Input";
import { Option, Select } from "../atoms/Select";
import { z } from "zod";
import { Response } from "@/pages/api/game";
import { useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { QuestionsAtom } from "@/atoms/QuestionsAtom";
import { Button } from "../atoms/Button";
import { useRouter } from "next/router";
import { GameAtom } from "@/atoms/GameAtom";

type Props = {
  categories: Option[];
};

type FormType = {
  questions: number;
  category: string;
  difficulty: string;
};

const difficulties = [
  {
    value: "any",
    text: "Any difficulty",
  },
  {
    value: "easy",
    text: "Easy",
  },
  {
    value: "medium",
    text: "Medium",
  },
  {
    value: "hard",
    text: "Hard",
  },
];

const questionsValidator = z.number().refine((val) => val > 0 && val <= 50, {
  message: "The number of question have to be between 1 and 50",
});

export function SearchForm(props: Props) {
  const router = useRouter();
  const [error, setError] = useState("");

  const setQuestions = useSetAtom(QuestionsAtom);
  const setGame = useSetAtom(GameAtom);

  async function handleOnSubmit(data: FormType) {
    const response = await fetch("/api/game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questions: data.questions,
        category: data.category,
        difficulty: data.difficulty,
      }),
    })
      .then((res) => res.json())
      .then((data: Response) => data);

    if ("message" in response) {
      setError(response.message);
      return;
    }

    setQuestions(response);
    setGame({
      turn: 0,
      questions: [],
    });

    router.push("/game");
  }

  return (
    <Form<FormType> onSubmit={handleOnSubmit}>
      {({ submit }) => (
        <div className="search__form">
          <Field
            name="questions"
            initialValue={3}
            onChangeValidate={questionsValidator}
          >
            {({ value, setValue, onBlur, errors }) => (
              <Input
                type="number"
                placeholder="Number of questions"
                icon={<QuestionMarkCircleIcon />}
                value={value}
                pattern="\d*"
                onChange={(e) => setValue(Number(e.target.value))}
                onBlur={onBlur}
                errors={errors}
              />
            )}
          </Field>
          <Field name="category" initialValue={props.categories[0].value}>
            {({ value, setValue, onBlur }) => (
              <Select
                placeholder="Category"
                options={props.categories}
                name="category"
                id="category"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
              />
            )}
          </Field>
          <Field name="difficulty" initialValue="any">
            {({ value, setValue, onBlur }) => (
              <Select
                placeholder="Difficulty"
                options={difficulties}
                name="difficulty"
                id="difficulty"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
              />
            )}
          </Field>
          {error && <p style={{ backgroundColor: "red" }}>{error}</p>}
          <Button variant="play" type="submit" onClick={submit}>
            Play!
          </Button>
          {/* <button onClick={submit} className="btn btn__play">
            Play!
          </button> */}
        </div>
      )}
    </Form>
  );
}
