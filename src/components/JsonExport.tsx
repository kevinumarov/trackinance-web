import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import type { Transaction, ViewMode } from '@/types'

interface Props {
  transactions: Transaction[]
  viewMode: ViewMode
  selectedDate: string
}

function buildExportData(transactions: Transaction[], viewMode: ViewMode, selectedDate: string) {
  const [year, month] = selectedDate.split('-').map(Number)

  let startDate: string
  let endDate: string

  if (viewMode === 'monthly') {
    const lastDay = new Date(year, month, 0).getDate()
    startDate = `${year}-${month.toString().padStart(2, '0')}-01`
    endDate = `${year}-${month.toString().padStart(2, '0')}-${lastDay}`
  } else {
    startDate = selectedDate
    endDate = selectedDate
  }

  const income = transactions.filter((t) => t.kind === 'income').reduce((s, t) => s + t.amount, 0)
  const spent = transactions.filter((t) => t.kind === 'expense').reduce((s, t) => s + t.amount, 0)
  const needs = transactions.filter((t) => t.kind === 'expense' && t.category === 'needs').reduce((s, t) => s + t.amount, 0)
  const wants = transactions.filter((t) => t.kind === 'expense' && t.category === 'wants').reduce((s, t) => s + t.amount, 0)
  const compulsive = transactions.filter((t) => t.kind === 'expense' && t.category === 'compulsive').reduce((s, t) => s + t.amount, 0)

  return {
    period: { start_date: startDate, end_date: endDate, view_mode: viewMode },
    summary: {
      income,
      total_spend: spent,
      remaining: income - spent,
      savings_rate: income > 0 ? `${Math.round(((income - spent) / income) * 100)}%` : 'N/A',
      categories: { needs, wants, compulsive },
      currency: 'KRW',
    },
    entries: [...transactions]
      .sort((a, b) => b.date.localeCompare(a.date))
      .map((tx) => ({
        id: tx.id,
        kind: tx.kind,
        date: tx.date,
        amount: tx.amount,
        account: tx.account,
        ...(tx.kind === 'expense'
          ? {
              category: tx.category,
              subcategory: tx.subcategory,
              ...(tx.vendor ? { vendor: tx.vendor } : {}),
              ...(tx.location ? { location: tx.location } : {}),
            }
          : { source: tx.source }),
        reason: tx.reason,
        type: tx.type,
      })),
  }
}

function syntaxHighlight(json: string): string {
  const escaped = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return escaped.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      if (/^"/.test(match)) {
        if (/:$/.test(match)) return `<span style="color:#93c5fd">${match}</span>`
        return `<span style="color:#86efac">${match}</span>`
      }
      if (/true|false/.test(match)) return `<span style="color:#fde68a">${match}</span>`
      if (/null/.test(match)) return `<span style="color:#fca5a5">${match}</span>`
      return `<span style="color:#67e8f9">${match}</span>`
    },
  )
}

export function JsonExport({ transactions, viewMode, selectedDate }: Props) {
  const [copied, setCopied] = useState(false)

  const data = buildExportData(transactions, viewMode, selectedDate)
  const jsonString = JSON.stringify(data, null, 2)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsonString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col h-full bg-gray-950">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 sticky top-0 bg-gray-950 z-10">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-xs font-mono">{'</>'}</span>
          <span className="text-gray-300 text-xs font-mono">period_export.json</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors cursor-pointer border border-white/10 hover:border-white/20 rounded px-2.5 py-1"
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 px-8 text-center">
          <p className="text-xs text-gray-500 font-mono">
            {'// No entries yet.'}
          </p>
          <p className="text-xs text-gray-600 font-mono mt-1">
            {'// Add income or expenses to see JSON.'}
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-auto p-5">
          <pre
            className="text-xs font-mono leading-relaxed text-gray-300 whitespace-pre"
            dangerouslySetInnerHTML={{ __html: syntaxHighlight(jsonString) }}
          />
        </div>
      )}
    </div>
  )
}
