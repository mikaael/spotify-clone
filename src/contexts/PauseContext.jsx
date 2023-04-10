import { createContext, useState, useContext } from "react";

const PauseContext = createContext({});

export function PauseProvider({ children }) {
  const [isPaused, setIsPaused] = useState(true);

  return (
    <PauseContext.Provider value={{ isPaused, setIsPaused }}>
      {children}
    </PauseContext.Provider>
  );
}

export function usePause() {
  const context = useContext(PauseContext);

  if (!context) {
    throw new Error("usePause must be used within a PauseProvider.");
  }

  const { isPaused, setIsPaused } = context;
  return { isPaused, setIsPaused };
}
