import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { PlaylistBanner } from '../../components/Playlists/PlaylistBanner';
import { PlaylistButtons } from '../../components/Playlists/PlaylistButtons';
import { PlaylistSongs } from '../../components/Playlists/PlaylistSongs';
import { PlaylistAddNewSongs } from '../../components/Playlists/PlaylistAddNewSongs';

import { useRecommendedSongs } from '../../contexts/RecommendedSongsContext';

import { findSongById, getAllSongs } from '../../services/songs';
import { findAuthorById, findAuthorsByIds } from '../../services/authors';
import { findAlbumById, findAlbumsByIds } from '../../services/albums';
import { findPlaylistSongIdsById } from '../../services/playlists';

import { getPlaylistInfoById } from '../../utils/playlists';
import { getPlaylistSongsById } from '../../utils/songs';

export function Songs() {
  const [playlist, setPlaylist] = useState(null);

  const [songs, setSongs] = useState([]);
  const { recommendedSongs, setRecommendedSongs } = useRecommendedSongs();

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
      setPlaylist(null);
      setSongs([]);
    };
  }, [id]);

  useEffect(() => {
    (async () => {
      const response = await getAllSongs();
      const data = await response.data;

      const authorSong = data.map(({ author_id }) => author_id);
      const albumSong = data.map(({ album_id }) => album_id);

      const { data: responseAuthor } = await findAuthorsByIds(authorSong);
      const { data: responseAlbum } = await findAlbumsByIds(albumSong);

      const { data: songsExistsInTheAlbum } = await findPlaylistSongIdsById(
        Number(id)
      );
      const idsCannotPlaceInPlaylist = songsExistsInTheAlbum.map(
        ({ song_id }) => song_id
      );

      const songsWithAuthor = data
        .map((song) => {
          return {
            author_name: responseAuthor.find(
              (author) => author.id === song.author_id
            ).name,
            album_title: responseAlbum.find(
              (album) => album.id === song.album_id
            ).title,
            ...song,
          };
        })
        .filter(({ id }) => !idsCannotPlaceInPlaylist.includes(id));

      setRecommendedSongs(songsWithAuthor);
    })();
  }, []);

  function removeSongFromPlaylist(songId) {
    setSongs((previous) => previous.filter((song) => song.id !== songId));
  }

  async function addSongToPlaylist(songId, addedAt) {
    const { data: foundSong } = await findSongById(songId);
    const { data: foundAuthor } = await findAuthorById(foundSong.author_id);
    const { data: foundAlbum } = await findAlbumById(foundSong.album_id);

    setSongs((previous) => {
      return [
        ...previous,
        {
          ...foundSong,
          author_name: foundAuthor.name,
          album_title: foundAlbum.title,
          added_at: addedAt,
        },
      ];
    });
  }

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
    playlist && (
      <>
        <PlaylistBanner
          playlistBanner={playlist.cover_url}
          playlistNameBanner={playlist.title}
          playlistDescription={playlist.description}
          playlistSize={totalOfSongs}
          playlistDuration={Number.parseInt(totalSongDurationInMinutes)}
        />
        <PlaylistButtons
          playlistId={Number(id)}
          playlistTitle={playlist.title}
          firstSongId={songs[0]?.id}
        />
        <PlaylistSongs
          songs={songs}
          playlistId={Number(id)}
          removeSongFromPlaylist={removeSongFromPlaylist}
        />
        <PlaylistAddNewSongs
          songs={recommendedSongs}
          playlistId={Number(id)}
          addSongToPlaylist={addSongToPlaylist}
        />
      </>
    )
  );
}
