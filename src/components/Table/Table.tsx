import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { Typography } from '../Typography/Typography'
import s from './Table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...props }, ref) => (
    <table ref={ref} className={clsx(s.table, className)} {...props} />
  )
)

Table.displayName = 'Table'

export const TableHead = forwardRef<HTMLTableSectionElement, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={clsx(s.head, className)} {...props} />
  )
)

TableHead.displayName = 'TableHead'

export const TableBody = forwardRef<HTMLTableSectionElement, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={clsx(s.body, className)} {...props} />
  )
)

TableBody.displayName = 'TableBody'

export const TableRow = forwardRef<HTMLTableRowElement, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...props }, ref) => <tr ref={ref} className={clsx(s.row, className)} {...props} />
)

TableRow.displayName = 'TableRow'

export const TableHeaderCell = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'th'>>(
  ({ className, children, ...props }, ref) => (
    <th ref={ref} className={clsx(s.headerCell, className)} {...props}>
      <Typography variant={"body3"}>{children}</Typography>
    </th>
  )
)

TableHeaderCell.displayName = 'TableHeaderCell'

export const TableCell = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'td'>>(
  ({ className, children, ...props }, ref) => (
    <td ref={ref} className={clsx(s.cell, className)} {...props}>
      <Typography variant={"body1"}>{children}</Typography>
    </td>
  )
)

TableCell.displayName = 'TableCell'
