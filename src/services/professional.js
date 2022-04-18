const API_URL = process.env.REACT_APP_API_BASE_URL;

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
    const response = await fetch(`${API_URL}/professionals/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export function createProfessional(form) {
  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    };
    const response = fetch(`${API_URL}/professionals`, payload);
    return response;
  } catch {
    throw new Error('Error creating professional');
  }
}
