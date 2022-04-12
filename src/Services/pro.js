const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getAllPro(query) {
  const searchUrl = !query ? `${API_URL}/professionals` : `${API_URL}/professionals${query}`;
  console.log('new search: ', searchUrl);
  try {
    const response = await fetch(searchUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSinglePro(id) {
  try {
    const response = await fetch(`${API_URL}/professional/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export function somethingElse() {
  return true;
}
