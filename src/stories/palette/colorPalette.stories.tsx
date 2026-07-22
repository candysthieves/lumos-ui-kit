import { COLORS } from '@/stories/constants'
import s from './styles.module.scss'

type ColorCardProps = {
  colorName: string
  colorValue: string
}

export type ColorFamily = keyof typeof COLORS

type ColorGroupProps = {
  title: string
  colors: (typeof COLORS)[ColorFamily]
}

export default {
  title: 'Design System/Color Palette',
  parameters: {
    layout: 'centered',
  },
}

const ColorCard = ({ colorName, colorValue }: ColorCardProps) => {
  const isLight =
    colorName.includes('--color-light-100') ||
    colorName.includes('--color-light-300') ||
    colorName.includes('--color-light-500') ||
    colorName.includes('--color-light-700') ||
    colorName.includes('--color-light-900')

  return (
    <div className={s.deck}>
      <div
        className={s.card}
        style={{
          backgroundColor: colorValue,
          border: isLight ? '1px solid var(--color-light-700)' : 'none',
        }}
      />
      <span className={`typography-caption1 ${s.name}`}>
        {colorName}
        <br />
        <span className={s.hash}>{colorValue}</span>
      </span>
    </div>
  )
}

const ColorGroup = ({ title, colors }: ColorGroupProps) => {
  return (
    <div className={s.collection}>
      <h3 className={`typography-h3 ${s.colors}`}>{title}</h3>
      <div className={s.row}>
        {Object.entries(colors).map(([name, value]) => (
          <ColorCard key={name} colorName={name} colorValue={value} />
        ))}
      </div>
    </div>
  )
}

export const Colors = () => {
  return (
    <div className={s.palette}>
      <h1 className={`typography-h1 ${s.title}`}>Color Palette</h1>
      <p className={`typography-subtitle1 ${s.subtitle}`}>All colors used in the design system</p>

      <ColorGroup title={'Accent Colors'} colors={COLORS.accent} />
      <ColorGroup title={'Success Colors'} colors={COLORS.success} />
      <ColorGroup title={'Danger Colors'} colors={COLORS.danger} />
      <ColorGroup title={'Warning Colors'} colors={COLORS.warning} />
      <ColorGroup title={'Dark Colors'} colors={COLORS.dark} />
      <ColorGroup title={'Light Colors'} colors={COLORS.light} />
    </div>
  )
}
