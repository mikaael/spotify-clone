import LoginHeader from '../../components/LoginHeader';
import LoginSocialNetworks from '../../components/LoginSocialNetworks';
import DividerWithText from '../../components/DividerWithText';

function Login() {
  return (
    <>
      <LoginHeader />

      <div className='flex flex-col gap-2.5 max-w-md mt-10 mb-2.5 mx-auto'>
        <p className='text-sm font-black text-center'>
          Para continuar, faça login no Spotify.
        </p>

        <LoginSocialNetworks />

        <DividerWithText text='ou' />
      </div>
    </>
  );
}

export default Login;
