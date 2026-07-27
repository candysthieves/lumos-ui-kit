import clsx from 'clsx'
import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import { Typography } from '../Typography/Typography'
import s from './Input.module.scss'

export type InputProps = {
  label?: string
  error?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, startAdornment, endAdornment, className, disabled, ...props }, ref) => {
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

          <input ref={ref} className={clsx(s.input, className)} disabled={disabled} {...props} />

          {endAdornment && (
            <span className={clsx(s.adornment, s.endAdornment)}>{endAdornment}</span>
          )}
        </div>

        {error && (
          <Typography variant={"body1"} color={"var(--color-danger-500)"}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
