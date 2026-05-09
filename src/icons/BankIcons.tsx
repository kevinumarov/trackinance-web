import tossUrl from '@/assets/icons/Banks/toss.svg'
import hanaUrl from '@/assets/icons/Banks/hana.svg'
import shinhanUrl from '@/assets/icons/Banks/shinhan.svg'
import kbUrl from '@/assets/icons/Banks/kb.svg'
import wooriUrl from '@/assets/icons/Banks/woori.svg'
import nhUrl from '@/assets/icons/Banks/NH.svg'

const BANK_LOGO_MAP: Record<string, string> = {
  Toss: tossUrl,
  'Hana - Young': hanaUrl,
  'Hana - Viva': hanaUrl,
  Shinhan: shinhanUrl,
  KB: kbUrl,
  Woori: wooriUrl,
  NH: nhUrl,
}

function CashBadge({ size }: { size: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold leading-none select-none shrink-0"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.44) }}
    >
      ₩
    </span>
  )
}

export function BankIcon({ account, size = 20 }: { account: string; size?: number }) {
  const url = BANK_LOGO_MAP[account]
  if (url) {
    return (
      <img
        src={url}
        alt={account}
        className="rounded-full shrink-0 object-contain"
        style={{ width: size, height: size }}
      />
    )
  }
  return <CashBadge size={size} />
}
