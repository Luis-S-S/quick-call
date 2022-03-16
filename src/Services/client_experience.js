const API_URL = 'http://localhost:3004/api'; // Actualizar a 3004 antes del pull && localmente (luis) solo sirve en 8080

export async function GetAllClientExperience() {
  try {
    const response = await fetch(`${API_URL}/client_experience`);
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
