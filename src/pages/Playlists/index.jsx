import { PlaylistCards } from '../../components/Playlists/PlaylistCards';

import { usePersonalPlaylists } from '../../contexts/PersonalPlaylistsContext';

export function Playlists() {
  const { personalPlaylists } = usePersonalPlaylists();

  return (
    <ul className='flex flex-col gap-6 px-8 py-6'>
      <li>
        <PlaylistCards title='Suas playlists' playlists={personalPlaylists} />
      </li>
    </ul>
  );
}
