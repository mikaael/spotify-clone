import { Link } from "react-router-dom";
import {
  Bars3Icon as MenuIcon,
  ChevronDownIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import logoSpotify from "../../../assets/logos/white-spotify.svg";

import "./index.css";

import { useAuth } from "../../../contexts/AuthContext";

export function Header({ transparent }) {
  const { isAuthenticated } = useAuth();

  return (
    <nav className={`text-white ${transparent ? "" : "bg-black"} w-full`}>
      <div className="max-w-4.5xl flex items-center justify-between mx-auto px-4 py-3 lg:py-5 xl:max-w-6xl">
        <Link to="/playlists" title="Spotify">
          <img
            src={logoSpotify}
            alt="Logo Spotify"
            className="w-[5.625rem] lg:w-[8.25rem]"
          />
        </Link>

        <div className="flex items-center justify-center gap-3 lg:hidden">
          {isAuthenticated && (
            <div className="flex items-center justify-center w-8 aspect-square border-2 border-white rounded-full transition-colors hover:text-primary-green hover:border-primary-green hover:cursor-pointer">
              <UserIcon className="w-5 aspect-square" />
            </div>
          )}

          <MenuIcon className="w-8 aspect-square transition-colors hover:cursor-pointer hover:text-primary-green" />
        </div>

        <div className="font-bold items-center gap-8 hidden lg:flex">
          <Link className="navbar-link" to="/">
            Premium
          </Link>
          <Link className="navbar-link" to="/support">
            Suporte
          </Link>
          <Link
            className="navbar-link"
            to="https://www.spotify.com/br-pt/download/windows/"
          >
            Baixar
          </Link>
          <span>|</span>
          {isAuthenticated ? (
            <div className="flex items-center justify-center gap-4 group hover:cursor-pointer">
              <div className="flex items-center justify-center w-9 aspect-square border-2 rounded-full transition-colors group-hover:text-primary-green group-hover:border-primary-green">
                <UserIcon className="w-6 aspect-square" />
              </div>
              <div className="flex items-center justify-center gap-2 transition-colors group-hover:text-primary-green">
                <h3 className="font-bold">Perfil</h3>
                <ChevronDownIcon className="w-4 aspect-square" />
              </div>
            </div>
          ) : (
            <>
              <Link className="navbar-link text-neutral-300" to="/signup">
                Inscrever-se
              </Link>
              <Link className="navbar-link text-neutral-300" to="/login">
                Entrar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
