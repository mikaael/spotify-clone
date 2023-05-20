import { useNavigate } from 'react-router-dom';

import { deletePlaylist as deleteP } from '../../../services/playlists';

export function PlaylistDeleteModal({ playlist, closeModal }) {
  const navigate = useNavigate();

  async function deletePlaylist() {
    await deleteP(playlist.id);

    closeModal();
    navigate('/');
    window.location.reload();
  }

  return (
    <>
      <div className='bg-white w-[26.25rem] p-8 rounded-lg absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h2 className='text-2xl font-bold mb-3'>Apagar da biblioteca</h2>

        <p className='text-sm mb-8'>
          A playlist <strong>{playlist.title}</strong> será excluída da{' '}
          <strong>Sua biblioteca</strong>.
        </p>

        <div className='flex items-center justify-end gap-4'>
          <p
            className='flex items-center justify-center font-bold px-8 py-3 rounded-full transition-all hover:cursor-pointer hover:font-black'
            onClick={closeModal}
          >
            Cancelar
          </p>
          <button
            className='flex items-center justify-center bg-primary-green font-bold px-8 py-3 rounded-full transition-all hover:scale-105 hover:bg-spotify-green-light hover:font-black'
            onClick={deletePlaylist}
          >
            Apagar
          </button>
        </div>
      </div>
      <div
        onClick={closeModal}
        className='z-30 absolute w-screen h-screen bg-black/50'
      />
    </>
  );
}
