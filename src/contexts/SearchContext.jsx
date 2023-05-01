import { useState, useContext, createContext } from 'react';

export const PlaylistSearchContext = createContext();

export function PlaylistSearchProvider({ children }) {
  const [searchContext, setSearchContext] = useState('');

  return (
    <PlaylistSearchContext.Provider
      value={{ searchContext, setSearchContext }}
    >
      {children}
    </PlaylistSearchContext.Provider>
  );
}

export function usePlaylistSearch() {
  const context = useContext(PlaylistSearchContext);

  if (!context) {
    throw new Error(
      'usePlaylistSearch must be used within a PlaylistSearchProvider.'
    );
  }

  const { searchContext, setSearchContext } = context;
  return { searchContext, setSearchContext };
}
