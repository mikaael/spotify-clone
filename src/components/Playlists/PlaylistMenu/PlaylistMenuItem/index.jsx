import { Link } from "react-router-dom";

export function PlaylistMenuItem({ title, href, active, children }) {
  return (
    <Link
      to={href}
      className={`w-fit ${
        active ? "text-white" : "text-neutral-400"
      } font-bold flex gap-4 items-center group transition-colors hover:text-white`}
    >
      {children}
      <p>{title}</p>
    </Link>
  );
}
