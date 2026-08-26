import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel } from '@/components/Carousel'
import s from './CarouselWrapper.module.scss'

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
    src={
      'https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww'
    }
    alt={'Slide 1'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    key={'2'}
    src={
      'https://images.unsplash.com/photo-1771838026270-28fd7e3bef1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww'
    }
    alt={'Slide 2'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    key={'3'}
    src={
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww'
    }
    alt={'Slide 3'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    key={'4'}
    src={
      'https://plus.unsplash.com/premium_photo-1781039325448-435a6a0899b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    }
    alt={'Slide 4'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
  <img
    key={'5'}
    src={
      'https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    }
    alt={'Slide 5'}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />,
]

export const Default: Story = {
  args: {
    slides: placeholderSlides,
  },
  render: args => (
    <div style={{ width: 1000, height: 1000 }}>
      <Carousel {...args} />
    </div>
  ),
}

export const SingleSlide: Story = {
  args: {
    slides: placeholderSlides.slice(0, 1),
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

export const ControlsSizes: Story = {
  args: {
    slides: placeholderSlides.slice(0, 3),
  },
  render: args => (
    <div style={{ display: 'flex', gap: 16 }}>
      <div>
        <p style={{ color: '#fff', marginBottom: 8 }}>s (234px card)</p>
        <div style={{ width: 234, height: 240 }}>
          <Carousel {...args} controlsSize={'s'} />
        </div>
      </div>

      <div>
        <p style={{ color: '#fff', marginBottom: 8 }}>m</p>
        <div style={{ width: 400, height: 400 }}>
          <Carousel {...args} controlsSize={'m'} />
        </div>
      </div>

      <div>
        <p style={{ color: '#fff', marginBottom: 8 }}>l (default)</p>
        <div style={{ width: 600, height: 600 }}>
          <Carousel {...args} controlsSize={'l'} />
        </div>
      </div>
    </div>
  ),
}

export const DefaultAdaptive: Story = {
  args: {
    slides: placeholderSlides, // проверь, как у тебя называются слайды-заглушки в файле
  },
  render: args => (
    <div className={s.wrapper}>
      <Carousel {...args} />
    </div>
  ),
}
