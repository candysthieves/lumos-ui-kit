import type { Meta, StoryObj } from '@storybook/react-vite'
import { ReadMore } from '@/components/ReadMore'

const meta = {
  title: 'Components/ReadMore',
  component: ReadMore,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content that can be collapsed',
    },
    maxLength: {
      control: {
        type: 'number',
      },
      description: 'Maximum number of characters displayed before collapsing',
    },
    expandLabel: {
      control: 'text',
      description: 'Button text when the text is collapsed',
    },
    collapseLabel: {
      control: 'text',
      description: 'Button text when the text is expanded',
    },
  },
} satisfies Meta<typeof ReadMore>

export default meta

type Story = StoryObj<typeof meta>

const longText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit. Consequuntur accusamus asperiores, doloremque excepturi repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Doloribus reprehenderit consequatur praesentium.'

export const Default: Story = {
  args: {
    text: longText,
    maxLength: 100,
  },
}
