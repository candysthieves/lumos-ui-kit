import type { Meta, StoryObj } from '@storybook/react-vite'
import clsx from 'clsx'
import { useState } from 'react'
import { ArrowIosBack } from '@/assets'
import { Avatar, Button, Modal, Typography } from '@/components'
import s from './Modal.stories.module.scss'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    open: {
      description: 'Controls whether the modal is visible (true / false)',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when modal is closed',
    },
    size: {
      description: `Size of the modal:
    **Examples:**
  - \`size="xs"\` - 366px
  - \`size="s"\` - 378px
  - \`size="m"\` - 492px
  - \`size="l"\` - 644px
  - \`size="xl"\` - 972px`,
      defaultValue: 'm',
    },
    modalTitle: {
      description: 'Title of the modal (can be string or ReactNode)',
    },
    showHeader: {
      description: 'Whether to show the header with title (true / false)',
    },
    showCloseButton: {
      description: 'Whether to show the close button (true / false)',
    },
    fullSize: {
      description: 'Whether the content should take full size (true / false)',
    },
    closeButtonOutside: {
      description: 'Whether the close button should be positioned outside (true / false)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const WithTriggerButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const onClickHandler = () => {
      alert('Button "Ok" clicked')
      closeModal()
    }

    return (
      <div className={s.wrapper}>
        <Button
          variant={'primary'}
          onClick={openModal}
          style={{
            padding: '0.625rem 2rem',
          }}
        >
          Open Modal
        </Button>

        <Modal
          open={isOpen}
          onClose={closeModal}
          modalTitle={'Email sent'}
          size={'s'}
          showHeader
          showCloseButton
        >
          <div className={s.triggerContent}>
            <Typography variant={'subtitle1'}>
              We have sent a link to confirm your email to epam@epam.com
            </Typography>
            <div className={s.triggerControls}>
              <Button variant={'primary'} onClick={onClickHandler}>
                Ok
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
      <div className={s.wrapper}>
        <Button onClick={openModal}>Delete Post</Button>

        <Modal
          open={isOpen}
          onClose={closeModal}
          modalTitle={'Delete Post'}
          size={'xs'}
          showHeader
          showCloseButton={false}
        >
          <div className={s.deleteContent}>
            <Typography variant={'subtitle1'}>
              Are you sure you want to delete this post? This action cannot be undone.
            </Typography>
            <div className={s.deleteControls}>
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
      <div className={s.wrapper}>
        <Button variant={'primary'} onClick={openModal}>
          View Image
        </Button>

        <Modal open={isOpen} onClose={closeModal} size={'m'} closeButtonOutside fullSize>
          <div className={s.imageContent}>
            <img
              src={
                'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'Pet'}
              className={s.imageItem}
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
      <div className={s.wrapper}>
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
          <div className={s.imageButtonsContent}>
            <img
              src={
                'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'Pet'}
              className={s.imageButtonsItem}
            />
            <div className={s.imageButtonsControls}>
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
      <div className={s.wrapper}>
        <Button variant={'primary'} onClick={openModal}>
          Show Post
        </Button>

        <Modal open={isOpen} onClose={closeModal} size={'xl'} closeButtonOutside fullSize>
          <div className={s.postContainer}>
            {/* Image */}
            <div className={s.postImageContainer}>
              <img
                src={
                  'https://images.unsplash.com/photo-1778017458320-fd7f6688cbf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt={'Post'}
                className={s.postImage}
              />
            </div>

            {/* Right side */}
            <div className={s.commentsContainer}>
              {/* Author */}
              <div className={s.author}>
                <Avatar
                  userName={'Alex Johnson'}
                  src={'https://i.pravatar.cc/40?img=12'}
                  size={'s'}
                />
                <Typography variant={'subtitle2'}>Alex Johnson</Typography>
              </div>

              {/* Comments */}
              <div className={s.commentsBlock}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className={s.comment}>
                    <Avatar
                      userName={'User name'}
                      src={`https://i.pravatar.cc/40?img=${i + 8}`}
                      size={'s'}
                    />
                    <div>
                      <div>
                        <Typography variant={'subtitle2'} className={s.commentText}>
                          User Name &nbsp;
                        </Typography>
                        <Typography variant={'body1'} className={s.commentText}>
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

export const WithControlsInHeader: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const prevClickHandler = () => {
      alert('Previous button clicked')
      closeModal()
    }
    const nextClickHandler = () => {
      alert('Next button clicked')
      closeModal()
    }

    const headerContent = (
      <div className={s.postControlsHeader}>
        <Button as={'a'} className={clsx('typography-link', s.button)} onClick={prevClickHandler}>
          <ArrowIosBack />
        </Button>
        <Typography variant={'h1'} color={'var(--color-light-100)'}>
          Filters
        </Typography>
        <Button as={'a'} className={clsx('typography-link', s.button)} onClick={nextClickHandler}>
          Next
        </Button>
      </div>
    )

    return (
      <div className={s.wrapper}>
        <Button variant={'primary'} onClick={openModal}>
          Show Post
        </Button>

        <Modal
          open={isOpen}
          onClose={closeModal}
          size={'xl'}
          fullSize
          showCloseButton={false}
          showHeader
          modalTitle={headerContent}
        >
          <div className={s.postContainer}>
            {/* Image */}
            <div className={s.postImageContainer}>
              <img
                src={
                  'https://images.unsplash.com/photo-1778017458320-fd7f6688cbf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt={'Post'}
                className={s.postImage}
              />
            </div>

            {/* Right side */}
            <div className={s.commentsContainer}>
              {/* Author */}
              <div className={s.author}>
                <Avatar
                  userName={'Alex Johnson'}
                  src={'https://i.pravatar.cc/40?img=12'}
                  size={'s'}
                />
                <Typography variant={'subtitle2'}>Alex Johnson</Typography>
              </div>

              {/* Comments */}
              <div className={s.commentsBlock}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className={s.comment}>
                    <Avatar
                      userName={'User name'}
                      src={`https://i.pravatar.cc/40?img=${i + 8}`}
                      size={'s'}
                    />
                    <div>
                      <div>
                        <Typography variant={'subtitle2'} className={s.commentText}>
                          User Name &nbsp;
                        </Typography>
                        <Typography variant={'body1'} className={s.commentText}>
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
      <div className={s.wrapper}>
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
          <div className={s.modalContent}>
            <Typography variant={'subtitle1'}>
              This is the first modal. Click the button below to open another modal.
            </Typography>
            <div className={s.modalControls}>
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
          <div className={s.modalContent}>
            <Typography variant={'subtitle1'}>
              This is the second modal. You can close it independently.
            </Typography>
            <div className={s.modalControls}>
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

export const ConfirmOnOutsideClick: Story = {
  render: () => {
    const [isCreationOpen, setIsCreationOpen] = useState(false)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)

    const openCreation = () => setIsCreationOpen(true)

    const closeCreation = () => {
      setIsCreationOpen(false)
      setIsConfirmOpen(false)
    }

    const openConfirm = () => setIsConfirmOpen(true)

    const closeConfirm = () => setIsConfirmOpen(false)

    /**
     * It is important to add event.preventDefault() to handleOutsideClick function to avoid closing modal by modal Outside Click
     */
    const handleOutsideClick = (event: Event) => {
      event.preventDefault()
      openConfirm()
    }

    const handleConfirm = () => {
      closeCreation()
    }

    return (
      <div className={s.wrapper}>
        <Button variant={'primary'} onClick={openCreation}>
          Create Publication
        </Button>

        <Modal
          open={isCreationOpen}
          onClose={closeCreation}
          modalTitle={'Create Publication'}
          showHeader
          size={'l'}
          onInteractOutside={handleOutsideClick}
        >
          <div className={s.modalContent}>
            <Typography variant={'subtitle1'}>
              Fill in the information to create a new publication.
            </Typography>

            <div className={s.modalControls}>
              <Button variant={'secondary'} onClick={closeCreation}>
                Close
              </Button>
            </div>
          </div>
        </Modal>

        <Modal
          open={isConfirmOpen}
          onClose={closeConfirm}
          modalTitle={'Close publication creation?'}
          showHeader
          size={'xs'}
        >
          <div className={s.modalContent}>
            <Typography variant={'subtitle1'}>
              Do you really want to close the creation of a publication? If you close everything
              will be deleted.
            </Typography>

            <div className={s.modalControls}>
              <Button variant={'secondary'} onClick={closeConfirm}>
                Cancel
              </Button>

              <Button variant={'primary'} onClick={handleConfirm}>
                Confirm
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
        story:
          'Clicking outside the creation modal prevents it from closing and opens a confirmation modal instead.',
      },
    },
  },
}
