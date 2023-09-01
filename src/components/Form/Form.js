import "../Form/Form.css"
import ButtonSegmentControl from "../ButtonSegmentControl/ButtonSegmentControl";
import Input from "../Input/Input";

export default function Form({ 
  buttonValues, 
  onClick, 
  onChange, 
  inputValue,
  activeButton
}) {
  return (
    <div className="mainForm">
      <ButtonSegmentControl
      buttonValues={buttonValues}
      activeButton={activeButton}
      onClick={onClick}
      />
      <Input inputValue={inputValue} onChange={onChange} />
    </div>
  );
}
