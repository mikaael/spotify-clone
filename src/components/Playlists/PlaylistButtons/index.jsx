import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { HeartIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

import { getAuthenticatedUser } from '../../../services/auth';
import { useSong } from '../../../contexts/SongContext';

export function PlaylistButtons({ playlistId, playlistTitle, firstSongId }) {
  const authenticatedUser = getAuthenticatedUser();
  const { playlist, isPlaying, setIsPlaying, changeSong } = useSong();

  return (
    <div className='flex justify-center items-center mx-8 my-6 2xs:justify-start'>
      <div
        className={`text-black bg-spotify-green-light mr-8 p-3.5 rounded-full  ${
          authenticatedUser
            ? 'transition-all hover:scale-105 hover:brightness-105 hover:cursor-pointer'
            : 'brightness-50 hover:cursor-not-allowed'
        } `}
        onClick={() => {
          if (authenticatedUser) {
            if (firstSongId && playlistId !== playlist.id) {
              changeSong(firstSongId, playlistId);
            }

            setIsPlaying(!(isPlaying && playlistId === playlist.id));
          }
        }}
      >
        {isPlaying && playlistId === playlist.id ? (
          <PauseIcon className='w-7 aspect-square' />
        ) : (
          <PlayIcon className='w-7 aspect-square' />
        )}
      </div>
      <HeartIcon
        className={`text-white/70 w-9 aspect-square mr-6 transition-colors ${
          authenticatedUser
            ? 'hover:text-white'
            : 'brightness-50 hover:cursor-not-allowed'
        }`}
        title='Salvar na Sua Biblioteca'
      />
      <EllipsisHorizontalIcon
        className={`text-white/60 w-9 aspect-square transition-colors ${
          authenticatedUser
            ? 'hover:text-white'
            : 'brightness-50 hover:cursor-not-allowed'
        }`}
        title={`Mais opções para ${playlistTitle}`}
      />
    </div>
  );
}
