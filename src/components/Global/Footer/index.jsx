import { Link } from "react-router-dom";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";

import spotifyLogo from "../../../assets/logos/white-spotify.svg";
import instagramLogo from "../../../assets/logos/instagram.svg";
import twitterLogo from "../../../assets/logos/twitter.svg";
import facebookLogo from "../../../assets/logos/facebook.svg";

import "./index.css";

export function Footer() {
  return (
    <footer className="bg-black px-3/25 pt-12 pb-5 grow lg:pt-20 lg:pb-12">
      <div className="max-w-4.5xl mx-auto px-4 xl:max-w-6xl">
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-footer lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:justify-between lg:justify-items-start">
          <Link to="/">
            <img
              src={spotifyLogo}
              alt="Logo do Spotify"
              className="w-[5.625rem] lg:w-[8.25rem]"
            />
          </Link>

          <div className="text-center grid col-start-1 col-end-1 grid-cols-1 gap-4 mb-12 sm:text-left sm:grid-cols-[auto_auto_auto] sm:gap-12 lg:col-auto lg:mb-0">
            <div>
              <header>
                <h3 className="title">Empresa</h3>
              </header>
              <ul className="link-list">
                <li>
                  <Link
                    to="https://www.spotify.com/br-pt/about-us/contact/"
                    className="link"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="https://www.lifeatspotify.com/" className="link">
                    Empregos
                  </Link>
                </li>
                <li>
                  <Link to="https://newsroom.spotify.com/" className="link">
                    For the Record
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <header>
                <h3 className="title">Comunidades</h3>
              </header>
              <ul className="link-list">
                <li>
                  <Link
                    to="https://artists.spotify.com/pt/home/"
                    className="link"
                  >
                    Para Artistas
                  </Link>
                </li>
                <li>
                  <Link to="https://developer.spotify.com/" className="link">
                    Desenvolvedores
                  </Link>
                </li>
                <li>
                  <Link to="https://ads.spotify.com/pt-BR/" className="link">
                    Publicidade
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://investors.spotify.com/home/default.aspx/"
                    className="link"
                  >
                    Investidores
                  </Link>
                </li>
                <li>
                  <Link to="https://spotifyforvendors.com/" className="link">
                    Fornecedores
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <header>
                <h3 className="title">Links Úteis</h3>
              </header>
              <ul className="link-list">
                <li>
                  <Link to="/support" className="link">
                    Suporte
                  </Link>
                </li>
                <li>
                  <Link to="/playlists" className="link">
                    Player da Web
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.spotify.com/br-pt/download/windows/"
                    className="link"
                  >
                    Aplicativo móvel grátis
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap col-start-1 col-end-3 mt-5 gap-4 lg:col-auto lg:mt-0 lg:justify-end">
            <Link
              to="https://www.instagram.com/spotify/"
              className="link link-icon"
            >
              <img
                src={instagramLogo}
                alt="Icone do Instagram"
                className="aspect-square"
              />
            </Link>
            <Link to="https://twitter.com/spotify/" className="link link-icon">
              <img
                src={twitterLogo}
                alt="Icone do Twitter"
                className="aspect-square"
              />
            </Link>
            <Link
              to="https://www.facebook.com/SpotifyBrasil"
              className="link link-icon"
            >
              <img
                src={facebookLogo}
                alt="Icone do Facebook"
                className="aspect-square"
              />
            </Link>
          </div>
        </div>

        <div className="text-zinc-400 text-[0.625rem] flex justify-between gap-16 mt-8">
          <ul className="flex items-end flex-wrap gap-5">
            <li>
              <Link
                to="https://www.spotify.com/br-pt/legal/end-user-agreement/"
                className="bottom-link"
              >
                Legal
              </Link>
            </li>
            <li>
              <Link
                to="https://www.spotify.com/br-pt/privacy"
                className="bottom-link"
              >
                Centro de Privacidade
              </Link>
            </li>
            <li>
              <Link
                to="https://www.spotify.com/br-pt/legal/privacy-policy/"
                className="bottom-link"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link
                to="https://www.spotify.com/br-pt/legal/cookies-policy/"
                className="bottom-link"
              >
                Cookies
              </Link>
            </li>
            <li>
              <Link
                to="https://www.spotify.com/br-pt/legal/privacy-policy/#s3"
                className="bottom-link"
              >
                Sobre anúncios
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col gap-5 items-end whitespace-nowrap">
            <li className="flex items-center justify-end gap-2">
              <GlobeAmericasIcon className="h-4 aspect-square" />
              <Link
                to="https://www.spotify.com/br-pt/select-your-country-region/"
                className="bottom-link"
              >
                Brasil (Português)
              </Link>
            </li>
            <li>
              <p>© 2023 Spotify AB</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
