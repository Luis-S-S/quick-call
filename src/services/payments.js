const API_URL = process.env.REACT_APP_API_BASE_URL;

// export default async function payments(error, paymentMethod, amount) {
//   try {
//     if (!error) {
//       const payload = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('user')}`,
//         },
//         body: JSON.stringify({
//           paymentMethod,
//           amount, // cents -> $100
//         }),
//       };

//       const response = await fetch(`${API_URL}/payments`, payload);
//       const body = await response.json();
//     }
//     return body;
//   } catch (e) {
//     return e;
//   }
// }
export default async function payments(error, paymentMethod, amount) {
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
          amount, // cents -> $100
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
