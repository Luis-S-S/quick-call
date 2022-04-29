const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function uploadImage(form) {
  try {
    const payload = {
      method: 'POST',
      body: form,
    };
    const response = await fetch(`${API_URL}/upload/image`, payload);
    const result = await response.json();
    return result;
  } catch {
    throw new Error('Error creating professional');
  }
}

export async function uploadVideo(form) {
  return form;
}
