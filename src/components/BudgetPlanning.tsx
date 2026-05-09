import { useState } from 'react'
import { formatKRW } from '@/lib/format'
import { WalletIcon } from '@/icons/AppIcons'
import type { BudgetPlan, CategoryType, PredefinedExpense, SavingsGoal, Transaction } from '@/types'

/* ──────────────────────────── constants ─────────────────────────────────── */

const CATEGORIES: { key: CategoryType; label: string; color: string; bg: string; border: string }[] = [
  { key: 'needs',      label: 'Needs',      color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' },
  { key: 'wants',      label: 'Wants',      color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
  { key: 'compulsive', label: 'Compulsive', color: '#ea580c', bg: '#fff7ed', border: '#fed7aa' },
]

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1)

const ordinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] ?? s[v] ?? s[0])
}

const uid = () => Math.random().toString(36).slice(2, 9)

function parseAmount(s: string): number {
  const n = Number(s.replace(/[^0-9]/g, ''))
  return isNaN(n) || n < 0 ? 0 : n
}

/* ──────────────────────────── helpers ───────────────────────────────────── */

function pct(a: number, b: number) {
  return b > 0 ? Math.min(100, (a / b) * 100) : 0
}

/* ──────────────────────────── sub-components ────────────────────────────── */

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function AmountInput({
  value, onChange, placeholder = '0',
}: { value: number; onChange: (v: number) => void; placeholder?: string }) {
  const [raw, setRaw] = useState(value > 0 ? String(value) : '')
  const commit = () => {
    const n = parseAmount(raw)
    onChange(n)
    setRaw(n > 0 ? String(n) : '')
  }
  return (
    <div className="flex items-center border border-gray-200 rounded-lg px-2.5 py-2 focus-within:border-gray-400 transition-colors bg-white">
      <span className="text-gray-400 text-sm mr-1 select-none">₩</span>
      <input
        type="text"
        inputMode="numeric"
        value={raw}
        placeholder={placeholder}
        onChange={(e) => setRaw(e.target.value.replace(/[^0-9]/g, ''))}
        onBlur={commit}
        onKeyDown={(e) => e.key === 'Enter' && commit()}
        className="flex-1 outline-none text-sm text-gray-900 bg-transparent placeholder:text-gray-300 min-w-0"
      />
    </div>
  )
}

/* ── Add Expense inline form ── */
interface AddExpenseFormProps {
  subcategories: Record<CategoryType, string[]>
  onAdd: (e: PredefinedExpense) => void
  onCancel: () => void
}
function AddExpenseForm({ subcategories, onAdd, onCancel }: AddExpenseFormProps) {
  const [name, setName]       = useState('')
  const [category, setCategory] = useState<CategoryType>('needs')
  const [subcat, setSubcat]   = useState(subcategories.needs[0] ?? '')
  const [amount, setAmount]   = useState(0)
  const [dueDay, setDueDay]   = useState(1)

  const handleCategoryChange = (c: CategoryType) => {
    setCategory(c)
    setSubcat(subcategories[c][0] ?? '')
  }

  const handleAdd = () => {
    if (amount <= 0) return
    onAdd({
      id: uid(),
      name: name.trim() || subcat,
      category,
      subcategory: subcat,
      amount,
      dueDay,
    })
  }

  const cat = CATEGORIES.find((c) => c.key === category)!

  return (
    <div className="rounded-xl border-2 border-dashed border-gray-200 p-4 flex flex-col gap-3 bg-gray-50">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">New Predefined Expense</p>

      {/* Category picker */}
      <div className="flex gap-1.5">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => handleCategoryChange(c.key)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border"
            style={category === c.key
              ? { backgroundColor: c.color, color: '#fff', borderColor: c.color }
              : { backgroundColor: '#fff', color: '#6b7280', borderColor: '#e5e7eb' }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: category === c.key ? '#fff' : c.color }} />
            {c.label}
          </button>
        ))}
      </div>

      {/* Name + Subcategory row */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Name / Label
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={subcat || 'e.g. Rent'}
            className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs text-gray-900 outline-none focus:border-gray-400 transition-colors bg-white placeholder:text-gray-300"
          />
        </div>
        <div>
          <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Subcategory
          </label>
          <select
            value={subcat}
            onChange={(e) => setSubcat(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs text-gray-900 outline-none appearance-none bg-white cursor-pointer"
          >
            {subcategories[category].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Amount + Due day row */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Amount
          </label>
          <AmountInput value={amount} onChange={setAmount} placeholder="e.g. 300000" />
        </div>
        <div>
          <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Due Day
          </label>
          <select
            value={dueDay}
            onChange={(e) => setDueDay(Number(e.target.value))}
            className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs text-gray-900 outline-none appearance-none bg-white cursor-pointer"
          >
            {DAYS.map((d) => (
              <option key={d} value={d}>{ordinal(d)} of month</option>
            ))}
          </select>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        <button
          type="button"
          onClick={handleAdd}
          disabled={amount <= 0}
          className="flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-white"
          style={{ backgroundColor: cat.color }}
        >
          Add Expense
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-xs font-medium text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

/* ── Expense row ── */
function ExpenseRow({
  expense, catMeta, onDelete,
}: {
  expense: PredefinedExpense
  catMeta: typeof CATEGORIES[number]
  onDelete: () => void
}) {
  return (
    <div className="flex items-center gap-3 py-2.5 px-1 group">
      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: catMeta.color }} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 font-medium truncate">{expense.name}</p>
        <p className="text-[11px] text-gray-400">{expense.subcategory}</p>
      </div>
      <span className="text-[11px] text-gray-400 shrink-0">
        Due {ordinal(expense.dueDay)}
      </span>
      <span className="text-sm font-semibold text-gray-800 w-28 text-right shrink-0">
        {formatKRW(expense.amount)}
      </span>
      <button
        type="button"
        onClick={onDelete}
        className="w-5 h-5 flex items-center justify-center rounded text-gray-300 hover:text-red-400 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all cursor-pointer shrink-0"
      >
        ×
      </button>
    </div>
  )
}

/* ─────────────────────────── main page ──────────────────────────────────── */

interface Props {
  transactions: Transaction[]
  budget: BudgetPlan
  onBudgetChange: (b: BudgetPlan) => void
  selectedDate: string
  subcategories: Record<CategoryType, string[]>
}

export function BudgetPlanning({ transactions, budget, onBudgetChange, selectedDate, subcategories }: Props) {
  const [showAddExpense, setShowAddExpense] = useState(false)
  const [newGoalLabel, setNewGoalLabel]     = useState('')
  const [newGoalAmount, setNewGoalAmount]   = useState(0)
  const [showAddGoal, setShowAddGoal]       = useState(false)

  const update = (patch: Partial<BudgetPlan>) => onBudgetChange({ ...budget, ...patch })

  /* ── Derived numbers ── */
  const month = selectedDate.slice(0, 7)

  const totalPredefined = budget.predefinedExpenses.reduce((s, e) => s + e.amount, 0)
  const totalSavings    = budget.savingsGoals.reduce((s, g) => s + g.amount, 0)
  const freeBudget      = budget.incomeAmount - totalPredefined - totalSavings

  const predefinedByCategory = (cat: CategoryType) =>
    budget.predefinedExpenses.filter((e) => e.category === cat)

  /* Actual spending this month per category */
  const monthTx = transactions.filter((t) => t.date.startsWith(month) && t.kind === 'expense')
  const actualSpent: Record<CategoryType, number> = { needs: 0, wants: 0, compulsive: 0 }
  for (const tx of monthTx) {
    if (tx.category) actualSpent[tx.category] += tx.amount
  }
  const totalActual = actualSpent.needs + actualSpent.wants + actualSpent.compulsive

  /* ── Expense handlers ── */
  const addExpense = (e: PredefinedExpense) => {
    update({ predefinedExpenses: [...budget.predefinedExpenses, e] })
    setShowAddExpense(false)
  }
  const removeExpense = (id: string) =>
    update({ predefinedExpenses: budget.predefinedExpenses.filter((e) => e.id !== id) })

  /* ── Savings goal handlers ── */
  const addGoal = () => {
    if (!newGoalLabel.trim() || newGoalAmount <= 0) return
    const goal: SavingsGoal = { id: uid(), label: newGoalLabel.trim(), amount: newGoalAmount }
    update({ savingsGoals: [...budget.savingsGoals, goal] })
    setNewGoalLabel('')
    setNewGoalAmount(0)
    setShowAddGoal(false)
  }
  const removeGoal = (id: string) =>
    update({ savingsGoals: budget.savingsGoals.filter((g) => g.id !== id) })

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-5">

        {/* ── Top summary bar ── */}
        <div className="grid grid-cols-4 gap-4">
          {[
            {
              label: 'Monthly Income',
              value: budget.incomeAmount > 0 ? formatKRW(budget.incomeAmount) : '—',
              sub: budget.incomeSource || 'Set income below',
              color: '#111827',
            },
            {
              label: 'Predefined Expenses',
              value: totalPredefined > 0 ? formatKRW(totalPredefined) : '—',
              sub: `${budget.predefinedExpenses.length} items planned`,
              color: '#ea580c',
            },
            {
              label: 'Free Budget',
              value: budget.incomeAmount > 0 ? formatKRW(Math.max(0, freeBudget)) : '—',
              sub: freeBudget < 0 ? 'Over-allocated' : 'After expenses & savings',
              color: freeBudget < 0 ? '#dc2626' : '#16a34a',
            },
            {
              label: 'Savings Goals',
              value: totalSavings > 0 ? formatKRW(totalSavings) : '—',
              sub: budget.incomeAmount > 0 && totalSavings > 0
                ? `${Math.round((totalSavings / budget.incomeAmount) * 100)}% of income`
                : `${budget.savingsGoals.length} goal${budget.savingsGoals.length !== 1 ? 's' : ''}`,
              color: '#1d4ed8',
            },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-xl border border-gray-200 px-5 py-4">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">{card.label}</p>
              <p className="text-xl font-bold truncate" style={{ color: card.color }}>{card.value}</p>
              <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-5 items-start">

          {/* ════════════════ LEFT PANEL ════════════════ */}
          <div className="w-[320px] shrink-0 flex flex-col gap-4">

            {/* Income Setup */}
            <SectionCard title="Income Setup">
              <div className="flex flex-col gap-3">
                {/* Source */}
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Source / Category
                  </label>
                  <input
                    type="text"
                    value={budget.incomeSource}
                    onChange={(e) => update({ incomeSource: e.target.value })}
                    placeholder="e.g. Monthly Salary"
                    className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs text-gray-900 outline-none focus:border-gray-400 transition-colors placeholder:text-gray-300"
                  />
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Amount
                  </label>
                  <AmountInput
                    value={budget.incomeAmount}
                    onChange={(v) => update({ incomeAmount: v })}
                    placeholder="e.g. 3000000"
                  />
                </div>

                {/* Receivable day */}
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    Receivable Date
                  </label>
                  <select
                    value={budget.incomeReceivableDay}
                    onChange={(e) => update({ incomeReceivableDay: Number(e.target.value) })}
                    className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs text-gray-900 outline-none appearance-none bg-white cursor-pointer"
                  >
                    {DAYS.map((d) => (
                      <option key={d} value={d}>{ordinal(d)} of each month</option>
                    ))}
                  </select>
                </div>
              </div>
            </SectionCard>

            {/* Savings Planning */}
            <SectionCard title="Savings Planning">
              <div className="flex flex-col gap-2">
                {budget.savingsGoals.length === 0 && !showAddGoal && (
                  <p className="text-xs text-gray-400 pb-1">No savings goals yet.</p>
                )}

                {budget.savingsGoals.map((goal) => (
                  <div key={goal.id} className="flex items-center gap-2 group py-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-800 truncate">{goal.label}</p>
                      {budget.incomeAmount > 0 && (
                        <p className="text-[10px] text-gray-400">
                          {Math.round((goal.amount / budget.incomeAmount) * 100)}% of income
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{formatKRW(goal.amount)}</span>
                    <button
                      type="button"
                      onClick={() => removeGoal(goal.id)}
                      className="w-5 h-5 flex items-center justify-center rounded text-gray-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all cursor-pointer shrink-0"
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Savings progress bar */}
                {budget.incomeAmount > 0 && totalSavings > 0 && (
                  <div className="mt-1">
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-blue-500 transition-all"
                        style={{ width: `${pct(totalSavings, budget.incomeAmount)}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1">
                      {formatKRW(totalSavings)} / {formatKRW(budget.incomeAmount)}
                    </p>
                  </div>
                )}

                {/* Add goal form */}
                {showAddGoal ? (
                  <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-3">
                    <input
                      autoFocus
                      type="text"
                      value={newGoalLabel}
                      onChange={(e) => setNewGoalLabel(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addGoal()}
                      placeholder="e.g. Emergency Fund"
                      className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs text-gray-900 outline-none focus:border-gray-400 placeholder:text-gray-300"
                    />
                    <AmountInput value={newGoalAmount} onChange={setNewGoalAmount} placeholder="Target amount" />
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={addGoal}
                        className="flex-1 py-1.5 text-xs font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition-colors"
                      >
                        Add Goal
                      </button>
                      <button
                        type="button"
                        onClick={() => { setShowAddGoal(false); setNewGoalLabel(''); setNewGoalAmount(0) }}
                        className="px-3 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowAddGoal(true)}
                    className="mt-1 text-xs text-blue-500 hover:text-blue-700 transition-colors cursor-pointer text-left font-medium"
                  >
                    + Add savings goal
                  </button>
                )}
              </div>
            </SectionCard>

            {/* Allocation overview */}
            {budget.incomeAmount > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-xs font-semibold text-gray-500 mb-3">Income Allocation</p>
                <div className="h-2.5 rounded-full overflow-hidden flex gap-px mb-3">
                  {CATEGORIES.map((cat) => {
                    const catTotal = predefinedByCategory(cat.key).reduce((s, e) => s + e.amount, 0)
                    const w = pct(catTotal, budget.incomeAmount)
                    return w > 0 ? (
                      <div key={cat.key} style={{ width: `${w}%`, backgroundColor: cat.color }} className="h-full" title={cat.label} />
                    ) : null
                  })}
                  {totalSavings > 0 && (
                    <div style={{ width: `${pct(totalSavings, budget.incomeAmount)}%`, backgroundColor: '#3b82f6' }} className="h-full" title="Savings" />
                  )}
                  {freeBudget > 0 && (
                    <div style={{ width: `${pct(freeBudget, budget.incomeAmount)}%`, backgroundColor: '#e5e7eb' }} className="h-full" title="Unallocated" />
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  {CATEGORIES.map((cat) => {
                    const catTotal = predefinedByCategory(cat.key).reduce((s, e) => s + e.amount, 0)
                    if (catTotal === 0) return null
                    return (
                      <div key={cat.key} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                          <span className="text-gray-600">{cat.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">{Math.round(pct(catTotal, budget.incomeAmount))}%</span>
                          <span className="font-medium text-gray-800">{formatKRW(catTotal)}</span>
                        </div>
                      </div>
                    )
                  })}
                  {totalSavings > 0 && (
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-gray-600">Savings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">{Math.round(pct(totalSavings, budget.incomeAmount))}%</span>
                        <span className="font-medium text-gray-800">{formatKRW(totalSavings)}</span>
                      </div>
                    </div>
                  )}
                  {freeBudget > 0 && (
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-gray-300" />
                        <span className="text-gray-400">Unallocated</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">{Math.round(pct(freeBudget, budget.incomeAmount))}%</span>
                        <span className="font-medium text-gray-500">{formatKRW(freeBudget)}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ════════════════ RIGHT PANEL ════════════════ */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">

            {/* Predefined Expenses header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-gray-900">Predefined Expenses for Month</h2>
                <p className="text-xs text-gray-400 mt-0.5">Plan your recurring expenses before the month starts</p>
              </div>
              {!showAddExpense && (
                <button
                  type="button"
                  onClick={() => setShowAddExpense(true)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  + Add Expense
                </button>
              )}
            </div>

            {/* Add expense form */}
            {showAddExpense && (
              <AddExpenseForm
                subcategories={subcategories}
                onAdd={addExpense}
                onCancel={() => setShowAddExpense(false)}
              />
            )}

            {/* Category groups */}
            {CATEGORIES.map((cat) => {
              const expenses = predefinedByCategory(cat.key)
              const catTotal = expenses.reduce((s, e) => s + e.amount, 0)
              const actual   = actualSpent[cat.key]

              return (
                <div key={cat.key} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  {/* Category header */}
                  <div
                    className="flex items-center justify-between px-5 py-3 border-b"
                    style={{ borderColor: cat.border, backgroundColor: cat.bg }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: cat.color }}>
                        {cat.label}
                      </span>
                      <span className="text-xs text-gray-400">· {expenses.length} item{expenses.length !== 1 ? 's' : ''}</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: cat.color }}>
                      {catTotal > 0 ? formatKRW(catTotal) : '—'}
                    </span>
                  </div>

                  {/* Expense rows */}
                  <div className="px-4 divide-y divide-gray-50">
                    {expenses.length === 0 ? (
                      <div className="py-4 flex items-center justify-center">
                        <p className="text-xs text-gray-300">No {cat.label.toLowerCase()} expenses planned</p>
                      </div>
                    ) : (
                      expenses
                        .sort((a, b) => a.dueDay - b.dueDay)
                        .map((expense) => (
                          <ExpenseRow
                            key={expense.id}
                            expense={expense}
                            catMeta={cat}
                            onDelete={() => removeExpense(expense.id)}
                          />
                        ))
                    )}
                  </div>

                  {/* Planned vs Actual comparison (if transactions exist) */}
                  {catTotal > 0 && (
                    <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                          <span>Actual spent</span>
                          <span>{formatKRW(actual)} / {formatKRW(catTotal)}</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${pct(actual, catTotal)}%`,
                              backgroundColor: actual > catTotal ? '#dc2626' : cat.color,
                            }}
                          />
                        </div>
                      </div>
                      <span
                        className="text-[10px] font-semibold shrink-0"
                        style={{ color: actual > catTotal ? '#dc2626' : '#6b7280' }}
                      >
                        {actual > catTotal
                          ? `${formatKRW(actual - catTotal)} over`
                          : `${formatKRW(catTotal - actual)} left`}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}

            {/* Empty state */}
            {budget.predefinedExpenses.length === 0 && !showAddExpense && (
              <div className="bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center py-14 text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 text-gray-400">
                  <WalletIcon size={22} />
                </div>
                <p className="text-sm font-semibold text-gray-600 mb-1">No expenses planned yet</p>
                <p className="text-xs text-gray-400 max-w-xs">
                  Add your recurring monthly expenses — rent, subscriptions, utilities — to plan your month in advance.
                </p>
                <button
                  type="button"
                  onClick={() => setShowAddExpense(true)}
                  className="mt-4 px-4 py-2 text-xs font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
                >
                  + Add first expense
                </button>
              </div>
            )}

            {/* Monthly summary footer */}
            {budget.incomeAmount > 0 && budget.predefinedExpenses.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Monthly Summary — {month}
                </h3>
                <div className="flex flex-col gap-2 text-sm">
                  {[
                    { label: 'Income',              value: formatKRW(budget.incomeAmount), color: '#16a34a' },
                    { label: 'Predefined Expenses', value: `− ${formatKRW(totalPredefined)}`, color: '#ea580c' },
                    { label: 'Savings Goals',       value: `− ${formatKRW(totalSavings)}`,   color: '#3b82f6' },
                    { label: 'Free Budget',         value: formatKRW(Math.max(0, freeBudget)), color: freeBudget < 0 ? '#dc2626' : '#111827', bold: true },
                  ].map((row) => (
                    <div key={row.label} className={`flex items-center justify-between py-1.5 ${row.bold ? 'border-t border-gray-100 mt-1 pt-2.5' : ''}`}>
                      <span className={`text-gray-600 ${row.bold ? 'font-semibold text-gray-900' : ''}`}>{row.label}</span>
                      <span className="font-semibold" style={{ color: row.color }}>{row.value}</span>
                    </div>
                  ))}
                </div>
                {totalActual > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                      <span>Actual spending vs planned</span>
                      <span>{formatKRW(totalActual)} / {formatKRW(totalPredefined)}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${pct(totalActual, totalPredefined)}%`,
                          backgroundColor: totalActual > totalPredefined ? '#dc2626' : '#16a34a',
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
