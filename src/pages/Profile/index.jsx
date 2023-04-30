import "./index.css";
import { PlaylistContainer } from "../../components/Playlists/PlaylistContainer";
import React, { useState, useEffect } from "react";
import { PencilIcon, UserIcon } from "@heroicons/react/24/outline";

export function Profile() {
    const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || '');
    const [showModal, setShowModal] = useState(false);
    const [newPicUrl, setNewPicUrl] = useState('');

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
    }

    useEffect(() => {
        const storedProfilePic = localStorage.getItem('profilePic');
        if (storedProfilePic) {
            setProfilePic(storedProfilePic);
        }
    }, []);

    return (
        <PlaylistContainer>
            <div className="profile-container">
                <div className=" mt-7 bg-neutral-800 ml-10 rounded-full p-16 group relative">
                    <UserIcon className="w-16 text-white group-hover:opacity-0" />
                    <img
                        className="w-full aspect-square absolute inset-0 flex flex-col rounded-full"
                        src={profilePic}
                        onClick={handleProfilePicClick}
                        alt=" "
                    />
                    <div
                        onClick={handleProfilePicClick}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0"
                    >
                        <PencilIcon className="w-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <p className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold cursor-pointer">
                            Escolher foto

                        </p>
                    </div>
                </div>
                <div className="User-Name">

                    <style>
                        @import url('https://fonts.cdnfonts.com/css/circular-std?styles=17905');
                    </style><p className="mt-20"><font size="2"><strong>Perfil</strong></font>
                    </p>
                    <p className="User-Name text-5xl lg:text-6xl ">Victor Kauan</p>
                    <p>0 seguindo</p>
                </div>

                {showModal && (
                    <div className="modal-container" onClick={handleModalClose}>
                        <form className="modal-content" onClick={(event) => event.stopPropagation()}>
                            <div className="parent-div">
                                <div><font size="4"><h1 className="details"><strong>Detalhes do Perfil
                                </strong></h1></font></div><div><p type="text" className="close cursor-pointer" onClick={handleModalClose}><font size="4"> X</font>
                                </p></div></div>

                            <div className="w-10 mt-4 bg-neutral-800 ml-3 rounded-full p-16 group relative">
                                <UserIcon className=" text-white group-hover:opacity-0" />
                                <img
                                    className="w-full aspect-square absolute inset-0 flex flex-col rounded-full"
                                    src={profilePic}

                                    alt=" "
                                />
                                <div

                                    className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0"
                                >
                                    <PencilIcon className="w-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <p
                                        className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold cursor-pointer"
                                        onClick={handleRemovePic}
                                    >
                                        Remover foto
                                    </p> <div className="input-container">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder='Adicione a URL da sua imagem'
                                            id="newPicUrl"
                                            value={newPicUrl}
                                            onChange={handleNewPicUrlChange}
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className="button-link-container">
                                <button type="submit" onClick={handlePicSubmit}>
                                    Salvar
                                </button>

                            </div>
                            <div>
                                <a>
                                    <font size="1">
                                        Ao continuar, você autoriza o Spotify a acessar a imagem enviada. Certifique-se de que você tem o direito de fazer o upload dessa imagem.
                                    </font>
                                </a>
                            </div>
                        </form>
                    </div>


                )}
            </div>
            <body>
                <div class="main-container">
                    <a><font size="5" title="Mais opções" className="cursor-pointer">.  .  .</font></a>
                    <a><font size="5">Musicas mais tocadas esse mês</font></a>
                </div>
                <footer>
                    <div class="line"></div>
                </footer>


            </body>
        </PlaylistContainer>
    );
}