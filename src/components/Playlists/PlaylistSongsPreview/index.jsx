import { useEffect, useState } from 'react';
import { PlaylistSongPreview } from './PlaylistSongPreview';
import { usePlaylistSearch } from '../../../contexts/SearchContext';

export function PlaylistSongsPreview({ songsAndAuthors }) {
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [searchSong, setSearchSong] = useState([]);

  const { searchContext } = usePlaylistSearch();

  useEffect(() => {
    searchContext.length === 0
      ? setSearchSong(songsAndAuthors)
      : setSearchSong(
          songsAndAuthors.filter(
            (song) =>
              song.title.toLowerCase().includes(searchContext.toLowerCase()) ||
              song.author_name
                .toLowerCase()
                .includes(searchContext.toLowerCase())
          )
        );
  }, [searchContext]);

  return (
    <div className='text-neutral-400 ml-8 mr-8 mb-6 mt-6'>
      <h2 className='text-white text-2xl font-bold mb-5'>Músicas</h2>
      <div>
        {searchSong.length > 0 &&
          searchSong.map((song) => {
            return (
              <PlaylistSongPreview
                key={song.id}
                songId={song.id}
                playlistId={song.playlist_id}
                title={song.title}
                authorName={song.author_name}
                coverUrl={song.cover_url}
                durationInSeconds={song.duration_in_seconds}
                selected={song.id === selectedSongId}
                toggleSelect={() => {
                  setSelectedSongId(
                    song.id === selectedSongId ? null : song.id
                  );
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
