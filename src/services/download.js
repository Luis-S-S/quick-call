export const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function downloadJobPdf(job) {
  try {
    const payload = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user')}`,
      },
    };
    const response = await fetch(`${API_URL}/download/job/${job._id}`, payload);
    return response;
  } catch (error) {
    throw new Error('Error downloading job pdf');
  }
}

export async function downloadClientPdf() {
  return null;
}
