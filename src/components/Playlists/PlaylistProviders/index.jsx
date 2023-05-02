import { RecommendedSongsContextProvider } from '../../../contexts/RecommendedSongsContext';
import { PersonalPlaylistsContextProvider } from '../../../contexts/PersonalPlaylistsContext';
import { SongProvider } from '../../../contexts/SongContext';
import { PlaylistIdContextProvider } from '../../../contexts/PlaylistIdContext';
import { PlaylistSearchProvider } from '../../../contexts/SearchContext';

export function PlaylistProviders({ children }) {
  return (
    <RecommendedSongsContextProvider>
      <PersonalPlaylistsContextProvider>
        <SongProvider>
          <PlaylistIdContextProvider>
            <PlaylistSearchProvider>{children}</PlaylistSearchProvider>
          </PlaylistIdContextProvider>
        </SongProvider>
      </PersonalPlaylistsContextProvider>
    </RecommendedSongsContextProvider>
  );
}
