import { createContext, useState, useContext } from "react";

export const PlaylistIdContext = createContext();

export function PlaylistIdContextProvider({ children }) {
  const [routeContext, setRouteContext] = useState("");

  return (
    <PlaylistIdContext.Provider value={{ routeContext, setRouteContext }}>
      {children}
    </PlaylistIdContext.Provider>
  );
}

export function usePlaylistId() {
  const context = useContext(PlaylistIdContext);

  if (!context) {
    throw new Error(
      "usePlaylistId must be used within a PlaylistIdContextProvider."
    );
  }

  const { routeContext, setRouteContext } = context;
  return { routeContext, setRouteContext };
}
