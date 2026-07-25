export const logoIconMeta = {
  argTypes: {
    size: {
      control: {
        type: 'select' as const,
        options: ['xs', 's', 'm', 'l', 'xl'] as const,
      },
      description: `Set the logo width and height in pixels
    **Examples:**
  - \`size="xs"\` - The size of Logo is 16px
  - \`size="s"\` - The size of Logo is 24px
  - \`size="m"\` - The size of Logo is 48px
  - \`size="l"\` - The size of Logo is 72px
  - \`size="xl"\` - The size of Logo is 108px`,
    },
    theme: {
      control: {
        type: 'select' as const,
        options: ['day', 'night'] as const,
      },
      description:
        'Determines whether the logo should be scaled according to the font size. Sets the width and height to 1em',
    },
    svgProps: {
      control: { type: 'object' as const },
      description: 'Props passed directly to the Logo SVG element',
      table: {
        type: { summary: 'SVGProps<SVGSVGElement>' },
        defaultValue: { summary: '' },
      },
    },
  },
}
