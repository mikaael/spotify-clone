import { Link } from 'react-router-dom';

function SignUpLink() {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='text-lg font-bold text-center'>Não tem uma conta?</h2>

      <Link className='text-sm text-gray-500 font-bold text-center uppercase px-8 py-3.25 border rounded-full border-gray-400 transition-colors hover:text-black hover:border-black'>
        Inscrever-se no Spotify
      </Link>
    </div>
  );
}

export default SignUpLink;
