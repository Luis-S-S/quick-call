const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getAllUsers() {
  try {
    const response = await fetch(`${API_URL}/clients`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSingleUsers(id) {
  try {
    const response = await fetch(`${API_URL}/clients/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createUsuarios(user) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  try {
    const response = await fetch(`${API_URL}/clients`, payload);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUsers(id, usuario) {
  return { id, ...usuario };
}

export async function deleteUsers(id) {
  return id;
}
