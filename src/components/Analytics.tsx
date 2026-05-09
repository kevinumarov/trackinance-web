import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import { formatKRW } from '@/lib/format'
import { BarChartIcon } from '@/icons/AppIcons'
import type { Transaction, CategoryType } from '@/types'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CATEGORY_COLORS: Record<CategoryType, string> = {
  needs: '#22c55e',
  wants: '#7c3aed',
  compulsive: '#ef4444',
}

const DONUT_COLORS = ['#1e3a5f', '#2dd4bf', '#93c5fd']

const SUBCATEGORY_COLORS = [
  '#1e3a5f',
  '#2dd4bf',
  '#f59e0b',
  '#22c55e',
  '#3b82f6',
  '#a855f7',
  '#f97316',
]

function formatK(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}m`
  if (n >= 1_000) return `${Math.round(n / 1_000)}k`
  return String(n)
}


function buildMonthlyOverview(transactions: Transaction[]) {
  const map: Record<string, Record<CategoryType, number>> = {}
  MONTHS.forEach((m) => { map[m] = { needs: 0, wants: 0, compulsive: 0 } })

  for (const tx of transactions) {
    if (tx.kind !== 'expense' || !tx.category) continue
    const month = MONTHS[new Date(tx.date).getMonth()]
    map[month][tx.category] += tx.amount
  }

  return MONTHS.map((month) => ({ month, ...map[month] }))
}

function buildIncomeBySource(transactions: Transaction[]) {
  const map: Record<string, number> = {}
  for (const tx of transactions) {
    if (tx.kind !== 'income') continue
    const key = tx.source ?? 'Other'
    map[key] = (map[key] ?? 0) + tx.amount
  }
  const total = Object.values(map).reduce((s, v) => s + v, 0)
  return {
    total,
    entries: Object.entries(map)
      .sort(([, a], [, b]) => b - a)
      .map(([name, value]) => ({
        name,
        value,
        pct: total > 0 ? ((value / total) * 100).toFixed(2) : '0.00',
      })),
  }
}

function buildSubcategoryTotals(transactions: Transaction[]) {
  const map: Record<string, number> = {}
  for (const tx of transactions) {
    if (tx.kind !== 'expense' || !tx.subcategory) continue
    map[tx.subcategory] = (map[tx.subcategory] ?? 0) + tx.amount
  }
  return Object.entries(map)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 7)
    .map(([name, total]) => ({ name, total }))
}

function yAxisFormatter(v: number) {
  return formatK(v)
}

function tooltipFormatter(value: number, name: string) {
  return [formatK(value), name.charAt(0).toUpperCase() + name.slice(1)]
}

interface EmptyChartProps { label: string }
function EmptyState({ label }: EmptyChartProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[180px] gap-2">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
        <BarChartIcon size={20} />
      </div>
      <p className="text-xs text-gray-400">No {label} data yet</p>
    </div>
  )
}

interface Props {
  transactions: Transaction[]
}

export function Analytics({ transactions }: Props) {
  const monthlyData = buildMonthlyOverview(transactions)
  const incomeData = buildIncomeBySource(transactions)
  const subcatData = buildSubcategoryTotals(transactions)

  const hasExpenses = transactions.some((t) => t.kind === 'expense')
  const hasIncome = transactions.some((t) => t.kind === 'income')
  const maxSubcat = subcatData[0]?.total ?? 1

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-5">

        {/* Top row: Overview + Income Sources */}
        <div className="flex gap-5">

          {/* Overview chart */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 p-5 min-w-0">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Overview</h2>
            {hasExpenses ? (
              <>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={monthlyData} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="wantsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.18} />
                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 11, fill: '#94a3b8' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tickFormatter={yAxisFormatter}
                      tick={{ fontSize: 11, fill: '#94a3b8' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip formatter={tooltipFormatter} />
                    <Area
                      type="monotone"
                      dataKey="wants"
                      stroke="#7c3aed"
                      strokeWidth={2}
                      fill="url(#wantsGrad)"
                    />
                    <Line
                      type="monotone"
                      dataKey="needs"
                      stroke="#22c55e"
                      strokeWidth={2}
                      strokeDasharray="5 4"
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="compulsive"
                      stroke="#ef4444"
                      strokeWidth={1.5}
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex items-center gap-5 mt-3 justify-center">
                  {(Object.entries(CATEGORY_COLORS) as [CategoryType, string][]).map(([cat, color]) => (
                    <div key={cat} className="flex items-center gap-1.5">
                      <span className="w-3 h-0.5 rounded" style={{ backgroundColor: color, display: 'inline-block' }} />
                      <span className="text-xs text-gray-500 capitalize">{cat}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <EmptyState label="expense" />
            )}
          </div>

          {/* Income Sources */}
          <div className="w-[300px] shrink-0 bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Income Sources</h2>
              <button className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 text-xs hover:bg-gray-50 cursor-pointer">
                i
              </button>
            </div>

            {hasIncome ? (
              <>
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <PieChart width={160} height={160}>
                      <Pie
                        data={incomeData.entries.length ? incomeData.entries : [{ name: 'Empty', value: 1 }]}
                        cx={75}
                        cy={75}
                        innerRadius={52}
                        outerRadius={75}
                        dataKey="value"
                        strokeWidth={0}
                      >
                        {incomeData.entries.map((_, i) => (
                          <Cell key={i} fill={DONUT_COLORS[i % DONUT_COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-xs text-gray-400">Total</span>
                      <span className="text-xl font-bold text-gray-900">{incomeData.entries.length}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="grid grid-cols-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-2 border-b border-gray-100 mb-2">
                    <span>Sources</span>
                    <span className="text-right">Revenue</span>
                    <span className="text-right">Perc.</span>
                  </div>
                  {incomeData.entries.slice(0, 4).map((item, i) => (
                    <div key={item.name} className="grid grid-cols-3 items-center py-1.5 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: DONUT_COLORS[i % DONUT_COLORS.length] }}
                        />
                        <span className="text-gray-700 truncate">{item.name}</span>
                      </div>
                      <span className="text-right text-gray-700">{formatKRW(item.value)}</span>
                      <span className="text-right text-gray-500">{item.pct}%</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <EmptyState label="income" />
            )}
          </div>
        </div>

        {/* Expense Subcategories */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-semibold text-gray-900">Expense Subcategories</h2>
            <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 cursor-pointer">
              View Data
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L14.2929 11.2929C14.6834 11.6834 14.6834 12.3166 14.2929 12.7071L9 18"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ fill: 'none' }}
                />
              </svg>
            </button>
          </div>

          {subcatData.length > 0 ? (
            <div className="flex flex-col gap-3.5">
              {subcatData.map((item, i) => (
                <div key={item.name} className="flex items-center gap-4">
                  <span className="w-28 shrink-0 text-xs text-gray-600 truncate">{item.name}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(item.total / maxSubcat) * 100}%`,
                        backgroundColor: SUBCATEGORY_COLORS[i % SUBCATEGORY_COLORS.length],
                      }}
                    />
                  </div>
                  <span className="w-14 text-right text-xs text-gray-500 shrink-0">{formatK(item.total)}</span>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState label="subcategory" />
          )}
        </div>

      </div>
    </div>
  )
}
