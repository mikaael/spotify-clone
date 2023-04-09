import { Link } from "react-router-dom";

import logoSpotify from "../../../assets/logos/white-spotify.svg";

import { PlaylistMenuItem } from "./PlaylistMenuItem";

export function PlaylistMenu() {
  return (
    <div className="bg-black min-h-screen hidden min-w-[16rem] w-64 p-6 2xs:flex 2xs:flex-col 2xs:gap-8">
      <Link to="/" className="text-2xl font-semibold w-32 flex items-center">
        <img
          src={logoSpotify}
          alt="Logo do Spotify"
          title="Spotify"
          className="w-[8.25rem]"
        />
      </Link>

      <ul className="flex flex-col gap-4">
        <li>
          <PlaylistMenuItem title="Início" icon="Home" active />
        </li>
        <li>
          <PlaylistMenuItem title="Buscar" icon="Search" />
        </li>
        <li>
          <PlaylistMenuItem title="Sua Biblioteca" icon="Library" />
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li>
          <PlaylistMenuItem title="Criar Playlist" icon="CreatePlaylist" />
        </li>
        <li>
          <PlaylistMenuItem title="Músicas Curtidas" icon="LikedMusics" />
        </li>
      </ul>
    </div>
  );
}
