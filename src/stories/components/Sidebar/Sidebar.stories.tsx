import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  ArrowForwardOutline,
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
} from '@/assets/icons'
import { Sidebar, type SidebarItem } from '@/components/Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Sidebar>

const items: SidebarItem[] = [
  { id: 'feed', icon: <HomeOutline />, activeIcon: <Home />, label: 'Feed' },
  { id: 'create', icon: <PlusSquareOutline />, activeIcon: <PlusSquare />, label: 'Create' },
  { id: 'profile', icon: <PersonOutline />, activeIcon: <Person />, label: 'My Profile' },
  {
    id: 'messenger',
    icon: <MessageCircleOutline />,
    activeIcon: <MessageCircle />,
    label: 'Messenger',
  },
  { id: 'search', icon: <SearchOutline />, activeIcon: <Search />, label: 'Search' },
  {
    id: 'statistics',
    icon: <TrendingUpOutline />,
    activeIcon: <TrendingUp />,
    label: 'Statistics',
  },
  { id: 'favorites', icon: <BookmarkOutline />, activeIcon: <Bookmark />, label: 'Favorites' },
]

const SidebarDemo = () => {
  const [activeId, setActiveId] = useState('feed')

  return (
    <div style={{ width: 240, height: 600, background: '#000', border: '1px solid #333' }}>
      <Sidebar
        items={items}
        activeId={activeId}
        onValueChange={setActiveId}
        onLogout={() => alert('logout clicked')}
        logOutIcon={<LogOutOutline />}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <SidebarDemo />,
}

export const WithDisabledItem: Story = {
  render: () => {
    const itemsWithDisabled = items.map(item =>
      item.id === 'search' ? { ...item, disabled: true } : item
    )

    return (
      <div style={{ width: 240, height: 600, background: '#000', border: '1px solid #333' }}>
        <Sidebar
          items={itemsWithDisabled}
          activeId={'feed'}
          onValueChange={() => {}}
          onLogout={() => {}}
          logOutIcon={<ArrowForwardOutline />}
        />
      </div>
    )
  },
}
