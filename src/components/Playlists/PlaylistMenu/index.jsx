import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import logoSpotify from "../../../assets/logos/white-spotify.svg";

import { PlaylistMenuItem } from "./PlaylistMenuItem";

import { getPlaylists, createPlaylist, findPlaylistsByCreatorId, findPlaylistByTitle } from "../../../services/playlists";
import { getAuthenticatedUser } from "../../../services/auth";

export function PlaylistMenu() {
  const { pathname } = useLocation();

  const [playlists, setPlaylists] = useState([]);
  const [created, setCreated] = useState(false); // variavel para refazer o fetch quando uma playlist é criada (atualizar as playlists)

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
    console.log('renderizou')

    return () => {
      cancelToken.cancel();
    };
  }, [created]);

  const createNewPlaylist = () => {
    const cancelToken = axios.CancelToken.source();
    const newPlaylist = { 
      creator_id: getAuthenticatedUser().id, 
      title: `Minha Playlist N° ${playlists.length+1}`, 
      description: '', 
      cover_url: ''
    };
    
    async function createPlaylists() {
      const response = await createPlaylist(newPlaylist, cancelToken.token);
      if(response){
        setCreated((prev) => !prev);
        console.log('create response id:');
        console.log(response.data.id);
        window.location.replace(`http://127.0.0.1:5173/${response.data.id}`);
      }
    }
    createPlaylists();
  };

  return (
    <div className="bg-black min-h-screen hidden min-w-[16rem] w-64 z-10 fixed left-0 top-0 md:block">
      <div className="p-6 flex flex-col gap-8">
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
            <PlaylistMenuItem
              title="Início"
              icon="Home"
              active={pathname === "/"}
              href="/"
            />
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
            <PlaylistMenuItem title="Premium" icon="Star" href="/premium" />
          </li>
          <li>
            <PlaylistMenuItem title="Suporte" icon="Wrench" href="/support" />
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li onClick={createNewPlaylist}>
            <PlaylistMenuItem
              title="Criar Playlist"
              icon="CreatePlaylist"
            />
          </li>
          <li>
            <PlaylistMenuItem title="Músicas Curtidas" icon="LikedSongs" />
          </li>
        </ul>
      </div>
    </div>
  );
}
