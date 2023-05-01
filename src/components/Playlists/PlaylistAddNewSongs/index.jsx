import { useEffect, useState } from 'react';

import { PlaylistPreviewSongs } from './PlaylistPreviewSongs';

import { getAllSongs } from '../../../services/songs';
import { findAuthorsByIds } from '../../../services/authors';
import { findAlbumsByIds } from '../../../services/albums';
import { findPlaylistSongIdsById } from '../../../services/playlists';

export function PlaylistAddNewSongs({ playlistId }) {
  const [songs, setSongs] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getAllSongs();
      const data = await response.data;

      const authorSong = data.map(({ author_id }) => author_id);
      const albumSong = data.map(({ album_id }) => album_id);

      const { data: responseAuthor } = await findAuthorsByIds(authorSong);
      const { data: responseAlbum } = await findAlbumsByIds(albumSong);

      const { data: songsExistsInTheAlbum } = await findPlaylistSongIdsById(
        playlistId
      );
      const idsCannotPlaceInPlaylist = songsExistsInTheAlbum.map(
        ({ song_id }) => song_id
      );

      const songsWithAuthor = data
        .map((song) => {
          return {
            author_name: responseAuthor.find(
              (author) => author.id === song.author_id
            ).name,
            album_title: responseAlbum.find(
              (album) => album.id === song.album_id
            ).title,
            ...song,
          };
        })
        .filter(({ id }) => !idsCannotPlaceInPlaylist.includes(id));

      setSongs(songsWithAuthor);
    })();
  }, []);

  return (
    <div className='max-w-7xl px-8 py-6 flex flex-col gap-3 text-neutral-400'>
      <h2 className='text-white font-bold text-2xl'>Recomendações:</h2>
      <p className='text-neutral-400 text-sm'>
        Com base no que está nesta playlist:
      </p>
      <ul className='flex flex-col'>
        {songs.length > 0 &&
          songs.map(({ id, author_name, title, cover_url, album_title }) => {
            return (
              <PlaylistPreviewSongs
                key={id}
                playlistId={playlistId}
                authorName={author_name}
                coverUrl={cover_url}
                albumTitle={album_title}
                songId={id}
                title={title}
                selected={id === selectedSongId}
                toggleSelect={() => {
                  setSelectedSongId(id === selectedSongId ? null : id);
                }}
              />
            );
          })}
      </ul>
    </div>
  );
}
