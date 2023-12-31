interface ITag {
  id: string
  label: string
  style?: Record<string, string>
  icon?: { class: string; style?: Record<string, string> }
  isActive?: boolean
  title?: string
}

interface TagFilterOperation {
  id: string
  action: string
}

export type { ITag, TagFilterOperation }
