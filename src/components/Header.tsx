import { Calendar, RefreshCw, BarChart3 } from 'lucide-react'
import { formatDisplayDate } from '@/lib/format'
import type { ViewMode } from '@/types'

interface HeaderProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  selectedDate: string
  onDateChange: (date: string) => void
  onExportJson: () => void
  onExportCsv: () => void
}

export function Header({
  viewMode,
  onViewModeChange,
  selectedDate,
  onDateChange,
  onExportJson,
  onExportCsv,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-5 py-2.5 border-b border-gray-200 bg-white shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 bg-gray-900 rounded-lg flex items-center justify-center">
          <BarChart3 size={14} className="text-white" />
        </div>
        <span className="font-semibold text-sm text-gray-900">Trackinance</span>
      </div>

      {/* View mode toggle */}
      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
        {(['daily', 'monthly'] as ViewMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => onViewModeChange(mode)}
            className={`px-4 py-1.5 text-sm capitalize transition-colors cursor-pointer ${
              viewMode === mode
                ? 'bg-gray-100 font-medium text-gray-900'
                : 'bg-white text-gray-500 hover:bg-gray-50'
            }`}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2.5">
        {/* Date picker */}
        <div className="relative flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5">
          <Calendar size={13} className="text-gray-500" />
          <span className="text-sm text-gray-700">{formatDisplayDate(selectedDate)}</span>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* Load Period */}
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
          <RefreshCw size={13} />
          Load Period
        </button>

        {/* JSON */}
        <button
          onClick={onExportJson}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-sm rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-gray-700"
        >
          <span className="text-xs font-mono text-gray-500">{'</>'}</span>
          JSON
        </button>

        {/* CSV */}
        <button
          onClick={onExportCsv}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-sm rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-gray-700"
        >
          <span className="text-xs">📄</span>
          CSV
        </button>
      </div>

    </header>
  )
}
