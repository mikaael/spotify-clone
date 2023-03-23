import { Link } from "react-router-dom";
import { Bars3Icon as MenuIcon } from "@heroicons/react/24/solid";

import logoSpotify from "../../assets/logoSpotify.svg";

import "./index.css";

export function Header() {
  return (
    <nav className="text-white bg-black w-full">
      <div className="max-w-5xl h-20 mx-auto px-5 flex justify-between items-center xl:max-w-6xl xl:px-0">
        <Link to="/" title="Spotify">
          <div className="text-2xl font-semibold w-32 flex items-center">
            <img src={logoSpotify} alt="Logo do Spotify" />
          </div>
        </Link>

        <div>
          <MenuIcon className="h-10 transition-colors hover:cursor-pointer hover:text-primary-green md:hidden" />
        </div>

        <div className="text-sm font-bold items-center gap-10 hidden md:flex">
          <Link className="navbar-link" to="/">
            Premium
          </Link>
          <Link className="navbar-link" to="/suporte">
            Suporte
          </Link>
          <Link className="navbar-link" to="">
            Baixar
          </Link>
          <span>|</span>
          <Link className="navbar-link" to="/signup">
            Inscrever-se
          </Link>
          <Link className="navbar-link" to="/login">
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
}
