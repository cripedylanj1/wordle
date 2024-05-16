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

  var guessResults = guesses.map((guess) => {
    return checkGuess(guess.text, answer);
  });

  useEffect(() => {
    // Gather guess results
    guessResults.forEach((result) => {
      let status = result.map(({ status }) => status);
      const isCorrect = (s) => s === "correct";
      if (status.every(isCorrect)) {
        setResult("WIN");
      }
    });
  }, [guesses, guessResults]);

  return (
    <>
      {result !== "IP" && (
        <Banner result={result} numGuesses={numGuesses} answer={answer} />
      )}
      <Grid guesses={guesses} guessResults={guessResults} />
      <TextInput guesses={guesses} setGuesses={setGuesses} result={result} />
      <GuessResults guesses={guesses} />
    </>
  );
}

export default Game;
