import type { Note } from "../types";
import { NoteEditor } from "../components/NoteEditor";
import { NoteList } from "../components/NoteList";

type Props = { notes: Note[]; selected?: Note; onSelect: (note: Note) => void; onSave: (title: string, content: string) => void; onStartQuiz: () => void };

export function NotesPage({ notes, selected, onSelect, onSave, onStartQuiz }: Props) {
  return <section><div className="page-heading"><div><p className="eyebrow">Your library</p><h1>Notes</h1></div><div className="heading-actions"><span className="count">{notes.length} saved</span><button className="secondary" disabled={!selected} onClick={onStartQuiz}>Start quiz →</button></div></div><div className="notes-layout"><NoteList notes={notes} selectedId={selected?.id} onSelect={onSelect} /><NoteEditor note={selected} onSave={onSave} /></div></section>;
}
