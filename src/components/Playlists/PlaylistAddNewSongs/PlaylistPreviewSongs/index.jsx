import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { PlusIcon } from '@heroicons/react/24/outline';

import { useSong } from '../../../../contexts/SongContext';
import { useUpdatePlaylist } from '../../../../contexts/UpdatePlaylistContext';

import { getAuthenticatedUser } from '../../../../services/auth';
import { addSong } from '../../../../services/songs';

export function PlaylistPreviewSongs({
  selected,
  toggleSelect,
  songId,
  title,
  authorName,
  coverUrl,
  albumTitle,
  playlistId,
}) {
  const { song, isPlaying, setIsPlaying, changeSong } = useSong();
  const { setUpdatePlaylist } = useUpdatePlaylist();
  const authenticatedUser = getAuthenticatedUser();

  async function handleAddSong() {
    if (authenticatedUser) {
      await addSong(songId, playlistId);
      setUpdatePlaylist((previous) => !previous);
    }
  }

  return (
    <ul
      className={`h-14 pl-2 pr-4 rounded transition-colors group items-center justify-between grid grid-cols-[1fr_auto] md:grid-cols-[4fr_2fr_auto] ${
        selected ? 'bg-white/30' : 'hover:bg-white/10'
      }`}
      onClick={toggleSelect}
      onDoubleClick={async () => {
        if (authenticatedUser) {
          await changeSong(songId);
          setIsPlaying(true);
        }
      }}
    >
      <ul className='flex gap-4'>
        <li className='flex items-center gap-4 relative'>
          {isPlaying && songId === song.id ? (
            <PauseIcon
              className={`hidden text-white w-5 aspect-square absolute z-20 left-2.5 group-hover:block ${
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
              className={`hidden text-white w-5 aspect-square absolute z-20 left-2.5 group-hover:block ${
                authenticatedUser
                  ? ''
                  : 'brightness-50 hover:cursor-not-allowed'
              }`}
              title={`Tocar ${title} de ${authorName}`}
              onClick={async () => {
                if (authenticatedUser) {
                  await changeSong(songId);
                  setIsPlaying(true);
                }
              }}
            />
          )}

          <img
            src={coverUrl}
            alt={`Capa da música ${title}`}
            className='w-10 aspect-square group-hover:opacity-30'
          />
        </li>

        <li>
          <p
            className={`line-clamp-1 text-ellipsis text-base transition-colors hover:underline hover:cursor-pointer ${
              songId === song.id ? 'text-spotify-green-light' : 'text-white'
            }`}
          >
            {title}
          </p>
          <p
            className={`line-clamp-1 text-ellipsis  transition-colors hover:underline hover:cursor-pointer ${
              selected ? 'text-white' : 'group-hover:text-white'
            }`}
          >
            {authorName}
          </p>
        </li>
      </ul>

      <li
        className={`line-clamp-1 text-ellipsis hidden transition-colors hover:underline hover:cursor-pointer md:block ${
          selected ? 'text-white' : 'group-hover:text-white'
        }`}
      >
        {albumTitle}
      </li>

      <li>
        <button
          onClick={handleAddSong}
          className='text-sm bg-transparent hover:scale-105 text-white font-bold hover:text-white p-1 border border-neutral-500 rounded-full xs:py-1.5 xs:px-4 hover:border-white'
        >
          <PlusIcon
            className='w-6 aspect-square xs:hidden'
            title={`Adicionar ${title} de ${authorName}`}
          />
          <span
            className='hidden xs:block'
            title={`Adicionar ${title} de ${authorName}`}
          >
            Adicionar
          </span>
        </button>
      </li>
    </ul>
  );
}
