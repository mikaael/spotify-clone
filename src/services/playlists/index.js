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

export async function createPlaylist({ creator_id, title, description, cover_url }, cancelToken) {
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

export async function editPlaylist(id, data, cancelToken) {
  try {
    const response = await api.patch(`/playlists/${id}`, {
      ...data
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

export async function findPlaylistsByCreatorId(id, cancelToken) {
  try {
    const response = await api.get(`/playlists?creator_id=${id}`, {
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
