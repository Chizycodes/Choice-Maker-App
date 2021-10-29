const TextField = ({inputName, id, inputValue, handleChange, required}) => {
    
       return (
      <div className="inputField">
        <div>{id}</div>
        <input
          required={required}
          type="text"
          placeholder="Enter an option..."
          name={inputName}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    );
}

export default TextField
