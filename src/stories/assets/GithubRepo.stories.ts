import type { Meta, StoryObj } from '@storybook/react-vite'
import { GithubRepo } from '@/assets/icons'
import { iconMeta } from '@/storybook-utils'

const meta = {
  ...iconMeta,
  title: 'Components/Icons/GithubRepo',
  component: GithubRepo,
  tags: ['autodocs'],
} satisfies Meta<typeof GithubRepo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
