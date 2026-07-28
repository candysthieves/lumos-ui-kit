# Lumos UI-Kit

🎨 **Component library for **Lumos app** — a unified design system and interface elements.**

**📖 Description:**  
UI Kit is a centralized library of reusable components created to ensure interface consistency across the **Lumos app** ecosystem.

The project is built on _React_ and _TypeScript_, using _Storybook_ for component documentation and visual testing. Build is optimized with _Vite_.

👥 Team:

**PM** - _Yana Korotenko_

**Team-lead** - _Vladislav Kravchenko_

**Front-end:**

- [Vikastgn](https://github.com/Vikastgn) - Viktoriya Stognieva (**Main**)
- [Intrstng](https://github.com/intrstng) - Andrei Babich
- [hoakiin](https://github.com/hoakiin) - Ekaterina Olesik
- [VladSkij](https://github.com/VladSkij) - Vladislav Skalskij
- [tymanskaya](https://github.com/tymanskaya) - Ekaterina Tymanskaya

## 🔄 Deploy

- [UI-kit Storybook deploy link](https://vercel.com/)

## 🔗 Related Projects

[UI-kit Lumos npm-package](https://www.npmjs.com/package/@candy.thieves/ui-kit-lumos) — a UI component library (UI-kit) for the Lumos application

[Lumos app](https://github.com/candysthieves/lumos-ui-kit) — main application using the UI Kit

[Figma Design](https://www.figma.com/design/UehOuThHVruUR8jcC22FXS/Inctagram?m=auto&t=DixPh2DJFl4iZtwB-6) — mockups and design system

## 📋 Instructions for Integrating UI-kit with the app

### 📦 UI-kit library installation

```bash
npm install @candy.thieves/ui-kit-lumos@latest
# or
yarn add @candy.thieves/ui-kit-lumos@latest
# or
pnpm add @candy.thieves/ui-kit-lumos@latest
```

### ⚙️ Basic Setup

🌐 **Global Style import for _React app (Vite, CRA)_**

🎨 _Add the styles to main.tsx:_

```tsx
// my-vite-app/src/main.tsx

import '@candy.thieves/ui-kit-lumos/dist/index.css'
```

💻 **Using Components**

```tsx
// my-vite-app/src/components/MyComponent.tsx

import { Button } from '@candy.thieves/ui-kit-lumos'
import { Typography } from '@candy.thieves/ui-kit-lumos'

export const MyComponent = () => {
  return (
    <div>
      <Typography variant={'h2'} color={'green'}>
        How to use UI-kit components
      </Typography>

      <Button variant="primary" fullWidth onClick={() => console.log('clicked')}>
        Click me!
      </Button>
    </div>
  )
}
```

<hr>

🌐 **Global Style import for _Next.js_ (App Router)**

🎨 _Add the styles to your root layout file:_

```tsx
// my-next-app/app/layout.tsx

import '@candy.thieves/ui-kit-lumos/dist/index.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Next.js App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

💻 **Using Components**

```tsx
// my-next-app/components/MyComponent.tsx

'use client'

import { Button, Typography } from '@candy.thieves/ui-kit-lumos'

export const MyComponent = () => {
  return (
    <div>
      <Typography variant={'h2'} color={'green'}>
        How to use UI-kit components
      </Typography>

      <Button variant="primary" fullWidth onClick={() => console.log('clicked')}>
        Click me!
      </Button>
    </div>
  )
}
```

## 🚀 Getting started locally with the UI-kit library

[Instructions for getting started locally](./instructions.md)
