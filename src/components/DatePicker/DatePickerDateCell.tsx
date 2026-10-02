import clsx from 'clsx'
import { Button } from '@/components/Button'
import {
  getDateBetween,
  getDatesEqual,
  getStartOfDay,
  type DatePickerMode,
  type DatePickerValue,
  type DateRange,
} from '@/utils'
import s from './DatePicker.module.scss'

type DatePickerDateCellProps = {
  date: Date
  disabled: boolean
  displayedMonth: Date
  focusedDate: Date
  mode: DatePickerMode
  onFocus: (date: Date) => void
  onSelect: (date: Date) => void
  selectedRange: DateRange
  selectedValue: DatePickerValue
}

const DAY_FORMATTER = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export const DatePickerDateCell = ({
  date,
  disabled,
  displayedMonth,
  focusedDate,
  mode,
  onFocus,
  onSelect,
  selectedRange,
  selectedValue,
}: DatePickerDateCellProps) => {
  const isCurrentMonth = date.getMonth() === displayedMonth.getMonth()
  const isWeekend = date.getDay() === 0 || date.getDay() === 6
  const isSelected =
    mode === 'single' && selectedValue instanceof Date && getDatesEqual(date, selectedValue)
  const isRangeStart =
    mode === 'range' && !!selectedRange.start && getDatesEqual(date, selectedRange.start)
  const isRangeEnd =
    mode === 'range' && !!selectedRange.end && getDatesEqual(date, selectedRange.end)
  const isInRange =
    mode === 'range' &&
    !!selectedRange.start &&
    !!selectedRange.end &&
    getDateBetween(date, selectedRange.start, selectedRange.end)

  return (
    <div role={'gridcell'} aria-selected={isSelected || isRangeStart || isRangeEnd}>
      <Button
        type={'button'}
        data-date={getStartOfDay(date).getTime()}
        disabled={disabled}
        tabIndex={getDatesEqual(date, focusedDate) ? 0 : -1}
        aria-label={DAY_FORMATTER.format(date)}
        variant={'text'}
        className={clsx(
          s.day,
          'typography-subtitle1',
          !isCurrentMonth && s.otherMonth,
          isWeekend && s.weekend,
          (isSelected || isRangeStart || isRangeEnd) && s.selected,
          isInRange && s.inRange,
          isRangeStart && s.rangeStart,
          isRangeEnd && s.rangeEnd
        )}
        onClick={() => onSelect(date)}
        onFocus={() => onFocus(getStartOfDay(date))}
      >
        <span>{date.getDate()}</span>
      </Button>
    </div>
  )
}
