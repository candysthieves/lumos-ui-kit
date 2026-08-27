import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { LinearProgress } from '@/components/LinearProgress'

const meta = {
  title: 'Components/LinearProgress',
  component: LinearProgress,
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'inherit'],
    },
    determinate: {
      control: 'boolean',
      defaultValue: false,
    },
    value: {
      control: 'range',
      min: 0,
      max: 100,
      step: 1,
      defaultValue: 0,
    },
  },
} satisfies Meta<typeof LinearProgress>

export default meta
type Story = StoryObj<typeof LinearProgress>

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    determinate: false,
  },
}

export const Positioned: Story = {
  args: {
    size: 'md',
    color: 'primary',
    determinate: false,
    style: {
      top: '125px',
    },
  },
}

export const Determinate: Story = {
  args: {
    size: 'md',
    color: 'primary',
    determinate: true,
    value: 65,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows actual progress with value 0-100',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <LinearProgress size={'sm'} determinate value={30} />
      <LinearProgress size={'md'} determinate value={50} />
      <LinearProgress size={'lg'} determinate value={80} />
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <LinearProgress color={'var(--color-danger-100)'} determinate value={7.5} />
      <LinearProgress color={'inherit'} determinate value={15} />
      <LinearProgress color={'primary'} determinate value={25} />
      <LinearProgress color={'success'} determinate value={50} />
      <LinearProgress color={'warning'} determinate value={75} />
      <LinearProgress color={'error'} determinate value={100} />
    </div>
  ),
}

export const Indeterminate: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <LinearProgress color={'primary'} />
      <LinearProgress color={'success'} />
      <LinearProgress color={'warning'} />
      <LinearProgress color={'error'} />
      <LinearProgress color={'inherit'} />
    </div>
  ),
}

export const WithValue: Story = {
  args: {
    determinate: true,
    value: 75,
    size: 'lg',
    color: 'success',
  },
}

export const Interactive: Story = {
  render: function Interactive() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0
          return prev + 1
        })
      }, 100)
      return () => clearInterval(interval)
    }, [])

    return (
      <div style={{ width: '100%' }}>
        <LinearProgress determinate value={progress} />
        <p style={{ marginTop: '0.5rem', textAlign: 'center' }}>{Math.round(progress)}%</p>
      </div>
    )
  },
}
