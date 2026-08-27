import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import type { ActionMenuItem } from '@/components/ActionMenu'
import { BookmarkOutline, LogOutOutline, SettingsOutline, TrendingUpOutline } from '@/assets'
import { Header } from '@/components/Header'

const meta = {
  title: 'Components/Header',
  component: Header,
  render: args => <Header key={args.defaultLanguage} {...args} />,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    brandName: {
      control: 'text',
    },
    defaultLanguage: {
      control: 'select',
      options: ['english', 'russian'],
    },
    isAuthenticated: {
      control: 'boolean',
    },
    language: {
      control: false,
    },
    notificationCount: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    languageOptions: {
      control: false,
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
    onLanguageChange: {
      action: 'language changed',
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
    defaultLanguage: 'english',
    isAuthenticated: true,
    mobileAuthenticatedMenuItems: profileMenuItems,
    mobileMenuLabel: 'Open menu',
    notificationCount: 3,
    notificationLabel: 'Notifications',
  },
}

export const NotAuthorized: Story = {
  args: {
    brandName: 'Lumos',
    defaultLanguage: 'english',
    isAuthenticated: false,
    logInLabel: 'Log in',
    mobileMenuLabel: 'Open menu',
    notificationCount: 0,
    notificationLabel: 'Notifications',
    signUpLabel: 'Sign up',
  },
}
