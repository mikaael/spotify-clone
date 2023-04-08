import { Link } from "react-router-dom";

export function SignUpLink() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-bold text-center">Não tem uma conta?</h2>

      <Link
        to="/signup"
        className="text-sm text-gray-500 font-bold text-center uppercase px-8 py-[0.8125rem] border rounded-full border-gray-400 transition-colors hover:text-black hover:border-black"
      >
        Inscrever-se no Spotify
      </Link>
    </div>
  );
}
