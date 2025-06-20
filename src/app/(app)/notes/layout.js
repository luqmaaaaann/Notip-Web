export default function NotesLayout({ children }) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
