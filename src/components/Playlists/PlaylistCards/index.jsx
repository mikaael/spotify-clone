import { Link } from 'react-router-dom';

import { PlaylistCard } from './PlaylistCard';

import { getAuthenticatedUser } from '../../../services/auth';

export function PlaylistCards({ title, playlists }) {
  const authenticatedUser = getAuthenticatedUser();

  return (
    <div className='text-white'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold mb-6'>{title}</h2>
        <Link className='text-neutral-400 text-sm font-bold hover:underline'>
          Mostrar tudo
        </Link>
      </div>

      {authenticatedUser ? (
        <ul className='flex flex-wrap items-center justify-center gap-4 pb-2 md:justify-start xl:flex-nowrap overflow-x-scroll scrollbar-thin scrollbar-thumb-neutral-600 hover:scrollbar-thumb-neutral-500'>
          {playlists.length > 0 ? (
            playlists.map(({ id, title, description, cover_url }) => {
              return (
                <li key={id}>
                  <PlaylistCard
                    title={title}
                    description={description}
                    coverUrl={cover_url}
                    href={`/${id}`}
                  />
                </li>
              );
            })
          ) : (
            <h2>Você não possui playlists</h2>
          )}
        </ul>
      ) : (
        <h2>
          <Link
            to='/login'
            className='text-spotify-green-light hover:underline'
          >
            Faça login
          </Link>{' '}
          para criar suas playlists
        </h2>
      )}
    </div>
  );
}
