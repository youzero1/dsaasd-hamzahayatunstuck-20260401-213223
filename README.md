# Todo App — Next.js

A beautiful, fully-featured Todo app built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- ✅ Add, edit, delete todos
- ✅ Mark todos as complete
- ✅ Filter by All / Active / Completed
- ✅ Clear all completed at once
- ✅ Persists to `localStorage`
- ✅ Responsive & animated UI
- ✅ Docker-ready for Coolify deployment

---

## Getting Started (Local)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Docker Build & Run

```bash
# Build the image
docker build -t todo-app .

# Run the container
docker run -p 3000:3000 todo-app
```

---

## Deploy to Coolify

1. Push this repo to GitHub / GitLab / Gitea.
2. In **Coolify**, create a new **Resource → Application**.
3. Connect your repository.
4. Set **Build Pack** to **`Dockerfile`** (Coolify auto-detects the `Dockerfile` in the root).
5. Set **Port** to `3000`.
6. Click **Deploy** — done! 🚀

> Coolify will automatically build the Docker image using the multi-stage `Dockerfile` and start the container.
