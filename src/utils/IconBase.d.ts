import { type ReactElement, type SVGProps } from 'react';
export type IconProps = {
    autoSize?: boolean;
    backgroundColor?: string;
    color?: string;
    size?: number;
    svgProps?: SVGProps<SVGSVGElement>;
};
declare const MemoizedIconBase: import("react").NamedExoticComponent<IconProps & {
    icon: ReactElement<SVGProps<SVGSVGElement>>;
} & import("react").RefAttributes<SVGSVGElement>>;
export { MemoizedIconBase as IconBase };
