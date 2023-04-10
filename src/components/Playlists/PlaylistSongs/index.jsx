import { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

import "./index.css";

import { PlaylistSong } from "./PlaylistSong";

export function PlaylistSongs({ songs }) {
  const [selectedSong, setSelectedSong] = useState(null);
  const [playingSong, setPlayingSong] = useState(null);

  return (
    <div className="max-w-7xl text-neutral-400 px-8 py-6">
      <ul className="song-grid bg-neutral-900 sticky z-10 top-16 h-9 mb-4 border-b border-b-white/10">
        <li className="text-base text-center">#</li>
        <li>Título</li>
        <li className="hidden md:inline-block">Álbum</li>
        <li className="hidden lg:inline-block">Adicionada em</li>
        <li>
          <ClockIcon className="w-5 aspect-square mx-auto" title="Duração" />
        </li>
      </ul>

      {songs &&
        songs.map(
          (
            { name, author, cover, album, addedAt, durationInSeconds },
            index
          ) => {
            return (
              <PlaylistSong
                key={`${index}-${name}`}
                index={index}
                name={name}
                author={author}
                cover={cover}
                album={album}
                addedAt={addedAt}
                durationInSeconds={durationInSeconds}
                selected={selectedSong === index}
                playing={playingSong === index}
                onClick={() =>
                  setSelectedSong(index !== selectedSong ? index : null)
                }
                playSong={() => setPlayingSong(index)}
              />
            );
          }
        )}
    </div>
  );
}
