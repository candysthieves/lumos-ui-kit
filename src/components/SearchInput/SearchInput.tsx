import type { InputProps } from '@/components'
import { SearchOutline } from '@/assets'
import { Input } from '@/components'

export type SearchInputProps = Omit<InputProps, 'startAdornment'>

export const SearchInput = (props: SearchInputProps) => {
  return (
    <Input
      {...props}
      startAdornment={<SearchOutline autoSize={false} color={'var(--color-light-100)'} size={20} />}
      type={'search'}
    />
  )
}
