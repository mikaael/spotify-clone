import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Songs } from "../../components/Playlists/Songs";
import { PlaylistMenu } from "../../components/Playlists/PlaylistMenu";
import { PlaylistNavBar } from "../../components/Playlists/PlaylistNavBar";

import { playlists } from "../../__mocks__/playlists";

export function Playlist() {
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

        <Songs songs={playlist.songs} />
      </div>
    </div>
  );
}
