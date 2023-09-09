import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY as string;

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-08-16',
  typescript: true,
  appInfo: {
    name: 'tri/donation-app',
  },
});
