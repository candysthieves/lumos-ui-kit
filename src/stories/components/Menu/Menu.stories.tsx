import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  Home,
  HomeOutline,
  MessageCircle,
  MessageCircleOutline,
  Person,
  PersonOutline,
  PlusSquare,
  PlusSquareOutline,
  Search,
  SearchOutline,
} from '@/assets'
import { Menu, type MenuItem } from '@/components/Menu'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    onValueChange: { action: 'value changed' },
  },
}

export default meta

type Story = StoryObj<typeof Menu>

const items: MenuItem[] = [
  { id: 'feed', href: '/feed', icon: <HomeOutline />, activeIcon: <Home /> },
  {
    id: 'create',
    href: '/create',
    icon: <PlusSquareOutline />,
    activeIcon: <PlusSquare />,
  },
  {
    id: 'messenger',
    href: '/messenger',
    icon: <MessageCircleOutline />,
    activeIcon: <MessageCircle />,
  },
  {
    id: 'search',
    href: '/search',
    icon: <SearchOutline />,
    activeIcon: <Search />,
  },
  {
    id: 'profile',
    href: '/profile',
    icon: <PersonOutline />,
    activeIcon: <Person />,
  },
]

const renderMenu = (initialActiveId: string) => {
  return function MenuStory(args: Story['args']) {
    const [activeId, setActiveId] = useState(initialActiveId)

    return (
      <div style={{ width: 390, background: '#000', border: '1px solid #333' }}>
        <Menu
          {...args}
          items={items}
          activeId={activeId}
          onValueChange={id => {
            setActiveId(id)
            args?.onValueChange?.(id)
          }}
        />
      </div>
    )
  }
}

export const Default: Story = {
  render: renderMenu('feed'),
}

export const OnFeed: Story = {
  render: renderMenu('feed'),
}

export const OnCreate: Story = {
  render: renderMenu('create'),
}

export const OnMessenger: Story = {
  render: renderMenu('messenger'),
}

export const OnSearch: Story = {
  render: renderMenu('search'),
}

export const OnProfile: Story = {
  render: renderMenu('profile'),
}
