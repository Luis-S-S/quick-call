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

export async function createProfessional(data) {
  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${API_URL}/professionals`, payload);
    const datas = await response.json();
    return datas;
  } catch {
    throw new Error('Error creating professional');
  }
}

export async function editProfessional(id, body) {
  try {
    const payload = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user')}`,
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(`${API_URL}/professionals/${id}`, payload);
    return response;
  } catch {
    throw new Error('Error creating professional');
  }
}
