import type { Note, Question } from "../types";

export function generateQuestions(note: Note): Question[] {
  const sentences = note.content
    .split(/[.!?]+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  return sentences.map((sentence, index) => ({
    id: `${note.id}-question-${index + 1}`,
    noteId: note.id,
    prompt: `What do you remember about “${note.title}”?`,
    answer: sentence,
  }));
}
