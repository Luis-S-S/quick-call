const API_URL = 'http://localhost:3004/api';

export async function getAllUsuarios() {
  try {
    const response = await fetch(`${API_URL}/Usuarios`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSingleUsuarios(id) {
  try {
    const response = await fetch(`${API_URL}/Usuarios/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createUsuarios(usuario) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application.json',
    },
    body: JSON.stringify(usuario),
  };
  try {
    const response = await fetch(`${API_URL}/Usuarios`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUsuarios(id, usuario) {
  return { id, ...usuario };
}

export async function deleteUsuarios(id) {
  return id;
}
