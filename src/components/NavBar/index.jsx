import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { ContextIdPlaylist } from '../../contexts/ContextIdPlaylist';

function NavBar() {
  const navigate = useNavigate();
  const { pathname: localePath } = useLocation();
  const [isHistoryPrevious, setIsHistoryPrevious] = useState(false);
  const [isHistoryNext, setIsHistoryNext] = useState(false);

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState('Gelipe Fomes');

  const { routeContext, setRouteContext } = useContext(ContextIdPlaylist);

  console.log('routeContext', routeContext);

  useEffect(() => {
    if (localePath !== '/playlists') {
      setRouteContext(localePath);
      setIsHistoryPrevious(true);
    }
    if (routeContext && localePath === '/playlists') {
      setIsHistoryNext(true);
    }
  });

  const previousPage = () => {
    if (isHistoryPrevious) navigate('/playlists');
  };

  const nextPage = () => {
    if (isHistoryNext) navigate(routeContext);
  };

  return (
    <div className='py-5 px-10 bg-black/80 fixed w-[82%] z-10 flex items-center justify-between'>
      <div className='flex gap-6'>
        <ChevronLeftIcon
          title={isHistoryPrevious && 'Voltar'}
          onClick={previousPage}
          className={`h-6 w-6 rounded-2xl ${
            isHistoryNext ? 'text-white' : 'text-gray-400'
          } bg-black/90 ${
            isHistoryNext ? 'hover:cursor-pointer' : 'hover:cursor-no-drop'
          }`}
        />
        <ChevronRightIcon
          title={isHistoryPrevious && 'Avançar'}
          onClick={nextPage}
          className={`h-6 w-6 rounded-2xl ${
            isHistoryNext ? 'text-white' : 'text-gray-400'
          } bg-black/90 ${
            isHistoryNext ? 'hover:cursor-pointer' : 'hover:cursor-no-drop'
          }`}
        />
      </div>
      {isLogged ? (
        <div className='flex items-center justify-between gap-10'>
          <Link to='https://www.spotify.com/br-pt/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=web_loggedin_upgrade_button'>
            <h3 className='font-semibold text-sm text-white border py-1 px-3 rounded-full transition-all duration-100 hover:scale-105  hover:cursor-pointer'>
              Faça upgrade
            </h3>
          </Link>
          <div
            title={name}
            className='flex items-center justify-between gap-2 p-0.5 pr-2 bg-black rounded-full hover:bg-[#282828] text-sm hover:cursor-pointer'
          >
            <div className='p-1 bg-[#525252] rounded-full'>
              <UserIcon className='aspect-square h-5' />
            </div>
            <h3 className='font-semibold text-white rounded-full transition-all duration-100'>
              {name}
            </h3>
            <span>&#9660;</span>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-between gap-10'>
          <Link to='/signup'>
            <h3 className='font-semibold text-gray-400 transition-all duration-100 hover:scale-110 hover:text-white hover:cursor-pointer'>
              Inscrever-se
            </h3>
          </Link>
          <Link to='/login'>
            <h3 className='font-semibold text-black bg-white py-2 px-6 rounded-full transition-all duration-100 hover:scale-105 hover:text-black hover:cursor-pointer'>
              Entrar
            </h3>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
