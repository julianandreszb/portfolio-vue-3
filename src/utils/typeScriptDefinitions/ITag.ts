interface ITag {
  id: string
  label: string
  icon?: { class: string; style?: Record<string, string> }
  isActive?: boolean
}

interface TagFilterOperation {
  id: string
  action: string
}

export type { ITag, TagFilterOperation }
