# API Documentation Specification

Base URL: `http://localhost:5000/api/v1`

## Health Monitoring

### `GET /health`
Returns system status, service name, version, and server uptime.

**Response (200 OK)**:
```json
{
  "status": "UP",
  "timestamp": "2026-07-30T00:00:00.000Z",
  "service": "portfolio-backend",
  "version": "1.0.0",
  "uptime": 124.5
}
```

---

## GitHub Dashboard

### `GET /github/dashboard`
Fetches complete GitHub analytics dataset including contribution heatmaps, commit velocity, recent pushes, language statistics, and pinned repositories.

**Query Parameters**:
- `username` (optional): Override GitHub username.

---

## Contact Submissions

### `POST /contact`
Submits a validated contact message to the database.

**Request Body**:
```json
{
  "name": "Jane Smith",
  "email": "jane@enterprise.com",
  "subject": "Architecture Consultation",
  "message": "We would like to discuss cloud infrastructure advisory."
}
```

**Response (201 Created)**:
```json
{
  "success": true,
  "data": {
    "message": "Thank you for reaching out! Your message has been received successfully.",
    "submissionId": "uuid-here"
  }
}
```
