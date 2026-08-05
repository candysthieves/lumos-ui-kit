import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import { useState } from 'react'
import type { HeaderLanguage } from '@/components/Header'
import { Header } from '@/components/Header'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
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
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

const StatefulHeader = (args: ComponentProps<typeof Header>) => {
  const [language, setLanguage] = useState<HeaderLanguage>(args.language ?? 'english')

  return <Header {...args} language={language} onLanguageChange={setLanguage} />
}

export const Authorized: Story = {
  args: {
    isAuthenticated: true,
    language: 'english',
    notificationCount: 3,
  },
  render: args => <StatefulHeader {...args} />,
}

export const NotAuthorized: Story = {
  args: {
    isAuthenticated: false,
    language: 'english',
    notificationCount: 0,
  },
  render: args => <StatefulHeader {...args} />,
}
