# Frontend Documentation

Use this document for creating or changing UI components, SCSS Modules, Storybook stories and frontend code.

## Reusable Components

Follow the confirmed pattern from `Typography` and `RadioGroup`:

- Create component files under `src/components/<ComponentName>/`.
- Main component file: `<ComponentName>.tsx`.
- Component styles: `<ComponentName>.module.scss`.
- Public local export: `index.ts`.
- Import CSS Modules as `import s from './<ComponentName>.module.scss'`.
- Use `clsx` for class composition.
- Use the `@/*` alias for imports from `src`.
- Keep component-specific styles in CSS Modules. Do not add global component classes unless there is a clear need.
- Demo-only components and visual test harnesses do not belong in `src/components`; put them in `src/demo/<DemoName>/`.
- Use `src/demo` for visual test stands, Storybook-only demo components, responsive playgrounds, showcase components, temporary playground components, and demo-only helpers or mock data.
- Do not put reusable UI Kit components, public props/types, shared tokens, shared mixins or runtime application code in `src/demo`.

## TypeScript, Props, Refs and Exports

- Do not use `any`; `tsconfig.app.json` enables `noImplicitAny`.
- Remove unused variables and parameters; `noUnusedLocals` and `noUnusedParameters` are enabled.
- Import React types with `import type`.
- Props must explicitly describe the component public API.
- For native or primitive props, use `ComponentPropsWithRef`, `ComponentPropsWithoutRef` or primitive-provided types, then exclude conflicting fields with `Omit`.
- Accept `className` when the component needs external style extension. This is already present in `Typography` and `RadioGroup`.
- If a component wraps a DOM or Radix primitive and should expose a ref, use `forwardRef` and set `displayName`.
- Export the component and public types explicitly from local `index.ts`.
- Use named component exports plus separate type exports:
  `export { ComponentName } from './ComponentName'` and
  `export type { ComponentNameProps } from './ComponentName'`.
- If a component has additional public types, export them in the same `export type` statement.
- Follow `eslint-plugin-perfectionist` sorting for imports, union types and enums.
- Include file extensions for `css`, `scss`, `svg` and `json` imports; ESLint enforces this.

## Styling and Tokens

- Global tokens live in `src/styles/_colors.scss` and `src/styles/_typography.scss`.
- Shared mixins live in `src/styles/_mixins.scss`.
- `src/styles/index.scss` is the global style entry and is imported by `src/main.tsx` and `.storybook/preview.tsx`.
- Use existing CSS variables such as `var(--color-...)`, `var(--font-size-...)`, `var(--line-height-...)` and `var(--font-weight-...)`.
- Do not hardcode colors or typography values when a token already exists.
- When converting pixel values to `rem`, round to three digits after the decimal point and use the nearest value divisible by `0.025rem`, for example `10.1875rem` becomes `10.2rem`.
- Use existing mixins such as `flex`, `width-height`, `transition-basic`, `media-*`, `container` and `content` where they fit.
- Global typography classes such as `typography-h1` are defined in `src/styles/_typography.scss`.
- Prettier extends `@it-incubator/prettier-config`; Stylelint extends `@it-incubator/stylelint-config`.

## Radix UI

- Use semantic HTML or accessible headless primitives for interactive components.
- `RadioGroup` is built on `@radix-ui/react-radio-group`.
- When wrapping a Radix primitive, pass through compatible primitive props and only override fields the component actually owns.
- Preserve primitive-provided accessibility attributes and state attributes such as `[data-disabled]` and `[data-state]`.

## Accessibility and Interactive States

- `a11y` means accessibility: checks that UI can be used with assistive technologies and common accessibility needs such as keyboard navigation, labels, focus handling and color contrast.
- Clickable labels must be associated with controls through `id` and `htmlFor`; `useId` is used for stable ids.
- Buttons must always have `type`; ESLint enforces `react/button-has-type`.
- Interactive components should implement and style `disabled`, `hover`, `active` and `focus-visible` states.
- Disabled state should disable interaction and be visually distinct.
- Storybook a11y mode is currently `todo`: violations are visible in Storybook/Test UI but do not fail CI. Do not change it to `error` without a team decision.

## Naming

Confirmed project naming:

- Component names and component directories: `PascalCase`.
- Component files: `PascalCase.tsx`.
- CSS Modules: `PascalCase.module.scss`.
- Demo-only components: `src/demo/<DemoName>/<DemoName>.tsx`.
- Component stories: `src/stories/components/<ComponentName>/<ComponentName>.stories.tsx`.
- Storybook titles: `Components/<ComponentName>`, `Styles/<Name>` or `Design System/<Name>`.
- Story exports: `PascalCase`, for example `Default`, `DisabledItem`, `AllTypography`.
- Props and types: `PascalCase` with meaningful suffixes, for example `RadioGroupProps`, `RadioOption`, `TypographyVariant`.
- SCSS module classes are mostly camelCase; hyphenated classes exist for variants such as `align-left`.

## Storybook

- Stories are written as `*.stories.tsx`.
- Component stories belong in `src/stories/components/<ComponentName>/<ComponentName>.stories.tsx` so each component story can keep related story-only files in the same folder when needed.
- Type stories with `Meta` and `StoryObj` from `@storybook/react-vite`.
- Use `tags: ['autodocs']` for component stories that should be included in autodocs.
- Describe public props with `argTypes` when it improves docs and controls.
- Represent component states with separate named stories such as `Default`, `Disabled` and `DisabledItem`.
- Stateful examples may use `render` with React hooks; the ESLint override for stories allows this.
- Global styles and fonts are loaded in `.storybook/preview.tsx`.

## Frontend Checks

After frontend changes, run the checks that apply:

- `pnpm run type:check` after TS, props or exports changes.
- `pnpm run stylelint:check` after SCSS changes.
- `pnpm run build-storybook` after stories, component states or docs changes.
- `pnpm run test:storybook` to run the configured Storybook/Vitest browser tests for stories.
- `pnpm run build` for broad component or public API changes.
- `pnpm run lint` only when ESLint auto-fix is acceptable for the task.

## Commit Message Follow-up

After completing code, style, Storybook, or documentation changes, include a suggested commit message in the final response. The message must follow the project commitlint format from `commitlint.config.js` and use an appropriate conventional type and optional scope.

The `prepare-commit-msg` hook prefixes the Jira key from the current branch when the message does not already start with one. For the normal IDE/git commit flow, suggest the message without the Jira key to avoid duplicate prefixes, for example `fix(header): improve docs controls`. If showing the final message after hooks, label it clearly as the final expanded form, for example `SCRUM-53 fix(header): improve docs controls`.
