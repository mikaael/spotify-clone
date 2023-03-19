import LoginHeader from '../../components/LoginHeader';
import LoginSocialNetworks from '../../components/LoginSocialNetworks';

function Login() {
  return (
    <>
      <LoginHeader />

      <div className='max-w-md mt-10 mb-2.5 mx-auto'>
        <p className='text-sm font-black text-center mb-2.5'>
          Para continuar, faça login no Spotify.
        </p>
        <LoginSocialNetworks />
      </div>
    </>
  );
}

export default Login;
