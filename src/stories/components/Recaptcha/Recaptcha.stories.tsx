import type { Meta, StoryObj } from '@storybook/react-vite'
import { Recaptcha } from '@/components/Recaptcha'

const meta: Meta<typeof Recaptcha> = {
  title: 'Components/Recaptcha',
  component: Recaptcha,
  tags: ['autodocs'],
  args: {
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    theme: 'dark',
  },
}

export default meta
type Story = StoryObj<typeof Recaptcha>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    errorMessage: 'Please verify that you are not a robot',
  },
}

export const Expired: Story = {
  args: {
    expiredMessage: 'Verification expired. Check the checkbox again.',
  },
}
