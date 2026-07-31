import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel } from '@/components/Carousel'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Carousel>

const placeholderSlides = [
  <img
    key={'1'}
    src={'https://picsum.photos/id/1015/600/400'}
    alt={'Slide 1'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    key={'2'}
    src={'https://picsum.photos/id/1016/600/400'}
    alt={'Slide 2'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    key={'3'}
    src={'https://picsum.photos/id/1018/600/400'}
    alt={'Slide 3'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    key={'4'}
    src={'https://picsum.photos/id/1019/600/400'}
    alt={'Slide 4'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    key={'5'}
    src={'https://picsum.photos/id/1020/600/400'}
    alt={'Slide 5'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
]

export const Default: Story = {
  args: {
    slides: placeholderSlides,
  },
  render: args => (
    <div style={{ width: 400, height: 400 }}>
      <Carousel {...args} />
    </div>
  ),
}

export const FewSlides: Story = {
  args: {
    slides: placeholderSlides.slice(0, 2),
  },
  render: args => (
    <div style={{ width: 400, height: 400 }}>
      <Carousel {...args} />
    </div>
  ),
}
