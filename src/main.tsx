import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { sampleNotes } from "./data/sampleNotes";
import { loadNotes, saveNotes } from "./services/storage";
import type { Note } from "./types";
import "./styles.css";

function Root() {
  const [notes, setNotes] = useState<Note[]>(() => loadNotes(sampleNotes));
  function updateNotes(next: Note[]) { setNotes(next); saveNotes(next); }
  return <App notes={notes} onNotesChange={updateNotes} />;
}

createRoot(document.getElementById("root")!).render(<StrictMode><Root /></StrictMode>);
