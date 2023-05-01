import { Link } from 'react-router-dom';

import {
  HeartIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/outline';
import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/solid';

import { useSong } from '../../../contexts/SongContext';

export function PlaylistPlayer() {
  const {
    song,
    playlist,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
    changeSong,
    getSongPlaylistIndex,
  } = useSong();

  return (
    <div className='text-neutral-400 bg-neutral-900 w-full h-[5.625rem] grid grid-cols-3 items-center justify-between px-4 border-t border-t-neutral-800 fixed bottom-0 z-20'>
      {song.id ? (
        <div className='flex items-center gap-3'>
          <Link to='' className='hidden sm:block'>
            <img
              src={song.cover_url}
              alt={`Capa de ${song.name} de ${song.author}`}
              className='w-14'
            />
          </Link>

          <div className='max-w-[10rem]'>
            <p className='text-white text-sm whitespace-nowrap overflow-x-hidden text-ellipsis hover:underline hover:cursor-pointer'>
              {song.title}
            </p>
            <p className='text-xs whitespace-nowrap overflow-x-hidden text-ellipsis transition-colors hover:text-white hover:underline hover:cursor-pointer'>
              {song.author}
            </p>
          </div>
          <HeartIcon
            className='hidden w-5 aspect-square transition-colors hover:text-white 2xs:block'
            title='Salvar na Sua Biblioteca'
          />
        </div>
      ) : (
        <span></span>
      )}

      <div className='flex items-center justify-center gap-4'>
        <BackwardIcon
          className={`w-6 aspect-square transition-colors ${
            playlist.id && song.id && getSongPlaylistIndex() > 0
              ? 'hover:text-white'
              : 'hover:cursor-not-allowed'
          }`}
          title='Voltar'
          onClick={() => {
            if (playlist.id && song.id && getSongPlaylistIndex() > 0) {
              changeSong(song.id - 1, playlist.id);
            }
          }}
        />
        {isPlaying ? (
          <PauseCircleIcon
            className={`w-10 aspect-square ${
              song.id
                ? 'text-white transition-transform hover:scale-105 active:scale-95'
                : 'hover:cursor-not-allowed'
            }`}
            title='Pausar'
            onClick={() => {
              if (song.id) {
                setIsPlaying(false);
              }
            }}
          />
        ) : (
          <PlayCircleIcon
            className={`w-10 aspect-square ${
              song.id
                ? 'text-white transition-transform hover:scale-105 active:scale-95'
                : 'hover:cursor-not-allowed'
            }`}
            title='Tocar'
            onClick={() => {
              if (song.id) {
                setIsPlaying(true);
              }
            }}
          />
        )}
        <ForwardIcon
          className={`w-6 aspect-square transition-colors ${
            playlist.id &&
            song.id &&
            getSongPlaylistIndex() < playlist.song_ids.length - 1
              ? 'hover:text-white'
              : 'hover:cursor-not-allowed'
          }`}
          title='Avançar'
          onClick={() => {
            if (
              playlist.id &&
              song.id &&
              getSongPlaylistIndex() < playlist.song_ids.length - 1
            ) {
              changeSong(song.id + 1, playlist.id);
            }
          }}
        />
      </div>

      <div className='flex items-center justify-end'>
        {isMuted ? (
          <SpeakerXMarkIcon
            className={`w-5 aspect-square transition-colors ${
              song.id ? 'hover:text-white' : 'hover:cursor-not-allowed'
            }`}
            title='Com som'
            onClick={() => {
              if (song.id) {
                setIsMuted(false);
              }
            }}
          />
        ) : (
          <SpeakerWaveIcon
            className={`w-5 aspect-square transition-colors ${
              song.id ? 'hover:text-white' : 'hover:cursor-not-allowed'
            }`}
            title='Mudo'
            onClick={() => {
              if (song.id) {
                setIsMuted(true);
              }
            }}
          />
        )}
      </div>
    </div>
  );
}
