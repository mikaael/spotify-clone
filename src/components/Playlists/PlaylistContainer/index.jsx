import { PlaylistMenu } from "../PlaylistMenu";
import { PlaylistNavBar } from "../PlaylistNavBar";
import { PlaylistPlayer } from "../PlaylistPlayer";

import { useAuth } from "../../../contexts/AuthContext";

export function PlaylistContainer({ children }) {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <PlaylistMenu />
      {isAuthenticated && <PlaylistPlayer />}

      <div
        className={`min-h-screen bg-neutral-900 flex flex-col relative md:pl-64 ${
          isAuthenticated ? "pb-[5.625rem]" : ""
        }`}
      >
        <PlaylistNavBar />

        {children}
      </div>
    </>
  );
}
