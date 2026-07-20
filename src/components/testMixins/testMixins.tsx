import { useState } from 'react'
import s from './testMixins.module.scss'

export const TestMixins = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={s.testContainer}>
      {/* Test container mixin */}
      <header className={s.header}>
        <div className={s.container}>
          <h1>Testing All Mixins</h1>
          <p>Resize your browser to see responsive behavior</p>
        </div>
      </header>

      {/* Test content mixin */}
      <main className={s.main}>
        <div className={s.content}>
          <section className={s.testSection}>
            <h2>Responsive Breakpoints</h2>
            <div className={s.breakpointIndicators}>
              <div className={s.desktopIndicator}>Desktop (≥1280px)</div>
              <div className={s.tabletIndicator}>Tablet (768-1279px)</div>
              <div className={s.mobileIndicator}>Mobile (≤360px)</div>
            </div>
          </section>

          {/* Test modal widths */}
          <section className={s.testSection}>
            <h2>Modal Widths</h2>
            <div className={s.modalSizes}>
              <div className={s.modalXs}>XS (366px)</div>
              <div className={s.modalS}>S (378px)</div>
              <div className={s.modalM}>M (492px)</div>
              <div className={s.modalL}>L (644px)</div>
              <div className={s.modalXl}>XL (972px)</div>
            </div>
            <button type={'button'} className={s.openModalBtn} onClick={() => setIsModalOpen(true)}>
              Open Modal
            </button>
          </section>

          {/* Test no-hover mixin */}
          <section className={s.testSection}>
            <h2>Hover & Touch Testing</h2>
            <div className={s.hoverTest}>
              <button type={'button'} className={s.hoverButton}>
                Hover me (desktop) / Tap me (mobile)
              </button>
              <div className={s.hoverCard}>
                <p>Hover effects change on touch devices</p>
              </div>
            </div>
          </section>

          {/* Test flex, width-height, top-left, top-right, typography, prefix, transition-basic */}
          <section className={s.testSection}>
            <h2>Utility Mixins</h2>

            <div className={s.utilityGrid}>
              <div className={s.flexBox}>
                <div>Flexbox</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>

              <div className={s.square}>width-height</div>

              <div className={s.positionWrapper}>
                <div className={s.topLeft}>Top Left</div>
                <div className={s.topRight}>Top Right</div>
              </div>

              <p className={s.typographyExample}>Typography mixin example</p>

              <div className={s.transitionBox}>Hover me (transition-basic mixin)</div>

              <div className={s.prefixBox}>Prefix mixin</div>
            </div>
          </section>
        </div>
      </main>

      {/* Modal with responsive widths */}
      {isModalOpen && (
        <div className={s.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={s.modal} onClick={e => e.stopPropagation()}>
            <button type={'button'} className={s.closeBtn} onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h2>Responsive Modal</h2>
            <p>Modal width changes based on screen size</p>
            <div className={s.modalSizes}>
              <span>XS: 366px</span>
              <span>S: 378px</span>
              <span>M: 492px</span>
              <span>L: 644px</span>
              <span>XL: 972px</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
