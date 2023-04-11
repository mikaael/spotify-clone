import { ColorExtractor } from 'react-color-extractor';
import { useState } from 'react';
import { PencilIcon, UserIcon } from '@heroicons/react/24/outline';

export function PlaylistBanner({
  playlistBanner,
  playlistNameBanner,
  playlistDescription,
  playlistSize,
  playlistDuration,
}) {
  const [bgColor, setBgColor] = useState(null);
  const [name, setName] = useState('Gelipe Fomes');

  return (
    <>
      <div
        className='flex items-start py-9 px-8 w-full h-80 bg-gradient-to-b from-transparent to-neutral-900 bg-noise gap-4'
        style={{ backgroundColor: bgColor }}
      >
        <ColorExtractor
          src={playlistBanner}
          getColors={(colors) => setBgColor(colors[0])}
        />

        <div className='group relative cursor-pointer items-center justify-center overflow-hidden w-80 hover:opacity-50'>
          <div>
            <img
              src={playlistBanner}
              alt='Capa da playlist'
              className='aspect-square'
            />
          </div>

          <div className='absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0'>
            <PencilIcon className='w-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            <p className='mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold'>
              Escolher foto
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3 w-full'>
          <p className='pt-4 text-white'>Playlist</p>
          <h1 className='text-8xl font-bold text-white inline-block'>
            {playlistNameBanner}
          </h1>
          <p className='text-neutral-400'>{playlistDescription}</p>
          <div className='flex items-center gap-1'>
            <div className='flex items-center gap-2 p-1 bg-neutral-600 rounded-full w-6'>
              <UserIcon className='h-4 text-white aspect-square ' />
            </div>
            {playlistSize != 0 ? (
              <p className='text-white text-sm'>
                <a href='/' className='hover:underline'>
                  {name}
                </a>{' '}
                • 1 curtida • {playlistSize} músicas,{' '}
                <span className='text-neutral-400'>
                  {playlistDuration} min
                </span>
              </p>
            ) : (
              <p className='text-white text-sm'>
                <a href='/' className='hover:underline'>
                  {name}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
