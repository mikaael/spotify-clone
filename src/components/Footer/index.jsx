import "./index.css";

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <div className="container-general">
          <a
            href="https://www.spotify.com/br-pt/"
            className="link-logo-spotify"
          >
            <img
              src="./assets/images/logo-spotify.png"
              alt="Logo do Spotify"
            />
          </a>

          <div className="wrapper">
            <div className="wrapper-company">
              <header className="header-title">
                <h3 className="title">Empresa</h3>
              </header>
              <ul>
                <li>
                  <a href="https://www.spotify.com/br-pt/about-us/contact/">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="https://www.lifeatspotify.com/">Empregos</a>
                </li>
                <li>
                  <a href="https://newsroom.spotify.com/">For the Record</a>
                </li>
              </ul>
            </div>
            <div className="wrapper-community">
              <header className="header-title">
                <h3 className="title">Comunidades</h3>
              </header>
              <ul>
                <li>
                  <a href="https://artists.spotify.com/pt/home/">
                    Para Artistas
                  </a>
                </li>
                <li>
                  <a href="https://developer.spotify.com/">Desenvolvedores</a>
                </li>
                <li>
                  <a href="https://ads.spotify.com/pt-BR/">Publicidade</a>
                </li>
                <li>
                  <a href="https://investors.spotify.com/home/default.aspx/">
                    Investidores
                  </a>
                </li>
                <li>
                  <a href="https://spotifyforvendors.com/">Fornecedores</a>
                </li>
              </ul>
            </div>
            <div className="wrapper-utils">
              <header className="header-title">
                <h3 className="title">Links Úteis</h3>
              </header>
              <ul>
                <li>
                  <a href="https://support.spotify.com/br-pt/">Suporte</a>
                </li>
                <li>
                  <a href="https://open.spotify.com/">Player da Web</a>
                </li>
                <li>
                  <a href="https://www.spotify.com/br-pt/download/windows/">
                    Aplicativo móvel grátis
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="links-midias">
            <a href="https://www.instagram.com/spotify/" className="link-icon">
              <img
                src="./assets/icons/instagram.svg"
                alt="Icone do Instagram"
              />
            </a>
            <a href="https://twitter.com/spotify/" className="link-icon">
              <img src="./assets/icons/twitter.svg" alt="Icone do Twitter" />
            </a>
            <a
              href="https://www.facebook.com/SpotifyBrasil"
              className="link-icon"
            >
              <img src="./assets/icons/facebook.svg" alt="Icone do Facebook" />
            </a>
          </div>
        </div>

        <div className="container-policy">
          <div className="policy-terms">
            <ul>
              <li>
                <a href="https://www.spotify.com/br-pt/legal/end-user-agreement/">
                  Legal
                </a>
              </li>
              <li>
                <a href="https://www.spotify.com/br-pt/privacy">
                  Centro de Privacidade
                </a>
              </li>
              <li>
                <a href="https://www.spotify.com/br-pt/legal/privacy-policy/">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="https://www.spotify.com/br-pt/legal/cookies-policy/">
                  Cookies
                </a>
              </li>
              <li>
                <a href="https://www.spotify.com/br-pt/legal/privacy-policy/#s3">
                  Sobre anúncios
                </a>
              </li>
            </ul>
          </div>

          <div className="policy-copyright">
            <ul>
              <li>
                <img
                  src="./assets/icons/earth-americas.svg"
                  alt="Icone do globo terrestre"
                />
                <a href="https://www.spotify.com/br-pt/select-your-country-region/">
                  Brasil
                </a>
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
