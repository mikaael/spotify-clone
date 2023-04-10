import { PlayIcon } from "@heroicons/react/24/solid";
import { HeartIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export function PlaylistButtons({ playlistName }) {
  return (
    <div className="flex items-center mx-8 my-6">
      <div className="text-black bg-spotify-green-light mr-8 p-3.5 rounded-full transition-all hover:scale-105 hover:brightness-105 hover:cursor-pointer">
        <PlayIcon className="w-7" />
      </div>
      <HeartIcon
        className="text-white/70 w-9 mr-6 transition-colors hover:text-white"
        title="Salvar na Sua Biblioteca"
      />
      <EllipsisHorizontalIcon
        className="text-white/60 w-9 transition-colors hover:text-white"
        title={`Mais opções para ${playlistName}`}
      />
    </div>
  );
}
