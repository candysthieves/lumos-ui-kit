'use client'

import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { useState } from 'react'
import { ArrowIosBackOutline, ArrowIosDownOutline, ArrowIosForwardOutline } from '@/assets'
import { Select, type SelectOption } from '@/components/Select'
import s from './Pagination.module.scss'

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 20, 30, 50, 100]

type PaginationItem = 'ellipsis' | number

export type PaginationProps = Omit<ComponentPropsWithoutRef<'nav'>, 'children' | 'onChange'> & {
  currentPage?: number
  defaultCurrentPage?: number
  defaultPageSize?: number
  onPageChange?: (page: number) => void
  onPageSizeChange?: (pageSize: number) => void
  pageCount: number
  pageSize?: number
  pageSizeOptions?: number[]
}

const getPaginationItems = (currentPage: number, pageCount: number): PaginationItem[] => {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1)
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, 'ellipsis', pageCount]
  }

  if (currentPage >= pageCount - 3) {
    return [1, 'ellipsis', pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount]
  }

  return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', pageCount]
}

export const Pagination = ({
  className,
  currentPage,
  defaultCurrentPage = 1,
  defaultPageSize = 100,
  onPageChange,
  onPageSizeChange,
  pageCount,
  pageSize,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  ...props
}: PaginationProps) => {
  const [internalPage, setInternalPage] = useState(defaultCurrentPage)
  const [internalPageSize, setInternalPageSize] = useState(defaultPageSize)
  const activePage = Math.min(Math.max(currentPage ?? internalPage, 1), pageCount)
  const selectedPageSize = pageSize ?? internalPageSize
  const pageItems = getPaginationItems(activePage, pageCount)
  const pageSizeOptionsAsSelectOptions: SelectOption[] = pageSizeOptions.map(option => ({
    label: option,
    value: String(option),
  }))

  const selectPage = (nextPage: number) => {
    if (nextPage === activePage || nextPage < 1 || nextPage > pageCount) {
      return
    }

    if (currentPage === undefined) {
      setInternalPage(nextPage)
    }

    onPageChange?.(nextPage)
  }

  const selectPageSize = (nextPageSize: string) => {
    const parsedPageSize = Number(nextPageSize)

    if (pageSize === undefined) {
      setInternalPageSize(parsedPageSize)
    }

    onPageSizeChange?.(parsedPageSize)
  }

  if (pageCount < 1) {
    return null
  }

  return (
    <nav className={clsx(s.pagination, className)} aria-label={'Pagination'} {...props}>
      <button
        className={s.navigationButton}
        type={'button'}
        aria-label={'Previous page'}
        disabled={activePage === 1}
        onClick={() => selectPage(activePage - 1)}
      >
        <ArrowIosBackOutline size={16} />
      </button>

      <div className={s.pageList}>
        {pageItems.map((item, index) =>
          item === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className={s.ellipsis} aria-hidden>
              ...
            </span>
          ) : (
            <button
              key={item}
              className={clsx(s.pageButton, item === activePage && s.active)}
              type={'button'}
              aria-label={`Page ${item}`}
              aria-current={item === activePage ? 'page' : undefined}
              onClick={() => selectPage(item)}
            >
              {item}
            </button>
          )
        )}
      </div>

      <button
        className={s.navigationButton}
        type={'button'}
        aria-label={'Next page'}
        disabled={activePage === pageCount}
        onClick={() => selectPage(activePage + 1)}
      >
        <ArrowIosForwardOutline size={16} />
      </button>

      <div className={s.pageSize}>
        <span>Show</span>
        <Select
          className={s.pageSizeSelect}
          contentClassName={s.pageSizeContent}
          itemClassName={s.pageSizeOption}
          value={String(selectedPageSize)}
          options={pageSizeOptionsAsSelectOptions}
          triggerIcon={<ArrowIosDownOutline size={16} />}
          triggerProps={{ 'aria-label': 'Items per page' }}
          onValueChange={selectPageSize}
        />
        <span>on page</span>
      </div>
    </nav>
  )
}
