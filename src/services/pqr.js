const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getAllPQRs() {
  try {
    const response = await fetch(`${API_URL}/PQRS`);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getPQRByPetitioner(petitionerId) {
  try {
    const payload = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user')}`,
      },
    };
    const response = await fetch(`${API_URL}/PQRS/petitioner/${petitionerId}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}
