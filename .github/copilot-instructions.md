
<!-- Workspace-specific instructions for Copilot and AI coding agents -->

# DSA Tracker: Copilot Agent Instructions

## Big Picture Architecture
- Full-stack DSA tracking app: Next.js frontend (`web/`), Firebase backend (Firestore, Auth, Functions).
- Tracks solved problems, curated/custom/AI-generated lists, company-specific sets, and user analytics.
- Major flows: User actions → Next.js API routes → Firebase services → Real-time updates and AI integrations.

## Key Directories & Files
- `web/`: Next.js 14+ app, TypeScript, Tailwind CSS, App Router structure.
  - `src/app/`: Main app pages (auth, dashboard, problems, lists, companies, API routes).
  - `src/components/`: UI, forms, charts, layout components.
  - `src/lib/`: Firebase config, AI integrations, utilities.
  - `.env.local`: All secrets and API keys (see README for required keys).
- `firebase/`: (To be created) Functions, rules, and backend logic.
- `tasks.md`: Canonical list of current and planned tasks (check before starting new work).
- `README.md`: Project context, data models, developer workflow, and integration points.

## Developer Workflow
- Install dependencies: `npm install` (in `web/`)
- Start dev server: `npm run dev` (in `web/`)
- Build: `npm run build`
- Lint: `npm run lint`
- Prettier: Configured in `web/.prettierrc`
- Vercel deployment: Config in `web/vercel.json`
- Environment variables: Set in `web/.env.local` (never hardcode secrets)
- Firebase emulators: Use for local backend testing (see README)

## Project-Specific Conventions
- Use functional React components and hooks only.
- All styling via Tailwind CSS utility classes.
- App Router structure: Place new pages in `src/app/`, use nested folders for features.
- Modular, reusable components: Place in `src/components/` and subfolders.
- TypeScript everywhere; keep types in `src/types/`.
- For backend, use Firestore collections as described in README (see schema examples).
- Document new features in `README.md` and update `tasks.md` after changes.
- **Task Management**: Always mark completed tasks as `[x]` in `tasks.md` during development.
- **Documentation Standards**: Add comprehensive JSDoc comments to all components and functions, include JSX comments for code sections, and use descriptive variable/function names.

## Integration Points & External Dependencies
- Firebase: Firestore, Auth, Functions (see `src/lib/firebase/` for config).
- AI: OpenAI/Claude APIs for problem generation, hints, solution analysis (see `.env.local` for keys).
- Company/LeetCode/GitHub APIs: For importing problems and user stats.

## Cross-Component Communication
- Use Next.js API routes (`src/app/api/`) for server-side logic and backend communication.
- Real-time updates via Firebase listeners (see README for data flow).
- Pass data via props and context; avoid global state unless necessary.

## Examples of Important Patterns
- Authentication: All auth pages in `src/app/(auth)/`, use Firebase Auth.
- Problem tracking: Store user progress in Firestore (`UserProgress` collection).
- Company-specific features: Filter problems by company tags, use dedicated pages in `src/app/companies/`.
- AI-powered features: Integrate via utility functions in `src/lib/ai/`.

## How to Be Immediately Productive
1. Read `README.md` for architecture, data models, and workflow.
2. Check `tasks.md` for current priorities and avoid duplicating work.
3. Use the directory and component conventions above for new code.
4. Reference `.env.local` for required environment variables and API keys.
5. **ALWAYS update `tasks.md`** - Mark completed tasks as `[x]` after each step and document progress.
6. Document and update tasks as you complete features.

---

**For details, see the full README.md and tasks.md in the project root.**
