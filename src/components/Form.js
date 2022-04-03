// we have to import use state because we have an input that changes  from a value to a diffrent value
import { useState } from "react";
export default function Form(props) {
  const [values, setValues] = useState({
    searchCity: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value }); // we refer to [object Key] inside values and we assign the value in the input
    console.log(values["searchCity"]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getWeather(values.searchCity);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchCity" onChange={handleChange} /> <br />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

/**
 * const [values ,setValues] = useState ({
 * searchCity :"",
 *
 * })   // the goal is to update that specific key in the object
 *
 *
 * const onchange = (event)=>{
 * setValues({...values,[event.target.name]:event.target.value})
 * }
 *
 */
