import React from "react";

function TextInput({ guesses, setGuesses, result }) {
  const [guess, setGuess] = React.useState({
    id: crypto.randomUUID(),
    text: "",
  });

  const handleOnSubmit = (e) => {
    // Prevents page reload
    e.preventDefault();

    // Validation of length
    if (guess.text.length !== 5) {
      alert("Guesses must be 5 characters");
      return;
    }
    let nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    // Resets text box
    setGuess({
      id: crypto.randomUUID(),
      text: "",
    });
  };
  const handleChange = (e) => {
    // Transform text, disallow 5+ chars
    let text = e.target.value.toUpperCase();
    if (text.length > 5) return;

    // Create new object and update state onChange
    let newObj = {
      ...guess,
      text,
    };
    setGuess(newObj);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess.text}
        onChange={handleChange}
        disabled={result !== "IP"}
      />
    </form>
  );
}

export default TextInput;
