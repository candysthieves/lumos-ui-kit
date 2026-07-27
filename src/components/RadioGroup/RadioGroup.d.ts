import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
export type RadioOption = {
    disabled?: boolean;
    label?: ReactNode;
    value: string;
};
export type RadioGroupProps = Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'children'> & {
    className?: string;
    options: RadioOption[];
};
export declare const RadioGroup: import("react").ForwardRefExoticComponent<Omit<Omit<RadioGroupPrimitive.RadioGroupProps & import("react").RefAttributes<HTMLDivElement>, "ref">, "children"> & {
    className?: string;
    options: RadioOption[];
} & import("react").RefAttributes<HTMLDivElement>>;
