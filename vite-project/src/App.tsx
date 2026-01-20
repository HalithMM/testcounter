
import { useState } from 'react'
import './App.css'
import { Counter } from './component/Counter' 
import { type objects, type storeObject, type stringState } from './types/Usestate.type'
import { Output } from './component/Output'

function App() {
  const [getdata,setGetData] = useState<stringState>("")
  const [fetch,setFetch] = useState<objects>(
    {name: "",
    age: 0,
    adult: false,}
  )
  const [getObjects,setObjects] = useState<storeObject>([])
  const fetchdata = (value:stringState) => {
    setGetData(value)
  }
  const func = (getobject:objects) =>{
    setFetch(getobject)
    setObjects(prev=>[...prev,getobject])
  } 
  return (
    <>
      <Counter getData={fetchdata} fetch={func}/>
      {getdata}
      {getObjects.map((data,id)=>(
        <div key={id}>
          <h1>{data.name}</h1>
          <h1>{data.age}</h1>
          <h1>{data.adult===true?"Adult":"Minor"}</h1>
        </div>
      ))}
      <Output  data={getdata} objects={getObjects} />
    </>
  )
}
export default App
