import { createContext, useState, useContext } from "react";

const SongContext = createContext({});

export function SongProvider({ children }) {
  const [audio, setAudio] = useState(new Audio());
  const [playingSong, setPlayingSong] = useState({
    id: null,
    playlistId: null,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  function setSong({ id, playlistId }) {
    setPlayingSong({ id, playlistId });
  }

  return (
    <SongContext.Provider
      value={{
        audio,
        playingSong,
        setSong,
        isPlaying,
        setIsPlaying,
        isMuted,
        setIsMuted,
      }}
    >
      {children}
    </SongContext.Provider>
  );
}

export function useSong() {
  const context = useContext(SongContext);

  if (!context) {
    throw new Error("useSong must be used within a SongProvider.");
  }

  const {
    audio,
    playingSong,
    setSong,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
  } = context;
  return {
    audio,
    playingSong,
    setSong,
    isPlaying,
    setIsPlaying,
    isMuted,
    setIsMuted,
  };
}
