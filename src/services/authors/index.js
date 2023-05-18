import { api } from '../index';

export async function findAuthorsByIds(ids, cancelToken) {
  try {
    const response = await api.get(
      '/authors',
      { ids },
      {
        cancelToken,
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function findAuthorById(id, cancelToken) {
  try {
    const response = await api.get(`/authors/${id}`, {
      cancelToken,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
