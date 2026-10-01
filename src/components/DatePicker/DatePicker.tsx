'use client'

import clsx from 'clsx'
import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { ArrowIosBack, ArrowIosForward, CalendarOutline } from '@/assets'
import s from './DatePicker.module.scss'

export type DateRange = {
  end?: Date
  start?: Date
}

export type DatePickerMode = 'range' | 'single'

export type DatePickerValue = Date | DateRange | undefined

export type DatePickerProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'defaultValue' | 'onChange' | 'value'
> & {
  defaultValue?: DatePickerValue
  error?: string
  label?: string
  maxDate?: Date
  minDate?: Date
  mode?: DatePickerMode
  onChange?: (value: DatePickerValue) => void
  value?: DatePickerValue
}

const DAYS_IN_WEEK = 7
const WEEKS_IN_CALENDAR = 6
const WEEKDAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const MONTH_FORMATTER = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' })
const DATE_FORMATTER = new Intl.DateTimeFormat('en-GB')
const DAY_FORMATTER = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const getStartOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())

const getStartOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1)

const getDatesEqual = (firstDate: Date, secondDate: Date) =>
  getStartOfDay(firstDate).getTime() === getStartOfDay(secondDate).getTime()

const getDateBetween = (date: Date, startDate: Date, endDate: Date) => {
  const timestamp = getStartOfDay(date).getTime()

  return (
    timestamp > getStartOfDay(startDate).getTime() && timestamp < getStartOfDay(endDate).getTime()
  )
}

const getCalendarDates = (month: Date) => {
  const firstDayOfMonth = getStartOfMonth(month)
  const mondayOffset = (firstDayOfMonth.getDay() + DAYS_IN_WEEK - 1) % DAYS_IN_WEEK
  const firstCalendarDate = new Date(firstDayOfMonth)

  firstCalendarDate.setDate(firstDayOfMonth.getDate() - mondayOffset)

  return Array.from({ length: DAYS_IN_WEEK * WEEKS_IN_CALENDAR }, (_, index) => {
    const date = new Date(firstCalendarDate)

    date.setDate(firstCalendarDate.getDate() + index)

    return date
  })
}

const getDateRange = (value: DatePickerValue): DateRange => {
  if (value instanceof Date) {
    return { start: value }
  }

  return value ?? {}
}

const formatValue = (value: DatePickerValue, mode: DatePickerMode) => {
  if (!value) {
    return ''
  }

  if (mode === 'single') {
    return value instanceof Date
      ? DATE_FORMATTER.format(value)
      : value.start
        ? DATE_FORMATTER.format(value.start)
        : ''
  }

  const { end, start } = getDateRange(value)

  if (!start) {
    return ''
  }

  return end
    ? `${DATE_FORMATTER.format(start)} - ${DATE_FORMATTER.format(end)}`
    : DATE_FORMATTER.format(start)
}

export const DatePicker = ({
  className,
  defaultValue,
  disabled,
  error,
  label,
  maxDate,
  minDate,
  mode = 'single',
  onChange,
  onClick,
  value,
  ...buttonProps
}: DatePickerProps) => {
  const generatedId = useId()
  const popupId = `date-picker-${generatedId}`
  const rootRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<DatePickerValue>(defaultValue)
  const selectedValue = value ?? internalValue
  const selectedRange = getDateRange(selectedValue)
  const activeDate =
    mode === 'range'
      ? selectedRange.start
      : selectedValue instanceof Date
        ? selectedValue
        : selectedRange.start
  const [displayedMonth, setDisplayedMonth] = useState(() =>
    getStartOfMonth(activeDate ?? new Date())
  )

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)

    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  const setSelectedValue = (nextValue: DatePickerValue) => {
    if (value === undefined) {
      setInternalValue(nextValue)
    }

    onChange?.(nextValue)
  }

  const isDateDisabled = (date: Date) =>
    disabled ||
    (!!minDate && date < getStartOfDay(minDate)) ||
    (!!maxDate && date > getStartOfDay(maxDate))

  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) {
      return
    }

    if (mode === 'single') {
      setSelectedValue(date)
      setIsOpen(false)

      return
    }

    const { end, start } = selectedRange

    if (!start || end) {
      setSelectedValue({ start: date })

      return
    }

    if (date < start) {
      setSelectedValue({ end: start, start: date })
    } else {
      setSelectedValue({ end: date, start })
    }

    setIsOpen(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleTriggerClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    onClick?.(event)

    if (!isOpen && activeDate) {
      setDisplayedMonth(getStartOfMonth(activeDate))
    }

    setIsOpen(!isOpen)
  }

  const calendarDates = getCalendarDates(displayedMonth)
  const displayValue = formatValue(selectedValue, mode)

  return (
    <div ref={rootRef} className={clsx(s.wrapper, className)} onKeyDown={handleKeyDown}>
      {label && (
        <label htmlFor={popupId} className={clsx('typography-body1', s.label)}>
          {label}
        </label>
      )}

      <button
        {...buttonProps}
        id={popupId}
        type={'button'}
        disabled={disabled}
        aria-controls={isOpen ? `${popupId}-popup` : undefined}
        aria-expanded={isOpen}
        aria-haspopup={'dialog'}
        className={clsx(
          s.trigger,
          'typography-subtitle1',
          error && s.error,
          disabled && s.disabled
        )}
        onClick={handleTriggerClick}
      >
        <span className={clsx(s.value, !displayValue && s.placeholder)}>
          {displayValue || (mode === 'range' ? 'Select date range' : 'Select date')}
        </span>
        <CalendarOutline autoSize={false} size={24} />
      </button>

      {error && <span className={clsx('typography-form-error', s.errorMessage)}>{error}</span>}

      {isOpen && (
        <div
          id={`${popupId}-popup`}
          className={s.popup}
          role={'dialog'}
          aria-label={mode === 'range' ? 'Choose a date range' : 'Choose a date'}
        >
          <div className={s.header}>
            <span className={'typography-subtitle2'}>{MONTH_FORMATTER.format(displayedMonth)}</span>
            <div className={s.navigation}>
              <button
                type={'button'}
                className={s.navigationButton}
                aria-label={'Previous month'}
                onClick={() =>
                  setDisplayedMonth(month => new Date(month.getFullYear(), month.getMonth() - 1, 1))
                }
              >
                <ArrowIosBack autoSize={false} size={20} />
              </button>
              <button
                type={'button'}
                className={s.navigationButton}
                aria-label={'Next month'}
                onClick={() =>
                  setDisplayedMonth(month => new Date(month.getFullYear(), month.getMonth() + 1, 1))
                }
              >
                <ArrowIosForward autoSize={false} size={20} />
              </button>
            </div>
          </div>

          <div className={s.weekdays} aria-hidden>
            {WEEKDAY_LABELS.map(weekday => (
              <span key={weekday} className={'typography-subtitle1'}>
                {weekday}
              </span>
            ))}
          </div>

          <div className={s.days} role={'grid'} aria-label={MONTH_FORMATTER.format(displayedMonth)}>
            {calendarDates.map(date => {
              const isCurrentMonth = date.getMonth() === displayedMonth.getMonth()
              const isWeekend = date.getDay() === 0 || date.getDay() === 6
              const isSelected =
                mode === 'single' &&
                selectedValue instanceof Date &&
                getDatesEqual(date, selectedValue)
              const isRangeStart =
                mode === 'range' &&
                !!selectedRange.start &&
                getDatesEqual(date, selectedRange.start)
              const isRangeEnd =
                mode === 'range' && !!selectedRange.end && getDatesEqual(date, selectedRange.end)
              const isInRange =
                mode === 'range' &&
                !!selectedRange.start &&
                !!selectedRange.end &&
                getDateBetween(date, selectedRange.start, selectedRange.end)

              return (
                <button
                  key={date.toISOString()}
                  type={'button'}
                  role={'gridcell'}
                  disabled={isDateDisabled(date)}
                  aria-label={DAY_FORMATTER.format(date)}
                  aria-selected={isSelected || isRangeStart || isRangeEnd}
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
                  onClick={() => handleDateSelect(date)}
                >
                  <span>{date.getDate()}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
