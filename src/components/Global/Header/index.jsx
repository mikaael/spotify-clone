import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bars3Icon as MenuIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import logoSpotify from '../../../assets/logos/white-spotify.svg';

import './index.css';

export function Header({ transparent }) {
  const [isLoged, setIsLoged] = useState(true);

  return (
    <nav className={`text-white ${transparent ? '' : 'bg-black'} w-full`}>
      <div className='max-w-4.5xl flex items-center justify-between mx-auto px-4 py-3 lg:py-5 xl:max-w-6xl'>
        <Link to='/' title='Spotify'>
          <img
            src={logoSpotify}
            alt='Logo Spotify'
            className='w-[5.625rem] lg:w-[8.25rem]'
          />
        </Link>

        <div>
          <MenuIcon className='w-8 aspect-square transition-colors hover:cursor-pointer hover:text-primary-green lg:hidden' />
        </div>

        <div className='font-bold items-center gap-8 hidden lg:flex'>
          <Link className='navbar-link' to='/'>
            Premium
          </Link>
          <Link className='navbar-link' to='/support'>
            Suporte
          </Link>
          <Link
            className='navbar-link'
            to='https://www.spotify.com/br-pt/download/windows/'
          >
            Baixar
          </Link>
          <span>|</span>
          {isLoged ? (
            <div className='gap-4 hidden lg:flex items-center justify-center navbar-link'>
              <UserCircleIcon className='aspect-square w-11' />
              <div className='lg:flex gap-2 items-center justify-center '>
                <h3 className='font-bold'>Perfil</h3>
                <ChevronDownIcon className='aspect-square w-4' />
              </div>
            </div>
          ) : (
            <>
              <Link className='navbar-link text-neutral-300' to='/signup'>
                Inscrever-se
              </Link>
              <Link className='navbar-link text-neutral-300' to='/login'>
                Entrar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
