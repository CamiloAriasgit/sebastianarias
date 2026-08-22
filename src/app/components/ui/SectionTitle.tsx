// components/SectionTitle.tsx
import { ElementType, ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  as?: ElementType
  className?: string
}

export function SectionTitle({
  children,
  as: Tag = 'h2',
  className = '',
}: SectionTitleProps) {
  return (
    <Tag
      className={`block text-neutral-900 tracking-tight text-balance ${className}`}
      style={{
        fontSize: 'clamp(1.5rem, 2.2vw, 2.75rem)',
        lineHeight: 1.2,
        letterSpacing: '-0.015em',
      }}
    >
      {children}
    </Tag>
  )
}