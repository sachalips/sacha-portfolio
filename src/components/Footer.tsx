export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-8 px-6 bg-paper">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink/35">
          © 2026 SACHA ALIPS — CRAFTED IN BORDEAUX WITH COFFEE & CLAUDE CODE.
        </span>
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink/30">
          BUILT WITH NEXT.JS, TAILWIND & FRAMER MOTION.
        </span>
      </div>
    </footer>
  )
}
