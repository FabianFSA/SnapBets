# SnapBets

SnapBets is a webapp to tipp NFL-Games: Users earn points over the season and can compare with other users.

## Goals

- Build a genuinely **performant** app, not prototype clutter.
- Along the way, deliberately **try out cool stuff and learn** — this project is as much about learning as it is about the end product.

## Tech Stack

Monorepo using Bun workspaces.

| Area                    | Stack                                            |
| ----------------------- | ------------------------------------------------ |
| `apps/web`              | Vite, React, TypeScript, Tailwind CSS, shadcn/ui |
| `apps/api`              | Elysia (Bun)                                     |
| `packages/shared-types` | TypeScript types shared between web and API      |

## Project Structure

```
apps/
  web/                 # Frontend (Vite + React)
    src/
      components/      # UI components
      pages/            # Routes/pages
      mocks/            # Mock data (placeholder until the API exists)
      lib/               # Utilities
  api/                 # Backend (Elysia)
    src/
      entities/          # Domain entities
packages/
  shared-types/        # Types shared by web & API (User, Team, Game, Division, UserTipp, Record)
```

## Setup

Prerequisite: [Bun](https://bun.com)

```bash
bun install
```

### Run the web app

```bash
cd apps/web
bun run dev
```

Runs on `http://localhost:5173` by default.

### Run the API

```bash
cd apps/api
bun run dev
```

Runs on `http://localhost:3000` by default.

## Status

- [x] Monorepo structure (web, API, shared-types)
- [x] Frontend scaffolding with mock data (teams, divisions, games)
- [ ] Login / auth
- [ ] Wire up a real API/database (replace mocks)
- [ ] Tipp logic (submitting picks, scoring, standings)

## Data Model

The core entities live in [`packages/shared-types`](packages/shared-types): `User`, `Team`, `Division`, `Game`, `UserTipp`, `Record`. That's currently the source of truth for the data model — there's no visual ER diagram yet (the old Eraser.io diagram in `apps/web/README.md` no longer loads).
