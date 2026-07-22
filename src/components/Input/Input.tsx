import type { InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Input.module.scss'

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
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div
        className={clsx(styles.container, {
          [styles.error]: !!error,
          [styles.disabled]: disabled,
        })}
      >
        {startAdornment && <span className={styles.adornment}>{startAdornment}</span>}

        <input className={clsx(styles.input, className)} disabled={disabled} {...props} />

        {endAdornment && <span className={styles.adornment}>{endAdornment}</span>}
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  )
}
