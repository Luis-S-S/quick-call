const API_URL = 'http://localhost:8080/api';

export default async function payments(error, paymentMethod, amount) {
  if (!error) {
    console.log('Payment Method Created!', paymentMethod);

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentMethod,
        amount, // cents -> $100
      }),
    };

    const response = await fetch(`${API_URL}/payments`, payload);
    const body = await response.json();
    console.log('Response from server:', body);
  } else {
    console.log('Payment Method Error!', error);
  }
}
