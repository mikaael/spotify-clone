import { api } from '../index';

export async function findAlbumsByIds(ids, cancelToken) {
  try {
    // const response = await api.get(`/albums?id=${ids.join('&id=')}`, {
    //   cancelToken,
    // });

    // return response;

    return {
      status: 200,
      data: [
        {
          id: 1,
          author_id: 1,
          title: 'BE',
        },
      ],
    };
  } catch (error) {
    console.error(error);
  }
}

export async function findAlbumById(id, cancelToken) {
  try {
    // const response = await api.get(`/albums/${id}`, {
    //   cancelToken,
    // });

    // return response;

    return {
      status: 200,
      data: {
        id: 1,
        author_id: 1,
        title: 'BE',
      },
    };
  } catch (error) {
    console.error(error);
  }
}
