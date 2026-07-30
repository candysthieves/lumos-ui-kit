import type { ThemeProgressColor } from '@/types'
import { COLOR_MAP } from '@/constants'

export const isThemeColor = (value: string): value is ThemeProgressColor => value in COLOR_MAP
