import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bars3Icon as MenuIcon,
  ChevronDownIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

import logoSpotify from '../../../assets/logos/white-spotify.svg';

import './index.css';

import { getAuthenticatedUser } from '../../../services/auth';

import { ProfileSettingsPopUp } from '../ProfileSettingsPopUp';

export function Header({ transparent }) {
  const [isProfileSettingsOpen, setIsProfileSettingsOpen] = useState(false);
  const authenticatedUser = getAuthenticatedUser();

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

        <div className='flex items-center justify-center gap-3 lg:hidden'>
          {authenticatedUser && (
            <div className='flex items-center justify-center w-8 aspect-square border-2 border-white rounded-full transition-colors hover:text-primary-green hover:border-primary-green hover:cursor-pointer'>
              <UserIcon className='w-5 aspect-square' />
            </div>
          )}

          <MenuIcon className='w-8 aspect-square transition-colors hover:cursor-pointer hover:text-primary-green' />
        </div>

        <div className='font-bold items-center gap-8 hidden lg:flex'>
          <Link className='navbar-link' to='/premium'>
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
          {authenticatedUser ? (
            <div className='relative'>
              <ProfileSettingsPopUp
                className={`-left-4 ${isProfileSettingsOpen ? '' : 'hidden'}`}
              />
              <div
                className='relative flex items-center justify-center gap-4 group hover:cursor-pointer'
                onClick={() => setIsProfileSettingsOpen(!isProfileSettingsOpen)}
              >
                <div
                  className={`flex items-center justify-center w-9 aspect-square border-2 rounded-full transition-colors ${
                    isProfileSettingsOpen
                      ? 'text-primary-green border-primary-green'
                      : 'group-hover:text-primary-green group-hover:border-primary-green'
                  } `}
                >
                  <UserIcon className='w-6 aspect-square' />
                </div>

                <div
                  className={`flex items-center justify-center gap-2 transition-colors ${
                    isProfileSettingsOpen
                      ? 'text-primary-green'
                      : 'group-hover:text-primary-green'
                  }`}
                >
                  <h3 className='font-bold'>Perfil</h3>
                  <ChevronDownIcon
                    className={`w-4 aspect-square transition-transform ${
                      isProfileSettingsOpen ? '-rotate-180' : ''
                    }`}
                  />
                </div>
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
