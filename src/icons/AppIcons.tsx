import type { SVGProps } from 'react'
import { cn } from '@/lib/utils'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function iconBase(size: number | undefined, className: string | undefined) {
  return {
    width: size ?? 20,
    height: size ?? 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: cn('shrink-0', className),
  }
}

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  style: { fill: 'none' },
}

export function CalendarIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, className)} {...rest}>
      <path
        d="M3 19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9V6C21 4.34315 19.6569 3 18 3H16M8 3H6C4.34315 3 3 4.34315 3 6V9M8 3V2M8 3H16M8 3V4M16 3V2M16 3V4M13.5 12.5H16.5L14 17.5M3 19V13M3 9H14M21 9H18M10.5 14V16C10.5 16.8284 9.82843 17.5 9 17.5C8.17157 17.5 7.5 16.8284 7.5 16V14C7.5 13.1716 8.17157 12.5 9 12.5C9.82843 12.5 10.5 13.1716 10.5 14Z"
        {...stroke}
      />
    </svg>
  )
}

export function ChevronLeftIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, className)} {...rest}>
      <path
        d="M15 18L9.70711 12.7071C9.31658 12.3166 9.31658 11.6834 9.70711 11.2929L15 6"
        {...stroke}
      />
    </svg>
  )
}

export function ChevronRightIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, className)} {...rest}>
      <path
        d="M9 6L14.2929 11.2929C14.6834 11.6834 14.6834 12.3166 14.2929 12.7071L9 18"
        {...stroke}
      />
    </svg>
  )
}

export function RefreshIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, className)} {...rest}>
      <path
        d="M4 12C4 7.58172 7.58172 4 12 4C13.0609 4 14.0736 4.20651 15 4.58152M4 12L2 10M4 12L6.5 10.5M20 12C20 16.4183 16.4183 20 12 20C10.9391 20 9.92643 19.7935 9 19.4185M20 12L22 14M20 12L17.5 13.5M5.07026 16C5.33734 16.4617 5.64923 16.8942 6 17.2916M18.9297 8C18.6627 7.5383 18.3508 7.10577 18 6.70835"
        {...stroke}
      />
    </svg>
  )
}

export function FileIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, className)} {...rest}>
      <path
        d="M19.8498 11C19.9482 11.2393 20 11.4974 20 11.7604V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V18M19.8498 11C19.765 10.7936 19.6455 10.6012 19.4948 10.4317L12.5967 2.67127C12.4267 2.48002 12.2237 2.32541 12 2.213C11.7243 2.07446 11.4173 2 11.1019 2H7C5.34315 2 4 3.34315 4 5V14M19.8498 11H15C13.3431 11 12 9.65685 12 8V7"
        {...stroke}
      />
    </svg>
  )
}

export function FileUploadIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, className)} {...rest}>
      <path
        d="M12 2.213C11.7243 2.07446 11.4173 2 11.1019 2H7C5.34315 2 4 3.34315 4 5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V11.7604C20 11.4974 19.9482 11.2393 19.8498 11M12 2.213C12.2237 2.32541 12.4267 2.48002 12.5967 2.67127L19.4948 10.4317C19.6455 10.6012 19.765 10.7936 19.8498 11M12 2.213V8C12 9.65685 13.3431 11 15 11H19.8498M12 13.5L10 15.5M12 13.5L14 15.5M12 13.5V19"
        {...stroke}
      />
    </svg>
  )
}

export function WalletIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, className)} {...rest}>
      <path
        d="M19 8C20.6569 8 22 9.34315 22 11V12M19 8V7C19 5.34315 17.6569 4 16 4H4C2.89543 4 2 4.89543 2 6M19 8H4C2.89543 8 2 7.10457 2 6M2 6V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V16M22 12H18C16.8954 12 16 12.8954 16 14C16 15.1046 16.8954 16 18 16H22M22 12V16"
        {...stroke}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronDownIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, className)} {...rest}>
      <path
        d="M6 9L11.2929 14.2929C11.6834 14.6834 12.3166 14.6834 12.7071 14.2929L18 9"
        {...stroke}
      />
    </svg>
  )
}

export function BarChartIcon({ size, className, ...rest }: IconProps) {
  return (
    <svg {...iconBase(size, className)} {...rest}>
      <path
        d="M4 22H20M10 18V9C10 7.89543 9.10457 7 8 7C6.89543 7 6 7.89543 6 9V18H10ZM18 18V4C18 2.89543 17.1046 2 16 2C14.8954 2 14 2.89543 14 4V18H18Z"
        {...stroke}
      />
    </svg>
  )
}
