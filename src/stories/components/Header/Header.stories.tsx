import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import type { ActionMenuItem } from '@/components/ActionMenu'
import { BookmarkOutline, LogOutOutline, SettingsOutline, TrendingUpOutline } from '@/assets'
import { Header } from '@/components/Header'

const meta = {
  title: 'Components/Header',
  component: Header,
  render: args => <Header {...args} />,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    brandName: {
      control: 'text',
    },
    isAuthenticated: {
      control: 'boolean',
    },
    notificationCount: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    logoHref: {
      control: 'text',
      description: 'Optional destination opened when the brand name is clicked',
    },
    logInLabel: {
      control: 'text',
    },
    mobileAuthenticatedMenuItems: {
      control: false,
    },
    mobileMenuLabel: {
      control: 'text',
    },
    notificationLabel: {
      control: 'text',
    },
    onLogInClick: {
      action: 'log in clicked',
    },
    onNotificationClick: {
      action: 'notification clicked',
    },
    onSignUpClick: {
      action: 'sign up clicked',
    },
    signUpLabel: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

const profileMenuItems: ActionMenuItem[] = [
  {
    icon: <SettingsOutline size={24} />,
    id: 'profile-settings',
    label: 'Profile Settings',
    onSelect: fn(),
  },
  {
    icon: <TrendingUpOutline size={24} />,
    id: 'statistics',
    label: 'Statistics',
    onSelect: fn(),
  },
  {
    icon: <BookmarkOutline size={24} />,
    id: 'favorites',
    label: 'Favorites',
    onSelect: fn(),
  },
  {
    icon: <LogOutOutline size={24} />,
    id: 'log-out',
    label: 'Log Out',
    onSelect: fn(),
  },
]

export const Authorized: Story = {
  args: {
    brandName: 'Lumos',
    isAuthenticated: true,
    logoHref: '/',
    mobileAuthenticatedMenuItems: profileMenuItems,
    mobileMenuLabel: 'Open menu',
    notificationCount: 3,
    notificationLabel: 'Notifications',
  },
}

export const NotAuthorized: Story = {
  args: {
    brandName: 'Lumos',
    isAuthenticated: false,
    logoHref: '/',
    logInLabel: 'Log in',
    mobileMenuLabel: 'Open menu',
    notificationCount: 0,
    notificationLabel: 'Notifications',
    signUpLabel: 'Sign up',
  },
}
