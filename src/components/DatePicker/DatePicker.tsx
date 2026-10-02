'use client'

import clsx from 'clsx'
import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { ArrowIosBack, ArrowIosForward, CalendarOutline, CloseOutline } from '@/assets'
import s from './DatePicker.module.scss'

export type DateRange = { end?: Date; start?: Date }
export type DatePickerMode = 'range' | 'single'
export type DatePickerValue = Date | DateRange | undefined
export type DatePickerProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'defaultValue' | 'onChange' | 'value'
> & {
  clearable?: boolean
  defaultValue?: DatePickerValue
  error?: ReactNode
  label?: string
  maxDate?: Date
  minDate?: Date
  mode?: DatePickerMode
  onChange?: (value: DatePickerValue) => void
  value?: DatePickerValue
}

const DAYS_IN_WEEK = 7
const WEEKS_IN_CALENDAR = 6
const MIN_YEAR = 1900
const MAX_YEAR = 2100
const WEEKDAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const MONTH_FORMATTER = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' })
const DATE_FORMATTER = new Intl.DateTimeFormat('en-GB')
const DAY_FORMATTER = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})
const MONTH_LABELS = Array.from({ length: 12 }, (_, month) =>
  new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(2026, month, 1))
)
const YEARS = Array.from({ length: MAX_YEAR - MIN_YEAR + 1 }, (_, index) => MIN_YEAR + index)

const getStartOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())
const getStartOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1)
const isYearSelectable = (date: Date) =>
  date.getFullYear() >= MIN_YEAR && date.getFullYear() <= MAX_YEAR
const getClosestEnabledDate = (date: Date, minDate?: Date, maxDate?: Date) => {
  const startOfDay = getStartOfDay(date)

  if (minDate && startOfDay < getStartOfDay(minDate)) return getStartOfDay(minDate)
  if (maxDate && startOfDay > getStartOfDay(maxDate)) return getStartOfDay(maxDate)

  return startOfDay
}
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
const getDateRange = (value: DatePickerValue): DateRange =>
  value instanceof Date ? { start: value } : (value ?? {})
const formatValue = (value: DatePickerValue, mode: DatePickerMode) => {
  if (!value) return ''
  if (mode === 'single')
    return value instanceof Date
      ? DATE_FORMATTER.format(value)
      : value.start
        ? DATE_FORMATTER.format(value.start)
        : ''
  const { end, start } = getDateRange(value)
  return start
    ? end
      ? `${DATE_FORMATTER.format(start)} - ${DATE_FORMATTER.format(end)}`
      : DATE_FORMATTER.format(start)
    : ''
}

export const DatePicker = ({
  className,
  clearable = false,
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
  const errorId = `${popupId}-error`
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
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
  const [focusedDate, setFocusedDate] = useState(() =>
    getClosestEnabledDate(activeDate ?? new Date(), minDate, maxDate)
  )

  const closeCalendar = (shouldRestoreFocus = false) => {
    setIsOpen(false)
    if (shouldRestoreFocus) window.requestAnimationFrame(() => triggerRef.current?.focus())
  }
  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) closeCalendar()
    }
    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])
  useEffect(() => {
    if (!isOpen) return
    rootRef.current
      ?.querySelector<HTMLButtonElement>(`[data-date="${focusedDate.getTime()}"]`)
      ?.focus()
  }, [displayedMonth, focusedDate, isOpen])

  const setSelectedValue = (nextValue: DatePickerValue) => {
    if (value === undefined) setInternalValue(nextValue)
    onChange?.(nextValue)
  }
  const isDateDisabled = (date: Date) =>
    disabled ||
    (!!minDate && date < getStartOfDay(minDate)) ||
    (!!maxDate && date > getStartOfDay(maxDate))
  const setFocusedCalendarDate = (date: Date) => {
    const nextDate = getStartOfDay(date)
    setFocusedDate(nextDate)
    setDisplayedMonth(getStartOfMonth(nextDate))
  }
  const handleDateSelect = (date: Date) => {
    if (mode === 'single') {
      setSelectedValue(date)
      closeCalendar(true)
      return
    }
    const { end, start } = selectedRange
    const selectedDate = getStartOfDay(date)
    if (!start || end) {
      setSelectedValue({ start: selectedDate })
      setFocusedDate(selectedDate)
      return
    }
    const startDate = getStartOfDay(start)
    setSelectedValue(
      selectedDate < startDate
        ? { end: startDate, start: selectedDate }
        : { end: selectedDate, start: startDate }
    )
    closeCalendar(true)
  }
  const handleCalendarKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const calendarDates = getCalendarDates(displayedMonth)
    const focusedIndex = calendarDates.findIndex(date => getDatesEqual(date, focusedDate))
    const goToDate = (date: Date) => {
      if (!isYearSelectable(date) || isDateDisabled(date)) return

      event.preventDefault()
      setFocusedCalendarDate(date)
    }
    switch (event.key) {
      case 'ArrowDown':
        goToDate(
          new Date(focusedDate.getFullYear(), focusedDate.getMonth(), focusedDate.getDate() + 7)
        )
        break
      case 'ArrowLeft':
        goToDate(
          new Date(focusedDate.getFullYear(), focusedDate.getMonth(), focusedDate.getDate() - 1)
        )
        break
      case 'ArrowRight':
        goToDate(
          new Date(focusedDate.getFullYear(), focusedDate.getMonth(), focusedDate.getDate() + 1)
        )
        break
      case 'ArrowUp':
        goToDate(
          new Date(focusedDate.getFullYear(), focusedDate.getMonth(), focusedDate.getDate() - 7)
        )
        break
      case 'End':
        goToDate(
          calendarDates[
            Math.min(
              Math.ceil((focusedIndex + 1) / DAYS_IN_WEEK) * DAYS_IN_WEEK - 1,
              calendarDates.length - 1
            )
          ]
        )
        break
      case 'Home':
        goToDate(calendarDates[Math.floor(focusedIndex / DAYS_IN_WEEK) * DAYS_IN_WEEK])
        break
      case 'PageDown':
        goToDate(
          new Date(
            focusedDate.getFullYear() + (event.shiftKey ? 1 : 0),
            focusedDate.getMonth() + (event.shiftKey ? 0 : 1),
            focusedDate.getDate()
          )
        )
        break
      case 'PageUp':
        goToDate(
          new Date(
            focusedDate.getFullYear() - (event.shiftKey ? 1 : 0),
            focusedDate.getMonth() - (event.shiftKey ? 0 : 1),
            focusedDate.getDate()
          )
        )
        break
      default:
        break
    }
  }
  const calendarDates = getCalendarDates(displayedMonth)
  const displayValue = formatValue(selectedValue, mode)
  const previousMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() - 1, 1)
  const nextMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 1)

  return (
    <div ref={rootRef} className={clsx(s.wrapper, className)}>
      {label && (
        <label htmlFor={popupId} className={clsx('typography-body1', s.label)}>
          {label}
        </label>
      )}
      <div className={s.controls}>
        <button
          {...buttonProps}
          ref={triggerRef}
          id={popupId}
          type={'button'}
          disabled={disabled}
          aria-controls={isOpen ? `${popupId}-popup` : undefined}
          aria-describedby={error ? errorId : undefined}
          aria-expanded={isOpen}
          aria-haspopup={'dialog'}
          className={clsx(
            s.trigger,
            'typography-subtitle1',
            error && s.error,
            disabled && s.disabled
          )}
          onClick={event => {
            onClick?.(event)
            if (!isOpen) {
              const nextFocusedDate = getClosestEnabledDate(
                activeDate ?? new Date(),
                minDate,
                maxDate
              )
              setDisplayedMonth(getStartOfMonth(nextFocusedDate))
              setFocusedDate(nextFocusedDate)
            }
            setIsOpen(!isOpen)
          }}
        >
          <span className={clsx(s.value, !displayValue && s.placeholder)}>
            {displayValue || (mode === 'range' ? 'Select date range' : 'Select date')}
          </span>
          <CalendarOutline autoSize={false} size={24} />
        </button>
        {clearable && displayValue && (
          <button
            type={'button'}
            className={s.clearButton}
            disabled={disabled}
            aria-label={mode === 'range' ? 'Clear date range' : 'Clear date'}
            onClick={() => {
              setSelectedValue(undefined)
              closeCalendar(true)
            }}
          >
            <CloseOutline autoSize={false} size={20} />
          </button>
        )}
      </div>
      {error && (
        <span id={errorId} className={clsx('typography-form-error', s.errorMessage)}>
          {error}
        </span>
      )}
      {isOpen && (
        <div
          id={`${popupId}-popup`}
          className={s.popup}
          role={'dialog'}
          aria-label={mode === 'range' ? 'Choose a date range' : 'Choose a date'}
          onKeyDown={event => {
            if (event.key === 'Escape') {
              event.preventDefault()
              closeCalendar(true)
            }
          }}
        >
          <div className={s.header}>
            <div className={s.monthYearControls}>
              <label className={s.visuallyHidden} htmlFor={`${popupId}-month`}>
                Month
              </label>
              <select
                id={`${popupId}-month`}
                className={clsx(s.monthYearSelect, 'typography-subtitle2')}
                value={displayedMonth.getMonth()}
                onChange={event =>
                  setDisplayedMonth(
                    month => new Date(month.getFullYear(), Number(event.target.value), 1)
                  )
                }
              >
                {MONTH_LABELS.map((month, index) => (
                  <option key={month} value={index}>
                    {month}
                  </option>
                ))}
              </select>
              <label className={s.visuallyHidden} htmlFor={`${popupId}-year`}>
                Year
              </label>
              <select
                id={`${popupId}-year`}
                className={clsx(s.monthYearSelect, 'typography-subtitle2')}
                value={displayedMonth.getFullYear()}
                onChange={event =>
                  setDisplayedMonth(
                    month => new Date(Number(event.target.value), month.getMonth(), 1)
                  )
                }
              >
                {YEARS.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className={s.navigation}>
              <button
                type={'button'}
                className={s.navigationButton}
                aria-label={'Previous month'}
                disabled={!isYearSelectable(previousMonth)}
                onClick={() => setDisplayedMonth(previousMonth)}
              >
                <ArrowIosBack autoSize={false} size={20} />
              </button>
              <button
                type={'button'}
                className={s.navigationButton}
                aria-label={'Next month'}
                disabled={!isYearSelectable(nextMonth)}
                onClick={() => setDisplayedMonth(nextMonth)}
              >
                <ArrowIosForward autoSize={false} size={20} />
              </button>
            </div>
          </div>
          <div
            className={s.days}
            role={'grid'}
            aria-label={MONTH_FORMATTER.format(displayedMonth)}
            onKeyDown={handleCalendarKeyDown}
          >
            <div className={s.weekdays} role={'row'}>
              {WEEKDAY_LABELS.map(weekday => (
                <span key={weekday} role={'columnheader'} className={'typography-subtitle1'}>
                  {weekday}
                </span>
              ))}
            </div>
            {Array.from({ length: WEEKS_IN_CALENDAR }, (_, weekIndex) => (
              <div key={weekIndex} role={'row'} className={s.week}>
                {calendarDates
                  .slice(weekIndex * DAYS_IN_WEEK, (weekIndex + 1) * DAYS_IN_WEEK)
                  .map(date => {
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
                      mode === 'range' &&
                      !!selectedRange.end &&
                      getDatesEqual(date, selectedRange.end)
                    const isInRange =
                      mode === 'range' &&
                      !!selectedRange.start &&
                      !!selectedRange.end &&
                      getDateBetween(date, selectedRange.start, selectedRange.end)
                    return (
                      <div
                        key={date.toISOString()}
                        role={'gridcell'}
                        aria-selected={isSelected || isRangeStart || isRangeEnd}
                      >
                        <button
                          type={'button'}
                          data-date={getStartOfDay(date).getTime()}
                          disabled={isDateDisabled(date)}
                          tabIndex={getDatesEqual(date, focusedDate) ? 0 : -1}
                          aria-label={DAY_FORMATTER.format(date)}
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
                          onFocus={() => setFocusedDate(getStartOfDay(date))}
                        >
                          <span>{date.getDate()}</span>
                        </button>
                      </div>
                    )
                  })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
