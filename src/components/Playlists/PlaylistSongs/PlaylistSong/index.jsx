import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { EllipsisHorizontalIcon, HeartIcon } from '@heroicons/react/24/outline';

import { getAuthenticatedUser } from '../../../../services/auth';
import { useSong } from '../../../../contexts/SongContext';

function getDateDifferenceFromNowInDays(date) {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 (one) day in milliseconds
  const now = new Date();

  const differenceInMilliseconds = now.getTime() - date.getTime();
  return Math.floor(differenceInMilliseconds / oneDayInMilliseconds);
}

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

export function PlaylistSong({
  index,
  songId,
  playlistId,
  title,
  authorName,
  coverUrl,
  albumTitle,
  addedAt,
  durationInSeconds,
  selected,
  toggleSelect,
}) {
  const { song, playlist, isPlaying, setIsPlaying, changeSong } = useSong();
  const authenticatedUser = getAuthenticatedUser();

  const addedAtInDays = getDateDifferenceFromNowInDays(addedAt);
  const timeDuration = getTimeFromSeconds(durationInSeconds);

  return (
    <ul
      className={`song-grid h-14 rounded transition-colors group ${
        selected ? 'bg-white/30' : 'hover:bg-white/10'
      }`}
      onClick={toggleSelect}
      onDoubleClick={async () => {
        if (authenticatedUser) {
          await changeSong(songId, playlistId);
          setIsPlaying(true);
        }
      }}
    >
      <li className='text-base relative flex items-center justify-center'>
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
              authenticatedUser ? '' : 'brightness-50 hover:cursor-not-allowed'
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
              authenticatedUser ? '' : 'brightness-50 hover:cursor-not-allowed'
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
          <p
            className={`line-clamp-1 text-ellipsis text-base transition-colors hover:underline hover:cursor-pointer ${
              songId === song.id && playlistId === playlist.id
                ? 'text-spotify-green-light'
                : 'text-white'
            }`}
          >
            {title}
          </p>
          <p
            className={`line-clamp-1 text-ellipsis transition-colors hover:underline hover:cursor-pointer ${
              selected ? 'text-white' : 'group-hover:text-white'
            }`}
          >
            {authorName}
          </p>
        </div>
      </li>
      <li
        className={`line-clamp-1 text-ellipsis hidden transition-colors hover:underline hover:cursor-pointer md:block ${
          selected ? 'text-white' : 'group-hover:text-white'
        }`}
      >
        {albumTitle}
      </li>
      <li className='line-clamp-1 text-ellipsis hidden lg:block'>
        {addedAtInDays === 0
          ? 'Hoje'
          : `há ${addedAtInDays} dia${addedAtInDays > 1 ? 's' : ''}`}
      </li>
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
