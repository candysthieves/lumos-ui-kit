import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within, fn } from '@storybook/test'
import { Alert } from '@/components/Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['success', 'error', 'warning'],
      description: 'Вариант стиля алерта',
    },
    title: {
      control: 'text',
      description: 'Заголовок уведомления (жирный текст)',
    },
    children: {
      control: 'object',
      description: 'Основной текст сообщения (строка) или массив ошибок вида { field, message }',
    },
    onClose: {
      description: 'Колбэк при клике на крестик. Если не передан — кнопка закрытия не отображается',
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const ErrorWithTitle: Story = {
  args: {
    variant: 'error',
    title: 'Error!',
    children: 'Server is not available',
    onClose: fn(),
  },
}

export const SuccessSimple: Story = {
  args: {
    variant: 'success',
    children: 'Your settings are saved',
    onClose: fn(),
  },
}

export const WarningSimple: Story = {
  args: {
    variant: 'warning',
    title: 'Warning!',
    children: 'This action cannot be undone',
    onClose: fn(),
  },
}

export const WithoutCloseButton: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Operation completed successfully.',
  },
}

export const WithFieldErrors: Story = {
  args: {
    variant: 'error',
    title: 'Validation error',
    children: [
      { field: 'email', message: 'Неверный формат email' },
      { field: 'password', message: 'Пароль слишком короткий' },
    ],
    onClose: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Проверяем наличие заголовка
    await expect(canvas.getByText('Validation error')).toBeInTheDocument()

    // Проверяем наличие списка ошибок <ul> и ровно 2 элементов <li>
    const listItems = canvas.getAllByRole('listitem')
    await expect(listItems).toHaveLength(2)

    // Проверяем текст ошибок
    await expect(canvas.getByText('email:')).toBeInTheDocument()
    await expect(canvas.getByText('Неверный формат email')).toBeInTheDocument()
    await expect(canvas.getByText('password:')).toBeInTheDocument()
    await expect(canvas.getByText('Пароль слишком короткий')).toBeInTheDocument()
  },
}
