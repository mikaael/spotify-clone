import { Link } from 'react-router-dom';

import FormInput from '../FormInput';
import RememberMeCheckbox from '../RememberMeCheckbox';
import LoginButton from '../LoginButton';

function LoginForm() {
  return (
    <form className='flex flex-col gap-4'>
      <FormInput
        label='Endereço de e-mail ou nome de usuário'
        name='email'
        type='email'
        placeholder='Endereço de e-mail ou nome de usuário'
      />

      <FormInput
        label='Senha'
        name='password'
        type='password'
        placeholder='Senha'
      />

      <Link className='w-fit underline hover:text-spotify-dark-green active:text-spotify-dark-green'>
        Esqueceu sua senha?
      </Link>

      <div className='flex flex-col items-start justify-between gap-4 md:flex-row'>
        <RememberMeCheckbox name='remember-me' message='Lembrar de mim' />
        <LoginButton text='Entrar' />
      </div>
    </form>
  );
}

export default LoginForm;
