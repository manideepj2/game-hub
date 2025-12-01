<!-- .github/copilot-instructions.md - guidance for AI coding agents in this repo -->

# Copilot / AI agent instructions — Game Hub (Vite + React + TS)

Purpose: quickly orient an AI developer to the repository layout, build/dev flows,
and project-specific conventions so the agent can make safe, consistent edits.

- **Big picture:** This is a small Vite + React (TypeScript) app. The entry is
  `src/main.tsx` which mounts `src/App.tsx`. UI is provided by Chakra UI (see
  `ChakraProvider` in `src/main.tsx`). There is no router, global state library,
  or tests in the repo currently.

- **Build / dev / lint commands:**

  - Dev server: `npm run dev` (runs `vite`)
  - Production build: `npm run build` (runs `tsc -b && vite build`)
  - Preview build: `npm run preview` (runs `vite preview`)
  - Lint: `npm run lint` (runs `eslint .`)
    Always run `npm install` first when running locally.

- **TypeScript and compilation:**

  - The build first runs `tsc -b` so ensure type-level changes keep the composite
    project build passing. See `tsconfig.app.json` and `tsconfig.node.json`.
  - If you add new modules, update any `tsconfig` references if needed.

- **Vite peculiarity:** `package.json` contains an `overrides` mapping that pins
  `vite` to `npm:rolldown-vite@7.2.5`. Be cautious when touching `vite` or
  upgrading dependencies — behavior may differ from the stock Vite release.

- **Where to implement features / components:**

  - Add components under `src/` (e.g. `src/components/MyComponent.tsx`).
  - Static assets: `src/assets/` for imported images; `public/` for files served
    directly.
  - Styling: global CSS in `src/index.css`, app styles in `src/App.css`.

- **Chakra UI usage:** The app wraps `<App />` with `<ChakraProvider>` in
  `src/main.tsx`. Prefer Chakra primitives and theming for new UI instead of
  ad-hoc style tags when possible.

- **ESLint / formatting:** The repository uses `eslint.config.js`. Run
  `npm run lint` before submitting larger changes. Follow existing lint rules —
  the config is authoritative (don't assume Prettier unless added).

- **Common edit patterns / examples:**

  - To add a new page-level component:
    1. Create `src/components/MyWidget.tsx` (export default function).
    2. Import it in `src/App.tsx` and add it to the render tree.
  - To use Chakra components:
    ```tsx
    import { Box, Text } from "@chakra-ui/react";
    export default function MyWidget() {
      return (
        <Box p={4}>
          <Text>Hi</Text>
        </Box>
      );
    }
    ```

- **What NOT to change without confirmation:**

  - `package.json` `overrides` for `vite` and the `type`, `private`, and `name`
    fields unless explicitly asked.
  - The `tsconfig.*.json` layout and `eslint.config.js` unless you fully
    understand the TypeScript project references and lint behavior.

- **Missing/absent elements to ask the user about:**

  - There are no unit tests or test runner configured. Ask before adding a test
    framework or test scaffolding.
  - No CI config found. Ask the maintainer where CI should run (Node version,
    test/lint steps) before adding GitHub Actions.

- **Useful files to inspect for context:**
  - `package.json` — scripts, dependencies, and `overrides`.
  - `vite.config.ts` — Vite plugin setup (uses `@vitejs/plugin-react`).
  - `eslint.config.js` — linting rules.
  - `tsconfig.app.json`, `tsconfig.node.json` — TypeScript project structure.
  - `src/main.tsx`, `src/App.tsx` — app entry and root component.

If anything in this file is unclear or you need additional specifics (e.g.,
preferred component folder structure, naming conventions, or test strategy),
ask the maintainer before making wide-reaching changes.

---

Please review and tell me what you'd like adjusted or expanded.
