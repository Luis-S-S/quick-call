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

export async function deleteImage(publicId) {
  try {
    const payload = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user')}`,
      },
    };
    const response = await fetch(`${API_URL}/upload/image/${publicId}`, payload);
    return response;
  } catch (error) {
    throw new Error('Error deleting image');
  }
}
