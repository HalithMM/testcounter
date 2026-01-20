import type { FC } from "react"
import type { outputProps } from "../types/Usestate.type"
export const Output:FC<outputProps> = ({data,objects}) => {
  return (
    <div>
        Output
        {data}
        {objects.map((obj, idx) => (
        <div key={idx}>
          <p>Name: {obj.name}</p>
          <p>Age: {obj.age}</p>
          <p>{obj.adult ? "Adult" : "Minor"}</p>
        </div>
      ))}
    </div>
  )
}
