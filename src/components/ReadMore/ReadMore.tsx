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

  const displayedText = expanded ? text : `${text.slice(0, maxLength)}...`

  return (
    <Typography className={className} variant={"body1"}>
      {displayedText}{' '}
      <button className={s.button} type={"button"} onClick={() => setExpanded(prev => !prev)}>
        {expanded ? collapseLabel : expandLabel}
      </button>
    </Typography>
  )
}
