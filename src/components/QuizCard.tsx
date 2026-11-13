import type { QuizQuestion } from "../types";

export function QuizCard({ question, answerVisible, onReveal }: { question: QuizQuestion; answerVisible: boolean; onReveal: () => void }) {
  return <article className="card quiz-card"><p className="eyebrow">Recall prompt</p><h2>{question.prompt}</h2>{answerVisible ? <p className="answer">{question.answer}</p> : <button onClick={onReveal}>Reveal answer</button>}</article>;
}
