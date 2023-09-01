import "../Button/Button.css"

export default function Button({ onClick, buttonValue, activeBattom }) {
  return (
    <button 
      className={`course__button ${activeBattom === buttonValue ? "active" : ''}`}
      onClick={onClick}
      >
      {buttonValue}
    </button>
  );
}
