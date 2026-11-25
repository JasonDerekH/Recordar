import { useState } from "react";
import type { Question } from "../types";

export function QuizCard({ question, onAnswer }: { question: Question; onAnswer: (answer: string) => void }) {
  const [answer, setAnswer] = useState("");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (answer.trim()) onAnswer(answer.trim());
  }

  return <article className="card quiz-card"><p className="eyebrow">Question</p><h2>{question.prompt}</h2><form onSubmit={submit}><textarea value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="Write what you remember..." rows={5} /><button type="submit">Check answer</button></form></article>;
}
