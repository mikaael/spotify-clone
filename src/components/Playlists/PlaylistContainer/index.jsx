import { PlaylistMenu } from '../PlaylistMenu';
import { PlaylistNavBar } from '../PlaylistNavBar';
import { PlaylistPlayer } from '../PlaylistPlayer';

import { useAuth } from '../../../contexts/AuthContext';
import { useSong } from '../../../contexts/SongContext';

export function PlaylistContainer({ children }) {
  const { isAuthenticated } = useAuth();
  const { playingSong } = useSong();

  return (
    <>
      <PlaylistMenu />
      {isAuthenticated &&
        playingSong.id !== null &&
        playingSong.playlistId !== null && <PlaylistPlayer />}

      <div
        className={`min-h-screen bg-neutral-900 flex flex-col relative md:pl-64 ${
          isAuthenticated &&
          playingSong.id !== null &&
          playingSong.playlistId !== null
            ? 'pb-[5.625rem]'
            : ''
        }`}
      >
        <PlaylistNavBar />

        {children}
      </div>
    </>
  );
}
