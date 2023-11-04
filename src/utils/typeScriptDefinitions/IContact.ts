import type { ISocialMediaLink } from '@/utils/typeScriptDefinitions/ISocialMediaLink'

interface IContact {
  email: string
  title: string
  socialMedia: Array<ISocialMediaLink>
}

export type { IContact }
