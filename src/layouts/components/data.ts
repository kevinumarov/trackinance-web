import github from '@/assets/images/brands/github.svg'
import bitbucket from '@/assets/images/brands/bitbucket.svg'
import dribbble from '@/assets/images/brands/dribbble.svg'
import dropbox from '@/assets/images/brands/dropbox.svg'
import slack from '@/assets/images/brands/slack.svg'
import type { CategoryType, NotificationType } from '@/layouts/components/types'
import type { MenuItemType } from '@/types/menu'

export const categories: CategoryType[] = [
  {
    image: github,
    name: 'GitHub',
    username: '@kevin'
  },
  {
    image: bitbucket,
    name: 'Bitbucket',
    username: '@kevin'
  },
  {
    image: dribbble,
    name: 'Dribbble',
    username: '@kevin'
  },
  {
    image: dropbox,
    name: 'Dropbox',
    username: '@kevin'
  },
  {
    image: slack,
    name: 'Slack',
    username: '@kevin'
  }
]

import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'

export const notifications: NotificationType[] = [
  {
    user: { avatar: avatar1 },
    content: 'Josephine Thompson commented on admin panel "Wow 😍! this admin looks good and awesome design"'
  },
  {
    user: { name: 'Donoghue Susan' },
    message: 'Hi, How are you? What about our next meeting'
  },
  {
    user: { name: 'Jacob Gines', avatar: avatar3 },
    message: "Answered to your comment on the cash flow forecast's graph 🔔."
  },
  {
    icon: 'iconamoon:comment-dots-duotone',
    title: 'You have received 20 new messages in the conversation'
  },
  {
    user: { name: 'Shawn Bunch', avatar: avatar5 },
    content: 'Commented on Admin'
  }
]

export const profileMenuItems: MenuItemType[] = [
  {
    key: 'profile',
    label: 'Profile',
    icon: 'bx-user-circle',
    route: { name: 'pages.profile' }
  },
  {
    key: 'message',
    label: 'Message',
    icon: 'bx-message-dots',
    route: { name: 'apps.chat' }
  },
  {
    key: 'pricing',
    label: 'Pricing',
    icon: 'bx-wallet',
    route: { name: 'pages.pricing' }
  },
  {
    key: 'help',
    label: 'Help',
    icon: 'bx-help-circle',
    route: { name: 'pages.faqs' }
  },
  {
    key: 'lock-screen',
    label: 'Lock Screen',
    icon: 'bx-lock',
    route: { name: 'auth.lock-screen' }
  }
]
