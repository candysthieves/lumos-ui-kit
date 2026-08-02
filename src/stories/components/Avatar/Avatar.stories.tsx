import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '@/components/Avatar'

const meta = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l'],
      description: 'Avatar size',
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
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    userName: 'Jane Doe',
    alt: 'Jane Doe avatar',
    size: 'm',
  },
}

export const WithFallback: Story = {
  args: {
    userName: 'Jane Smith',
    size: 'm',
  },
}

export const WithLongName: Story = {
  args: {
    userName: 'Alexander Hamilton',
    size: 'm',
  },
}

export const WithSpecialCharacters: Story = {
  args: {
    userName: 'José García',
    size: 'm',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar userName={'XS'} size={'xs'} />
      <Avatar userName={'S'} size={'s'} />
      <Avatar userName={'M'} size={'m'} />
      <Avatar userName={'L'} size={'l'} />
    </div>
  ),
}

export const WithImageAndFallback: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=128&h=128&dpr=2&q=80',
    userName: 'Alex Johnson',
    size: 'm',
  },
}

export const BrokenImage: Story = {
  args: {
    src: 'https://invalid-url.com/image.jpg',
    userName: 'Broken Image',
    size: 'm',
  },
}

export const DelayedFallback: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=128&h=128&dpr=2&q=80',
    userName: 'Delayed User',
    delayMs: 2000,
    size: 'm',
  },
}

export const WithoutDelay: Story = {
  args: {
    userName: 'No Delay',
    delayMs: 0,
    size: 'm',
  },
}

export const EmptyName: Story = {
  args: {
    userName: '',
    size: 'm',
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
        name: 'Alex Johnson',
      },
      { name: 'Charlie Brown' },
      {
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=128&h=128&dpr=2&q=80',
        name: 'Diana Clark',
      },
      { name: 'Edward Norton' },
    ]

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {users.map((user, index) => (
          <Avatar key={index} userName={user.name} src={user.src} size={'m'} />
        ))}
      </div>
    )
  },
}
