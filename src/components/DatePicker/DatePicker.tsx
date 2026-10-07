'use client'

import clsx from 'clsx'
import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { ArrowIosBack, ArrowIosForward, CalendarOutline, CloseOutline } from '@/assets'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'
import {
  formatValue,
  DAYS_IN_WEEK,
  getCalendarDates,
  getClosestEnabledDate,
  getDateRange,
  getDatesEqual,
  getStartOfDay,
  getStartOfMonth,
  isYearSelectable,
  MONTH_OPTIONS,
  type DatePickerMode,
  type DatePickerValue,
  YEAR_OPTIONS,
} from '@/utils'
import s from './DatePicker.module.scss'
import { DatePickerDateCell } from './DatePickerDateCell'

export type { DatePickerMode, DatePickerValue, DateRange } from '@/utils'
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

const WEEKS_IN_CALENDAR = 6
const WEEKDAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const MONTH_FORMATTER = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' })

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
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null)
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
  const setRootRef = useCallback((node: HTMLDivElement | null) => {
    rootRef.current = node
    setPortalContainer(node)
  }, [])

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
    !isYearSelectable(date) ||
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
    <div ref={setRootRef} className={clsx(s.wrapper, className)}>
      {label && (
        <label htmlFor={popupId} className={clsx('typography-body1', s.label)}>
          {label}
        </label>
      )}
      <div className={s.controls}>
        <Button
          {...buttonProps}
          ref={triggerRef}
          id={popupId}
          type={'button'}
          disabled={disabled}
          aria-controls={isOpen ? `${popupId}-popup` : undefined}
          aria-describedby={error ? errorId : undefined}
          aria-expanded={isOpen}
          aria-haspopup={'dialog'}
          variant={'text'}
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
        </Button>
        {clearable && displayValue && (
          <Button
            type={'button'}
            className={s.clearButton}
            disabled={disabled}
            aria-label={mode === 'range' ? 'Clear date range' : 'Clear date'}
            variant={'text'}
            onClick={() => {
              setSelectedValue(undefined)
              closeCalendar(true)
            }}
          >
            <CloseOutline autoSize={false} size={20} />
          </Button>
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
              <Select
                className={clsx(s.monthYearSelect, s.monthSelect)}
                contentClassName={s.monthYearContent}
                options={MONTH_OPTIONS}
                portalProps={portalContainer ? { container: portalContainer } : undefined}
                value={String(displayedMonth.getMonth())}
                viewportProps={{ className: s.monthViewport }}
                onValueChange={month =>
                  setDisplayedMonth(
                    currentMonth => new Date(currentMonth.getFullYear(), Number(month), 1)
                  )
                }
                triggerProps={{ 'aria-label': 'Month' }}
              />
              <Select
                className={clsx(s.monthYearSelect, s.yearSelect)}
                contentClassName={s.monthYearContent}
                options={YEAR_OPTIONS}
                portalProps={portalContainer ? { container: portalContainer } : undefined}
                value={String(displayedMonth.getFullYear())}
                viewportProps={{ className: s.yearViewport }}
                onValueChange={year =>
                  setDisplayedMonth(
                    currentMonth => new Date(Number(year), currentMonth.getMonth(), 1)
                  )
                }
                triggerProps={{ 'aria-label': 'Year' }}
              />
            </div>
            <div className={s.navigation}>
              <Button
                type={'button'}
                className={s.navigationButton}
                aria-label={'Previous month'}
                disabled={!isYearSelectable(previousMonth)}
                onClick={() => setDisplayedMonth(previousMonth)}
                variant={'text'}
              >
                <ArrowIosBack autoSize={false} size={20} />
              </Button>
              <Button
                type={'button'}
                className={s.navigationButton}
                aria-label={'Next month'}
                disabled={!isYearSelectable(nextMonth)}
                onClick={() => setDisplayedMonth(nextMonth)}
                variant={'text'}
              >
                <ArrowIosForward autoSize={false} size={20} />
              </Button>
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
                  .map(date => (
                    <DatePickerDateCell
                      key={date.toISOString()}
                      date={date}
                      disabled={isDateDisabled(date)}
                      displayedMonth={displayedMonth}
                      focusedDate={focusedDate}
                      mode={mode}
                      selectedRange={selectedRange}
                      selectedValue={selectedValue}
                      onFocus={setFocusedDate}
                      onSelect={handleDateSelect}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
