import { Theme } from '@radix-ui/themes'
import { createRoot } from 'react-dom/client'

import { App } from '@/App'

import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <Theme>
    <App />
  </Theme>
)
