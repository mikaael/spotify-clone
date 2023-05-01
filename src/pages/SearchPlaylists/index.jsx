import { useEffect, useState } from 'react';
import { usePlaylistSearch } from '../../contexts/SearchContext';
import { PlaylistSongsPreview } from '../../components/Playlists/PlaylistSongsPreview';
import { getSongs } from '../../services/songs';
import { findAuthorsByIds } from '../../services/authors';
import { getPlaylistSongs } from '../../services/playlistBySongs';

export function SearchPlaylists() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const foundSongs = (await getSongs()).data;
      const authorsIds = foundSongs.map((song) => song.author_id);
      const set = new Set(authorsIds);
      const authorsIdNoRepeated = [...set.values()];
      const foundAuthors = (await findAuthorsByIds(authorsIdNoRepeated)).data;
      const foundPlaylistSongs = (await getPlaylistSongs()).data;

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
  }, []);

  return songs.length > 0 && <PlaylistSongsPreview songsAndAuthors={songs} />;
}
