import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: any;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
    argTypes: {
        variant: {
            control: string;
            options: string[];
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        color: {
            control: {
                type: "color";
            };
            description: string;
        };
        align: {
            control: string;
            options: string[];
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        noWrap: {
            control: string;
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        gutterBottom: {
            control: string;
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        mt: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        mb: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        ml: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        mr: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        mx: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        my: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            description: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
        };
        children: {
            control: string;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        className: {
            control: string;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        style: {
            control: string;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
    };
    args: {
        color: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const AllTypography: Story;
export declare const CustomComponent: Story;
export declare const ColorInheritComponent: Story;
export declare const LargeWithColor: Story;
export declare const TypographyAsLink: Story;
export declare const NoWrapTrue: Story;
export declare const TypographyWithMargin: Story;
export declare const TypographyCautionError: Story;
