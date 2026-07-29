import type { Meta, StoryObj } from '@storybook/react-vite'
import { Cards } from '@/components/Cards/Cards'

const meta: Meta<typeof Cards> = {
  title: 'Components/Card',
  component: Cards,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Cards>

export const Default: Story = {
  render: args => (
    <Cards
      {...args}
      style={{
        width: 330,
        padding: 16,
      }}
    >
      <h3 className={'typography-h3'} style={{ margin: '0 0 12px' }}>
        Card title
      </h3>

      <p className={'typography-body2'}>The Card component is used as a container for content.</p>
    </Cards>
  ),
}

export const AddProfilePhoto: Story = {
  render: args => (
    <Cards
      {...args}
      style={{
        width: 330,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 24px',
          borderBottom: '1px solid var(--color-dark-300)',
        }}
      >
        <span className={'typography-h3'}>Add a Profile Photo</span>
        <span style={{ fontSize: 24 }}>×</span>
      </div>

      <div
        style={{
          padding: 24,
        }}
      >
        <div
          style={{
            width: '100%',
            aspectRatio: '1',
            background: 'var(--color-dark-300)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 222,
              height: 222,
              margin: '0 auto',
              borderRadius: '50%',
              backgroundColor: 'var(--color-dark-300)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-light-900)',
              fontSize: 14,
            }}
          >
            Photo
          </div>
        </div>

        <button
          type={'button'}
          style={{
            marginTop: 24,
            width: '100%',
            height: 36,
            border: 0,
            background: '#397DF6',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Select from Gallery
        </button>
      </div>
    </Cards>
  ),
}

export const ErrorState: Story = {
  render: args => (
    <Cards
      {...args}
      style={{
        width: 330,
      }}
    >
      <div
        style={{
          padding: 16,
          borderBottom: '1px solid var(--color-dark-300)',
        }}
      >
        <span className={'typography-h3'}>Add a Profile Photo</span>
      </div>

      <div
        style={{
          padding: 24,
        }}
      >
        <div
          style={{
            marginBottom: 16,
            padding: 8,
            background: '#CC1439',
            color: '#fff',
            fontSize: 12,
          }}
        >
          Error: The uploaded photo must be PNG or JPEG.
        </div>

        <div
          style={{
            height: 220,
            background: 'var(--color-dark-300)',
          }}
        />

        <button
          type={'button'}
          style={{
            marginTop: 24,
            width: '100%',
            height: 36,
          }}
        >
          Select from Computer
        </button>
      </div>
    </Cards>
  ),
}
