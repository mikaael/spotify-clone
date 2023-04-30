import { findPlaylistSongIdsById } from '../../services/playlists';
import { getSongsByIds } from '../../services/songs';
import { findAuthorsByIds } from '../../services/authors';
import { findAlbumsByIds } from '../../services/albums';

export async function getPlaylistSongsById(id, cancelToken) {
  const songIdsResponse = await findPlaylistSongIdsById(id, cancelToken);

  if (!songIdsResponse || songIdsResponse.status !== 200) {
    return;
  }

  const { data: songIds } = songIdsResponse;

  const searchSongIds = songIds.map(({ song_id }) => song_id);
  const songResponse = await getSongsByIds(searchSongIds, cancelToken);

  if (!songResponse || songResponse.status !== 200) {
    return;
  }

  const { data: songs } = songResponse;

  const songAuthorIds = songs.map(({ author_id }) => author_id);
  const songAlbumIds = songs.map(({ album_id }) => album_id);

  const authorResponse = await findAuthorsByIds(songAuthorIds, cancelToken);

  if (!authorResponse || authorResponse.status !== 200) {
    return;
  }

  const { data: authors } = authorResponse;

  const albumResponse = await findAlbumsByIds(songAlbumIds, cancelToken);

  if (!albumResponse || albumResponse.status !== 200) {
    return;
  }

  const { data: albums } = albumResponse;

  const foundSongs = songs.map((song) => {
    return {
      id: song.id,
      album_title: albums.find(({ id }) => id === song.album_id).title,
      author_name: authors.find(({ id }) => id === song.author_id).name,
      title: song.title,
      cover_url: song.cover_url,
      audio_url: song.audio_url,
      added_at: songIds.find(({ song_id }) => song_id === song.id).added_at,
      duration_in_seconds: song.duration_in_seconds,
    };
  });

  return foundSongs;
}
