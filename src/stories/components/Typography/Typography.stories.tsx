import type { Meta, StoryObj } from '@storybook/react-vite'
import { Typography } from '@/components'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: 'Accepts all props of the native "< p >" element.',
      },
    },
  },
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'body3',
        'caption1',
        'caption2',
        'link',
        'subtitle-link',
        'caution',
        'caution-error',
        'signature',
        'signature-legal',
      ],
      description: `The component used for the root node. Either a string to use an HTML element or a React component.
    **Examples:**
  - \`variant="large"\` - renders "Large" typography
  - \`variant="h1"\` - renders "H1" typography
  - \`variant="h2"\` - renders "H2" typography
  - \`variant="h3"\` - renders "H3" typography
  - \`variant="subtitle1"\` - renders "regular_text 16" typography
  - \`variant="subtitle2"\` - renders "Bold_text 16" typography
  - \`variant="body1"\` - renders "regular_text 14" typography
  - \`variant="body2"\` - renders "Medium_text 14" typography
  - \`variant="body3"\` - renders "bold_text 14" typography
  - \`variant="caption1"\` - renders "small_text" typography
  - \`variant="caption2"\` - renders "Semi-bold small_text" typography
  - \`variant="link"\` - renders "regular_link" typography as Anchor link
  - \`variant="subtitle-link"\` - renders "small_link" typography as Anchor link
  - \`variant="caution"\` - renders "caution" typography used in reCAPTCHA
  - \`variant="caution-error"\` - renders "caution-error" typography used in reCAPTCHA
  - \`variant="signature"\` - renders "signature" typography used in reCAPTCHA
  - \`variant="signature-legal"\` - renders "signature-legal" typography used in reCAPTCHA`,
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: '"p"' },
      },
    },
    color: {
      control: { type: 'color' as const },
      description: 'Set Typography color from the design system',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    noWrap: {
      control: 'boolean',
      description: 'Prevent text from wrapping',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    gutterBottom: {
      control: 'boolean',
      description: 'Add bottom margin (0.35em)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    // Margin controls with multiple types
    mt: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 4,
      },
      description: 'Margin top (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    mb: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 4,
      },
      description: 'Margin bottom (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    ml: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 4,
      },
      description: 'Margin left (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    mr: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 4,
      },
      description: 'Margin right (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    mx: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 4,
      },
      description: 'Horizontal margin (px) - applies to both left and right',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    my: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 4,
      },
      description: 'Vertical margin (px) - applies to both top and bottom',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the component',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Additional inline styles',
      table: {
        type: { summary: 'CSSProperties' },
      },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const AllTypography: Story = {
  args: {
    children: 'Typography',
    color: 'var(--color-dark-900)',
  },
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography {...args} variant={'large'} style={{ marginBottom: '0.75rem' }}>
        Large Text
      </Typography>
      <Typography {...args} variant={'h1'} style={{ marginBottom: '0.5rem' }}>
        H1 Heading
      </Typography>
      <Typography {...args} variant={'h2'}>
        H2 Heading
      </Typography>
      <Typography {...args} variant={'h3'}>
        H3 Heading
      </Typography>
      <Typography {...args} variant={'subtitle1'}>
        Subtitle 1
      </Typography>
      <Typography {...args} variant={'subtitle2'}>
        Subtitle 2
      </Typography>
      <Typography {...args} variant={'body1'}>
        Body 1
      </Typography>
      <Typography {...args} variant={'body2'}>
        Body 2
      </Typography>
      <Typography {...args} variant={'body3'}>
        Body 3
      </Typography>
      <Typography {...args} variant={'caption1'}>
        Caption 1
      </Typography>
      <Typography {...args} variant={'caption2'}>
        Caption 2
      </Typography>
      <Typography {...args} variant={'link'}>
        Link
      </Typography>
      <Typography {...args} variant={'subtitle-link'}>
        Subtitle Link
      </Typography>
      <Typography {...args} variant={'caution'}>
        Caution
      </Typography>
      <Typography {...args} variant={'caution-error'}>
        Caution Error (used only in reCAPTCHA)
      </Typography>
      <Typography {...args} variant={'signature'}>
        Signature
      </Typography>
      <Typography {...args} variant={'signature-legal'}>
        Signature Legal
      </Typography>
    </div>
  ),
}

export const CustomComponent: Story = {
  args: {
    variant: 'h1',
    color: 'var(--color-dark-900)',
    children: 'H1 Header',
  },
}

export const ColorInheritComponent: Story = {
  args: {
    variant: 'h1',
    children: 'H1 with CSS "color: inherit"',
  },
}

export const LargeWithColor: Story = {
  args: {
    variant: 'large',
    color: 'var(--color-danger-500)',
    children: 'Typography body1 with color-danger-500',
  },
}

export const TypographyAsLink: Story = {
  args: {
    variant: 'link',
    color: 'var(--color-dark-900)',
    href: 'https://www.google.com',
    target: '_blank',
    children: 'Displayed as a link (Typography)',
  },
}

export const NoWrapTrue: Story = {
  args: {
    variant: 'body1',
    noWrap: true,
    color: 'var(--color-dark-900)',
    children:
      'Typography with very long text to test CSS "noWrap: true": Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum',
  },
}

export const TypographyWithMargin: Story = {
  args: {
    variant: 'h1',
    my: '3rem',
    color: 'var(--color-dark-900)',
    children: 'Typography with h1 and Margin',
  },
}

export const TypographyCautionError: Story = {
  args: {
    variant: 'caution-error',
    children: 'Typography with caution error',
  },
}
