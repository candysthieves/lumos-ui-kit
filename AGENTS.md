# AGENTS.md

## Project Summary

Lumos UI Kit is a reusable UI component library for Lumos app. The full project description, setup flow, deploy link and related resources are documented in [README.md](./README.md).

Confirmed stack from project configuration:

- React 19, React DOM 19.
- TypeScript 6 with Vite.
- Storybook 10 on `@storybook/react-vite`.
- SCSS Modules plus global SCSS design tokens and mixins.
- Radix UI is used where accessible headless primitives fit the component.
- ESLint, Stylelint, Prettier, Husky, lint-staged and commitlint.

## Main Directories

- `src/components/` - reusable UI components.
- `src/demo/` - demo-only components and visual test harnesses; do not treat them as public UI Kit components.
- `src/stories/` - Storybook stories and design-system visual documentation.
- `src/styles/` - global colors, typography, mixins and boilerplate styles.
- `.storybook/` - Storybook configuration and preview setup.
- `.husky/` - Git hooks.
- `public/` - static assets.
- `dist/` - generated build output; do not edit manually.
- `agent-docs/` - task-specific AI-agent documentation.

## Required Checks

Use the checks that match the files changed:

- `pnpm run type:check` - required after TypeScript or component API changes.
- `pnpm run build` - run for broad, release-facing, bundling, package/config or public API changes; `pnpm run type:check` is enough for narrow TypeScript-only validation.
- `pnpm run build-storybook` - required after Storybook or component documentation changes.
- `pnpm run test:storybook` - runs the configured Storybook/Vitest browser tests for stories.
- `pnpm run stylelint:check` - required after SCSS changes.
- `pnpm run stylelint:fix` - use it only when auto-fixing SCSS files is acceptable for the task.
- `pnpm run lint` runs ESLint with `--fix`; use it only when auto-fixing source files is acceptable for the task.
- `pnpm run format` runs Prettier over `src`; use it only when broad formatting changes are acceptable.

Storybook browser tests are configured in [vite.config.ts](./vite.config.ts) through the Storybook Vitest addon and Playwright Chromium.

## Working Tree Rules

- The worktree may contain uncommitted user changes. Do not revert, reformat or overwrite changes you did not make.
- If unrelated files are dirty, leave them alone.
- If a user change overlaps the requested task, read it and work with it instead of discarding it.
- Do not run formatting or fixing commands that rewrite broad areas unless the task explicitly allows that.

## Protected Areas

Do not change these without an explicit request:

- dependencies, package manager files or lockfiles;
- Vite, TypeScript, ESLint, Stylelint, Prettier, Storybook, Husky or commitlint configuration;
- global design tokens in `src/styles/_colors.scss`, `src/styles/_typography.scss` or shared mixins;
- generated output such as `dist/`;
- `node_modules/`;
- existing README content when a link to it is enough.

## Git, Husky and Commits

- `pre-commit` runs `pnpm lint-staged`.
- `lint-staged` runs ESLint, Stylelint and Prettier for staged files according to [package.json](./package.json).
- `pre-push` runs `pnpm run type:check`; the `test:check` line is currently commented out.
- `commit-msg` runs `pnpm dlx commitlint --edit $1`.
- Commit messages must start with a Jira key and follow [commitlint.config.js](./commitlint.config.js), for example: `SCRUM-1057 feat: add login page`.
- `prepare-commit-msg` tries to infer a Jira key from the current branch and prefix the commit message if needed.

## Team Decisions Pending

No pending team decisions are currently documented.

## Task-Specific Documentation

Specific procedures and documentation for concrete task types live in `./agent-docs`.

- [./agent-docs/execplans.md](./agent-docs/execplans.md) - use for planning large, multi-step or risky tasks.
- [./agent-docs/frontend.md](./agent-docs/frontend.md) - use for creating or changing UI components, SCSS Modules, Storybook stories and frontend code.
- [./agent-docs/architecture.md](./agent-docs/architecture.md) - use only for work that requires substantial architectural changes.

## Storybook Content Rules

- Header stories must use `Lumos` as the default `brandName`; do not use third-party product names as stand-ins for the Lumos brand.
