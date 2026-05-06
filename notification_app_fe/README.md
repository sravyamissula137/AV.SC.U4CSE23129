# Notification Dashboard Frontend

A modern and responsive Notification Dashboard built using **Next.js App Router**, **React**, and **Material UI** for the AffordMed Frontend Assessment.

---

# Features

- View notifications dynamically from API
- Filter notifications by:
  - All
  - Placement
  - Result
  - Event
- Responsive UI for desktop and mobile
- Real-time API integration
- Logging middleware integration
- Server-side API proxy using Next.js App Router
- CORS-safe architecture
- Error handling and loading states
- Clean and modern dashboard design

---

# Tech Stack

- Next.js 16
- React
- Material UI (MUI)
- Axios
- JavaScript / TypeScript
- Next.js App Router API Routes

---

# Project Structure

```bash
notification_app_fe/
│
├── app/
│   ├── api/
│   │   ├── notifications/
│   │   └── logs/
│   ├── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── Navbar.js
│   ├── NotificationCard.js
│   ├── FilterBar.js
│   ├── Loader.js
│   ├── ErrorState.js
│   └── PaginationControls.js
│
├── services/
│   └── api.js
│
├── utils/
│   ├── logger.js
│   └── prioritySort.js
│
├── screenshots/
│
└── README.md
```

---

# API Architecture

Frontend never directly calls external APIs.

Instead:

```txt
Browser → Next.js API Routes → External API
```

This architecture:

- Prevents CORS issues
- Keeps tokens secure
- Makes the application production-ready

---

# Logging Middleware

Implemented custom reusable logging middleware with:

- stack validation
- level validation
- package validation
- API logging support

Supported levels:

- debug
- info
- warn
- error
- fatal

---

# Responsive Design

The application is fully responsive and supports:

- Desktop View
- Tablet View
- Mobile View

---

# Screenshots

## Dashboard

![Dashboard](./screenshots/Screenshot%202026-05-06%20155901.png)

---

## Placement Notifications

![Placement](./screenshots/Screenshot%202026-05-06%20160014.png)

---

## Result Notifications

![Result](./screenshots/Screenshot%202026-05-06%20160024.png)

---

## Event Notifications

![Event](./screenshots/Screenshot%202026-05-06%20160041.png)

---

## Mobile Responsive View

![Mobile](./screenshots/Screenshot%202026-05-06%20160033.png)

---

# Installation

Clone repository:

```bash
git clone <your-github-repo-link>
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

# Environment Variables

Create:

```txt
.env.local
```

Add:

```env
NEXT_PUBLIC_API_BASE_URL=http://20.207.122.201/evaluation-service
NEXT_PUBLIC_AUTH_TOKEN=YOUR_TOKEN
```

---

# Author

### Sravya Missula

Frontend Assessment Submission — AffordMed