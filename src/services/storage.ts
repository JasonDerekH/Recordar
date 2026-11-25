import type { Note } from "../types";

const NOTES_KEY = "recordar.notes";

export function loadNotes(fallback: Note[]): Note[] {
  const stored = localStorage.getItem(NOTES_KEY);
  if (!stored) return fallback;

  try {
    const savedNotes = JSON.parse(stored) as Note[];
    const savedIds = new Set(savedNotes.map((note) => note.id));
    return [...savedNotes, ...fallback.filter((note) => !savedIds.has(note.id))];
  } catch {
    return fallback;
  }
}

export function saveNotes(notes: Note[]) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}
