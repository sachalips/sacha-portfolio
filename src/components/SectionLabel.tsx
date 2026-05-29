interface Props {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: Props) {
  return (
    <span
      className={`font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink/50 ${className}`}
    >
      {children}
    </span>
  )
}
