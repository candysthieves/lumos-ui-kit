import { useState } from 'react'
import { EyeOffOutline, EyeOutline } from '@/assets/icons'
import { Input } from '../Input/Input'
import s from './PasswordInput.module.scss'

export type PasswordInputProps = {
  label?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <button
          type={'button'}
          className={s.iconButton}
          onClick={() => setShowPassword(prev => !prev)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeOutline autoSize={false} color={'var(--color-light-100)'} size={24} />
          ) : (
            <EyeOffOutline autoSize={false} color={'var(--color-light-100)'} size={24} />
          )}
        </button>
      }
    />
  )
}
