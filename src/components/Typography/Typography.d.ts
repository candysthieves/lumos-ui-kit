import type { ComponentPropsWithRef, CSSProperties, ElementType, ReactNode } from 'react';
type TypographyVariant = 'body1' | 'body2' | 'body3' | 'caption1' | 'caption2' | 'caution' | 'caution-error' | 'h1' | 'h2' | 'h3' | 'large' | 'link' | 'signature' | 'signature-legal' | 'subtitle1' | 'subtitle2' | 'subtitle-link';
type TypographyAlign = 'center' | 'justify' | 'left' | 'right';
type MarginProps = {
    mt?: CSSProperties['marginTop'];
    mb?: CSSProperties['marginBottom'];
    ml?: CSSProperties['marginLeft'];
    mr?: CSSProperties['marginRight'];
    mx?: CSSProperties['marginLeft'];
    my?: CSSProperties['marginTop'];
};
type TypographyProps<T extends ElementType = 'div'> = {
    variant?: TypographyVariant;
    children: ReactNode;
    color?: CSSProperties['color'];
    className?: string;
    style?: CSSProperties;
    noWrap?: boolean;
    gutterBottom?: boolean;
    align?: TypographyAlign;
    href?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    rel?: string;
} & MarginProps & Omit<ComponentPropsWithRef<T>, 'align' | 'color' | 'gutterBottom' | 'href' | 'noWrap' | 'rel' | 'style' | 'target' | keyof MarginProps>;
export declare const Typography: <C extends ElementType = "div">(props: TypographyProps<C>) => import("react").JSX.Element;
export {};
