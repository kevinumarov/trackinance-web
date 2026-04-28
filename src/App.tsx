import { Header } from '@/components/Header'
import { ManualEntryForm } from '@/components/ManualEntryForm'
import { StatsSummary } from '@/components/StatsSummary'
import { SessionEntries } from '@/components/SessionEntries'
import { JsonExport } from '@/components/JsonExport'
import { ACCOUNTS, DEFAULT_SUBCATEGORIES, DEFAULT_INCOME_SOURCES } from '@/data/defaults'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getCurrentDateString } from '@/lib/format'
import type { Transaction, ViewMode, CategoryType } from '@/types'

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
  const [viewMode, setViewMode] = useLocalStorage<ViewMode>('trackinance_viewMode', 'monthly')
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
    setIncomeSources((prev) =>
      prev.includes(name) ? prev : [...prev, name],
    )
  }

  const handleExportJson = () => {
    const data = {
      exported_at: new Date().toISOString(),
      period: { selectedDate, viewMode },
      entries: transactions,
    }
    downloadFile(JSON.stringify(data, null, 2), 'trackinance_export.json', 'application/json')
  }

  const handleExportCsv = () => {
    downloadFile(buildCsv(transactions), 'trackinance_export.csv', 'text/csv')
  }

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      <Header
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        onExportJson={handleExportJson}
        onExportCsv={handleExportCsv}
      />

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

        {/* Right: Stats + Entries + JSON */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <StatsSummary transactions={transactions} selectedDate={selectedDate} />

          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 border-r border-gray-200 overflow-y-auto min-w-0">
              <SessionEntries transactions={transactions} selectedDate={selectedDate} />
            </div>
            <div className="flex-1 overflow-hidden min-w-0">
              <JsonExport
                transactions={transactions}
                viewMode={viewMode}
                selectedDate={selectedDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
