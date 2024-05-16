import React from "react";
import GridItem from "../GridItem/GridItem";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const grid = [...range(0, NUM_OF_GUESSES_ALLOWED, 1)];
const emptyColumns = [...range(0, 5, 1)];

function Grid({ guesses, guessResults }) {
  // Transform letters to have unique ID
  const transformGuesses = guesses.map((guess) => {
    const lettersArr = [...guess.text.split("")];
    const lettersObjArr = lettersArr.map((letter) => {
      return {
        id: crypto.randomUUID(),
        letter: letter,
      };
    });
    return lettersObjArr;
  });

  return (
    <div className="guess-results">
      {grid.map(({ id, index: rowIndex }) => (
        <p className="guess" key={id}>
          {transformGuesses[rowIndex] !== undefined ? (
            transformGuesses[rowIndex].map(({ id, letter }, colIndex) => (
              <GridItem
                letter={letter}
                key={id}
                variant={guessResults[rowIndex][colIndex]?.status}
              />
            ))
          ) : (
            <>
              {emptyColumns.map(({ id }) => (
                <GridItem letter={""} key={id} variant="none" />
              ))}
            </>
          )}
        </p>
      ))}
    </div>
  );
}

export default Grid;
