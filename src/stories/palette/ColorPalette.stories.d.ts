import { COLORS } from '@/stories/constants';
export type ColorFamily = keyof typeof COLORS;
declare const _default: {
    title: string;
    parameters: {
        layout: string;
    };
};
export default _default;
export declare const Colors: () => import("react").JSX.Element;
