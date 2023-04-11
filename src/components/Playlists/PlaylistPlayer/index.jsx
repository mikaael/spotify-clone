import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeartIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";

import { usePause } from "../../../contexts/PauseContext";

import banner from "../../../assets/playlists/banners/pussyInBoots.png";

export function PlaylistPlayer() {
  const { isPaused, setIsPaused } = usePause();

  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="text-neutral-400 bg-neutral-900 w-full h-[5.625rem] grid grid-cols-3 items-center justify-between px-4 border-t border-t-neutral-800 fixed bottom-0 z-20">
      <div className="flex items-center gap-3">
        <Link to="">
          <img src={banner} alt="" className="w-14" />
        </Link>
        <div className="max-w-[10rem]">
          <p className="text-white text-sm whitespace-nowrap overflow-x-hidden text-ellipsis hover:underline hover:cursor-pointer">
            Mercy
          </p>
          <p className="text-xs whitespace-nowrap overflow-x-hidden text-ellipsis transition-colors hover:text-white hover:underline hover:cursor-pointer">
            Shawn Mendes
          </p>
        </div>
        <HeartIcon
          className="w-5 aspect-square transition-colors hover:text-white"
          title="Salvar na Sua Biblioteca"
        />
      </div>

      <div className="flex items-center justify-center gap-4">
        <BackwardIcon
          className="w-6 aspect-square transition-colors hover:text-white"
          title="Voltar"
        />
        {!isPaused ? (
          <PauseCircleIcon
            className="text-white w-10 aspect-square transition-transform hover:scale-105 active:scale-95"
            title="Pausar"
            onClick={() => setIsPaused(true)}
          />
        ) : (
          <PlayCircleIcon
            className="text-white w-10 aspect-square transition-transform hover:scale-105 active:scale-95"
            title="Tocar"
            onClick={() => setIsPaused(false)}
          />
        )}
        <ForwardIcon
          className="w-6 aspect-square transition-colors hover:text-white"
          title="Avançar"
        />
      </div>

      <div className="flex items-center justify-end">
        {isMuted ? (
          <SpeakerXMarkIcon
            className="w-5 aspect-square transition-colors hover:text-white"
            title="Com som"
            onClick={() => setIsMuted(false)}
          />
        ) : (
          <SpeakerWaveIcon
            className="w-5 aspect-square transition-colors hover:text-white"
            title="Mudo"
            onClick={() => setIsMuted(true)}
          />
        )}
      </div>
    </div>
  );
}
