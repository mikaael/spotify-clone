import { Link } from "react-router-dom";
import { Bars3Icon as MenuIcon } from "@heroicons/react/24/solid";

import logoSpotify from "../../../assets/logos/white-spotify.svg";

import "./index.css";

export function Header({ transparent }) {
  return (
    <nav className={`text-white ${transparent ? "" : "bg-black"} w-full`}>
      <div className="max-w-4.5xl flex items-center justify-between mx-auto px-4 py-3 lg:py-5 xl:max-w-6xl">
        <Link to="/" title="Spotify">
          <img
            src={logoSpotify}
            alt="Logo Spotify"
            className="w-[5.625rem] lg:w-[8.25rem]"
          />
        </Link>

        <div>
          <MenuIcon className="w-8 aspect-square transition-colors hover:cursor-pointer hover:text-primary-green lg:hidden" />
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
          <Link className="navbar-link text-neutral-300" to="/signup">
            Inscrever-se
          </Link>
          <Link className="navbar-link text-neutral-300" to="/login">
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
}
