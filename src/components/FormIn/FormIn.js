import { useEffect } from "react";
import Form from "../Form/Form";

export default function FormIn({
    currencies,
    courses,
    activeCourseOut,
    activeCourseIn,
    courseInputIn,
    setCourseInputIn,
    setCourseInputOut,
    setActiveCourseIn
}){
    useEffect(()=>{
        if(Object.keys(currencies).length>0){
            const result =(
                currencies[activeCourseOut]*courseInputIn/currencies[activeCourseIn]
            ).toFixed(4)
            setCourseInputOut(result)
        }
    },[courseInputIn, activeCourseIn, activeCourseOut]);
    
    const onClick=(buttonValue)=>{
        setActiveCourseIn(buttonValue);
    };
    const onChange=(e)=>{
        if(!isNaN(e.target.value) && e.target.value.length<15){
            if(e.target.value.length===0){
                setCourseInputIn();
                return;
            }
            setCourseInputIn(e.target.value);
        }
    };

    return(
        <Form
        buttonValues={courses}
        activeButton={activeCourseIn}
        onClick={onClick}
        inputValue={courseInputIn}
        onChange={onChange}
        />
    )

}