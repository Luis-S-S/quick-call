const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getJobsByUserId(id) {
  try {
    const payload = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user')}`,
      },
    };
    const response = await fetch(`${API_URL}/jobs/user/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getJobById() {
  return null;
}
