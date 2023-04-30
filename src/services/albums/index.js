import { api } from '../index';

export async function findAlbumsByIds(ids, cancelToken) {
  try {
    const response = await api.get(`/albums?id=${ids.join('&id=')}`, {
      cancelToken,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function findAlbumById(id, cancelToken) {
  try {
    const response = await api.get(`/albums/${id}`, {
      cancelToken,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
