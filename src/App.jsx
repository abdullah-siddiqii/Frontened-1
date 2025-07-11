import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
const [data,setdata]=useState([])
useEffect(()=>{
  axios.get('https://abdullah-test.whitescastle.com/api/data')
  .then((response)=>{
    setdata(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})

  return (
    <>
     <h1>HI! Abdullah </h1>
     <p>Data: {data.length}</p>
     {
      data.map((Data,index)=>(
      <div key={Data.id}>
        <h1>{Data.Name}</h1>
        <h4>{Data.Age}</h4>
      </div>
      ))
     }
    </>
  )
}

export default App
