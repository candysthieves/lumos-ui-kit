import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from '@/components/Header'

const meta = {
  title: 'Components/Header',
  component: Header,
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
      control: 'select',
      options: ['english', 'russian'],
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

export const Authorized: Story = {
  args: {
    brandName: 'Inctagram',
    defaultLanguage: 'english',
    isAuthenticated: true,
    notificationCount: 3,
    notificationLabel: 'Notifications',
  },
}

export const NotAuthorized: Story = {
  args: {
    brandName: 'Inctagram',
    defaultLanguage: 'english',
    isAuthenticated: false,
    logInLabel: 'Log in',
    notificationCount: 0,
    notificationLabel: 'Notifications',
    signUpLabel: 'Sign up',
  },
}
