import { findPlaylistById } from '../../services/playlists';
import { findUserById } from '../../services/users';

export async function getPlaylistInfoById(id, cancelToken) {
  const playlistResponse = await findPlaylistById(id, cancelToken);

  if (!playlistResponse || playlistResponse.status !== 200) {
    return;
  }

  const { data: foundPlaylist } = playlistResponse;

  const creatorResponse = await findUserById(
    foundPlaylist.creator_id,
    cancelToken.token
  );

  if (!creatorResponse || creatorResponse.status !== 200) {
    return;
  }

  const { data: userCreator } = creatorResponse;

  const playlistInfo = {
    id: Number(id),
    creator_username: userCreator.username,
    title: foundPlaylist.title,
    description: foundPlaylist.description,
    cover_url: foundPlaylist.cover_url,
  };

  return playlistInfo;
}
