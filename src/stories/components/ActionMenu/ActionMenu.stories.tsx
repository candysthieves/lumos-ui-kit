import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import {
  CopyOutline,
  EditOutline,
  PersonAddOutline,
  PersonRemoveOutline,
  TrashOutline,
} from '@/assets'
import { ActionMenu, type ActionMenuItem } from '@/components/ActionMenu'

const meta = {
  title: 'Components/ActionMenu',
  component: ActionMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    contentClassName: {
      control: false,
    },
    contentProps: {
      control: false,
    },
    items: {
      control: false,
    },
    onOpenChange: {
      action: 'open changed',
    },
    portalProps: {
      control: false,
    },
    trigger: {
      control: false,
    },
    triggerClassName: {
      control: false,
    },
  },
} satisfies Meta<typeof ActionMenu>

export default meta

type Story = StoryObj<typeof meta>

const authActions: ActionMenuItem[] = [
  {
    id: 'log-in',
    label: 'Log in',
    onSelect: fn(),
  },
  {
    id: 'sign-up',
    label: 'Sign up',
    onSelect: fn(),
  },
]

const ownPostActions: ActionMenuItem[] = [
  {
    icon: <EditOutline size={24} />,
    id: 'edit-post',
    label: 'Edit Post',
    onSelect: fn(),
  },
  {
    icon: <TrashOutline size={24} />,
    id: 'delete-post',
    label: 'Delete Post',
    onSelect: fn(),
  },
]

const followActions: ActionMenuItem[] = [
  {
    icon: <PersonAddOutline size={24} />,
    id: 'follow',
    label: 'Follow',
    onSelect: fn(),
  },
  {
    icon: <CopyOutline size={24} />,
    id: 'copy-link',
    label: 'Copy Link',
    onSelect: fn(),
  },
]

const unfollowActions: ActionMenuItem[] = [
  {
    icon: <PersonRemoveOutline size={24} />,
    id: 'unfollow',
    label: 'Unfollow',
    onSelect: fn(),
  },
  {
    icon: <CopyOutline size={24} />,
    id: 'copy-link',
    label: 'Copy Link',
    onSelect: fn(),
  },
]

export const Default: Story = {
  args: {
    ariaLabel: 'Open menu',
    items: authActions,
  },
}

export const OwnPostActions: Story = {
  args: {
    ariaLabel: 'Open post actions',
    items: ownPostActions,
  },
}

export const FollowActions: Story = {
  args: {
    ariaLabel: 'Open user actions',
    items: followActions,
  },
}

export const UnfollowActions: Story = {
  args: {
    ariaLabel: 'Open user actions',
    items: unfollowActions,
  },
}

export const DisabledItem: Story = {
  args: {
    ariaLabel: 'Open post actions',
    items: [
      {
        icon: <EditOutline size={24} />,
        id: 'edit-post',
        label: 'Edit Post',
        onSelect: fn(),
      },
      {
        disabled: true,
        icon: <TrashOutline size={24} />,
        id: 'delete-post',
        label: 'Delete Post',
        onSelect: fn(),
      },
    ],
  },
}
