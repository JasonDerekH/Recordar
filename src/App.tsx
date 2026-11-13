import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { NotesPage } from "./pages/NotesPage";
import { QuizPage } from "./pages/QuizPage";
import type { Note } from "./types";

type Page = "home" | "notes" | "quiz";

export function App({ notes, onNotesChange }: { notes: Note[]; onNotesChange: (notes: Note[]) => void }) {
  const [page, setPage] = useState<Page>("home");
  const [selected, setSelected] = useState<Note | undefined>(notes[0]);
  function save(title: string, content: string) {
    const now = new Date().toISOString();
    const note: Note = { id: selected?.id ?? crypto.randomUUID(), title, content, tags: [], createdAt: selected?.createdAt ?? now, updatedAt: now };
    const next = selected ? notes.map((item) => item.id === selected.id ? note : item) : [note, ...notes];
    onNotesChange(next); setSelected(note); setPage("notes");
  }
  return <div className="app-shell"><header><button className="brand" onClick={() => setPage("home")}>recordar<span>.</span></button><nav><button className={page === "notes" ? "active" : ""} onClick={() => setPage("notes")}>Notes</button><button className={page === "quiz" ? "active" : ""} onClick={() => setPage("quiz")}>Quiz</button></nav></header><main>{page === "home" && <HomePage noteCount={notes.length} onStart={() => setPage("notes")} />}{page === "notes" && <NotesPage notes={notes} selected={selected} onSelect={setSelected} onSave={save} />}{page === "quiz" && <QuizPage note={selected} />}</main><footer>Remember more by returning often.</footer></div>;
}
