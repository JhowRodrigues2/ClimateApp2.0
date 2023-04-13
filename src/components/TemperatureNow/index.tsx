import {
  TemperatureNowContainer,
  Location,
  Temp,
  Forecast,
  WeatherCloudsIcon,
  WeatherDescrption,
} from "./style";
import Pin from "../../assets/pin.svg";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import Statistics from "../Statistics";
import TempWind from "../../assets/temp-wind.svg";
import TempHumidity from "../../assets/temp-humidity.svg";
import TempCloud from "../../assets/clouds.svg";
import { StatisticsContainer } from "../Statistics/style";

const TemperatureNow = () => {
  const climateData = useContext(GlobalContext);

  return (
    <TemperatureNowContainer>
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
                {climateData.weather[0].description}
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
              StaticsIcon={TempWind}
              StaticsTitle={"Vento"}
              StaticsInfo={climateData.wind.speed}
              StaticsType={"hm/h"}
            />
            <Statistics
              StaticsIcon={TempHumidity}
              StaticsTitle={"Umidade"}
              StaticsInfo={climateData.main.humidity}
              StaticsType={"%"}
            />
            <Statistics
              StaticsIcon={TempCloud}
              StaticsTitle={"Nuvens"}
              StaticsInfo={climateData.clouds.all}
              StaticsType={"%"}
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
