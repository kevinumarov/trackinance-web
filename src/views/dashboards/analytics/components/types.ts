import type { BaseColorVariant } from 'bootstrap-vue-next'

export type SessionType = {
  country: { name: string; icon: string }
  variant: keyof BaseColorVariant | null | undefined
  sessions: number
  suffix: string
}

export type SessionByBrowserType = {
  browser: string
  session: { percent: number; data: number }
}

type TableHeaderType = string[]

export type TopPagesTableType = {
  header: TableHeaderType
  body: {
    pagePath: string
    pageViews: number
    avgTimeOnPage: string
    exitRate: number
  }[]
}
