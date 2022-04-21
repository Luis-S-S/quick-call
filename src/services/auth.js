const API_URL = process.env.REACT_APP_AUTH_BASE_URL;

export async function userLogin(body) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    // const data = await response.json();
    // return data;
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function userLogOut() {
  window.localStorage.removeItem('user');
}
