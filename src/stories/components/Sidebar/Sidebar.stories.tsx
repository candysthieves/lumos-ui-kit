import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  Bookmark,
  BookmarkOutline,
  Home,
  HomeOutline,
  LogOutOutline,
  MessageCircle,
  MessageCircleOutline,
  Person,
  PersonOutline,
  PlusSquare,
  PlusSquareOutline,
  Search,
  SearchOutline,
  TrendingUp,
  TrendingUpOutline,
} from '@/assets'
import { Sidebar, type SidebarItem } from '@/components/Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    onLogout: { action: 'logged out' },
    onValueChange: { action: 'value changed' },
  },
}

export default meta

type Story = StoryObj<typeof Sidebar>

const items: SidebarItem[] = [
  { id: 'feed', href: '/feed', icon: <HomeOutline />, activeIcon: <Home />, label: 'Feed' },
  {
    id: 'create',
    href: '/create',
    icon: <PlusSquareOutline />,
    activeIcon: <PlusSquare />,
    label: 'Create',
  },
  {
    id: 'profile',
    href: '/profile',
    icon: <PersonOutline />,
    activeIcon: <Person />,
    label: 'My Profile',
  },
  {
    id: 'messenger',
    href: '/messenger',
    icon: <MessageCircleOutline />,
    activeIcon: <MessageCircle />,
    label: 'Messenger',
  },
  {
    id: 'search',
    href: '/search',
    icon: <SearchOutline />,
    activeIcon: <Search />,
    label: 'Search',
  },
  {
    id: 'statistics',
    href: '/statistics',
    icon: <TrendingUpOutline />,
    activeIcon: <TrendingUp />,
    label: 'Statistics',
  },
  {
    id: 'favorites',
    href: '/favorites',
    icon: <BookmarkOutline />,
    activeIcon: <Bookmark />,
    label: 'Favorites',
  },
]

export const Default: Story = {
  render: args => {
    const [activeId, setActiveId] = useState('feed')

    return (
      <div style={{ width: 160, height: 650, background: '#000' }}>
        <Sidebar
          {...args}
          items={items}
          activeId={activeId}
          onValueChange={id => {
            setActiveId(id)
            args.onValueChange?.(id)
          }}
          logOutIcon={<LogOutOutline />}
        />
      </div>
    )
  },
}

export const WithDisabledItem: Story = {
  render: args => {
    const [activeId, setActiveId] = useState('feed')

    const itemsWithDisabled = items.map(item =>
      item.id === 'search' ? { ...item, disabled: true } : item
    )

    return (
      <div style={{ width: 160, height: 650, background: '#000' }}>
        <Sidebar
          {...args}
          items={itemsWithDisabled}
          activeId={activeId}
          onValueChange={id => {
            setActiveId(id)
            args.onValueChange?.(id)
          }}
          logOutIcon={<LogOutOutline />}
        />
      </div>
    )
  },
}
