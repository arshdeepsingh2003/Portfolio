# API Documentation

## Status
The MVP does not expose or require active API endpoints. All portfolio project catalogues, skills, and about details are stored and loaded statically from local TypeScript data files (`src/data/`).

The Python + FastAPI backend is preserved as an optional architectural component located in `backend/` for explicitly approved future server-side functionality.

## Core Boundaries
- **Database:** None. The backend must not connect to or configure a database, ORM, or persistent storage.
- **Admin Panel:** None. No admin routes or content management APIs.
- **Authentication:** None required.
- **Contact:** MVP uses direct links (`mailto:`, GitHub, LinkedIn). No contact form backend is deployed in the initial release.

## Future Candidate Endpoints (Deferred)
If a server-side contact form is approved in a future phase, it will adhere to the following contract without adding persistent storage:

### `POST /api/v1/contact` (Optional Future Endpoint)
Contact submission proxy that forwards inquiries to an approved email delivery service.
- **Input:** JSON payload validated via Pydantic (`name`, `email`, `message`).
- **Validation:** String length bounds, email format validation, and rate limiting / spam protection.
- **Persistence:** **None**. Messages are dispatched directly via external email service; never stored in a database.
- **Responses:**
  - `200 OK`: Dispatched successfully.
  - `422 Unprocessable Entity`: Input validation failure.
  - `429 Too Many Requests`: Rate limit exceeded.
  - `502 / 503`: Email dispatch provider failure.

## Conventions (For Future Backend Code)
- **Base URL:** `http://localhost:8000` for local development.
- **Format:** JSON request/response with strict Pydantic models.
- **CORS:** Restrict allowed origins strictly to the frontend origin.
- **Errors:** Standard HTTP status codes with clean user-safe error messages; never leak internal stack traces.
