import { useEffect, useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

/**
 * Maps icon names and categories to their asset paths.
 * Icons live in src/assets/icons/<Category>/<name>.svg
 *
 * Usage:
 *   <Icon name="calendar-date" category="Date & Time" size={16} />
 *   <Icon name="bank-01" category="Finance & Payment" className="text-emerald-600" />
 */

// Scoped to the categories listed in ICONS to avoid scanning all ~5 000 SVG files.
const svgModules = import.meta.glob<string>(
  [
    '/src/assets/icons/Arrows/*.svg',
    '/src/assets/icons/Date & Time/*.svg',
    '/src/assets/icons/Finance & Payment/*.svg',
    '/src/assets/icons/Charts & Graphs  /*.svg',
    '/src/assets/icons/User Interface/*.svg',
    '/src/assets/icons/File & Folder/*.svg',
    '/src/assets/icons/Alert & Feedback/*.svg',
  ],
  { query: '?raw', import: 'default' },
)

function normalizeSvg(raw: string, size: number): string {
  return (
    raw
      // Resize the root SVG element
      .replace(/width="\d+(\.\d+)?"/g, `width="${size}"`)
      .replace(/height="\d+(\.\d+)?"/g, `height="${size}"`)
      // Replace hardcoded stroke colors with currentColor
      .replace(/stroke="black"/g, 'stroke="currentColor"')
      .replace(/stroke="white"/g, 'stroke="currentColor"')
      // All icons in this library are stroke-based (fill="none" on the SVG root).
      // SVG presentation attributes are overridden by CSS, so we force fill:none
      // via inline style on every shape element — inline styles beat any CSS rule.
      .replace(
        /<(path|circle|rect|line|polyline|polygon|ellipse)(\s)/g,
        '<$1 style="fill:none"$2',
      )
  )
}

interface IconProps {
  name: string
  category: string
  size?: number
  className?: string
  style?: CSSProperties
}

export function Icon({ name, category, size = 20, className, style }: IconProps) {
  const [svg, setSvg] = useState<string | null>(null)

  useEffect(() => {
    const key = `/src/assets/icons/${category}/${name}.svg`
    const loader = svgModules[key]
    if (!loader) {
      console.warn(`[Icon] Not found: ${key}`)
      return
    }
    let cancelled = false
    loader().then((raw) => {
      if (!cancelled) setSvg(normalizeSvg(raw, size))
    })
    return () => {
      cancelled = true
    }
  }, [name, category, size])

  if (!svg) return <span style={{ width: size, height: size, display: 'inline-block' }} />

  return (
    <span
      className={cn('inline-flex items-center justify-center shrink-0', className)}
      style={style}
      aria-hidden="true"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
