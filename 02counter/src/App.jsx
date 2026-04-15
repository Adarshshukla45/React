import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setCounter]=useState(5)   
  // let counter =5
  const addValue=()=>{
    console.log("click",counter)
    // counter=counter+1
    setCounter(counter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
    // setCounter(prevCounter=>prevCounter+1)
            // incerment counter by 4
  }
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }
    
  }
  return (
    
    <>
      <h1>chai aur react</h1>
      <h2>counter value :{counter}</h2>
     
      <button onClick={addValue}>add value{counter}</button>
      <br></br>
      <button onClick={removeValue}>remove value{counter}</button>
      

     
    </>
  )
}

export default App
