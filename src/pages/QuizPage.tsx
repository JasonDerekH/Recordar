import { useState } from "react";
import type { Note } from "../types";
import { QuizCard } from "../components/QuizCard";
import { ProgressBar } from "../components/ProgressBar";
import { generateQuestions } from "../utils/quizUtils";
import type { QuizResult } from "../types";

export function QuizPage({ note }: { note?: Note }) {
  const questions = note ? generateQuestions(note) : [];
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [lastAnswer, setLastAnswer] = useState<{ submitted: string; correct: boolean }>();
  if (!note || !questions.length) return <section className="empty"><p className="eyebrow">Recall studio</p><h1>Select a note to begin.</h1><p>Choose a note from your library and Recordar will generate a quiz from it.</p></section>;
  if (results.length === questions.length) {
    const score = results.filter((result) => result.correct).length;
    return <section className="quiz-page score-page"><p className="eyebrow">Quiz complete</p><h1>{score}/{questions.length}</h1><p className="lede">You remembered {score === 1 ? "one answer" : `${score} answers`} from “{note.title}”.</p><button onClick={() => { setIndex(0); setResults([]); setLastAnswer(undefined); }}>Try again</button></section>;
  }
  const question = questions[index];
  function answer(submitted: string) {
    const correct = submitted.toLowerCase().includes(question.answer.toLowerCase().slice(0, 18));
    setLastAnswer({ submitted, correct });
    setResults((current) => [...current, { questionId: question.id, correct }]);
  }
  return <section className="quiz-page"><div className="page-heading"><div><p className="eyebrow">Recall studio</p><h1>{note.title}</h1></div><ProgressBar current={index + 1} total={questions.length} /></div>{lastAnswer ? <article className="card quiz-card"><p className="eyebrow">{lastAnswer.correct ? "Correct" : "Keep practicing"}</p><h2>{lastAnswer.correct ? "Nice recall." : "Good attempt."}</h2><p className="answer"><strong>Reference answer:</strong> {question.answer}</p><button onClick={() => { setIndex((current) => current + 1); setLastAnswer(undefined); }}>Next question →</button></article> : <QuizCard question={question} onAnswer={answer} />}</section>;
}
