import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { Scroll } from '@/components/Scroll'

const meta: Meta<typeof Scroll> = {
  title: 'Components/Scroll',
  component: Scroll,
  tags: ['autodocs'],
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
    <div style={{ width: 400, height: 300, border: '1px solid #333', background: '#000' }}>
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

const DynamicContentDemo = () => {
  const [count, setCount] = useState(10)

  useEffect(() => {
    const timer = setTimeout(() => setCount(40), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ width: 1200, padding: 16 }}>
      {Array.from({ length: count }).map((_, i) => (
        <p key={i}>Line {i + 1} — dynamically loaded content</p>
      ))}
    </div>
  )
}

export const DynamicContent: Story = {
  render: () => (
    <div style={{ width: 400, height: 300, border: '1px solid #333', background: '#000' }}>
      <Scroll orientation={'both'}>
        <DynamicContentDemo />
      </Scroll>
    </div>
  ),
}
