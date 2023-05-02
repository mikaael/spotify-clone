import React, { useState, useEffect } from 'react';
import { PencilIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

import './index.css';

import { PlaylistContainer } from '../../components/Playlists/PlaylistContainer';

import { getAuthenticatedUser } from '../../services/auth';

export function Profile() {
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem('profilePic') || ''
  );
  const [showModal, setShowModal] = useState(false);
  const [newPicUrl, setNewPicUrl] = useState('');

  const authenticatedUser = getAuthenticatedUser();
  const navigate = useNavigate();

  const handleProfilePicClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setNewPicUrl('');
  };

  const handleNewPicUrlChange = (event) => {
    setNewPicUrl(event.target.value);
  };

  const handlePicSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('profilePic', newPicUrl);
    setProfilePic(newPicUrl);
    handleModalClose();
  };

  const handleRemovePic = () => {
    setProfilePic(undefined);
  };

  useEffect(() => {
    if (!authenticatedUser) {
      navigate('/');
    }

    const storedProfilePic = localStorage.getItem('profilePic');
    if (storedProfilePic) {
      setProfilePic(storedProfilePic);
    }
  }, []);

  return (
    <>
      <div className='profile-container'>
        <div className=' mt-7 bg-neutral-800 ml-10 rounded-full p-16 group relative'>
          <UserIcon className='w-16 text-white group-hover:opacity-0' />
          <img
            className='w-full aspect-square absolute inset-0 flex flex-col rounded-full'
            src={profilePic}
            onClick={handleProfilePicClick}
            alt=' '
          />
          <div
            onClick={handleProfilePicClick}
            className='absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0'
          >
            <PencilIcon className='w-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            <p className='paragraph mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold cursor-pointer'>
              Escolher foto
            </p>
          </div>
        </div>
        <div className='User-Name'>
          <style>
            @import
            url('https://fonts.cdnfonts.com/css/circular-std?styles=17905');
          </style>
          <p className='paragraph mt-10'>
            <strong>Perfil</strong>
          </p>
          <p
            className='text-5xl text-[5.625rem]'
            style={{ fontFamily: 'Circular Std' }}
          >
            {authenticatedUser.username}
          </p>
          <p className='paragraph'>0 seguindo</p>
        </div>

        {showModal && (
          <div className='modal-container' onClick={handleModalClose}>
            <form
              className='modal-content'
              onClick={(event) => event.stopPropagation()}
            >
              <div className='parent-div'>
                <div>
                  <h1 className='details'>
                    <strong>Detalhes do Perfil</strong>
                  </h1>
                </div>
                <div>
                  <p
                    type='text'
                    className='paragraph close cursor-pointer'
                    onClick={handleModalClose}
                  >
                    X
                  </p>
                </div>
              </div>

              <div className='w-10 mt-4 bg-neutral-800 ml-3 rounded-full p-16 group relative'>
                <UserIcon className=' text-white group-hover:opacity-0' />
                <img
                  className='w-full aspect-square absolute inset-0 flex flex-col rounded-full'
                  src={profilePic}
                  alt=' '
                />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0'>
                  <PencilIcon className='w-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                  <p
                    className='paragraph mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold cursor-pointer'
                    onClick={handleRemovePic}
                  >
                    Remover foto
                  </p>{' '}
                  <div className='input-container'>
                    <input
                      className='input'
                      type='text'
                      placeholder='Adicione a URL da sua imagem'
                      id='newPicUrl'
                      value={newPicUrl}
                      onChange={handleNewPicUrlChange}
                    />
                  </div>
                </div>
              </div>

              <div className='button-link-container'>
                <button type='submit' onClick={handlePicSubmit}>
                  Salvar
                </button>
              </div>
              <div>
                <Link className='profile-link'>
                  Ao continuar, você autoriza o Spotify a acessar a imagem
                  enviada. Certifique-se de que você tem o direito de fazer o
                  upload dessa imagem.
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
      <body className='profile-body'>
        <div class='main-container'>
          <Link className='profile-link'>
            <span title='Mais opções' className='text-2xl cursor-pointer'>
              . . .
            </span>
          </Link>
          <Link className='profile-link text-2xl'>
            Musicas mais tocadas esse mês
          </Link>
        </div>
        <footer className='profile-footer'>
          <div class='line'></div>
        </footer>
      </body>
    </>
  );
}
