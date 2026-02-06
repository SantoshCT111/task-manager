# Task Manager API

A simple Task Manager REST API built to understand how all the components of a backend application work together.

## Project Purpose

This project was created as a learning exercise to understand the architecture and flow of a Node.js backend application, specifically how the following components interact:

```
Client Request → Server → Middleware → Router → Controller → Service → Database
```

## Architecture Overview

### 1. Server (`index.js`)
The entry point of the application. It:
- Initializes the Express application
- Configures middleware
- Mounts route handlers
- Starts listening for incoming HTTP requests

### 2. Middleware (`middleware/logger.js`)
Functions that execute during the request-response cycle. They can:
- Log incoming requests
- Authenticate users
- Parse request bodies
- Handle errors

### 3. Router (`routes/taskRoutes.js`)
Defines the API endpoints and maps HTTP methods (GET, POST, PUT, DELETE) to specific controller functions. It organizes routes by resource.

### 4. Controller (`controllers/taskController.js`)
Handles the incoming requests and sends responses. It:
- Receives requests from routes
- Validates input data
- Calls appropriate service methods
- Sends HTTP responses back to the client

### 5. Service (`services/taskService.js`)
Contains the business logic of the application. It:
- Implements core functionality
- Interacts with the database through Prisma
- Keeps controllers thin and focused on HTTP concerns

### 6. Database (Prisma + PostgreSQL)
- **Prisma Schema** (`prisma/schema.prisma`): Defines the data models
- **Prisma Client**: ORM for database operations
- **PostgreSQL**: The relational database (hosted on Supabase)

## Data Flow Example

When a client makes a request to get all tasks:

1. **Server** receives the HTTP request
2. **Middleware** logs the request details
3. **Router** matches the URL and directs to the controller
4. **Controller** calls the service method
5. **Service** uses Prisma to query the database
6. **Database** returns the data
7. Response flows back through the layers to the client

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: PostgreSQL (Supabase)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in `.env`:
   ```
   DATABASE_URL="your-postgresql-connection-string"
   ```

3. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

4. Start the server:
   ```bash
   node index.js
   ```

## Key Learnings

- **Separation of Concerns**: Each layer has a specific responsibility
- **Modularity**: Components can be modified independently
- **Maintainability**: Clean architecture makes code easier to understand and maintain
- **Scalability**: Well-structured code is easier to scale
