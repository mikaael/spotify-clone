import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function PlaylistNotAuthenticatedModal({
  show,
  setShow,
  cover,
}) {
  return (
    <>
      <div
        className={`justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none ${
          show ? '' : 'hidden'
        }`}
      >
        {/*content*/}
        <div className='border-0 rounded-lg shadow-lg gap-20 relative p-16 grid grid-cols-2 bg-[#242424] outline-none focus:outline-none'>
          <XMarkIcon
            className='absolute top-4 right-4 w-6 aspect-square text-white hover:cursor-pointer hover:scale-105'
            onClick={() => setShow(false)}
          />
          {/*header*/}

          <div className='flex items-start justify-between'>
            <img
              src={cover}
              alt='Cover'
              className='w-80 aspect-square rounded-lg'
            />
          </div>

          {/*body*/}
          <div className='max-w-xs flex flex-col items-center justify-center'>
            <p className='text-white text-2xl text-center mt-2 mb-6 font-bold leading-relaxed'>
              Escute com uma conta gratuita do Spotify
            </p>

            {/*footer*/}

            <Link
              to='/signup'
              className='text-sm font-bold text-black w-full bg-[#1ed760] px-8 py-3.5 rounded-full transition-transform hover:scale-105 md:w-fit'
            >
              Inscreva-se Gratis
            </Link>

            <Link
              to='https://www.spotify.com/br-pt/download/windows/'
              className='text-white text-sm font-bold w-full bg-[#353434] px-8 py-3.5 mt-4 rounded-full transition-transform 
                      hover:scale-105 md:w-fit'
            >
              Baixe o app
            </Link>

            <p className='text-white mt-8'>
              Já tem uma conta?{' '}
              <Link
                to='/login'
                className='transition-colors hover:text-spotify-green-light hover:underline'
              >
                Faça login.
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`opacity-25 fixed inset-0 z-40 bg-black ${
          show ? '' : 'hidden'
        }`}
      ></div>
    </>
  );
}
