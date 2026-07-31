import { clsx } from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ComponentRef, useId } from 'react'
import { Typography } from '@/components'
import s from './TextArea.module.scss'

export type TextAreaProps = {
  label?: string
  error?: string
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<ComponentRef<'textarea'>, TextAreaProps>(
  ({ label, error, className, disabled, id, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = id ?? generatedId
    const errorId = `${textareaId}-error`

    return (
      <div
        className={clsx(s.container, {
          [s.errorState]: !!error,
        })}
      >
        {label && (
          <label htmlFor={textareaId} className={clsx('typography-body1', s.label)}>
            {label}
          </label>
        )}

        <textarea
          id={textareaId}
          ref={ref}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={clsx(s.textarea, 'typography-subtitle1', className)}
          {...props}
        />

        {error && (
          <Typography
            variant={'body1'}
            color={'var(--color-danger-500)'}
            id={errorId}
            className={s.errorMessage}
          >
            {error}
          </Typography>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
