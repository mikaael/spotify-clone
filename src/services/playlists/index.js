import { api } from '../index';

export async function getPlaylists(cancelToken) {
  try {
    const response = await api.get('/playlists', {
      cancelToken,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlaylist(cancelToken, { creator_id, title, description, cover_url }) {
  try {
    const response = await api.post('/playlists', {
      creator_id,
      title,
      description,
      cover_url
    }, {
      cancelToken
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function findPlaylistById(id, cancelToken) {
  try {
    const response = await api.get(`/playlists/${id}`, {
      cancelToken,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function findPlaylistSongIdsById(id, cancelToken) {
  try {
    const response = await api.get(`/playlists_songs?playlist_id=${id}`, {
      cancelToken,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}