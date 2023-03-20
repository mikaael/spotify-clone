import { Link } from 'react-router-dom';

import FormInput from '../FormInput';
import RememberMeCheckbox from '../RememberMeCheckbox';

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

      <RememberMeCheckbox name='remember-me' message='Lembrar de mim' />
    </form>
  );
}

export default LoginForm;
