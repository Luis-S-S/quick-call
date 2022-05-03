const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getJobsByUserId(id) {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('user')}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/jobs/user/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getJobById(id) {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('user')}`,
    },
  };

  try {
    const response = await fetch(`${API_URL}/jobs/id/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function updateJobById(id, body) {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('user')}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(`${API_URL}/jobs/id/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function createJobs(body) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('user')}`,
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
