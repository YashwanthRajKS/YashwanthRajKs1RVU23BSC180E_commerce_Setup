# Simple E-commerce Project (Full ZIP)
This archive contains a simple Node/Express/MongoDB backend and a minimal frontend (index.html)
to demo products, cart, and checkout.

Quick start (development):

```powershell
# Backend
cd backend
npm install
# Start MongoDB (local) if needed, then:
npm run dev

# Frontend (static)
cd ..\frontend
npm install -g http-server    # if you don't have it already
http-server -p 8000

# Seed DB (if needed)
cd ..\backend
node seed.js

# Optional: run smoke tests
npm run smoke-test
```

See `backend/README.md` for more backend-specific notes.
