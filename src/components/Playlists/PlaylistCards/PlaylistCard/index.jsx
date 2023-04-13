import { PlayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import PlaylistNotAuthenticatedModal from "../../PlaylistNotAuthenticatedModal";
import { useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";

export function PlaylistCard({ title, description, cover, coverAlt, href }) {
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <>
      <PlaylistNotAuthenticatedModal
        cover={cover}
        show={showModal}
        setShow={setShowModal}
      />
      <Link
        to={href}
        onClick={(event) => {
          if (isAuthenticated) {
            return;
          }
          event.preventDefault();
          setShowModal(!showModal);
        }}
      >
        <div className="max-w-[12rem] bg-zinc-900 mx-auto p-4 rounded-md drop-shadow-md group transition-colors hover:bg-zinc-800">
          <div className="relative">
            <img
              src={cover}
              alt={coverAlt}
              className="w-40 aspect-square mb-4 rounded"
            />
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
