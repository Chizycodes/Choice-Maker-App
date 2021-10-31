import Button from './Button';

const DisplayChoice = () => {
    return (
      <div className="choice-div">
        <div>
          <h2>Your question was:</h2>
          <h1>{}</h1>
        </div>

        <div>
          <h2>Selected Option:</h2>
          <h1>{}</h1>
        </div>

        <a href="/">
          <Button
            color="rgb(65, 146, 27)"
            text="< Go Again"
          />
        </a>
      </div>
    );
}

export default DisplayChoice
