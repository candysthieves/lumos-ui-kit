import type { Meta, StoryObj } from '@storybook/react-vite'

import { TestComponent } from '@/components/testComponent'

const meta = {
  title: 'Components/TestComponent',
  component: TestComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'color',
      description: 'Text color (SCSS-variable or hex)',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TestComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AccentColor: Story = {
  args: {
    color: 'var(--color-accent-500)',
  },
}
