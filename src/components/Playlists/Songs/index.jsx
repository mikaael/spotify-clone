import { Song } from "./Song";
import "./index.css";

import { ClockIcon } from "@heroicons/react/24/outline";

export function Songs({ songs }) {
  return (
    <div className="text-neutral-400 px-8 py-6">
      <ul className="song-grid h-9 mb-4 border-b border-b-white/10">
        <li className="text-base text-center">#</li>
        <li>Título</li>
        <li>Álbum</li>
        <li>Adicionada em</li>
        <li className="ml-auto">
          <ClockIcon className="w-5" />
        </li>
      </ul>

      {songs &&
        songs.map(
          (
            { name, author, cover, album, addedAt, durationInSeconds },
            index
          ) => {
            return (
              <Song
                key={`${index}-${name}`}
                index={index + 1}
                name={name}
                author={author}
                cover={cover}
                album={album}
                addedAt={addedAt}
                durationInSeconds={durationInSeconds}
              />
            );
          }
        )}
    </div>
  );
}
