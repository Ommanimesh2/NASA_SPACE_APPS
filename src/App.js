import logo from './logo.svg';
import './App.css';
import {useState } from 'react'

function App() {
  const [div,setdiv]=useState('')
  const parent =(e)=>{
setdiv(e.target)
  }
const handleclick=(e)=>{
  console.log(e.target);
e.target.style.backgroundImage="url(https://svs.gsfc.nasa.gov/vis/a030000/a030300/a030362/euvi_aia304_2012_carrington_print.jpg)"
div.style.height="450px"
div.style.width="450px"
div.style.top="40vh"
div.style.bottom="45vw"

}
  return (
  <div onClick={parent} className="earth">
    <div onClick={handleclick}></div>
  </div>
  );
}

export default App;
