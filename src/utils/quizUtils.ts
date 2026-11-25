import type { Note, Question } from "../types";

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function checkAnswer(submitted: string, expected: string) {
  const submittedText = normalizeText(submitted);
  const expectedText = normalizeText(expected);
  if (!submittedText || !expectedText) return false;
  if (submittedText.includes(expectedText) || expectedText.includes(submittedText))
    return true;

  const expectedWords = new Set(
    expectedText.split(" ").filter((word) => word.length > 3),
  );
  const matchingWords = submittedText
    .split(" ")
    .filter((word) => expectedWords.has(word));
  return matchingWords.length / Math.max(expectedWords.size, 1) >= 0.55;
}

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
