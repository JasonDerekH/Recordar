import { useMemo, useRef, useState } from "react";
import mammoth from "mammoth/mammoth.browser";
import type { Note } from "../types";
import { NoteEditor } from "../components/NoteEditor";
import { NoteList } from "../components/NoteList";

type Props = {
  notes: Note[];
  selected?: Note;
  onSelect: (note?: Note) => void;
  onSave: (title: string, content: string) => void;
  onImport: (title: string, content: string) => void;
  onStartQuiz: () => void;
};

export function NotesPage({
  notes,
  selected,
  onSelect,
  onSave,
  onImport,
  onStartQuiz,
}: Props) {
  const [query, setQuery] = useState("");
  const [importError, setImportError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const filteredNotes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return notes;
    return notes.filter((note) =>
      `${note.title} ${note.content} ${note.tags.join(" ")}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [notes, query]);

  function onImportClick() {
    setImportError("");
    fileInputRef.current?.click();
  }

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      const content = file.name.toLowerCase().endsWith(".docx")
        ? (
            await mammoth.extractRawText({
              arrayBuffer: await file.arrayBuffer(),
            })
          ).value
        : await file.text();
      const title = file.name.replace(/\.(txt|docx)$/i, "");

      if (!content.trim()) {
        setImportError("That document does not contain any readable text.");
        return;
      }

      onImport(title || "Imported note", content.trim());
    } catch {
      setImportError("We could not read that file. Try a TXT or DOCX document.");
    }
  }

  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Your library</p>
          <h1>Notes</h1>
          <p className="page-description">
            A small, searchable home for the things you want to remember.
          </p>
        </div>
        <div className="heading-actions">
          <span className="count">{notes.length} saved</span>
          <button className="primary compact" onClick={() => onSelect()}>
            + New note
          </button>
          <button className="secondary compact" onClick={onImportClick}>
            Import document
          </button>
          <button
            className="secondary compact"
            disabled={!selected}
            onClick={onStartQuiz}
          >
            Start quiz →
          </button>
        </div>
      </div>
      <input
        ref={fileInputRef}
        className="visually-hidden"
        type="file"
        accept=".txt,.docx"
        onChange={handleFileChange}
      />
      {importError && (
        <p className="import-error" role="alert">
          {importError}
        </p>
      )}
      <div className="library-toolbar">
        <label className="search-field">
          <span>⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search your notes"
          />
        </label>
        <span className="result-count">
          {filteredNotes.length} {filteredNotes.length === 1 ? "note" : "notes"}
        </span>
      </div>
      <div className="notes-layout">
        <NoteList notes={filteredNotes} selectedId={selected?.id} onSelect={onSelect} />
        <NoteEditor note={selected} onSave={onSave} />
      </div>
      {!filteredNotes.length && (
        <div className="empty-library">
          <p className="eyebrow">No matches</p>
          <h2>Nothing found yet.</h2>
          <p>Try another search term or create a new note.</p>
        </div>
      )}
    </section>
  );
}
