import { NextRequest, NextResponse } from 'next/server';
import { verifyDogePayment } from '@/lib/dogepay';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { txHash, amount } = body;

  if (!txHash) {
    return NextResponse.json({ error: 'Missing txHash' }, { status: 400 });
  }

  const result = await verifyDogePayment(txHash, amount || 69);

  if (result.success) {
    console.log('[DOGEPAY WEBHOOK] Revenue confirmed:', result);
  }

  return NextResponse.json(result);
}