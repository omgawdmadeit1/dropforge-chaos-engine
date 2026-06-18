#!/bin/bash
# DropForge one-click deploy
set -e

echo "⚡ DROPFORGE CHAOS ENGINE — DEPLOY"
echo ""

if [ ! -f .env ]; then
  echo "Copy .env.example → .env and fill values first."
  exit 1
fi

echo "→ Prisma push..."
npx prisma generate
npx prisma db push --skip-generate

echo "→ Building + Vercel deploy..."
npm run build
vercel --prod --yes --name dropforge-chaos-engine

echo ""
echo "🔥 LIVE. Now go press CHAOS DROP on the real domain."
echo "Tag @OmgawdMadeit when the first 69 DOGE hits."