// const API_URL = process.env.REACT_APP_API_BASE_URL;
const API_URL = 'http://localhost:8080/api';

export async function getAllProfessional(query) {
  const searchUrl = !query ? `${API_URL}/professionals` : `${API_URL}/professionals${query}`;
  try {
    const response = await fetch(searchUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSingleProfessional(id) {
  try {
    const response = await fetch(`${API_URL}/professional/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createProfessional(form, data) {
  try {
    console.log(`${API_URL}/professionals`);
    const payload = {
      method: 'POST',
      headers: {
        'Content-type': 'multipart/form-data',
      },
      body: [form, JSON.stringify(data)],
    };
    const response = await fetch(`${API_URL}/professionals`, payload);
    const result = await response.json();
  } catch {
    throw new Error('Error creating professional');
  }
}
