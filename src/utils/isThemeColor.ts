import type { ThemeColor } from '@/components/CircularProgress'
import { COLOR_MAP } from '@/constants'

export const isThemeColor = (value: string): value is ThemeColor => value in COLOR_MAP
