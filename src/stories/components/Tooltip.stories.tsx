import type { Meta, StoryObj } from '@storybook/react-vite'
import type { TooltipProps } from '@/components/Tooltip/Tooltip'
import { Tooltip } from '@/components/Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    delayDuration: {
      control: { type: 'number' },
      description: 'Задержка перед появлением тултипа в миллисекундах',
      defaultValue: 200,
    },
    sideOffset: {
      control: { type: 'number' },
      description: 'Отступ всплывающего окна от элемента-триггера',
      defaultValue: 8,
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    delayDuration: 200,
    sideOffset: 8,
    children: (
      <button type={'button'} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Наведи на меня
      </button>
    ),

    content: (
      <div>
        <div className={'typography-h3'} style={{ marginBottom: '8px' }}>
          Помните!
        </div>
        <div className={'typography-body1'}>
          По нажатию на [ Log Out ] должен быть переход на страницу Sign In
        </div>
      </div>
    ),
  } as TooltipProps,
}

export const SimpleText: Story = {
  args: {
    children: <span>ℹ️ Подсказка</span>,
    content: 'Это простой вспомогательный текст для пользователя.',
  } as TooltipProps,
}
