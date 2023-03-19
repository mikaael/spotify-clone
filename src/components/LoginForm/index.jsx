import FormInput from '../FormInput';

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
    </form>
  );
}

export default LoginForm;
