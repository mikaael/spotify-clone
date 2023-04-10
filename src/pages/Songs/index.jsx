import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PlaylistMenu } from "../../components/Playlists/PlaylistMenu";
import { PlaylistNavBar } from "../../components/Playlists/PlaylistNavBar";
import { PlaylistSongs } from "../../components/Playlists/PlaylistSongs";
import { PlaylistButtons } from "../../components/Playlists/PlaylistButtons";

import { playlists } from "../../__mocks__/playlists";

export function Songs() {
  const [playlist, setPlaylist] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const foundPlaylist = playlists.find((_, index) => Number(id) === index);
    setPlaylist(foundPlaylist);
  }, []);

  return (
    <div className="flex">
      <PlaylistMenu />

      <div className="w-full bg-neutral-900 flex flex-col relative">
        <PlaylistNavBar />
        <PlaylistButtons playlistName={playlist.title} />
        <PlaylistSongs songs={playlist.songs} />
      </div>
    </div>
  );
}
