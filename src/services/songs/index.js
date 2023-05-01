import { api } from '../index';

export async function getAllSongs() {
  try {
    const response = await api.get(`/songs`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function addSong(song_id, playlist_id) {
  try {
    const addedAt = new Date();

    const response = await api.post(`/playlists_songs`, {
      song_id,
      playlist_id,
      added_at: addedAt.toISOString().split('T')[0],
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteSong(playlist_song_id) {
  try {
    const response = await api.delete(`/playlists_songs/${playlist_song_id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function findPlaylistSongId(song_id, playlist_id) {
  try {
    const response = await api.get(
      `/playlists_songs?song_id=${song_id}&playlist_id=${playlist_id}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

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

export async function getSongs() {
  try {
    const response = await api.get(`/songs`);

    return response;
  } catch (error) {
    console.error(error);
  }
}
