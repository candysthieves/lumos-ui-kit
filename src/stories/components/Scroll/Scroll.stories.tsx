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
  <div
    style={{
      width: 'fit-content',
      padding: '16px 20px',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: '13px',
      color: '#e4e4e7',
    }}
  >
    {Array.from({ length: 40 }).map((_, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          padding: '8px 12px',
          borderRadius: '6px',
          whiteSpace: 'nowrap',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'background-color 0.15s ease',
          cursor: 'default',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        <span
          style={{
            display: 'inline-block',
            width: '60px',
            color: '#71717a',
            userSelect: 'none',
          }}
        >
          {String(i + 1).padStart(2, '0')}.
        </span>
        <span style={{ fontWeight: 500, color: '#fafafa' }}>Line {i + 1} — start</span>
        <span style={{ color: '#a1a1aa' }}>
          Line {i + 1} — extended end of the line for horizontal scroll testing
        </span>
      </div>
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
    <div style={{ width: 120, padding: 16 }}>
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
