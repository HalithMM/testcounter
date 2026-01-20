import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { commentObject } from "../types/Usestate.type"  
import { GetComments } from "../api/getapi"

interface Datas {
    apiData:commentObject[]  
}
const CreateDataContext = createContext<Datas|undefined>(undefined)
export const Fetchdata = ({children}:{children:ReactNode}) => {
    const [apiData,setContextData] = useState<commentObject[]>([])
    useEffect(()=>{
        const fetchs = async()=>{
            try {
              const response = await GetComments()
                console.log(response.data);
                setContextData(response.data)
            } catch (error) {
                console.log(error);
            }
        } 
        fetchs()
    },[])
  return (
    <CreateDataContext.Provider value={{apiData}}>
        {children}
    </CreateDataContext.Provider>
  )
}

export const getDataContextUse = () => {
    const contexts = useContext(CreateDataContext)
    if (!contexts) {
        throw new Error('hello')
    }
    return contexts
}
