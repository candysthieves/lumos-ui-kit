export type DateRange = { end?: Date; start?: Date }
export type DatePickerMode = 'range' | 'single'
export type DatePickerValue = Date | DateRange | undefined

export const DAYS_IN_WEEK = 7

const WEEKS_IN_CALENDAR = 6
const MIN_YEAR = 1900
const MAX_YEAR = 2100
const MIN_SELECTABLE_DATE = new Date(MIN_YEAR, 0, 1)
const MAX_SELECTABLE_DATE = new Date(MAX_YEAR, 11, 31)
const DATE_FORMATTER = new Intl.DateTimeFormat('en-GB')

export const getStartOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate())

export const getStartOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1)

export const getClosestEnabledDate = (date: Date, minDate?: Date, maxDate?: Date) => {
  const startOfDay = getStartOfDay(date)
  const minimumDate = minDate
    ? new Date(Math.max(getStartOfDay(minDate).getTime(), MIN_SELECTABLE_DATE.getTime()))
    : MIN_SELECTABLE_DATE
  const maximumDate = maxDate
    ? new Date(Math.min(getStartOfDay(maxDate).getTime(), MAX_SELECTABLE_DATE.getTime()))
    : MAX_SELECTABLE_DATE

  if (minimumDate > maximumDate) {
    return new Date(
      Math.min(
        Math.max(startOfDay.getTime(), MIN_SELECTABLE_DATE.getTime()),
        MAX_SELECTABLE_DATE.getTime()
      )
    )
  }

  if (startOfDay < minimumDate) return minimumDate
  if (startOfDay > maximumDate) return maximumDate

  return startOfDay
}

export const getDatesEqual = (firstDate: Date, secondDate: Date) =>
  getStartOfDay(firstDate).getTime() === getStartOfDay(secondDate).getTime()

export const getDateBetween = (date: Date, startDate: Date, endDate: Date) => {
  const timestamp = getStartOfDay(date).getTime()

  return (
    timestamp > getStartOfDay(startDate).getTime() && timestamp < getStartOfDay(endDate).getTime()
  )
}

export const getCalendarDates = (month: Date) => {
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

export const getDateRange = (value: DatePickerValue): DateRange =>
  value instanceof Date ? { start: value } : (value ?? {})

export const formatValue = (value: DatePickerValue, mode: DatePickerMode) => {
  if (!value) return ''
  if (mode === 'single') {
    return value instanceof Date
      ? DATE_FORMATTER.format(value)
      : value.start
        ? DATE_FORMATTER.format(value.start)
        : ''
  }

  const { end, start } = getDateRange(value)

  return start
    ? end
      ? `${DATE_FORMATTER.format(start)} - ${DATE_FORMATTER.format(end)}`
      : DATE_FORMATTER.format(start)
    : ''
}

export const isYearSelectable = (date: Date) =>
  date.getFullYear() >= MIN_YEAR && date.getFullYear() <= MAX_YEAR

export const MONTH_OPTIONS = Array.from({ length: 12 }, (_, month) => ({
  label: new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(2026, month, 1)),
  value: String(month),
}))

export const YEAR_OPTIONS = Array.from({ length: MAX_YEAR - MIN_YEAR + 1 }, (_, index) => ({
  label: String(MIN_YEAR + index),
  value: String(MIN_YEAR + index),
}))
