import { Link } from "react-router-dom";

import "./index.css";

function Community() {
  return (
    <section className="community text-white bg-neutral-900">
      <h2>Visite nossa Comunidade</h2>
      <p>
        Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs
        especialistas do mundo todo!
      </p>

      <Link
        className="text-black font-bold bg-spotify-green-light px-8 py-3 rounded-full transition-transform hover:scale-105"
        to="https://community.spotify.com/t5/Spotify-Answers/tkb-p/Spotify-Answers?_ga=2.90218962.996630258.1679332587-147986116.1679332587"
      >
        Acesse a Comunidade do Spotify
      </Link>
    </section>
  );
}

export default Community;
