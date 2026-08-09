import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alerts } from '@/components/Alerts'

const meta = {
  title: 'Components/Alerts',
  component: Alerts,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['success', 'error'],
      description: 'Вариант стиля алерта',
    },
    title: {
      control: 'text',
      description: 'Заголовок уведомления (жирный текст)',
    },
    children: {
      control: 'text',
      description: 'Основной текст сообщения',
    },
    onClose: {
      action: 'closed',
      description: 'Колбэк при клике на крестик',
    },
  },
} satisfies Meta<typeof Alerts>

export default meta
type Story = StoryObj<typeof meta>
export const ErrorWithTitle: Story = {
  args: {
    variant: 'error',
    title: 'Error!',
    children: 'Server is not available',
    onClose: () => alert('Alert closed!'),
  },
}

// 2. Успех без заголовка (как на макете Figma)
export const SuccessSimple: Story = {
  args: {
    variant: 'success',
    children: 'Your settings are saved',
    onClose: () => alert('Alert closed!'),
  },
}

// 3. Вариант без кнопки закрытия
export const WithoutCloseButton: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Operation completed successfully.',
  },
}
