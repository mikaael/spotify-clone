import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ColorExtractor } from "react-color-extractor";
import { PencilIcon, UserIcon } from "@heroicons/react/24/outline";
import { toast } from 'react-hot-toast';

import { authenticateUser, getAuthenticatedUser } from "../../../services/auth";
import { useEffect } from "react";
import axios from "axios";
import { editPlaylist } from "../../../services/playlists";

export function PlaylistBanner({
  playlistBanner,
  playlistNameBanner,
  playlistDescription,
  playlistSize,
  playlistDuration,
}) {
  const isAuthenticated = getAuthenticatedUser();
  const [bgColor, setBgColor] = useState(null);
  const [showInputTitle, setShowInputTitle] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState(playlistNameBanner);
  const [showInputDescription, setShowInputDescription] = useState(false);
  const [playlistDescrip, setPlaylistDescrip] = useState(playlistDescription);
  const { id } = useParams();

  useEffect(() => {
    setPlaylistTitle(playlistNameBanner);
    setPlaylistDescrip(playlistDescription);
  }, [playlistNameBanner, playlistDescription]);

  const openInputTitle = () => {
    setShowInputTitle(true);
  };
  const closeInputTitle = () => {
    setShowInputTitle(false);
  };

  const openInputDescription = () => {
    setShowInputDescription(true);
  };
  const closeInputDescription = () => {
    setShowInputDescription(false);
  };

  async function saveInputTitle() {
      const cancelToken = axios.CancelToken.source();

      const response = await editPlaylist(id, {title: playlistTitle}, cancelToken.token);
      if (response) {
        setShowInputTitle(false);
        toast.success('Título atualizado com sucesso!');
      }
    }
  async function saveInputDescription() {
    const cancelToken = axios.CancelToken.source();

    const response = await editPlaylist(id, {description: playlistDescrip}, cancelToken.token);
    if (response) {
      setShowInputDescription(false);
      toast.success('Descrição atualizada com sucesso!');
    }
  }
  
  const handleTitle = (e) => {
    setPlaylistTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setPlaylistDescrip(e.target.value);
  };

  return (
    <>
      <div
        className="flex flex-col items-center py-9 px-8 w-full min-h-[20rem] bg-gradient-to-b from-transparent to-neutral-900 bg-noise gap-4 2xs:flex-row"
        style={{ backgroundColor: bgColor }}
      >
        {playlistBanner && (
          <ColorExtractor
            src={playlistBanner}
            getColors={(colors) => setBgColor(colors[1])}
          />
        )}

        <div
          className={`group relative items-center justify-center overflow-hidden w-[minmax(100%,20rem)] hover:opacity-50 ${
            isAuthenticated
              ? "hover:cursor-pointer"
              : "hover:cursor-not-allowed"
          }`}
        >
          <div>
            <img
              src={playlistBanner}
              alt="Capa da playlist"
              className="aspect-square rounded-lg w-80"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
            <PencilIcon className="w-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold">
              Escolher foto
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col gap-3 w-full 2xs:text-left">
          <p className="pt-4 text-white">Playlist</p>
          {!showInputTitle && (
            <h1
              onDoubleClick={openInputTitle}
              className="text-3xl font-bold text-white flex items-center 2xs:text-4xl lg:text-7xl xl:text-8xl xl:tracking-tight"
            >
              {playlistTitle}
            </h1>
          )}
          {showInputTitle && (
            <div>
              <input
                value={playlistTitle}
                onChange={handleTitle}
                autoFocus
                className="outline-none text-3xl font-bold text-white bg-neutral-900 inline-block w-full 2xs:text-4xl lg:text-7xl xl:text-8xl xl:tracking-tight"
              />
              <button onClick={closeInputTitle} className="text-red-700 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <button onClick={saveInputTitle} className="text-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </button>
            </div>
          )}

          {!showInputDescription && <p onDoubleClick={openInputDescription} className="text-neutral-400">{playlistDescrip}</p>}
          {showInputDescription && (
            <div className="flex items-center">
              <input
                value={playlistDescrip}
                onChange={handleDescription}
                autoFocus
                className="outline-none text-neutral-400 bg-neutral-900"
              />
              <button onClick={closeInputDescription} className="text-red-700 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <button onClick={saveInputDescription} className="text-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </button>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            {playlistSize != 0 ? (
              <p className="text-white text-sm flex flex-wrap items-center justify-center gap-1">
                <span className="flex items-center justify-center gap-1">
                  <span className="flex items-center gap-2 p-1 bg-neutral-600 rounded-full w-6">
                    <UserIcon className="h-4 text-white aspect-square " />
                  </span>
                  <Link to="" className="hover:underline">
                    {authenticateUser.username}
                  </Link>
                </span>{" "}
                <span> • </span>
                <span> 1 curtida </span>
                <span> • </span>
                <span> {playlistSize} músicas, </span>
                <span className="text-neutral-400">{playlistDuration} min</span>
              </p>
            ) : (
              <p className="text-white text-sm">
                <Link to="" className="hover:underline">
                  {authenticateUser.username}
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
