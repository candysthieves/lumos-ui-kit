import { fn } from 'storybook/test'

export const buttonMeta = {
  argTypes: {
    as: {
      control: {
        type: 'text' as const,
      },
      description: `The component used for the root node. Either a string to use an HTML element or a React component.
      **Examples:**
      - \`as="button"\` - renders a <button> element (default)
      - \`as="a"\` - renders an <a> link element
      - \`as="div"\` - renders a <div> element`,
      table: {
        type: { summary: 'ElementType' as const },
        defaultValue: { summary: '"button"' },
      },
    },
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' as const },
      options: ['primary', 'secondary', 'outlined', 'text'],
      table: {
        type: { summary: "'primary' | 'secondary' | 'outlined' | 'text'" },
      },
    },
  },

  args: {
    as: 'button' as const,
    onClick: fn(),
  },
}
