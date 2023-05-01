import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ColorExtractor } from 'react-color-extractor';
import axios from 'axios';

import { PlaylistMenu } from '../PlaylistMenu';
import { PlaylistNavBar } from '../PlaylistNavBar';
import { PlaylistPlayer } from '../PlaylistPlayer';

import { SongProvider } from '../../../contexts/SongContext';
import { PlaylistIdContextProvider } from '../../../contexts/PlaylistIdContext';
import { PlaylistSearchProvider } from '../../../contexts/SearchContext';

import { findPlaylistById } from '../../../services/playlists';

export function PlaylistContainer() {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    async function fetchPlaylist() {
      if (!id) {
        setPlaylist(null);
        return;
      }

      const { data: foundPlaylist } = await findPlaylistById(
        id,
        cancelToken.token
      );
      setPlaylist(foundPlaylist);
    }
    fetchPlaylist();

    return () => {
      cancelToken.cancel();
      setBackgroundColor(null);
    };
  }, [pathname]);

  return (
    <SongProvider>
      <PlaylistIdContextProvider>
        <PlaylistSearchProvider>
          <PlaylistMenu />
          <PlaylistPlayer />

          <div
            className='min-h-screen bg-neutral-900 flex flex-col pb-[5.625rem] relative md:pl-64 bg-gradient-to-b to-50% from-transparent to-neutral-900 min-[1920px]:to-40%'
            style={{ backgroundColor }}
          >
            <PlaylistNavBar />

            <div className='max-w-7xl'>
              {playlist && playlist.cover_url && (
                <ColorExtractor
                  src={playlist.cover_url}
                  getColors={(colors) => setBackgroundColor(colors[0])}
                />
              )}

              <Outlet />
            </div>
          </div>
        </PlaylistSearchProvider>
      </PlaylistIdContextProvider>
    </SongProvider>
  );
}
