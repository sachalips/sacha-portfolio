const items = [
  'MARKETING',
  'COMMUNICATION',
  'DESIGN',
  'SALES',
  'AI',
  'BRAND',
  'IDENTITÉ',
  'ÉDITORIAL',
  'CONTENU',
  'WEB',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-t border-b border-ink/10 py-4 bg-paper">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/50 mx-6">
            {item}
            <span className="text-marker mx-6 font-bold">×</span>
          </span>
        ))}
      </div>
    </div>
  )
}
