import React from "react";

function Banner({ result, numGuesses, answer }) {
  return result === "WIN" ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses} guess{numGuesses > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;
