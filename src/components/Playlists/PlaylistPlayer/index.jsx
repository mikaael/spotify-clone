import { useState, useEffect } from 'react';
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

import { playlists } from '../../../__mocks__/playlists';

import { useSong } from '../../../contexts/SongContext';

export function PlaylistPlayer() {
  const [playlistInfo, setPlaylistInfo] = useState(null);
  const [songInfo, setSongInfo] = useState(null);

  const {
    audio,
    setSong,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
    playingSong,
  } = useSong();

  useEffect(() => {
    const pausedMusic = () => {
      const currentPlaylist = playlists.find(
        (_, index) => index === playingSong.playlistId
      );

      if (!currentPlaylist) {
        return;
      }

      const currentSong = currentPlaylist.songs.find(
        (_, index) => index === playingSong.id
      );

      if (!currentSong) {
        return;
      }

      if (audio.src.split('/').pop() !== currentSong.music.split('/').pop()) {
        audio.src = currentSong.music;
        audio.load();
      }

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      audio.muted = isMuted;

      setPlaylistInfo(currentPlaylist);
      setSongInfo(currentSong);
    };

    playingSong.id !== null && pausedMusic();
  }, [playingSong, isPlaying, isMuted]);

  return (
    <div className='text-neutral-400 bg-neutral-900 w-full h-[5.625rem] grid grid-cols-3 items-center justify-between px-4 border-t border-t-neutral-800 fixed bottom-0 z-20'>
      <div className='flex items-center gap-3'>
        <Link to=''>
          <img
            src={songInfo?.cover}
            alt={
              songInfo ? `Capa de ${songInfo.name} de ${songInfo.author}` : ''
            }
            className='w-14'
          />
        </Link>
        <div className='max-w-[10rem]'>
          <p className='text-white text-sm whitespace-nowrap overflow-x-hidden text-ellipsis hover:underline hover:cursor-pointer'>
            {songInfo?.name}
          </p>
          <p className='text-xs whitespace-nowrap overflow-x-hidden text-ellipsis transition-colors hover:text-white hover:underline hover:cursor-pointer'>
            {songInfo?.author}
          </p>
        </div>
        <HeartIcon
          className='w-5 aspect-square transition-colors hover:text-white'
          title='Salvar na Sua Biblioteca'
        />
      </div>

      <div className='flex items-center justify-center gap-4'>
        <BackwardIcon
          className={`w-6 aspect-square transition-colors ${
            playingSong.id === 0
              ? 'hover:cursor-not-allowed'
              : 'hover:text-white'
          }`}
          title='Voltar'
          onClick={() => {
            if (playlistInfo && playingSong.id > 0) {
              setSong({
                id: playingSong.id - 1,
                playlistId: playingSong.playlistId,
              });
            }
          }}
        />
        {isPlaying ? (
          <PauseCircleIcon
            className='text-white w-10 aspect-square transition-transform hover:scale-105 active:scale-95'
            title='Pausar'
            onClick={() => setIsPlaying(false)}
          />
        ) : (
          <PlayCircleIcon
            className='text-white w-10 aspect-square transition-transform hover:scale-105 active:scale-95'
            title='Tocar'
            onClick={() => setIsPlaying(true)}
          />
        )}
        <ForwardIcon
          className={`w-6 aspect-square transition-colors ${
            playlistInfo && playingSong.id === playlistInfo.songs.length - 1
              ? 'hover:cursor-not-allowed'
              : 'hover:text-white'
          }`}
          title='Avançar'
          onClick={() => {
            if (
              playlistInfo &&
              playingSong.id < playlistInfo.songs.length - 1
            ) {
              setSong({
                id: playingSong.id + 1,
                playlistId: playingSong.playlistId,
              });
            }
          }}
        />
      </div>

      <div className='flex items-center justify-end'>
        {isMuted ? (
          <SpeakerXMarkIcon
            className='w-5 aspect-square transition-colors hover:text-white'
            title='Com som'
            onClick={() => setIsMuted(false)}
          />
        ) : (
          <SpeakerWaveIcon
            className='w-5 aspect-square transition-colors hover:text-white'
            title='Mudo'
            onClick={() => setIsMuted(true)}
          />
        )}
      </div>
    </div>
  );
}
