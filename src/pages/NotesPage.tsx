import type { Note } from "../types";
import { NoteEditor } from "../components/NoteEditor";
import { NoteList } from "../components/NoteList";

type Props = { notes: Note[]; selected?: Note; onSelect: (note: Note) => void; onSave: (title: string, content: string) => void };

export function NotesPage({ notes, selected, onSelect, onSave }: Props) {
  return <section><div className="page-heading"><div><p className="eyebrow">Your library</p><h1>Notes</h1></div><span className="count">{notes.length} saved</span></div><div className="notes-layout"><NoteList notes={notes} selectedId={selected?.id} onSelect={onSelect} /><NoteEditor note={selected} onSave={onSave} /></div></section>;
}
