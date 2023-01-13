import { useState } from "react";
import "./App.css"
import Result from "./Components/Result";
import { useSelector } from "react-redux";

const App = () => {
  const total = useSelector(counterstate => counterstate)
  console.log(total)
  const [num , setnum] = useState(0)
  const button = () => {
    setnum(num + 1)
  }

  const buttonminus = () => {
    setnum(num - 1)
  }
  return (
    <div className="div-APP">
     <button onClick={button} className="button">+</button>
     <button onClick={buttonminus} className="button">-</button>
     <h2>{num}</h2>
     <Result/>
    </div>
  );
}
 
export default App;