import { useState, useEffect } from "react";
import Button from "./Button";
import TextField from "./TextField";

const ChoiceMaker = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    { option1: "", option2: "", option3: "" },
  ]);
  const [moreOptions, setMoreOptions] = useState([{
    option4: ""
  }])
  const [randomAnswer, setRandomAnswer] = useState("");

  useEffect(() => {
    localStorage.setItem("randomAnswer", randomAnswer);
    localStorage.setItem("question", question);
  }, [randomAnswer, question]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const values = [...options];
    values[0][name] = value;
    setOptions(values);
  };

  const handleMoreChanges = (e, index) => {
    const {name, value } = e.target;
    const list = [...moreOptions];
    list[index][name] = value;
    setMoreOptions(list);
  }

  const addTextField = () => {
    setMoreOptions([...moreOptions, { option4: "" }]);
  };

  const getRandomAnswer = (e) => {
    e.preventDefault();
    
    let optionsArray = Object.values(options[0]);
    let moreOptionsArray = Object.values(moreOptions[0]);
    let combinedArray = [...optionsArray, ...moreOptionsArray];

    console.log(combinedArray);

    let realOptions = combinedArray.filter((item) => item !== "");

    const random = realOptions[Math.floor(Math.random() * realOptions.length)];

    setRandomAnswer(random);
    window.location = `${window.location}displaychoice`;
  };

  

  return (
    <>
      <div className="question-div">
        <h2>
          Enter Your Question<span>*</span>
        </h2>

        <input
          type="text"
          required
          placeholder="Your question..."
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className="answers-div">
        <h2>What are your options?</h2>
        <h4>Enter atleast 2 options*</h4>
        <TextField
          required
          id={1}
          inputValue={options[0].option1}
          handleChange={handleChange}
          inputName="option1"
        />
        <TextField
          id={2}
          required
          inputValue={options[0].option2}
          handleChange={handleChange}
          inputName="option2"
        />
        <TextField
          id={3}
          inputValue={options[0].option3}
          handleChange={handleChange}
          inputName="option3"
        />
        {moreOptions.map((x, i) => {
          return (
            <TextField
              id={i+4}
              key={i}
              inputValue={x.option4}
              handleChange={(e) => handleMoreChanges(e, i)}
              inputName="option4"
            />
          );
        })}
      </div>

      <div className="buttons">
        <Button color="grey" text="+ Option" onClick={() => addTextField()} />

        <Button
          color="rgb(65, 146, 27)"
          text="CHOOSE"
          onClick={getRandomAnswer}
          disabled={
            !question ||
            Object.values(options[0]).filter((item) => item !== "").length < 2
          }
        />
      </div>
    </>
  );
};

export default ChoiceMaker;
