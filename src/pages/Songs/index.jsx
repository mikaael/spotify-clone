import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { PlaylistBanner } from '../../components/Playlists/PlaylistBanner';
import { PlaylistButtons } from '../../components/Playlists/PlaylistButtons';
import { PlaylistSongs } from '../../components/Playlists/PlaylistSongs';

import { getPlaylistInfoById } from '../../utils/playlists';
import { getPlaylistSongsById } from '../../utils/songs';

export function Songs() {
  const [playlist, setPlaylist] = useState({});
  const [songs, setSongs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    async function fetchCurrentPlaylistAndSongs() {
      const foundPlaylist = await getPlaylistInfoById(id, cancelToken.token);

      if (!foundPlaylist) {
        return;
      }

      const foundSongs = await getPlaylistSongsById(id, cancelToken.token);

      if (!foundSongs) {
        return;
      }

      setPlaylist(foundPlaylist);
      setSongs(foundSongs);
    }
    fetchCurrentPlaylistAndSongs();

    return () => {
      cancelToken.cancel();
      setPlaylist({});
      setSongs([]);
    };
  }, []);

  const totalOfSongs = songs.length;

  const totalSongDurationInSeconds =
    songs.length > 0
      ? songs.reduce(
          (accumulator, song) => accumulator + song.duration_in_seconds,
          0
        )
      : 0;

  const totalSongDurationInMinutes = totalSongDurationInSeconds / 60;

  return (
    <>
      <PlaylistBanner
        playlistBanner={playlist.cover_url}
        playlistNameBanner={playlist.title}
        playlistDescription={playlist.description}
        playlistSize={totalOfSongs}
        playlistDuration={totalSongDurationInMinutes}
      />
      <PlaylistButtons
        playlistId={Number(id)}
        playlistTitle={playlist.title}
        firstSongId={songs[0]?.id}
      />
      {songs.length > 0 && (
        <PlaylistSongs songs={songs} playlistId={Number(id)} />
      )}
    </>
  );
}
