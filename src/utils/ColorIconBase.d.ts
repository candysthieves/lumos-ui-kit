import { type ReactElement, type SVGProps } from 'react';
import type { IconProps } from '@/utils';
export type ColorIconProps = Omit<IconProps, 'backgroundColor' | 'color'>;
type Props = ColorIconProps & {
    icon: ReactElement<SVGProps<SVGSVGElement>>;
};
declare const MemoizedIconBase: import("react").NamedExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
export { MemoizedIconBase as ColorIconBase };
