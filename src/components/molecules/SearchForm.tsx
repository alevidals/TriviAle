import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Field, Form } from "houseform";
import { useEffect, useState } from "react";
import { Input } from "../atoms/Input";
import { Option, Select } from "../atoms/Select";
import { z } from "zod";

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

export function SearchForm() {
  const [categories, setCategories] = useState<Option[]>([]);

  async function getCategories() {
    try {
      const res = await fetch("/api/categories", {
        method: "GET",
      });

      const jsonResponse = await res.json();

      setCategories(jsonResponse);
    } catch (err) {
      throw new Error("err");
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  function handleOnSubmit(data: FormType) {
    console.log(data);
  }

  return (
    <Form<FormType> onSubmit={handleOnSubmit}>
      {({ submit }) => (
        <div className="search__form">
          <Field
            name="questions"
            initialValue={20}
            onChangeValidate={questionsValidator}
          >
            {({ value, setValue, onBlur, errors }) => (
              <Input
                type="number"
                placeholder="Number of questions"
                icon={<QuestionMarkCircleIcon />}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                onBlur={onBlur}
                errors={errors}
              />
            )}
          </Field>
          <Field name="category" initialValue="9">
            {({ value, setValue, onBlur }) => (
              <Select
                placeholder="Category"
                options={categories}
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
          <button onClick={submit} className="btn btn__play">
            Play!
          </button>
        </div>
      )}
    </Form>
  );
}
