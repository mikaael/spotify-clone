import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { authenticateUser } from '../../../../services/auth';

import { FormInput } from '../../../Global/Form/FormInput';
import { RememberMeCheckbox } from '../../../Global/Form/RememberMeCheckbox';
import { LoginButton } from '../LoginButton';

export function LoginForm() {
  const navigate = useNavigate();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  async function authenticate(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email || !password) {
      toast.error('Todos os campos são obrigatórios.');
      return;
    }

    const { status, error } = await authenticateUser(email, password);

    if (status === 200) {
      toast.success('Usuário autenticado com sucesso.');
      navigate('/playlists');
    } else {
      toast.error(error);
    }
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={authenticate}>
      <FormInput
        ref={emailInputRef}
        label='Endereço de e-mail ou nome de usuário'
        name='email'
        type='email'
        placeholder='Endereço de e-mail ou nome de usuário'
      />

      <FormInput
        ref={passwordInputRef}
        label='Senha'
        name='password'
        type='password'
        placeholder='Senha'
      />

      <Link className='w-fit underline hover:text-spotify-green-dark active:text-spotify-green-dark'>
        Esqueceu sua senha?
      </Link>

      <div className='flex flex-col items-start justify-between gap-4 md:flex-row'>
        <RememberMeCheckbox
          name='remember-me'
          message='Lembrar de mim'
          checked
        />
        <LoginButton text='Entrar' />
      </div>
    </form>
  );
}
