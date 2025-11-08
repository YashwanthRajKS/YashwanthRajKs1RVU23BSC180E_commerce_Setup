# Simple E-commerce Project

A full-stack e-commerce application with Node.js/Express backend and vanilla JavaScript frontend.

## Features

- User Authentication (JWT)
- Role-based access (Admin/User)
- Product Management (CRUD)
- Shopping Cart
- Order Processing
- Payment Integration
- Image Management

## Quick Start

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   npm install
   ```

2. Create `.env` file with:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

3. Start the server:
   ```bash
   npm start
   ```

Server runs on http://localhost:5000

### Frontend Setup

1. Open frontend/index.html in your browser
   - You can use any static file server like:
     ```bash
     npx http-server frontend -p 8000
     ```

2. Access the app at http://localhost:8000

## Admin Access

Default admin credentials:
- Email: admin@example.com
- Password: admin123

## Testing

Run test suite:
```bash
cd backend
npm test
```

## License

MIT

## Author

Yashwanth Raj KS
# 🛍️ E-Commerce API Project

## 📘 Overview
This project is a full-stack e-commerce platform with **Node.js, Express, and MongoDB** backend, and a static **HTML/CSS frontend**.

---

## 🚀 API Endpoints

| **Feature** | **Method** | **Endpoint** | **Description** | **Access** |
|--------------|-------------|---------------|-----------------|-------------|
| Signup | POST | `/api/auth/signup` | Register a new user | Public |
| Login | POST | `/api/auth/login` | Authenticate and get JWT token | Public |
| Get Users | GET | `/api/users` | Fetch all users | Admin |
| Get Products | GET | `/api/products` | Fetch all products | Public |
| Add Product | POST | `/api/products` | Add a new product | Admin |
| Update Product | PUT | `/api/products/:id` | Update product details | Admin |
| Delete Product | DELETE | `/api/products/:id` | Delete a product | Admin |
| Add to Cart | POST | `/api/cart/add` | Add a product to cart | User |
| View Cart | GET | `/api/cart` | Get user’s cart items | User |
| Checkout | POST | `/api/orders/checkout` | Place an order | User |

---

## 🗄️ Database
MongoDB database with collections:
- `users`
- `products`
- `orders`
- `cart`

---

## 👤 Seeded Accounts
| Role | Email | Password |
|------|--------|-----------|
| Admin | `admin@example.com` | `admin123` |
| User | `testuser@example.com` | `test123` |

---

