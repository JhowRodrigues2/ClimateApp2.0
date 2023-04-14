import React, { createContext, useState, useEffect, ReactNode } from "react";

export const GlobalContext = createContext({});

interface ContextProps {
  children: ReactNode;

}

const GlobalProvider = ({ children }: ContextProps) => {
  const [climateData, setClimateData] = useState('');
    const[city,setCity] = useState('')
    const [error, setError] = useState("");
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setCity(event.target.value);
      setError(" ");
    };

 
    const handleSearch = async () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5746620f81f9eb4b6a31284d8588ef6e&lang=pt_br`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Cidade inválida!");
        }
      })
      .then((res) => {
        setClimateData(res);
      })
      .catch((error) => {
        setError(error.message);
      });
      };





  return (
    <GlobalContext.Provider value={{climateData, handleChange,handleSearch, error }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
