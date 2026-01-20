 
import { getDataContextUse } from '../context/Fetchdata'

export const Comment = () => {
    const {apiData} = getDataContextUse()
  return (
    <div>
        {apiData.map((data,id)=>(
            <div key={id}>
                <h1>{data.postId}</h1>
            </div>
        ))}
    </div>
  )
}
