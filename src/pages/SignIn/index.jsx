import LoginHeader from '../../components/LoginHeader';
import LoginSocialNetworks from '../../components/LoginSocialNetworks';
import Divider from '../../components/Auth/SignIn/Divider';
import LoginForm from '../../components/Auth/SignIn/LoginForm';
import SignUpLink from '../../components/Auth/SignIn/SignUpLink';

function Login() {
  return (
    <>
      <LoginHeader />

      <div className='flex flex-col gap-2.5 max-w-md mt-10 mb-2.5 px-2.5 mx-auto'>
        <p className='text-sm font-black text-center'>
          Para continuar, faça login no Spotify.
        </p>

        <LoginSocialNetworks />

        <Divider text='ou' />

        <LoginForm />

        <Divider className='mt-3 mb-5' />

        <SignUpLink />
      </div>
    </>
  );
}

export default Login;
