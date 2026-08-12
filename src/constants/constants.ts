import type { ProgressThemeColor } from '@/types'

export const COLOR_MAP: Record<ProgressThemeColor, string> = {
  error: 'var(--color-danger-500)',
  inherit: 'currentColor',
  primary: 'var(--color-accent-500)',
  success: 'var(--color-success-500)',
  warning: 'var(--color-warning-500)',
}

// Temporary mocked waveform (pass extracted waveform via Web Audio API to AudioPlayer waveform prop - 81)
export const WAVE_FORM = [
  8, 11, 15, 13, 10, 17, 22, 18, 14, 11, 20, 24, 16, 12, 9, 15, 21, 27, 18, 13, 10, 16, 23, 19, 14,
  11, 18, 26, 22, 16, 12, 9, 14, 20, 28, 24, 17, 13, 10, 16, 22, 19, 14, 11, 18, 24, 20, 15, 12, 9,
  13, 19, 26, 22, 16, 12, 10, 15, 21, 25, 18, 14, 11, 17, 23, 20, 15, 12, 10, 14, 19, 24, 21, 16,
  13, 11, 16, 20, 17, 13, 10,
]

export const TAB_INDEX = {
  ENABLED: 0,
  DISABLED: -1,
} as const
