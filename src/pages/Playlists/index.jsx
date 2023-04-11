import { PlaylistMenu } from "../../components/Playlists/PlaylistMenu";
import { PlaylistNavBar } from "../../components/Playlists/PlaylistNavBar";
import { PlaylistCards } from "../../components/Playlists/PlaylistCards";

import { playlists } from "../../__mocks__/playlists";

export function Playlists() {
  return (
    <>
      <PlaylistMenu />

      <div className="min-h-screen bg-neutral-900 flex flex-col relative md:pl-64">
        <PlaylistNavBar />

        <ul className="flex flex-col gap-6 px-8 py-6">
          <li>
            <PlaylistCards title="Foco" playlists={playlists} />
          </li>
        </ul>
      </div>
    </>
  );
}
