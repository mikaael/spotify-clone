import { Link } from 'react-router-dom';

import logoSpotify from '../../assets/logoSpotify.svg';
import menuIcon from '../../assets/menu-icon.svg';
import './index.css';

function Header() {
  return (
    <nav>
      <div className='wrapper'>
        <Link to='/'>
          <div id='logo'>
            <img src={logoSpotify} alt='Logo do Spotify' />
          </div>
        </Link>

        <div id='menu'>
          <img src={menuIcon} alt='Ícone de hambúrguer' />
        </div>

        <div id='links'>
          <Link to='/'>Premium</Link>
          <Link to='/suporte'>Suporte</Link>
          <Link to=''>Baixar</Link>
          <span>|</span>
          <Link to='/signup'>Inscrever-se</Link>
          <Link to='/login'>Entrar</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
