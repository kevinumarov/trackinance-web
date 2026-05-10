export type ViewMode = 'daily' | 'monthly'
export type AppView = 'entry' | 'analytics' | 'budget'
export type CategoryType = 'needs' | 'wants' | 'compulsive'
export type TransactionType = 'one_time' | 'recurring'
export type TransactionKind = 'expense' | 'income'

export interface Transaction {
  id: string
  kind: TransactionKind
  date: string // ISO 8601
  amount: number
  account: string
  category?: CategoryType
  subcategory?: string
  source?: string
  vendor?: string
  location?: string
  reason: string
  type: TransactionType
}

export interface PredefinedExpense {
  id: string
  name: string
  category: CategoryType
  subcategory: string
  amount: number
  dueDay: number // 1–31
}

export interface SavingsGoal {
  id: string
  label: string   // e.g. "Emergency Fund", "Investment"
  amount: number
}

export interface BudgetPlan {
  // Income schedule
  incomeSource: string
  incomeAmount: number
  incomeReceivableDay: number // 1–31

  // Category budget caps (derived from predefined or set manually)
  needs: number
  wants: number
  compulsive: number

  // Savings
  savingsGoals: SavingsGoal[]

  // Predefined recurring expenses for the month
  predefinedExpenses: PredefinedExpense[]

  // Legacy — keep for subcategory-level overrides
  subcategories: Record<string, number>
}
