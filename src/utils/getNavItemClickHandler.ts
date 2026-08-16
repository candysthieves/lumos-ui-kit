import type { MouseEvent } from 'react'

const NON_NAVIGABLE_HREF = '#'

export const getNavItemClickHandler = (href: string | undefined, onSelect: () => void) => {
  const hasRealHref = Boolean(href) && href !== NON_NAVIGABLE_HREF

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!hasRealHref) {
      event.preventDefault()
    }

    onSelect()
  }

  return { handleClick, resolvedHref: href ?? NON_NAVIGABLE_HREF }
}
