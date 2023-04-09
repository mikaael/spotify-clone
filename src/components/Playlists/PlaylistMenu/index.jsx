import { Link } from "react-router-dom";
import { HomeIcon, HeartIcon } from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  RectangleStackIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import logoSpotify from "../../../assets/logos/white-spotify.svg";

import { PlaylistMenuItem } from "./PlaylistMenuItem";

export function PlaylistMenu() {
  return (
    <div className="bg-black min-h-screen flex flex-col gap-8 min-w-[16rem] w-64 p-6">
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
          <PlaylistMenuItem title="Início" active>
            <HomeIcon className="w-6 aspect-square" />
          </PlaylistMenuItem>
        </li>
        <li>
          <PlaylistMenuItem title="Buscar">
            <MagnifyingGlassIcon className="w-6 aspect-square" />
          </PlaylistMenuItem>
        </li>
        <li>
          <PlaylistMenuItem title="Sua Biblioteca">
            <RectangleStackIcon className="w-6 aspect-square" />
          </PlaylistMenuItem>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li>
          <PlaylistMenuItem title="Criar Playlist">
            <div className="bg-neutral-400 w-6 aspect-square p-1 rounded-sm transition-colors group-hover:bg-white">
              <PlusIcon className="text-black" />
            </div>
          </PlaylistMenuItem>
        </li>
        <li>
          <PlaylistMenuItem title="Músicas Curtidas">
            <div
              className="w-6 aspect-square p-1 rounded-sm opacity-70 transition-all group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg,#450af5,#c4efd9)",
              }}
            >
              <HeartIcon className="text-white" />
            </div>
          </PlaylistMenuItem>
        </li>
      </ul>
    </div>
  );
}
