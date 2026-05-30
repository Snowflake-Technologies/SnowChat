# ❄️ SnowChat

> The next-generation open-source communication platform.

SnowChat is a modern, community-focused chat platform inspired by Discord, built from the ground up using React, TypeScript, Node.js, Prisma, PostgreSQL, and Socket.IO.

The goal of SnowChat is to provide a fast, scalable, and highly customizable communication experience for communities, friend groups, gaming teams, development teams, and organizations.

Unlike traditional chat platforms, SnowChat is being designed as an open-source ecosystem where developers can contribute, extend functionality, build integrations, and help shape the future of the platform.

### ✨ Planned Features

- 💬 Real-time messaging
- 🏠 Servers & channels
- 👥 Friends & direct messages
- 🔒 Secure authentication
- 🎭 Roles & permissions
- 📨 Invite system
- 😊 Reactions & emojis
- 📁 File sharing
- 🎤 Voice channels
- 📹 Video calls
- 🖥️ Screen sharing
- 🔔 Smart notifications
- 🔎 Powerful search
- 🤖 Bot & plugin platform
- 📱 Mobile support
- 🌐 Public developer API

### 🚧 Development Status

SnowChat is currently in active development.

Many systems are already being built, including authentication, server management, channels, messaging, Socket.IO integration, and database architecture. However, the project is not yet feature-complete and should be considered an experimental work in progress.

The long-term vision is to create a modern, open-source alternative to proprietary communication platforms while maintaining excellent performance, security, and user experience.

---

⚠️ **Important:** SnowChat is currently not production-ready. Features, APIs, database structures, and UI components may change significantly during development.

# ❄️ SnowChat

> A modern, open-source communication platform inspired by Discord, built with React, TypeScript, Node.js, Prisma, PostgreSQL, and Socket.IO.

SnowChat aims to provide everything you expect from a modern chat platform:

* 💬 Real-time messaging
* 🏠 Servers & channels
* 👥 Friends & direct messages
* 🔒 Secure authentication
* 🎤 Voice & video channels
* 📁 File sharing
* 🎭 Roles & permissions
* ⚡ Modern, fast, scalable architecture

---

# 🚧 Project Status

> **SnowChat is currently under active development and is NOT feature-complete.**

Many core systems are already planned or partially implemented, but SnowChat is **not ready for production use**.

Current state:

```text
✅ Authentication foundation
✅ Server creation foundation
✅ Channel system foundation
✅ Messaging foundation
✅ React frontend setup
✅ Express backend setup
✅ Prisma integration
✅ Socket.IO integration

🚧 User profiles
🚧 Direct messages
🚧 Friends system
🚧 Roles & permissions
🚧 Voice channels
🚧 Video calls
🚧 Notifications
🚧 File uploads
🚧 Search
🚧 Mobile support

❌ Not production ready yet
```

---

# 📸 Screenshots

Create a folder:

```text
assets/screenshots/
```

Example:

```text
assets/
└── screenshots/
    ├── login.png
    ├── register.png
    ├── dashboard.png
```

Then display them:

```md
## Login

![Login](assets/screenshots/login.png)

## Register

![Register](assets/screenshots/register.png)

## Chat

![Chat](assets/screenshots/dashboard.png)
```

---

# 🏗️ Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Zustand
* Axios
* Socket.IO Client
* React Router

## Backend

* Node.js
* Express
* TypeScript
* Prisma ORM
* PostgreSQL
* Socket.IO

## Tooling

* Git
* GitHub
* npm
* Docker (planned)

---

# 📂 Repository Structure

```text
SnowChat/
│
├── apps/
│   │
│   ├── api/
│   │   ├── prisma/
│   │   ├── src/
│   │   └── package.json
│   │
│   └── web/
│       ├── src/
│       └── package.json
│
├── packages/
│
├── docs/
│
└── README.md
```

---

# ⚙️ Prerequisites

Install:

### Node.js

Download:

[Node.js](https://nodejs.org?utm_source=chatgpt.com)

Recommended:

```text
Node.js 20+
```

---

### PostgreSQL

Download:

[PostgreSQL](https://www.postgresql.org/download/?utm_source=chatgpt.com)

Recommended:

```text
PostgreSQL 15+
```

---

### Git

Download:

[Git](https://git-scm.com/downloads?utm_source=chatgpt.com)

---

# 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/SnowChat.git

cd SnowChat
```

---

## Install Backend Dependencies

```bash
cd apps/api

npm install
```

---

## Install Frontend Dependencies

```bash
cd ../web

npm install
```

---

# 🗄️ Database Setup

Create PostgreSQL database:

```sql
CREATE DATABASE snowchat;
```

---

## Configure Environment Variables

Create:

```text
apps/api/.env
```

Example:

```env
PORT=3001

JWT_SECRET=change-this-secret

DATABASE_URL="postgresql://postgres:password@localhost:5432/snowchat"

CLIENT_URL=http://localhost:5173
```

---

# Prisma Setup

Generate Prisma client:

```bash
cd apps/api

npx prisma generate
```

---

Run migrations:

```bash
npx prisma migrate dev --name init
```

---

Open Prisma Studio:

```bash
npx prisma studio
```

---

# ▶️ Running SnowChat

## Start Backend

```bash
cd apps/api

npm run dev
```

Expected:

```text
❄️ SnowChat API running on 3001
```

---

## Start Frontend

```bash
cd apps/web

npm run dev
```

Expected:

```text
Local: http://localhost:5173
```

---

# 🔌 OAuth Setup (GitHub Login)

SnowChat plans to support OAuth providers.

## GitHub OAuth

Create an OAuth App:

[GitHub Developer Settings](https://github.com/settings/developers?utm_source=chatgpt.com)

### Homepage URL

```text
http://localhost:5173
```

### Callback URL

```text
http://localhost:3001/auth/github/callback
```

---

Save:

```env
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

---

## Google OAuth

Create credentials:

[Google Cloud Console](https://console.cloud.google.com?utm_source=chatgpt.com)

Callback:

```text
http://localhost:3001/auth/google/callback
```

---

## Discord OAuth

Create application:

[Discord Developer Portal](https://discord.com/developers/applications?utm_source=chatgpt.com)

Callback:

```text
http://localhost:3001/auth/discord/callback
```

---

# 🗺️ Roadmap

## Phase 1

```text
Authentication
Servers
Channels
Messaging
```

## Phase 2

```text
Profiles
Settings
Friends
Direct Messages
```

## Phase 3

```text
Roles
Permissions
Moderation
Invites
```

## Phase 4

```text
Voice Channels
Video Calls
Screen Sharing
```

## Phase 5

```text
Bots
Plugins
Developer API
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit changes

```bash
git commit -m "Add amazing feature"
```

4. Push

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

# 🐛 Reporting Issues

Please use GitHub Issues for:

* Bugs
* Security concerns
* Feature requests
* Suggestions

---

# 📜 License

Choose a license and add it to the repository.

Recommended:

```text
MIT License
```

Generate one at:

[Choose a License](https://choosealicense.com?utm_source=chatgpt.com)

---

# ❄️ SnowChat Vision

SnowChat's goal is to become a modern, community-driven communication platform that combines the best parts of Discord with an open, extensible architecture.

This repository represents an ongoing learning and development project. Features will continue to evolve, APIs may change, and breaking changes may occur until a stable release is reached.

---

**Built with ❤️ by the SnowChat community.**
