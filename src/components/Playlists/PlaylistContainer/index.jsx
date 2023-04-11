import { PlaylistMenu } from "../PlaylistMenu";
import { PlaylistNavBar } from "../PlaylistNavBar";
import { PlaylistPlayer } from "../PlaylistPlayer";

export function PlaylistContainer({ children }) {
  return (
    <>
      <PlaylistMenu />
      <PlaylistPlayer />

      <div className="min-h-screen bg-neutral-900 flex flex-col relative md:pl-64">
        <PlaylistNavBar />

        {children}
      </div>
    </>
  );
}
