export function ButtonBanner({ type, value }) {
  return (
    <button
      className={`text-white text-sm font-extrabold uppercase py-3.5 px-7 border-2 rounded-full transition-all duration-75 hover:cursor-pointer hover:scale-105 ${
        type === "primary"
          ? "bg-zinc-800 border-zinc-800 hover:bg-black hover:border-black"
          : "font-bold bg-transparent hover:bg-primary-green-light"
      }`}
    >
      {value}
    </button>
  );
}
