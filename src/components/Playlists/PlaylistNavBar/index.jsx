import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';

import { getAuthenticatedUser } from '../../../services/auth';
import { usePlaylistId } from '../../../contexts/PlaylistIdContext';
import { usePlaylistSearch } from '../../../contexts/SearchContext';

import { ProfileSettingsPopUp } from '../../Global/ProfileSettingsPopUp';

export function PlaylistNavBar() {
  const navigate = useNavigate();
  const { pathname: localePath } = useLocation();

  const [isHistoryPrevious, setIsHistoryPrevious] = useState(false);
  const [isHistoryNext, setIsHistoryNext] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const searchRef = useRef();

  const authenticatedUser = getAuthenticatedUser();
  const { routeContext, setRouteContext } = usePlaylistId();
  const { searchContext, setSearchContext } = usePlaylistSearch();

  useEffect(() => {
    if (localePath !== '/') {
      setRouteContext(localePath);
      setIsHistoryPrevious(true);
    }
    if (routeContext && localePath === '/') {
      setIsHistoryNext(true);
    }
  });

  function handleSearch() {
    setSearchContext(searchRef.current.value);
  }

  const previousPage = () => {
    if (isHistoryPrevious) navigate('/');
  };

  const nextPage = () => {
    if (isHistoryNext) navigate(routeContext);
  };

  return (
    <div className='w-full bg-neutral-900 max-h-16 sticky top-0 py-4 px-8 z-20 flex items-center justify-between gap-4'>
      <ul className='flex gap-4 items-center'>
        <li className='bg-black/70 p-1 rounded-full'>
          <ChevronLeftIcon
            title={isHistoryPrevious && 'Voltar'}
            onClick={previousPage}
            className={`h-6 ${
              isHistoryPrevious
                ? 'text-white hover:cursor-pointer'
                : 'text-gray-400 hover:cursor-no-drop'
            } `}
          />
        </li>
        <li className='bg-black/70 p-1 rounded-full'>
          <ChevronRightIcon
            title={isHistoryNext && 'Avançar'}
            onClick={nextPage}
            className={`h-6 ${
              isHistoryNext
                ? 'text-white hover:cursor-pointer'
                : 'text-gray-400 hover:cursor-no-drop'
            } `}
          />
        </li>
        <li>
          {localePath == '/search' && (
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 -left-1 flex items-center pl-3'>
                <span className='text-gray-500'>
                  <MagnifyingGlassIcon className='h-4 text-white' />
                </span>
              </div>
              <input
                type='text'
                name='searchPlaylist'
                ref={searchRef}
                onChange={handleSearch}
                className='w-full rounded-full border-0 py-3 pl-7 pr-32 text-white bg-neutral-800 placeholder:text-gray-40 sm:text-sm sm:leading-6'
                placeholder='O que você quer ouvir?'
              />
            </div>
          )}
        </li>
      </ul>

      <div className='flex items-center justify-between gap-4 2xs:gap-8'>
        {authenticatedUser ? (
          <>
            <Link
              to='/premium'
              className='text-white text-sm text-center font-bold border border-neutral-500 py-1 px-2 rounded-full transition-all hover:border-white hover:scale-105 hover:cursor-pointer 2xs:px-4'
            >
              Faça upgrade
            </Link>

            <div className='relative'>
              <ProfileSettingsPopUp
                className={`-left-1 ${isSettingsOpen ? '' : 'hidden'}`}
              />
              <div
                title={authenticatedUser.username}
                className='text-white text-sm text-center bg-black flex items-center justify-center gap-1 p-0.5 pr-2 rounded-full hover:bg-neutral-800 hover:cursor-pointer 2xs:gap-2'
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              >
                <div className='p-1 bg-neutral-600 rounded-full'>
                  <UserIcon className='aspect-square h-5' />
                </div>
                <h3 className='font-semibold text-white rounded-full transition-all duration-100'>
                  {authenticatedUser.username}
                </h3>
                <PlayIcon
                  className={`w-3 rotate-90 transition-transform ${
                    isSettingsOpen ? '-rotate-90' : ''
                  }`}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to='/signup'>
              <h3 className='text-gray-400 text-sm font-bold text-center whitespace-nowrap transition-all hover:scale-105 hover:text-white hover:cursor-pointer 2xs:text-base'>
                Inscrever-se
              </h3>
            </Link>
            <Link to='/login'>
              <h3 className='text-black text-sm font-bold text-center bg-white py-3 px-6 rounded-full transition-all hover:bg-neutral-100 hover:scale-105 hover:cursor-pointer 2xs:text-base 2xs:px-8'>
                Entrar
              </h3>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
