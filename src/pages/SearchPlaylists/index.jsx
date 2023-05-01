import { useEffect, useState } from 'react';
import { PlaylistSongsPreview } from '../../components/Playlists/PlaylistSongsPreview';
import { getSongs } from '../../services/songs';
import { findAuthorsByIds } from '../../services/authors';
import { getPlaylistsSongs } from '../../services/playlistsSongs';

export function SearchPlaylists() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const foundSongs = (await getSongs()).data;
      const authorsIds = foundSongs.map((song) => song.author_id);
      const set = new Set(authorsIds);
      const authorsIdNoRepeated = [...set.values()];
      const foundAuthors = (await findAuthorsByIds(authorsIdNoRepeated)).data;
      const foundPlaylistSongs = (await getPlaylistsSongs()).data;

      const authorNameHash = {};
      foundAuthors.forEach(
        (author) => (authorNameHash[author.id] = author.name)
      );

      const playlistIdHash = {};
      foundPlaylistSongs.forEach(
        (playlistSong) =>
          (playlistIdHash[playlistSong.song_id] = playlistSong.playlist_id)
      );

      const songsByAuthor = foundSongs.map((song) => {
        return {
          ...song,
          author_name: authorNameHash[song.author_id],
          playlist_id: playlistIdHash[song.id],
        };
      });

      setSongs(songsByAuthor);
    })();

    () => {
      setSongs([]);
    };
  }, []);

  return songs.length > 0 && <PlaylistSongsPreview songsAndAuthors={songs} />;
}
