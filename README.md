# Node + Express + Vercel

Ready-to-deploy Express API for Vercel.

## Local

```bash
npm install
npm start
```

Open:
- http://localhost:3000/
- http://localhost:3000/api/health

## GitHub Actions deployment

1. Create a Vercel token.
2. In GitHub:
   Settings → Secrets and variables → Actions
3. Add:
   `VERCEL_TOKEN`
4. Push to the `main` branch.

The GitHub Action will automatically deploy to Vercel.
