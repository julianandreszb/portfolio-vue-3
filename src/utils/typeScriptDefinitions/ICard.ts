import type { ITag } from '@/utils/typeScriptDefinitions/ITag'

interface ICard {
  title: string
  description: string
  tags?: Array<ITag>
  linkIcons?: Array<ITag> // CHANGE TO ILinkIcon
}
export type { ICard }
