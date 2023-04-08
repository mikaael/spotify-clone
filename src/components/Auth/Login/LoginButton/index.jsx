export function LoginButton({ text }) {
  return (
    <button className="uppercase text-sm font-bold w-full bg-spotify-green-light px-8 py-3.5 rounded-full transition-transform hover:scale-105 md:w-fit">
      {text}
    </button>
  );
}
