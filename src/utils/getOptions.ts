import type { SelectItem, SelectOption } from '@/components'

export const getOptions = (items: SelectItem[]): SelectOption[] =>
  items.flatMap(item => {
    if (item.type === 'group') {
      return item.options
    }

    if (item.type === 'separator') {
      return []
    }

    return item
  })
