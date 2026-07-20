import s from './testComponent.module.scss'

type Props = {
  color?: string
}

export const TestComponent = ({ color = 'var(--color-success-500)' }: Props) => {
  return (
    <div>
      <h2 style={{ color }}>Hello</h2>
      <p className={s.text}>Let`s start</p>
    </div>
  )
}
