const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function paymentIntent(error, paymentMethod, amount) {
  try {
    let body;
    if (!error) {
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('user')}`,
        },
        body: JSON.stringify({
          paymentMethod,
          amount,
        }),
      };

      const response = await fetch(`${API_URL}/payments`, payload);
      body = await response.json();
    }
    return body;
  } catch (e) {
    return e;
  }
}

export async function getPaymentsByUserId(id, paymentId) {
  try {
    const payload = {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${localStorage.getItem('user')}`,
      },
    };
    const response = fetch(`${API_URL}/payments/user/${id}/payment/${paymentId}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}
