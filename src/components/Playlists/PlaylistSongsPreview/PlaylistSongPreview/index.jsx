import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import {
  EllipsisHorizontalIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

import { getAuthenticatedUser } from '../../../../services/auth';
import { useSong } from '../../../../contexts/SongContext';
import { Link } from 'react-router-dom';

function getTimeFromSeconds(durationInSeconds) {
  const timeInMilliseconds = durationInSeconds * 1000;
  const timeDuration = new Date(timeInMilliseconds);

  const options = {
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
  };

  if (durationInSeconds >= 60 * 60) {
    options.hour = 'numeric';
  }

  return timeDuration.toLocaleTimeString('pt-BR', options);
}

export function PlaylistSongPreview({
  index,
  songId,
  playlistId,
  title,
  authorName,
  coverUrl,
  durationInSeconds,
  selected,
  toggleSelect,
}) {
  const { song, playlist, isPlaying, setIsPlaying, changeSong } = useSong();
  const authenticatedUser = getAuthenticatedUser();

  const timeDuration = getTimeFromSeconds(durationInSeconds);

  return (
    <ul
      className={`h-14 rounded transition-colors group ${
        selected ? 'bg-white/30' : 'hover:bg-white/10'
      } flex items-center justify-between pl-4 pr-4`}
      onClick={toggleSelect}
      onDoubleClick={async () => {
        if (authenticatedUser) {
          await changeSong(songId, playlistId);
          setIsPlaying(true);
        }
      }}
    >
      <div className='flex items-center justify-center gap-4'>
        <li className='text-base relative flex items-center justify-center w-6'>
          <p
            className={`group-hover:hidden ${
              songId === song.id && playlist.id === playlistId
                ? 'text-spotify-green-light'
                : ''
            }`}
          >
            {index + 1}
          </p>
          {isPlaying && songId === song.id && playlistId === playlist.id ? (
            <PauseIcon
              className={`hidden text-white w-5 aspect-square group-hover:block ${
                authenticatedUser
                  ? ''
                  : 'brightness-50 hover:cursor-not-allowed'
              }`}
              title={`Tocar ${title} de ${authorName}`}
              onClick={async () => {
                if (authenticatedUser) {
                  setIsPlaying(false);
                }
              }}
            />
          ) : (
            <PlayIcon
              className={`hidden text-white w-5 aspect-square group-hover:block ${
                authenticatedUser
                  ? ''
                  : 'brightness-50 hover:cursor-not-allowed'
              }`}
              title={`Tocar ${title} de ${authorName}`}
              onClick={async () => {
                if (authenticatedUser) {
                  await changeSong(songId, playlistId);
                  setIsPlaying(true);
                }
              }}
            />
          )}
        </li>
        <li className='flex items-center gap-4'>
          <img
            src={coverUrl}
            alt={`Capa da música ${title}`}
            className='w-10 aspect-square'
          />
          <div>
            <Link
              to={`/${playlistId}`}
              className={`line-clamp-1 text-ellipsis text-base transition-colors hover:underline hover:cursor-pointer ${
                songId === song.id && playlistId === playlist.id
                  ? 'text-spotify-green-light'
                  : 'text-white'
              }`}
            >
              {title}
            </Link>
            <p
              className={`line-clamp-1 text-ellipsis transition-colors hover:underline hover:cursor-pointer ${
                selected ? 'text-white' : 'group-hover:text-white'
              }`}
            >
              {authorName}
            </p>
          </div>
        </li>
      </div>
      <li className='hidden 2xs:grid 2xs:items-center 2xs:justify-center 2xs:grid-cols-[20px_1fr_20px] 2xs:gap-4'>
        <HeartIcon
          className={`opacity-0 w-5 aspect-square group-hover:opacity-100 ${
            authenticatedUser
              ? 'transition-all hover:text-white'
              : 'brightness-50 hover:cursor-not-allowed'
          }`}
          title='Salvar na Sua Biblioteca'
        />
        <p className='text-center'>{timeDuration}</p>
        <EllipsisHorizontalIcon
          className={`opacity-0 w-5 aspect-square group-hover:opacity-100 ${
            authenticatedUser
              ? 'transition-all hover:text-white'
              : 'brightness-50 hover:cursor-not-allowed'
          }`}
          title={`Mais opções para ${title} de ${authorName}`}
        />
      </li>
    </ul>
  );
}
