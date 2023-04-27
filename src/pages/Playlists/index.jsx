import { PlaylistContainer } from '../../components/Playlists/PlaylistContainer';
import { PlaylistCards } from '../../components/Playlists/PlaylistCards';

import { playlists } from '../../__mocks__/playlists';

export function Playlists() {
  return (
    <PlaylistContainer>
      <ul className='flex flex-col gap-6 px-8 py-6'>
        <li>
          <PlaylistCards title='Foco' playlists={playlists} />
        </li>
        <li>
          <PlaylistCards title='POP' playlists={playlists} />
        </li>
        <li>
          <PlaylistCards title="Rock n' Roll" playlists={playlists} />
        </li>
        <li>
          <PlaylistCards title='Lo-Fi' playlists={playlists} />
        </li>
      </ul>
    </PlaylistContainer>
  );
}
