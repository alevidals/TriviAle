import { Option } from "@/components/atoms/Select";
import { shuffle } from "@/lib/utils";
import { Question } from "@/types/Question";
import type { NextApiRequest, NextApiResponse } from "next";

export type APIResponse = {
  response_code: number;
  results: APIQuestion[];
};

export type APIQuestion = {
  category: string;
  type: "multiple";
  difficulty: "easy" | "hard" | "medium";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type Response =
  | Question[]
  | {
      message: string;
    };

function getQueryParams(
  questions: string,
  category: string,
  difficulty: string
) {
  let queryParams = `amount=${questions}`;

  if (category !== "any") {
    queryParams += `&category=${category}`;
  }

  if (difficulty !== "any") {
    queryParams += `&difficulty=${difficulty}`;
  }

  queryParams += "&type=multiple";

  return queryParams;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "POST") {
    const { questions, category, difficulty } = req.body;

    if (!questions || !category || !difficulty) {
      return res.status(400).json({
        message: "You did not provide all the body params",
      });
    }

    const queryParams = getQueryParams(questions, category, difficulty);

    const response = await fetch(
      `${process.env.OPENTDB_BASE_URL}/api.php?${queryParams}`
    )
      .catch((err) => {
        console.log(err);

        throw new Error("There was an error fetching questions from the API");
      })
      .then((res) => res.json())
      .then((data: APIResponse) => data);

    const parsedQuestions: Question[] = response.results.map((question) => {
      const allAnswers = question.incorrect_answers.concat(
        question.correct_answer
      );

      return {
        category: question.category,
        difficulty: question.difficulty,
        question: question.question,
        incorrectAnswers: question.incorrect_answers,
        correctAnswer: question.correct_answer,
        allAnswers: shuffle(allAnswers),
      };
    });

    return res.status(200).json(parsedQuestions);
  } else {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }
}
