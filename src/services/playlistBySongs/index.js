import { api } from '../index';

export async function getPlaylistSongs(id, cancelToken) {
  try {
    const response = await api.get(`/playlists_songs`);

    return response;
  } catch (error) {
    console.error(error);
  }
}
