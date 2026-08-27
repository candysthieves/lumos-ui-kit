
# Lumos UI Kit

🎨 **Component library for **Lumos app** — a unified design system and interface elements.**

**📖 Description:**  
UI Kit is a centralized library of reusable components created to ensure interface consistency across the **Lumos app** ecosystem.

The project is built on *React* and *TypeScript*, using *Storybook* for component documentation and visual testing. Build is optimized with *Vite*.

👥 Team:

**PM** - *Yana Korotenko*

**Team-lead**  - *Vladislav Kravchenko*

**Front-end:**
*   [Vikastgn](https://github.com/Vikastgn) - Viktoriya Stognieva (**Main**)
*	[Intrstng](https://github.com/intrstng) - Andrei Babich
*	[hoakiin](https://github.com/hoakiin) - Ekaterina Olesik
*   [VladSkij](https://github.com/VladSkij) - Vladislav Skalskij
*   [tymanskaya](https://github.com/tymanskaya) - Ekaterina Tymanskaya

## 🌐 Deploy

*   [Deploy link](https://vercel.com/)

## 🔗 Related Projects
[Lumos app](https://github.com/candysthieves/lumos-ui-kit) — main application using the UI Kit

[Figma Design](https://www.figma.com/design/UehOuThHVruUR8jcC22FXS/Inctagram?m=auto&t=DixPh2DJFl4iZtwB-6) — mockups and design system

## 🚀Getting Started locally

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

    *If you have problems with running the script, use the following command in the CLI:*

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

*   **`dev`:** 💻 Starts a local Vite development server for quick debugging of the application.

    ```bash
    pnpm run dev
    ```
*   **`build`:** 📦 Checks the TypeScript, then it builds an optimised production build of the project.

    ```bash
    pnpm run build
    ```
*   **`type:check`:** 🔷  Checks TypeScript types without generating files; for validation purposes only.

    ```bash
    pnpm run type:check
    ```

*   **`stylelint:check`:** 🎨 Checks SCSS files for stylelint errors.

    ```bash
    pnpm run stylelint:check
    ```

*   **`stylelint:fix`:** 🔧 Automatically fixes SCSS stylelint errors.

    ```bash
    pnpm run stylelint:fix
    ```

*   **`format`:** ✅ Checks and automatically formats code with Prettier.

    ```bash
    pnpm run format
    ```

*   **`lint`:** 🔍 Runs ESLint to check for code quality issues and automatically fixes ESLint errors.

    ```bash
    pnpm run lint
    ```

*   **`preview`:** 👀 Starts a local server to preview the production build.

    ```bash
    pnpm run preview
    ```

*   **`storybook`:** ✨ Starts a local server to preview the production build.

       ```bash
       pnpm run storybook
       ```

*   **`build-storybook`:** 🌐 Starts a local server to preview the production build.

       ```bash
       pnpm run build-storybook
       ```

*   **`prepare`:** ⚙️A lifecycle script that Husky uses to set up Git hooks. This is automatically run after `npm install`.

       ```bash
       pnpm run build-storybook
       ```