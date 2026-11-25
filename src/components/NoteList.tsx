import type { Note } from "../types";

type Props = { notes: Note[]; selectedId?: string; onSelect: (note: Note) => void };

export function NoteList({ notes, selectedId, onSelect }: Props) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <button
          className={`note-row ${selectedId === note.id ? "selected" : ""}`}
          key={note.id}
          onClick={() => onSelect(note)}
        >
          <strong>{note.title}</strong>
          <span>{note.content}</span>
          <div className="note-meta">
            <small>
              {new Date(note.updatedAt).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              })}
            </small>
            {note.tags.slice(0, 2).map((tag) => (
              <small className="tag" key={tag}>
                {tag}
              </small>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}
