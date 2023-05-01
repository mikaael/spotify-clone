import { useState, useEffect } from 'react';
import axios from 'axios';

import { PlaylistCards } from '../../components/Playlists/PlaylistCards';

import { getPlaylists, findPlaylistsByCreatorId } from '../../services/playlists';
import { getAuthenticatedUser } from "../../services/auth";

export function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    async function fetchPlaylists() {
      const response = await findPlaylistsByCreatorId(getAuthenticatedUser().id, cancelToken.token);

      if (!response) {
        return;
      }

      const { data: foundPlaylists } = response;
      setPlaylists(foundPlaylists);
    }
    fetchPlaylists();

    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <ul className='flex flex-col gap-6 px-8 py-6'>
      <li>
        <PlaylistCards title='Foco' playlists={playlists} />
      </li>
    </ul>
  );
}
