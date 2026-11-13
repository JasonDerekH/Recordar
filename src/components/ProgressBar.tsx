export function ProgressBar({ current, total }: { current: number; total: number }) {
  const percent = total ? (current / total) * 100 : 0;
  return <div className="progress-wrap"><div className="progress-label"><span>Progress</span><span>{current}/{total}</span></div><div className="progress"><span style={{ width: `${percent}%` }} /></div></div>;
}
