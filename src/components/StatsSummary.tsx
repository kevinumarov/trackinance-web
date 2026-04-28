import { formatKRW, formatMonthYear } from '@/lib/format'
import type { Transaction } from '@/types'

interface Props {
  transactions: Transaction[]
  selectedDate: string
}

function getBarColor(pct: number): string {
  if (pct > 60) return '#16a34a'   // green
  if (pct > 35) return '#d97706'   // amber
  if (pct > 15) return '#ea580c'   // orange
  return '#dc2626'                 // red
}

function getRemainingLabel(pct: number): string {
  if (pct > 60) return 'On track'
  if (pct > 35) return 'Spending up'
  if (pct > 15) return 'Watch out'
  if (pct >= 0) return 'Low budget'
  return 'Overspent'
}

export function StatsSummary({ transactions, selectedDate }: Props) {
  const income = transactions
    .filter((t) => t.kind === 'income')
    .reduce((s, t) => s + t.amount, 0)

  const spent = transactions
    .filter((t) => t.kind === 'expense')
    .reduce((s, t) => s + t.amount, 0)

  const needs = transactions
    .filter((t) => t.kind === 'expense' && t.category === 'needs')
    .reduce((s, t) => s + t.amount, 0)

  const wants = transactions
    .filter((t) => t.kind === 'expense' && t.category === 'wants')
    .reduce((s, t) => s + t.amount, 0)

  const compulsive = transactions
    .filter((t) => t.kind === 'expense' && t.category === 'compulsive')
    .reduce((s, t) => s + t.amount, 0)

  const remaining = income - spent
  const remainingPct = income > 0 ? Math.max(0, (remaining / income) * 100) : 0
  const savingsRate = income > 0 ? Math.max(0, Math.round((remaining / income) * 100)) : 0
  const spentPct = income > 0 ? Math.min(100, (spent / income) * 100) : 0
  const barColor = getBarColor(remainingPct)

  return (
    <div>
      {/* Top stats row */}
      <div className="flex border-b border-gray-100">
        {/* Income */}
        <div className="flex-1 px-5 py-4 border-r border-gray-100">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
            Income
          </p>
          <p className="text-xl font-bold text-gray-900">{formatKRW(income)}</p>
          <p className="text-xs text-gray-400 mt-1">{formatMonthYear(selectedDate)}</p>
        </div>

        {/* Remaining — the gamified health bar */}
        <div className="flex-[1.4] px-5 py-4 border-r border-gray-100">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
              Remaining
            </p>
            {income > 0 && (
              <span
                className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: `${barColor}18`, color: barColor }}
              >
                {getRemainingLabel(remainingPct)}
              </span>
            )}
          </div>
          <p
            className="text-xl font-bold"
            style={{ color: remaining < 0 ? '#dc2626' : income === 0 ? '#9ca3af' : barColor }}
          >
            {remaining < 0 ? `−${formatKRW(Math.abs(remaining))}` : formatKRW(remaining)}
          </p>
          {/* Budget health bar */}
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: income > 0 ? `${Math.min(spentPct, 100)}%` : '0%',
                backgroundColor: barColor,
              }}
            />
          </div>
          {income > 0 && (
            <p className="text-[10px] text-gray-400 mt-1">
              {Math.round(spentPct)}% of income used
            </p>
          )}
        </div>

        {/* Needs */}
        <div className="flex-1 px-5 py-4 border-r border-gray-100">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Needs</p>
          </div>
          <p className="text-xl font-bold text-gray-900">{formatKRW(needs)}</p>
          <p className="text-xs text-gray-400 mt-1">
            {spent > 0 ? `${Math.round((needs / spent) * 100)}% of spent` : '—'}
          </p>
        </div>

        {/* Wants */}
        <div className="flex-1 px-5 py-4 border-r border-gray-100">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Wants</p>
          </div>
          <p className="text-xl font-bold text-gray-900">{formatKRW(wants)}</p>
          <p className="text-xs text-gray-400 mt-1">
            {spent > 0 ? `${Math.round((wants / spent) * 100)}% of spent` : '—'}
          </p>
        </div>

        {/* Compulsive */}
        <div className="flex-1 px-5 py-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Compulsive</p>
          </div>
          <p className="text-xl font-bold text-gray-900">{formatKRW(compulsive)}</p>
          <p className="text-xs text-gray-400 mt-1">
            {spent > 0 ? `${Math.round((compulsive / spent) * 100)}% of spent` : '—'}
          </p>
        </div>

        {/* Savings rate */}
        <div className="flex-1 px-5 py-4 border-l border-gray-100">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
            Savings
          </p>
          <p
            className="text-xl font-bold"
            style={{ color: savingsRate >= 20 ? '#16a34a' : savingsRate > 0 ? '#d97706' : '#9ca3af' }}
          >
            {income > 0 ? `${savingsRate}%` : '—'}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {income > 0 ? formatKRW(Math.max(0, remaining)) : 'Add income first'}
          </p>
        </div>
      </div>
    </div>
  )
}
