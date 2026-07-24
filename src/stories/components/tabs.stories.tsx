import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from '@/components/tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    tabs: {
      control: false,
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

const baseTabs = [
  {
    value: 'tab1',
    label: 'General',
    content: 'General content',
  },
  {
    value: 'tab2',
    label: 'Devices',
    content: 'Devices content',
  },
  {
    value: 'tab3',
    label: 'Payments',
    content: 'Payments content',
  },
]

const createTabs = (disabledTabs: string[] = []) =>
  baseTabs.map(tab => ({
    ...tab,
    disabled: disabledTabs.includes(tab.value),
  }))

export const Default: Story = {
  args: {
    tabs: createTabs(),
    defaultValue: 'tab1',
  },
}

export const SecondActive: Story = {
  args: {
    tabs: createTabs(),
    defaultValue: 'tab2',
  },
}

export const Disabled: Story = {
  args: {
    tabs: createTabs(['tab2']),
    defaultValue: 'tab1',
  },
}

export const AllDisabled: Story = {
  args: {
    tabs: createTabs(['tab1', 'tab2', 'tab3']),
    defaultValue: 'tab1',
  },
}
