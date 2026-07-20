import s from './testComponent.module.scss'

export const TestComponent = () => {
  return (
    <div>
      <h2 style={{ color: 'var(--color-success-500)' }}>Hello</h2>
      <p className={s.text}>Let`s start</p>
    </div>
  )
}
