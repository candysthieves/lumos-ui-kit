import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircularProgress } from '@/components/CircularProgress'

const meta = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the CircularProgress',
      defaultValue: 'md',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning', 'inherit'],
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof CircularProgress>

export default meta
type Story = StoryObj<typeof meta>

export const CircularProgressDefault: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
}

export const CircularProgressSuccess: Story = {
  args: {
    color: 'success',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <CircularProgress size={'sm'} />
      <CircularProgress size={'md'} />
      <CircularProgress size={'lg'} />
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <CircularProgress color={'primary'} />
      <CircularProgress color={'success'} />
      <CircularProgress color={'error'} />
      <CircularProgress color={'warning'} />
      <CircularProgress color={'inherit'} />
      <CircularProgress color={'var(--color-danger-100)'} />
    </div>
  ),
}
