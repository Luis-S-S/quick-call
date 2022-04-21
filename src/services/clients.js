const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getAllClients() {
  try {
    const response = await fetch(`${API_URL}/clients`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSingleClient(id) {
  try {
    const response = await fetch(`${API_URL}/clients/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createClient(body) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${API_URL}/clients`, payload);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateClient(id, body) {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${API_URL}/clients/${id}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteClient(id) {
  return id;
}
