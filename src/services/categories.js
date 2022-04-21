const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function allCategories() {
  try {
    const response = await fetch(`${API_URL}/categories/all`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function categories(filter, type) {
  try {
    let response = await fetch(`${API_URL}/categories?filter=${filter}`);
    if (type) {
      response = await fetch(`${API_URL}/categories?filter=${filter}&type=${type}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createCategories() {
  try {
    const response = await fetch(`${API_URL}/professional`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
