const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getAllClientExperience() {
  try {
    const response = await fetch(`${API_URL}/clients-experiences`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export function something() {
  return true;
}
export function somethingElse() {
  return true;
}
