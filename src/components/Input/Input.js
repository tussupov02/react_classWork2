import "../Input/Input.css"

export default function Input({ inputValue, onChange, placeholder }) {
  return (
    <input className="input__course" value={inputValue} onChange={onChange} placeholder={placeholder} />
  );
}
