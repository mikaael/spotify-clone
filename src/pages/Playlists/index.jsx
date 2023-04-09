import "./index.css";

import { PlaylistMenu } from "../../components/Playlists/PlaylistMenu";
import { PlaylistNavigationBar } from "../../components/Playlists/PlaylistNavigationBar";

export function Playlists() {
  return (
    <div className="flex">
      <PlaylistMenu />
      <div className="bg-[#1b1b1b] w-[82%] flex flex-col">
        <PlaylistNavigationBar />
        <div className="py-20 px-10">
          <div id="title" className="font-extrabold text-xl py-6">
            Playlists
          </div>
          <div
            id="playlists"
            className="flex justify-between w-full gap-4 flex-wrap"
          >
            <div
              id="playlist"
              className="w-[10.7rem] flex justify-center p-4 flex-col gap-2 bg-zinc-900 rounded-md drop-shadow-md"
            >
              {/* <img src={playlistCover} alt="" className="mb-2" /> */}
              <div id="title" className="font-bold">
                Peaceful Piano
              </div>
              <div
                id="description"
                className="text-neutral-400 font-normal text-sm"
              >
                Relax and indulge with beautiful piano pieces.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
