export function PlaylistBanner({banner}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-96 bg-spotify-green-light">
      <img
        src={banner}
        alt="Capa da playlist"
        className="w-96 aspect-square"
      />
     
      </div>
  )
}