import { useState, useEffect } from "react";
import Button from "./Button";

const DisplayChoice = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const question = localStorage.getItem("question");
    const answer = localStorage.getItem("randomAnswer");

    setQuestion(question);
    setAnswer(answer);
  }, []);

  return (
    <div className="choice-div">
      <div>
        <h2>Your question was:</h2>
        <h1>{question}</h1>
      </div>

      <div>
        <h2>Selected Option:</h2>
        <h1>{answer}</h1>
      </div>

      <a href="/">
        <Button color="rgb(65, 146, 27)" text="< Go Again" />
      </a>
    </div>
  );
};

export default DisplayChoice;
