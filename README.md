# HER HUB

Full-stack HER HUB project with separate frontend and backend apps.

## Setup

1. Install dependencies for both apps:
   ```bash
   npm run install-all
   ```

2. Create a backend `.env` from `backend/.env.example`.

3. Start each app separately:
   ```bash
   npm run start-backend
   npm run start-frontend
   ```

## Server URLs

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5174`

## Notes

- The frontend proxy sends `/api` requests to the backend.
- User and hirer authentication are separate.
- Job posting is available for hirers.
- Homemakers can apply to jobs and update their profiles.
