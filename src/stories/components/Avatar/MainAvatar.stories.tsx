import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { MainAvatar } from '@/components/Avatar'
import { Button } from '@/components/Button'

const meta = {
  title: 'Components/Avatar/MainAvatar',
  component: MainAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'xxl'],
      description: 'MainAvatar size',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for image',
    },
    userName: {
      control: 'text',
      description: 'User name for fallback letter',
    },
    delayMs: {
      control: 'number',
      description: 'Delay in milliseconds before showing fallback',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
    onClose: {
      action: 'onClose clicked',
      description: 'Callback when close button is clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof MainAvatar>

export default meta
type Story = StoryObj<typeof MainAvatar>

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    userName: 'Jane Doe',
    alt: 'Jane Doe avatar',
    size: 'xl',
  },
}

export const WithFallback: Story = {
  args: {
    userName: 'Jane Smith',
    size: 'xl',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <MainAvatar userName={'John Doe'} size={'xl'} showCloseButton />
      <MainAvatar
        src={'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'}
        userName={'Jane Doe'}
        alt={'Jane Doe avatar'}
        size={'xxl'}
        showCloseButton
      />
    </div>
  ),
}

export const WithImageAndFallback: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=128&h=128&dpr=2&q=80',
    userName: 'Alex Johnson',
    size: 'xl',
  },
}

export const BrokenImage: Story = {
  args: {
    src: 'https://invalid-url.com/image.jpg',
    userName: 'Broken Image',
    size: 'xl',
  },
}

export const DelayedFallback: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=128&h=128&dpr=2&q=80',
    userName: 'Delayed User',
    delayMs: 2000,
    size: 'xl',
  },
}

export const WithoutDelay: Story = {
  args: {
    userName: 'No Delay',
    delayMs: 0,
    size: 'xl',
  },
}

export const EmptyName: Story = {
  args: {
    userName: '',
    size: 'xl',
  },
}

export const Grid: Story = {
  render: () => {
    const users = [
      {
        name: 'Jane Doe',
        src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
      },
      {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=128&h=128&dpr=2&q=80',
        showCloseButton: true,
        onClose: () => alert('Close button clicked!'),
        name: 'Alex Johnson',
      },
      { name: 'Charlie Brown' },
      {
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=128&h=128&dpr=2&q=80',
        name: 'Diana Clark',
      },
      {
        name: 'Edward Norton',
        showCloseButton: true,
        onClose: () => alert('Close button clicked!'),
      },
    ]

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {users.map((user, index) => (
          <MainAvatar
            key={index}
            userName={user.name}
            src={user.src}
            showCloseButton={user.showCloseButton}
            onClose={user.onClose}
            size={'xl'}
          />
        ))}
      </div>
    )
  },
}

export const InteractiveDemo: Story = {
  render: function InteractiveDemo() {
    const [isVisible, setIsVisible] = useState(true)

    return (
      <>
        {!isVisible ? (
          <Button
            onClick={() => {
              setIsVisible(true)
            }}
          >
            Reset Avatar
          </Button>
        ) : (
          <MainAvatar
            userName={'Jane Doe'}
            src={
              'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
            }
            size={'xl'}
            showCloseButton
            onClose={() => {
              setIsVisible(false)
            }}
          />
        )}
      </>
    )
  },
}
