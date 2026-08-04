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
      className={`block text-neutral-900 font-medium text-balance ${className}`}
      style={{
        fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
      }}
    >
      {children}
    </Tag>
  )
}