import { useState, useRef, useEffect } from 'react'
import { BankIcon } from '@/icons/BankIcons'
import { ChevronDownIcon } from '@/icons/AppIcons'
import { cn } from '@/lib/utils'

interface Props {
  value: string
  onChange: (value: string) => void
  accounts: string[]
  className?: string
}

export function AccountPicker({ value, onChange, accounts, className }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onOutsideClick)
    return () => document.removeEventListener('mousedown', onOutsideClick)
  }, [open])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'w-full flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-[7px] text-xs text-gray-900 bg-white transition-colors hover:border-gray-300 cursor-pointer',
          open && 'border-gray-300 bg-gray-50',
        )}
      >
        <BankIcon account={value} size={16} />
        <span className="flex-1 text-left truncate">{value}</span>
        <ChevronDownIcon
          size={11}
          className={cn('text-gray-400 shrink-0 transition-transform', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 max-h-52 overflow-y-auto">
          {accounts.map((account) => (
            <button
              key={account}
              type="button"
              onClick={() => {
                onChange(account)
                setOpen(false)
              }}
              className={cn(
                'w-full flex items-center gap-2 px-2.5 py-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer',
                value === account && 'bg-gray-50 font-medium text-gray-900',
              )}
            >
              <BankIcon account={account} size={18} />
              <span>{account}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
