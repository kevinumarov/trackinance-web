export type ViewMode = 'daily' | 'monthly'
export type CategoryType = 'needs' | 'wants' | 'compulsive'
export type TransactionType = 'one_time' | 'recurring'
export type TransactionKind = 'expense' | 'income'

export interface Transaction {
  id: string
  kind: TransactionKind
  date: string // ISO 8601
  amount: number
  account: string
  // expense-specific
  category?: CategoryType
  subcategory?: string
  // income-specific
  source?: string
  // common
  reason: string
  type: TransactionType
}
