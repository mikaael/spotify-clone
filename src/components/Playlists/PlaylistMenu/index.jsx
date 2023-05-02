import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import logoSpotify from '../../../assets/logos/white-spotify.svg';

import { PlaylistMenuItem } from './PlaylistMenuItem';

import { createPlaylist } from '../../../services/playlists';
import { getAuthenticatedUser } from '../../../services/auth';
import { usePersonalPlaylists } from '../../../contexts/PersonalPlaylistsContext';

export function PlaylistMenu() {
  const { personalPlaylists, setPersonalPlaylists } = usePersonalPlaylists();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  async function createNewPlaylist() {
    const cancelToken = axios.CancelToken.source();
    const newPlaylist = {
      creator_id: getAuthenticatedUser().id,
      title: `Minha Playlist N° ${personalPlaylists.length + 1}`,
      description: 'Conte mais sobre a sua playlist!',
      cover_url: '',
    };

    const createdPlaylistResponse = await createPlaylist(
      newPlaylist,
      cancelToken.token
    );

    if (!createdPlaylistResponse) {
      return;
    }

    const { data: createdPlaylist } = createdPlaylistResponse;

    setPersonalPlaylists((previous) => [...previous, createdPlaylist]);
    navigate(`/${createdPlaylist.id}`);
  }

  return (
    <div className='bg-black min-h-screen hidden min-w-[16rem] w-64 z-10 fixed left-0 top-0 md:block'>
      <div className='px-6 py-4 flex flex-col gap-8'>
        <Link to='/' className='text-2xl font-semibold w-32 flex items-center'>
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
            <PlaylistMenuItem
              title='Buscar'
              icon='Search'
              href='/search'
              active={pathname === '/search'}
            />
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
          <li onClick={createNewPlaylist}>
            <PlaylistMenuItem title='Criar Playlist' icon='CreatePlaylist' />
          </li>
          <li>
            <PlaylistMenuItem title='Músicas Curtidas' icon='LikedSongs' />
          </li>
        </ul>
      </div>

      <div className='text-neutral-400 border-t mx-6 border-neutral-700 pt-2 flex flex-col text-xs gap-y-3 font-semibold h-28 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-600 hover:scrollbar-thumb-neutral-500 scrollbar-track-black'>
        {personalPlaylists.map(({ id, title }) => {
          return (
            <Link key={id} to={`/${id}`}>
              <div className='hover:text-white cursor-pointer'>{title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
