import axios from 'axios';

export const createPayment = async (email: string, amount: number) => {
  const { data } = await axios.post<{ clientSecret: string }>(
    'http://10.0.2.2:5000/create-payment-intent',
    { email, amount: amount * 100, currency: 'USD' },
  );

  return data.clientSecret;
};
