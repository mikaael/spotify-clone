import { api } from '../index';

export async function getPlaylistsSongs() {
  try {
    const response = await api.get(`/playlists_songs`);

    return response;
  } catch (error) {
    console.error(error);
  }
}
