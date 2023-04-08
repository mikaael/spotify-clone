import { useState } from "react";
import "./index.css";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

export function DetailsQuestion({ question, children }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleDetails(event) {
    event.preventDefault();
    setShowAnswer(!showAnswer);
  }

  return (
    <details open={showAnswer} disabled>
      <summary
        className="text-lg flex items-center justify-between list-none hover:cursor-pointer hover:underline"
        onClick={toggleDetails}
      >
        <h3>{question}</h3>
        <ChevronRightIcon
          className={`text-neutral-400 min-w-[1.5rem] w-6 aspect-square transition-transform ${
            showAnswer ? "rotate-90" : ""
          }`}
        />
      </summary>
      <div className="option-content">{children}</div>
    </details>
  );
}
