const API_URL = 'http://localhost:3004/api';

export async function getAllUsers() {
  try {
    const response = await fetch(`${API_URL}/user`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSingleUsers(id) {
  try {
    const response = await fetch(`${API_URL}/user/${id}`);
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
    const response = await fetch(`${API_URL}/user`, payload);
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
