import { createContext, useState, useContext } from 'react';

export const PersonalPlaylistsContext = createContext([]);

export function PersonalPlaylistsContextProvider({ children }) {
  const [personalPlaylists, setPersonalPlaylists] = useState([]);

  return (
    <PersonalPlaylistsContext.Provider
      value={{ personalPlaylists, setPersonalPlaylists }}
    >
      {children}
    </PersonalPlaylistsContext.Provider>
  );
}

export function usePersonalPlaylists() {
  const context = useContext(PersonalPlaylistsContext);

  if (!context) {
    throw new Error(
      'usePersonalPlaylists must be used within a PersonalPlaylistsContextProvider.'
    );
  }

  const { personalPlaylists, setPersonalPlaylists } = context;
  return { personalPlaylists, setPersonalPlaylists };
}
