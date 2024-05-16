import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, text }) => (
        <p className="guess" key={id}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
