import type { Meta, StoryObj } from '@storybook/react-vite'
import { Scroll } from '@/components/Scroll'

const meta: Meta<typeof Scroll> = {
  title: 'Components/Scroll',
  component: Scroll,
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['both', 'horizontal', 'vertical'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Scroll>

const LongContent = () => (
  <div style={{ width: 1200, height: 1200, padding: 16 }}>
    {Array.from({ length: 40 }).map((_, i) => (
      <p key={i}>Line {i + 1} — some long content to force scrolling in both directions</p>
    ))}
  </div>
)

export const Both: Story = {
  args: {
    orientation: 'both',
    children: <LongContent />,
  },
  render: args => (
    <div style={{ width: 400, height: 300, border: '1px solid #333' }}>
      <Scroll {...args} />
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    children: <LongContent />,
  },
  render: args => (
    <div style={{ width: 400, height: 300, border: '1px solid #333' }}>
      <Scroll {...args} />
    </div>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    children: <LongContent />,
  },
  render: args => (
    <div style={{ width: 400, height: 300, border: '1px solid #333' }}>
      <Scroll {...args} />
    </div>
  ),
}
