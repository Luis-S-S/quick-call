const API_URL = 'http://localhost:3004/api';

export async function getAllUsers() {
  try {
<<<<<<< HEAD:src/Services/user.js
    const response = await fetch(`${API_URL}/user`);
=======
    const response = await fetch(`${API_URL}/users`);
>>>>>>> a49d939a1cc6d325042c2085d411ccac8a766ac1:src/Services/Usuario.js
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSingleUsers(id) {
  try {
<<<<<<< HEAD:src/Services/user.js
    const response = await fetch(`${API_URL}/user/${id}`);
=======
    const response = await fetch(`${API_URL}/users/${id}`);
>>>>>>> a49d939a1cc6d325042c2085d411ccac8a766ac1:src/Services/Usuario.js
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

<<<<<<< HEAD:src/Services/user.js
export async function createUsuarios(user) {
  console.log(user);
=======
export async function createUsers(usuario) {
>>>>>>> a49d939a1cc6d325042c2085d411ccac8a766ac1:src/Services/Usuario.js
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  try {
<<<<<<< HEAD:src/Services/user.js
    const response = await fetch(`${API_URL}/user`, payload);
=======
    const response = await fetch(`${API_URL}/users`, payload);
>>>>>>> a49d939a1cc6d325042c2085d411ccac8a766ac1:src/Services/Usuario.js
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
