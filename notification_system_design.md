# Notification System Design

## Overview

This project is a Notification Dashboard system built using:

- Next.js App Router
- React
- Material UI
- Axios
- Custom Logging Middleware

The application fetches notifications from external APIs and displays them in a clean and responsive dashboard UI.

---

# Architecture

```txt
Browser
   ↓
Next.js Frontend
   ↓
Next.js API Routes (Proxy Layer)
   ↓
External AffordMed API
```

---

# Why Proxy API Routes Were Used

Direct frontend API calls caused:

- CORS issues
- Network errors
- Security concerns for tokens

To solve this:

- Next.js API Routes were implemented
- All external requests happen server-side
- Tokens remain secure
- Browser only communicates with localhost APIs

---

# Notification Flow

1. User opens dashboard
2. Frontend calls:
   ```txt
   /api/notifications
   ```

3. Next.js API route forwards request to:
   ```txt
   http://20.207.122.201/evaluation-service
   ```

4. Notifications are returned to frontend
5. Notifications are sorted and displayed

---

# Logging Middleware Design

Custom reusable logging middleware was created.

Supported:

- frontend stack
- info/error/warn/debug/fatal levels
- package validation

Example:

```js
Log("frontend", "info", "api", "Fetching notifications");
```

Logs are forwarded using:

```txt
/api/logs
```

which internally proxies to the external logging API.

---

# Features Implemented

- Notification Dashboard
- Category Filtering
- Placement Notifications
- Result Notifications
- Event Notifications
- Pagination
- Error Handling
- Loading State
- Responsive Design
- API Proxy Layer
- Logging Middleware
- Material UI Components

---

# Responsive Design

The application supports:

- Desktop devices
- Tablets
- Mobile devices

Responsive layouts were implemented using Material UI.

---

# Security Improvements

- Tokens hidden from frontend
- External APIs never directly exposed
- Server-side request handling implemented

---

# Conclusion

The system is scalable, secure, responsive, and production-ready.

The project successfully demonstrates:

- frontend architecture
- API integration
- middleware logging
- clean UI design
- error handling
- responsive development