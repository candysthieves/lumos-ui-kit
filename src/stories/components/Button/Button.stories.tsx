import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { FlagEng, FlagRus } from '@/assets/icons'
import { Button } from '@/components/Button'

const meta = {
  title: 'Components/Data Entry/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Accepts all props of the native button element. Uses React 19's ref prop forwarding, allowing refs to be passed directly to the underlying DOM element or component",
      },
    },
  },
  tags: ['autodocs'],

  argTypes: {
    as: {
      control: {
        type: 'text',
      },
      description: `The component used for the root node. Either a string to use an HTML element or a React component.
      **Examples:**
      - \`as="button"\` - renders a <button> element (default)
      - \`as="a"\` - renders an <a> link element
      - \`as="div"\` - renders a <div> element`,
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: '"button"' },
      },
    },
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outlined', 'text'],
      table: {
        type: { summary: "'primary' | 'secondary' | 'outlined' | 'text'" },
      },
    },
  },
  args: {
    as: 'button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'outlined',
  },
}

export const Text: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'text',
  },
}

export const PrimaryFullWidth: Story = {
  args: {
    children: 'Button',
    disabled: true,
    variant: 'primary',
    fullWidth: true,
  },
}

export const SecondaryWithRuLang: Story = {
  args: {
    children: (
      <>
        <FlagRus /> Russian
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryWithEnLang: Story = {
  args: {
    children: (
      <>
        <FlagEng /> English
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}

export const PrimaryAsLink: Story = {
  args: {
    as: 'a',
    children: 'Link',
    disabled: false,
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary',
  },
}
