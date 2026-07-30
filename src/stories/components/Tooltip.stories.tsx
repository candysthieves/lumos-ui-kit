import type { Meta, StoryObj } from '@storybook/react-vite'
import type { TooltipProps } from '@/components/Tooltip/Tooltip'
import { Tooltip } from '@/components/Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    delayDuration: {
      control: { type: 'number' },
      description: 'The delay before the tooltip appears, in milliseconds',
      defaultValue: 200,
    },
    sideOffset: {
      control: { type: 'number' },
      description: 'The distance between the tooltip content and the trigger element',
      defaultValue: 8,
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    delayDuration: 200,
    sideOffset: 8,
    children: (
      <button type={'button'} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Hover over me
      </button>
    ),

    content: (
      <div>
        <div className={'typography-h3'} style={{ marginBottom: '0.5rem' }}>
          Remember!
        </div>
        <div className={'typography-body1'}>
          Clicking [ Log Out ] should redirect you to the Sign In page
        </div>
      </div>
    ),
  } as TooltipProps,
}

export const SimpleText: Story = {
  args: {
    children: <span>ℹ️ Подсказка</span>,
    content: 'This is a simple helper text for the user.',
  } as TooltipProps,
}
