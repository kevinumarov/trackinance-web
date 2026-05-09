export function getCurrentDateString(): string {
  const now = new Date()
  const y = now.getFullYear()
  const m = (now.getMonth() + 1).toString().padStart(2, '0')
  const d = now.getDate().toString().padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function formatKRW(amount: number): string {
  return `₩${amount.toLocaleString('en-US')}`
}

export function formatTime(isoDate: string): string {
  const d = new Date(isoDate)
  const h = d.getUTCHours()
  const m = d.getUTCMinutes().toString().padStart(2, '0')
  const period = h >= 12 ? 'PM' : 'AM'
  const hour = (h % 12 || 12).toString().padStart(2, '0')
  return `${hour}:${m} ${period}`
}

export function getDateKey(isoDate: string): string {
  return isoDate.split('T')[0]
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatDateGroupLabel(dateKey: string, selectedDate: string): string {
  const [year, month, day] = dateKey.split('-').map(Number)
  const monthName = MONTHS[month - 1].toUpperCase()

  if (dateKey === selectedDate) {
    return `TODAY, ${monthName} ${day}`
  }

  const selDate = new Date(selectedDate + 'T00:00:00Z')
  selDate.setUTCDate(selDate.getUTCDate() - 1)
  const yesterdayKey = selDate.toISOString().split('T')[0]

  if (dateKey === yesterdayKey) {
    return `YESTERDAY, ${monthName} ${day}`
  }

  return `${monthName} ${day}, ${year}`
}

export function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return `${MONTHS[month - 1]} ${day}, ${year}`
}

export function formatMonthYear(dateStr: string): string {
  const [year, month] = dateStr.split('-').map(Number)
  return `${MONTHS[month - 1]} ${year}`
}

export function filterByPeriod<T extends { date: string }>(
  items: T[],
  selectedDate: string,
  mode: 'daily' | 'monthly',
): T[] {
  const prefix = mode === 'daily' ? selectedDate.slice(0, 10) : selectedDate.slice(0, 7)
  return items.filter((item) => item.date.startsWith(prefix))
}
