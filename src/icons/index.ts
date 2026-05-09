export { Icon } from './Icon'

/**
 * Pre-typed convenience references for commonly used icons.
 * Pass these as spread props to <Icon />.
 *
 * Example:
 *   import { Icon, ICONS } from '@/icons'
 *   <Icon {...ICONS.calendarDate} size={16} className="text-gray-500" />
 */

type IconRef = { name: string; category: string }

export const ICONS = {
  // Date & Time
  calendarDate: { name: 'calendar-date', category: 'Date & Time' } satisfies IconRef,
  calendarCheck: { name: 'calendar-check-01', category: 'Date & Time' } satisfies IconRef,
  alarm: { name: 'alarm-01', category: 'Date & Time' } satisfies IconRef,
  clockRefresh: { name: 'clock-refresh', category: 'Date & Time' } satisfies IconRef,

  // Arrows / Navigation
  chevronDown: { name: 'chevron-down', category: 'Arrows' } satisfies IconRef,
  chevronUp: { name: 'chevron-up', category: 'Arrows' } satisfies IconRef,
  chevronLeft: { name: 'chevron-left', category: 'Arrows' } satisfies IconRef,
  chevronRight: { name: 'chevron-right', category: 'Arrows' } satisfies IconRef,
  refresh: { name: 'refresh-09', category: 'Arrows' } satisfies IconRef,

  // Finance & Payment
  bankNote: { name: 'bank-note-01', category: 'Finance & Payment' } satisfies IconRef,
  bank: { name: 'bank-01', category: 'Finance & Payment' } satisfies IconRef,
  wallet: { name: 'wallet-01', category: 'Finance & Payment' } satisfies IconRef,

  // Charts & Graphs (note: category has trailing spaces)
  barChart: { name: 'bar-chart-01', category: 'Charts & Graphs  ' } satisfies IconRef,
  lineChart: { name: 'line-chart-01', category: 'Charts & Graphs  ' } satisfies IconRef,

  // User Interface
  check: { name: 'check', category: 'User Interface' } satisfies IconRef,
  checkCircle: { name: 'check-circle', category: 'User Interface' } satisfies IconRef,
  filter: { name: 'filter-01', category: 'User Interface' } satisfies IconRef,
  menu: { name: 'menu-bar-01', category: 'User Interface' } satisfies IconRef,

  // File & Folder
  fileArrowUp: { name: 'file-arrow-up-01', category: 'File & Folder' } satisfies IconRef,
  file: { name: 'file-01', category: 'File & Folder' } satisfies IconRef,
} as const
