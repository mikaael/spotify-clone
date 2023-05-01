import { createContext, useState, useContext } from 'react';

export const UpdatePlaylistContext = createContext();

export function UpdatePlaylistContextProvider({ children }) {
  const [updatePlaylist, setUpdatePlaylist] = useState(false);

  return (
    <UpdatePlaylistContext.Provider
      value={{ updatePlaylist, setUpdatePlaylist }}
    >
      {children}
    </UpdatePlaylistContext.Provider>
  );
}

export function useUpdatePlaylist() {
  const context = useContext(UpdatePlaylistContext);

  if (!context) {
    throw new Error(
      'useUpdatePlaylist must be used within a UpdatePlaylistContextProvider.'
    );
  }

  const { updatePlaylist, setUpdatePlaylist } = context;
  return { updatePlaylist, setUpdatePlaylist };
}
