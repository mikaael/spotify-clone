import { useSong } from "../../../contexts/SongContext";
import { getAuthenticatedUser } from "../../../services/auth";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

import { addSong } from "../../../services/songs";

export function PlaylistPreviewSongs({
  selected,
  toggleSelect,
  songId,
  title,
  authorName,
  index,
  coverUrl,
  albumTitle,
  playlistId,
}) {
  const { song, isPlaying, setIsPlaying, changeSong } = useSong();
  const authenticatedUser = getAuthenticatedUser();

  async function handleAddSong() {
    if (authenticatedUser) {
      await addSong(songId, playlistId);
      window.location.reload();
    }
  }

  return (
    <ul
      className={`flex items-center  justify-between h-14 rounded transition-colors group ${
        selected ? "bg-white/30" : "hover:bg-white/10"
      }`}
      onClick={toggleSelect}
      onDoubleClick={async () => {
        if (authenticatedUser) {
          await changeSong(songId, playlistId);
          setIsPlaying(true);
        }
      }}
    >
      <div className="flex gap-12 items-center">
        <li className="text-base relative flex items-center justify-center">
          <p
            className={`group-hover:hidden ${
              songId === song.id ? "text-spotify-green-light" : ""
            }`}
          >
            {index + 1}
          </p>
          {isPlaying && songId === song.id ? (
            <PauseIcon
              className={`hidden text-white w-5 aspect-square group-hover:block ${
                authenticatedUser
                  ? ""
                  : "brightness-50 hover:cursor-not-allowed"
              }`}
              title={`Tocar ${title} de ${authorName}`}
              onClick={async () => {
                if (authenticatedUser) {
                  setIsPlaying(false);
                }
              }}
            />
          ) : (
            <PlayIcon
              className={`hidden text-white w-5 aspect-square group-hover:block ${
                authenticatedUser
                  ? ""
                  : "brightness-50 hover:cursor-not-allowed"
              }`}
              title={`Tocar ${title} de ${authorName}`}
              onClick={async () => {
                if (authenticatedUser) {
                  await changeSong(songId, playlistId);
                  setIsPlaying(true);
                }
              }}
            />
          )}
        </li>

        <li className="flex items-center gap-4 w-40">
          <img
            src={coverUrl}
            alt={`Capa da música ${title}`}
            className="w-10 aspect-square"
          />
          <div>
            <p
              className={`line-clamp-1 text-ellipsis text-base transition-colors hover:underline hover:cursor-pointer ${
                songId === song.id ? "text-spotify-green-light" : "text-white"
              }`}
            >
              {title}
            </p>
            <p
              className={`line-clamp-1 text-ellipsis  transition-colors hover:underline hover:cursor-pointer ${
                selected ? "text-white" : "group-hover:text-white"
              }`}
            >
              {authorName}
            </p>
          </div>
        </li>

        <li
          className={`line-clamp-1 text-ellipsis px-60 hidden transition-colors hover:underline hover:cursor-pointer md:block ${
            selected ? "text-white" : "group-hover:text-white"
          }`}
        >
          {albumTitle}
        </li>
      </div>
      <li>
        <button
          onClick={handleAddSong}
          class="bg-transparent hover:scale-105 text-white font-semibold hover:text-white py-2 px-4 border border-white rounded-full"
        >
          Adicionar
        </button>
      </li>
    </ul>
  );
}
