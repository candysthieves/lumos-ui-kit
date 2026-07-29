import { useState } from 'react'
import { Typography } from '../Typography/Typography'
import s from './ReadMore.module.scss'

export type ReadMoreProps = {
  text: string
  maxLength: number
  expandLabel?: string
  collapseLabel?: string
  className?: string
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text
  }

  const slicedText = text.slice(0, maxLength)

  const lastSpaceIndex = slicedText.lastIndexOf(' ')

  if (lastSpaceIndex === -1) {
    return `${slicedText}...`
  }

  return `${slicedText.slice(0, lastSpaceIndex)}...`
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
      <Typography className={className} variant={"body1"}>
        {text}
      </Typography>
    )
  }

  const displayedText = expanded ? text : truncateText(text, maxLength)

  return (
    <Typography className={className} variant={"body1"}>
      {displayedText}{' '}
      <button className={s.button} type={"button"} onClick={() => setExpanded(prev => !prev)}>
        {expanded ? collapseLabel : expandLabel}
      </button>
    </Typography>
  )
}
