import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from '@/components/Slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
  render: args => (
    <div style={{ width: 300, padding: '2rem', background: '#FFF' }}>
      <Slider {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    defaultValue: [30],
    max: 100,
    step: 1,
    disabled: true,
  },
  render: args => (
    <div style={{ width: 300, padding: '2rem', background: '#FFF' }}>
      <Slider {...args} />
    </div>
  ),
}
