export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text
  }

  const slicedText = text.slice(0, maxLength)

  const lastSpaceIndex = slicedText.lastIndexOf(' ')

  if (lastSpaceIndex === -1) {
    return `${slicedText}...`
  }

  return `${slicedText.slice(0, lastSpaceIndex)}...`
}
