import type { ThemeColor } from '@/components/CircularProgress'

export const COLOR_MAP: Record<ThemeColor, string> = {
  error: 'var(--color-danger-500)',
  inherit: 'currentColor',
  primary: 'var(--color-accent-500)',
  success: 'var(--color-success-500)',
  warning: 'var(--color-warning-500)',
}
