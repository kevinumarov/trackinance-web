import type { BaseColorVariant } from 'bootstrap-vue-next'

export type SkillType = {
  title: string
  progressValue: number
}

export type ProjectType = {
  icon: string
  iconColor: string
  title: string
  days: number
  file: number
  task: string
  progressValue: number
  progressVariant: keyof BaseColorVariant | null | undefined
  team: number
  teamMembers: string[]
}

export type MessageType = {
  avatar: string
  name: string
  content: string
  time: string
}

export type FollowersType = {
  avatar: string
  name: string
  email: string
}
