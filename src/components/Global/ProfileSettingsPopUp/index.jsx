import { Link } from 'react-router-dom';
import { logoutUser } from '../../../services/auth';

export function ProfileSettingsPopUp({ className }) {
  function logout() {
    logoutUser();
    window.location.reload();
  }

  return (
    <ul
      className={`text-black font-bold absolute flex flex-col justify-center gap-2 bg-white w-40 px-4 py-3 rounded top-12 ${className} shadow-md`}
    >
      <li>
        <Link to='/account' className='hover:text-primary-green'>
          Conta
        </Link>
      </li>
      <li>
        <Link to='/profile' className='hover:text-primary-green'>
          Perfil
        </Link>
      </li>
      <li>
        <Link
          to=''
          className='text-neutral-500 hover:text-primary-green'
          onClick={logout}
        >
          Sair
        </Link>
      </li>
    </ul>
  );
}
