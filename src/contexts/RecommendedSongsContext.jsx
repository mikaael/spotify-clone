import { useContext, useState, createContext } from 'react';

export const RecommendedSongsContext = createContext([]);

export function RecommendedSongsContextProvider({ children }) {
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  return (
    <RecommendedSongsContext.Provider
      value={{ recommendedSongs, setRecommendedSongs }}
    >
      {children}
    </RecommendedSongsContext.Provider>
  );
}

export function useRecommendedSongs() {
  const context = useContext(RecommendedSongsContext);

  if (!context) {
    throw new Error(
      'useRecommendedSongs must be used within a RecommendedSongsContextProvider.'
    );
  }

  const { recommendedSongs, setRecommendedSongs } = context;
  return { recommendedSongs, setRecommendedSongs };
}
