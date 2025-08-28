# NotesApp3.0

A minimal notes application with a **backend** (`/backend`) built with Django (Django REST Framework) providing a JSON API and a **frontend** (`/frontend`) built with React.js.

---

- This application shows the use of Redux for state management in React. 
- For this application django is used as the backend and rest_framework is used to create API.
- Axios comminication with the django is used in the react frontend to perform the CRUID operations.

---

## Table of contents

- [Project overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Project structure](#project-structure)
- [Backend (Django) — Setup & Run](#backend-django---setup--run)
  - [Windows (CMD)](#windows-powershell--cmd)
  - [macOS (bash / zsh)](#macos-bash--zsh)
  - [Database notes (SQLite / PostgreSQL)](#database-notes-sqlite--postgresql)
- [Frontend (React) — Setup & Run](#frontend-react---setup--run)
  - [Windows / macOS (same commands)](#windows--macos-same-commands)
- [Run both concurrently (dev workflow)](#run-both-concurrently-dev-workflow)
- [API Endpoints & Example Requests](#api-endpoints--example-requests)


---

## Project overview

This repo contains a small notes application split into two folders:

- `backend/` — Django project exposing a REST API (assumes Django REST Framework).
- `frontend/` — React application that consumes the API.

The instructions below show step-by-step installation and how to run the app on **Windows** and **macOS**.

---

## Prerequisites

Install these before proceeding.

- **Python** (3.10 or later recommended)
- **Node.js** (18+ recommended) and **npm** (or yarn)
- **Git** (optional but useful)

On macOS you can install missing tools with Homebrew (`brew install python node git`).

---

## Project structure

```
/ (repo root)
├─ backend/        # Django project (API + DB)
│  ├─ manage.py
│  ├─ requirements.txt
│  └─ <django app files>
└─ frontend/       # React app (create-react-app or Vite)
   ├─ package.json
   └─ src/
```

---

## Backend (Django) — Setup & Run

Below are step-by-step commands. Replace `python` with `python3` if needed on macOS.

### Windows (CMD)

**Using Command Prompt (cmd.exe)**

```cmd
cd backend
python -m venv venv
venv\Scripts\activate.bat
python -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

The API will be available at `http://127.0.0.1:8000/` (or `http://localhost:8000/`).

### macOS (bash / zsh)

```bash
# from repo root
cd backend
python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
# copy .env if you have an example
python manage.py migrate
python manage.py createsuperuser  # optional
python manage.py runserver 8000
```

If you get a `command not found` for `python3`, install Python via Homebrew: `brew install python`.

#### CORS note

If the React dev server (localhost:3000) will call the API, ensure your Django app allows cross-origin requests (e.g. install and configure `django-cors-headers` and add `CORS_ALLOWED_ORIGINS = ['http://localhost:3000']`).

---

### Database notes (SQLite vs PostgreSQL)

- **SQLite (default)** — no extra setup required. The app will create `db.sqlite3` after `migrate`.
- **PostgreSQL** — if your project uses Postgres, install `psycopg2-binary` (or `psycopg2`) in `requirements.txt`, create a DB and user, then set credentials in your Django settings or via environment variables (e.g. `DATABASE_URL`).

Example (Postgres environment variables):

```
POSTGRES_DB=notesdb
POSTGRES_USER=notesuser
POSTGRES_PASSWORD=supersecret
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
```

Modify `settings.py` accordingly (or use `dj-database-url` for `DATABASE_URL`).

---

## Frontend (React) — Setup & Run

The frontend folder contains the React app. The instructions below work on both Windows and macOS (just use the proper shell).

### Windows / macOS (same commands)

```bash
# from repo root
cd frontend
# install dependencies
npm install or npm i
# create .env.local if needed (see above)
# start dev server
npm run start
```

This usually starts the React dev server at `http://localhost:3000/`. 

---

## Run both concurrently (dev workflow)

1. Start backend (port 8000):

```bash
cd backend
# activate venv then
python manage.py runserver 8000
```

2. Start frontend (port 3000):

```bash
cd frontend
npm start
```

Open `http://localhost:3000` to view the React app. The React app will call the API on `http://localhost:8000/api/...`.

Optional: use a terminal multiplexer (Windows Terminal / tmux) or VS Code integrated terminals to run both at once.

---

## API Endpoints & Example Requests

> These endpoint paths are examples — adapt to your backend's actual URLs. Typical routes for a notes API:

- `GET  /api/notes/` — list notes
- `POST /api/notes/` — create a note
- `GET  /api/notes/<id>/` — retrieve a note
- `PUT  /api/notes/<id>/update` — update a note
- `DELETE /api/notes/<id>/delete` — delete a note

Example `curl` requests:

**List notes**

```bash
curl http://localhost:8000/api/notes/
```