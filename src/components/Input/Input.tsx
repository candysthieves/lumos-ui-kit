import type { InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import s from './Input.module.scss'

export type InputProps = {
  label?: string
  error?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  label,
  error,
  startAdornment,
  endAdornment,
  className,
  disabled,
  ...props
}: InputProps) => {
  return (
    <div className={s.wrapper}>
      {label && <label className={s.label}>{label}</label>}

      <div
        className={clsx(s.container, {
          [s.error]: !!error,
          [s.disabled]: disabled,
        })}
      >
        {startAdornment && (
          <span className={clsx(s.adornment, s.startAdornment)}>{startAdornment}</span>
        )}

        <input className={clsx(s.input, className)} disabled={disabled} {...props} />

        {endAdornment && <span className={clsx(s.adornment, s.endAdornment)}>{endAdornment}</span>}
      </div>

      {error && <span className={s.errorText}>{error}</span>}
    </div>
  )
}
