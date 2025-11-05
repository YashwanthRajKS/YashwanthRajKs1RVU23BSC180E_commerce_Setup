# Simple E-commerce Backend

## Setup
1. Copy `.env.example` to `.env` and set values.
2. Run `npm install` in the backend directory.
3. Start MongoDB (local) or provide Atlas URI in `.env`.
4. Run `npm run dev` to start the server.

## Seed
Run `node seed.js` to create an admin user (admin@example.com / admin123) and sample products.

## Endpoints
- POST /api/auth/signup
- POST /api/auth/login
- GET /api/products
- POST /api/products (admin)
- GET /api/cart
- POST /api/cart/add
- POST /api/orders/checkout

