import type { ComponentPropsWithRef, CSSProperties, ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import s from './Typography.module.scss'

export type TypographyVariant =
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

export type TypographyAlign = 'center' | 'justify' | 'left' | 'right'

type MarginProps = {
  mt?: CSSProperties['marginTop']
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mx?: CSSProperties['marginLeft']
  my?: CSSProperties['marginTop']
}

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

export type TypographyProps<T extends ElementType = 'div'> = {
  variant?: TypographyVariant
  children: ReactNode
  color?: CSSProperties['color']
  className?: string
  style?: CSSProperties
  noWrap?: boolean
  gutterBottom?: boolean
  align?: TypographyAlign
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  rel?: string
} & MarginProps &
  Omit<
    ComponentPropsWithRef<T>,
    | 'align'
    | 'color'
    | 'gutterBottom'
    | 'href'
    | 'noWrap'
    | 'rel'
    | 'style'
    | 'target'
    | keyof MarginProps
  >

export const Typography = <C extends ElementType = 'div'>(props: TypographyProps<C>) => {
  const {
    ref,
    children,
    variant = 'body1',
    color,
    className,
    style,
    noWrap,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    gutterBottom,
    align,
    href,
    target,
    rel,
    ...rest
  } = props

  const Component = tagMapping[variant] || 'div'

  const classes = clsx(
    s.typography,
    `typography-${variant}`,
    align && s[`align-${align}`],
    noWrap && s.noWrap,
    gutterBottom && s.gutterBottom,
    className
  )

  const isLink = variant === 'link' || variant === 'subtitle-link' || Component === 'a'
  const linkProps = isLink ? { href, target, rel } : {}

  const styles = {
    marginLeft: mx ?? ml ?? 0,
    marginRight: mx ?? mr ?? 0,
    marginTop: my ?? mt ?? 0,
    marginBottom: my ?? mb ?? 0,
    color: color ?? 'inherit',
    ...style,
  }

  return (
    <Component ref={ref} className={classes} style={styles} {...linkProps} {...rest}>
      {children}
    </Component>
  )
}
