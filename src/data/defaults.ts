import type { CategoryType } from '@/types'

export const ACCOUNTS = [
  'Toss',
  'Hana - Young',
  'Hana - Viva',
  'Shinhan',
  'KB',
  'Woori',
  'NH',
  'Cash',
]

export const DEFAULT_SUBCATEGORIES: Record<CategoryType, string[]> = {
  needs: ['Groceries', 'Transportation', 'Utilities', 'Healthcare', 'Housing', 'Education'],
  wants: ['Dining', 'Entertainment', 'Clothing', 'Electronics', 'Subscriptions', 'Beauty'],
  compulsive: ['Gaming', 'Impulse Shopping', 'Late Night Food', 'Social Events'],
}

export const DEFAULT_INCOME_SOURCES = [
  'Salary',
  'Freelance',
  'Bonus',
  'Side Income',
  'Investment',
  'Gift',
]
