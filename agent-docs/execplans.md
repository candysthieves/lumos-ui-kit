# ExecPlans

Use an ExecPlan only for large, multi-step or risky tasks where the implementation path needs to stay explicit over time.

Simple changes, including creating or adjusting a single straightforward component, usually do not require an ExecPlan.

## When to Use

Create or maintain an ExecPlan when a task involves:

- several dependent phases;
- changes across multiple areas of the project;
- uncertain migration or rollback risk;
- architecture, build, dependency or design-token decisions;
- long-running work where progress must be tracked.

## What to Include

An ExecPlan should capture:

- objective and scope;
- relevant existing project context;
- ordered implementation steps;
- verification commands;
- risks, assumptions and open questions;
- current progress and completed steps.

## How to Maintain

- Keep the plan current as work progresses.
- Mark completed items when they are actually done.
- Update the plan if discovery changes the implementation path.
- Do not use an ExecPlan to restate normal frontend component rules; use [frontend.md](./frontend.md) for that.
