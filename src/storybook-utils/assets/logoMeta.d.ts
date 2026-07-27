export declare const logoIconMeta: {
    argTypes: {
        size: {
            control: {
                type: "select";
                options: readonly ["xs", "s", "m", "l", "xl"];
            };
            description: string;
        };
        theme: {
            control: {
                type: "select";
                options: readonly ["day", "night"];
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
};
