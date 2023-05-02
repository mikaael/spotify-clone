import { useState } from 'react';

import { PlaylistPreviewSongs } from './PlaylistPreviewSongs';

export function PlaylistAddNewSongs({ songs, playlistId, addSongToPlaylist }) {
  const [selectedSongId, setSelectedSongId] = useState(null);

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
                addSongToPlaylist={addSongToPlaylist}
              />
            );
          })}
      </ul>
    </div>
  );
}
