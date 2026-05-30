# ❄️ SnowChat Rebuild Project

## The Next-Generation Community Platform

### Overview

SnowChat is a modern communication platform inspired by Discord but redesigned with a stronger focus on customization, community progression, performance, and developer extensibility.

The goal is not to clone Discord feature-for-feature, but to build a platform that supports:

* Real-time messaging
* Community servers
* Direct messages
* Voice and video communication
* Rich profiles
* Moderation systems
* Developer APIs
* Plugin ecosystem
* Community progression

---

# Core Philosophy

SnowChat is built around five principles:

1. Fast
2. Customizable
3. Secure
4. Community-driven
5. Developer-friendly

---

# Platform Architecture

```text
Frontend
├── Web App
├── Mobile App
└── Desktop App

Backend
├── API Gateway
├── Authentication Service
├── Chat Service
├── Voice Service
├── Media Service
└── Notification Service

Database
├── PostgreSQL
├── Redis
└── Object Storage
```

---

# Recommended Technology Stack

## Frontend

```text
React
TypeScript
Vite
TailwindCSS
Socket.IO Client
```

## Backend

```text
Node.js
Express
TypeScript
Socket.IO
```

## Database

```text
PostgreSQL
Redis
Prisma ORM
```

## File Storage

```text
Cloudflare R2
AWS S3
```

---

# User System

## User Features

* Registration
* Login
* Password Reset
* Two-Factor Authentication
* Avatar Upload
* Profile Banner
* Custom Status
* Bio
* Presence System

## User Schema

```ts
User {
  id: string
  username: string
  email: string
  passwordHash: string
  avatar: string
  banner: string
  bio: string
  status: string
  createdAt: Date
}
```

---

# Authentication

## Registration Flow

```text
User Registers
 ↓
Validate Input
 ↓
Hash Password
 ↓
Create Account
 ↓
Send Verification Email
```

## Login Flow

```text
Login
 ↓
Verify Password
 ↓
Generate JWT
 ↓
Create Session
 ↓
Connect To Gateway
```

---

# Community Servers

SnowChat replaces the term "Guild" or "Server" with:

```text
FrostHub
```

Each FrostHub contains:

* Members
* Channels
* Roles
* Permissions
* Events
* Voice Rooms

## FrostHub Schema

```ts
FrostHub {
  id: string
  name: string
  icon: string
  ownerId: string
  inviteCode: string
  memberCount: number
}
```

---

# Invite Code System

Every FrostHub receives a unique code.

Example:

```text
SNOW-8A7F2D
```

Generation:

```ts
function generateInviteCode() {
  return (
    "SNOW-" +
    Math.random()
      .toString(36)
      .substring(2,8)
      .toUpperCase()
  );
}
```

---

# Milestone Invite Upgrades

At member milestones:

```text
25 Members
100 Members
500 Members
1000 Members
```

The FrostHub unlocks:

* Custom Invite URLs
* Vanity Codes
* Animated Banners
* Advanced Analytics

Example:

```text
snowchat.gg/gaming
```

instead of:

```text
snowchat.gg/SNOW-8A7F2D
```

---

# Channels

## Channel Types

### Text Channel

```text
#general
#gaming
#announcements
```

### Voice Room

```text
🎤 General VC
🎤 Gaming VC
```

### Stage Room

```text
📢 Community Talks
```

### Forum Channel

```text
📚 Support Forum
```

---

# Direct Messages

SnowChat renames DMs to:

```text
SnowLines
```

Features:

* One-to-one messaging
* Group messaging
* Voice calls
* Video calls
* File sharing

---

# Messaging System

## Features

* Reactions
* Replies
* Threads
* Mentions
* Message Editing
* Message Deletion
* Attachments
* Embeds

## Message Schema

```ts
Message {
  id: string
  authorId: string
  channelId: string
  content: string
  edited: boolean
  createdAt: Date
}
```

---

# Real-Time Communication

Socket.IO Rooms

```ts
socket.join(channelId);

io.to(channelId).emit(
  "message",
  message
);
```

This ensures only users inside a channel receive channel messages.

---

# Roles & Permissions

## Default Roles

```text
Founder
Administrator
Moderator
Member
Visitor
```

Permissions:

```text
Manage FrostHub
Manage Channels
Manage Roles
Kick Members
Ban Members
Manage Messages
```

---

# Moderation System

## Features

* Timeouts
* Kicks
* Bans
* Slowmode
* Word Filters
* Anti-Spam
* Audit Logs

Audit Log Schema:

```ts
AuditLog {
  id: string
  action: string
  moderatorId: string
  targetId: string
  timestamp: Date
}
```

---

# Friends System

SnowChat renames Friends to:

```text
Connections
```

Features:

* Send Request
* Accept Request
* Block User
* Remove Connection

---

# Presence System

Statuses:

```text
Online
Idle
Do Not Disturb
Invisible
Offline
```

Custom statuses supported.

---

# Notifications

Types:

```text
Mentions
Replies
Friend Requests
Invites
Direct Messages
```

---

# Voice & Video

Recommended Technology:

```text
WebRTC
LiveKit
mediasoup
```

Features:

* Voice Rooms
* Video Calls
* Screen Sharing
* Push-To-Talk
* Noise Suppression

---

# Settings System

## User Settings

* Profile
* Privacy
* Notifications
* Appearance
* Accessibility
* Keybinds

## FrostHub Settings

* Overview
* Members
* Roles
* Invites
* Channels
* Integrations
* Audit Logs

---

# Community Progression

Unique SnowChat feature.

Each FrostHub earns XP based on:

* Messages
* Active Members
* Events
* Voice Activity

Unlocks:

```text
Level 1 - Custom Emoji
Level 5 - Animated Banner
Level 10 - Vanity URL
Level 20 - Partner Status
```

---

# Developer Platform

Public API

```http
POST /api/auth/register
POST /api/auth/login

POST /api/frosthubs
GET /api/frosthubs/:id

POST /api/channels
GET /api/channels/:id

POST /api/messages
GET /api/messages/:channelId
```

---

# Plugin System

Future support:

```text
Moderation Plugins
Music Plugins
Analytics Plugins
Community Plugins
```

Developers can create custom extensions using the SnowChat SDK.

---

# Development Roadmap

Phase 1

* Authentication
* Profiles
* Real-Time Messaging

Phase 2

* FrostHubs
* Channels
* Invite Codes

Phase 3

* SnowLines (DMs)
* Connections
* Notifications

Phase 4

* Roles
* Permissions
* Moderation

Phase 5

* Voice Rooms
* Video Calls
* Screen Sharing

Phase 6

* Mobile Apps
* Plugin System
* Public API

---

# Long-Term Vision

SnowChat aims to become a modern, scalable communication platform focused on communities, creators, developers, and gamers while maintaining a clean and extensible architecture.
