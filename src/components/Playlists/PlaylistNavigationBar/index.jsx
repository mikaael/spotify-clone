import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";

import { ContextIdPlaylist } from "../../../contexts/ContextIdPlaylist";

export function PlaylistNavigationBar() {
  const navigate = useNavigate();
  const { pathname: localePath } = useLocation();
  const [isHistoryPrevious, setIsHistoryPrevious] = useState(false);
  const [isHistoryNext, setIsHistoryNext] = useState(false);

  const [isLogged, setIsLogged] = useState(true);
  const [name, setName] = useState("Gelipe Fomes");

  const { routeContext, setRouteContext } = useContext(ContextIdPlaylist);

  console.log("routeContext", routeContext);

  useEffect(() => {
    if (localePath !== "/playlists") {
      setRouteContext(localePath);
      setIsHistoryPrevious(true);
    }
    if (routeContext && localePath === "/playlists") {
      setIsHistoryNext(true);
    }
  });

  const previousPage = () => {
    if (isHistoryPrevious) navigate("/playlists");
  };

  const nextPage = () => {
    if (isHistoryNext) navigate(routeContext);
  };

  return (
    <div className="w-full bg-black/40 max-h-16 sticky top-0 py-4 px-8 z-10 flex items-center justify-between">
      <ul className="flex gap-4">
        <li className="bg-black/70 p-1 rounded-full">
          <ChevronLeftIcon
            title={isHistoryPrevious && "Voltar"}
            onClick={previousPage}
            className={`h-6 ${
              isHistoryPrevious
                ? "text-white hover:cursor-pointer"
                : "text-gray-400 hover:cursor-no-drop"
            } `}
          />
        </li>
        <li className="bg-black/70 p-1 rounded-full">
          <ChevronRightIcon
            title={isHistoryNext && "Avançar"}
            onClick={nextPage}
            className={`h-6 ${
              isHistoryNext
                ? "text-white hover:cursor-pointer"
                : "text-gray-400 hover:cursor-no-drop"
            } `}
          />
        </li>
      </ul>

      {isLogged ? (
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-white text-sm font-bold border border-neutral-500 py-1 px-4 rounded-full transition-all hover:border-white hover:scale-105 hover:cursor-pointer"
          >
            Faça upgrade
          </Link>

          <div
            title={name}
            className="text-white text-sm bg-black flex items-center justify-between gap-2 p-0.5 pr-2 rounded-full hover:bg-neutral-800 hover:cursor-pointer"
          >
            <div className="p-1 bg-neutral-600 rounded-full">
              <UserIcon className="aspect-square h-5" />
            </div>
            <h3 className="font-semibold text-white rounded-full transition-all duration-100">
              {name}
            </h3>
            <span>&#9660;</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-8">
          <Link to="/signup">
            <h3 className="font-bold text-gray-400 transition-all hover:scale-105 hover:text-white hover:cursor-pointer">
              Inscrever-se
            </h3>
          </Link>
          <Link to="/login">
            <h3 className="font-bold text-black bg-white py-3 px-8 rounded-full transition-all hover:bg-neutral-100 hover:scale-105 hover:cursor-pointer">
              Entrar
            </h3>
          </Link>
        </div>
      )}
    </div>
  );
}
