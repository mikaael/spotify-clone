import logoSpotify from '../../assets/logoSpotify.svg';
import menuIcon from '../../assets/menu-icon.svg';
import './index.css';

function Header() {
  return (
    <nav>
      <div className='wrapper'>
        <a href='./index.html'>
          <div id='logo'>
            <img src={logoSpotify} alt='Logo do Spotify' />
          </div>
        </a>

        <div id='menu'>
          <img src={menuIcon} alt='Ícone de hambúrguer' />
        </div>

        <div id='links'>
          <a href='./index.html'>Premium</a>
          <a href='./supportpage.html'>Suporte</a>
          <a href=''>Baixar</a>
          <a href=''>|</a>
          <a href='./signup.html'>Inscrever-se</a>
          <a href=''>Entrar</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
