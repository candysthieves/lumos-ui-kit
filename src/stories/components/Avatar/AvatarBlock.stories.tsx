import type { Meta, StoryObj } from '@storybook/react-vite'
import { Typography } from '@/components'
import { Avatar, AvatarBlock } from '@/components/Avatar'

const meta = {
  title: 'Components/Avatar/AvatarBlock',
  component: AvatarBlock,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Shows the last 3 users from the array of the users',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for the container',
    },
  },
} satisfies Meta<typeof AvatarBlock>

export default meta
type Story = StoryObj<typeof meta>

// Sample users data
const USERS = [
  {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    alt: 'Jane Doe',
    userName: 'Jane Doe',
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?&w=128&h=128&dpr=2&q=80',
    alt: 'Charlie Brown',
    userName: 'Charlie Brown',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=128&h=128&dpr=2&q=80',
    alt: 'Alex Johnson',
    userName: 'Alex Johnson',
  },
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=128&h=128&dpr=2&q=80',
    alt: 'Diana Clark',
    userName: 'Diana Clark',
  },
  {
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?&w=128&h=128&dpr=2&q=80',
    alt: 'Fiona Anderson',
    userName: 'Fiona Anderson',
  },
]

// Default story - shows last 3 users
export const Default: Story = {
  args: {
    users: USERS,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the last 3 users from the array',
      },
    },
  },
}

export const FiveUsersPassedAsProps: Story = {
  args: {
    users: USERS,
  },
  parameters: {
    docs: {
      description: {
        story: 'Despite having 5 users, only the last 3 are displayed',
      },
    },
  },
}

export const ExactlyThreeUsers: Story = {
  args: {
    users: USERS.slice(0, 3),
  },
  parameters: {
    docs: {
      description: {
        story: 'When exactly 3 users are provided, all are shown',
      },
    },
  },
}

export const TwoUsers: Story = {
  args: {
    users: USERS.slice(0, 2),
  },
  parameters: {
    docs: {
      description: {
        story: 'When less than 3 users are provided, all are shown',
      },
    },
  },
}

export const SingleUser: Story = {
  args: {
    users: [USERS[0]],
  },
  parameters: {
    docs: {
      description: {
        story: 'Single user display',
      },
    },
  },
}

export const Empty: Story = {
  args: {
    users: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no users are provided',
      },
    },
  },
}

export const WithoutImages: Story = {
  args: {
    users: [
      { userName: 'John Doe' },
      { userName: 'Sarah Smith' },
      { userName: 'Michael Brown' },
      { userName: 'Emma Wilson' },
      { userName: 'James Taylor' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Users without profile images show their initials as fallback',
      },
    },
  },
}

export const Mixed: Story = {
  args: {
    users: [
      {
        src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        alt: 'Jane Doe',
        userName: 'Jane Doe',
      },
      { userName: 'John Smith' },
      {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=128&h=128&dpr=2&q=80',
        alt: 'Alex Johnson',
        userName: 'Alex Johnson',
      },
      { userName: 'Sarah Williams' },
      {
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?&w=128&h=128&dpr=2&q=80',
        alt: 'Charlie Brown',
        userName: 'Charlie Brown',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Mixed users - some with images, others showing initials',
      },
    },
  },
}

export const WithCustomClass: Story = {
  args: {
    users: USERS,
    className: 'custom-avatar-group',
  },
  parameters: {
    docs: {
      description: {
        story: 'AvatarBlock with custom CSS class applied to the container',
      },
    },
  },
}

export const WithDelay: Story = {
  args: {
    users: USERS.map((user, index) => ({
      ...user,
      delayMs: (index + 1) * 100, // increasing delay for each avatar
    })),
  },
  parameters: {
    docs: {
      description: {
        story: 'Each avatar has a different delay (100ms, 200ms, 300ms) before showing fallback',
      },
    },
  },
}

// Long names
export const LongNames: Story = {
  args: {
    users: [
      { userName: 'Christopher Alexander' },
      { userName: 'Elizabeth Catherine Bennett' },
      { userName: 'William Henry Harrison' },
      { userName: 'Alexandria Maria Rodriguez' },
      { userName: 'Jonathan David Williamson' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Users with long names - only first letter is shown',
      },
    },
  },
}

export const SpecialCharacters: Story = {
  args: {
    users: [
      { userName: 'José García' },
      { userName: 'Marie-Claire Dupont' },
      { userName: 'Łukasz Kowalski' },
      { userName: 'Müller-Schmidt' },
      { userName: 'Åsa Johansson' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Users with special characters in their names',
      },
    },
  },
}

export const Comparison: Story = {
  args: {
    users: USERS,
  },

  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '31.25rem' }}>
      <div>
        <Typography variant={'h3'} style={{ marginBottom: '0.625rem' }}>
          All 5 Users (passed to component)
        </Typography>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {USERS.map((user, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0.5rem',
                background: 'var(--color-accent-300)',
                borderRadius: '4px',
              }}
            >
              <Avatar userName={user.userName} src={user.src} alt={user.alt} size={'xs'} />
              <Typography variant={'caption1'} style={{ marginTop: '0.625rem' }}>
                {user.userName}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <Typography variant={'h3'} style={{ marginBottom: '0.625rem' }}>
        Displayed (last 3 users only)
      </Typography>
      <AvatarBlock {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Visual comparison showing all 5 users vs the 3 that are actually displayed',
      },
    },
  },
}
