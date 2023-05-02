import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ColorExtractor } from 'react-color-extractor';
import axios from 'axios';

import { PlaylistMenu } from '../PlaylistMenu';
import { PlaylistNavBar } from '../PlaylistNavBar';
import { PlaylistPlayer } from '../PlaylistPlayer';

import { usePersonalPlaylists } from '../../../contexts/PersonalPlaylistsContext';

import {
  findPlaylistById,
  findPlaylistsByCreatorId,
} from '../../../services/playlists';
import { getAuthenticatedUser } from '../../../services/auth';

export function PlaylistContainer() {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  const { personalPlaylists, setPersonalPlaylists } = usePersonalPlaylists();

  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    async function fetchPlaylists() {
      const authenticatedUser = getAuthenticatedUser();

      if (!authenticatedUser) {
        return;
      }

      const personalPlaylistsResponse = await findPlaylistsByCreatorId(
        authenticatedUser.id,
        cancelToken.token
      );

      if (!personalPlaylistsResponse) {
        return;
      }

      const { data: foundPersonalPlaylists } = personalPlaylistsResponse;

      setPersonalPlaylists(foundPersonalPlaylists);
    }
    fetchPlaylists();

    return () => {
      cancelToken.cancel();
    };
  }, []);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    async function fetchPlaylist() {
      if (!id) {
        return;
      }

      const playlistResponse = await findPlaylistById(id, cancelToken.token);

      if (playlistResponse?.status !== 200) {
        return;
      }

      const { data: foundPlaylist } = playlistResponse;
      setPlaylist(foundPlaylist);
    }
    fetchPlaylist();

    return () => {
      cancelToken.cancel();
      setPlaylist(null);
      setBackgroundColor(null);
    };
  }, [pathname]);

  return (
    <>
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
    </>
  );
}
