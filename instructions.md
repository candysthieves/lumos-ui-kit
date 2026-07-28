# Lumos UI Kit

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
