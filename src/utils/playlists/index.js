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
    id: 1,
    creator_username: userCreator.username,
    title: 'This Is BTS',
    description:
      'This is the PROOF of BTS history. Check out BTS Yet To Come in Busan LIVE SET as well. ARMY is unbeatable💜',
    cover_url:
      'https://i.scdn.co/image/ab67706f00000002a7aec3961666dee881cee250',
  };

  return playlistInfo;
}
