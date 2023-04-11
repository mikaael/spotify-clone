import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PlaylistMenu } from "../../components/Playlists/PlaylistMenu";
import { PlaylistNavBar } from "../../components/Playlists/PlaylistNavBar";
import { PlaylistSongs } from "../../components/Playlists/PlaylistSongs";
import { PlaylistButtons } from "../../components/Playlists/PlaylistButtons";
import { PlaylistBanner } from "../../components/Playlists/PlaylistBanner";

import { playlists } from "../../__mocks__/playlists";

export function Songs() {
  const [playlist, setPlaylist] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const foundPlaylist = playlists.find((_, index) => Number(id) === index);
    setPlaylist(foundPlaylist);
  }, []);

  const totalOfSongs = playlist.songs ? playlist.songs.length : 0;

  const totalSongDurationInSeconds = playlist.songs
    ? playlist.songs.reduce(
        (accumulator, song) => accumulator + song.durationInSeconds,
        0
      )
    : 0;

  const totalSongDurationInMinutes = totalSongDurationInSeconds / 60;

  return (
    <>
      <PlaylistMenu />

      <div className="min-h-screen bg-neutral-900 flex flex-col relative md:pl-64">
        <PlaylistNavBar />
        <PlaylistBanner
          playlistBanner={playlist.cover}
          playlistNameBanner={playlist.title}
          playlistDescription={playlist.description}
          playlistSize={totalOfSongs}
          playlistDuration={totalSongDurationInMinutes}
        />
        <PlaylistButtons playlistName={playlist.title} />
        <PlaylistSongs songs={playlist.songs} />
      </div>
    </>
  );
}
