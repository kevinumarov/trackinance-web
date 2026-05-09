import { Header } from '@/components/Header'
import { ManualEntryForm } from '@/components/ManualEntryForm'
import { StatsSummary } from '@/components/StatsSummary'
import { SessionEntries } from '@/components/SessionEntries'
import { JsonExport } from '@/components/JsonExport'
import { Analytics } from '@/components/Analytics'
import { BudgetPlanning } from '@/components/BudgetPlanning'
import { ACCOUNTS, DEFAULT_SUBCATEGORIES, DEFAULT_INCOME_SOURCES } from '@/data/defaults'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getCurrentDateString, filterByPeriod } from '@/lib/format'
import type { Transaction, AppView, ViewMode, CategoryType, BudgetPlan } from '@/types'

const DEFAULT_BUDGET: BudgetPlan = {
  incomeSource: '',
  incomeAmount: 0,
  incomeReceivableDay: 25,
  needs: 0,
  wants: 0,
  compulsive: 0,
  savingsGoals: [],
  predefinedExpenses: [],
  subcategories: {},
}

function buildCsv(transactions: Transaction[]): string {
  const headers = 'id,kind,date,amount,account,category,subcategory,source,reason,type'
  const rows = [...transactions]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(
      (tx) =>
        `${tx.id},${tx.kind},${tx.date},${tx.amount},${tx.account},${tx.category ?? ''},${tx.subcategory ?? ''},${tx.source ?? ''},"${tx.reason}",${tx.type}`,
    )
  return [headers, ...rows].join('\n')
}

function downloadFile(content: string, filename: string, mime: string) {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function App() {
  const [appView, setAppView] = useLocalStorage<AppView>('trackinance_appView', 'entry')
  const [filterMode, setFilterMode] = useLocalStorage<ViewMode>('trackinance_filterMode', 'monthly')
  const [selectedDate, setSelectedDate] = useLocalStorage<string>(
    'trackinance_selectedDate',
    getCurrentDateString(),
  )
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>(
    'trackinance_transactions',
    [],
  )
  const [subcategories, setSubcategories] = useLocalStorage<Record<CategoryType, string[]>>(
    'trackinance_subcategories',
    DEFAULT_SUBCATEGORIES,
  )
  const [incomeSources, setIncomeSources] = useLocalStorage<string[]>(
    'trackinance_incomeSources',
    DEFAULT_INCOME_SOURCES,
  )
  const [budget, setBudget] = useLocalStorage<BudgetPlan>('trackinance_budget', DEFAULT_BUDGET)

  const filteredTransactions = filterByPeriod(transactions, selectedDate, filterMode)

  const handleAddTransaction = (tx: Transaction) => {
    setTransactions((prev) => [tx, ...prev])
  }

  const handleAddSubcategory = (category: CategoryType, name: string) => {
    setSubcategories((prev) => ({
      ...prev,
      [category]: prev[category].includes(name) ? prev[category] : [...prev[category], name],
    }))
  }

  const handleAddIncomeSource = (name: string) => {
    setIncomeSources((prev) => (prev.includes(name) ? prev : [...prev, name]))
  }

  const handleExportJson = () => {
    const data = {
      exported_at: new Date().toISOString(),
      period: { selectedDate, filterMode },
      entries: filteredTransactions,
    }
    downloadFile(JSON.stringify(data, null, 2), 'trackinance_export.json', 'application/json')
  }

  const handleExportCsv = () => {
    downloadFile(buildCsv(filteredTransactions), 'trackinance_export.csv', 'text/csv')
  }

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      <Header
        appView={appView}
        onAppViewChange={setAppView}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        onExportJson={handleExportJson}
        onExportCsv={handleExportCsv}
      />

      {appView === 'analytics' ? (
        <Analytics transactions={transactions} />
      ) : appView === 'budget' ? (
        <BudgetPlanning
          transactions={transactions}
          budget={budget}
          onBudgetChange={setBudget}
          selectedDate={selectedDate}
          subcategories={subcategories}
        />
      ) : (
        <div className="flex flex-1 overflow-hidden">
          {/* Left: Manual Entry Form */}
          <div className="w-[360px] shrink-0 border-r border-gray-200 overflow-y-auto p-6">
            <ManualEntryForm
              onAdd={handleAddTransaction}
              accounts={ACCOUNTS}
              subcategories={subcategories}
              onAddSubcategory={handleAddSubcategory}
              incomeSources={incomeSources}
              onAddIncomeSource={handleAddIncomeSource}
            />
          </div>

          {/* Right: filter toggle + Stats + Entries + JSON */}
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">

            {/* Daily / Monthly sub-toggle */}
            <div className="flex items-center gap-3 px-5 py-2 border-b border-gray-100 bg-white shrink-0">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                View
              </span>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                {(['daily', 'monthly'] as ViewMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setFilterMode(mode)}
                    className={`px-3 py-1 text-xs capitalize transition-colors cursor-pointer ${
                      filterMode === mode
                        ? 'bg-gray-900 text-white font-medium'
                        : 'bg-white text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
              <span className="text-xs text-gray-400">
                {filterMode === 'daily'
                  ? `Showing ${selectedDate}`
                  : `Showing ${selectedDate.slice(0, 7)}`}
              </span>
            </div>

            <StatsSummary transactions={filteredTransactions} selectedDate={selectedDate} />

            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 border-r border-gray-200 overflow-y-auto min-w-0">
                <SessionEntries transactions={filteredTransactions} selectedDate={selectedDate} />
              </div>
              <div className="flex-1 overflow-hidden min-w-0">
                <JsonExport
                  transactions={filteredTransactions}
                  viewMode={filterMode}
                  selectedDate={selectedDate}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
