# Node.js MySQL REST API

A basic REST API for managing users with MySQL database.

## Prerequisites
- Node.js installed
- MySQL server running
- MySQL client installed

## Setup Instructions

### 1. Configure MySQL Connection
Edit `config.js` and update the connection parameters if needed:
```javascript
host: 'localhost',
user: 'root',
password: '', // Add your MySQL password here if you have one
database: 'node2026b'
```

### 2. Create Database and Table
Run the setup script to create the database and user table:
```bash
node setup.js
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Server
```bash
npm start
```

Or with auto-reload (development):
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## API Endpoints

### GET /users
Get all users
```bash
curl http://localhost:3000/users
```

### GET /users/:id
Get a specific user by ID
```bash
curl http://localhost:3000/users/1
```

### POST /users
Create a new user
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe"}'
```

### PUT /users/:id
Update a user
```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe"}'
```

### DELETE /users/:id
Delete a user
```bash
curl -X DELETE http://localhost:3000/users/1
```

## Database Schema

The `user` table has the following structure:
```sql
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
```

- `id`: Auto-incrementing primary key
- `name`: User's name (required)
