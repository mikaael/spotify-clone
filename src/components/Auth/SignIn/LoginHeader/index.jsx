import { Link } from 'react-router-dom';
import loginSpotifyLogo from '../../assets/logos/login-spotify.svg';

function LoginHeader() {
  return (
    <header className='flex items-center justify-center pt-2.5 pb-4 border border-b-gray-300 md:py-6'>
      <Link to='/'>
        <img
          src={loginSpotifyLogo}
          alt='Logo Spotify'
          title='Spotify'
          className='h-9 md:h-11'
        ></img>
      </Link>
    </header>
  );
}

export default LoginHeader;
