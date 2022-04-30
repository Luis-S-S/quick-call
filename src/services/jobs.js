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

export async function createJobs(body) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${API_URL}/jobs`, payload);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
