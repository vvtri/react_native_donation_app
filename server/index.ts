import express, { json, Request, Response } from 'express';
import dotenv from 'dotenv';
import { stripe } from './configs/stripe';
import Stripe from 'stripe';

dotenv.config();

const app = express();

app.use(json());

app.post('/create-payment-intent', async (req: Request, res: Response) => {
  try {
    const { currency, email, amount } = req.body;
    console.log('req.body', req.body);
    const customer = await stripe.customers.create({ email });

    const params: Stripe.PaymentIntentCreateParams = {
      currency,
      amount,
      customer: customer.id,
      payment_method_options: {
        card: { request_three_d_secure: 'automatic' },
      },
      payment_method_types: [],
    };

    const { client_secret } = await stripe.paymentIntents.create(params);

    return res.send({ clientSecret: client_secret });
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      return res.send({ error: (error.raw as any).message });
    }
  }
});

app.listen(5000, () => {
  console.log('server listening at 5000');
});
