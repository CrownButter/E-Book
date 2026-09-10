# E-Book

Simple E-Book platform MVP.

## Stack

- Backend: Java 21, Spring Boot, Spring Data JPA, PostgreSQL
- Frontend: Next.js, React, TypeScript
- Development: Docker Compose
- Mobile: Android WebView (planned)

## Structure

```text
E-Book/
├── backend/          # Spring Boot REST API
├── frontend/         # Next.js web app
├── docker-compose.yml
└── README.md
```

## Run with Docker

```bash
docker compose up --build
```

Backend: http://localhost:8080

Frontend: run separately for now:

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:3000

## Current MVP

- Basic Spring Boot application
- PostgreSQL connection
- Book CRUD REST API at `/api/books`
- Simple Next.js landing page

## Next modules

1. Authentication
2. Book catalog and categories
3. User library
4. E-Book reader
5. Reading progress
6. Admin book management
7. Payment
