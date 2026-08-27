# Architecture Documentation

Use this document only for tasks that require substantial architectural changes or decisions affecting multiple components or the whole library.

## Scope

Architecture-level work includes changes to:

- the public UI Kit architecture;
- directory structure;
- demo-only component placement under `src/demo/<DemoName>/`;
- component export strategy and public API shape;
- library-wide design tokens and shared mixins;
- dependencies and the choice of headless primitives;
- Vite, TypeScript, Storybook, ESLint, Stylelint, Prettier, Husky or commitlint configuration;
- behavior shared by several components;
- release-facing build or documentation setup.

## Rules

- Do not change architecture-level contracts as part of a local component task unless explicitly requested.
- Do not standardize unresolved conventions without team confirmation.
- Prefer the patterns already proven by existing components and configuration.
- Treat design-token changes as library-wide changes, not component-local styling.
- Treat dependency additions, removals and replacements as architecture decisions.
- Treat export-system changes as public API changes.
- When a change affects several components, document the scope and required checks before implementation.

## Team Decisions Pending

No pending team decisions are currently documented.
