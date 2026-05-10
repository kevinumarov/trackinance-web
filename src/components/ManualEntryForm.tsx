import { useState } from 'react'
import { Upload, ChevronDown, Plus, Check, X } from 'lucide-react'
import { DatePicker } from '@/components/ui/DatePicker'
import { AccountPicker } from '@/components/ui/AccountPicker'
import { getCurrentDateString } from '@/lib/format'
import type { Transaction, CategoryType, TransactionKind } from '@/types'

const CATEGORY_CONFIG: Record<CategoryType, { label: string; color: string }> = {
  needs: { label: 'Needs', color: '#16a34a' },
  wants: { label: 'Wants', color: '#6366f1' },
  compulsive: { label: 'Compulsive', color: '#ea580c' },
}

interface Props {
  onAdd: (tx: Transaction) => void
  accounts: string[]
  subcategories: Record<CategoryType, string[]>
  onAddSubcategory: (category: CategoryType, name: string) => void
  incomeSources: string[]
  onAddIncomeSource: (name: string) => void
}

interface ExpenseForm {
  amount: string
  date: string
  account: string
  category: CategoryType
  subcategory: string
  vendor: string
  location: string
  reason: string
  isOneTime: boolean
}

interface IncomeForm {
  amount: string
  date: string
  account: string
  source: string
  reason: string
  isRecurring: boolean
}

function InlineAdd({
  placeholder,
  onConfirm,
  onCancel,
}: {
  placeholder: string
  onConfirm: (value: string) => void
  onCancel: () => void
}) {
  const [value, setValue] = useState('')

  const confirm = () => {
    const v = value.trim()
    if (v) onConfirm(v)
  }

  return (
    <div className="flex items-center gap-1.5">
      <input
        autoFocus
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') confirm()
          if (e.key === 'Escape') onCancel()
        }}
        placeholder={placeholder}
        className="flex-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs outline-none focus:border-gray-400"
      />
      <button
        onClick={confirm}
        className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-lg hover:bg-gray-700 cursor-pointer"
      >
        <Check size={12} />
      </button>
      <button
        onClick={onCancel}
        className="w-7 h-7 flex items-center justify-center border border-gray-200 text-gray-400 rounded-lg hover:bg-gray-50 cursor-pointer"
      >
        <X size={12} />
      </button>
    </div>
  )
}

export function ManualEntryForm({
  onAdd,
  accounts,
  subcategories,
  onAddSubcategory,
  incomeSources,
  onAddIncomeSource,
}: Props) {
  const today = getCurrentDateString()
  const [kind, setKind] = useState<TransactionKind>('expense')

  const [expense, setExpense] = useState<ExpenseForm>({
    amount: '',
    date: today,
    account: accounts[0] ?? '',
    category: 'needs',
    subcategory: subcategories.needs[0] ?? '',
    vendor: '',
    location: '',
    reason: '',
    isOneTime: true,
  })

  const [income, setIncome] = useState<IncomeForm>({
    amount: '',
    date: today,
    account: accounts[0] ?? '',
    source: incomeSources[0] ?? '',
    reason: '',
    isRecurring: true,
  })

  const [addingSubcat, setAddingSubcat] = useState(false)
  const [addingSource, setAddingSource] = useState(false)

  const setExp = <K extends keyof ExpenseForm>(k: K, v: ExpenseForm[K]) =>
    setExpense((p) => ({ ...p, [k]: v }))

  const setInc = <K extends keyof IncomeForm>(k: K, v: IncomeForm[K]) =>
    setIncome((p) => ({ ...p, [k]: v }))

  const handleCategoryChange = (cat: CategoryType) => {
    setExpense((p) => ({
      ...p,
      category: cat,
      subcategory: subcategories[cat][0] ?? '',
    }))
  }

  const handleSaveExpense = () => {
    const parsed = Number(expense.amount)
    if (!expense.amount || isNaN(parsed) || parsed <= 0) return
    const now = new Date()
    const hh = now.getHours().toString().padStart(2, '0')
    const mm = now.getMinutes().toString().padStart(2, '0')
    onAdd({
      id: `txn_${Math.random().toString(36).slice(2, 9)}`,
      kind: 'expense',
      date: `${expense.date}T${hh}:${mm}:00`,
      amount: parsed,
      account: expense.account,
      category: expense.category,
      subcategory: expense.subcategory,
      vendor: expense.vendor.trim() || undefined,
      location: expense.location.trim() || undefined,
      reason: expense.reason.trim() || expense.subcategory,
      type: expense.isOneTime ? 'one_time' : 'recurring',
    })
    setExp('amount', '')
    setExp('vendor', '')
    setExp('location', '')
    setExp('reason', '')
  }

  const handleSaveIncome = () => {
    const parsed = Number(income.amount)
    if (!income.amount || isNaN(parsed) || parsed <= 0) return
    const now = new Date()
    const hh = now.getHours().toString().padStart(2, '0')
    const mm = now.getMinutes().toString().padStart(2, '0')
    onAdd({
      id: `inc_${Math.random().toString(36).slice(2, 9)}`,
      kind: 'income',
      date: `${income.date}T${hh}:${mm}:00`,
      amount: parsed,
      account: income.account,
      source: income.source,
      reason: income.reason.trim() || income.source,
      type: income.isRecurring ? 'recurring' : 'one_time',
    })
    setInc('amount', '')
    setInc('reason', '')
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Manual Entry</h2>
          <p className="text-xs text-gray-500 mt-0.5">Record a new transaction</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors mt-0.5">
          <Upload size={16} />
        </button>
      </div>

      {/* Kind toggle */}
      <div className="flex border border-gray-200 rounded-lg overflow-hidden mb-5">
        {(['expense', 'income'] as TransactionKind[]).map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className={`flex-1 py-2 text-xs font-medium capitalize transition-colors cursor-pointer ${
              kind === k
                ? k === 'expense'
                  ? 'bg-gray-900 text-white'
                  : 'bg-emerald-600 text-white'
                : 'bg-white text-gray-400 hover:bg-gray-50'
            }`}
          >
            {k === 'expense' ? '− Expense' : '+ Income'}
          </button>
        ))}
      </div>

      {/* ── EXPENSE FORM ── */}
      {kind === 'expense' && (
        <>
          {/* Amount */}
          <div className="mb-4">
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
              Amount
            </label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-gray-400 transition-colors">
              <span className="text-gray-500 mr-1.5 text-sm font-medium select-none">₩</span>
              <input
                type="number"
                value={expense.amount}
                onChange={(e) => setExp('amount', e.target.value)}
                placeholder="0"
                min="0"
                className="flex-1 outline-none text-sm text-gray-900 bg-transparent placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Date + Account */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Date
              </label>
              <DatePicker
                value={expense.date}
                onChange={(v) => setExp('date', v)}
                size="sm"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Account
              </label>
              <AccountPicker
                value={expense.account}
                onChange={(v) => setExp('account', v)}
                accounts={accounts}
              />
            </div>
          </div>

          {/* Category Type */}
          <div className="mb-4">
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
              Category Type
            </label>
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              {(Object.keys(CATEGORY_CONFIG) as CategoryType[]).map((cat) => {
                const active = expense.category === cat
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs transition-colors cursor-pointer ${
                      active ? 'bg-gray-50 font-semibold text-gray-900' : 'bg-white text-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: active ? CATEGORY_CONFIG[cat].color : '#d1d5db' }}
                    />
                    {CATEGORY_CONFIG[cat].label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Subcategory */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                Subcategory
              </label>
              {!addingSubcat && (
                <button
                  onClick={() => setAddingSubcat(true)}
                  className="flex items-center gap-0.5 text-[10px] text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <Plus size={10} /> New
                </button>
              )}
            </div>
            {addingSubcat ? (
              <InlineAdd
                placeholder="e.g., Pet Food"
                onConfirm={(v) => {
                  onAddSubcategory(expense.category, v)
                  setExp('subcategory', v)
                  setAddingSubcat(false)
                }}
                onCancel={() => setAddingSubcat(false)}
              />
            ) : (
              <div className="relative">
                <select
                  value={expense.subcategory}
                  onChange={(e) => setExp('subcategory', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 pr-7 py-2 text-xs text-gray-900 outline-none appearance-none bg-white cursor-pointer"
                >
                  {subcategories[expense.category].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            )}
          </div>

          {/* Vendor + Location */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Vendor Name
              </label>
              <input
                type="text"
                value={expense.vendor}
                onChange={(e) => setExp('vendor', e.target.value)}
                placeholder="e.g., E-mart"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 outline-none focus:border-gray-400 transition-colors placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Location
              </label>
              <input
                type="text"
                value={expense.location}
                onChange={(e) => setExp('location', e.target.value)}
                placeholder="e.g., Seoul, Mapo"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 outline-none focus:border-gray-400 transition-colors placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Reason */}
          <div className="mb-5">
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
              Reason / Note
            </label>
            <input
              type="text"
              value={expense.reason}
              onChange={(e) => setExp('reason', e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSaveExpense()}
              placeholder="e.g., Weekly groceries at E-mart"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 outline-none focus:border-gray-400 transition-colors placeholder:text-gray-300"
            />
          </div>

          {/* One-time toggle */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-semibold text-gray-800">One-time Expense</p>
              <p className="text-[11px] text-gray-400 mt-0.5">Not a recurring subscription</p>
            </div>
            <button
              onClick={() => setExp('isOneTime', !expense.isOneTime)}
              className={`relative inline-flex w-10 h-[22px] rounded-full transition-colors duration-200 cursor-pointer shrink-0 ${expense.isOneTime ? 'bg-blue-500' : 'bg-gray-200'}`}
              role="switch"
              aria-checked={expense.isOneTime}
            >
              <span className={`inline-block w-[18px] h-[18px] bg-white rounded-full shadow-sm mt-[2px] transition-transform duration-200 ${expense.isOneTime ? 'translate-x-[20px]' : 'translate-x-[2px]'}`} />
            </button>
          </div>

          <div className="flex-1" />
          <button
            onClick={handleSaveExpense}
            className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
          >
            + Save Transaction
          </button>
        </>
      )}

      {/* ── INCOME FORM ── */}
      {kind === 'income' && (
        <>
          {/* Amount */}
          <div className="mb-4">
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
              Amount
            </label>
            <div className="flex items-center border border-emerald-200 rounded-lg px-3 py-2.5 focus-within:border-emerald-400 transition-colors">
              <span className="text-emerald-600 mr-1.5 text-sm font-medium select-none">₩</span>
              <input
                type="number"
                value={income.amount}
                onChange={(e) => setInc('amount', e.target.value)}
                placeholder="0"
                min="0"
                className="flex-1 outline-none text-sm text-gray-900 bg-transparent placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Date + Account */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Date
              </label>
              <DatePicker
                value={income.date}
                onChange={(v) => setInc('date', v)}
                size="sm"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Account
              </label>
              <AccountPicker
                value={income.account}
                onChange={(v) => setInc('account', v)}
                accounts={accounts}
              />
            </div>
          </div>

          {/* Income Source */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                Source
              </label>
              {!addingSource && (
                <button
                  onClick={() => setAddingSource(true)}
                  className="flex items-center gap-0.5 text-[10px] text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <Plus size={10} /> New
                </button>
              )}
            </div>
            {addingSource ? (
              <InlineAdd
                placeholder="e.g., Part-time Job"
                onConfirm={(v) => {
                  onAddIncomeSource(v)
                  setInc('source', v)
                  setAddingSource(false)
                }}
                onCancel={() => setAddingSource(false)}
              />
            ) : (
              <div className="relative">
                <select
                  value={income.source}
                  onChange={(e) => setInc('source', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 pr-7 py-2 text-xs text-gray-900 outline-none appearance-none bg-white cursor-pointer"
                >
                  {incomeSources.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            )}
          </div>

          {/* Note */}
          <div className="mb-5">
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
              Note
            </label>
            <input
              type="text"
              value={income.reason}
              onChange={(e) => setInc('reason', e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSaveIncome()}
              placeholder="e.g., April salary from Company"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 outline-none focus:border-gray-400 transition-colors placeholder:text-gray-300"
            />
          </div>

          {/* Recurring toggle */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-semibold text-gray-800">Recurring Income</p>
              <p className="text-[11px] text-gray-400 mt-0.5">e.g., monthly salary</p>
            </div>
            <button
              onClick={() => setInc('isRecurring', !income.isRecurring)}
              className={`relative inline-flex w-10 h-[22px] rounded-full transition-colors duration-200 cursor-pointer shrink-0 ${income.isRecurring ? 'bg-emerald-500' : 'bg-gray-200'}`}
              role="switch"
              aria-checked={income.isRecurring}
            >
              <span className={`inline-block w-[18px] h-[18px] bg-white rounded-full shadow-sm mt-[2px] transition-transform duration-200 ${income.isRecurring ? 'translate-x-[20px]' : 'translate-x-[2px]'}`} />
            </button>
          </div>

          <div className="flex-1" />
          <button
            onClick={handleSaveIncome}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            + Save Income
          </button>
        </>
      )}
    </div>
  )
}
