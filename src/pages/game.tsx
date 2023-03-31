import { GameAtom } from "@/atoms/GameAtom";
import { QuestionsAtom } from "@/atoms/QuestionsAtom";
import { ButtonGroup } from "@/components/molecules/ButtonGroup";
import { useAtomValue } from "jotai";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Game() {
  const router = useRouter();
  const game = useAtomValue(GameAtom);
  const questions = useAtomValue(QuestionsAtom);

  const pageTitle = `TriviAle ${game.turn + 1}/${questions.length}`;

  const correctAnswers = game.questions.filter(
    (question) => question.correct
  ).length;

  const incorrectAnswers = game.questions.filter(
    (question) => !question.correct
  ).length;

  // FIX: temporal solution || questions[0]
  const questionTurn = questions[game.turn] || questions[0];

  useEffect(() => {
    if (questions.length === 0) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (questions.length !== 0 && game.turn === questions.length) {
      router.push("/stats");
    }
  }, [game.turn]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="game container">
        {questions.length ? (
          <>
            <div className="content">
              <div className="logo">
                <Image src="/logo.png" alt="logo" fill />
              </div>
              <div className="info">
                <p className="question">{questionTurn.question}</p>
                <span className="turn">{`${game.turn + 1}/${
                  questions.length
                }`}</span>
              </div>
            </div>
            <ButtonGroup answers={questionTurn.allAnswers} />
          </>
        ) : null}
      </main>
    </>
  );
}
