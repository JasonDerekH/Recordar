export function HomePage({ noteCount, onStart }: { noteCount: number; onStart: () => void }) {
  return <section className="hero"><p className="eyebrow">A quieter way to remember</p><h1>Capture ideas.<br /><em>Recall them later.</em></h1><p className="lede">Recordar turns your notes into small moments of active recall.</p><div className="stats"><div><strong>{noteCount}</strong><span>notes saved</span></div><div><strong>∞</strong><span>ways to revisit</span></div></div><button onClick={onStart}>Open your notes <span>→</span></button></section>;
}
