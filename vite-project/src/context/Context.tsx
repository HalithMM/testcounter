import { createContext, useContext, useState, type ReactNode } from "react"

type Theme= 'light'|'dark' 
interface ThemeContext {
    theme:Theme
    toggleButton : ()=>void 
}
 

const createRoot = createContext<ThemeContext|undefined>(undefined)
export const Context = ({children}:{children:ReactNode}) => {
    const [theme,setTheme] = useState<Theme>('light')
    const toggleButton = () => {
        setTheme((prev)=>(prev==='light'?'dark':'light'))
    }
  return (
    <createRoot.Provider value={{theme,toggleButton}}>
        {children}
    </createRoot.Provider>
  )
}

export const useContextData =()=> {
    const contextData = useContext(createRoot)
    if (!contextData) {
         throw new Error("Hello")
    }
    return contextData
}