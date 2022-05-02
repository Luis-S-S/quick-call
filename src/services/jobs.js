const API_URL = process.env.REACT_APP_API_BASE_URL;

let payload = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('user')}`,
  },
};

export async function getJobsByUserId(id) {
  try {
    const response = await fetch(`${API_URL}/jobs/user/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getJobById(id) {
  try {
    const response = await fetch(`${API_URL}/jobs/id/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function updateJobById(id, body) {
  payload = { ...payload, body, method: 'POST' };
  try {
    const response = await fetch(`${API_URL}/jobs/id/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function createJobs(body) {
  payload = { ...payload, body, method: 'POST' };
  try {
    const response = await fetch(`${API_URL}/jobs`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
