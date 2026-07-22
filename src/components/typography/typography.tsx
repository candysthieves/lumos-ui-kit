import type { ElementType } from 'react'

type TypographyVariant =
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption1'
  | 'caption2'
  | 'caution'
  | 'caution-error'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'large'
  | 'link'
  | 'signature'
  | 'signature-legal'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle-link'

const tagMapping: Record<TypographyVariant, ElementType> = {
  large: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle1: 'h4',
  subtitle2: 'h5',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  caption1: 'span',
  caption2: 'span',
  link: 'a',
  'subtitle-link': 'a',
  // The following is used in reCAPTCHA
  caution: 'div',
  'caution-error': 'div',
  signature: 'span',
  'signature-legal': 'span',
}

const Typography = () => {
  console.log(tagMapping)
  return <>Typography</>
}

export default Typography
