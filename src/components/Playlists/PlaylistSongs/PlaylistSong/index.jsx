import { useState } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalIcon, HeartIcon } from "@heroicons/react/24/outline";

import { useSong } from "../../../../contexts/SongContext";
import { useAuth } from "../../../../contexts/AuthContext";

function getDateDifferenceFromNowInDays(date) {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 (one) day in milliseconds
  const now = new Date();

  const differenceInMilliseconds = now.getTime() - date.getTime();
  return Math.floor(differenceInMilliseconds / oneDayInMilliseconds);
}

function getTimeFromSeconds(durationInSeconds) {
  const timeInMilliseconds = durationInSeconds * 1000;
  const timeDuration = new Date(timeInMilliseconds);

  const options = {
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };

  if (durationInSeconds >= 60 * 60) {
    options.hour = "numeric";
  }

  return timeDuration.toLocaleTimeString("pt-BR", options);
}

export function PlaylistSong({
  song: { id, playlistId },
  name,
  author,
  cover,
  album,
  addedAt,
  durationInSeconds,
  selected,
  onClick,
}) {
  const { audio, isPlaying, setIsPlaying, setSong, playingSong } = useSong();
  const { isAuthenticated } = useAuth();

  const addedAtInDays = getDateDifferenceFromNowInDays(addedAt);
  const timeDuration = getTimeFromSeconds(durationInSeconds);

  return (
    <ul
      className={`song-grid h-14 rounded transition-colors group ${
        selected ? "bg-white/30" : "hover:bg-white/10"
      }`}
      onClick={onClick}
    >
      <li className="text-base relative flex items-center justify-center">
        <p
          className={`group-hover:hidden ${
            playingSong.id === id && playingSong.playlistId === playlistId
              ? "text-spotify-green-light"
              : ""
          }`}
        >
          {id + 1}
        </p>
        {isPlaying &&
        playingSong.id === id &&
        playingSong.playlistId === playlistId ? (
          <PauseIcon
            className={`hidden text-white w-5 aspect-square group-hover:block ${
              isAuthenticated ? "" : "brightness-50 hover:cursor-not-allowed"
            }`}
            title={`Tocar ${name} de ${author}`}
            onClick={() => {
              if (!isAuthenticated) {
                return;
              }

              setIsPlaying(false);
            }}
          />
        ) : (
          <PlayIcon
            className={`hidden text-white w-5 aspect-square group-hover:block ${
              isAuthenticated ? "" : "brightness-50 hover:cursor-not-allowed"
            }`}
            title={`Tocar ${name} de ${author}`}
            onClick={() => {
              if (!isAuthenticated) {
                return;
              }

              audio.src = "";
              setIsPlaying(true);
              setSong({ id, playlistId });
            }}
          />
        )}
      </li>
      <li className="flex items-center gap-4">
        <img
          src={cover}
          alt={`Capa da música ${name}`}
          className="w-10 aspect-square"
        />
        <div>
          <p
            className={`line-clamp-1 text-ellipsis text-base transition-colors hover:underline hover:cursor-pointer ${
              playingSong.id === id && playingSong.playlistId === playlistId
                ? "text-spotify-green-light"
                : "text-white"
            }`}
          >
            {name}
          </p>
          <p
            className={`line-clamp-1 text-ellipsis transition-colors hover:underline hover:cursor-pointer ${
              selected ? "text-white" : "group-hover:text-white"
            }`}
          >
            {author}
          </p>
        </div>
      </li>
      <li
        className={`line-clamp-1 text-ellipsis hidden transition-colors hover:underline hover:cursor-pointer md:block ${
          selected ? "text-white" : "group-hover:text-white"
        }`}
      >
        {album}
      </li>
      <li className="line-clamp-1 text-ellipsis hidden lg:block">
        {addedAtInDays === 0
          ? "Hoje"
          : `há ${addedAtInDays} dia${addedAtInDays > 1 ? "s" : ""}`}
      </li>
      <li className="hidden 2xs:grid 2xs:items-center 2xs:justify-center 2xs:grid-cols-[20px_1fr_20px] 2xs:gap-4">
        <HeartIcon
          className={`opacity-0 w-5 aspect-square group-hover:opacity-100 ${
            isAuthenticated
              ? "transition-all hover:text-white"
              : "brightness-50 hover:cursor-not-allowed"
          }`}
          title="Salvar na Sua Biblioteca"
        />
        <p className="text-center">{timeDuration}</p>
        <EllipsisHorizontalIcon
          className={`opacity-0 w-5 aspect-square group-hover:opacity-100 ${
            isAuthenticated
              ? "transition-all hover:text-white"
              : "brightness-50 hover:cursor-not-allowed"
          }`}
          title={`Mais opções para ${name} de ${author}`}
        />
      </li>
    </ul>
  );
}
