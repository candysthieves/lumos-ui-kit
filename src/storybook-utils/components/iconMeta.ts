export const iconMeta = {
  argTypes: {
    autoSize: {
      control: { type: 'radio' as const },
      options: [true, false],
      description:
        'Determines whether the icon should be scaled according to the font size. Sets the width and height to 1em',
    },
    backgroundColor: {
      control: { type: 'color' as const },
      description: 'Set the icon fill background color from the design system',
    },
    color: {
      control: { type: 'color' as const },
      description: 'Set the icon fill color from the design system',
    },
    size: {
      control: {
        type: 'range' as const,
        min: 12,
        max: 120,
        step: 2,
      },
      description: 'Set the icon width and height in pixels',
    },
    svgProps: {
      control: { type: 'object' as const },
      description: 'Props passed directly to the SVG element',
      table: {
        type: { summary: 'SVGProps<SVGSVGElement>' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    autoSize: false,
    size: 30,
    color: 'var(--color-dark-900)',
  },
}
