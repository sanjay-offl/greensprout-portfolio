/* ─────────────────────────────────────────────────
   PAGE ENTER ANIMATION
   template.tsx re-mounts on every navigation,
   triggering the enter keyframe on each page.
───────────────────────────────────────────────── */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-enter">
      {children}
    </div>
  );
}
