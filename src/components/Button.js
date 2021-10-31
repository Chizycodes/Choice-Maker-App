const Button = ({ text, color, onClick, disabled }) => {
  return (
    <button
    onClick={onClick}
    style={{ backgroundColor: color }} className="btn"
    disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
