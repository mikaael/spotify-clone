import "./index.css";

import { PlaylistMenu } from "../../components/Playlists/PlaylistMenu";
import { PlaylistNavBar } from "../../components/Playlists/PlaylistNavBar";
import { PlaylistCards } from "../../components/Playlists/PlaylistCards";

const playlists = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces.",
    cover: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with ambient and post-rock music.",
    cover: "https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background.",
    cover: "https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c",
  },
  {
    title: "Jazz Vibes",
    description: "The original chill instrumental beats playlist.",
    cover: "https://i.scdn.co/image/ab67706f000000025ea54b91b073c2776b966e7b",
  },
  {
    title: "Focus Flow",
    description: "Uptempo instrumental hip hop beats.",
    cover: "https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc",
  },
  {
    title: "Workday Lounge",
    description: "Lounge and chill out music for your workday.",
    cover: "https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618",
  },
];

export function Playlists() {
  return (
    <div className="flex">
      <PlaylistMenu />

      <div className="w-full bg-neutral-900 flex flex-col relative">
        <PlaylistNavBar />

        <ul className="flex flex-col gap-6 px-8 py-6">
          <li>
            <PlaylistCards title="Foco" playlists={playlists} />
          </li>
        </ul>
      </div>
    </div>
  );
}
