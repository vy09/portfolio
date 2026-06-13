# Portfolio REST API Documentation

This document serves as the conceptual "Dashboard" to overview everything we've built, mapping out all available endpoints for the Frontend to consume.

## Base URL

`http://localhost:5000/api`

---

## 1. Authentication (`/auth`)

### Login

- **Endpoint**: `POST /auth/login`
- **Access**: Public
- **Body**:
  ```json
  {
    "email": "admin@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**: `200 OK` (Returns `accessToken` & `refreshToken`)

---

## 2. Dashboard Analytics (`/dashboard`)

### Get General Statistics

- **Endpoint**: `GET /dashboard/statistics`
- **Access**: Private (Admin Only) - Requires `Bearer Token`
- **Response**: `200 OK`
  ```json
  {
    "success": true,
    "message": "Dashboard statistics retrieved successfully",
    "data": {
      "totalProjects": 5,
      "totalSkills": 12,
      "totalCertifications": 3,
      "totalMessages": 20,
      "unreadMessages": 2
    }
  }
  ```

---

## 3. Projects (`/projects`)

- **Get All**: `GET /projects` (Public)
- **Get Specific**: `GET /projects/:id` (Public)
- **Create New**: `POST /projects` (Admin)
  ```json
  {
    "title": "Portfolio Backend",
    "description": "Express + Supabase Backend",
    "technologies": ["Node.js", "Express", "Prisma"],
    "isFeatured": true
  }
  ```
- **Update**: `PUT /projects/:id` (Admin)
- **Delete**: `DELETE /projects/:id` (Admin)

---

## 4. Skills (`/skills`)

- **Get All**: `GET /skills` (Public)
- **Create**: `POST /skills` (Admin)
  ```json
  {
    "name": "Node.js",
    "category": "Backend",
    "percentage": 90
  }
  ```
- **Update**: `PUT /skills/:id` (Admin)
- **Delete**: `DELETE /skills/:id` (Admin)

---

## 5. Contact Messages (`/contacts`)

- **Send Message**: `POST /contacts` (Public) - For visitors
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Freelance work",
    "message": "Hi, I need a backend developer."
  }
  ```
- **Get All Messages**: `GET /contacts` (Admin)
- **Mark as Read**: `PATCH /contacts/:id/read` (Admin)
- **Delete Message**: `DELETE /contacts/:id` (Admin)

---

## Error Handling Format (Global)

```json
{
  "success": false,
  "message": "Validation Failed",
  "errors": [{ "field": "email", "message": "Must be a valid email format" }]
}
```
