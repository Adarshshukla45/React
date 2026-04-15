import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj={
    username:"chaiaurcode",
    age:21
  }
  let newArr=[1,2,3]
  

  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card username ="chaiaurcode" btnText="claick me" />
      {/* <Card channel="adarsj"  someobj={myObj}/> */}
      <Card username="adarsh"/>

     




    </>
  )
}

export default App
