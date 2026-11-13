import { useState } from "react";
import type { Note } from "../types";
import { QuizCard } from "../components/QuizCard";
import { ProgressBar } from "../components/ProgressBar";
import { generateQuestions } from "../utils/quizUtils";

export function QuizPage({ note }: { note?: Note }) {
  const questions = note ? generateQuestions(note) : [];
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  if (!note || !questions.length) return <section className="empty"><p className="eyebrow">Recall studio</p><h1>Select a note to begin.</h1><p>Choose a note from your library and Recordar will generate a quiz from it.</p></section>;
  const question = questions[index];
  return <section className="quiz-page"><div className="page-heading"><div><p className="eyebrow">Recall studio</p><h1>{note.title}</h1></div><ProgressBar current={index + 1} total={questions.length} /></div><QuizCard question={question} answerVisible={revealed} onReveal={() => setRevealed(true)} /><button className="secondary" disabled={!revealed} onClick={() => { setIndex((index + 1) % questions.length); setRevealed(false); }}>{index === questions.length - 1 ? "Restart quiz" : "Next question →"}</button></section>;
}
