import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { NotesPage } from "./pages/NotesPage";
import { QuizPage } from "./pages/QuizPage";
import type { Note } from "./types";

type Page = "home" | "notes" | "quiz";

// Main application component that manages the state and rendering of different pages.
//notes : Note[] onNotesChange processes the array of Notes and returns nothing
export function App({ notes, onNotesChange }: { notes: Note[]; onNotesChange: (notes: Note[]) => void }) {

  // State for the current page and the selected note.
  const [page, setPage] = useState<Page>("home");
  // State for the currently selected note.
  const [selected, setSelected] = useState<Note | undefined>(notes[0]);

  // Saves the note with the given title and content.
  function save(title: string, content: string) {
    // Get the current timestamp for the note's creation and update times.
    const now = new Date().toISOString();

    // Create the note, preserving its ID and creation time if it already exists.
    const note: Note = { id: selected?.id ?? crypto.randomUUID(), title, content, tags: [], createdAt: selected?.createdAt ?? now, updatedAt: now };
    const next = selected ? notes.map((item) => item.id === selected.id ? note : item) : [note, ...notes];
    onNotesChange(next); setSelected(note); setPage("notes");
  }
  return <div className="app-shell"><header><button className="brand" onClick={() => setPage("home")}>recordar<span>.</span></button><nav><button className={page === "notes" ? "active" : ""} onClick={() => setPage("notes")}>Notes</button><button className={page === "quiz" ? "active" : ""} onClick={() => setPage("quiz")}>Quiz</button></nav></header><main>{page === "home" && <HomePage noteCount={notes.length} onStart={() => setPage("notes")} />}{page === "notes" && <NotesPage notes={notes} selected={selected} onSelect={setSelected} onSave={save} onStartQuiz={() => setPage("quiz")} />}{page === "quiz" && <QuizPage note={selected} />}</main><footer>Remember more by returning often.</footer></div>;
}
