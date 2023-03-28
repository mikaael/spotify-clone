import "./index.css";

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black px-3/25 pt-12 pb-5 grow md:pt-20 md:pb-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 justify-center justify-items-center lg:grid-cols-footer md:grid-cols-2 md:justify-between">
          <Link to="https://www.spotify.com/br-pt/">
            <img
              src="./assets/images/logo-spotify.png"
              alt="Logo do Spotify"
              className="w-33"
            />
          </Link>

          <div className="text-center grid col-start-1 col-end-1 grid-cols-1 gap-4 mb-12 sm:text-left sm:grid-cols-3 sm:gap-12 md:col-auto md:ml-20 md:gap-0">
            <div>
              <header>
                <h3 className="title">Empresa</h3>
              </header>
              <ul>
                <li className="wrapper-list-item">
                  <Link
                    to="https://www.spotify.com/br-pt/about-us/contact/"
                    className="link"
                  >
                    Sobre
                  </Link>
                </li>
                <li className="wrapper-list-item">
                  <Link to="https://www.lifeatspotify.com/" className="link">
                    Empregos
                  </Link>
                </li>
                <li className="wrapper-list-item">
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
              <ul>
                <li>
                  <Link
                    to="https://artists.spotify.com/pt/home/"
                    className="link wrapper-list-item"
                  >
                    Para Artistas
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://developer.spotify.com/"
                    className="link wrapper-list-item"
                  >
                    Desenvolvedores
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://ads.spotify.com/pt-BR/"
                    className="link wrapper-list-item"
                  >
                    Publicidade
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://investors.spotify.com/home/default.aspx/"
                    className="link wrapper-list-item"
                  >
                    Investidores
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://spotifyforvendors.com/"
                    className="link wrapper-list-item"
                  >
                    Fornecedores
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <header>
                <h3 className="title">Links Úteis</h3>
              </header>
              <ul>
                <li>
                  <Link
                    to="https://support.spotify.com/br-pt/"
                    className="link wrapper-list-item"
                  >
                    Suporte
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://open.spotify.com/"
                    className="link wrapper-list-item"
                  >
                    Player da Web
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.spotify.com/br-pt/download/windows/"
                    className="link wrapper-list-item"
                  >
                    Aplicativo móvel grátis
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap col-start-1 col-end-3 mt-5 gap-3.75 md:justify-center lg:col-auto lg:justify-end">
            <Link
              to="https://www.instagram.com/spotify/"
              className="link link-icon"
            >
              <img
                src="./assets/icons/instagram.svg"
                alt="Icone do Instagram"
                className="icon-image"
              />
            </Link>
            <Link to="https://twitter.com/spotify/" className="link link-icon">
              <img
                src="./assets/icons/twitter.svg"
                alt="Icone do Twitter"
                className="icon-image"
              />
            </Link>
            <Link
              to="https://www.facebook.com/SpotifyBrasil"
              className="link link-icon"
            >
              <img
                src="./assets/icons/facebook.svg"
                alt="Icone do Facebook"
                className="icon-image"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-center gap-4 mt-20 md:justify-between">
          <div>
            <ul className="policy-terms-list">
              <li>
                <Link
                  to="https://www.spotify.com/br-pt/legal/end-user-agreement/"
                  className="link"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.spotify.com/br-pt/privacy"
                  className="link"
                >
                  Centro de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.spotify.com/br-pt/legal/privacy-policy/"
                  className="link"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.spotify.com/br-pt/legal/cookies-policy/"
                  className="link"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.spotify.com/br-pt/legal/privacy-policy/#s3"
                  className="link"
                >
                  Sobre anúncios
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-gray-400 text-xs text-right">
            <ul className="policy-terms-list">
              <li className="flex items-center justify-end gap-2">
                <img
                  src="./assets/icons/earth-americas.svg"
                  alt="Icone do globo terrestre"
                  className="h-3 justify-center aspect-square md:justify-start"
                />
                <Link
                  to="https://www.spotify.com/br-pt/select-your-country-region/"
                  className="link text-gray-400 text-xs text-right transition-colors hover:text-primary-green-dark"
                >
                  Brasil
                </Link>
              </li>
              <li>
                <p>© 2023 Spotify AB</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
