import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Avatar, Button, Modal, Typography } from '@/components'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the modal is visible',
      defaultValue: true,
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when modal is closed',
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const ModalOpen: Story = {
  args: {
    modalTitle: 'Email sent',
    open: true,
    size: 's',
    showHeader: true,
    onClose: () => console.log('Modal closed'),
    children: (
      <>
        <Typography variant={'subtitle1'}>
          We have sent a link to confirm your email to epam@epam.com
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.125rem' }}>
          <Button variant={'primary'}>Ok</Button>
        </div>
      </>
    ),
  },
}

export const WithTriggerButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button variant={'primary'} onClick={openModal} style={{ padding: '0.625rem 2rem' }}>
          Open Modal
        </Button>

        <Modal
          open={isOpen}
          onClose={closeModal}
          modalTitle={'Delete Post'}
          size={'s'}
          showHeader
          showCloseButton
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography variant={'subtitle1'}>
              Are you sure you want to delete this post?
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '0.75rem',
              }}
            >
              <Button variant={'secondary'} onClick={closeModal}>
                Cancel
              </Button>
              <Button onClick={closeModal}>Delete</Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Modal with a trigger button. Click the "Open Modal" button to show the modal dialog.',
      },
    },
  },
}

export const DeleteConfirmation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const handleDelete = () => {
      setIsDeleting(true)
      // Delete imitation
      setTimeout(() => {
        setIsDeleting(false)
        closeModal()
        alert('Post deleted successfully!')
      }, 1000)
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button onClick={openModal}>Delete Post</Button>

        <Modal
          open={isOpen}
          onClose={closeModal}
          modalTitle={'Delete Post'}
          size={'xs'}
          showHeader
          showCloseButton={false}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography variant={'subtitle1'}>
              Are you sure you want to delete this post? This action cannot be undone.
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.75rem',
              }}
            >
              <Button variant={'secondary'} onClick={closeModal} disabled={isDeleting}>
                Cancel
              </Button>
              <Button onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? 'Deleting...' : 'Delete'}
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Delete confirmation modal with loading state.',
      },
    },
  },
}

export const WithImage: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button variant={'primary'} onClick={openModal}>
          View Image
        </Button>

        <Modal open={isOpen} onClose={closeModal} size={'m'} closeButtonOutside fullSize>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <img
              src={
                'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'Pet'}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '55vh',
                objectFit: 'contain',
              }}
            />
          </div>
        </Modal>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with image content, buttons and fullSize mode.',
      },
    },
  },
}

export const WithImageAndButtons: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button variant={'primary'} onClick={openModal}>
          View Image
        </Button>

        <Modal
          open={isOpen}
          onClose={closeModal}
          modalTitle={'Image Preview'}
          size={'m'}
          showHeader
          showCloseButton
          fullSize
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <img
              src={
                'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'Pet'}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '55vh',
                objectFit: 'contain',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '0.5rem 0rem 1.5rem',
              }}
            >
              <Button variant={'secondary'} onClick={closeModal}>
                Close
              </Button>
              <Button variant={'primary'} onClick={() => alert('Download started')}>
                Download
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with image content, buttons and fullSize mode.',
      },
    },
  },
}

export const WithPostContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button variant={'primary'} onClick={openModal}>
          Show Post
        </Button>

        <Modal open={isOpen} onClose={closeModal} size={'xl'} closeButtonOutside fullSize>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 26.25rem',
              height: '80vh',
            }}
          >
            {/* Image */}
            <div
              style={{
                position: 'relative',
                background: 'var(--color-dark-900)',
              }}
            >
              <img
                src={
                  'https://images.unsplash.com/photo-1778017458320-fd7f6688cbf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt={'Post'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Right side */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#2b2b2b',
                color: '#fff',
              }}
            >
              {/* Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: 16,
                  borderBottom: '1px solid var(--color-dark-100)',
                }}
              >
                <Avatar
                  userName={'Alex Johnson'}
                  src={'https://i.pravatar.cc/40?img=12'}
                  size={'s'}
                />
                <Typography variant={'subtitle2'}>Alex Johnson</Typography>
              </div>

              {/* Comments */}
              <div
                style={{
                  flex: 1,
                  overflow: 'auto',
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                }}
              >
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: 12,
                    }}
                  >
                    <Avatar
                      userName={'User name'}
                      src={`https://i.pravatar.cc/40?img=${i + 8}`}
                      size={'s'}
                    />
                    <div>
                      <div>
                        <Typography variant={'subtitle2'} style={{ display: 'inline' }}>
                          User Name &nbsp;
                        </Typography>
                        <Typography variant={'body1'} style={{ display: 'inline' }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt.
                        </Typography>
                      </div>
                      <Typography variant={'caption1'} color={'var(--color-light-900)'}>
                        2 hours ago
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with image content and fullSize mode.',
      },
    },
  },
}

export const NestedModals: Story = {
  render: () => {
    const [isFirstOpen, setIsFirstOpen] = useState(false)
    const [isSecondOpen, setIsSecondOpen] = useState(false)

    const openFirst = () => setIsFirstOpen(true)
    const closeFirst = () => setIsFirstOpen(false)
    const openSecond = () => setIsSecondOpen(true)
    const closeSecond = () => setIsSecondOpen(false)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Button variant={'primary'} onClick={openFirst}>
          Open First Modal
        </Button>

        <Modal
          open={isFirstOpen}
          onClose={closeFirst}
          modalTitle={'First Modal'}
          showHeader
          size={'l'}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography variant={'subtitle1'}>
              This is the first modal. Click the button below to open another modal.
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '0.75rem',
              }}
            >
              <Button variant={'secondary'} onClick={closeFirst}>
                Close
              </Button>
              <Button variant={'primary'} onClick={openSecond}>
                Open Second Modal
              </Button>
            </div>
          </div>
        </Modal>

        <Modal
          open={isSecondOpen}
          onClose={closeSecond}
          modalTitle={'Second Modal'}
          showHeader
          size={'xs'}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography variant={'subtitle1'}>
              This is the second modal. You can close it independently.
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '0.75rem',
              }}
            >
              <Button variant={'secondary'} onClick={closeSecond}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Nested modals example. Multiple modals can be opened at the same time.',
      },
    },
  },
}
