import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

export async function createDropCheckout(products: any[], metadata: Record<string, string> = {}) {
  const lineItems = products.map((p: any) => ({
    price_data: {
      currency: 'usd',
      product_data: { name: p.name || p.title || 'DropForge Empire Pack' },
      unit_amount: Math.round((p.price || 69) * 100),
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/chaos-drop`,
    metadata,
  });

  return { stripeUrl: session.url, sessionId: session.id };
}

export async function verifyStripeWebhook(body: string, sig: string) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  return stripe.webhooks.constructEvent(body, sig, webhookSecret);
}