import { useRef, type RefObject } from 'react'
import { getHorizontalMetrics, getVerticalMetrics } from './scrollMetrics'

type DragStateY = {
  startY: number
  startScrollTop: number
}

type DragStateX = {
  startX: number
  startScrollLeft: number
}

type UseThumbDragParams = {
  viewportRef: RefObject<HTMLDivElement | null>
}

export const useThumbDrag = ({ viewportRef }: UseThumbDragParams) => {
  const dragStartYRef = useRef<DragStateY | null>(null)
  const dragStartXRef = useRef<DragStateX | null>(null)

  const handleVerticalMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const viewport = viewportRef.current
    if (!viewport) return

    dragStartYRef.current = {
      startY: event.clientY,
      startScrollTop: viewport.scrollTop,
    }

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const dragStart = dragStartYRef.current
      const metrics = getVerticalMetrics(viewport)
      if (!dragStart || !metrics) return

      const { maxThumbOffsetY, maxScrollOffsetY } = metrics
      const deltaY = moveEvent.clientY - dragStart.startY
      const scrollRatio = maxScrollOffsetY / maxThumbOffsetY
      const newScrollTop = dragStart.startScrollTop + deltaY * scrollRatio

      viewport.scrollTop = Math.max(0, Math.min(newScrollTop, maxScrollOffsetY))
    }

    const handleMouseUp = () => {
      dragStartYRef.current = null
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleHorizontalMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const viewport = viewportRef.current
    if (!viewport) return

    dragStartXRef.current = {
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
    }

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const dragStart = dragStartXRef.current
      const metrics = getHorizontalMetrics(viewport)
      if (!dragStart || !metrics) return

      const { maxThumbOffsetX, maxScrollOffsetX } = metrics
      const deltaX = moveEvent.clientX - dragStart.startX
      const scrollRatio = maxScrollOffsetX / maxThumbOffsetX
      const newScrollLeft = dragStart.startScrollLeft + deltaX * scrollRatio

      viewport.scrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollOffsetX))
    }

    const handleMouseUp = () => {
      dragStartXRef.current = null
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return { handleVerticalMouseDown, handleHorizontalMouseDown }
}
