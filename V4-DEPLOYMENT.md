# V4 Deployment

## Local test
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Vercel
1. Push to GitHub
2. Import repo into Vercel
3. Add env vars from `.env.example`
4. Add custom domain `card.jrtoolsusa.com`
5. Deploy

## Production persistence
V4 includes a local JSON store for fast testing.
For live durable storage:
- create a Supabase `leads` table
- swap `lib/lead-store.ts` to Supabase methods
- keep dashboard UI as-is
