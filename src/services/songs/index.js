import { api } from '../index';

export async function getSongsByIds(ids, cancelToken) {
  try {
    const response = await api.get(`/songs?id=${ids.join('&id=')}`, {
      cancelToken,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function findSongById(id, cancelToken) {
  try {
    const response = await api.get(`/songs/${id}`, {
      cancelToken,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
