import React, { useEffect } from "react";
import TextInput from "../TextInput/TextInput";
import GuessResults from "../GuessResults/GuessResults";
import Grid from "../Grid/Grid";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [result, setResult] = React.useState("IP");
  const numGuesses = guesses.length;

  const handleSubmitGuess = (guess) => {
    // Append guess to guesses state
    let nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    // Check game state
    if (guess.text === answer) {
      setResult("WIN");
    }
    if (nextGuesses.length >= 6) {
      setResult("LOSE");
    }
  };

  var guessResults = guesses.map((guess) => {
    return checkGuess(guess.text, answer);
  });

  return (
    <>
      {result !== "IP" && (
        <Banner result={result} numGuesses={numGuesses} answer={answer} />
      )}
      <Grid guesses={guesses} guessResults={guessResults} />
      <TextInput handleSubmitGuess={handleSubmitGuess} result={result} />
      <GuessResults guesses={guesses} />
    </>
  );
}

export default Game;
