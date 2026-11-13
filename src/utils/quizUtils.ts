import type { Note, QuizQuestion } from "../types";

export function generateQuestions(note: Note): QuizQuestion[] {
  const sentences = note.content
    .split(/[.!?]+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  return sentences.map((sentence) => ({
    prompt: `What do you remember about “${note.title}”?`,
    answer: sentence,
  }));
}
