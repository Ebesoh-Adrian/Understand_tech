# Shared Resources

Common utilities, schemas, and resources used across all implementations.

## API Specification

### Term Schema
```json
{
  "id": "uuid",
  "name": "string",
  "definition": "string",
  "category": "string",
  "examples": ["string"],
  "relatedTerms": ["string"],
  "difficulty": "beginner|intermediate|advanced",
  "resources": ["url"],
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "author": "string"
}
```

### Category Schema
```json
{
  "id": "uuid",
  "name": "string",
  "description": "string",
  "icon": "string",
  "termCount": "number"
}
```

### User Schema
```json
{
  "id": "uuid",
  "email": "string",
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "role": "user|contributor|admin",
  "createdAt": "timestamp"
}
```

## API Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": "ERROR_CODE",
  "message": "Human readable message"
}
```

## Authentication

- JWT tokens for stateless authentication
- Refresh tokens for session management
- Bearer token in Authorization header

```
Authorization: Bearer <token>
```

## Rate Limiting

- 100 requests per minute for anonymous users
- 1000 requests per minute for authenticated users

## CORS

Allowed origins configured per environment.

## Pagination

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 100,
    "pages": 5
  }
}
```

## Common Error Codes

- `INVALID_REQUEST` - Bad request format
- `UNAUTHORIZED` - Missing/invalid authentication
- `FORBIDDEN` - Insufficient permissions
- `NOT_FOUND` - Resource not found
- `CONFLICT` - Resource already exists
- `INTERNAL_ERROR` - Server error

## Documentation Files

- [Environment Variables Template](./env.example)
- [Common Utilities](./utils.md)
- [Database Schema](./database-schema.md)
