import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlagEng, FlagRus } from '@/assets/icons'
import { ButtonLegacy } from '@/components/Button'
import { buttonMeta } from '@/storybook-utils'

const meta = {
  ...buttonMeta,
  title: 'Components/Data Entry/ButtonLegacy',
  component: ButtonLegacy,
  parameters: {
    docs: {
      description: {
        component:
          "Accepts all props of the native button element. Uses React's `forwardRef` API for ref forwarding, which is the standard approach for ref handling in React versions below 19",
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonLegacy>

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
