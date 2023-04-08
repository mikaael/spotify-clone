export function BannerButton({ type, value }) {
  return (
    <button
      className={`text-white text-sm font-bold uppercase py-3.5 px-8 border-2 rounded-full transition-all duration-75 hover:cursor-pointer hover:scale-105 ${
        type === "primary"
          ? "bg-neutral-900 border-neutral-900 hover:bg-black hover:border-black"
          : "bg-transparent hover:bg-primary-green-light"
      }`}
    >
      {value}
    </button>
  );
}
