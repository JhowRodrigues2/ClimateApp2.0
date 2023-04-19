import React, { createContext, useState } from "react";
import { ContextProps,WeatherData } from "../interfaces";

export const GlobalContext = createContext<ContextProps>({});


const GlobalProvider = ({ children }: ContextProps) => {

  const initialData: WeatherData = {
    name: '',
    weather: [{
      main: 'initial',
      description: '-',
      icon: '',
    }],
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0
    },
    wind: {
      speed: 0
    },
    clouds: {
      all: 0
    },
    sys: {
      country: '-',
      sunrise: '-',
      sunset: '-'
    },

  }
  const [climateData, setClimateData] = useState<WeatherData>(initialData);
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
        setClimateData(initialData)
      });
      };
      function handleKeyDown(event:React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
          handleSearch()
        }
      }




  return (
    <GlobalContext.Provider value={{climateData, handleChange,handleSearch, error,handleKeyDown }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
