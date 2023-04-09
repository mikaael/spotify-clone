function getDateDifferenceFromNowInDays(date) {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 (one) day in milliseconds
  const now = new Date();

  const differenceInMilliseconds = now.getTime() - date.getTime();
  return Math.floor(differenceInMilliseconds / oneDayInMilliseconds);
}

function getTimeFromSeconds(durationInSeconds) {
  const timeInMilliseconds = durationInSeconds * 1000;
  const timeDuration = new Date(timeInMilliseconds);

  const options = {
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };

  if (durationInSeconds >= 60 * 60) {
    options.hour = "numeric";
  }

  return timeDuration.toLocaleTimeString("pt-BR", options);
}

export function Song({
  name,
  author,
  cover,
  album,
  addedAt,
  durationInSeconds,
  index,
  selected,
}) {
  const addedAtInDays = getDateDifferenceFromNowInDays(addedAt);
  const timeDuration = getTimeFromSeconds(durationInSeconds);

  return (
    <ul
      className={`song-grid h-14 rounded transition-colors group ${
        selected ? "bg-white/30" : "hover:bg-white/10"
      }`}
    >
      <li className="text-base text-center">
        <p>{index}</p>
      </li>
      <li className="flex items-center gap-4">
        <img
          src={cover}
          alt={`Capa da música ${name}`}
          className="w-10 aspect-square"
        />
        <div>
          <p className="text-white text-base transition-colors hover:underline hover:cursor-pointer">
            {name}
          </p>
          <p
            className={`inline-block transition-colors hover:underline hover:cursor-pointer ${
              selected ? "text-white" : "group-hover:text-white"
            }`}
          >
            {author}
          </p>
        </div>
      </li>
      <li>
        <p
          className={`inline-block transition-colors hover:underline hover:cursor-pointer ${
            selected ? "text-white" : "group-hover:text-white"
          }`}
        >
          {album}
        </p>
      </li>
      <li>
        <p>
          {addedAtInDays === 0
            ? "Hoje"
            : `há ${addedAtInDays} dia${addedAtInDays > 1 ? "s" : ""}`}
        </p>
      </li>
      <li className="text-right">{timeDuration}</li>
    </ul>
  );
}
