import { useState } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalIcon, HeartIcon } from "@heroicons/react/24/outline";

import { usePause } from "../../../../contexts/PauseContext";

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
  name,
  author,
  cover,
  album,
  addedAt,
  durationInSeconds,
  index,
  selected,
  playing,
  onClick,
  playSong,
}) {
  const { isPaused, setIsPaused } = usePause();

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
          className={`transition-opacity group-hover:opacity-0 ${
            playing ? "text-spotify-green-light" : ""
          }`}
        >
          {index + 1}
        </p>
        {!isPaused && playing ? (
          <PauseIcon
            className="absolute opacity-0 text-white w-5 aspect-square transition-opacity group-hover:opacity-100"
            title={`Tocar ${name} de ${author}`}
            onClick={() => setIsPaused(true)}
          />
        ) : (
          <PlayIcon
            className="absolute opacity-0 text-white w-5 aspect-square transition-opacity group-hover:opacity-100"
            title={`Tocar ${name} de ${author}`}
            onClick={() => {
              setIsPaused(false);
              playSong();
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
            className={`overflow-hidden text-ellipsis text-base transition-colors hover:underline hover:cursor-pointer ${
              playing ? "text-spotify-green-light" : "text-white"
            }`}
          >
            {name}
          </p>
          <p
            className={`overflow-hidden text-ellipsis inline-block transition-colors hover:underline hover:cursor-pointer ${
              selected ? "text-white" : "group-hover:text-white"
            }`}
          >
            {author}
          </p>
        </div>
      </li>
      <li
        className={`overflow-hidden text-ellipsis hidden transition-colors hover:underline hover:cursor-pointer md:inline-block ${
          selected ? "text-white" : "group-hover:text-white"
        }`}
      >
        {album}
      </li>
      <li className="overflow-hidden text-ellipsis hidden lg:inline-block">
        {addedAtInDays === 0
          ? "Hoje"
          : `há ${addedAtInDays} dia${addedAtInDays > 1 ? "s" : ""}`}
      </li>
      <li className="grid items-center justify-center grid-cols-[20px_1fr_20px] gap-4">
        <HeartIcon
          className="opacity-0 w-5 aspect-square transition-all group-hover:opacity-100 hover:text-white"
          title="Salvar na Sua Biblioteca"
        />
        <p className="text-center">{timeDuration}</p>
        <EllipsisHorizontalIcon
          className="opacity-0 w-5 aspect-square transition-all group-hover:opacity-100 hover:text-white"
          title={`Mais opções para ${name} de ${author}`}
        />
      </li>
    </ul>
  );
}
