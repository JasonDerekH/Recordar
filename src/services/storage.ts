import type { Note } from "../types";

const NOTES_KEY = "recordar.notes";

export function loadNotes(fallback: Note[]): Note[] {
  const stored = localStorage.getItem(NOTES_KEY);
  if (!stored) return fallback;

  try {
    return JSON.parse(stored) as Note[];
  } catch {
    return fallback;
  }
}

export function saveNotes(notes: Note[]) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}
