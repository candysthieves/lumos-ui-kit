import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Pagination } from '@/components/Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onPageChange: { action: 'page changed' },
    onPageSizeChange: { action: 'page size changed' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pageCount: 55,
  },
}

export const Active: Story = {
  args: {
    defaultCurrentPage: 7,
    pageCount: 55,
  },
}

export const Controlled: Story = {
  args: {
    pageCount: 55,
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(100)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    )
  },
}
