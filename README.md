# Lumos UI-kit

🎨 **Component library for **Lumos app** — a unified design system and interface elements.**

**📖 Description:**  
UI Kit is a centralized library of reusable components created to ensure interface consistency across the **Lumos app** ecosystem.

The project is built on _React_ and _TypeScript_, using _Storybook_ for component documentation and visual testing. Build is optimized with _Vite_.

👥 Team:

**Team-lead** - _Vladislav Kravchenko_

**Front-end:**

- [Vikastgn](https://github.com/Vikastgn) - Viktoriya Stognieva (**Main**)
- [Intrstng](https://github.com/intrstng) - Andrei Babich
- [hoakiin](https://github.com/hoakiin) - Ekaterina Olesik
- [VladSkij](https://github.com/VladSkij) - Vladislav Skalskij
- [tymanskaya](https://github.com/tymanskaya) - Ekaterina Tymanskaya

## 🔄 Deploy

- [UI-kit Storybook deploy link](https://lumos-ui-kit-storybook.vercel.app/)

## 🔗 Related Projects

[UI-kit Lumos npm-package](https://www.npmjs.com/package/@candy.thieves/ui-kit-lumos) — a UI component library (UI-kit) for the **Lumos** application

[UI-kit Lumos repository](https://github.com/candysthieves/lumos-ui-kit) — UI-kit library repository for the **Lumos** application

[Lumos app repository](https://github.com/candysthieves/client) — main application using the UI-kit

[Lumos app deploy link](https://lumosapp.net/) — deployment link for the application using the UI-kit

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

Follow these steps to run the application locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/candysthieves/lumos-ui-kit.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd lumos-ui-kit
    ```

3.  **Switch to the `develop` branch:**

    ```bash
    git checkout develop
    ```

4.  **Install dependencies:**

    ```bash
    pnpm install
    ```

    _If you have problems with running the script, use the following command in the CLI:_

    ```bash
    pnpm install --legacy-peer-deps
    ```

5.  **Launch the StoryBook local development server to visually test components:**

    ```bash
    pnpm run storybook
    ```

6.  **Access the application:**

    Open your browser and navigate to the link provided in the CLI.*

## ⚙️Available Scripts

- **`dev`:** 💻 Starts a local Vite development server for quick debugging of the application.

  ```bash
  pnpm run dev
  ```

- **`build`:** 📦 Checks the TypeScript, then it builds an optimised production build of the project.

  ```bash
  pnpm run build
  ```

- **`type:check`:** 🔷 Checks TypeScript types without generating files; for validation purposes only.

  ```bash
  pnpm run type:check
  ```

- **`stylelint:check`:** 🎨 Checks SCSS files for stylelint errors.

  ```bash
  pnpm run stylelint:check
  ```

- **`stylelint:fix`:** 🔧 Automatically fixes SCSS stylelint errors.

  ```bash
  pnpm run stylelint:fix
  ```

- **`format`:** ✅ Checks and automatically formats code with Prettier.

  ```bash
  pnpm run format
  ```

- **`lint`:** 🔍 Runs ESLint to check for code quality issues and automatically fixes ESLint errors.

  ```bash
  pnpm run lint
  ```

- **`preview`:** 👀 Starts a local server to preview the production build.

  ```bash
  pnpm run preview
  ```

- **`storybook`:** ✨ Starts a local server to preview the production build.

  ```bash
  pnpm run storybook
  ```

- **`build-storybook`:** 🌐 Starts a local server to preview the production build.

  ```bash
  pnpm run build-storybook
  ```

- **`prepare`:** ⚙️A lifecycle script that Husky uses to set up Git hooks. This is automatically run after `npm install`.

  ```bash
  pnpm run build-storybook
  ```
