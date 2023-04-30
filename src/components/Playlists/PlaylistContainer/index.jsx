import { Outlet } from 'react-router-dom';

import { PlaylistMenu } from '../PlaylistMenu';
import { PlaylistNavBar } from '../PlaylistNavBar';
import { PlaylistPlayer } from '../PlaylistPlayer';

import { SongProvider } from '../../../contexts/SongContext';
import { PlaylistIdContextProvider } from '../../../contexts/PlaylistIdContext';

export function PlaylistContainer() {
  return (
    <SongProvider>
      <PlaylistIdContextProvider>
        <PlaylistMenu />
        <PlaylistPlayer />

        <div className='min-h-screen bg-neutral-900 flex flex-col relative md:pl-64'>
          <PlaylistNavBar />

          <Outlet />
        </div>
      </PlaylistIdContextProvider>
    </SongProvider>
  );
}
