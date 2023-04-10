import { Link } from "react-router-dom";
import {
  HomeIcon as SolidHomeIcon,
  RectangleStackIcon as SolidRectangleStackIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as OutlineHomeIcon,
  MagnifyingGlassIcon as OutlineMagnifyingGlassIcon,
  RectangleStackIcon as OutlineRectangleStackIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export function PlaylistMenuItem({ title, href, icon, active }) {
  function renderIcon() {
    const iconMap = {
      Home: active ? (
        <SolidHomeIcon className="w-6 aspect-square" />
      ) : (
        <OutlineHomeIcon className="w-6 aspect-square" />
      ),
      Search: <OutlineMagnifyingGlassIcon className="w-6 aspect-square" />,
      Library: active ? (
        <SolidRectangleStackIcon className="w-6 aspect-square" />
      ) : (
        <OutlineRectangleStackIcon className="w-6 aspect-square" />
      ),
      CreatePlaylist: (
        <div
          className={`w-6 aspect-square p-1 rounded-sm ${
            !active
              ? "bg-neutral-400 transition-colors group-hover:bg-white"
              : "bg-white"
          }`}
        >
          <PlusIcon className="text-black" />
        </div>
      ),
      LikedSongs: (
        <div
          className={`text-white w-6 aspect-square p-1 rounded-sm ${
            !active ? "transition-all opacity-70 group-hover:opacity-100" : ""
          }`}
          style={{
            background: "linear-gradient(135deg,#450af5,#c4efd9)",
          }}
        >
          <HeartIcon />
        </div>
      ),
    };

    return iconMap[icon];
  }

  return (
    <Link
      to={href}
      className={`w-fit font-bold flex gap-4 items-center group ${
        active
          ? "text-white"
          : "text-neutral-400 transition-colors hover:text-white"
      }`}
    >
      {renderIcon()}
      <p>{title}</p>
    </Link>
  );
}
