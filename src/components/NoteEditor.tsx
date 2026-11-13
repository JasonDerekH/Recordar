import { useState } from "react";
import type { Note } from "../types";

type Props = { note?: Note; onSave: (title: string, content: string) => void };

export function NoteEditor({ note, onSave }: Props) {
  const [title, setTitle] = useState(note?.title ?? "");
  const [content, setContent] = useState(note?.content ?? "");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (title.trim() && content.trim()) onSave(title.trim(), content.trim());
  }

  return (
    <form className="card editor" onSubmit={submit}>
      <label>Title<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What are you learning?" /></label>
      <label>Note<textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write the idea in your own words..." rows={7} /></label>
      <button type="submit">{note ? "Save changes" : "Add note"}</button>
    </form>
  );
}
