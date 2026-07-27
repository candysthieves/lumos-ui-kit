import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: any;
    tags: string[];
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        value: {
            control: string;
            description: string;
        };
        defaultValue: {
            control: string;
            description: string;
        };
        disabled: {
            control: string;
            description: string;
        };
        options: {
            control: boolean;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        onValueChange: {
            action: string;
            description: string;
        };
        className: {
            control: boolean;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const DisabledItem: Story;
