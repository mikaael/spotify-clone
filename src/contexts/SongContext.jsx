import { createContext, useState, useContext, useEffect } from 'react';

import { findSongById } from '../services/songs';
import { findAlbumById } from '../services/albums';
import { findAuthorById } from '../services/authors';
import {
  findPlaylistById,
  findPlaylistSongIdsById,
} from '../services/playlists';

const SongContext = createContext({});

export function SongProvider({ children }) {
  const [song, setSong] = useState({
    id: null,
    title: null,
    author: null,
    cover_url: null,
    audio_url: null,
  });
  const [audio, setAudio] = useState(null);
  const [playlist, setPlaylist] = useState({
    id: null,
    creator_id: null,
    title: null,
    description: null,
    cover_url: null,
    song_ids: [],
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  async function changeSong(newSongId, newPlaylistId = null) {
    if (newSongId === song.id && newPlaylistId === playlist.id) {
      return;
    }

    const songResponse = await findSongById(newSongId);

    if (!songResponse || songResponse.status !== 200) {
      return;
    }

    const { data: foundSong } = songResponse;

    const authorResponse = await findAuthorById(foundSong.author_id);

    if (!authorResponse || authorResponse.status !== 200) {
      return;
    }

    const { data: foundAuthor } = authorResponse;

    const albumResponse = await findAlbumById(foundSong.album_id);

    if (!albumResponse || albumResponse.status !== 200) {
      return;
    }

    const { data: foundAlbum } = albumResponse;

    setSong({
      id: newSongId,
      title: foundSong.title,
      author: foundAuthor.name,
      album: foundAlbum.title,
      cover_url: foundSong.cover_url,
      audio_url: foundSong.audio_url,
    });

    if (!audio) {
      setAudio(new Audio(foundSong.audio_url));
    }

    if (!newPlaylistId) {
      setPlaylist({
        id: null,
        creator_id: null,
        title: null,
        description: null,
        cover_url: null,
        song_ids: [],
      });
      return;
    }

    const playlistResponse = await findPlaylistById(newPlaylistId);

    if (!playlistResponse || playlistResponse.status !== 200) {
      return;
    }

    const { data: foundPlaylist } = playlistResponse;

    const songIdResponse = await findPlaylistSongIdsById(newPlaylistId);

    if (!songIdResponse || songIdResponse.status !== 200) {
      return;
    }

    const { data: foundSongIds } = songIdResponse;

    const songIds = foundSongIds.map(({ song_id }) => song_id);

    setPlaylist({ ...foundPlaylist, song_ids: songIds });
  }

  function getSongPlaylistIndex() {
    return playlist.song_ids.indexOf(song.id);
  }

  useEffect(() => {
    function updateAudio() {
      audio.src = song.audio_url;
      audio.load();
    }

    audio && updateAudio();

    return () => {
      if (audio) {
        audio.src = null;
        audio.load();
      }
    };
  }, [song]);

  useEffect(() => {
    function playPauseSong() {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    function muteUnmuteSong() {
      audio.muted = isMuted;
    }

    audio && playPauseSong();
    audio && muteUnmuteSong();
  }, [song, isPlaying, isMuted]);

  return (
    <SongContext.Provider
      value={{
        song,
        playlist,
        isPlaying,
        setIsPlaying,
        isMuted,
        setIsMuted,
        changeSong,
        getSongPlaylistIndex,
      }}
    >
      {children}
    </SongContext.Provider>
  );
}

export function useSong() {
  const context = useContext(SongContext);

  if (!context) {
    throw new Error('useSong must be used within a SongProvider.');
  }

  const {
    song,
    playlist,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
    changeSong,
    getSongPlaylistIndex,
  } = context;

  return {
    song,
    playlist,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
    changeSong,
    getSongPlaylistIndex,
  };
}
