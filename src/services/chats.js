const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getChatById(id) {
  try {
    const response = fetch(`${API_URL}/chats/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

export async function createChat(body) {
  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const response = fetch(`${API_URL}/chats`, payload);
    return response;
  } catch (error) {
    return error;
  }
}

export async function updateChat(id, body) {
  try {
    const payload = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const response = fetch(`${API_URL}/chats/${id}`, payload);
    return response;
  } catch (error) {
    return error;
  }
}
