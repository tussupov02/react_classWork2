import Button from "../Button/Button";
import "../ButtonSegmentControl/ButtonSegmentControl.css"

export default function ButtonSegmentControl({ onClick, activeButton, buttonValues }) {
  return (
    <div className="button__sefment">
      {buttonValues.map((currency)=>{
        return(
          <Button 
            key={currency}
            onClick={()=>onClick(currency)}
            buttonValue={currency}
            activeBattom={activeButton}
          />
        )
      })}
    </div>
  );
}
