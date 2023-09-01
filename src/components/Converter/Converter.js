import {useState, useEffect  } from "react";
import { fetchCourse } from "../../lib/fetchCourse";
import FormIn from "../FormIn/FormIn";
import FormOut from "../FormOut/FormOut";
import "../Converter/Converter.css"

export default function Converter() {
  const [currencies, setCurrencies] = useState({})
  const [courses, setCourses] = useState([1])
  const [courseInputIn, setCourseInputIn] = useState('1')
  const [courseInputOut, setCourseInputOut] = useState('1')
  const [activeCourseIn, setActiveCourseIn] = useState("EUR")
  const [activeCourseOut, setActiveCourseOut] = useState("EUR")
  
  useEffect(()=>{
    setActiveCourseIn(courses)
    setActiveCourseOut(courses);
  },[courses])

  useEffect(()=>{
    const fetchData = async()=>{
      const courseData = await fetchCourse();
      const newCurrencies = courseData.rates;
      const newCourses = Object.keys(courseData.rates).filter((c)=> c==="RUB" || c==="USD" || c==="EUR" || c==="GBP" )
      setCourses(newCourses)
      setCurrencies(newCurrencies)
      console.log(newCurrencies )
    }
    fetchData()
  }, [])
  return(
    <div className="main">
      <FormIn
      currencies={currencies}
      courses={courses}
      activeCourseOut={activeCourseOut}
      activeCourseIn={activeCourseIn}
      courseInputIn={courseInputIn}
      setCourseInputIn={setCourseInputIn}
      setCourseInputOut={setCourseInputOut}
      setActiveCourseIn={setActiveCourseIn}
      />
      <FormOut
      courses={courses}
      activeCourseOut={activeCourseOut}
      setActiveCourseOut={setActiveCourseOut}
      courseInputOut={courseInputOut}
      />
    </div>
  )
}

