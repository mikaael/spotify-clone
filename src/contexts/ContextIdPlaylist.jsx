import { createContext, useState } from 'react';

export const ContextIdPlaylist = createContext();

export default function ContextIdPlaylistProvider({ children }) {
  const [routeContext, setRouteContext] = useState('');
  return (
    <ContextIdPlaylist.Provider value={{ routeContext, setRouteContext }}>
      {children}
    </ContextIdPlaylist.Provider>
  );
}
