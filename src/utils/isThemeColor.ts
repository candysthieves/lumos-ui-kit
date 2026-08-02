import type { ProgressThemeColor } from '@/types'
import { COLOR_MAP } from '@/constants'

export const isThemeColor = (value: string): value is ProgressThemeColor => value in COLOR_MAP
