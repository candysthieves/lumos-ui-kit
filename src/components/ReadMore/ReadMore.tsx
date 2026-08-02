import clsx from 'clsx'
import { useState } from 'react'
import { Typography } from '@/components'
import { truncateText } from '@/utils'
import { Button } from '../Button'
import s from './ReadMore.module.scss'

export type ReadMoreProps = {
  text: string
  maxLength: number
  expandLabel?: string
  collapseLabel?: string
  className?: string
}

export const ReadMore = ({
  text,
  maxLength,
  expandLabel = 'Show more',
  collapseLabel = 'Hide',
  className,
}: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false)

  const shouldCollapse = text.length > maxLength

  if (!shouldCollapse) {
    return (
      <Typography className={className} variant={'body1'}>
        {text}
      </Typography>
    )
  }

  const displayedText = expanded ? text : truncateText(text, maxLength)

  const handleToggle = () => setExpanded(prev => !prev)

  return (
    <Typography className={className} variant={'body1'}>
      {displayedText}{' '}
      <Button as={'a'} className={clsx('typography-link', s.button)} onClick={handleToggle}>
        {expanded ? collapseLabel : expandLabel}
      </Button>
    </Typography>
  )
}
