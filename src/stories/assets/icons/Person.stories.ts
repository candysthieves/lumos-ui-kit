import type { Meta, StoryObj } from '@storybook/react-vite'
import { Person } from '@/assets'
import { iconMeta } from '@/storybook-utils'
import s from './Icon.module.scss'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/Person',
  component: Person,
  tags: ['autodocs'],
} satisfies Meta<typeof Person>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithStyle: Story = {
  args: {
    size: 36,
    backgroundColor: 'var(--color-dark-500)',
    svgProps: {
      style: {
        borderRadius: '2px',
        opacity: 0.8,
      },
    },
  },
}

export const WithClassName: Story = {
  args: {
    size: 36,
    backgroundColor: 'var(--color-dark-500)',
    svgProps: {
      className: s.icon,
    },
  },
}
