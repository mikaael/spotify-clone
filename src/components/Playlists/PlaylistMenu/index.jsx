import { Link, useLocation } from 'react-router-dom';

import logoSpotify from '../../../assets/logos/white-spotify.svg';

import { PlaylistMenuItem } from './PlaylistMenuItem';

export function PlaylistMenu() {
  const { pathname } = useLocation();

  return (
    <div className='bg-black min-h-screen hidden min-w-[16rem] w-64 z-10 fixed left-0 top-0 md:block'>
      <div className='p-6 flex flex-col gap-8'>
        <Link
          to='/'
          className='text-2xl font-semibold w-32 flex items-center'
        >
          <img
            src={logoSpotify}
            alt='Logo do Spotify'
            title='Spotify'
            className='w-[8.25rem]'
          />
        </Link>

        <ul className='flex flex-col gap-4'>
          <li>
            <PlaylistMenuItem
              title='Início'
              icon='Home'
              active={pathname === '/'}
              href='/'
            />
          </li>
          <li>
            <PlaylistMenuItem title='Buscar' icon='Search' href='/search' />
          </li>
          <li>
            <PlaylistMenuItem title='Sua Biblioteca' icon='Library' />
          </li>
        </ul>

        <ul className='flex flex-col gap-4'>
          <li>
            <PlaylistMenuItem title='Premium' icon='Star' href='/premium' />
          </li>
          <li>
            <PlaylistMenuItem title='Suporte' icon='Wrench' href='/support' />
          </li>
        </ul>

        <ul className='flex flex-col gap-4'>
          <li>
            <PlaylistMenuItem title='Criar Playlist' icon='CreatePlaylist' />
          </li>
          <li>
            <PlaylistMenuItem title='Músicas Curtidas' icon='LikedSongs' />
          </li>
        </ul>
      </div>
    </div>
  );
}
