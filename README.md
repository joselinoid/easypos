# EasyPOS

**EasyPOS** is a modern, web-based **Restaurant Point of Sale (POS)** system built to streamline daily restaurant operations.  
It provides efficient menu management, order processing, and transaction handling using a scalable and maintainable architecture.

---

## Tech Stack

### Frontend
- React.js
- Vite
- TypeScript
- Tailwind CSS
- Axios
- React Query
- Zod

### Backend
- Node.js
- Express.js
- Prisma ORM
- Zod
- JWT (JSON Web Token)

### Database
- PostgreSQL
- Redis

---

## Key Features

### Authentication & Authorization
- JWT-based authentication
- Protected API routes using authentication middleware

### Menu Management
- Menu category management
- Food & beverage menu management
    - Menu name
    - Menu price
    - Category
    - Active / inactive status

### Order Management
- Create and manage customer orders
- Support multiple items per order
- Order status handling (pending, paid, cancelled)
- Automatic total price calculation

### Transactions & Payments
- Secure order payment processing
- Transaction history tracking
- Request and response validation using Zod

### Dashboard & Monitoring
- Recent orders overview
- Daily sales summary
- Sales performance monitoring

---

## Architecture Overview

### Frontend
- Centralized API communication using Axios
- Server-state management with React Query
- Form and schema validation using Zod
- Reusable and modular UI components

### Backend
- Clean and layered architecture
- Database access via Prisma ORM
- Schema-based request validation using Zod
- Stateless authentication using JWT

---

## Highlights
- Fully typed with TypeScript
- Scalable and maintainable codebase
- Modern frontend and backend stack
- Designed for real-world restaurant operations
