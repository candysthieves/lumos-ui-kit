import { create } from 'storybook/theming'

export const darkTheme = create({
  base: 'dark',
  appBg: '#080808',
  appContentBg: '#080808',
  appPreviewBg: '#080808',
  barBg: '#111111',
  textColor: '#FFFFFF',
})

export const lightTheme = create({
  base: 'light',
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
})
