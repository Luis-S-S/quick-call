const API_URL = 'https://quick-call-back.herokuapp.com/api'; // Actualizar a 3004 antes del pull && localmente (luis) solo sirve en 8080

export async function getAllPro() {
  try {
    const response = await fetch(`${API_URL}/professional`);
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
