import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { HeartIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { usePause } from "../../../contexts/PauseContext";

export function PlaylistButtons({ playlistName }) {
  const { isPaused, setIsPaused } = usePause();

  return (
    <div className="flex items-center mx-8 my-6">
      <div className="text-black bg-spotify-green-light mr-8 p-3.5 rounded-full transition-all hover:scale-105 hover:brightness-105 hover:cursor-pointer">
        {!isPaused ? (
          <PauseIcon
            className="w-7 aspect-square"
            onClick={() => setIsPaused(true)}
          />
        ) : (
          <PlayIcon
            className="w-7 aspect-square"
            onClick={() => setIsPaused(false)}
          />
        )}
      </div>
      <HeartIcon
        className="text-white/70 w-9 aspect-square mr-6 transition-colors hover:text-white"
        title="Salvar na Sua Biblioteca"
      />
      <EllipsisHorizontalIcon
        className="text-white/60 w-9 aspect-square transition-colors hover:text-white"
        title={`Mais opções para ${playlistName}`}
      />
    </div>
  );
}
