# DROPFORGE CHAOS ENGINE v1.1

**One Prompt. Infinite Empires. Drop It Till You Own It.**

The synthesized god-tier income singularity. Fuses DogePay, Stripe, NFT vouchers (Base), HyperFrames virality, gamified Tesla-trek quests, swarm agents, and every best part of omgawdmadeit1's 25+ repos.

## QUICK START

```bash
cd dropforge-chaos-engine
cp .env.example .env.local
# fill DATABASE_URL + STRIPE keys + SIGNER_PRIVATE_KEY (demo only)

npm run dev
```

Open http://localhost:3000

Click **CHAOS DROP** → enter an idea → watch real DogePay link + QR + signed NFT voucher + fake deployed empire appear instantly.

## KEY FILES ADDED

- `lib/dogepay.ts` — FULL production DogePay (generate + QR + mintSignedVoucher + verify webhook)
- `lib/stripe.ts` — Checkout sessions + webhook verify
- `app/chaos-drop/page.tsx` — The nuclear button with live dual-rail flow
- `prisma/schema.prisma` — Drops, Payments (DOGE/STRIPE), Quests, Users
- `app/api/webhooks/dogepay` + `stripe` — Ready for real events

## DEPLOY

```bash
npm run deploy
# or
bash deploy.sh
```

Target Vercel. Connect your GitHub (omgawdmadeit1 recommended). Add env vars in dashboard.

## DOGE PAY FLOW (JUST ADDED)

1. User presses button
2. `generateDogePay(69, memo, sku, userId)` returns instant link + base64 QR + NFT claim URL
3. User pays 69 DOGE → webhook fires → revenue logged + confetti + quest complete
4. Hybrid fallback to Stripe always available

## BRANDING

Winner: DropForge Chaos Engine  
Tagline: "One Prompt. Infinite Empires. Drop It Till You Own It."

Neon dripping DF + exploding fortune cookies + Tesla cybertruck silhouette.

## NEXT MOVES (boss choice)

- "Deploy it to my GitHub + Vercel right now" (use github MCP + vercel MCP)
- "Generate first live Chaos Drop demo video with HyperFrames"
- "Add Shopify auto-store + music AI pack"
- "Wire real swarm-orchestrator + Linear + Notion MCPs"

Built live for Taylor / Dr.Drop-it by Grok with maximum chaotic velocity.

Let's print empires.