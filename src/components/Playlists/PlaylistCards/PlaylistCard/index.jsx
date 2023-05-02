import { useState } from "react";
import { Link } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";

import PlaylistNotAuthenticatedModal from "../../PlaylistNotAuthenticatedModal";

import { getAuthenticatedUser } from "../../../../services/auth";

export function PlaylistCard({ title, description, coverUrl, coverAlt, href }) {
  const [showModal, setShowModal] = useState(false);

  const authenticatedUser = getAuthenticatedUser();

  return (
    <>
      <PlaylistNotAuthenticatedModal
        cover={coverUrl}
        show={showModal}
        setShow={setShowModal}
      />
      <Link
        to={href}
        onClick={(event) => {
          if (authenticatedUser) {
            return;
          }

          event.preventDefault();
          setShowModal(!showModal);
        }}
      >
        <div className="w-[12rem] max-w-[12rem] h-[17.5rem] bg-zinc-900 mx-auto p-4 rounded-md drop-shadow-md group transition-colors hover:bg-zinc-800">
          <div className="relative">
            {coverUrl === "" ? (
              <div className="w-40 aspect-square mb-4 rounded bg-neutral-800 flex items-center justify-center text-neutral-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                  />
                </svg>
              </div>
            ) : (
              <img
                src={coverUrl}
                alt={coverAlt}
                className="w-40 aspect-square mb-4 rounded"
              />
            )}

            <div className="text-black bg-spotify-green-light opacity-0 absolute right-3 bottom-0 p-3 rounded-full transition-all group-hover:opacity-100 group-hover:bottom-3 hover:brightness-105 hover:scale-105 hover:cursor-pointer">
              <PlayIcon className="w-6 aspect-square" />
            </div>
          </div>
          <h3 className="font-bold mb-2 line-clamp-1">{title}</h3>
          <p className="text-neutral-400 font-normal text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    </>
  );
}
