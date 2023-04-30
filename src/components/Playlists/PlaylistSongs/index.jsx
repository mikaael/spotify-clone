import { useState } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

import './index.css';

import { PlaylistSong } from './PlaylistSong';

export function PlaylistSongs({ songs, playlistId }) {
  const [selectedSongId, setSelectedSongId] = useState(null);

  return (
    <div className='max-w-7xl text-neutral-400 px-8 py-6'>
      <ul className='song-grid bg-neutral-900 sticky z-10 top-16 h-9 mb-4 border-b border-b-white/10'>
        <li className='text-base text-center'>#</li>
        <li>Título</li>
        <li className='hidden md:block'>Álbum</li>
        <li className='hidden lg:block'>Adicionada em</li>
        <li className='hidden 2xs:block'>
          <ClockIcon className='w-5 aspect-square mx-auto' title='Duração' />
        </li>
      </ul>

      {songs &&
        songs.map(
          (
            {
              id,
              title,
              author_name,
              cover_url,
              album_title,
              added_at,
              duration_in_seconds,
            },
            index
          ) => {
            return (
              <PlaylistSong
                key={id}
                index={index}
                songId={id}
                playlistId={playlistId}
                title={title}
                authorName={author_name}
                coverUrl={cover_url}
                albumTitle={album_title}
                addedAt={new Date(added_at)}
                durationInSeconds={duration_in_seconds}
                selected={id === selectedSongId}
                toggleSelect={() => {
                  setSelectedSongId(id === selectedSongId ? null : id);
                }}
              />
            );
          }
        )}
    </div>
  );
}
