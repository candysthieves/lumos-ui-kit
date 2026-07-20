import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/roboto/wght.css'

import './styles/index.scss'
import { Theme } from '@radix-ui/themes'
import { createRoot } from 'react-dom/client'

import { App } from '@/App'

createRoot(document.getElementById('root')!).render(
  <Theme>
    <App />
  </Theme>
)
