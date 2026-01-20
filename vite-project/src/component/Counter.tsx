import React, { useState, type FC } from "react"
import {  type counterprops, type numberState, type objects, type stringState } from "../types/Usestate.type"

export const Counter:FC<counterprops> = ({getData,fetch}) => {
  const [count,setCount]=useState<numberState>(0)
  const [input,setInput] = useState<stringState>("")
  const [datas,setDatas] = useState<objects>({
    name:"",
    age:0,
    adult:false
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(input);
    getData(input)
    setInput("")
  }
  const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value,type,checked} = e.target
    setDatas(prev=>({
      ...prev,[name]:type ==="checkbox"?checked:name==="age"?Number(value):value
    }))
  }
  const submitHandle = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    console.log(datas);
    fetch(datas)
    setDatas({
      name:"",age:0,adult:false
    })
  }
  return (
    <div className="flex">
      <button onClick={()=>setCount(prev=>prev-1)}>prev</button>
      Counter {count}
      <button onClick={()=>setCount(prev=>prev+1)}>Next</button>
      <form onSubmit={handleSubmit}>
        <h1>Name123456</h1>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      <form onSubmit={submitHandle}>
        <input type="text" name="name" value={datas.name} onChange={changeHandler} />
        <input type="number" name="age" value={datas.age} onChange={changeHandler} />
        <input type="checkbox" name="adult" checked={datas.adult} onChange={changeHandler} />
        <button type="submit">submit</button>
      </form>
      </div>
  )
}
