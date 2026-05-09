import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@/icons/AppIcons'

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function parseDate(value: string): Date {
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function formatValue(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

interface DatePickerProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  size?: 'sm' | 'md'
}

export function DatePicker({ value, onChange, placeholder = 'Pick a date', className, size = 'md' }: DatePickerProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selected = value ? parseDate(value) : null
  const today = new Date()

  const [viewYear, setViewYear] = useState(selected?.getFullYear() ?? today.getFullYear())
  const [viewMonth, setViewMonth] = useState(selected?.getMonth() ?? today.getMonth())

  useEffect(() => {
    if (selected) {
      setViewYear(selected.getFullYear())
      setViewMonth(selected.getMonth())
    }
  }, [value])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const firstDay = getFirstDayOfWeek(viewYear, viewMonth)
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  function selectDay(day: number) {
    const date = new Date(viewYear, viewMonth, day)
    onChange(formatValue(date))
    setOpen(false)
  }

  const displayText = selected
    ? selected.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : placeholder

  const isSmall = size === 'sm'

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={cn(
          'flex items-center gap-1.5 border border-gray-200 rounded-lg bg-white text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 cursor-pointer',
          isSmall ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-2 text-sm',
          open && 'border-gray-300 bg-gray-50',
        )}
      >
        <CalendarIcon size={isSmall ? 12 : 14} className="text-gray-400 shrink-0" />
        <span className={selected ? 'text-gray-900' : 'text-gray-400'}>{displayText}</span>
      </button>

      {open && (
        <div className="absolute top-full mt-1.5 left-0 z-50 bg-white border border-gray-200 rounded-xl shadow-lg shadow-gray-100/80 p-3 w-[260px] select-none">
          {/* Month / Year navigation */}
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={prevMonth}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer text-gray-500 hover:text-gray-900"
            >
              <ChevronLeftIcon size={14} />
            </button>

            <span className="text-sm font-semibold text-gray-900">
              {MONTHS[viewMonth]} {viewYear}
            </span>

            <button
              type="button"
              onClick={nextMonth}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer text-gray-500 hover:text-gray-900"
            >
              <ChevronRightIcon size={14} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-[10px] font-semibold text-gray-400 py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7 gap-y-0.5">
            {Array.from({ length: totalCells }).map((_, i) => {
              const day = i - firstDay + 1
              const isCurrentMonth = day >= 1 && day <= daysInMonth
              const isToday =
                isCurrentMonth &&
                day === today.getDate() &&
                viewMonth === today.getMonth() &&
                viewYear === today.getFullYear()
              const isSelected =
                isCurrentMonth &&
                selected &&
                day === selected.getDate() &&
                viewMonth === selected.getMonth() &&
                viewYear === selected.getFullYear()

              return (
                <button
                  key={i}
                  type="button"
                  disabled={!isCurrentMonth}
                  onClick={() => isCurrentMonth && selectDay(day)}
                  className={cn(
                    'h-8 w-full flex items-center justify-center rounded-lg text-xs transition-colors cursor-pointer',
                    !isCurrentMonth && 'invisible',
                    isCurrentMonth && !isSelected && !isToday && 'text-gray-700 hover:bg-gray-100',
                    isToday && !isSelected && 'text-gray-900 font-semibold bg-gray-100',
                    isSelected && 'bg-gray-900 text-white font-semibold hover:bg-gray-800',
                  )}
                >
                  {isCurrentMonth ? day : ''}
                </button>
              )
            })}
          </div>

          {/* Today shortcut */}
          <div className="mt-2.5 pt-2.5 border-t border-gray-100 flex justify-center">
            <button
              type="button"
              onClick={() => {
                onChange(formatValue(today))
                setOpen(false)
              }}
              className="text-xs text-gray-500 hover:text-gray-900 transition-colors cursor-pointer font-medium"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
