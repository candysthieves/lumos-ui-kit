import type { Meta, StoryObj } from '@storybook/react-vite'
import { userEvent, within } from 'storybook/test'
import { TextArea } from '@/components/TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    label: 'Text-area',
    placeholder: 'Enter text...',
  },
}

export const FocusWithTyping: Story = {
  args: {
    label: 'Typing text (Mouse Focus)',
    placeholder: 'Text has been entered here...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole('textbox')
    await userEvent.type(textarea, 'Hello, I am typing text!')
  },
}

export const FocusViaKeyboard: Story = {
  args: {
    label: 'Keyboard Focus (Tab)',
    placeholder: 'Press Tab to see the blue border',
  },
  play: async () => {
    await userEvent.tab()
  },
}

export const ErrorState: Story = {
  args: {
    label: 'Error State',
    placeholder: 'Text with error',
    error: 'This field is required',
    defaultValue: 'Invalid text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole('textbox')
    await userEvent.click(textarea)
    await userEvent.hover(textarea)
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Unavailable for input',
    disabled: true,
  },
}

export const WithValue: Story = {
  args: {
    label: 'With Value (No Focus)',
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
}
