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
