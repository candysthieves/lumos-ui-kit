export declare const iconMeta: {
    argTypes: {
        autoSize: {
            control: {
                type: "radio";
            };
            options: boolean[];
            description: string;
        };
        backgroundColor: {
            control: {
                type: "color";
            };
            description: string;
        };
        color: {
            control: {
                type: "color";
            };
            description: string;
        };
        size: {
            control: {
                type: "range";
                min: number;
                max: number;
                step: number;
            };
            description: string;
        };
        svgProps: {
            control: {
                type: "object";
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
    };
    args: {
        autoSize: boolean;
        size: number;
        color: string;
    };
};
