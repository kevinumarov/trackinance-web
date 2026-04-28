import {
  ShoppingCart, Coffee, CreditCard, Gamepad2, Home, Zap,
  Heart, Music, ShoppingBag, Laptop, RefreshCcw, DollarSign,
  TrendingUp,
} from 'lucide-react'
import { formatKRW, formatTime, getDateKey, formatDateGroupLabel } from '@/lib/format'
import type { Transaction, CategoryType } from '@/types'

const EXPENSE_BADGE: Record<CategoryType, { bg: string; text: string; label: string }> = {
  needs: { bg: '#f0fdf4', text: '#16a34a', label: 'Needs' },
  wants: { bg: '#eef2ff', text: '#6366f1', label: 'Wants' },
  compulsive: { bg: '#fff7ed', text: '#ea580c', label: 'Compulsive' },
}

function getExpenseIcon(subcategory: string) {
  const s = subcategory.toLowerCase()
  if (s === 'groceries') return <ShoppingCart size={14} />
  if (s === 'dining') return <Coffee size={14} />
  if (s === 'transportation') return <CreditCard size={14} />
  if (s === 'gaming') return <Gamepad2 size={14} />
  if (s === 'housing') return <Home size={14} />
  if (s === 'utilities') return <Zap size={14} />
  if (s === 'healthcare') return <Heart size={14} />
  if (s === 'entertainment') return <Music size={14} />
  if (s === 'clothing') return <ShoppingBag size={14} />
  if (s === 'electronics') return <Laptop size={14} />
  if (s === 'subscriptions') return <RefreshCcw size={14} />
  return <DollarSign size={14} />
}

interface Props {
  transactions: Transaction[]
  selectedDate: string
}

export function SessionEntries({ transactions, selectedDate }: Props) {
  const sorted = [...transactions].sort((a, b) => b.date.localeCompare(a.date))

  const groups = sorted.reduce<Record<string, Transaction[]>>((acc, tx) => {
    const key = getDateKey(tx.date)
    if (!acc[key]) acc[key] = []
    acc[key].push(tx)
    return acc
  }, {})

  const groupKeys = Object.keys(groups).sort((a, b) => b.localeCompare(a))

  if (transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20 px-8 text-center">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-3">
          <DollarSign size={18} className="text-gray-400" />
        </div>
        <p className="text-sm font-medium text-gray-500">No entries yet</p>
        <p className="text-xs text-gray-400 mt-1">Start by logging income or an expense</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 sticky top-0 bg-white z-10">
        <span className="text-sm font-semibold text-gray-900">Session Entries</span>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
          {transactions.length} {transactions.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      {groupKeys.map((dateKey) => (
        <div key={dateKey}>
          <p className="px-5 pt-4 pb-2 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
            {formatDateGroupLabel(dateKey, selectedDate)}
          </p>

          {groups[dateKey].map((tx) => {
            const isIncome = tx.kind === 'income'

            return (
              <div
                key={tx.id}
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors"
              >
                {/* Icon */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    isIncome ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {isIncome ? (
                    <TrendingUp size={14} />
                  ) : (
                    getExpenseIcon(tx.subcategory ?? '')
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{tx.reason}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {formatTime(tx.date)} · {tx.account}
                  </p>
                </div>

                {/* Amount + Badge */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span
                    className={`text-sm font-semibold ${
                      isIncome ? 'text-emerald-600' : 'text-gray-900'
                    }`}
                  >
                    {isIncome ? '+' : '−'}{formatKRW(tx.amount)}
                  </span>
                  {isIncome ? (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
                      {tx.source ?? 'Income'}
                    </span>
                  ) : tx.category ? (
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: EXPENSE_BADGE[tx.category].bg,
                        color: EXPENSE_BADGE[tx.category].text,
                      }}
                    >
                      {EXPENSE_BADGE[tx.category].label}
                    </span>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
