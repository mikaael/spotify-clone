import { useState } from "react";
import { Link } from "react-router-dom";
import { ColorExtractor } from "react-color-extractor";
import { PencilIcon, UserIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../../contexts/AuthContext";

export function PlaylistBanner({
  playlistBanner,
  playlistNameBanner,
  playlistDescription,
  playlistSize,
  playlistDuration,
}) {
  const { isAuthenticated } = useAuth();

  const [bgColor, setBgColor] = useState(null);
  const [name, setName] = useState("Gelipe Fomes");

  return (
    <>
      <div
        className="flex flex-col items-center py-9 px-8 w-full min-h-[20rem] bg-gradient-to-b from-transparent to-neutral-900 bg-noise gap-4 2xs:flex-row"
        style={{ backgroundColor: bgColor }}
      >
        {playlistBanner && (
          <ColorExtractor
            src={playlistBanner}
            getColors={(colors) => setBgColor(colors[0])}
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
          <h1 className="text-3xl font-bold text-white inline-block 2xs:text-4xl lg:text-7xl xl:text-8xl">
            {playlistNameBanner}
          </h1>
          <p className="text-neutral-400">{playlistDescription}</p>
          <div className="flex items-center gap-1">
            {playlistSize != 0 ? (
              <p className="text-white text-sm flex flex-wrap items-center justify-center gap-1">
                <span className="flex items-center justify-center gap-1">
                  <span className="flex items-center gap-2 p-1 bg-neutral-600 rounded-full w-6">
                    <UserIcon className="h-4 text-white aspect-square " />
                  </span>
                  <Link to="" className="hover:underline">
                    {name}
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
                  {name}
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
