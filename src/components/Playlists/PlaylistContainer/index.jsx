import { PlaylistMenu } from "../PlaylistMenu";
import { PlaylistNavBar } from "../PlaylistNavBar";

export function PlaylistContainer({ children }) {
  return (
    <>
      <PlaylistMenu />

      <div className="min-h-screen bg-neutral-900 flex flex-col relative md:pl-64">
        <PlaylistNavBar />

        {children}
      </div>
    </>
  );
}
