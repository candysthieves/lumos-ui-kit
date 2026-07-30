import type { Meta, StoryObj } from '@storybook/react-vite'
import { Close } from '@/assets/icons'
import { Typography } from '@/components'
import { Button } from '@/components/Button'
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
        width: '20.625rem',
        padding: '1rem',
      }}
    >
      <Typography variant={'h3'} style={{ marginBottom: '0.75rem' }}>
        Card title
      </Typography>
      <Typography variant={'body2'}>
        The Card component is used as a container for content.
      </Typography>
    </Cards>
  ),
}

export const AddProfilePhoto: Story = {
  render: args => (
    <Cards
      {...args}
      style={{
        width: '20.625rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.75rem 1.5rem',
          borderBottom: '1px solid var(--color-dark-300)',
        }}
      >
        <Typography variant={'h3'} style={{ marginBottom: '0.75rem' }}>
          Add a Profile Photo
        </Typography>
        <Button
          type={'button'}
          variant={'text'}
          style={{
            padding: 0,
            minWidth: 'auto',
            width: '1.5rem', // Размеры кнопки 24px в rem
            height: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-light-100)',
          }}
        >
          <Close />
        </Button>
      </div>

      <div
        style={{
          padding: '1.5rem',
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
              width: '13.875rem',
              height: '13.875rem',
              margin: '0 auto',
              borderRadius: '50%',
              backgroundColor: 'var(--color-dark-300)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant={'body2'} style={{ color: 'var(--color-light-900)' }}>
              Photo
            </Typography>
          </div>
        </div>

        <Button
          type={'button'}
          variant={'primary'}
          fullWidth
          style={{
            marginTop: '1.5rem',
            height: '2.25rem',
          }}
        >
          Select from Gallery
        </Button>
      </div>
    </Cards>
  ),
}

export const ErrorState: Story = {
  render: args => (
    <Cards
      {...args}
      style={{
        width: '20.625rem',
      }}
    >
      <div
        style={{
          padding: '1rem',
          borderBottom: '1px solid var(--color-dark-300)',
        }}
      >
        <Typography variant={'h3'}>Add a Profile Photo</Typography>
      </div>

      <div
        style={{
          padding: '1.5rem',
        }}
      >
        <div
          style={{
            marginBottom: '1rem',
            padding: '0.5rem',
            backgroundColor: 'var(--color-danger-500)',
            color: 'var(--color-light-100)',
          }}
        >
          <Typography variant={'caption1'} style={{ color: 'var(--color-light-100)' }}>
            Error: The uploaded photo must be PNG or JPEG.
          </Typography>
        </div>

        <div
          style={{
            height: '13.75rem',
            background: 'var(--color-dark-300)',
          }}
        />

        <Button
          type={'button'}
          variant={'primary'}
          fullWidth
          style={{
            marginTop: '1.5rem',
            height: '2.25rem',
          }}
        >
          Select from Computer
        </Button>
      </div>
    </Cards>
  ),
}
