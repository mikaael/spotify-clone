import { Link } from "react-router-dom";

export function Community() {
  return (
    <section className=" bg-neutral-900">
      <div className="max-w-2xl text-white text-center flex flex-col items-center justify-center gap-4 mx-auto px-4 py-[5.5rem]">
        <h2 className="text-3xl font-bold md:text-5xl">
          Visite nossa Comunidade
        </h2>
        <p>
          Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs
          especialistas do mundo todo!
        </p>

        <Link
          className="text-black font-bold bg-spotify-green-light px-8 py-3 rounded-full transition-transform hover:scale-105"
          to="https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers"
        >
          Acesse a Comunidade do Spotify
        </Link>
      </div>
    </section>
  );
}
