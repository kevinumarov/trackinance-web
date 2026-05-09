import { TrackinanceLogo } from '@/assets/logo/TrackinanceLogo'
import { DatePicker } from '@/components/ui/DatePicker'
import { RefreshIcon, FileIcon, FileUploadIcon } from '@/icons/AppIcons'
import type { AppView } from '@/types'

const NAV_ITEMS: { view: AppView; label: string }[] = [
  { view: 'entry', label: 'Entry' },
  { view: 'analytics', label: 'Analytics' },
  { view: 'budget', label: 'Budget Planning' },
]

interface HeaderProps {
  appView: AppView
  onAppViewChange: (view: AppView) => void
  selectedDate: string
  onDateChange: (date: string) => void
  onExportJson: () => void
  onExportCsv: () => void
}

export function Header({
  appView,
  onAppViewChange,
  selectedDate,
  onDateChange,
  onExportJson,
  onExportCsv,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-5 py-2.5 border-b border-gray-200 bg-white shrink-0">
      {/* Logo */}
      <TrackinanceLogo className="h-7 w-auto text-gray-900" />

      {/* Pill-style nav */}
      <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-0.5">
        {NAV_ITEMS.map(({ view, label }) => (
          <button
            key={view}
            onClick={() => onAppViewChange(view)}
            className={`px-4 py-1.5 text-sm rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              appView === view
                ? 'bg-white text-gray-900 font-semibold shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2.5">
        <DatePicker value={selectedDate} onChange={onDateChange} size="sm" />

        <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
          <RefreshIcon size={13} className="text-white" />
          Load Period
        </button>

        <button
          onClick={onExportJson}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-sm rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-gray-700"
        >
          <FileIcon size={13} className="text-gray-400" />
          JSON
        </button>

        <button
          onClick={onExportCsv}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-sm rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-gray-700"
        >
          <FileUploadIcon size={13} className="text-gray-400" />
          CSV
        </button>
      </div>
    </header>
  )
}
