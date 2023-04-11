import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { HeartIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

import { useSong } from "../../../contexts/SongContext";
import { useAuth } from "../../../contexts/AuthContext";

export function PlaylistButtons({ playlistId, playlistName }) {
  const { isAuthenticated } = useAuth();
  const { isPlaying, setIsPlaying, playingSong, setSong } = useSong();

  return (
    <div className="flex justify-center items-center mx-8 my-6 2xs:justify-start">
      <div
        className={`text-black bg-spotify-green-light mr-8 p-3.5 rounded-full  ${
          isAuthenticated
            ? "transition-all hover:scale-105 hover:brightness-105 hover:cursor-pointer"
            : "brightness-50 hover:cursor-not-allowed"
        } `}
        onClick={() => {
          if (!isAuthenticated) {
            return;
          }

          if (!playingSong.id && !playingSong.playlistId) {
            setSong({ id: 0, playlistId });
          }

          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? (
          <PauseIcon className="w-7 aspect-square" />
        ) : (
          <PlayIcon className="w-7 aspect-square" />
        )}
      </div>
      <HeartIcon
        className={`text-white/70 w-9 aspect-square mr-6 transition-colors ${
          isAuthenticated
            ? "hover:text-white"
            : "brightness-50 hover:cursor-not-allowed"
        }`}
        title="Salvar na Sua Biblioteca"
      />
      <EllipsisHorizontalIcon
        className={`text-white/60 w-9 aspect-square transition-colors ${
          isAuthenticated
            ? "hover:text-white"
            : "brightness-50 hover:cursor-not-allowed"
        }`}
        title={`Mais opções para ${playlistName}`}
      />
    </div>
  );
}
