import Button from "./Button";
import { Link } from "react-router-dom";

const DisplayChoice = ({question, answer}) => {

  

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

      <Link to="/">
        <Button color="rgb(65, 146, 27)" text="< Go Again" />
      </Link>
    </div>
  );
};

export default DisplayChoice;
