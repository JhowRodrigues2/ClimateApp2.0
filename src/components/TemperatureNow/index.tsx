import {
  TemperatureNowContainer,
  Location,
  Temp,
  Forecast,
  WeatherCloudsIcon,
  WeatherDescrption,
  SearchContainer,
  ErrorMessage,
} from "./style";
import Pin from "../../assets/pin.svg";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import Statistics from "../Statistics";
import TempSunrise from "../../assets/temp-sun.svg";
import TempSunset from "../../assets/temp-sun-in-clouds.svg";
import TempThermal from "../../assets/temp-thermal.svg";
import { StatisticsContainer } from "../Statistics/style";
import Moment from 'moment';
import {BiSearchAlt} from 'react-icons/bi'

const TemperatureNow = () => {
  const  {climateData, handleChange,handleSearch,error } = useContext(GlobalContext);


  const capitalizeString=(string: string)=> {
    return string[0].toUpperCase() + string.slice(1)
  }

  return (


    
    <TemperatureNowContainer>
    <SearchContainer>
    <input type="text" placeholder="Digite uma cidade" onChange={handleChange}/>
      <button onClick={handleSearch}><BiSearchAlt/></button>
    </SearchContainer>
    <ErrorMessage>{error}</ErrorMessage>

      {climateData ? (
        <>
          <Location>
            <img src={Pin} alt="icone de localização" />
            <strong>
              {climateData.name} - {climateData.sys.country}
            </strong>
          </Location>
          <Temp>
            <Forecast>
              {parseInt(climateData.main.temp)}
              <WeatherDescrption>
                {capitalizeString(String(climateData.weather[0].description))}
                <WeatherCloudsIcon>
                  <img
                    src={`http://openweathermap.org/img/wn/${climateData.weather[0].icon}.png`}
                    alt="Weather 
            Clouds Icon"
                  />
                </WeatherCloudsIcon>
              </WeatherDescrption>
            </Forecast>
            <span>°C</span>
          </Temp>
          <StatisticsContainer>
            <Statistics
              StaticsIcon={TempThermal}
              StaticsTitle={"Sensação Térmica"}
              StaticsInfo={climateData.main.feels_like.toFixed(1)}
              StaticsType={"°C"}
            />
            <Statistics
              StaticsIcon={TempSunrise}
              StaticsTitle={" Nascer do Sol"}
              StaticsInfo={Moment.unix(climateData.sys.sunrise).format("HH:mm") }
            />
            <Statistics
              StaticsIcon={TempSunset}
              StaticsTitle={"Pôr do Sol"}
              StaticsInfo={Moment.unix(climateData.sys.sunset).format("HH:mm") }
            />
          </StatisticsContainer>
        </>
      ) : (
        ""
      )}
    </TemperatureNowContainer>
  );
};

export default TemperatureNow;
