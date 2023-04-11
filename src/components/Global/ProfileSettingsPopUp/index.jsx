import { Link } from "react-router-dom";

import { useAuth } from "../../../contexts/AuthContext";

export function ProfileSettingsPopUp({ className }) {
  const { logout } = useAuth();

  return (
    <ul
      className={`text-black font-bold absolute flex flex-col justify-center gap-2 bg-white w-40 px-4 py-3 rounded top-12 ${className}`}
    >
      <li>
        <Link to="" className="hover:text-primary-green">
          Conta
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-neutral-500 hover:text-primary-green"
          onClick={logout}
        >
          Sair
        </Link>
      </li>
    </ul>
  );
}
