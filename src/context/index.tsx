import React, { createContext, useState, useEffect, ReactNode } from "react";


export const GlobalContext = createContext({});

interface ContextProps {
    children:ReactNode;
  }
const GlobalProvider =({children}:ContextProps)=>{
    const [climateData, setClimateData]= useState('')
    const [error,setError] = useState<string>('')

   
    useEffect(()=>{
       const handleSearch = async ()=>{
     const req = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Nanuque&units=metric&appid=5746620f81f9eb4b6a31284d8588ef6e&lang=pt_br`
          )
            const res = await req.json()
            setClimateData(res)
        }
        handleSearch()
    },[])

return(
<GlobalContext.Provider value={climateData}>
    {children}
</GlobalContext.Provider>)
}
export default GlobalProvider;
