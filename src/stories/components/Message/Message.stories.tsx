import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MessageProps } from '@/components/Message/types'
import { AudioPlayer } from '@/components/AudioPlayer'
import { Message } from '@/components/Message'
import { WAVE_FORM } from '@/constants'

const meta = {
  title: 'Components/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: '0.75rem 1.25rem',
          width: '43.875rem',
          maxWidth: '100%',
          height: '30rem',
          background: 'var(--color-dark-700)',
          border: '1px solid var(--color-dark-300)',
          borderRadius: '0.75rem',
          overflow: 'auto',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Message>

export default meta

type Story = StoryObj<typeof meta>

const MOCK_MESSAGES: MessageProps[] = [
  {
    author: 'Anna',
    avatar: 'https://i.pravatar.cc/150?img=1',
    text: 'Hi! How are you?',
    timestamp: '14:30',
    type: 'incoming',
    status: 'read',
  },
  {
    author: 'You',
    avatar: 'https://i.pravatar.cc/150?img=12',
    text: "I'm great, thanks! And you?",
    timestamp: '14:32',
    type: 'outgoing',
    status: 'read',
  },
  {
    author: 'Anna',
    avatar: 'https://i.pravatar.cc/150?img=1',
    text: 'Good too! How was your vacation?',
    timestamp: '14:33',
    type: 'incoming',
    status: 'read',
  },
  {
    author: 'You',
    avatar: 'https://i.pravatar.cc/150?img=12',
    text: 'The vacation went great! Everything exceeded my expectations 🎉',
    timestamp: '14:35',
    type: 'outgoing',
    status: 'delivered',
  },
]

const MESSAGES_WITH_REPLY: MessageProps[] = [
  {
    author: 'Maria',
    avatar: 'https://i.pravatar.cc/150?img=5',
    text: 'When will the mockup be ready?',
    timestamp: '16:00',
    type: 'incoming',
    status: 'read',
  },
  {
    author: 'You',
    text: 'The mockup will be ready by tomorrow evening',
    timestamp: '16:05',
    type: 'outgoing',
    status: 'sent',
    replyTo: {
      id: '1',
      author: 'Maria',
      text: 'When will the mockup be ready?',
    },
  },
]

export const Incoming: Story = {
  args: {
    author: 'Anna',
    text: 'Hello! How are you?',
    timestamp: '12:30',
    avatar: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  },
}

export const Outgoing: Story = {
  args: {
    author: 'You',
    text: 'Everything is fine 👍',
    timestamp: '12:31',
    type: 'outgoing',
    status: 'sent',
  },
}

export const Reply: Story = {
  args: {
    author: 'You',
    text: 'Long time no see! I completely agree 😀',
    timestamp: '12:32',
    type: 'outgoing',
    status: 'delivered',
    replyTo: {
      id: 1,
      author: 'Anna',
      text: "Let's meet tomorrow?",
    },
  },
}

export const Image: Story = {
  args: {
    author: 'Anna',
    text: 'Look at this photo',
    timestamp: '12:33',
    status: 'delivered',
    attachments: {
      id: 1,
      type: 'image',
      name: 'photo.jpg',
      url: 'https://plus.unsplash.com/premium_photo-1675806016980-05232ccdf1f1?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
}

export const LongMessage: Story = {
  args: {
    author: 'Anna',
    timestamp: '12:35',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta sapien sit amet est posuere, vitae posuere mauris bibendum.',
  },
}

export const LongMessageOutgoing: Story = {
  args: {
    type: 'outgoing',
    author: 'Anna',
    timestamp: '12:35',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta sapien sit amet est posuere, vitae posuere mauris bibendum.',
  },
}

export const Dialog: { render: () => React.JSX.Element } = {
  render: () => (
    <>
      {MOCK_MESSAGES.map((msg, id) => (
        <Message key={id} {...msg} />
      ))}
    </>
  ),
}

export const OnlyIncoming: { render: () => React.JSX.Element } = {
  render: () => (
    <>
      {MOCK_MESSAGES.filter(msg => msg.type === 'incoming').map((msg, id) => (
        <Message key={id} {...msg} />
      ))}
    </>
  ),
}

export const OnlyOutgoing: { render: () => React.JSX.Element } = {
  render: () => (
    <div className={'s.messageList'}>
      {MOCK_MESSAGES.filter(msg => msg.type === 'outgoing').map((msg, id) => (
        <Message key={id} {...msg} />
      ))}
    </div>
  ),
}

export const WithReplies: { render: () => React.JSX.Element } = {
  render: () => (
    <div className={'s.messageList'}>
      {MESSAGES_WITH_REPLY.map((msg, id) => (
        <Message key={id} {...msg} />
      ))}
    </div>
  ),
}

export const LongMessages: { render: () => React.JSX.Element } = {
  render: () => (
    <div className={'s.messageList'}>
      <Message
        author={'Alex'}
        avatar={'https://i.pravatar.cc/150?img=7'}
        text={
          "This is a very long message that should display correctly in the chat. There's a lot of text here to show how the component behaves with a large amount of content. It's important that the text wraps to a new line and doesn't overflow the block boundaries. Also, we need to ensure that all interface elements stay in place and the message looks aesthetically pleasing."
        }
        timestamp={'17:30'}
        type={'incoming'}
        status={'read'}
      />
    </div>
  ),
}

export const MixedStatuses: { render: () => React.JSX.Element } = {
  render: () => (
    <div className={'s.messageList'}>
      <Message
        author={'You'}
        avatar={'https://i.pravatar.cc/150?img=12'}
        text={'Message sent'}
        timestamp={'10:00'}
        type={'outgoing'}
        status={'sent'}
      />
      <Message
        author={'You'}
        avatar={'https://i.pravatar.cc/150?img=12'}
        text={'Message delivered'}
        timestamp={'10:01'}
        type={'outgoing'}
        status={'delivered'}
      />
      <Message
        author={'You'}
        avatar={'https://i.pravatar.cc/150?img=12'}
        text={'Message read'}
        timestamp={'10:02'}
        type={'outgoing'}
        status={'read'}
      />
      <Message
        author={'You'}
        avatar={'https://i.pravatar.cc/150?img=12'}
        text={'Message not sent'}
        timestamp={'10:03'}
        type={'outgoing'}
        status={'error'}
      />
    </div>
  ),
}
// With audio player
export const WithAudioComponentIncoming: Story = {
  args: {
    author: 'Anna',
    // text: 'Listen to this voice message',
    timestamp: '12:33',
    status: 'delivered',
    attachments: {
      id: 1,
      type: 'audio',
      component: (
        <AudioPlayer
          src={'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
          waveform={WAVE_FORM}
        />
      ),
    },
  },
}

export const WithAudioComponentOutgoing: Story = {
  args: {
    author: 'Anna',
    // text: 'Listen to this voice message',
    timestamp: '12:33',
    status: 'delivered',
    type: 'outgoing',
    attachments: {
      id: 1,
      type: 'audio',
      component: (
        <AudioPlayer
          src={'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
          waveform={WAVE_FORM}
        />
      ),
    },
  },
}
