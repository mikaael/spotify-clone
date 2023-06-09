import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from '@heroicons/react/24/solid';
import {
  MagnifyingGlassIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

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

  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const searchRef = useRef();

  const authenticatedUser = getAuthenticatedUser();
  const { routeContext, setRouteContext } = usePlaylistId();
  const { setSearchContext } = usePlaylistSearch();

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
    const searchText = searchRef.current.value;

    setSearchContext(searchText.trim());
    setIsSearchEmpty(!searchText);

    if (localePath !== '/search') {
      navigate('/search');
    }
  }

  function handleClearSearch() {
    searchRef.current.value = '';
    setSearchContext('');
    setIsSearchEmpty(true);
  }

  const previousPage = () => {
    if (isHistoryPrevious) navigate('/');
  };

  const nextPage = () => {
    if (isHistoryNext) navigate(routeContext);
  };

  return (
    <div className='w-full bg-neutral-900 max-h-16 sticky top-0 py-4 px-8 z-20 flex items-center justify-between gap-4'>
      <ul className='w-full flex gap-4 items-center sm:w-auto'>
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
        <li className='grow max-w-[20rem] xl:w-[20rem]'>
          <div className='relative'>
            <MagnifyingGlassIcon className='h-6 aspect-square text-black pointer-events-none absolute left-3 top-2' />
            <XMarkIcon
              className={`h-6 aspect-square absolute right-3 top-2 hover:cursor-pointer ${
                isSearchEmpty ? 'hidden' : ''
              }`}
              onClick={handleClearSearch}
            />

            <input
              type='text'
              name='searchPlaylist'
              ref={searchRef}
              onChange={handleSearch}
              className='text-sm w-full rounded-full border-0 py-2.5 px-10 text-black bg-white placeholder:text-neutral-600'
              placeholder='O que você quer ouvir?'
            />
          </div>
        </li>
      </ul>

      <div className='hidden items-center justify-between gap-4 2xs:gap-8 sm:flex'>
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
