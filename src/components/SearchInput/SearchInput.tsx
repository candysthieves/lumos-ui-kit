import { SearchOutline } from '@/assets/icons'
import type { InputProps } from '../Input/Input'
import { Input } from '../Input'

export type SearchInputProps = Omit<InputProps, 'startAdornment'>

export const SearchInput = (props: SearchInputProps) => {
  return (
    <Input
      {...props}
      startAdornment={<SearchOutline autoSize={false} color={"var(--color-light-100)"} size={20} />}
      type={'search'}
    />
  )
}
