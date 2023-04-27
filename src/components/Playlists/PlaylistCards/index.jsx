import { Link } from 'react-router-dom';

import { PlaylistCard } from './PlaylistCard';

export function PlaylistCards({ title, playlists }) {
  return (
    <div className='text-white'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold mb-6'>{title}</h2>
        <Link className='text-neutral-400 text-sm font-bold hover:underline'>
          Mostrar tudo
        </Link>
      </div>

      <ul className='flex flex-wrap items-center justify-center gap-4 md:justify-start xl:flex-nowrap'>
        {playlists.map(({ title, description, cover }, index) => {
          return (
            <li key={`${index}-${title}`}>
              <PlaylistCard
                title={title}
                description={description}
                cover={cover}
                href={`/playlists/${index}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
