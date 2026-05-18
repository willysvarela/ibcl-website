'use client'

import { MotionSection } from './MotionSection'

interface SectionHeadingProps {
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const center = align === 'center'

  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}>
      {tag && (
        <MotionSection delay={0}>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-sans font-semibold text-xs uppercase tracking-wider mb-4 ${
              light
                ? 'bg-white/15 text-white'
                : 'bg-primary/10 text-primary'
            }`}
          >
            {tag}
          </span>
        </MotionSection>
      )}
      <MotionSection delay={0.1}>
        <h2
          className={`font-sans font-bold leading-tight tracking-tight ${
            light ? 'text-white' : 'text-on-surface'
          } text-3xl md:text-4xl lg:text-[2.75rem]`}
        >
          {title}
        </h2>
      </MotionSection>
      {subtitle && (
        <MotionSection delay={0.2}>
          <p
            className={`font-body text-base md:text-lg leading-relaxed mt-4 ${
              light ? 'text-white/75' : 'text-on-surface-variant'
            } ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
          >
            {subtitle}
          </p>
        </MotionSection>
      )}
    </div>
  )
}
